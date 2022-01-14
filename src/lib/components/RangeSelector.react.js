import React, {useState} from 'react';
import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {useResizeObserver} from '../utils/Hooks.jsx';

import '../../css/rangeSelector.css';

import * as d3 from 'd3';
import {selection} from 'd3';

function groupData(data, xAttr, yAttr, groupSize) {
    data.sort((a, b) => a[xAttr] - b[xAttr]);
    const grouped = {};
    let groupDivisor = groupSize || 1;

    let increment, groupValue;
    for (const val of data) {
        increment = yAttr ? val[yAttr] : 1;
        groupValue = Math.trunc(val[xAttr] / groupDivisor);
        grouped[groupValue] = grouped[groupValue]
            ? grouped[groupValue] + increment
            : increment;
    }
    const groupedData = Object.entries(grouped).map(([k, v]) => {
        return {
            [xAttr]: k * groupSize,
            max: v,
            min: 0,
        };
    });
    return groupedData;
}

/**
 * RangeSelector component using d3 and hooks
 */
const RangeSelector = ({
    id,
    setProps,
    data,
    selected,
    margin,
    isDate,
    yLines,
    selectSingle,
    group,
    groupSize,
}) => {
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    const dimensions = useResizeObserver(wrapperRef);
    const [selectionRange, setSelectionRange] = useState();

    const setSelection = setProps
        ? (s) => setProps({selected: s})
        : setSelectionRange;
    const selection = setProps ? selected : selectionRange;

    useEffect(() => {
        if (!data || !svgRef.current || !dimensions) {
            return;
        }

        let xAttr = 'x';
        let xScale = null;
        let axisExtra = data[1][xAttr] - data[0][xAttr];

        let groupedData = data;
        if (group) {
            axisExtra = groupSize || 1;
            groupedData = groupData(data, xAttr, null, axisExtra);
            console.log(groupedData);
        }

        if (isDate) {
            groupedData.map((d) => (d.date = Date.parse(d.x)));
            console.log(data);
            xAttr = 'date';
            axisExtra = groupedData[1][xAttr] - groupedData[0][xAttr];
            xScale = d3
                .scaleTime()
                .domain([
                    d3.min(data, (d) => d[xAttr]),
                    d3.max(data, (d) => d[xAttr]) + axisExtra,
                ])
                .nice()
                .range([margin.left, dimensions.width - margin.right]);
        } else {
            xScale = d3
                .scaleLinear()
                .domain([
                    d3.min(data, (d) => d[xAttr]),
                    d3.max(data, (d) => d[xAttr]) + axisExtra,
                ])
                .nice()
                .range([margin.left, dimensions.width - margin.right]);
        }

        const svg = d3.select(svgRef.current);

        const pointsG = svg.select('g.bp3-range-selector');

        // Chart properties
        const transitionDuration = 1000;
        const [minRadius, maxRadius] = [1, 50];

        // Scales
        let yDomainMin = d3.min(groupedData, (d) => d.min);
        let yDomainMax = d3.max(groupedData, (d) => d.max);
        if (yLines.length) {
            yDomainMin = Math.min(yDomainMin, d3.min(yLines));
            yDomainMax = Math.max(yDomainMin, d3.max(yLines));
        }

        const barWidth =
            (xScale(groupedData[0][xAttr] + axisExtra) -
                xScale(groupedData[0][xAttr])) *
            1.02;
        const yScale = d3
            .scaleLinear()
            .domain([yDomainMin, yDomainMax])
            .range([dimensions.height - margin.bottom, margin.top]);

        svg.selectAll('g.x-axis').remove();
        svg.selectAll('g.y-axis').remove();

        svg.append('g')
            // .enter()
            .attr('class', 'x-axis')
            .attr(
                'transform',
                'translate(0,' + (dimensions.height - margin.bottom) + ')'
            )
            .call(d3.axisBottom(xScale));

        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', 'translate(' + margin.left + ',0)')
            .call(d3.axisLeft(yScale).tickValues(yLines));

        const bars = pointsG.selectAll('rect').data(groupedData, (d) => d.id);

        bars.exit().remove();

        bars.transition()
            // .duration(transitionDuration)
            .attr('x', (d) => xScale(d[xAttr]))
            .attr('y', (d) => yScale(d.max))
            .attr('width', barWidth)
            .attr('height', (d) => yScale(d.min) - yScale(d.max));

        bars.enter()
            .append('rect')
            .attr('class', 'bp3-bar')
            .attr('width', barWidth)
            .attr('x', (d) => xScale(d[xAttr]))
            .attr('y', (d) => yScale(d.max))
            .attr('height', (d) => yScale(d.min) - yScale(d.max))
            .attr('fill', '#424853')
            .attr('opacity', 0.9);

        const brush = d3
            .brushX()
            .extent([
                [margin.left, margin.top],
                [
                    dimensions.width - margin.right,
                    dimensions.height - margin.bottom,
                ],
            ])
            .on('start brush end', brushed);

        svg.selectAll('g.selector').remove();

        svg.append('g').attr('class', 'selector').call(brush);
        if (selection) {
            console.log(selection);
            const brushLocation = [
                selection[0],
                selection[selection.length - 1] + axisExtra,
            ].map(xScale);
            svg.select('g.selector').call(brush.move, brushLocation);
        }

        if (selectSingle) {
            svg.select('g.selector').call((g) =>
                g
                    .select('.overlay')
                    .datum({type: 'selection'})
                    .on('mousedown touchstart', beforebrushstarted)
            );

            // Hide the resize handles
            svg.select('g.selector').selectAll('.handle').remove();
        }
        function beforebrushstarted(event) {
            console.log('beforebrushstarted');
            //   if (selected) {
            //       console.log('reselecting selected');
            //       const [x0, x1] = selected[0], selected[-1]
            //   }
            const dx = barWidth; // Use a fixed width when recentering.
            const [[cx]] = d3.pointers(event);
            let [x0, x1] = [cx - dx / 2, cx + dx / 2];
            const [X0, X1] = xScale.range();
            d3.select(this.parentNode).call(
                brush.move,
                x1 > X1 ? [X1 - dx, X1] : x0 < X0 ? [X0, X0 + dx] : [x0, x1]
            );
        }

        function brushed(event) {
            const selection = event.selection;
            if (selection === null) {
                points.attr('stroke', null);
            } else {
                const [x0, x1] = selection.map((d) =>
                    xScale.invert(d - barWidth / 2)
                );

                let x2 = x1;
                if (selectSingle && isDate) {
                    x2 = new Date(x0.getTime() + axisExtra);
                } else if (selectSingle) {
                    x2 = x0 + axisExtra;
                }
                const selected = pointsG
                    .selectAll('rect')
                    .filter((d) => x0 <= d[xAttr] && d[xAttr] < x2);
                const selectedX = selected.data().map((d) => d.x);
                setSelection(selectedX);
                pointsG.selectAll('rect').classed('selected', false);
                selected.classed('selected', true);
            }
        }
    }, [data, dimensions]);

    return (
        <div
            id={id}
            ref={wrapperRef}
            style={{width: '100%', height: '100%', margin: '0 auto'}}
        >
            <svg ref={svgRef} style={{width: '100%', height: '100%'}}>
                <g className={'bp3-range-selector'} />
            </svg>
        </div>
    );
};

export default RangeSelector;

RangeSelector.defaultProps = {
    margin: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 40,
    },
    isDate: true,
    yLines: [],
    selectSingle: true,
    group: false,
    groupSize: 1,
};

RangeSelector.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /** Chart width */
    width: PropTypes.number,

    /** Chart height */
    height: PropTypes.number,

    /** Data */
    data: PropTypes.array,

    /** Selected datum (use in point click callbacks) */
    selected: PropTypes.array,

    /**
     * Margin to use around chart
     */
    margin: PropTypes.object,

    /**
     * Whether to cast the data x values as a date
     */
    isDate: PropTypes.bool,

    /**
     * markings to add on y-axis
     */
    yLines: PropTypes.array,

    /**
     * Flag whether to allow only selection of a single bar in the chart
     */
    selectSingle: PropTypes.bool,

    /**
     * Flag whether data should be aggregated and presented as a count.
     * Currently not implemented
     */
    group: PropTypes.bool,

    /**
     * For grouped data, the size of the grouping
     */
    groupSize: PropTypes.number,
};
