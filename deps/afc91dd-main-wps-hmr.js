webpackHotUpdatedash_blueprint("main",{

/***/ "./src/lib/utils/handleRowClick.js":
/*!*****************************************!*\
  !*** ./src/lib/utils/handleRowClick.js ***!
  \*****************************************/
/*! exports provided: handleRowClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRowClick", function() { return handleRowClick; });
function handleRowClick(key, event, orderedKeys) {
  // TODO Handle these in such a way as to prevent text selection when holding shift
  event.preventDefault();
  var setProps = this.props.setProps ? this.props.setProps : this.setState;
  var selection = this.props.setProps ? this.props.selection : this.state.selection;
  var row_click = this.props.setProps ? this.props.row_click : this.state.row_click;
  console.log(event);
  console.log(event.shiftKey);

  if (this.props.selectable) {
    // Handle selection of multiple rows using shift or meta keys
    // Setting row_click here
    if (event.shiftKey && selection) {
      // Add range to selection
      var rangeStart = orderedKeys.indexOf(this.props.row_click);
      var rangeEnd = orderedKeys.indexOf(key) + 1;

      if (rangeStart >= rangeEnd) {
        var tempRangeStart = rangeStart;
        rangeStart = rangeEnd - 1;
        rangeEnd = tempRangeStart;
      } else {
        rangeStart = rangeStart + 1;
      }

      var keys = orderedKeys.slice(rangeStart, rangeEnd).filter(function (key) {
        return selection.indexOf(key) === -1;
      });
      console.log(keys);
      console.log(orderedKeys);
      setProps({
        selection: selection.concat(keys)
      });
      setProps({
        row_click: key
      });
    } else if (event.metaKey) {
      if (selection.includes(key)) {
        // re-renders only de-selected
        setProps({
          selection: selection.filter(function (item) {
            return item !== key;
          })
        });
      } else {
        setProps({
          selection: selection.concat([key])
        });
        setProps({
          row_click: key
        });
      }
    } else {
      setProps({
        selection: [key]
      });
      setProps({
        row_click: key
      });
    }

    console.log(key);
    console.log(selection);
    console.log(row_click);
    console.log(event);
  }
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvdXRpbHMvaGFuZGxlUm93Q2xpY2suanMiXSwibmFtZXMiOlsiaGFuZGxlUm93Q2xpY2siLCJrZXkiLCJldmVudCIsIm9yZGVyZWRLZXlzIiwicHJldmVudERlZmF1bHQiLCJzZXRQcm9wcyIsInByb3BzIiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJzdGF0ZSIsInJvd19jbGljayIsImNvbnNvbGUiLCJsb2ciLCJzaGlmdEtleSIsInNlbGVjdGFibGUiLCJyYW5nZVN0YXJ0IiwiaW5kZXhPZiIsInJhbmdlRW5kIiwidGVtcFJhbmdlU3RhcnQiLCJrZXlzIiwic2xpY2UiLCJmaWx0ZXIiLCJjb25jYXQiLCJtZXRhS2V5IiwiaW5jbHVkZXMiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCQyxLQUE3QixFQUFvQ0MsV0FBcEMsRUFBaUQ7QUFDcEQ7QUFDQUQsT0FBSyxDQUFDRSxjQUFOO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsUUFBWCxHQUFzQixLQUFLQyxLQUFMLENBQVdELFFBQWpDLEdBQTRDLEtBQUtFLFFBQWxFO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLEtBQUtGLEtBQUwsQ0FBV0QsUUFBWCxHQUFzQixLQUFLQyxLQUFMLENBQVdFLFNBQWpDLEdBQTZDLEtBQUtDLEtBQUwsQ0FBV0QsU0FBMUU7QUFDQSxNQUFNRSxTQUFTLEdBQUcsS0FBS0osS0FBTCxDQUFXRCxRQUFYLEdBQXNCLEtBQUtDLEtBQUwsQ0FBV0ksU0FBakMsR0FBNkMsS0FBS0QsS0FBTCxDQUFXQyxTQUExRTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBSyxDQUFDVyxRQUFsQjs7QUFFQSxNQUFJLEtBQUtQLEtBQUwsQ0FBV1EsVUFBZixFQUEyQjtBQUN2QjtBQUNBO0FBQ0EsUUFBSVosS0FBSyxDQUFDVyxRQUFOLElBQWtCTCxTQUF0QixFQUFpQztBQUM3QjtBQUNBLFVBQUlPLFVBQVUsR0FBR1osV0FBVyxDQUFDYSxPQUFaLENBQW9CLEtBQUtWLEtBQUwsQ0FBV0ksU0FBL0IsQ0FBakI7QUFDQSxVQUFJTyxRQUFRLEdBQUdkLFdBQVcsQ0FBQ2EsT0FBWixDQUFvQmYsR0FBcEIsSUFBMkIsQ0FBMUM7O0FBQ0EsVUFBSWMsVUFBVSxJQUFJRSxRQUFsQixFQUE0QjtBQUN4QixZQUFJQyxjQUFjLEdBQUdILFVBQXJCO0FBQ0FBLGtCQUFVLEdBQUdFLFFBQVEsR0FBRyxDQUF4QjtBQUNBQSxnQkFBUSxHQUFHQyxjQUFYO0FBQ0gsT0FKRCxNQUlPO0FBQ0hILGtCQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUExQjtBQUNIOztBQUNELFVBQUlJLElBQUksR0FBR2hCLFdBQVcsQ0FBQ2lCLEtBQVosQ0FBa0JMLFVBQWxCLEVBQThCRSxRQUE5QixFQUF3Q0ksTUFBeEMsQ0FBK0MsVUFBQ3BCLEdBQUQ7QUFBQSxlQUFTTyxTQUFTLENBQUNRLE9BQVYsQ0FBa0JmLEdBQWxCLE1BQTJCLENBQUMsQ0FBckM7QUFBQSxPQUEvQyxDQUFYO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaO0FBQ0FSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxXQUFaO0FBQ0FFLGNBQVEsQ0FBQztBQUFDRyxpQkFBUyxFQUFFQSxTQUFTLENBQUNjLE1BQVYsQ0FBaUJILElBQWpCO0FBQVosT0FBRCxDQUFSO0FBQ0FkLGNBQVEsQ0FBQztBQUFDSyxpQkFBUyxFQUFFVDtBQUFaLE9BQUQsQ0FBUjtBQUNILEtBaEJELE1BZ0JPLElBQUlDLEtBQUssQ0FBQ3FCLE9BQVYsRUFBbUI7QUFDdEIsVUFBSWYsU0FBUyxDQUFDZ0IsUUFBVixDQUFtQnZCLEdBQW5CLENBQUosRUFBNkI7QUFDekI7QUFDQUksZ0JBQVEsQ0FBQztBQUNMRyxtQkFBUyxFQUFFQSxTQUFTLENBQUNhLE1BQVYsQ0FDUCxVQUFDSSxJQUFEO0FBQUEsbUJBQVVBLElBQUksS0FBS3hCLEdBQW5CO0FBQUEsV0FETztBQUROLFNBQUQsQ0FBUjtBQUtILE9BUEQsTUFPTztBQUNISSxnQkFBUSxDQUFDO0FBQ0xHLG1CQUFTLEVBQUVBLFNBQVMsQ0FBQ2MsTUFBVixDQUFpQixDQUFDckIsR0FBRCxDQUFqQjtBQUROLFNBQUQsQ0FBUjtBQUdBSSxnQkFBUSxDQUFDO0FBQUNLLG1CQUFTLEVBQUVUO0FBQVosU0FBRCxDQUFSO0FBQ0g7QUFDSixLQWRNLE1BY0E7QUFDSEksY0FBUSxDQUFDO0FBQUNHLGlCQUFTLEVBQUUsQ0FBQ1AsR0FBRDtBQUFaLE9BQUQsQ0FBUjtBQUNBSSxjQUFRLENBQUM7QUFBQ0ssaUJBQVMsRUFBRVQ7QUFBWixPQUFELENBQVI7QUFDSDs7QUFDRFUsV0FBTyxDQUFDQyxHQUFSLENBQVlYLEdBQVo7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVo7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDSDtBQUNKLEMiLCJmaWxlIjoiYWZjOTFkZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlUm93Q2xpY2soa2V5LCBldmVudCwgb3JkZXJlZEtleXMpIHtcbiAgICAvLyBUT0RPIEhhbmRsZSB0aGVzZSBpbiBzdWNoIGEgd2F5IGFzIHRvIHByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBob2xkaW5nIHNoaWZ0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXRQcm9wcyA9IHRoaXMucHJvcHMuc2V0UHJvcHMgPyB0aGlzLnByb3BzLnNldFByb3BzIDogdGhpcy5zZXRTdGF0ZTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5zZWxlY3Rpb24gOiB0aGlzLnN0YXRlLnNlbGVjdGlvbjtcbiAgICBjb25zdCByb3dfY2xpY2sgPSB0aGlzLnByb3BzLnNldFByb3BzID8gdGhpcy5wcm9wcy5yb3dfY2xpY2sgOiB0aGlzLnN0YXRlLnJvd19jbGljaztcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQuc2hpZnRLZXkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAvLyBIYW5kbGUgc2VsZWN0aW9uIG9mIG11bHRpcGxlIHJvd3MgdXNpbmcgc2hpZnQgb3IgbWV0YSBrZXlzXG4gICAgICAgIC8vIFNldHRpbmcgcm93X2NsaWNrIGhlcmVcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gQWRkIHJhbmdlIHRvIHNlbGVjdGlvblxuICAgICAgICAgICAgbGV0IHJhbmdlU3RhcnQgPSBvcmRlcmVkS2V5cy5pbmRleE9mKHRoaXMucHJvcHMucm93X2NsaWNrKTtcbiAgICAgICAgICAgIGxldCByYW5nZUVuZCA9IG9yZGVyZWRLZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+PSByYW5nZUVuZCkge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wUmFuZ2VTdGFydCA9IHJhbmdlU3RhcnQ7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IHJhbmdlRW5kIC0gMTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHRlbXBSYW5nZVN0YXJ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gcmFuZ2VTdGFydCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQga2V5cyA9IG9yZGVyZWRLZXlzLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKS5maWx0ZXIoKGtleSkgPT4gc2VsZWN0aW9uLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcmVkS2V5cyk7XG4gICAgICAgICAgICBzZXRQcm9wcyh7c2VsZWN0aW9uOiBzZWxlY3Rpb24uY29uY2F0KGtleXMpfSk7XG4gICAgICAgICAgICBzZXRQcm9wcyh7cm93X2NsaWNrOiBrZXl9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyByZS1yZW5kZXJzIG9ubHkgZGUtc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogc2VsZWN0aW9uLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtICE9PSBrZXlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHNlbGVjdGlvbi5jb25jYXQoW2tleV0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFByb3BzKHtyb3dfY2xpY2s6IGtleX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UHJvcHMoe3NlbGVjdGlvbjogW2tleV19KTtcbiAgICAgICAgICAgIHNldFByb3BzKHtyb3dfY2xpY2s6IGtleX0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvd19jbGljayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9