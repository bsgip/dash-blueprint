
import { MenuItem } from "@blueprintjs/core";

function escapeRegExpChars(text) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}


export function highlightText(text, query) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

/**
 * Determines whether the `item` matches the `query string
 * @param {PropTypes.string} query 
 * @param {PropTypes.object} item 
 * @param {PropTypes.number} _index 
 * @param {PropTypes.bool} exactMatch 
 * @returns {PropTypes.bool} 
 */
 export function filterItemByQueryString(query, item, _index, exactMatch) {
    const normalizedName = item.label ? item.label.toString().toLowerCase() : "";
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
        return normalizedTitle === normalizedQuery;
    } else {
        return `${item.value}. ${normalizedName} ${item.tag}`.indexOf(normalizedQuery) >= 0;
    }
};


/**
 * 
 * @param {PropType.object} item item with `label`, `value` and optional `tag`
 * @param {*} param1 
 * @returns {MenuItem}
 */
export function renderSelectItem(item, { handleClick, modifiers, query }) {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${item.label}`;
    console.log(modifiers, item);
    return (
        <MenuItem
            key={item.value}
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={item.tag}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    );
};