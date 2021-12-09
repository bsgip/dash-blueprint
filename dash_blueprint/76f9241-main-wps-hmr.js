webpackHotUpdatedash_blueprint("main",{

/***/ "./src/lib/components/Dialog.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Dialog.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["setProps", "children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Blueprint Dialog box for Dash
 * 
 * https://blueprintjs.com/docs/#core/components/dialog.dialog
 * 
 * @param props
 * @returns {*}
 * @constructor
 */

var Dialog = function Dialog(props) {
  var setProps = props.setProps,
      children = props.children,
      dialogProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], dialogProps, children);
};

Dialog.defaultProps = {
  autoFocus: true,
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  enforceFocus: true,
  isCloseButtonShown: true,
  isOpen: true,
  lazy: true,
  shouldReturnFocusOnClose: true,
  transitionDuration: 300,
  usePortal: true
};
Dialog.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  'id': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  'children': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  'key': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the overlay should acquire application focus when it first opens.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * CSS class names to apply to backdrop element.
   */
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * HTML props for the backdrop element.
   */
  backdropProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Whether pressing the esc key should invoke onClose.
   */
  canEscapeKeyClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke onClose.
   */
  canOutsideClickClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the overlay should prevent focus from leaving itself. That is, if the user attempts to focus an element outside the overlay and this prop is enabled, then the overlay will immediately bring focus back to itself. If you are nesting overlay components, either disable this prop on the "outermost" overlays or mark the nested ones usePortal={false}.
   */
  enforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Name of a Blueprint UI icon to render in the dialog's header. Note that the header will only be rendered if title is provided.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether to show the close button in the dialog's header. Note that the header will only be rendered if title is provided.
   */
  isCloseButtonShown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.
   */
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
   * If true and usePortal={true}, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.
   */
  lazy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Space-delimited string of class names applied to the Portal element if usePortal={true}.
   */
  portalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the application should return focus to the last active element in the document after this overlay closes.
   */
  shouldReturnFocusOnClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * CSS styles to apply to the dialog.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Title of the dialog. If provided, an element with Classes.DIALOG_HEADER will be rendered inside the dialog before any children elements.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates how long (in milliseconds) the overlay's enter/leave transition takes. This is used by React CSSTransition to know when a transition completes and must match the duration of the animation in CSS. Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Name of the transition for internal CSSTransition. Providing your own name here will require defining new CSS transition properties.
   */
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the overlay should be wrapped in a Portal, which renders its contents in a new element attached to portalContainer prop.
   * 
   * This prop essentially determines which element is covered by the backdrop: if false, then only its parent is covered; otherwise, the entire page is covered (because the parent of the Portal is the <body> itself).
   * 
   * Set this prop to false on nested overlays (such as Dialog or Popover) to ensure that they are rendered above their parents.
   */
  usePortal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2JsdWVwcmludC8uL3NyYy9saWIvY29tcG9uZW50cy9EaWFsb2cucmVhY3QuanMiXSwibmFtZXMiOlsiRGlhbG9nIiwicHJvcHMiLCJzZXRQcm9wcyIsImNoaWxkcmVuIiwiZGlhbG9nUHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJhdXRvRm9jdXMiLCJjYW5Fc2NhcGVLZXlDbG9zZSIsImNhbk91dHNpZGVDbGlja0Nsb3NlIiwiZW5mb3JjZUZvY3VzIiwiaXNDbG9zZUJ1dHRvblNob3duIiwiaXNPcGVuIiwibGF6eSIsInNob3VsZFJldHVybkZvY3VzT25DbG9zZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInVzZVBvcnRhbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJib29sIiwiYmFja2Ryb3BDbGFzc05hbWUiLCJiYWNrZHJvcFByb3BzIiwib2JqZWN0IiwiY2xhc3NOYW1lIiwiaWNvbiIsImlzUmVxdWlyZWQiLCJwb3J0YWxDbGFzc05hbWUiLCJzdHlsZSIsInRpdGxlIiwibnVtYmVyIiwidHJhbnNpdGlvbk5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLE1BQU9DLFFBQVAsR0FBNkNELEtBQTdDLENBQU9DLFFBQVA7QUFBQSxNQUFpQkMsUUFBakIsR0FBNkNGLEtBQTdDLENBQWlCRSxRQUFqQjtBQUFBLE1BQThCQyxXQUE5Qiw0QkFBNkNILEtBQTdDOztBQUNBLHNCQUFPLDJEQUFDLHdEQUFELEVBQWNHLFdBQWQsRUFDRkQsUUFERSxDQUFQO0FBS0gsQ0FQRDs7QUFTQUgsTUFBTSxDQUFDSyxZQUFQLEdBQXNCO0FBQ2xCQyxXQUFTLEVBQUUsSUFETztBQUVsQkMsbUJBQWlCLEVBQUUsSUFGRDtBQUdsQkMsc0JBQW9CLEVBQUUsSUFISjtBQUlsQkMsY0FBWSxFQUFFLElBSkk7QUFLbEJDLG9CQUFrQixFQUFFLElBTEY7QUFNbEJDLFFBQU0sRUFBRSxJQU5VO0FBT2xCQyxNQUFJLEVBQUUsSUFQWTtBQVFsQkMsMEJBQXdCLEVBQUUsSUFSUjtBQVNsQkMsb0JBQWtCLEVBQUUsR0FURjtBQVVsQkMsV0FBUyxFQUFFO0FBVk8sQ0FBdEI7QUFhQWYsTUFBTSxDQUFDZ0IsU0FBUCxHQUFtQjtBQUNmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxRQUFNQyxpREFBUyxDQUFDQyxNQU5EOztBQVFmO0FBQ0o7QUFDQTtBQUNJLGNBQVlELGlEQUFTLENBQUNFLElBWFA7O0FBYWY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLFNBQU9GLGlEQUFTLENBQUNDLE1BbEJGOztBQW9CZjtBQUNKO0FBQ0E7QUFDSSxZQUFVRCxpREFBUyxDQUFDQyxNQXZCTDs7QUF5QmY7QUFDSjtBQUNBO0FBQ0laLFdBQVMsRUFBRVcsaURBQVMsQ0FBQ0csSUE1Qk47O0FBOEJmO0FBQ0o7QUFDQTtBQUNJQyxtQkFBaUIsRUFBRUosaURBQVMsQ0FBQ0MsTUFqQ2Q7O0FBbUNmO0FBQ0o7QUFDQTtBQUNJSSxlQUFhLEVBQUVMLGlEQUFTLENBQUNNLE1BdENWOztBQXdDZjtBQUNKO0FBQ0E7QUFDSWhCLG1CQUFpQixFQUFFVSxpREFBUyxDQUFDRyxJQTNDZDs7QUE2Q2Y7QUFDSjtBQUNBO0FBQ0laLHNCQUFvQixFQUFFUyxpREFBUyxDQUFDRyxJQWhEakI7O0FBa0RmO0FBQ0o7QUFDQTtBQUNJSSxXQUFTLEVBQUVQLGlEQUFTLENBQUNDLE1BckROOztBQXVEZjtBQUNKO0FBQ0E7QUFDSVQsY0FBWSxFQUFFUSxpREFBUyxDQUFDRyxJQTFEVDs7QUE0RGY7QUFDSjtBQUNBO0FBQ0lLLE1BQUksRUFBRVIsaURBQVMsQ0FBQ0MsTUEvREQ7O0FBaUVmO0FBQ0o7QUFDQTtBQUNJUixvQkFBa0IsRUFBRU8saURBQVMsQ0FBQ0csSUFwRWY7O0FBc0VmO0FBQ0o7QUFDQTtBQUNJVCxRQUFNLEVBQUVNLGlEQUFTLENBQUNHLElBQVYsQ0FBZU0sVUF6RVI7O0FBMkVmO0FBQ0o7QUFDQTtBQUNJZCxNQUFJLEVBQUVLLGlEQUFTLENBQUNHLElBOUVEOztBQWdGZjtBQUNKO0FBQ0E7QUFDSU8saUJBQWUsRUFBRVYsaURBQVMsQ0FBQ0MsTUFuRlo7O0FBcUZmO0FBQ0o7QUFDQTtBQUNLTCwwQkFBd0IsRUFBRUksaURBQVMsQ0FBQ0csSUF4RnRCOztBQTBGZjtBQUNKO0FBQ0E7QUFDSVEsT0FBSyxFQUFFWCxpREFBUyxDQUFDTSxNQTdGRjs7QUErRmY7QUFDSjtBQUNBO0FBQ0lNLE9BQUssRUFBRVosaURBQVMsQ0FBQ0MsTUFsR0Y7O0FBb0dmO0FBQ0o7QUFDQTtBQUNLSixvQkFBa0IsRUFBRUcsaURBQVMsQ0FBQ2EsTUF2R2hCOztBQXlHZDtBQUNMO0FBQ0E7QUFDS0MsZ0JBQWMsRUFBRWQsaURBQVMsQ0FBQ0MsTUE1R1o7O0FBOEdkO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0tILFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0c7QUFySFAsQ0FBbkI7QUF5SGVwQixxRUFBZixFIiwiZmlsZSI6Ijc2ZjkyNDEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBEaWFsb2cgYXMgQlBEaWFsb2cgfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIjtcblxuLyoqXG4gKiBCbHVlcHJpbnQgRGlhbG9nIGJveCBmb3IgRGFzaFxuICogXG4gKiBodHRwczovL2JsdWVwcmludGpzLmNvbS9kb2NzLyNjb3JlL2NvbXBvbmVudHMvZGlhbG9nLmRpYWxvZ1xuICogXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuY29uc3QgRGlhbG9nID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge3NldFByb3BzLCBjaGlsZHJlbiwgLi4uZGlhbG9nUHJvcHN9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxCUERpYWxvZyB7Li4uZGlhbG9nUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9CUERpYWxvZz5cblxuXG59O1xuXG5EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICBjYW5Fc2NhcGVLZXlDbG9zZTogdHJ1ZSxcbiAgICBjYW5PdXRzaWRlQ2xpY2tDbG9zZTogdHJ1ZSxcbiAgICBlbmZvcmNlRm9jdXM6IHRydWUsXG4gICAgaXNDbG9zZUJ1dHRvblNob3duOiB0cnVlLFxuICAgIGlzT3BlbjogdHJ1ZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIHNob3VsZFJldHVybkZvY3VzT25DbG9zZTogdHJ1ZSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IDMwMCxcbiAgICB1c2VQb3J0YWw6IHRydWVcbn07XG5cbkRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoaXMgY29tcG9uZW50LCB1c2VkIHRvIGlkZW50aWZ5IGRhc2ggY29tcG9uZW50c1xuICAgICAqIGluIGNhbGxiYWNrcy4gVGhlIElEIG5lZWRzIHRvIGJlIHVuaXF1ZSBhY3Jvc3MgYWxsIG9mIHRoZVxuICAgICAqIGNvbXBvbmVudHMgaW4gYW4gYXBwLlxuICAgICAqL1xuICAgICdpZCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICAnY2hpbGRyZW4nOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb21wb25lbnQsIHVzZWQgdG8gaW1wcm92ZVxuICAgICAqIHBlcmZvcm1hbmNlIGJ5IFJlYWN0LmpzIHdoaWxlIHJlbmRlcmluZyBjb21wb25lbnRzXG4gICAgICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9saXN0cy1hbmQta2V5cy5odG1sIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICAna2V5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgd2lsZGNhcmQgYXJpYSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICAnYXJpYS0qJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIGFjcXVpcmUgYXBwbGljYXRpb24gZm9jdXMgd2hlbiBpdCBmaXJzdCBvcGVucy5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ1NTIGNsYXNzIG5hbWVzIHRvIGFwcGx5IHRvIGJhY2tkcm9wIGVsZW1lbnQuXG4gICAgICovXG4gICAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBIVE1MIHByb3BzIGZvciB0aGUgYmFja2Ryb3AgZWxlbWVudC5cbiAgICAgKi9cbiAgICBiYWNrZHJvcFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBwcmVzc2luZyB0aGUgZXNjIGtleSBzaG91bGQgaW52b2tlIG9uQ2xvc2UuXG4gICAgICovXG4gICAgY2FuRXNjYXBlS2V5Q2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBjbGlja2luZyBvdXRzaWRlIHRoZSBvdmVybGF5IGVsZW1lbnQgKGVpdGhlciBvbiBiYWNrZHJvcCB3aGVuIHByZXNlbnQgb3Igb24gZG9jdW1lbnQpIHNob3VsZCBpbnZva2Ugb25DbG9zZS5cbiAgICAgKi9cbiAgICBjYW5PdXRzaWRlQ2xpY2tDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBIHNwYWNlLWRlbGltaXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzIHRvIHBhc3MgYWxvbmcgdG8gYSBjaGlsZCBlbGVtZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIGl0c2VsZi4gVGhhdCBpcywgaWYgdGhlIHVzZXIgYXR0ZW1wdHMgdG8gZm9jdXMgYW4gZWxlbWVudCBvdXRzaWRlIHRoZSBvdmVybGF5IGFuZCB0aGlzIHByb3AgaXMgZW5hYmxlZCwgdGhlbiB0aGUgb3ZlcmxheSB3aWxsIGltbWVkaWF0ZWx5IGJyaW5nIGZvY3VzIGJhY2sgdG8gaXRzZWxmLiBJZiB5b3UgYXJlIG5lc3Rpbmcgb3ZlcmxheSBjb21wb25lbnRzLCBlaXRoZXIgZGlzYWJsZSB0aGlzIHByb3Agb24gdGhlIFwib3V0ZXJtb3N0XCIgb3ZlcmxheXMgb3IgbWFyayB0aGUgbmVzdGVkIG9uZXMgdXNlUG9ydGFsPXtmYWxzZX0uXG4gICAgICovXG4gICAgZW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgYSBCbHVlcHJpbnQgVUkgaWNvbiB0byByZW5kZXIgaW4gdGhlIGRpYWxvZydzIGhlYWRlci4gTm90ZSB0aGF0IHRoZSBoZWFkZXIgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIGlmIHRpdGxlIGlzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIGNsb3NlIGJ1dHRvbiBpbiB0aGUgZGlhbG9nJ3MgaGVhZGVyLiBOb3RlIHRoYXQgdGhlIGhlYWRlciB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgaWYgdGl0bGUgaXMgcHJvdmlkZWQuXG4gICAgICovXG4gICAgaXNDbG9zZUJ1dHRvblNob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIG92ZXJsYXkgYW5kIGl0cyBjaGlsZHJlbi4gVGhpcyBwcm9wIGlzIHJlcXVpcmVkIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBpcyBjb250cm9sbGVkLlxuICAgICAqL1xuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUgYW5kIHVzZVBvcnRhbD17dHJ1ZX0sIHRoZSBQb3J0YWwgY29udGFpbmluZyB0aGUgY2hpbGRyZW4gaXMgY3JlYXRlZCBhbmQgYXR0YWNoZWQgdG8gdGhlIERPTSB3aGVuIHRoZSBvdmVybGF5IGlzIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWU7IG90aGVyd2lzZSB0aGlzIGhhcHBlbnMgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cy4gTGF6eSBtb3VudGluZyBwcm92aWRlcyBub3RpY2VhYmxlIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50cyBpZiB5b3UgaGF2ZSBsb3RzIG9mIG92ZXJsYXlzIGF0IG9uY2UsIHN1Y2ggYXMgb24gZWFjaCByb3cgb2YgYSB0YWJsZS5cbiAgICAgKi9cbiAgICBsYXp5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNwYWNlLWRlbGltaXRlZCBzdHJpbmcgb2YgY2xhc3MgbmFtZXMgYXBwbGllZCB0byB0aGUgUG9ydGFsIGVsZW1lbnQgaWYgdXNlUG9ydGFsPXt0cnVlfS5cbiAgICAgKi9cbiAgICBwb3J0YWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBzaG91bGQgcmV0dXJuIGZvY3VzIHRvIHRoZSBsYXN0IGFjdGl2ZSBlbGVtZW50IGluIHRoZSBkb2N1bWVudCBhZnRlciB0aGlzIG92ZXJsYXkgY2xvc2VzLlxuICAgICAqL1xuICAgICBzaG91bGRSZXR1cm5Gb2N1c09uQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZGlhbG9nLlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIGRpYWxvZy4gSWYgcHJvdmlkZWQsIGFuIGVsZW1lbnQgd2l0aCBDbGFzc2VzLkRJQUxPR19IRUFERVIgd2lsbCBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGRpYWxvZyBiZWZvcmUgYW55IGNoaWxkcmVuIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGhvdyBsb25nIChpbiBtaWxsaXNlY29uZHMpIHRoZSBvdmVybGF5J3MgZW50ZXIvbGVhdmUgdHJhbnNpdGlvbiB0YWtlcy4gVGhpcyBpcyB1c2VkIGJ5IFJlYWN0IENTU1RyYW5zaXRpb24gdG8ga25vdyB3aGVuIGEgdHJhbnNpdGlvbiBjb21wbGV0ZXMgYW5kIG11c3QgbWF0Y2ggdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gaW4gQ1NTLiBPbmx5IHNldCB0aGlzIHByb3AgaWYgeW91IG92ZXJyaWRlIEJsdWVwcmludCdzIGRlZmF1bHQgdHJhbnNpdGlvbnMgd2l0aCBuZXcgdHJhbnNpdGlvbnMgb2YgYSBkaWZmZXJlbnQgbGVuZ3RoLlxuICAgICAqL1xuICAgICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAgLyoqXG4gICAgICAqIE5hbWUgb2YgdGhlIHRyYW5zaXRpb24gZm9yIGludGVybmFsIENTU1RyYW5zaXRpb24uIFByb3ZpZGluZyB5b3VyIG93biBuYW1lIGhlcmUgd2lsbCByZXF1aXJlIGRlZmluaW5nIG5ldyBDU1MgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzLlxuICAgICAgKi9cbiAgICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAgLyoqXG4gICAgICAqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYSBQb3J0YWwsIHdoaWNoIHJlbmRlcnMgaXRzIGNvbnRlbnRzIGluIGEgbmV3IGVsZW1lbnQgYXR0YWNoZWQgdG8gcG9ydGFsQ29udGFpbmVyIHByb3AuXG4gICAgICAqIFxuICAgICAgKiBUaGlzIHByb3AgZXNzZW50aWFsbHkgZGV0ZXJtaW5lcyB3aGljaCBlbGVtZW50IGlzIGNvdmVyZWQgYnkgdGhlIGJhY2tkcm9wOiBpZiBmYWxzZSwgdGhlbiBvbmx5IGl0cyBwYXJlbnQgaXMgY292ZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZW50aXJlIHBhZ2UgaXMgY292ZXJlZCAoYmVjYXVzZSB0aGUgcGFyZW50IG9mIHRoZSBQb3J0YWwgaXMgdGhlIDxib2R5PiBpdHNlbGYpLlxuICAgICAgKiBcbiAgICAgICogU2V0IHRoaXMgcHJvcCB0byBmYWxzZSBvbiBuZXN0ZWQgb3ZlcmxheXMgKHN1Y2ggYXMgRGlhbG9nIG9yIFBvcG92ZXIpIHRvIGVuc3VyZSB0aGF0IHRoZXkgYXJlIHJlbmRlcmVkIGFib3ZlIHRoZWlyIHBhcmVudHMuXG4gICAgICAqL1xuICAgICB1c2VQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7Il0sInNvdXJjZVJvb3QiOiIifQ==