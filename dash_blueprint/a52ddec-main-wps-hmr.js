webpackHotUpdatedash_blueprint("main",{

/***/ "./dash_blueprint/blueprint.css":
/*!**************************************!*\
  !*** ./dash_blueprint/blueprint.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./blueprint.css */ "./node_modules/css-loader/dist/cjs.js!./dash_blueprint/blueprint.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js!./blueprint.css */ "./node_modules/css-loader/dist/cjs.js!./dash_blueprint/blueprint.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./blueprint.css */ "./node_modules/css-loader/dist/cjs.js!./dash_blueprint/blueprint.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/@blueprintjs/core/lib/css/blueprint.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./dash_blueprint/blueprint.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dash_blueprint/blueprint.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\nhtml{\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box; }\n\n*,\n*::before,\n*::after{\n  -webkit-box-sizing:inherit;\n          box-sizing:inherit; }\n\nbody{\n  font-size:14px;\n  font-weight:400;\n  letter-spacing:0;\n  line-height:1.28581;\n  text-transform:none;\n  color:#182026;\n  font-family:-apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Icons16\", sans-serif; }\n\np{\n  margin-bottom:10px;\n  margin-top:0; }\n\nsmall{\n  font-size:12px; }\n\nstrong{\n  font-weight:600; }\n\n::-moz-selection{\n  background:rgba(125, 188, 255, 0.6); }\n\n::selection{\n  background:rgba(125, 188, 255, 0.6); }\n.bp3-heading{\n  color:#182026;\n  font-weight:600;\n  margin:0 0 10px;\n  padding:0; }\n  .bp3-dark .bp3-heading{\n    color:#f5f8fa; }\n\nh1.bp3-heading, .bp3-running-text h1{\n  font-size:36px;\n  line-height:40px; }\n\nh2.bp3-heading, .bp3-running-text h2{\n  font-size:28px;\n  line-height:32px; }\n\nh3.bp3-heading, .bp3-running-text h3{\n  font-size:22px;\n  line-height:25px; }\n\nh4.bp3-heading, .bp3-running-text h4{\n  font-size:18px;\n  line-height:21px; }\n\nh5.bp3-heading, .bp3-running-text h5{\n  font-size:16px;\n  line-height:19px; }\n\nh6.bp3-heading, .bp3-running-text h6{\n  font-size:14px;\n  line-height:16px; }\n.bp3-ui-text{\n  font-size:14px;\n  font-weight:400;\n  letter-spacing:0;\n  line-height:1.28581;\n  text-transform:none; }\n\n.bp3-monospace-text{\n  font-family:monospace;\n  text-transform:none; }\n\n.bp3-text-muted{\n  color:#5c7080; }\n  .bp3-dark .bp3-text-muted{\n    color:#a7b6c2; }\n\n.bp3-text-disabled{\n  color:rgba(92, 112, 128, 0.6); }\n  .bp3-dark .bp3-text-disabled{\n    color:rgba(167, 182, 194, 0.6); }\n\n.bp3-text-overflow-ellipsis{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  word-wrap:normal; }\n.bp3-running-text{\n  font-size:14px;\n  line-height:1.5; }\n  .bp3-running-text h1{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h1{\n      color:#f5f8fa; }\n  .bp3-running-text h2{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h2{\n      color:#f5f8fa; }\n  .bp3-running-text h3{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h3{\n      color:#f5f8fa; }\n  .bp3-running-text h4{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h4{\n      color:#f5f8fa; }\n  .bp3-running-text h5{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h5{\n      color:#f5f8fa; }\n  .bp3-running-text h6{\n    color:#182026;\n    font-weight:600;\n    margin-bottom:20px;\n    margin-top:40px; }\n    .bp3-dark .bp3-running-text h6{\n      color:#f5f8fa; }\n  .bp3-running-text hr{\n    border:none;\n    border-bottom:1px solid rgba(16, 22, 26, 0.15);\n    margin:20px 0; }\n    .bp3-dark .bp3-running-text hr{\n      border-color:rgba(255, 255, 255, 0.15); }\n  .bp3-running-text p{\n    margin:0 0 10px;\n    padding:0; }\n\n.bp3-text-large{\n  font-size:16px; }\n\n.bp3-text-small{\n  font-size:12px; }\na{\n  color:#106ba3;\n  text-decoration:none; }\n  a:hover{\n    color:#106ba3;\n    cursor:pointer;\n    text-decoration:underline; }\n  a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{\n    color:inherit; }\n  a code,\n  .bp3-dark a code{\n    color:inherit; }\n  .bp3-dark a,\n  .bp3-dark a:hover{\n    color:#48aff0; }\n    .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,\n    .bp3-dark a:hover .bp3-icon,\n    .bp3-dark a:hover .bp3-icon-standard,\n    .bp3-dark a:hover .bp3-icon-large{\n      color:inherit; }\n.bp3-running-text code, .bp3-code{\n  font-family:monospace;\n  text-transform:none;\n  background:rgba(255, 255, 255, 0.7);\n  border-radius:3px;\n  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);\n          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);\n  color:#5c7080;\n  font-size:smaller;\n  padding:2px 5px; }\n  .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{\n    background:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n    color:#a7b6c2; }\n  .bp3-running-text a > code, a > .bp3-code{\n    color:#137cbd; }\n    .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{\n      color:inherit; }\n\n.bp3-running-text pre, .bp3-code-block{\n  font-family:monospace;\n  text-transform:none;\n  background:rgba(255, 255, 255, 0.7);\n  border-radius:3px;\n  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);\n          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);\n  color:#182026;\n  display:block;\n  font-size:13px;\n  line-height:1.4;\n  margin:10px 0;\n  padding:13px 15px 12px;\n  word-break:break-all;\n  word-wrap:break-word; }\n  .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{\n    background:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n  .bp3-running-text pre > code, .bp3-code-block > code{\n    background:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:inherit;\n    font-size:inherit;\n    padding:0; }\n\n.bp3-running-text kbd, .bp3-key{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  background:#ffffff;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n  color:#5c7080;\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  font-family:inherit;\n  font-size:12px;\n  height:24px;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  line-height:24px;\n  min-width:24px;\n  padding:3px 6px;\n  vertical-align:middle; }\n  .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{\n    margin-right:5px; }\n  .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{\n    background:#394b59;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n    color:#a7b6c2; }\n.bp3-running-text blockquote, .bp3-blockquote{\n  border-left:solid 4px rgba(167, 182, 194, 0.5);\n  margin:0 0 10px;\n  padding:0 20px; }\n  .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{\n    border-color:rgba(115, 134, 148, 0.5); }\n.bp3-running-text ul,\n.bp3-running-text ol, .bp3-list{\n  margin:10px 0;\n  padding-left:30px; }\n  .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){\n    margin-bottom:5px; }\n  .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,\n  .bp3-running-text ul ul,\n  .bp3-running-text ol ul,\n  .bp3-list ul{\n    margin-top:5px; }\n\n.bp3-list-unstyled{\n  list-style:none;\n  margin:0;\n  padding:0; }\n  .bp3-list-unstyled li{\n    padding:0; }\n.bp3-rtl{\n  text-align:right; }\n\n.bp3-dark{\n  color:#f5f8fa; }\n\n:focus{\n  outline:rgba(19, 124, 189, 0.6) auto 2px;\n  outline-offset:2px;\n  -moz-outline-radius:6px; }\n\n.bp3-focus-disabled :focus{\n  outline:none !important; }\n  .bp3-focus-disabled :focus ~ .bp3-control-indicator{\n    outline:none !important; }\n\n.bp3-alert{\n  max-width:400px;\n  padding:20px; }\n\n.bp3-alert-body{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex; }\n  .bp3-alert-body .bp3-icon{\n    font-size:40px;\n    margin-right:20px;\n    margin-top:0; }\n\n.bp3-alert-contents{\n  word-break:break-word; }\n\n.bp3-alert-footer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:reverse;\n      -ms-flex-direction:row-reverse;\n          flex-direction:row-reverse;\n  margin-top:10px; }\n  .bp3-alert-footer .bp3-button{\n    margin-left:10px; }\n.bp3-breadcrumbs{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  cursor:default;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-wrap:wrap;\n      flex-wrap:wrap;\n  height:30px;\n  list-style:none;\n  margin:0;\n  padding:0; }\n  .bp3-breadcrumbs > li{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; }\n    .bp3-breadcrumbs > li::after{\n      background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e\");\n      content:\"\";\n      display:block;\n      height:16px;\n      margin:0 5px;\n      width:16px; }\n    .bp3-breadcrumbs > li:last-of-type::after{\n      display:none; }\n\n.bp3-breadcrumb,\n.bp3-breadcrumb-current,\n.bp3-breadcrumbs-collapsed{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  font-size:16px; }\n\n.bp3-breadcrumb,\n.bp3-breadcrumbs-collapsed{\n  color:#5c7080; }\n\n.bp3-breadcrumb:hover{\n  text-decoration:none; }\n\n.bp3-breadcrumb.bp3-disabled{\n  color:rgba(92, 112, 128, 0.6);\n  cursor:not-allowed; }\n\n.bp3-breadcrumb .bp3-icon{\n  margin-right:5px; }\n\n.bp3-breadcrumb-current{\n  color:inherit;\n  font-weight:600; }\n  .bp3-breadcrumb-current .bp3-input{\n    font-size:inherit;\n    font-weight:inherit;\n    vertical-align:baseline; }\n\n.bp3-breadcrumbs-collapsed{\n  background:#ced9e0;\n  border:none;\n  border-radius:3px;\n  cursor:pointer;\n  margin-right:2px;\n  padding:1px 5px;\n  vertical-align:text-bottom; }\n  .bp3-breadcrumbs-collapsed::before{\n    background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e\") center no-repeat;\n    content:\"\";\n    display:block;\n    height:16px;\n    width:16px; }\n  .bp3-breadcrumbs-collapsed:hover{\n    background:#bfccd6;\n    color:#182026;\n    text-decoration:none; }\n\n.bp3-dark .bp3-breadcrumb,\n.bp3-dark .bp3-breadcrumbs-collapsed{\n  color:#a7b6c2; }\n\n.bp3-dark .bp3-breadcrumbs > li::after{\n  color:#a7b6c2; }\n\n.bp3-dark .bp3-breadcrumb.bp3-disabled{\n  color:rgba(167, 182, 194, 0.6); }\n\n.bp3-dark .bp3-breadcrumb-current{\n  color:#f5f8fa; }\n\n.bp3-dark .bp3-breadcrumbs-collapsed{\n  background:rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-breadcrumbs-collapsed:hover{\n    background:rgba(16, 22, 26, 0.6);\n    color:#f5f8fa; }\n.bp3-button{\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  border:none;\n  border-radius:3px;\n  cursor:pointer;\n  font-size:14px;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  padding:5px 10px;\n  text-align:left;\n  vertical-align:middle;\n  min-height:30px;\n  min-width:30px; }\n  .bp3-button > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-button > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-button::before,\n  .bp3-button > *{\n    margin-right:7px; }\n  .bp3-button:empty::before,\n  .bp3-button > :last-child{\n    margin-right:0; }\n  .bp3-button:empty{\n    padding:0 !important; }\n  .bp3-button:disabled, .bp3-button.bp3-disabled{\n    cursor:not-allowed; }\n  .bp3-button.bp3-fill{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    width:100%; }\n  .bp3-button.bp3-align-right,\n  .bp3-align-right .bp3-button{\n    text-align:right; }\n  .bp3-button.bp3-align-left,\n  .bp3-align-left .bp3-button{\n    text-align:left; }\n  .bp3-button:not([class*=\"bp3-intent-\"]){\n    background-color:#f5f8fa;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n    color:#182026; }\n    .bp3-button:not([class*=\"bp3-intent-\"]):hover{\n      background-clip:padding-box;\n      background-color:#ebf1f5;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n    .bp3-button:not([class*=\"bp3-intent-\"]):active, .bp3-button:not([class*=\"bp3-intent-\"]).bp3-active{\n      background-color:#d8e1e8;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-button:not([class*=\"bp3-intent-\"]):disabled, .bp3-button:not([class*=\"bp3-intent-\"]).bp3-disabled{\n      background-color:rgba(206, 217, 224, 0.5);\n      background-image:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed;\n      outline:none; }\n      .bp3-button:not([class*=\"bp3-intent-\"]):disabled.bp3-active, .bp3-button:not([class*=\"bp3-intent-\"]):disabled.bp3-active:hover, .bp3-button:not([class*=\"bp3-intent-\"]).bp3-disabled.bp3-active, .bp3-button:not([class*=\"bp3-intent-\"]).bp3-disabled.bp3-active:hover{\n        background:rgba(206, 217, 224, 0.7); }\n  .bp3-button.bp3-intent-primary{\n    background-color:#137cbd;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n    .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{\n      color:#ffffff; }\n    .bp3-button.bp3-intent-primary:hover{\n      background-color:#106ba3;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{\n      background-color:#0e5a8a;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{\n      background-color:rgba(19, 124, 189, 0.5);\n      background-image:none;\n      border-color:transparent;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(255, 255, 255, 0.6); }\n  .bp3-button.bp3-intent-success{\n    background-color:#0f9960;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n    .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{\n      color:#ffffff; }\n    .bp3-button.bp3-intent-success:hover{\n      background-color:#0d8050;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{\n      background-color:#0a6640;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{\n      background-color:rgba(15, 153, 96, 0.5);\n      background-image:none;\n      border-color:transparent;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(255, 255, 255, 0.6); }\n  .bp3-button.bp3-intent-warning{\n    background-color:#d9822b;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n    .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{\n      color:#ffffff; }\n    .bp3-button.bp3-intent-warning:hover{\n      background-color:#bf7326;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{\n      background-color:#a66321;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{\n      background-color:rgba(217, 130, 43, 0.5);\n      background-image:none;\n      border-color:transparent;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(255, 255, 255, 0.6); }\n  .bp3-button.bp3-intent-danger{\n    background-color:#db3737;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n    .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{\n      color:#ffffff; }\n    .bp3-button.bp3-intent-danger:hover{\n      background-color:#c23030;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{\n      background-color:#a82a2a;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{\n      background-color:rgba(219, 55, 55, 0.5);\n      background-image:none;\n      border-color:transparent;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(255, 255, 255, 0.6); }\n  .bp3-button[class*=\"bp3-intent-\"] .bp3-button-spinner .bp3-spinner-head{\n    stroke:#ffffff; }\n  .bp3-button.bp3-large,\n  .bp3-large .bp3-button{\n    min-height:40px;\n    min-width:40px;\n    font-size:16px;\n    padding:5px 15px; }\n    .bp3-button.bp3-large::before,\n    .bp3-button.bp3-large > *,\n    .bp3-large .bp3-button::before,\n    .bp3-large .bp3-button > *{\n      margin-right:10px; }\n    .bp3-button.bp3-large:empty::before,\n    .bp3-button.bp3-large > :last-child,\n    .bp3-large .bp3-button:empty::before,\n    .bp3-large .bp3-button > :last-child{\n      margin-right:0; }\n  .bp3-button.bp3-small,\n  .bp3-small .bp3-button{\n    min-height:24px;\n    min-width:24px;\n    padding:0 7px; }\n  .bp3-button.bp3-loading{\n    position:relative; }\n    .bp3-button.bp3-loading[class*=\"bp3-icon-\"]::before{\n      visibility:hidden; }\n    .bp3-button.bp3-loading .bp3-button-spinner{\n      margin:0;\n      position:absolute; }\n    .bp3-button.bp3-loading > :not(.bp3-button-spinner){\n      visibility:hidden; }\n  .bp3-button[class*=\"bp3-icon-\"]::before{\n    font-family:\"Icons16\", sans-serif;\n    font-size:16px;\n    font-style:normal;\n    font-weight:400;\n    line-height:1;\n    -moz-osx-font-smoothing:grayscale;\n    -webkit-font-smoothing:antialiased;\n    color:#5c7080; }\n  .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{\n    color:#5c7080; }\n    .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{\n      margin-left:7px; }\n  .bp3-button .bp3-icon:first-child:last-child,\n  .bp3-button .bp3-spinner + .bp3-icon:last-child{\n    margin:0 -7px; }\n  .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]){\n    background-color:#394b59;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):hover, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):active, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]).bp3-active{\n      color:#f5f8fa; }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):hover{\n      background-color:#30404d;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):active, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]).bp3-active{\n      background-color:#202b33;\n      background-image:none;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):disabled, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]).bp3-disabled{\n      background-color:rgba(57, 75, 89, 0.5);\n      background-image:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(167, 182, 194, 0.6); }\n      .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]).bp3-disabled.bp3-active{\n        background:rgba(57, 75, 89, 0.7); }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]) .bp3-button-spinner .bp3-spinner-head{\n      background:rgba(16, 22, 26, 0.5);\n      stroke:#8a9ba8; }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"])[class*=\"bp3-icon-\"]::before{\n      color:#a7b6c2; }\n    .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]) .bp3-icon, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*=\"bp3-intent-\"]) .bp3-icon-large{\n      color:#a7b6c2; }\n  .bp3-dark .bp3-button[class*=\"bp3-intent-\"]{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-button[class*=\"bp3-intent-\"]:hover{\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-button[class*=\"bp3-intent-\"]:active, .bp3-dark .bp3-button[class*=\"bp3-intent-\"].bp3-active{\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-dark .bp3-button[class*=\"bp3-intent-\"]:disabled, .bp3-dark .bp3-button[class*=\"bp3-intent-\"].bp3-disabled{\n      background-image:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(255, 255, 255, 0.3); }\n    .bp3-dark .bp3-button[class*=\"bp3-intent-\"] .bp3-button-spinner .bp3-spinner-head{\n      stroke:#8a9ba8; }\n  .bp3-button:disabled::before,\n  .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,\n  .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*=\"bp3-intent-\"]::before,\n  .bp3-button[class*=\"bp3-intent-\"] .bp3-icon, .bp3-button[class*=\"bp3-intent-\"] .bp3-icon-standard, .bp3-button[class*=\"bp3-intent-\"] .bp3-icon-large{\n    color:inherit !important; }\n  .bp3-button.bp3-minimal{\n    background:none;\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n    .bp3-button.bp3-minimal:hover{\n      background:rgba(167, 182, 194, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026;\n      text-decoration:none; }\n    .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{\n      background:rgba(115, 134, 148, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026; }\n    .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{\n      background:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed; }\n      .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{\n        background:rgba(115, 134, 148, 0.3); }\n    .bp3-dark .bp3-button.bp3-minimal{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:inherit; }\n      .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n      .bp3-dark .bp3-button.bp3-minimal:hover{\n        background:rgba(138, 155, 168, 0.15); }\n      .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{\n        background:rgba(138, 155, 168, 0.3);\n        color:#f5f8fa; }\n      .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{\n        background:none;\n        color:rgba(167, 182, 194, 0.6);\n        cursor:not-allowed; }\n        .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{\n          background:rgba(138, 155, 168, 0.3); }\n    .bp3-button.bp3-minimal.bp3-intent-primary{\n      color:#106ba3; }\n      .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#106ba3; }\n      .bp3-button.bp3-minimal.bp3-intent-primary:hover{\n        background:rgba(19, 124, 189, 0.15);\n        color:#106ba3; }\n      .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{\n        background:rgba(19, 124, 189, 0.3);\n        color:#106ba3; }\n      .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{\n        background:none;\n        color:rgba(16, 107, 163, 0.5); }\n        .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{\n          background:rgba(19, 124, 189, 0.3); }\n      .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{\n        stroke:#106ba3; }\n      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{\n        color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{\n          background:rgba(19, 124, 189, 0.2);\n          color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{\n          background:rgba(19, 124, 189, 0.3);\n          color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{\n          background:none;\n          color:rgba(72, 175, 240, 0.5); }\n          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{\n            background:rgba(19, 124, 189, 0.3); }\n    .bp3-button.bp3-minimal.bp3-intent-success{\n      color:#0d8050; }\n      .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#0d8050; }\n      .bp3-button.bp3-minimal.bp3-intent-success:hover{\n        background:rgba(15, 153, 96, 0.15);\n        color:#0d8050; }\n      .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{\n        background:rgba(15, 153, 96, 0.3);\n        color:#0d8050; }\n      .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{\n        background:none;\n        color:rgba(13, 128, 80, 0.5); }\n        .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{\n          background:rgba(15, 153, 96, 0.3); }\n      .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{\n        stroke:#0d8050; }\n      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{\n        color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{\n          background:rgba(15, 153, 96, 0.2);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{\n          background:rgba(15, 153, 96, 0.3);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{\n          background:none;\n          color:rgba(61, 204, 145, 0.5); }\n          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{\n            background:rgba(15, 153, 96, 0.3); }\n    .bp3-button.bp3-minimal.bp3-intent-warning{\n      color:#bf7326; }\n      .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#bf7326; }\n      .bp3-button.bp3-minimal.bp3-intent-warning:hover{\n        background:rgba(217, 130, 43, 0.15);\n        color:#bf7326; }\n      .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{\n        background:rgba(217, 130, 43, 0.3);\n        color:#bf7326; }\n      .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{\n        background:none;\n        color:rgba(191, 115, 38, 0.5); }\n        .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{\n          background:rgba(217, 130, 43, 0.3); }\n      .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{\n        stroke:#bf7326; }\n      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{\n        color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{\n          background:rgba(217, 130, 43, 0.2);\n          color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{\n          background:rgba(217, 130, 43, 0.3);\n          color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{\n          background:none;\n          color:rgba(255, 179, 102, 0.5); }\n          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{\n            background:rgba(217, 130, 43, 0.3); }\n    .bp3-button.bp3-minimal.bp3-intent-danger{\n      color:#c23030; }\n      .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#c23030; }\n      .bp3-button.bp3-minimal.bp3-intent-danger:hover{\n        background:rgba(219, 55, 55, 0.15);\n        color:#c23030; }\n      .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{\n        background:rgba(219, 55, 55, 0.3);\n        color:#c23030; }\n      .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{\n        background:none;\n        color:rgba(194, 48, 48, 0.5); }\n        .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{\n          background:rgba(219, 55, 55, 0.3); }\n      .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{\n        stroke:#c23030; }\n      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{\n        color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{\n          background:rgba(219, 55, 55, 0.2);\n          color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{\n          background:rgba(219, 55, 55, 0.3);\n          color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{\n          background:none;\n          color:rgba(255, 115, 115, 0.5); }\n          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{\n            background:rgba(219, 55, 55, 0.3); }\n  .bp3-button.bp3-outlined{\n    background:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    border:1px solid rgba(24, 32, 38, 0.2);\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box; }\n    .bp3-button.bp3-outlined:hover{\n      background:rgba(167, 182, 194, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026;\n      text-decoration:none; }\n    .bp3-button.bp3-outlined:active, .bp3-button.bp3-outlined.bp3-active{\n      background:rgba(115, 134, 148, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026; }\n    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined.bp3-disabled:hover{\n      background:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed; }\n      .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{\n        background:rgba(115, 134, 148, 0.3); }\n    .bp3-dark .bp3-button.bp3-outlined{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:inherit; }\n      .bp3-dark .bp3-button.bp3-outlined:hover, .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n      .bp3-dark .bp3-button.bp3-outlined:hover{\n        background:rgba(138, 155, 168, 0.15); }\n      .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{\n        background:rgba(138, 155, 168, 0.3);\n        color:#f5f8fa; }\n      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{\n        background:none;\n        color:rgba(167, 182, 194, 0.6);\n        cursor:not-allowed; }\n        .bp3-dark .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{\n          background:rgba(138, 155, 168, 0.3); }\n    .bp3-button.bp3-outlined.bp3-intent-primary{\n      color:#106ba3; }\n      .bp3-button.bp3-outlined.bp3-intent-primary:hover, .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#106ba3; }\n      .bp3-button.bp3-outlined.bp3-intent-primary:hover{\n        background:rgba(19, 124, 189, 0.15);\n        color:#106ba3; }\n      .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{\n        background:rgba(19, 124, 189, 0.3);\n        color:#106ba3; }\n      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{\n        background:none;\n        color:rgba(16, 107, 163, 0.5); }\n        .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{\n          background:rgba(19, 124, 189, 0.3); }\n      .bp3-button.bp3-outlined.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{\n        stroke:#106ba3; }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{\n        color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:hover{\n          background:rgba(19, 124, 189, 0.2);\n          color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{\n          background:rgba(19, 124, 189, 0.3);\n          color:#48aff0; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{\n          background:none;\n          color:rgba(72, 175, 240, 0.5); }\n          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{\n            background:rgba(19, 124, 189, 0.3); }\n    .bp3-button.bp3-outlined.bp3-intent-success{\n      color:#0d8050; }\n      .bp3-button.bp3-outlined.bp3-intent-success:hover, .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#0d8050; }\n      .bp3-button.bp3-outlined.bp3-intent-success:hover{\n        background:rgba(15, 153, 96, 0.15);\n        color:#0d8050; }\n      .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{\n        background:rgba(15, 153, 96, 0.3);\n        color:#0d8050; }\n      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{\n        background:none;\n        color:rgba(13, 128, 80, 0.5); }\n        .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{\n          background:rgba(15, 153, 96, 0.3); }\n      .bp3-button.bp3-outlined.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{\n        stroke:#0d8050; }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{\n        color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:hover{\n          background:rgba(15, 153, 96, 0.2);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{\n          background:rgba(15, 153, 96, 0.3);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{\n          background:none;\n          color:rgba(61, 204, 145, 0.5); }\n          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{\n            background:rgba(15, 153, 96, 0.3); }\n    .bp3-button.bp3-outlined.bp3-intent-warning{\n      color:#bf7326; }\n      .bp3-button.bp3-outlined.bp3-intent-warning:hover, .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#bf7326; }\n      .bp3-button.bp3-outlined.bp3-intent-warning:hover{\n        background:rgba(217, 130, 43, 0.15);\n        color:#bf7326; }\n      .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{\n        background:rgba(217, 130, 43, 0.3);\n        color:#bf7326; }\n      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{\n        background:none;\n        color:rgba(191, 115, 38, 0.5); }\n        .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{\n          background:rgba(217, 130, 43, 0.3); }\n      .bp3-button.bp3-outlined.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{\n        stroke:#bf7326; }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{\n        color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:hover{\n          background:rgba(217, 130, 43, 0.2);\n          color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{\n          background:rgba(217, 130, 43, 0.3);\n          color:#ffb366; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{\n          background:none;\n          color:rgba(255, 179, 102, 0.5); }\n          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{\n            background:rgba(217, 130, 43, 0.3); }\n    .bp3-button.bp3-outlined.bp3-intent-danger{\n      color:#c23030; }\n      .bp3-button.bp3-outlined.bp3-intent-danger:hover, .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#c23030; }\n      .bp3-button.bp3-outlined.bp3-intent-danger:hover{\n        background:rgba(219, 55, 55, 0.15);\n        color:#c23030; }\n      .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{\n        background:rgba(219, 55, 55, 0.3);\n        color:#c23030; }\n      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{\n        background:none;\n        color:rgba(194, 48, 48, 0.5); }\n        .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{\n          background:rgba(219, 55, 55, 0.3); }\n      .bp3-button.bp3-outlined.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{\n        stroke:#c23030; }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{\n        color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:hover{\n          background:rgba(219, 55, 55, 0.2);\n          color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{\n          background:rgba(219, 55, 55, 0.3);\n          color:#ff7373; }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{\n          background:none;\n          color:rgba(255, 115, 115, 0.5); }\n          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{\n            background:rgba(219, 55, 55, 0.3); }\n    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled:hover{\n      border-color:rgba(92, 112, 128, 0.1); }\n    .bp3-dark .bp3-button.bp3-outlined{\n      border-color:rgba(255, 255, 255, 0.4); }\n      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{\n        border-color:rgba(255, 255, 255, 0.2); }\n    .bp3-button.bp3-outlined.bp3-intent-primary{\n      border-color:rgba(16, 107, 163, 0.6); }\n      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{\n        border-color:rgba(16, 107, 163, 0.2); }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{\n        border-color:rgba(72, 175, 240, 0.6); }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{\n          border-color:rgba(72, 175, 240, 0.2); }\n    .bp3-button.bp3-outlined.bp3-intent-success{\n      border-color:rgba(13, 128, 80, 0.6); }\n      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{\n        border-color:rgba(13, 128, 80, 0.2); }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{\n        border-color:rgba(61, 204, 145, 0.6); }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{\n          border-color:rgba(61, 204, 145, 0.2); }\n    .bp3-button.bp3-outlined.bp3-intent-warning{\n      border-color:rgba(191, 115, 38, 0.6); }\n      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{\n        border-color:rgba(191, 115, 38, 0.2); }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{\n        border-color:rgba(255, 179, 102, 0.6); }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{\n          border-color:rgba(255, 179, 102, 0.2); }\n    .bp3-button.bp3-outlined.bp3-intent-danger{\n      border-color:rgba(194, 48, 48, 0.6); }\n      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{\n        border-color:rgba(194, 48, 48, 0.2); }\n      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{\n        border-color:rgba(255, 115, 115, 0.6); }\n        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{\n          border-color:rgba(255, 115, 115, 0.2); }\n\na.bp3-button{\n  text-align:center;\n  text-decoration:none;\n  -webkit-transition:none;\n  transition:none; }\n  a.bp3-button, a.bp3-button:hover, a.bp3-button:active{\n    color:#182026; }\n  a.bp3-button.bp3-disabled{\n    color:rgba(92, 112, 128, 0.6); }\n\n.bp3-button-text{\n  -webkit-box-flex:0;\n      -ms-flex:0 1 auto;\n          flex:0 1 auto; }\n\n.bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,\n.bp3-button-group.bp3-align-left .bp3-button-text,\n.bp3-button-group.bp3-align-right .bp3-button-text{\n  -webkit-box-flex:1;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto; }\n.bp3-button-group{\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex; }\n  .bp3-button-group .bp3-button{\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto;\n    position:relative;\n    z-index:4; }\n    .bp3-button-group .bp3-button:focus{\n      z-index:5; }\n    .bp3-button-group .bp3-button:hover{\n      z-index:6; }\n    .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{\n      z-index:7; }\n    .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{\n      z-index:3; }\n    .bp3-button-group .bp3-button[class*=\"bp3-intent-\"]{\n      z-index:9; }\n      .bp3-button-group .bp3-button[class*=\"bp3-intent-\"]:focus{\n        z-index:10; }\n      .bp3-button-group .bp3-button[class*=\"bp3-intent-\"]:hover{\n        z-index:11; }\n      .bp3-button-group .bp3-button[class*=\"bp3-intent-\"]:active, .bp3-button-group .bp3-button[class*=\"bp3-intent-\"].bp3-active{\n        z-index:12; }\n      .bp3-button-group .bp3-button[class*=\"bp3-intent-\"]:disabled, .bp3-button-group .bp3-button[class*=\"bp3-intent-\"].bp3-disabled{\n        z-index:8; }\n  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,\n  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){\n    border-bottom-left-radius:0;\n    border-top-left-radius:0; }\n  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){\n    border-bottom-right-radius:0;\n    border-top-right-radius:0;\n    margin-right:-1px; }\n  .bp3-button-group.bp3-minimal .bp3-button{\n    background:none;\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n    .bp3-button-group.bp3-minimal .bp3-button:hover{\n      background:rgba(167, 182, 194, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026;\n      text-decoration:none; }\n    .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{\n      background:rgba(115, 134, 148, 0.3);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#182026; }\n    .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{\n      background:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed; }\n      .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{\n        background:rgba(115, 134, 148, 0.3); }\n    .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:inherit; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{\n        background:rgba(138, 155, 168, 0.15); }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{\n        background:rgba(138, 155, 168, 0.3);\n        color:#f5f8fa; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{\n        background:none;\n        color:rgba(167, 182, 194, 0.6);\n        cursor:not-allowed; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{\n          background:rgba(138, 155, 168, 0.3); }\n    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{\n      color:#106ba3; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#106ba3; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{\n        background:rgba(19, 124, 189, 0.15);\n        color:#106ba3; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{\n        background:rgba(19, 124, 189, 0.3);\n        color:#106ba3; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{\n        background:none;\n        color:rgba(16, 107, 163, 0.5); }\n        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{\n          background:rgba(19, 124, 189, 0.3); }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{\n        stroke:#106ba3; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{\n        color:#48aff0; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{\n          background:rgba(19, 124, 189, 0.2);\n          color:#48aff0; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{\n          background:rgba(19, 124, 189, 0.3);\n          color:#48aff0; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{\n          background:none;\n          color:rgba(72, 175, 240, 0.5); }\n          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{\n            background:rgba(19, 124, 189, 0.3); }\n    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{\n      color:#0d8050; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#0d8050; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{\n        background:rgba(15, 153, 96, 0.15);\n        color:#0d8050; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{\n        background:rgba(15, 153, 96, 0.3);\n        color:#0d8050; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{\n        background:none;\n        color:rgba(13, 128, 80, 0.5); }\n        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{\n          background:rgba(15, 153, 96, 0.3); }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{\n        stroke:#0d8050; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{\n        color:#3dcc91; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{\n          background:rgba(15, 153, 96, 0.2);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{\n          background:rgba(15, 153, 96, 0.3);\n          color:#3dcc91; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{\n          background:none;\n          color:rgba(61, 204, 145, 0.5); }\n          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{\n            background:rgba(15, 153, 96, 0.3); }\n    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{\n      color:#bf7326; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#bf7326; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{\n        background:rgba(217, 130, 43, 0.15);\n        color:#bf7326; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{\n        background:rgba(217, 130, 43, 0.3);\n        color:#bf7326; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{\n        background:none;\n        color:rgba(191, 115, 38, 0.5); }\n        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{\n          background:rgba(217, 130, 43, 0.3); }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{\n        stroke:#bf7326; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{\n        color:#ffb366; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{\n          background:rgba(217, 130, 43, 0.2);\n          color:#ffb366; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{\n          background:rgba(217, 130, 43, 0.3);\n          color:#ffb366; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{\n          background:none;\n          color:rgba(255, 179, 102, 0.5); }\n          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{\n            background:rgba(217, 130, 43, 0.3); }\n    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{\n      color:#c23030; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{\n        background:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:#c23030; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{\n        background:rgba(219, 55, 55, 0.15);\n        color:#c23030; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{\n        background:rgba(219, 55, 55, 0.3);\n        color:#c23030; }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{\n        background:none;\n        color:rgba(194, 48, 48, 0.5); }\n        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{\n          background:rgba(219, 55, 55, 0.3); }\n      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{\n        stroke:#c23030; }\n      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{\n        color:#ff7373; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{\n          background:rgba(219, 55, 55, 0.2);\n          color:#ff7373; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{\n          background:rgba(219, 55, 55, 0.3);\n          color:#ff7373; }\n        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{\n          background:none;\n          color:rgba(255, 115, 115, 0.5); }\n          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{\n            background:rgba(219, 55, 55, 0.3); }\n  .bp3-button-group .bp3-popover-wrapper,\n  .bp3-button-group .bp3-popover-target{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto; }\n  .bp3-button-group.bp3-fill{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    width:100%; }\n  .bp3-button-group .bp3-button.bp3-fill,\n  .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto; }\n  .bp3-button-group.bp3-vertical{\n    -webkit-box-align:stretch;\n        -ms-flex-align:stretch;\n            align-items:stretch;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    vertical-align:top; }\n    .bp3-button-group.bp3-vertical.bp3-fill{\n      height:100%;\n      width:unset; }\n    .bp3-button-group.bp3-vertical .bp3-button{\n      margin-right:0 !important;\n      width:100%; }\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{\n      border-radius:3px 3px 0 0; }\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{\n      border-radius:0 0 3px 3px; }\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){\n      margin-bottom:-1px; }\n  .bp3-button-group.bp3-align-left .bp3-button{\n    text-align:left; }\n  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){\n    margin-right:1px; }\n  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,\n  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){\n    margin-bottom:1px; }\n.bp3-callout{\n  font-size:14px;\n  line-height:1.5;\n  background-color:rgba(138, 155, 168, 0.15);\n  border-radius:3px;\n  padding:10px 12px 9px;\n  position:relative;\n  width:100%; }\n  .bp3-callout[class*=\"bp3-icon-\"]{\n    padding-left:40px; }\n    .bp3-callout[class*=\"bp3-icon-\"]::before{\n      font-family:\"Icons20\", sans-serif;\n      font-size:20px;\n      font-style:normal;\n      font-weight:400;\n      line-height:1;\n      -moz-osx-font-smoothing:grayscale;\n      -webkit-font-smoothing:antialiased;\n      color:#5c7080;\n      left:10px;\n      position:absolute;\n      top:10px; }\n  .bp3-callout.bp3-callout-icon{\n    padding-left:40px; }\n    .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{\n      color:#5c7080;\n      left:10px;\n      position:absolute;\n      top:10px; }\n  .bp3-callout .bp3-heading{\n    line-height:20px;\n    margin-bottom:5px;\n    margin-top:0; }\n    .bp3-callout .bp3-heading:last-child{\n      margin-bottom:0; }\n  .bp3-dark .bp3-callout{\n    background-color:rgba(138, 155, 168, 0.2); }\n    .bp3-dark .bp3-callout[class*=\"bp3-icon-\"]::before{\n      color:#a7b6c2; }\n  .bp3-callout.bp3-intent-primary{\n    background-color:rgba(19, 124, 189, 0.15); }\n    .bp3-callout.bp3-intent-primary[class*=\"bp3-icon-\"]::before,\n    .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,\n    .bp3-callout.bp3-intent-primary .bp3-heading{\n      color:#106ba3; }\n    .bp3-dark .bp3-callout.bp3-intent-primary{\n      background-color:rgba(19, 124, 189, 0.25); }\n      .bp3-dark .bp3-callout.bp3-intent-primary[class*=\"bp3-icon-\"]::before,\n      .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,\n      .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{\n        color:#48aff0; }\n  .bp3-callout.bp3-intent-success{\n    background-color:rgba(15, 153, 96, 0.15); }\n    .bp3-callout.bp3-intent-success[class*=\"bp3-icon-\"]::before,\n    .bp3-callout.bp3-intent-success > .bp3-icon:first-child,\n    .bp3-callout.bp3-intent-success .bp3-heading{\n      color:#0d8050; }\n    .bp3-dark .bp3-callout.bp3-intent-success{\n      background-color:rgba(15, 153, 96, 0.25); }\n      .bp3-dark .bp3-callout.bp3-intent-success[class*=\"bp3-icon-\"]::before,\n      .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,\n      .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{\n        color:#3dcc91; }\n  .bp3-callout.bp3-intent-warning{\n    background-color:rgba(217, 130, 43, 0.15); }\n    .bp3-callout.bp3-intent-warning[class*=\"bp3-icon-\"]::before,\n    .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,\n    .bp3-callout.bp3-intent-warning .bp3-heading{\n      color:#bf7326; }\n    .bp3-dark .bp3-callout.bp3-intent-warning{\n      background-color:rgba(217, 130, 43, 0.25); }\n      .bp3-dark .bp3-callout.bp3-intent-warning[class*=\"bp3-icon-\"]::before,\n      .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,\n      .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{\n        color:#ffb366; }\n  .bp3-callout.bp3-intent-danger{\n    background-color:rgba(219, 55, 55, 0.15); }\n    .bp3-callout.bp3-intent-danger[class*=\"bp3-icon-\"]::before,\n    .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,\n    .bp3-callout.bp3-intent-danger .bp3-heading{\n      color:#c23030; }\n    .bp3-dark .bp3-callout.bp3-intent-danger{\n      background-color:rgba(219, 55, 55, 0.25); }\n      .bp3-dark .bp3-callout.bp3-intent-danger[class*=\"bp3-icon-\"]::before,\n      .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,\n      .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{\n        color:#ff7373; }\n  .bp3-running-text .bp3-callout{\n    margin:20px 0; }\n.bp3-card{\n  background-color:#ffffff;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n  padding:20px;\n  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-card.bp3-dark,\n  .bp3-dark .bp3-card{\n    background-color:#30404d;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }\n\n.bp3-elevation-0{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }\n  .bp3-elevation-0.bp3-dark,\n  .bp3-dark .bp3-elevation-0{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }\n\n.bp3-elevation-1{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-elevation-1.bp3-dark,\n  .bp3-dark .bp3-elevation-1{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }\n\n.bp3-elevation-2{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }\n  .bp3-elevation-2.bp3-dark,\n  .bp3-dark .bp3-elevation-2{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }\n\n.bp3-elevation-3{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }\n  .bp3-elevation-3.bp3-dark,\n  .bp3-dark .bp3-elevation-3{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n\n.bp3-elevation-4{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }\n  .bp3-elevation-4.bp3-dark,\n  .bp3-dark .bp3-elevation-4{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }\n\n.bp3-card.bp3-interactive:hover{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n  cursor:pointer; }\n  .bp3-card.bp3-interactive:hover.bp3-dark,\n  .bp3-dark .bp3-card.bp3-interactive:hover{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n\n.bp3-card.bp3-interactive:active{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n  opacity:0.9;\n  -webkit-transition-duration:0;\n          transition-duration:0; }\n  .bp3-card.bp3-interactive:active.bp3-dark,\n  .bp3-dark .bp3-card.bp3-interactive:active{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }\n\n.bp3-collapse{\n  height:0;\n  overflow-y:hidden;\n  -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-collapse .bp3-collapse-body{\n    -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-collapse .bp3-collapse-body[aria-hidden=\"true\"]{\n      display:none; }\n\n.bp3-context-menu .bp3-popover-target{\n  display:block; }\n\n.bp3-context-menu-popover-target{\n  position:fixed; }\n\n.bp3-divider{\n  border-bottom:1px solid rgba(16, 22, 26, 0.15);\n  border-right:1px solid rgba(16, 22, 26, 0.15);\n  margin:5px; }\n  .bp3-dark .bp3-divider{\n    border-color:rgba(16, 22, 26, 0.4); }\n.bp3-dialog-container{\n  opacity:1;\n  -webkit-transform:scale(1);\n          transform:scale(1);\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  min-height:100%;\n  pointer-events:none;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  width:100%; }\n  .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{\n    opacity:0;\n    -webkit-transform:scale(0.5);\n            transform:scale(0.5); }\n  .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{\n    opacity:1;\n    -webkit-transform:scale(1);\n            transform:scale(1);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:opacity, -webkit-transform;\n    transition-property:opacity, -webkit-transform;\n    transition-property:opacity, transform;\n    transition-property:opacity, transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n  .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{\n    opacity:1;\n    -webkit-transform:scale(1);\n            transform:scale(1); }\n  .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{\n    opacity:0;\n    -webkit-transform:scale(0.5);\n            transform:scale(0.5);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:opacity, -webkit-transform;\n    transition-property:opacity, -webkit-transform;\n    transition-property:opacity, transform;\n    transition-property:opacity, transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n\n.bp3-dialog{\n  background:#ebf1f5;\n  border-radius:6px;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  margin:30px 0;\n  padding-bottom:20px;\n  pointer-events:all;\n  -webkit-user-select:text;\n     -moz-user-select:text;\n      -ms-user-select:text;\n          user-select:text;\n  width:500px; }\n  .bp3-dialog:focus{\n    outline:0; }\n  .bp3-dialog.bp3-dark,\n  .bp3-dark .bp3-dialog{\n    background:#293742;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n\n.bp3-dialog-header{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  background:#ffffff;\n  border-radius:6px 6px 0 0;\n  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);\n          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  min-height:40px;\n  padding-left:20px;\n  padding-right:5px;\n  z-index:30; }\n  .bp3-dialog-header .bp3-icon-large,\n  .bp3-dialog-header .bp3-icon{\n    color:#5c7080;\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto;\n    margin-right:10px; }\n  .bp3-dialog-header .bp3-heading{\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    word-wrap:normal;\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto;\n    line-height:inherit;\n    margin:0; }\n    .bp3-dialog-header .bp3-heading:last-child{\n      margin-right:20px; }\n  .bp3-dark .bp3-dialog-header{\n    background:#30404d;\n    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);\n            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-dialog-header .bp3-icon-large,\n    .bp3-dark .bp3-dialog-header .bp3-icon{\n      color:#a7b6c2; }\n\n.bp3-dialog-body{\n  -webkit-box-flex:1;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto;\n  line-height:18px;\n  margin:20px; }\n\n.bp3-dialog-footer{\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  margin:0 20px; }\n\n.bp3-dialog-footer-actions{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:end;\n      -ms-flex-pack:end;\n          justify-content:flex-end; }\n  .bp3-dialog-footer-actions .bp3-button{\n    margin-left:10px; }\n.bp3-multistep-dialog-panels{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex; }\n\n.bp3-multistep-dialog-left-panel{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column; }\n  .bp3-dark .bp3-multistep-dialog-left-panel{\n    background:#202b33; }\n\n.bp3-multistep-dialog-right-panel{\n  background-color:#f5f8fa;\n  border-left:1px solid rgba(16, 22, 26, 0.15);\n  border-radius:0 0 6px 0;\n  -webkit-box-flex:3;\n      -ms-flex:3;\n          flex:3;\n  min-width:0; }\n  .bp3-dark .bp3-multistep-dialog-right-panel{\n    background-color:#293742;\n    border-left:1px solid rgba(16, 22, 26, 0.4); }\n\n.bp3-multistep-dialog-footer{\n  background-color:#ffffff;\n  border-radius:0 0 6px 0;\n  border-top:1px solid rgba(16, 22, 26, 0.15);\n  padding:10px; }\n  .bp3-dark .bp3-multistep-dialog-footer{\n    background:#30404d;\n    border-top:1px solid rgba(16, 22, 26, 0.4); }\n\n.bp3-dialog-step-container{\n  background-color:#f5f8fa;\n  border-bottom:1px solid rgba(16, 22, 26, 0.15); }\n  .bp3-dark .bp3-dialog-step-container{\n    background:#293742;\n    border-bottom:1px solid rgba(16, 22, 26, 0.4); }\n  .bp3-dialog-step-container.bp3-dialog-step-viewed{\n    background-color:#ffffff; }\n    .bp3-dark .bp3-dialog-step-container.bp3-dialog-step-viewed{\n      background:#30404d; }\n\n.bp3-dialog-step{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  background-color:#f5f8fa;\n  border-radius:6px;\n  cursor:not-allowed;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:4px;\n  padding:6px 14px; }\n  .bp3-dark .bp3-dialog-step{\n    background:#293742; }\n  .bp3-dialog-step-viewed .bp3-dialog-step{\n    background-color:#ffffff;\n    cursor:pointer; }\n    .bp3-dark .bp3-dialog-step-viewed .bp3-dialog-step{\n      background:#30404d; }\n  .bp3-dialog-step:hover{\n    background-color:#f5f8fa; }\n    .bp3-dark .bp3-dialog-step:hover{\n      background:#293742; }\n\n.bp3-dialog-step-icon{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  background-color:rgba(92, 112, 128, 0.6);\n  border-radius:50%;\n  color:#ffffff;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  height:25px;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  width:25px; }\n  .bp3-dark .bp3-dialog-step-icon{\n    background-color:rgba(167, 182, 194, 0.6); }\n  .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-icon{\n    background-color:#2b95d6; }\n  .bp3-dialog-step-viewed .bp3-dialog-step-icon{\n    background-color:#8a9ba8; }\n\n.bp3-dialog-step-title{\n  color:rgba(92, 112, 128, 0.6);\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  padding-left:10px; }\n  .bp3-dark .bp3-dialog-step-title{\n    color:rgba(167, 182, 194, 0.6); }\n  .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-title{\n    color:#2b95d6; }\n  .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{\n    color:#182026; }\n    .bp3-dark .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{\n      color:#f5f8fa; }\n.bp3-drawer{\n  background:#ffffff;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  margin:0;\n  padding:0; }\n  .bp3-drawer:focus{\n    outline:0; }\n  .bp3-drawer.bp3-position-top{\n    height:50%;\n    left:0;\n    right:0;\n    top:0; }\n    .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{\n      -webkit-transform:translateY(-100%);\n              transform:translateY(-100%); }\n    .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{\n      -webkit-transform:translateY(0);\n              transform:translateY(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer.bp3-position-top.bp3-overlay-exit{\n      -webkit-transform:translateY(0);\n              transform:translateY(0); }\n    .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{\n      -webkit-transform:translateY(-100%);\n              transform:translateY(-100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer.bp3-position-bottom{\n    bottom:0;\n    height:50%;\n    left:0;\n    right:0; }\n    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{\n      -webkit-transform:translateY(100%);\n              transform:translateY(100%); }\n    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{\n      -webkit-transform:translateY(0);\n              transform:translateY(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{\n      -webkit-transform:translateY(0);\n              transform:translateY(0); }\n    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{\n      -webkit-transform:translateY(100%);\n              transform:translateY(100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer.bp3-position-left{\n    bottom:0;\n    left:0;\n    top:0;\n    width:50%; }\n    .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{\n      -webkit-transform:translateX(-100%);\n              transform:translateX(-100%); }\n    .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{\n      -webkit-transform:translateX(0);\n              transform:translateX(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer.bp3-position-left.bp3-overlay-exit{\n      -webkit-transform:translateX(0);\n              transform:translateX(0); }\n    .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{\n      -webkit-transform:translateX(-100%);\n              transform:translateX(-100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer.bp3-position-right{\n    bottom:0;\n    right:0;\n    top:0;\n    width:50%; }\n    .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{\n      -webkit-transform:translateX(100%);\n              transform:translateX(100%); }\n    .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{\n      -webkit-transform:translateX(0);\n              transform:translateX(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer.bp3-position-right.bp3-overlay-exit{\n      -webkit-transform:translateX(0);\n              transform:translateX(0); }\n    .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{\n      -webkit-transform:translateX(100%);\n              transform:translateX(100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n  .bp3-position-right):not(.bp3-vertical){\n    bottom:0;\n    right:0;\n    top:0;\n    width:50%; }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{\n      -webkit-transform:translateX(100%);\n              transform:translateX(100%); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{\n      -webkit-transform:translateX(0);\n              transform:translateX(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{\n      -webkit-transform:translateX(0);\n              transform:translateX(0); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{\n      -webkit-transform:translateX(100%);\n              transform:translateX(100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n  .bp3-position-right).bp3-vertical{\n    bottom:0;\n    height:50%;\n    left:0;\n    right:0; }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-appear{\n      -webkit-transform:translateY(100%);\n              transform:translateY(100%); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{\n      -webkit-transform:translateY(0);\n              transform:translateY(0);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:200ms;\n              transition-duration:200ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-exit{\n      -webkit-transform:translateY(0);\n              transform:translateY(0); }\n    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(\n    .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{\n      -webkit-transform:translateY(100%);\n              transform:translateY(100%);\n      -webkit-transition-delay:0;\n              transition-delay:0;\n      -webkit-transition-duration:100ms;\n              transition-duration:100ms;\n      -webkit-transition-property:-webkit-transform;\n      transition-property:-webkit-transform;\n      transition-property:transform;\n      transition-property:transform, -webkit-transform;\n      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-drawer.bp3-dark,\n  .bp3-dark .bp3-drawer{\n    background:#30404d;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n\n.bp3-drawer-header{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  border-radius:0;\n  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);\n          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  min-height:40px;\n  padding:5px;\n  padding-left:20px;\n  position:relative; }\n  .bp3-drawer-header .bp3-icon-large,\n  .bp3-drawer-header .bp3-icon{\n    color:#5c7080;\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto;\n    margin-right:10px; }\n  .bp3-drawer-header .bp3-heading{\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    word-wrap:normal;\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto;\n    line-height:inherit;\n    margin:0; }\n    .bp3-drawer-header .bp3-heading:last-child{\n      margin-right:20px; }\n  .bp3-dark .bp3-drawer-header{\n    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);\n            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-drawer-header .bp3-icon-large,\n    .bp3-dark .bp3-drawer-header .bp3-icon{\n      color:#a7b6c2; }\n\n.bp3-drawer-body{\n  -webkit-box-flex:1;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto;\n  line-height:18px;\n  overflow:auto; }\n\n.bp3-drawer-footer{\n  -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);\n          box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  padding:10px 20px;\n  position:relative; }\n  .bp3-dark .bp3-drawer-footer{\n    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);\n            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }\n.bp3-editable-text{\n  cursor:text;\n  display:inline-block;\n  max-width:100%;\n  position:relative;\n  vertical-align:top;\n  white-space:nowrap; }\n  .bp3-editable-text::before{\n    bottom:-3px;\n    left:-3px;\n    position:absolute;\n    right:-3px;\n    top:-3px;\n    border-radius:3px;\n    content:\"\";\n    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-editable-text:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }\n  .bp3-editable-text.bp3-editable-text-editing::before{\n    background-color:#ffffff;\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-editable-text.bp3-disabled::before{\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,\n  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{\n    color:#137cbd; }\n  .bp3-editable-text.bp3-intent-primary:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }\n  .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,\n  .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{\n    color:#0f9960; }\n  .bp3-editable-text.bp3-intent-success:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);\n            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }\n  .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,\n  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{\n    color:#d9822b; }\n  .bp3-editable-text.bp3-intent-warning:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);\n            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }\n  .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,\n  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{\n    color:#db3737; }\n  .bp3-editable-text.bp3-intent-danger:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);\n            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }\n  .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-editable-text:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }\n  .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{\n    background-color:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-disabled::before{\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{\n    color:#48aff0; }\n  .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);\n            box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{\n    color:#3dcc91; }\n  .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);\n            box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{\n    color:#ffb366; }\n  .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);\n            box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{\n    color:#ff7373; }\n  .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{\n    -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);\n            box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }\n  .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{\n    -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n\n.bp3-editable-text-input,\n.bp3-editable-text-content{\n  color:inherit;\n  display:inherit;\n  font:inherit;\n  letter-spacing:inherit;\n  max-width:inherit;\n  min-width:inherit;\n  position:relative;\n  resize:none;\n  text-transform:inherit;\n  vertical-align:top; }\n\n.bp3-editable-text-input{\n  background:none;\n  border:none;\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  padding:0;\n  white-space:pre-wrap;\n  width:100%; }\n  .bp3-editable-text-input::-webkit-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-editable-text-input::-moz-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-editable-text-input:-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-editable-text-input::-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-editable-text-input::placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-editable-text-input:focus{\n    outline:none; }\n  .bp3-editable-text-input::-ms-clear{\n    display:none; }\n\n.bp3-editable-text-content{\n  overflow:hidden;\n  padding-right:2px;\n  text-overflow:ellipsis;\n  white-space:pre; }\n  .bp3-editable-text-editing > .bp3-editable-text-content{\n    left:0;\n    position:absolute;\n    visibility:hidden; }\n  .bp3-editable-text-placeholder > .bp3-editable-text-content{\n    color:rgba(92, 112, 128, 0.6); }\n    .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{\n      color:rgba(167, 182, 194, 0.6); }\n\n.bp3-editable-text.bp3-multiline{\n  display:block; }\n  .bp3-editable-text.bp3-multiline .bp3-editable-text-content{\n    overflow:auto;\n    white-space:pre-wrap;\n    word-wrap:break-word; }\n.bp3-divider{\n  border-bottom:1px solid rgba(16, 22, 26, 0.15);\n  border-right:1px solid rgba(16, 22, 26, 0.15);\n  margin:5px; }\n  .bp3-dark .bp3-divider{\n    border-color:rgba(16, 22, 26, 0.4); }\n.bp3-control-group{\n  -webkit-transform:translateZ(0);\n          transform:translateZ(0);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:stretch;\n      -ms-flex-align:stretch;\n          align-items:stretch; }\n  .bp3-control-group > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-control-group > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-control-group .bp3-button,\n  .bp3-control-group .bp3-html-select,\n  .bp3-control-group .bp3-input,\n  .bp3-control-group .bp3-select{\n    position:relative; }\n  .bp3-control-group .bp3-input{\n    border-radius:inherit;\n    z-index:2; }\n    .bp3-control-group .bp3-input:focus{\n      border-radius:3px;\n      z-index:14; }\n    .bp3-control-group .bp3-input[class*=\"bp3-intent\"]{\n      z-index:13; }\n      .bp3-control-group .bp3-input[class*=\"bp3-intent\"]:focus{\n        z-index:15; }\n    .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{\n      z-index:1; }\n  .bp3-control-group .bp3-input-group[class*=\"bp3-intent\"] .bp3-input{\n    z-index:13; }\n    .bp3-control-group .bp3-input-group[class*=\"bp3-intent\"] .bp3-input:focus{\n      z-index:15; }\n  .bp3-control-group .bp3-button,\n  .bp3-control-group .bp3-html-select select,\n  .bp3-control-group .bp3-select select{\n    -webkit-transform:translateZ(0);\n            transform:translateZ(0);\n    border-radius:inherit;\n    z-index:4; }\n    .bp3-control-group .bp3-button:focus,\n    .bp3-control-group .bp3-html-select select:focus,\n    .bp3-control-group .bp3-select select:focus{\n      z-index:5; }\n    .bp3-control-group .bp3-button:hover,\n    .bp3-control-group .bp3-html-select select:hover,\n    .bp3-control-group .bp3-select select:hover{\n      z-index:6; }\n    .bp3-control-group .bp3-button:active,\n    .bp3-control-group .bp3-html-select select:active,\n    .bp3-control-group .bp3-select select:active{\n      z-index:7; }\n    .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,\n    .bp3-control-group .bp3-html-select select[readonly],\n    .bp3-control-group .bp3-html-select select:disabled,\n    .bp3-control-group .bp3-html-select select.bp3-disabled,\n    .bp3-control-group .bp3-select select[readonly],\n    .bp3-control-group .bp3-select select:disabled,\n    .bp3-control-group .bp3-select select.bp3-disabled{\n      z-index:3; }\n    .bp3-control-group .bp3-button[class*=\"bp3-intent\"],\n    .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"],\n    .bp3-control-group .bp3-select select[class*=\"bp3-intent\"]{\n      z-index:9; }\n      .bp3-control-group .bp3-button[class*=\"bp3-intent\"]:focus,\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"]:focus,\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"]:focus{\n        z-index:10; }\n      .bp3-control-group .bp3-button[class*=\"bp3-intent\"]:hover,\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"]:hover,\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"]:hover{\n        z-index:11; }\n      .bp3-control-group .bp3-button[class*=\"bp3-intent\"]:active,\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"]:active,\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"]:active{\n        z-index:12; }\n      .bp3-control-group .bp3-button[class*=\"bp3-intent\"][readonly], .bp3-control-group .bp3-button[class*=\"bp3-intent\"]:disabled, .bp3-control-group .bp3-button[class*=\"bp3-intent\"].bp3-disabled,\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"][readonly],\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"]:disabled,\n      .bp3-control-group .bp3-html-select select[class*=\"bp3-intent\"].bp3-disabled,\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"][readonly],\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"]:disabled,\n      .bp3-control-group .bp3-select select[class*=\"bp3-intent\"].bp3-disabled{\n        z-index:8; }\n  .bp3-control-group .bp3-input-group > .bp3-icon,\n  .bp3-control-group .bp3-input-group > .bp3-button,\n  .bp3-control-group .bp3-input-group > .bp3-input-left-container,\n  .bp3-control-group .bp3-input-group > .bp3-input-action{\n    z-index:16; }\n  .bp3-control-group .bp3-select::after,\n  .bp3-control-group .bp3-html-select::after,\n  .bp3-control-group .bp3-select > .bp3-icon,\n  .bp3-control-group .bp3-html-select > .bp3-icon{\n    z-index:17; }\n  .bp3-control-group .bp3-select:focus-within{\n    z-index:5; }\n  .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){\n    margin-right:-1px; }\n  .bp3-control-group:not(.bp3-vertical) > .bp3-divider:not(:first-child){\n    margin-left:6px; }\n  .bp3-dark .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){\n    margin-right:0; }\n  .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{\n    margin-left:1px; }\n  .bp3-control-group .bp3-popover-wrapper,\n  .bp3-control-group .bp3-popover-target{\n    border-radius:inherit; }\n  .bp3-control-group > :first-child{\n    border-radius:3px 0 0 3px; }\n  .bp3-control-group > :last-child{\n    border-radius:0 3px 3px 0;\n    margin-right:0; }\n  .bp3-control-group > :only-child{\n    border-radius:3px;\n    margin-right:0; }\n  .bp3-control-group .bp3-input-group .bp3-button{\n    border-radius:3px; }\n  .bp3-control-group .bp3-numeric-input:not(:first-child) .bp3-input-group{\n    border-bottom-left-radius:0;\n    border-top-left-radius:0; }\n  .bp3-control-group.bp3-fill{\n    width:100%; }\n  .bp3-control-group > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto; }\n  .bp3-control-group.bp3-fill > *:not(.bp3-fixed){\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto; }\n  .bp3-control-group.bp3-vertical{\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n    .bp3-control-group.bp3-vertical > *{\n      margin-top:-1px; }\n    .bp3-control-group.bp3-vertical > :first-child{\n      border-radius:3px 3px 0 0;\n      margin-top:0; }\n    .bp3-control-group.bp3-vertical > :last-child{\n      border-radius:0 0 3px 3px; }\n.bp3-control{\n  cursor:pointer;\n  display:block;\n  margin-bottom:10px;\n  position:relative;\n  text-transform:none; }\n  .bp3-control input:checked ~ .bp3-control-indicator{\n    background-color:#137cbd;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n  .bp3-control:hover input:checked ~ .bp3-control-indicator{\n    background-color:#106ba3;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n  .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{\n    background:#0e5a8a;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-control input:disabled:checked ~ .bp3-control-indicator{\n    background:rgba(19, 124, 189, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{\n    background-color:#106ba3;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{\n    background-color:#0e5a8a;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{\n    background:rgba(14, 90, 138, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-control:not(.bp3-align-right){\n    padding-left:26px; }\n    .bp3-control:not(.bp3-align-right) .bp3-control-indicator{\n      margin-left:-26px; }\n  .bp3-control.bp3-align-right{\n    padding-right:26px; }\n    .bp3-control.bp3-align-right .bp3-control-indicator{\n      margin-right:-26px; }\n  .bp3-control.bp3-disabled{\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed; }\n  .bp3-control.bp3-inline{\n    display:inline-block;\n    margin-right:20px; }\n  .bp3-control input{\n    left:0;\n    opacity:0;\n    position:absolute;\n    top:0;\n    z-index:-1; }\n  .bp3-control .bp3-control-indicator{\n    background-clip:padding-box;\n    background-color:#f5f8fa;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n    border:none;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n    cursor:pointer;\n    display:inline-block;\n    font-size:16px;\n    height:1em;\n    margin-right:10px;\n    margin-top:-3px;\n    position:relative;\n    -webkit-user-select:none;\n       -moz-user-select:none;\n        -ms-user-select:none;\n            user-select:none;\n    vertical-align:middle;\n    width:1em; }\n    .bp3-control .bp3-control-indicator::before{\n      content:\"\";\n      display:block;\n      height:1em;\n      width:1em; }\n  .bp3-control:hover .bp3-control-indicator{\n    background-color:#ebf1f5; }\n  .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{\n    background:#d8e1e8;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-control input:disabled ~ .bp3-control-indicator{\n    background:rgba(206, 217, 224, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    cursor:not-allowed; }\n  .bp3-control input:focus ~ .bp3-control-indicator{\n    outline:rgba(19, 124, 189, 0.6) auto 2px;\n    outline-offset:2px;\n    -moz-outline-radius:6px; }\n  .bp3-control.bp3-align-right .bp3-control-indicator{\n    float:right;\n    margin-left:10px;\n    margin-top:1px; }\n  .bp3-control.bp3-large{\n    font-size:16px; }\n    .bp3-control.bp3-large:not(.bp3-align-right){\n      padding-left:30px; }\n      .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{\n        margin-left:-30px; }\n    .bp3-control.bp3-large.bp3-align-right{\n      padding-right:30px; }\n      .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{\n        margin-right:-30px; }\n    .bp3-control.bp3-large .bp3-control-indicator{\n      font-size:20px; }\n    .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{\n      margin-top:0; }\n  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{\n    background-color:#137cbd;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n    color:#ffffff; }\n  .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{\n    background-color:#106ba3;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }\n  .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{\n    background:#0e5a8a;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{\n    background:rgba(19, 124, 189, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{\n    background-color:#106ba3;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{\n    background-color:#0e5a8a;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{\n    background:rgba(14, 90, 138, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-control.bp3-checkbox .bp3-control-indicator{\n    border-radius:3px; }\n  .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{\n    background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='white'/%3e%3c/svg%3e\"); }\n  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{\n    background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e\"); }\n  .bp3-control.bp3-radio .bp3-control-indicator{\n    border-radius:50%; }\n  .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{\n    background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }\n  .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{\n    opacity:0.5; }\n  .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{\n    -moz-outline-radius:16px; }\n  .bp3-control.bp3-switch input ~ .bp3-control-indicator{\n    background:rgba(167, 182, 194, 0.5); }\n  .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{\n    background:rgba(115, 134, 148, 0.5); }\n  .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{\n    background:rgba(92, 112, 128, 0.5); }\n  .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{\n    background:rgba(206, 217, 224, 0.5); }\n    .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{\n      background:rgba(255, 255, 255, 0.8); }\n  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{\n    background:#137cbd; }\n  .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{\n    background:#106ba3; }\n  .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{\n    background:#0e5a8a; }\n  .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{\n    background:rgba(19, 124, 189, 0.5); }\n    .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{\n      background:rgba(255, 255, 255, 0.8); }\n  .bp3-control.bp3-switch:not(.bp3-align-right){\n    padding-left:38px; }\n    .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{\n      margin-left:-38px; }\n  .bp3-control.bp3-switch.bp3-align-right{\n    padding-right:38px; }\n    .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{\n      margin-right:-38px; }\n  .bp3-control.bp3-switch .bp3-control-indicator{\n    border:none;\n    border-radius:1.75em;\n    -webkit-box-shadow:none !important;\n            box-shadow:none !important;\n    min-width:1.75em;\n    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    width:auto; }\n    .bp3-control.bp3-switch .bp3-control-indicator::before{\n      background:#ffffff;\n      border-radius:50%;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n      height:calc(1em - 4px);\n      left:0;\n      margin:2px;\n      position:absolute;\n      -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n      transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n      width:calc(1em - 4px); }\n  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{\n    left:calc(100% - 1em); }\n  .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){\n    padding-left:45px; }\n    .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{\n      margin-left:-45px; }\n  .bp3-control.bp3-switch.bp3-large.bp3-align-right{\n    padding-right:45px; }\n    .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{\n      margin-right:-45px; }\n  .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{\n    background:rgba(16, 22, 26, 0.5); }\n  .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{\n    background:rgba(16, 22, 26, 0.7); }\n  .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{\n    background:rgba(16, 22, 26, 0.9); }\n  .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{\n    background:rgba(57, 75, 89, 0.5); }\n    .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{\n      background:rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{\n    background:#137cbd; }\n  .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{\n    background:#106ba3; }\n  .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{\n    background:#0e5a8a; }\n  .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{\n    background:rgba(14, 90, 138, 0.5); }\n    .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{\n      background:rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{\n    background:#394b59;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-control.bp3-switch .bp3-switch-inner-text{\n    font-size:0.7em;\n    text-align:center; }\n  .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{\n    line-height:0;\n    margin-left:0.5em;\n    margin-right:1.2em;\n    visibility:hidden; }\n  .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{\n    line-height:1em;\n    margin-left:1.2em;\n    margin-right:0.5em;\n    visibility:visible; }\n  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{\n    line-height:1em;\n    visibility:visible; }\n  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{\n    line-height:0;\n    visibility:hidden; }\n  .bp3-dark .bp3-control{\n    color:#f5f8fa; }\n    .bp3-dark .bp3-control.bp3-disabled{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-control .bp3-control-indicator{\n      background-color:#394b59;\n      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));\n      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-control:hover .bp3-control-indicator{\n      background-color:#30404d; }\n    .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{\n      background:#202b33;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{\n      background:rgba(57, 75, 89, 0.5);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      cursor:not-allowed; }\n    .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{\n      color:rgba(167, 182, 194, 0.6); }\n.bp3-file-input{\n  cursor:pointer;\n  display:inline-block;\n  height:30px;\n  position:relative; }\n  .bp3-file-input input{\n    margin:0;\n    min-width:200px;\n    opacity:0; }\n    .bp3-file-input input:disabled + .bp3-file-upload-input,\n    .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{\n      background:rgba(206, 217, 224, 0.5);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed;\n      resize:none; }\n      .bp3-file-input input:disabled + .bp3-file-upload-input::after,\n      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{\n        background-color:rgba(206, 217, 224, 0.5);\n        background-image:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:rgba(92, 112, 128, 0.6);\n        cursor:not-allowed;\n        outline:none; }\n        .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,\n        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,\n        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{\n          background:rgba(206, 217, 224, 0.7); }\n      .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark\n      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{\n        background:rgba(57, 75, 89, 0.5);\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:rgba(167, 182, 194, 0.6); }\n        .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark\n        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{\n          background-color:rgba(57, 75, 89, 0.5);\n          background-image:none;\n          -webkit-box-shadow:none;\n                  box-shadow:none;\n          color:rgba(167, 182, 194, 0.6); }\n          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark\n          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{\n            background:rgba(57, 75, 89, 0.7); }\n  .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{\n    color:#182026; }\n  .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{\n    color:#f5f8fa; }\n  .bp3-file-input.bp3-fill{\n    width:100%; }\n  .bp3-file-input.bp3-large,\n  .bp3-large .bp3-file-input{\n    height:40px; }\n  .bp3-file-input .bp3-file-upload-input-custom-text::after{\n    content:attr(bp3-button-text); }\n\n.bp3-file-upload-input{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  background:#ffffff;\n  border:none;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  color:#182026;\n  font-size:14px;\n  font-weight:400;\n  height:30px;\n  line-height:30px;\n  outline:none;\n  padding:0 10px;\n  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  vertical-align:middle;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  word-wrap:normal;\n  color:rgba(92, 112, 128, 0.6);\n  left:0;\n  padding-right:80px;\n  position:absolute;\n  right:0;\n  top:0;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-file-upload-input::-webkit-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-file-upload-input::-moz-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-file-upload-input:-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-file-upload-input::-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-file-upload-input::placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-file-upload-input[type=\"search\"], .bp3-file-upload-input.bp3-round{\n    border-radius:30px;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    padding-left:10px; }\n  .bp3-file-upload-input[readonly]{\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }\n  .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{\n    background:rgba(206, 217, 224, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed;\n    resize:none; }\n  .bp3-file-upload-input::after{\n    background-color:#f5f8fa;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n    color:#182026;\n    min-height:24px;\n    min-width:24px;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    word-wrap:normal;\n    border-radius:3px;\n    content:\"Browse\";\n    line-height:24px;\n    margin:3px;\n    position:absolute;\n    right:0;\n    text-align:center;\n    top:0;\n    width:70px; }\n    .bp3-file-upload-input::after:hover{\n      background-clip:padding-box;\n      background-color:#ebf1f5;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n    .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{\n      background-color:#d8e1e8;\n      background-image:none;\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{\n      background-color:rgba(206, 217, 224, 0.5);\n      background-image:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(92, 112, 128, 0.6);\n      cursor:not-allowed;\n      outline:none; }\n      .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{\n        background:rgba(206, 217, 224, 0.7); }\n  .bp3-file-upload-input:hover::after{\n    background-clip:padding-box;\n    background-color:#ebf1f5;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n  .bp3-file-upload-input:active::after{\n    background-color:#d8e1e8;\n    background-image:none;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-large .bp3-file-upload-input{\n    font-size:16px;\n    height:40px;\n    line-height:40px;\n    padding-right:95px; }\n    .bp3-large .bp3-file-upload-input[type=\"search\"], .bp3-large .bp3-file-upload-input.bp3-round{\n      padding:0 15px; }\n    .bp3-large .bp3-file-upload-input::after{\n      min-height:30px;\n      min-width:30px;\n      line-height:30px;\n      margin:5px;\n      width:85px; }\n  .bp3-dark .bp3-file-upload-input{\n    background:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa;\n    color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input::-moz-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input::placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input:focus{\n      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-file-upload-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{\n      background:rgba(57, 75, 89, 0.5);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-file-upload-input::after{\n      background-color:#394b59;\n      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));\n      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n      color:#f5f8fa; }\n      .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{\n        color:#f5f8fa; }\n      .bp3-dark .bp3-file-upload-input::after:hover{\n        background-color:#30404d;\n        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{\n        background-color:#202b33;\n        background-image:none;\n        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n      .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{\n        background-color:rgba(57, 75, 89, 0.5);\n        background-image:none;\n        -webkit-box-shadow:none;\n                box-shadow:none;\n        color:rgba(167, 182, 194, 0.6); }\n        .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{\n          background:rgba(57, 75, 89, 0.7); }\n      .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{\n        background:rgba(16, 22, 26, 0.5);\n        stroke:#8a9ba8; }\n    .bp3-dark .bp3-file-upload-input:hover::after{\n      background-color:#30404d;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-file-upload-input:active::after{\n      background-color:#202b33;\n      background-image:none;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n.bp3-file-upload-input::after{\n  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n.bp3-form-group{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  margin:0 0 15px; }\n  .bp3-form-group label.bp3-label{\n    margin-bottom:5px; }\n  .bp3-form-group .bp3-control{\n    margin-top:7px; }\n  .bp3-form-group .bp3-form-helper-text{\n    color:#5c7080;\n    font-size:12px;\n    margin-top:5px; }\n  .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{\n    color:#106ba3; }\n  .bp3-form-group.bp3-intent-success .bp3-form-helper-text{\n    color:#0d8050; }\n  .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{\n    color:#bf7326; }\n  .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{\n    color:#c23030; }\n  .bp3-form-group.bp3-inline{\n    -webkit-box-align:start;\n        -ms-flex-align:start;\n            align-items:flex-start;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row; }\n    .bp3-form-group.bp3-inline.bp3-large label.bp3-label{\n      line-height:40px;\n      margin:0 10px 0 0; }\n    .bp3-form-group.bp3-inline label.bp3-label{\n      line-height:30px;\n      margin:0 10px 0 0; }\n  .bp3-form-group.bp3-disabled .bp3-label,\n  .bp3-form-group.bp3-disabled .bp3-text-muted,\n  .bp3-form-group.bp3-disabled .bp3-form-helper-text{\n    color:rgba(92, 112, 128, 0.6) !important; }\n  .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{\n    color:#48aff0; }\n  .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{\n    color:#3dcc91; }\n  .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{\n    color:#ffb366; }\n  .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{\n    color:#ff7373; }\n  .bp3-dark .bp3-form-group .bp3-form-helper-text{\n    color:#a7b6c2; }\n  .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,\n  .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,\n  .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{\n    color:rgba(167, 182, 194, 0.6) !important; }\n.bp3-input-group{\n  display:block;\n  position:relative; }\n  .bp3-input-group .bp3-input{\n    position:relative;\n    width:100%; }\n    .bp3-input-group .bp3-input:not(:first-child){\n      padding-left:30px; }\n    .bp3-input-group .bp3-input:not(:last-child){\n      padding-right:30px; }\n  .bp3-input-group .bp3-input-action,\n  .bp3-input-group > .bp3-input-left-container,\n  .bp3-input-group > .bp3-button,\n  .bp3-input-group > .bp3-icon{\n    position:absolute;\n    top:0; }\n    .bp3-input-group .bp3-input-action:first-child,\n    .bp3-input-group > .bp3-input-left-container:first-child,\n    .bp3-input-group > .bp3-button:first-child,\n    .bp3-input-group > .bp3-icon:first-child{\n      left:0; }\n    .bp3-input-group .bp3-input-action:last-child,\n    .bp3-input-group > .bp3-input-left-container:last-child,\n    .bp3-input-group > .bp3-button:last-child,\n    .bp3-input-group > .bp3-icon:last-child{\n      right:0; }\n  .bp3-input-group .bp3-button{\n    min-height:24px;\n    min-width:24px;\n    margin:3px;\n    padding:0 7px; }\n    .bp3-input-group .bp3-button:empty{\n      padding:0; }\n  .bp3-input-group > .bp3-input-left-container,\n  .bp3-input-group > .bp3-icon{\n    z-index:1; }\n  .bp3-input-group > .bp3-input-left-container > .bp3-icon,\n  .bp3-input-group > .bp3-icon{\n    color:#5c7080; }\n    .bp3-input-group > .bp3-input-left-container > .bp3-icon:empty,\n    .bp3-input-group > .bp3-icon:empty{\n      font-family:\"Icons16\", sans-serif;\n      font-size:16px;\n      font-style:normal;\n      font-weight:400;\n      line-height:1;\n      -moz-osx-font-smoothing:grayscale;\n      -webkit-font-smoothing:antialiased; }\n  .bp3-input-group > .bp3-input-left-container > .bp3-icon,\n  .bp3-input-group > .bp3-icon,\n  .bp3-input-group .bp3-input-action > .bp3-spinner{\n    margin:7px; }\n  .bp3-input-group .bp3-tag{\n    margin:5px; }\n  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),\n  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){\n    color:#5c7080; }\n    .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){\n      color:#a7b6c2; }\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{\n      color:#5c7080; }\n  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,\n  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{\n    color:rgba(92, 112, 128, 0.6) !important; }\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,\n    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{\n      color:rgba(92, 112, 128, 0.6) !important; }\n  .bp3-input-group.bp3-disabled{\n    cursor:not-allowed; }\n    .bp3-input-group.bp3-disabled .bp3-icon{\n      color:rgba(92, 112, 128, 0.6); }\n  .bp3-input-group.bp3-large .bp3-button{\n    min-height:30px;\n    min-width:30px;\n    margin:5px; }\n  .bp3-input-group.bp3-large > .bp3-input-left-container > .bp3-icon,\n  .bp3-input-group.bp3-large > .bp3-icon,\n  .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{\n    margin:12px; }\n  .bp3-input-group.bp3-large .bp3-input{\n    font-size:16px;\n    height:40px;\n    line-height:40px; }\n    .bp3-input-group.bp3-large .bp3-input[type=\"search\"], .bp3-input-group.bp3-large .bp3-input.bp3-round{\n      padding:0 15px; }\n    .bp3-input-group.bp3-large .bp3-input:not(:first-child){\n      padding-left:40px; }\n    .bp3-input-group.bp3-large .bp3-input:not(:last-child){\n      padding-right:40px; }\n  .bp3-input-group.bp3-small .bp3-button{\n    min-height:20px;\n    min-width:20px;\n    margin:2px; }\n  .bp3-input-group.bp3-small .bp3-tag{\n    min-height:20px;\n    min-width:20px;\n    margin:2px; }\n  .bp3-input-group.bp3-small > .bp3-input-left-container > .bp3-icon,\n  .bp3-input-group.bp3-small > .bp3-icon,\n  .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{\n    margin:4px; }\n  .bp3-input-group.bp3-small .bp3-input{\n    font-size:12px;\n    height:24px;\n    line-height:24px;\n    padding-left:8px;\n    padding-right:8px; }\n    .bp3-input-group.bp3-small .bp3-input[type=\"search\"], .bp3-input-group.bp3-small .bp3-input.bp3-round{\n      padding:0 12px; }\n    .bp3-input-group.bp3-small .bp3-input:not(:first-child){\n      padding-left:24px; }\n    .bp3-input-group.bp3-small .bp3-input:not(:last-child){\n      padding-right:24px; }\n  .bp3-input-group.bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto;\n    width:100%; }\n  .bp3-input-group.bp3-round .bp3-button,\n  .bp3-input-group.bp3-round .bp3-input,\n  .bp3-input-group.bp3-round .bp3-tag{\n    border-radius:30px; }\n  .bp3-dark .bp3-input-group .bp3-icon{\n    color:#a7b6c2; }\n  .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{\n    color:rgba(167, 182, 194, 0.6); }\n  .bp3-input-group.bp3-intent-primary .bp3-input{\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-primary .bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #137cbd;\n              box-shadow:inset 0 0 0 1px #137cbd; }\n    .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-input-group.bp3-intent-primary > .bp3-icon{\n    color:#106ba3; }\n    .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{\n      color:#48aff0; }\n  .bp3-input-group.bp3-intent-success .bp3-input{\n    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-success .bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-success .bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #0f9960;\n              box-shadow:inset 0 0 0 1px #0f9960; }\n    .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-input-group.bp3-intent-success > .bp3-icon{\n    color:#0d8050; }\n    .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{\n      color:#3dcc91; }\n  .bp3-input-group.bp3-intent-warning .bp3-input{\n    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-warning .bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #d9822b;\n              box-shadow:inset 0 0 0 1px #d9822b; }\n    .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-input-group.bp3-intent-warning > .bp3-icon{\n    color:#bf7326; }\n    .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{\n      color:#ffb366; }\n  .bp3-input-group.bp3-intent-danger .bp3-input{\n    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-danger .bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #db3737;\n              box-shadow:inset 0 0 0 1px #db3737; }\n    .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-input-group.bp3-intent-danger > .bp3-icon{\n    color:#c23030; }\n    .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{\n      color:#ff7373; }\n.bp3-input{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  background:#ffffff;\n  border:none;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  color:#182026;\n  font-size:14px;\n  font-weight:400;\n  height:30px;\n  line-height:30px;\n  outline:none;\n  padding:0 10px;\n  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  vertical-align:middle; }\n  .bp3-input::-webkit-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input::-moz-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input:-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input::-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input::placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input:focus, .bp3-input.bp3-active{\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-input[type=\"search\"], .bp3-input.bp3-round{\n    border-radius:30px;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    padding-left:10px; }\n  .bp3-input[readonly]{\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }\n  .bp3-input:disabled, .bp3-input.bp3-disabled{\n    background:rgba(206, 217, 224, 0.5);\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed;\n    resize:none; }\n  .bp3-input.bp3-large{\n    font-size:16px;\n    height:40px;\n    line-height:40px; }\n    .bp3-input.bp3-large[type=\"search\"], .bp3-input.bp3-large.bp3-round{\n      padding:0 15px; }\n  .bp3-input.bp3-small{\n    font-size:12px;\n    height:24px;\n    line-height:24px;\n    padding-left:8px;\n    padding-right:8px; }\n    .bp3-input.bp3-small[type=\"search\"], .bp3-input.bp3-small.bp3-round{\n      padding:0 12px; }\n  .bp3-input.bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto;\n    width:100%; }\n  .bp3-dark .bp3-input{\n    background:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n    .bp3-dark .bp3-input::-webkit-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-input::-moz-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-input:-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-input::-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-input::placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{\n      background:rgba(57, 75, 89, 0.5);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(167, 182, 194, 0.6); }\n  .bp3-input.bp3-intent-primary{\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-primary:focus{\n      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-primary[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #137cbd;\n              box-shadow:inset 0 0 0 1px #137cbd; }\n    .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n    .bp3-dark .bp3-input.bp3-intent-primary{\n      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-primary:focus{\n        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-primary[readonly]{\n        -webkit-box-shadow:inset 0 0 0 1px #137cbd;\n                box-shadow:inset 0 0 0 1px #137cbd; }\n      .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n  .bp3-input.bp3-intent-success{\n    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-success:focus{\n      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-success[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #0f9960;\n              box-shadow:inset 0 0 0 1px #0f9960; }\n    .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n    .bp3-dark .bp3-input.bp3-intent-success{\n      -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-success:focus{\n        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n                box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-success[readonly]{\n        -webkit-box-shadow:inset 0 0 0 1px #0f9960;\n                box-shadow:inset 0 0 0 1px #0f9960; }\n      .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n  .bp3-input.bp3-intent-warning{\n    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-warning:focus{\n      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-warning[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #d9822b;\n              box-shadow:inset 0 0 0 1px #d9822b; }\n    .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n    .bp3-dark .bp3-input.bp3-intent-warning{\n      -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-warning:focus{\n        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n                box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-warning[readonly]{\n        -webkit-box-shadow:inset 0 0 0 1px #d9822b;\n                box-shadow:inset 0 0 0 1px #d9822b; }\n      .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n  .bp3-input.bp3-intent-danger{\n    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-danger:focus{\n      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-input.bp3-intent-danger[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px #db3737;\n              box-shadow:inset 0 0 0 1px #db3737; }\n    .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n    .bp3-dark .bp3-input.bp3-intent-danger{\n      -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-danger:focus{\n        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n                box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n      .bp3-dark .bp3-input.bp3-intent-danger[readonly]{\n        -webkit-box-shadow:inset 0 0 0 1px #db3737;\n                box-shadow:inset 0 0 0 1px #db3737; }\n      .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n  .bp3-input::-ms-clear{\n    display:none; }\ntextarea.bp3-input{\n  max-width:100%;\n  padding:10px; }\n  textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{\n    height:auto;\n    line-height:inherit; }\n  textarea.bp3-input.bp3-small{\n    padding:8px; }\n  .bp3-dark textarea.bp3-input{\n    background:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n    .bp3-dark textarea.bp3-input::-webkit-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark textarea.bp3-input::-moz-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark textarea.bp3-input:-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark textarea.bp3-input::-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark textarea.bp3-input::placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark textarea.bp3-input:focus{\n      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark textarea.bp3-input[readonly]{\n      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{\n      background:rgba(57, 75, 89, 0.5);\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(167, 182, 194, 0.6); }\nlabel.bp3-label{\n  display:block;\n  margin-bottom:15px;\n  margin-top:0; }\n  label.bp3-label .bp3-html-select,\n  label.bp3-label .bp3-input,\n  label.bp3-label .bp3-select,\n  label.bp3-label .bp3-slider,\n  label.bp3-label .bp3-popover-wrapper{\n    display:block;\n    margin-top:5px;\n    text-transform:none; }\n  label.bp3-label .bp3-button-group{\n    margin-top:5px; }\n  label.bp3-label .bp3-select select,\n  label.bp3-label .bp3-html-select select{\n    font-weight:400;\n    vertical-align:top;\n    width:100%; }\n  label.bp3-label.bp3-disabled,\n  label.bp3-label.bp3-disabled .bp3-text-muted{\n    color:rgba(92, 112, 128, 0.6); }\n  label.bp3-label.bp3-inline{\n    line-height:30px; }\n    label.bp3-label.bp3-inline .bp3-html-select,\n    label.bp3-label.bp3-inline .bp3-input,\n    label.bp3-label.bp3-inline .bp3-input-group,\n    label.bp3-label.bp3-inline .bp3-select,\n    label.bp3-label.bp3-inline .bp3-popover-wrapper{\n      display:inline-block;\n      margin:0 0 0 5px;\n      vertical-align:top; }\n    label.bp3-label.bp3-inline .bp3-button-group{\n      margin:0 0 0 5px; }\n    label.bp3-label.bp3-inline .bp3-input-group .bp3-input{\n      margin-left:0; }\n    label.bp3-label.bp3-inline.bp3-large{\n      line-height:40px; }\n  label.bp3-label:not(.bp3-inline) .bp3-popover-target{\n    display:block; }\n  .bp3-dark label.bp3-label{\n    color:#f5f8fa; }\n    .bp3-dark label.bp3-label.bp3-disabled,\n    .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{\n      color:rgba(167, 182, 194, 0.6); }\n.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{\n  -webkit-box-flex:1;\n      -ms-flex:1 1 14px;\n          flex:1 1 14px;\n  min-height:0;\n  padding:0;\n  width:30px; }\n  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{\n    border-radius:0 3px 0 0; }\n  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{\n    border-radius:0 0 3px 0; }\n\n.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{\n  border-radius:3px 0 0 0; }\n\n.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{\n  border-radius:0 0 0 3px; }\n\n.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{\n  width:40px; }\n\nform{\n  display:block; }\n.bp3-html-select select,\n.bp3-select select{\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  border:none;\n  border-radius:3px;\n  cursor:pointer;\n  font-size:14px;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  padding:5px 10px;\n  text-align:left;\n  vertical-align:middle;\n  background-color:#f5f8fa;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));\n  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n  color:#182026;\n  -moz-appearance:none;\n  -webkit-appearance:none;\n  border-radius:3px;\n  height:30px;\n  padding:0 25px 0 10px;\n  width:100%; }\n  .bp3-html-select select > *, .bp3-select select > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-html-select select::before,\n  .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{\n    margin-right:7px; }\n  .bp3-html-select select:empty::before,\n  .bp3-select select:empty::before,\n  .bp3-html-select select > :last-child,\n  .bp3-select select > :last-child{\n    margin-right:0; }\n  .bp3-html-select select:hover,\n  .bp3-select select:hover{\n    background-clip:padding-box;\n    background-color:#ebf1f5;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n  .bp3-html-select select:active,\n  .bp3-select select:active, .bp3-html-select select.bp3-active,\n  .bp3-select select.bp3-active{\n    background-color:#d8e1e8;\n    background-image:none;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-html-select select:disabled,\n  .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,\n  .bp3-select select.bp3-disabled{\n    background-color:rgba(206, 217, 224, 0.5);\n    background-image:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed;\n    outline:none; }\n    .bp3-html-select select:disabled.bp3-active,\n    .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,\n    .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,\n    .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,\n    .bp3-select select.bp3-disabled.bp3-active:hover{\n      background:rgba(206, 217, 224, 0.7); }\n\n.bp3-html-select.bp3-minimal select,\n.bp3-select.bp3-minimal select{\n  background:none;\n  -webkit-box-shadow:none;\n          box-shadow:none; }\n  .bp3-html-select.bp3-minimal select:hover,\n  .bp3-select.bp3-minimal select:hover{\n    background:rgba(167, 182, 194, 0.3);\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:#182026;\n    text-decoration:none; }\n  .bp3-html-select.bp3-minimal select:active,\n  .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,\n  .bp3-select.bp3-minimal select.bp3-active{\n    background:rgba(115, 134, 148, 0.3);\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:#182026; }\n  .bp3-html-select.bp3-minimal select:disabled,\n  .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,\n  .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,\n  .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,\n  .bp3-select.bp3-minimal select.bp3-disabled:hover{\n    background:none;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed; }\n    .bp3-html-select.bp3-minimal select:disabled.bp3-active,\n    .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,\n    .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{\n      background:rgba(115, 134, 148, 0.3); }\n  .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,\n  .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{\n    background:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:inherit; }\n    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,\n    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,\n    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,\n    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{\n      background:rgba(138, 155, 168, 0.15); }\n    .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,\n    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{\n      background:rgba(138, 155, 168, 0.3);\n      color:#f5f8fa; }\n    .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,\n    .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,\n    .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{\n      background:none;\n      color:rgba(167, 182, 194, 0.6);\n      cursor:not-allowed; }\n      .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{\n        background:rgba(138, 155, 168, 0.3); }\n  .bp3-html-select.bp3-minimal select.bp3-intent-primary,\n  .bp3-select.bp3-minimal select.bp3-intent-primary{\n    color:#106ba3; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,\n    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#106ba3; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-primary:hover{\n      background:rgba(19, 124, 189, 0.15);\n      color:#106ba3; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,\n    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{\n      background:rgba(19, 124, 189, 0.3);\n      color:#106ba3; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{\n      background:none;\n      color:rgba(16, 107, 163, 0.5); }\n      .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{\n        background:rgba(19, 124, 189, 0.3); }\n    .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{\n      stroke:#106ba3; }\n    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{\n      color:#48aff0; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{\n        background:rgba(19, 124, 189, 0.2);\n        color:#48aff0; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{\n        background:rgba(19, 124, 189, 0.3);\n        color:#48aff0; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{\n        background:none;\n        color:rgba(72, 175, 240, 0.5); }\n        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{\n          background:rgba(19, 124, 189, 0.3); }\n  .bp3-html-select.bp3-minimal select.bp3-intent-success,\n  .bp3-select.bp3-minimal select.bp3-intent-success{\n    color:#0d8050; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,\n    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#0d8050; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-success:hover{\n      background:rgba(15, 153, 96, 0.15);\n      color:#0d8050; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-success:active,\n    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{\n      background:rgba(15, 153, 96, 0.3);\n      color:#0d8050; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{\n      background:none;\n      color:rgba(13, 128, 80, 0.5); }\n      .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{\n        background:rgba(15, 153, 96, 0.3); }\n    .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{\n      stroke:#0d8050; }\n    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{\n      color:#3dcc91; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{\n        background:rgba(15, 153, 96, 0.2);\n        color:#3dcc91; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{\n        background:rgba(15, 153, 96, 0.3);\n        color:#3dcc91; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{\n        background:none;\n        color:rgba(61, 204, 145, 0.5); }\n        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{\n          background:rgba(15, 153, 96, 0.3); }\n  .bp3-html-select.bp3-minimal select.bp3-intent-warning,\n  .bp3-select.bp3-minimal select.bp3-intent-warning{\n    color:#bf7326; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,\n    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#bf7326; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-warning:hover{\n      background:rgba(217, 130, 43, 0.15);\n      color:#bf7326; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,\n    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{\n      background:rgba(217, 130, 43, 0.3);\n      color:#bf7326; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{\n      background:none;\n      color:rgba(191, 115, 38, 0.5); }\n      .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{\n        background:rgba(217, 130, 43, 0.3); }\n    .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{\n      stroke:#bf7326; }\n    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{\n      color:#ffb366; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{\n        background:rgba(217, 130, 43, 0.2);\n        color:#ffb366; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{\n        background:rgba(217, 130, 43, 0.3);\n        color:#ffb366; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{\n        background:none;\n        color:rgba(255, 179, 102, 0.5); }\n        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{\n          background:rgba(217, 130, 43, 0.3); }\n  .bp3-html-select.bp3-minimal select.bp3-intent-danger,\n  .bp3-select.bp3-minimal select.bp3-intent-danger{\n    color:#c23030; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,\n    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{\n      background:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:#c23030; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,\n    .bp3-select.bp3-minimal select.bp3-intent-danger:hover{\n      background:rgba(219, 55, 55, 0.15);\n      color:#c23030; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,\n    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,\n    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{\n      background:rgba(219, 55, 55, 0.3);\n      color:#c23030; }\n    .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,\n    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{\n      background:none;\n      color:rgba(194, 48, 48, 0.5); }\n      .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,\n      .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{\n        background:rgba(219, 55, 55, 0.3); }\n    .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{\n      stroke:#c23030; }\n    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,\n    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{\n      color:#ff7373; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{\n        background:rgba(219, 55, 55, 0.2);\n        color:#ff7373; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{\n        background:rgba(219, 55, 55, 0.3);\n        color:#ff7373; }\n      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,\n      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{\n        background:none;\n        color:rgba(255, 115, 115, 0.5); }\n        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,\n        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{\n          background:rgba(219, 55, 55, 0.3); }\n\n.bp3-html-select.bp3-large select,\n.bp3-select.bp3-large select{\n  font-size:16px;\n  height:40px;\n  padding-right:35px; }\n\n.bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{\n  background-color:#394b59;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));\n  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n  color:#f5f8fa; }\n  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{\n    color:#f5f8fa; }\n  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{\n    background-color:#30404d;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{\n    background-color:#202b33;\n    background-image:none;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{\n    background-color:rgba(57, 75, 89, 0.5);\n    background-image:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{\n      background:rgba(57, 75, 89, 0.7); }\n  .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{\n    background:rgba(16, 22, 26, 0.5);\n    stroke:#8a9ba8; }\n\n.bp3-html-select select:disabled,\n.bp3-select select:disabled{\n  background-color:rgba(206, 217, 224, 0.5);\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  color:rgba(92, 112, 128, 0.6);\n  cursor:not-allowed; }\n\n.bp3-html-select .bp3-icon,\n.bp3-select .bp3-icon, .bp3-select::after{\n  color:#5c7080;\n  pointer-events:none;\n  position:absolute;\n  right:7px;\n  top:7px; }\n  .bp3-html-select .bp3-disabled.bp3-icon,\n  .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{\n    color:rgba(92, 112, 128, 0.6); }\n.bp3-html-select,\n.bp3-select{\n  display:inline-block;\n  letter-spacing:normal;\n  position:relative;\n  vertical-align:middle; }\n  .bp3-html-select select::-ms-expand,\n  .bp3-select select::-ms-expand{\n    display:none; }\n  .bp3-html-select .bp3-icon,\n  .bp3-select .bp3-icon{\n    color:#5c7080; }\n    .bp3-html-select .bp3-icon:hover,\n    .bp3-select .bp3-icon:hover{\n      color:#182026; }\n    .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark\n    .bp3-select .bp3-icon{\n      color:#a7b6c2; }\n      .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark\n      .bp3-select .bp3-icon:hover{\n        color:#f5f8fa; }\n  .bp3-html-select.bp3-large::after,\n  .bp3-html-select.bp3-large .bp3-icon,\n  .bp3-select.bp3-large::after,\n  .bp3-select.bp3-large .bp3-icon{\n    right:12px;\n    top:12px; }\n  .bp3-html-select.bp3-fill,\n  .bp3-html-select.bp3-fill select,\n  .bp3-select.bp3-fill,\n  .bp3-select.bp3-fill select{\n    width:100%; }\n  .bp3-dark .bp3-html-select option, .bp3-dark\n  .bp3-select option{\n    background-color:#30404d;\n    color:#f5f8fa; }\n  .bp3-dark .bp3-html-select option:disabled, .bp3-dark\n  .bp3-select option:disabled{\n    color:rgba(167, 182, 194, 0.6); }\n  .bp3-dark .bp3-html-select::after, .bp3-dark\n  .bp3-select::after{\n    color:#a7b6c2; }\n\n.bp3-select::after{\n  font-family:\"Icons16\", sans-serif;\n  font-size:16px;\n  font-style:normal;\n  font-weight:400;\n  line-height:1;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  content:\"\"; }\n.bp3-running-text table, table.bp3-html-table{\n  border-spacing:0;\n  font-size:14px; }\n  .bp3-running-text table th, table.bp3-html-table th,\n  .bp3-running-text table td,\n  table.bp3-html-table td{\n    padding:11px;\n    text-align:left;\n    vertical-align:top; }\n  .bp3-running-text table th, table.bp3-html-table th{\n    color:#182026;\n    font-weight:600; }\n  \n  .bp3-running-text table td,\n  table.bp3-html-table td{\n    color:#182026; }\n  .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,\n  .bp3-running-text table tbody tr:first-child td,\n  table.bp3-html-table tbody tr:first-child td,\n  .bp3-running-text table tfoot tr:first-child th,\n  table.bp3-html-table tfoot tr:first-child th,\n  .bp3-running-text table tfoot tr:first-child td,\n  table.bp3-html-table tfoot tr:first-child td{\n    -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);\n            box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }\n  .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{\n    color:#f5f8fa; }\n  .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{\n    color:#f5f8fa; }\n  .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,\n  .bp3-dark .bp3-running-text table tbody tr:first-child td,\n  .bp3-running-text .bp3-dark table tbody tr:first-child td,\n  .bp3-dark table.bp3-html-table tbody tr:first-child td,\n  .bp3-dark .bp3-running-text table tfoot tr:first-child th,\n  .bp3-running-text .bp3-dark table tfoot tr:first-child th,\n  .bp3-dark table.bp3-html-table tfoot tr:first-child th,\n  .bp3-dark .bp3-running-text table tfoot tr:first-child td,\n  .bp3-running-text .bp3-dark table tfoot tr:first-child td,\n  .bp3-dark table.bp3-html-table tfoot tr:first-child td{\n    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);\n            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }\n\ntable.bp3-html-table.bp3-html-table-condensed th,\ntable.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,\ntable.bp3-html-table.bp3-small td{\n  padding-bottom:6px;\n  padding-top:6px; }\n\ntable.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{\n  background:rgba(191, 204, 214, 0.15); }\n\ntable.bp3-html-table.bp3-html-table-bordered th:not(:first-child){\n  -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);\n          box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }\n\ntable.bp3-html-table.bp3-html-table-bordered tbody tr td,\ntable.bp3-html-table.bp3-html-table-bordered tfoot tr td{\n  -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);\n          box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }\n  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),\n  table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){\n    -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);\n            box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }\n\ntable.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{\n  -webkit-box-shadow:none;\n          box-shadow:none; }\n  table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){\n    -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);\n            box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }\n\ntable.bp3-html-table.bp3-interactive tbody tr:hover td{\n  background-color:rgba(191, 204, 214, 0.3);\n  cursor:pointer; }\n\ntable.bp3-html-table.bp3-interactive tbody tr:active td{\n  background-color:rgba(191, 204, 214, 0.4); }\n\n.bp3-dark table.bp3-html-table{ }\n  .bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{\n    background:rgba(92, 112, 128, 0.15); }\n  .bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){\n    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);\n            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }\n  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td,\n  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td{\n    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);\n            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }\n    .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),\n    .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){\n      -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);\n              box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }\n  .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{\n    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);\n            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }\n    .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{\n    background-color:rgba(92, 112, 128, 0.3);\n    cursor:pointer; }\n  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{\n    background-color:rgba(92, 112, 128, 0.4); }\n\n.bp3-key-combo{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center; }\n  .bp3-key-combo > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-key-combo > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-key-combo::before,\n  .bp3-key-combo > *{\n    margin-right:5px; }\n  .bp3-key-combo:empty::before,\n  .bp3-key-combo > :last-child{\n    margin-right:0; }\n\n.bp3-hotkey-dialog{\n  padding-bottom:0;\n  top:40px; }\n  .bp3-hotkey-dialog .bp3-dialog-body{\n    margin:0;\n    padding:0; }\n  .bp3-hotkey-dialog .bp3-hotkey-label{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1; }\n\n.bp3-hotkey-column{\n  margin:auto;\n  max-height:80vh;\n  overflow-y:auto;\n  padding:30px; }\n  .bp3-hotkey-column .bp3-heading{\n    margin-bottom:20px; }\n    .bp3-hotkey-column .bp3-heading:not(:first-child){\n      margin-top:40px; }\n\n.bp3-hotkey{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:justify;\n      -ms-flex-pack:justify;\n          justify-content:space-between;\n  margin-left:0;\n  margin-right:0; }\n  .bp3-hotkey:not(:last-child){\n    margin-bottom:10px; }\n.bp3-icon{\n  display:inline-block;\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  vertical-align:text-bottom; }\n  .bp3-icon:not(:empty)::before{\n    content:\"\" !important;\n    content:unset !important; }\n  .bp3-icon > svg{\n    display:block; }\n    .bp3-icon > svg:not([fill]){\n      fill:currentColor; }\n\n.bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{\n  color:#106ba3; }\n  .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{\n    color:#48aff0; }\n\n.bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{\n  color:#0d8050; }\n  .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{\n    color:#3dcc91; }\n\n.bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{\n  color:#bf7326; }\n  .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{\n    color:#ffb366; }\n\n.bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{\n  color:#c23030; }\n  .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{\n    color:#ff7373; }\n\nspan.bp3-icon-standard{\n  font-family:\"Icons16\", sans-serif;\n  font-size:16px;\n  font-style:normal;\n  font-weight:400;\n  line-height:1;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  display:inline-block; }\n\nspan.bp3-icon-large{\n  font-family:\"Icons20\", sans-serif;\n  font-size:20px;\n  font-style:normal;\n  font-weight:400;\n  line-height:1;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  display:inline-block; }\n\nspan.bp3-icon:empty{\n  font-family:\"Icons20\";\n  font-size:inherit;\n  font-style:normal;\n  font-weight:400;\n  line-height:1; }\n  span.bp3-icon:empty::before{\n    -moz-osx-font-smoothing:grayscale;\n    -webkit-font-smoothing:antialiased; }\n\n.bp3-icon-add::before{\n  content:\"\"; }\n\n.bp3-icon-add-column-left::before{\n  content:\"\"; }\n\n.bp3-icon-add-column-right::before{\n  content:\"\"; }\n\n.bp3-icon-add-row-bottom::before{\n  content:\"\"; }\n\n.bp3-icon-add-row-top::before{\n  content:\"\"; }\n\n.bp3-icon-add-to-artifact::before{\n  content:\"\"; }\n\n.bp3-icon-add-to-folder::before{\n  content:\"\"; }\n\n.bp3-icon-airplane::before{\n  content:\"\"; }\n\n.bp3-icon-align-center::before{\n  content:\"\"; }\n\n.bp3-icon-align-justify::before{\n  content:\"\"; }\n\n.bp3-icon-align-left::before{\n  content:\"\"; }\n\n.bp3-icon-align-right::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-bottom::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-horizontal-center::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-left::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-right::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-top::before{\n  content:\"\"; }\n\n.bp3-icon-alignment-vertical-center::before{\n  content:\"\"; }\n\n.bp3-icon-annotation::before{\n  content:\"\"; }\n\n.bp3-icon-application::before{\n  content:\"\"; }\n\n.bp3-icon-applications::before{\n  content:\"\"; }\n\n.bp3-icon-archive::before{\n  content:\"\"; }\n\n.bp3-icon-arrow-bottom-left::before{\n  content:\"↙\"; }\n\n.bp3-icon-arrow-bottom-right::before{\n  content:\"↘\"; }\n\n.bp3-icon-arrow-down::before{\n  content:\"↓\"; }\n\n.bp3-icon-arrow-left::before{\n  content:\"←\"; }\n\n.bp3-icon-arrow-right::before{\n  content:\"→\"; }\n\n.bp3-icon-arrow-top-left::before{\n  content:\"↖\"; }\n\n.bp3-icon-arrow-top-right::before{\n  content:\"↗\"; }\n\n.bp3-icon-arrow-up::before{\n  content:\"↑\"; }\n\n.bp3-icon-arrows-horizontal::before{\n  content:\"↔\"; }\n\n.bp3-icon-arrows-vertical::before{\n  content:\"↕\"; }\n\n.bp3-icon-asterisk::before{\n  content:\"*\"; }\n\n.bp3-icon-automatic-updates::before{\n  content:\"\"; }\n\n.bp3-icon-badge::before{\n  content:\"\"; }\n\n.bp3-icon-ban-circle::before{\n  content:\"\"; }\n\n.bp3-icon-bank-account::before{\n  content:\"\"; }\n\n.bp3-icon-barcode::before{\n  content:\"\"; }\n\n.bp3-icon-blank::before{\n  content:\"\"; }\n\n.bp3-icon-blocked-person::before{\n  content:\"\"; }\n\n.bp3-icon-bold::before{\n  content:\"\"; }\n\n.bp3-icon-book::before{\n  content:\"\"; }\n\n.bp3-icon-bookmark::before{\n  content:\"\"; }\n\n.bp3-icon-box::before{\n  content:\"\"; }\n\n.bp3-icon-briefcase::before{\n  content:\"\"; }\n\n.bp3-icon-bring-data::before{\n  content:\"\"; }\n\n.bp3-icon-build::before{\n  content:\"\"; }\n\n.bp3-icon-calculator::before{\n  content:\"\"; }\n\n.bp3-icon-calendar::before{\n  content:\"\"; }\n\n.bp3-icon-camera::before{\n  content:\"\"; }\n\n.bp3-icon-caret-down::before{\n  content:\"⌄\"; }\n\n.bp3-icon-caret-left::before{\n  content:\"〈\"; }\n\n.bp3-icon-caret-right::before{\n  content:\"〉\"; }\n\n.bp3-icon-caret-up::before{\n  content:\"⌃\"; }\n\n.bp3-icon-cell-tower::before{\n  content:\"\"; }\n\n.bp3-icon-changes::before{\n  content:\"\"; }\n\n.bp3-icon-chart::before{\n  content:\"\"; }\n\n.bp3-icon-chat::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-backward::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-down::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-forward::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-left::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-right::before{\n  content:\"\"; }\n\n.bp3-icon-chevron-up::before{\n  content:\"\"; }\n\n.bp3-icon-circle::before{\n  content:\"\"; }\n\n.bp3-icon-circle-arrow-down::before{\n  content:\"\"; }\n\n.bp3-icon-circle-arrow-left::before{\n  content:\"\"; }\n\n.bp3-icon-circle-arrow-right::before{\n  content:\"\"; }\n\n.bp3-icon-circle-arrow-up::before{\n  content:\"\"; }\n\n.bp3-icon-citation::before{\n  content:\"\"; }\n\n.bp3-icon-clean::before{\n  content:\"\"; }\n\n.bp3-icon-clipboard::before{\n  content:\"\"; }\n\n.bp3-icon-cloud::before{\n  content:\"☁\"; }\n\n.bp3-icon-cloud-download::before{\n  content:\"\"; }\n\n.bp3-icon-cloud-upload::before{\n  content:\"\"; }\n\n.bp3-icon-code::before{\n  content:\"\"; }\n\n.bp3-icon-code-block::before{\n  content:\"\"; }\n\n.bp3-icon-cog::before{\n  content:\"\"; }\n\n.bp3-icon-collapse-all::before{\n  content:\"\"; }\n\n.bp3-icon-column-layout::before{\n  content:\"\"; }\n\n.bp3-icon-comment::before{\n  content:\"\"; }\n\n.bp3-icon-comparison::before{\n  content:\"\"; }\n\n.bp3-icon-compass::before{\n  content:\"\"; }\n\n.bp3-icon-compressed::before{\n  content:\"\"; }\n\n.bp3-icon-confirm::before{\n  content:\"\"; }\n\n.bp3-icon-console::before{\n  content:\"\"; }\n\n.bp3-icon-contrast::before{\n  content:\"\"; }\n\n.bp3-icon-control::before{\n  content:\"\"; }\n\n.bp3-icon-credit-card::before{\n  content:\"\"; }\n\n.bp3-icon-cross::before{\n  content:\"✗\"; }\n\n.bp3-icon-crown::before{\n  content:\"\"; }\n\n.bp3-icon-cube::before{\n  content:\"\"; }\n\n.bp3-icon-cube-add::before{\n  content:\"\"; }\n\n.bp3-icon-cube-remove::before{\n  content:\"\"; }\n\n.bp3-icon-curved-range-chart::before{\n  content:\"\"; }\n\n.bp3-icon-cut::before{\n  content:\"\"; }\n\n.bp3-icon-dashboard::before{\n  content:\"\"; }\n\n.bp3-icon-data-lineage::before{\n  content:\"\"; }\n\n.bp3-icon-database::before{\n  content:\"\"; }\n\n.bp3-icon-delete::before{\n  content:\"\"; }\n\n.bp3-icon-delta::before{\n  content:\"Δ\"; }\n\n.bp3-icon-derive-column::before{\n  content:\"\"; }\n\n.bp3-icon-desktop::before{\n  content:\"\"; }\n\n.bp3-icon-diagnosis::before{\n  content:\"\"; }\n\n.bp3-icon-diagram-tree::before{\n  content:\"\"; }\n\n.bp3-icon-direction-left::before{\n  content:\"\"; }\n\n.bp3-icon-direction-right::before{\n  content:\"\"; }\n\n.bp3-icon-disable::before{\n  content:\"\"; }\n\n.bp3-icon-document::before{\n  content:\"\"; }\n\n.bp3-icon-document-open::before{\n  content:\"\"; }\n\n.bp3-icon-document-share::before{\n  content:\"\"; }\n\n.bp3-icon-dollar::before{\n  content:\"$\"; }\n\n.bp3-icon-dot::before{\n  content:\"•\"; }\n\n.bp3-icon-double-caret-horizontal::before{\n  content:\"\"; }\n\n.bp3-icon-double-caret-vertical::before{\n  content:\"\"; }\n\n.bp3-icon-double-chevron-down::before{\n  content:\"\"; }\n\n.bp3-icon-double-chevron-left::before{\n  content:\"\"; }\n\n.bp3-icon-double-chevron-right::before{\n  content:\"\"; }\n\n.bp3-icon-double-chevron-up::before{\n  content:\"\"; }\n\n.bp3-icon-doughnut-chart::before{\n  content:\"\"; }\n\n.bp3-icon-download::before{\n  content:\"\"; }\n\n.bp3-icon-drag-handle-horizontal::before{\n  content:\"\"; }\n\n.bp3-icon-drag-handle-vertical::before{\n  content:\"\"; }\n\n.bp3-icon-draw::before{\n  content:\"\"; }\n\n.bp3-icon-drive-time::before{\n  content:\"\"; }\n\n.bp3-icon-duplicate::before{\n  content:\"\"; }\n\n.bp3-icon-edit::before{\n  content:\"✎\"; }\n\n.bp3-icon-eject::before{\n  content:\"⏏\"; }\n\n.bp3-icon-endorsed::before{\n  content:\"\"; }\n\n.bp3-icon-envelope::before{\n  content:\"✉\"; }\n\n.bp3-icon-equals::before{\n  content:\"\"; }\n\n.bp3-icon-eraser::before{\n  content:\"\"; }\n\n.bp3-icon-error::before{\n  content:\"\"; }\n\n.bp3-icon-euro::before{\n  content:\"€\"; }\n\n.bp3-icon-exchange::before{\n  content:\"\"; }\n\n.bp3-icon-exclude-row::before{\n  content:\"\"; }\n\n.bp3-icon-expand-all::before{\n  content:\"\"; }\n\n.bp3-icon-export::before{\n  content:\"\"; }\n\n.bp3-icon-eye-off::before{\n  content:\"\"; }\n\n.bp3-icon-eye-on::before{\n  content:\"\"; }\n\n.bp3-icon-eye-open::before{\n  content:\"\"; }\n\n.bp3-icon-fast-backward::before{\n  content:\"\"; }\n\n.bp3-icon-fast-forward::before{\n  content:\"\"; }\n\n.bp3-icon-feed::before{\n  content:\"\"; }\n\n.bp3-icon-feed-subscribed::before{\n  content:\"\"; }\n\n.bp3-icon-film::before{\n  content:\"\"; }\n\n.bp3-icon-filter::before{\n  content:\"\"; }\n\n.bp3-icon-filter-keep::before{\n  content:\"\"; }\n\n.bp3-icon-filter-list::before{\n  content:\"\"; }\n\n.bp3-icon-filter-open::before{\n  content:\"\"; }\n\n.bp3-icon-filter-remove::before{\n  content:\"\"; }\n\n.bp3-icon-flag::before{\n  content:\"⚑\"; }\n\n.bp3-icon-flame::before{\n  content:\"\"; }\n\n.bp3-icon-flash::before{\n  content:\"\"; }\n\n.bp3-icon-floppy-disk::before{\n  content:\"\"; }\n\n.bp3-icon-flow-branch::before{\n  content:\"\"; }\n\n.bp3-icon-flow-end::before{\n  content:\"\"; }\n\n.bp3-icon-flow-linear::before{\n  content:\"\"; }\n\n.bp3-icon-flow-review::before{\n  content:\"\"; }\n\n.bp3-icon-flow-review-branch::before{\n  content:\"\"; }\n\n.bp3-icon-flows::before{\n  content:\"\"; }\n\n.bp3-icon-folder-close::before{\n  content:\"\"; }\n\n.bp3-icon-folder-new::before{\n  content:\"\"; }\n\n.bp3-icon-folder-open::before{\n  content:\"\"; }\n\n.bp3-icon-folder-shared::before{\n  content:\"\"; }\n\n.bp3-icon-folder-shared-open::before{\n  content:\"\"; }\n\n.bp3-icon-follower::before{\n  content:\"\"; }\n\n.bp3-icon-following::before{\n  content:\"\"; }\n\n.bp3-icon-font::before{\n  content:\"\"; }\n\n.bp3-icon-fork::before{\n  content:\"\"; }\n\n.bp3-icon-form::before{\n  content:\"\"; }\n\n.bp3-icon-full-circle::before{\n  content:\"\"; }\n\n.bp3-icon-full-stacked-chart::before{\n  content:\"\"; }\n\n.bp3-icon-fullscreen::before{\n  content:\"\"; }\n\n.bp3-icon-function::before{\n  content:\"\"; }\n\n.bp3-icon-gantt-chart::before{\n  content:\"\"; }\n\n.bp3-icon-geolocation::before{\n  content:\"\"; }\n\n.bp3-icon-geosearch::before{\n  content:\"\"; }\n\n.bp3-icon-git-branch::before{\n  content:\"\"; }\n\n.bp3-icon-git-commit::before{\n  content:\"\"; }\n\n.bp3-icon-git-merge::before{\n  content:\"\"; }\n\n.bp3-icon-git-new-branch::before{\n  content:\"\"; }\n\n.bp3-icon-git-pull::before{\n  content:\"\"; }\n\n.bp3-icon-git-push::before{\n  content:\"\"; }\n\n.bp3-icon-git-repo::before{\n  content:\"\"; }\n\n.bp3-icon-glass::before{\n  content:\"\"; }\n\n.bp3-icon-globe::before{\n  content:\"\"; }\n\n.bp3-icon-globe-network::before{\n  content:\"\"; }\n\n.bp3-icon-graph::before{\n  content:\"\"; }\n\n.bp3-icon-graph-remove::before{\n  content:\"\"; }\n\n.bp3-icon-greater-than::before{\n  content:\"\"; }\n\n.bp3-icon-greater-than-or-equal-to::before{\n  content:\"\"; }\n\n.bp3-icon-grid::before{\n  content:\"\"; }\n\n.bp3-icon-grid-view::before{\n  content:\"\"; }\n\n.bp3-icon-group-objects::before{\n  content:\"\"; }\n\n.bp3-icon-grouped-bar-chart::before{\n  content:\"\"; }\n\n.bp3-icon-hand::before{\n  content:\"\"; }\n\n.bp3-icon-hand-down::before{\n  content:\"\"; }\n\n.bp3-icon-hand-left::before{\n  content:\"\"; }\n\n.bp3-icon-hand-right::before{\n  content:\"\"; }\n\n.bp3-icon-hand-up::before{\n  content:\"\"; }\n\n.bp3-icon-header::before{\n  content:\"\"; }\n\n.bp3-icon-header-one::before{\n  content:\"\"; }\n\n.bp3-icon-header-two::before{\n  content:\"\"; }\n\n.bp3-icon-headset::before{\n  content:\"\"; }\n\n.bp3-icon-heart::before{\n  content:\"♥\"; }\n\n.bp3-icon-heart-broken::before{\n  content:\"\"; }\n\n.bp3-icon-heat-grid::before{\n  content:\"\"; }\n\n.bp3-icon-heatmap::before{\n  content:\"\"; }\n\n.bp3-icon-help::before{\n  content:\"?\"; }\n\n.bp3-icon-helper-management::before{\n  content:\"\"; }\n\n.bp3-icon-highlight::before{\n  content:\"\"; }\n\n.bp3-icon-history::before{\n  content:\"\"; }\n\n.bp3-icon-home::before{\n  content:\"⌂\"; }\n\n.bp3-icon-horizontal-bar-chart::before{\n  content:\"\"; }\n\n.bp3-icon-horizontal-bar-chart-asc::before{\n  content:\"\"; }\n\n.bp3-icon-horizontal-bar-chart-desc::before{\n  content:\"\"; }\n\n.bp3-icon-horizontal-distribution::before{\n  content:\"\"; }\n\n.bp3-icon-id-number::before{\n  content:\"\"; }\n\n.bp3-icon-image-rotate-left::before{\n  content:\"\"; }\n\n.bp3-icon-image-rotate-right::before{\n  content:\"\"; }\n\n.bp3-icon-import::before{\n  content:\"\"; }\n\n.bp3-icon-inbox::before{\n  content:\"\"; }\n\n.bp3-icon-inbox-filtered::before{\n  content:\"\"; }\n\n.bp3-icon-inbox-geo::before{\n  content:\"\"; }\n\n.bp3-icon-inbox-search::before{\n  content:\"\"; }\n\n.bp3-icon-inbox-update::before{\n  content:\"\"; }\n\n.bp3-icon-info-sign::before{\n  content:\"ℹ\"; }\n\n.bp3-icon-inheritance::before{\n  content:\"\"; }\n\n.bp3-icon-inner-join::before{\n  content:\"\"; }\n\n.bp3-icon-insert::before{\n  content:\"\"; }\n\n.bp3-icon-intersection::before{\n  content:\"\"; }\n\n.bp3-icon-ip-address::before{\n  content:\"\"; }\n\n.bp3-icon-issue::before{\n  content:\"\"; }\n\n.bp3-icon-issue-closed::before{\n  content:\"\"; }\n\n.bp3-icon-issue-new::before{\n  content:\"\"; }\n\n.bp3-icon-italic::before{\n  content:\"\"; }\n\n.bp3-icon-join-table::before{\n  content:\"\"; }\n\n.bp3-icon-key::before{\n  content:\"\"; }\n\n.bp3-icon-key-backspace::before{\n  content:\"\"; }\n\n.bp3-icon-key-command::before{\n  content:\"\"; }\n\n.bp3-icon-key-control::before{\n  content:\"\"; }\n\n.bp3-icon-key-delete::before{\n  content:\"\"; }\n\n.bp3-icon-key-enter::before{\n  content:\"\"; }\n\n.bp3-icon-key-escape::before{\n  content:\"\"; }\n\n.bp3-icon-key-option::before{\n  content:\"\"; }\n\n.bp3-icon-key-shift::before{\n  content:\"\"; }\n\n.bp3-icon-key-tab::before{\n  content:\"\"; }\n\n.bp3-icon-known-vehicle::before{\n  content:\"\"; }\n\n.bp3-icon-lab-test::before{\n  content:\"\"; }\n\n.bp3-icon-label::before{\n  content:\"\"; }\n\n.bp3-icon-layer::before{\n  content:\"\"; }\n\n.bp3-icon-layers::before{\n  content:\"\"; }\n\n.bp3-icon-layout::before{\n  content:\"\"; }\n\n.bp3-icon-layout-auto::before{\n  content:\"\"; }\n\n.bp3-icon-layout-balloon::before{\n  content:\"\"; }\n\n.bp3-icon-layout-circle::before{\n  content:\"\"; }\n\n.bp3-icon-layout-grid::before{\n  content:\"\"; }\n\n.bp3-icon-layout-group-by::before{\n  content:\"\"; }\n\n.bp3-icon-layout-hierarchy::before{\n  content:\"\"; }\n\n.bp3-icon-layout-linear::before{\n  content:\"\"; }\n\n.bp3-icon-layout-skew-grid::before{\n  content:\"\"; }\n\n.bp3-icon-layout-sorted-clusters::before{\n  content:\"\"; }\n\n.bp3-icon-learning::before{\n  content:\"\"; }\n\n.bp3-icon-left-join::before{\n  content:\"\"; }\n\n.bp3-icon-less-than::before{\n  content:\"\"; }\n\n.bp3-icon-less-than-or-equal-to::before{\n  content:\"\"; }\n\n.bp3-icon-lifesaver::before{\n  content:\"\"; }\n\n.bp3-icon-lightbulb::before{\n  content:\"\"; }\n\n.bp3-icon-link::before{\n  content:\"\"; }\n\n.bp3-icon-list::before{\n  content:\"☰\"; }\n\n.bp3-icon-list-columns::before{\n  content:\"\"; }\n\n.bp3-icon-list-detail-view::before{\n  content:\"\"; }\n\n.bp3-icon-locate::before{\n  content:\"\"; }\n\n.bp3-icon-lock::before{\n  content:\"\"; }\n\n.bp3-icon-log-in::before{\n  content:\"\"; }\n\n.bp3-icon-log-out::before{\n  content:\"\"; }\n\n.bp3-icon-manual::before{\n  content:\"\"; }\n\n.bp3-icon-manually-entered-data::before{\n  content:\"\"; }\n\n.bp3-icon-map::before{\n  content:\"\"; }\n\n.bp3-icon-map-create::before{\n  content:\"\"; }\n\n.bp3-icon-map-marker::before{\n  content:\"\"; }\n\n.bp3-icon-maximize::before{\n  content:\"\"; }\n\n.bp3-icon-media::before{\n  content:\"\"; }\n\n.bp3-icon-menu::before{\n  content:\"\"; }\n\n.bp3-icon-menu-closed::before{\n  content:\"\"; }\n\n.bp3-icon-menu-open::before{\n  content:\"\"; }\n\n.bp3-icon-merge-columns::before{\n  content:\"\"; }\n\n.bp3-icon-merge-links::before{\n  content:\"\"; }\n\n.bp3-icon-minimize::before{\n  content:\"\"; }\n\n.bp3-icon-minus::before{\n  content:\"−\"; }\n\n.bp3-icon-mobile-phone::before{\n  content:\"\"; }\n\n.bp3-icon-mobile-video::before{\n  content:\"\"; }\n\n.bp3-icon-moon::before{\n  content:\"\"; }\n\n.bp3-icon-more::before{\n  content:\"\"; }\n\n.bp3-icon-mountain::before{\n  content:\"\"; }\n\n.bp3-icon-move::before{\n  content:\"\"; }\n\n.bp3-icon-mugshot::before{\n  content:\"\"; }\n\n.bp3-icon-multi-select::before{\n  content:\"\"; }\n\n.bp3-icon-music::before{\n  content:\"\"; }\n\n.bp3-icon-new-drawing::before{\n  content:\"\"; }\n\n.bp3-icon-new-grid-item::before{\n  content:\"\"; }\n\n.bp3-icon-new-layer::before{\n  content:\"\"; }\n\n.bp3-icon-new-layers::before{\n  content:\"\"; }\n\n.bp3-icon-new-link::before{\n  content:\"\"; }\n\n.bp3-icon-new-object::before{\n  content:\"\"; }\n\n.bp3-icon-new-person::before{\n  content:\"\"; }\n\n.bp3-icon-new-prescription::before{\n  content:\"\"; }\n\n.bp3-icon-new-text-box::before{\n  content:\"\"; }\n\n.bp3-icon-ninja::before{\n  content:\"\"; }\n\n.bp3-icon-not-equal-to::before{\n  content:\"\"; }\n\n.bp3-icon-notifications::before{\n  content:\"\"; }\n\n.bp3-icon-notifications-updated::before{\n  content:\"\"; }\n\n.bp3-icon-numbered-list::before{\n  content:\"\"; }\n\n.bp3-icon-numerical::before{\n  content:\"\"; }\n\n.bp3-icon-office::before{\n  content:\"\"; }\n\n.bp3-icon-offline::before{\n  content:\"\"; }\n\n.bp3-icon-oil-field::before{\n  content:\"\"; }\n\n.bp3-icon-one-column::before{\n  content:\"\"; }\n\n.bp3-icon-outdated::before{\n  content:\"\"; }\n\n.bp3-icon-page-layout::before{\n  content:\"\"; }\n\n.bp3-icon-panel-stats::before{\n  content:\"\"; }\n\n.bp3-icon-panel-table::before{\n  content:\"\"; }\n\n.bp3-icon-paperclip::before{\n  content:\"\"; }\n\n.bp3-icon-paragraph::before{\n  content:\"\"; }\n\n.bp3-icon-path::before{\n  content:\"\"; }\n\n.bp3-icon-path-search::before{\n  content:\"\"; }\n\n.bp3-icon-pause::before{\n  content:\"\"; }\n\n.bp3-icon-people::before{\n  content:\"\"; }\n\n.bp3-icon-percentage::before{\n  content:\"\"; }\n\n.bp3-icon-person::before{\n  content:\"\"; }\n\n.bp3-icon-phone::before{\n  content:\"☎\"; }\n\n.bp3-icon-pie-chart::before{\n  content:\"\"; }\n\n.bp3-icon-pin::before{\n  content:\"\"; }\n\n.bp3-icon-pivot::before{\n  content:\"\"; }\n\n.bp3-icon-pivot-table::before{\n  content:\"\"; }\n\n.bp3-icon-play::before{\n  content:\"\"; }\n\n.bp3-icon-plus::before{\n  content:\"+\"; }\n\n.bp3-icon-polygon-filter::before{\n  content:\"\"; }\n\n.bp3-icon-power::before{\n  content:\"\"; }\n\n.bp3-icon-predictive-analysis::before{\n  content:\"\"; }\n\n.bp3-icon-prescription::before{\n  content:\"\"; }\n\n.bp3-icon-presentation::before{\n  content:\"\"; }\n\n.bp3-icon-print::before{\n  content:\"⎙\"; }\n\n.bp3-icon-projects::before{\n  content:\"\"; }\n\n.bp3-icon-properties::before{\n  content:\"\"; }\n\n.bp3-icon-property::before{\n  content:\"\"; }\n\n.bp3-icon-publish-function::before{\n  content:\"\"; }\n\n.bp3-icon-pulse::before{\n  content:\"\"; }\n\n.bp3-icon-random::before{\n  content:\"\"; }\n\n.bp3-icon-record::before{\n  content:\"\"; }\n\n.bp3-icon-redo::before{\n  content:\"\"; }\n\n.bp3-icon-refresh::before{\n  content:\"\"; }\n\n.bp3-icon-regression-chart::before{\n  content:\"\"; }\n\n.bp3-icon-remove::before{\n  content:\"\"; }\n\n.bp3-icon-remove-column::before{\n  content:\"\"; }\n\n.bp3-icon-remove-column-left::before{\n  content:\"\"; }\n\n.bp3-icon-remove-column-right::before{\n  content:\"\"; }\n\n.bp3-icon-remove-row-bottom::before{\n  content:\"\"; }\n\n.bp3-icon-remove-row-top::before{\n  content:\"\"; }\n\n.bp3-icon-repeat::before{\n  content:\"\"; }\n\n.bp3-icon-reset::before{\n  content:\"\"; }\n\n.bp3-icon-resolve::before{\n  content:\"\"; }\n\n.bp3-icon-rig::before{\n  content:\"\"; }\n\n.bp3-icon-right-join::before{\n  content:\"\"; }\n\n.bp3-icon-ring::before{\n  content:\"\"; }\n\n.bp3-icon-rotate-document::before{\n  content:\"\"; }\n\n.bp3-icon-rotate-page::before{\n  content:\"\"; }\n\n.bp3-icon-satellite::before{\n  content:\"\"; }\n\n.bp3-icon-saved::before{\n  content:\"\"; }\n\n.bp3-icon-scatter-plot::before{\n  content:\"\"; }\n\n.bp3-icon-search::before{\n  content:\"\"; }\n\n.bp3-icon-search-around::before{\n  content:\"\"; }\n\n.bp3-icon-search-template::before{\n  content:\"\"; }\n\n.bp3-icon-search-text::before{\n  content:\"\"; }\n\n.bp3-icon-segmented-control::before{\n  content:\"\"; }\n\n.bp3-icon-select::before{\n  content:\"\"; }\n\n.bp3-icon-selection::before{\n  content:\"⦿\"; }\n\n.bp3-icon-send-to::before{\n  content:\"\"; }\n\n.bp3-icon-send-to-graph::before{\n  content:\"\"; }\n\n.bp3-icon-send-to-map::before{\n  content:\"\"; }\n\n.bp3-icon-series-add::before{\n  content:\"\"; }\n\n.bp3-icon-series-configuration::before{\n  content:\"\"; }\n\n.bp3-icon-series-derived::before{\n  content:\"\"; }\n\n.bp3-icon-series-filtered::before{\n  content:\"\"; }\n\n.bp3-icon-series-search::before{\n  content:\"\"; }\n\n.bp3-icon-settings::before{\n  content:\"\"; }\n\n.bp3-icon-share::before{\n  content:\"\"; }\n\n.bp3-icon-shield::before{\n  content:\"\"; }\n\n.bp3-icon-shop::before{\n  content:\"\"; }\n\n.bp3-icon-shopping-cart::before{\n  content:\"\"; }\n\n.bp3-icon-signal-search::before{\n  content:\"\"; }\n\n.bp3-icon-sim-card::before{\n  content:\"\"; }\n\n.bp3-icon-slash::before{\n  content:\"\"; }\n\n.bp3-icon-small-cross::before{\n  content:\"\"; }\n\n.bp3-icon-small-minus::before{\n  content:\"\"; }\n\n.bp3-icon-small-plus::before{\n  content:\"\"; }\n\n.bp3-icon-small-tick::before{\n  content:\"\"; }\n\n.bp3-icon-snowflake::before{\n  content:\"\"; }\n\n.bp3-icon-social-media::before{\n  content:\"\"; }\n\n.bp3-icon-sort::before{\n  content:\"\"; }\n\n.bp3-icon-sort-alphabetical::before{\n  content:\"\"; }\n\n.bp3-icon-sort-alphabetical-desc::before{\n  content:\"\"; }\n\n.bp3-icon-sort-asc::before{\n  content:\"\"; }\n\n.bp3-icon-sort-desc::before{\n  content:\"\"; }\n\n.bp3-icon-sort-numerical::before{\n  content:\"\"; }\n\n.bp3-icon-sort-numerical-desc::before{\n  content:\"\"; }\n\n.bp3-icon-split-columns::before{\n  content:\"\"; }\n\n.bp3-icon-square::before{\n  content:\"\"; }\n\n.bp3-icon-stacked-chart::before{\n  content:\"\"; }\n\n.bp3-icon-star::before{\n  content:\"★\"; }\n\n.bp3-icon-star-empty::before{\n  content:\"☆\"; }\n\n.bp3-icon-step-backward::before{\n  content:\"\"; }\n\n.bp3-icon-step-chart::before{\n  content:\"\"; }\n\n.bp3-icon-step-forward::before{\n  content:\"\"; }\n\n.bp3-icon-stop::before{\n  content:\"\"; }\n\n.bp3-icon-stopwatch::before{\n  content:\"\"; }\n\n.bp3-icon-strikethrough::before{\n  content:\"\"; }\n\n.bp3-icon-style::before{\n  content:\"\"; }\n\n.bp3-icon-swap-horizontal::before{\n  content:\"\"; }\n\n.bp3-icon-swap-vertical::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-circle::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-cross::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-diamond::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-square::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-triangle-down::before{\n  content:\"\"; }\n\n.bp3-icon-symbol-triangle-up::before{\n  content:\"\"; }\n\n.bp3-icon-tag::before{\n  content:\"\"; }\n\n.bp3-icon-take-action::before{\n  content:\"\"; }\n\n.bp3-icon-taxi::before{\n  content:\"\"; }\n\n.bp3-icon-text-highlight::before{\n  content:\"\"; }\n\n.bp3-icon-th::before{\n  content:\"\"; }\n\n.bp3-icon-th-derived::before{\n  content:\"\"; }\n\n.bp3-icon-th-disconnect::before{\n  content:\"\"; }\n\n.bp3-icon-th-filtered::before{\n  content:\"\"; }\n\n.bp3-icon-th-list::before{\n  content:\"\"; }\n\n.bp3-icon-thumbs-down::before{\n  content:\"\"; }\n\n.bp3-icon-thumbs-up::before{\n  content:\"\"; }\n\n.bp3-icon-tick::before{\n  content:\"✓\"; }\n\n.bp3-icon-tick-circle::before{\n  content:\"\"; }\n\n.bp3-icon-time::before{\n  content:\"⏲\"; }\n\n.bp3-icon-timeline-area-chart::before{\n  content:\"\"; }\n\n.bp3-icon-timeline-bar-chart::before{\n  content:\"\"; }\n\n.bp3-icon-timeline-events::before{\n  content:\"\"; }\n\n.bp3-icon-timeline-line-chart::before{\n  content:\"\"; }\n\n.bp3-icon-tint::before{\n  content:\"\"; }\n\n.bp3-icon-torch::before{\n  content:\"\"; }\n\n.bp3-icon-tractor::before{\n  content:\"\"; }\n\n.bp3-icon-train::before{\n  content:\"\"; }\n\n.bp3-icon-translate::before{\n  content:\"\"; }\n\n.bp3-icon-trash::before{\n  content:\"\"; }\n\n.bp3-icon-tree::before{\n  content:\"\"; }\n\n.bp3-icon-trending-down::before{\n  content:\"\"; }\n\n.bp3-icon-trending-up::before{\n  content:\"\"; }\n\n.bp3-icon-truck::before{\n  content:\"\"; }\n\n.bp3-icon-two-columns::before{\n  content:\"\"; }\n\n.bp3-icon-unarchive::before{\n  content:\"\"; }\n\n.bp3-icon-underline::before{\n  content:\"⎁\"; }\n\n.bp3-icon-undo::before{\n  content:\"⎌\"; }\n\n.bp3-icon-ungroup-objects::before{\n  content:\"\"; }\n\n.bp3-icon-unknown-vehicle::before{\n  content:\"\"; }\n\n.bp3-icon-unlock::before{\n  content:\"\"; }\n\n.bp3-icon-unpin::before{\n  content:\"\"; }\n\n.bp3-icon-unresolve::before{\n  content:\"\"; }\n\n.bp3-icon-updated::before{\n  content:\"\"; }\n\n.bp3-icon-upload::before{\n  content:\"\"; }\n\n.bp3-icon-user::before{\n  content:\"\"; }\n\n.bp3-icon-variable::before{\n  content:\"\"; }\n\n.bp3-icon-vertical-bar-chart-asc::before{\n  content:\"\"; }\n\n.bp3-icon-vertical-bar-chart-desc::before{\n  content:\"\"; }\n\n.bp3-icon-vertical-distribution::before{\n  content:\"\"; }\n\n.bp3-icon-video::before{\n  content:\"\"; }\n\n.bp3-icon-volume-down::before{\n  content:\"\"; }\n\n.bp3-icon-volume-off::before{\n  content:\"\"; }\n\n.bp3-icon-volume-up::before{\n  content:\"\"; }\n\n.bp3-icon-walk::before{\n  content:\"\"; }\n\n.bp3-icon-warning-sign::before{\n  content:\"\"; }\n\n.bp3-icon-waterfall-chart::before{\n  content:\"\"; }\n\n.bp3-icon-widget::before{\n  content:\"\"; }\n\n.bp3-icon-widget-button::before{\n  content:\"\"; }\n\n.bp3-icon-widget-footer::before{\n  content:\"\"; }\n\n.bp3-icon-widget-header::before{\n  content:\"\"; }\n\n.bp3-icon-wrench::before{\n  content:\"\"; }\n\n.bp3-icon-zoom-in::before{\n  content:\"\"; }\n\n.bp3-icon-zoom-out::before{\n  content:\"\"; }\n\n.bp3-icon-zoom-to-fit::before{\n  content:\"\"; }\n.bp3-submenu > .bp3-popover-wrapper{\n  display:block; }\n\n.bp3-submenu .bp3-popover-target{\n  display:block; }\n  .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{ }\n\n.bp3-submenu.bp3-popover{\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  padding:0 5px; }\n  .bp3-submenu.bp3-popover > .bp3-popover-content{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n    .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n.bp3-menu{\n  background:#ffffff;\n  border-radius:3px;\n  color:#182026;\n  list-style:none;\n  margin:0;\n  min-width:180px;\n  padding:5px;\n  text-align:left; }\n\n.bp3-menu-divider{\n  border-top:1px solid rgba(16, 22, 26, 0.15);\n  display:block;\n  margin:5px; }\n  .bp3-dark .bp3-menu-divider{\n    border-top-color:rgba(255, 255, 255, 0.15); }\n\n.bp3-menu-item{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:start;\n      -ms-flex-align:start;\n          align-items:flex-start;\n  border-radius:2px;\n  color:inherit;\n  line-height:20px;\n  padding:5px 7px;\n  text-decoration:none;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-menu-item > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-menu-item > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-menu-item::before,\n  .bp3-menu-item > *{\n    margin-right:7px; }\n  .bp3-menu-item:empty::before,\n  .bp3-menu-item > :last-child{\n    margin-right:0; }\n  .bp3-menu-item > .bp3-fill{\n    word-break:break-word; }\n  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{\n    background-color:rgba(167, 182, 194, 0.3);\n    cursor:pointer;\n    text-decoration:none; }\n  .bp3-menu-item.bp3-disabled{\n    background-color:inherit;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed; }\n  .bp3-dark .bp3-menu-item{\n    color:inherit; }\n    .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{\n      background-color:rgba(138, 155, 168, 0.15);\n      color:inherit; }\n    .bp3-dark .bp3-menu-item.bp3-disabled{\n      background-color:inherit;\n      color:rgba(167, 182, 194, 0.6); }\n  .bp3-menu-item.bp3-intent-primary{\n    color:#106ba3; }\n    .bp3-menu-item.bp3-intent-primary .bp3-icon{\n      color:inherit; }\n    .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,\n    .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{\n      color:#106ba3; }\n    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{\n      background-color:#137cbd; }\n    .bp3-menu-item.bp3-intent-primary:active{\n      background-color:#106ba3; }\n    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,\n    .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,\n    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,\n    .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,\n    .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-menu-item.bp3-intent-success{\n    color:#0d8050; }\n    .bp3-menu-item.bp3-intent-success .bp3-icon{\n      color:inherit; }\n    .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,\n    .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{\n      color:#0d8050; }\n    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{\n      background-color:#0f9960; }\n    .bp3-menu-item.bp3-intent-success:active{\n      background-color:#0d8050; }\n    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,\n    .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,\n    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,\n    .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,\n    .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-menu-item.bp3-intent-warning{\n    color:#bf7326; }\n    .bp3-menu-item.bp3-intent-warning .bp3-icon{\n      color:inherit; }\n    .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,\n    .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{\n      color:#bf7326; }\n    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{\n      background-color:#d9822b; }\n    .bp3-menu-item.bp3-intent-warning:active{\n      background-color:#bf7326; }\n    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,\n    .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,\n    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,\n    .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,\n    .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-menu-item.bp3-intent-danger{\n    color:#c23030; }\n    .bp3-menu-item.bp3-intent-danger .bp3-icon{\n      color:inherit; }\n    .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,\n    .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{\n      color:#c23030; }\n    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{\n      background-color:#db3737; }\n    .bp3-menu-item.bp3-intent-danger:active{\n      background-color:#c23030; }\n    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,\n    .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,\n    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,\n    .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,\n    .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-menu-item::before{\n    font-family:\"Icons16\", sans-serif;\n    font-size:16px;\n    font-style:normal;\n    font-weight:400;\n    line-height:1;\n    -moz-osx-font-smoothing:grayscale;\n    -webkit-font-smoothing:antialiased;\n    margin-right:7px; }\n  .bp3-menu-item::before,\n  .bp3-menu-item > .bp3-icon{\n    color:#5c7080;\n    margin-top:2px; }\n  .bp3-menu-item .bp3-menu-item-label{\n    color:#5c7080; }\n  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{\n    color:inherit; }\n  .bp3-menu-item.bp3-active, .bp3-menu-item:active{\n    background-color:rgba(115, 134, 148, 0.3); }\n  .bp3-menu-item.bp3-disabled{\n    background-color:inherit !important;\n    color:rgba(92, 112, 128, 0.6) !important;\n    cursor:not-allowed !important;\n    outline:none !important; }\n    .bp3-menu-item.bp3-disabled::before,\n    .bp3-menu-item.bp3-disabled > .bp3-icon,\n    .bp3-menu-item.bp3-disabled .bp3-menu-item-label{\n      color:rgba(92, 112, 128, 0.6) !important; }\n  .bp3-large .bp3-menu-item{\n    font-size:16px;\n    line-height:22px;\n    padding:9px 7px; }\n    .bp3-large .bp3-menu-item .bp3-icon{\n      margin-top:3px; }\n    .bp3-large .bp3-menu-item::before{\n      font-family:\"Icons20\", sans-serif;\n      font-size:20px;\n      font-style:normal;\n      font-weight:400;\n      line-height:1;\n      -moz-osx-font-smoothing:grayscale;\n      -webkit-font-smoothing:antialiased;\n      margin-right:10px;\n      margin-top:1px; }\n\nbutton.bp3-menu-item{\n  background:none;\n  border:none;\n  text-align:left;\n  width:100%; }\n.bp3-menu-header{\n  border-top:1px solid rgba(16, 22, 26, 0.15);\n  display:block;\n  margin:5px;\n  cursor:default;\n  padding-left:2px; }\n  .bp3-dark .bp3-menu-header{\n    border-top-color:rgba(255, 255, 255, 0.15); }\n  .bp3-menu-header:first-of-type{\n    border-top:none; }\n  .bp3-menu-header > h6{\n    color:#182026;\n    font-weight:600;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    word-wrap:normal;\n    line-height:17px;\n    margin:0;\n    padding:10px 7px 0 1px; }\n    .bp3-dark .bp3-menu-header > h6{\n      color:#f5f8fa; }\n  .bp3-menu-header:first-of-type > h6{\n    padding-top:0; }\n  .bp3-large .bp3-menu-header > h6{\n    font-size:18px;\n    padding-bottom:5px;\n    padding-top:15px; }\n  .bp3-large .bp3-menu-header:first-of-type > h6{\n    padding-top:0; }\n\n.bp3-dark .bp3-menu{\n  background:#30404d;\n  color:#f5f8fa; }\n\n.bp3-dark .bp3-menu-item{ }\n  .bp3-dark .bp3-menu-item.bp3-intent-primary{\n    color:#48aff0; }\n    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{\n      color:inherit; }\n    .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{\n      color:#48aff0; }\n    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{\n      background-color:#137cbd; }\n    .bp3-dark .bp3-menu-item.bp3-intent-primary:active{\n      background-color:#106ba3; }\n    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,\n    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,\n    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-dark .bp3-menu-item.bp3-intent-success{\n    color:#3dcc91; }\n    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{\n      color:inherit; }\n    .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{\n      color:#3dcc91; }\n    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{\n      background-color:#0f9960; }\n    .bp3-dark .bp3-menu-item.bp3-intent-success:active{\n      background-color:#0d8050; }\n    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,\n    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,\n    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-dark .bp3-menu-item.bp3-intent-warning{\n    color:#ffb366; }\n    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{\n      color:inherit; }\n    .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{\n      color:#ffb366; }\n    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{\n      background-color:#d9822b; }\n    .bp3-dark .bp3-menu-item.bp3-intent-warning:active{\n      background-color:#bf7326; }\n    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,\n    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,\n    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-dark .bp3-menu-item.bp3-intent-danger{\n    color:#ff7373; }\n    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{\n      color:inherit; }\n    .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{\n      color:#ff7373; }\n    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{\n      background-color:#db3737; }\n    .bp3-dark .bp3-menu-item.bp3-intent-danger:active{\n      background-color:#c23030; }\n    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,\n    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,\n    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,\n    .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{\n      color:#ffffff; }\n  .bp3-dark .bp3-menu-item::before,\n  .bp3-dark .bp3-menu-item > .bp3-icon{\n    color:#a7b6c2; }\n  .bp3-dark .bp3-menu-item .bp3-menu-item-label{\n    color:#a7b6c2; }\n  .bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{\n    background-color:rgba(138, 155, 168, 0.3); }\n  .bp3-dark .bp3-menu-item.bp3-disabled{\n    color:rgba(167, 182, 194, 0.6) !important; }\n    .bp3-dark .bp3-menu-item.bp3-disabled::before,\n    .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,\n    .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{\n      color:rgba(167, 182, 194, 0.6) !important; }\n\n.bp3-dark .bp3-menu-divider,\n.bp3-dark .bp3-menu-header{\n  border-color:rgba(255, 255, 255, 0.15); }\n\n.bp3-dark .bp3-menu-header > h6{\n  color:#f5f8fa; }\n\n.bp3-label .bp3-menu{\n  margin-top:5px; }\n.bp3-navbar{\n  background-color:#ffffff;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);\n  height:50px;\n  padding:0 15px;\n  position:relative;\n  width:100%;\n  z-index:10; }\n  .bp3-navbar.bp3-dark,\n  .bp3-dark .bp3-navbar{\n    background-color:#394b59; }\n  .bp3-navbar.bp3-dark{\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-dark .bp3-navbar{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }\n  .bp3-navbar.bp3-fixed-top{\n    left:0;\n    position:fixed;\n    right:0;\n    top:0; }\n\n.bp3-navbar-heading{\n  font-size:16px;\n  margin-right:15px; }\n\n.bp3-navbar-group{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  height:50px; }\n  .bp3-navbar-group.bp3-align-left{\n    float:left; }\n  .bp3-navbar-group.bp3-align-right{\n    float:right; }\n\n.bp3-navbar-divider{\n  border-left:1px solid rgba(16, 22, 26, 0.15);\n  height:20px;\n  margin:0 10px; }\n  .bp3-dark .bp3-navbar-divider{\n    border-left-color:rgba(255, 255, 255, 0.15); }\n.bp3-non-ideal-state{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  height:100%;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  text-align:center;\n  width:100%; }\n  .bp3-non-ideal-state > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-non-ideal-state > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-non-ideal-state::before,\n  .bp3-non-ideal-state > *{\n    margin-bottom:20px; }\n  .bp3-non-ideal-state:empty::before,\n  .bp3-non-ideal-state > :last-child{\n    margin-bottom:0; }\n  .bp3-non-ideal-state > *{\n    max-width:400px; }\n\n.bp3-non-ideal-state-visual{\n  color:rgba(92, 112, 128, 0.6);\n  font-size:60px; }\n  .bp3-dark .bp3-non-ideal-state-visual{\n    color:rgba(167, 182, 194, 0.6); }\n\n.bp3-overflow-list{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-wrap:nowrap;\n      flex-wrap:nowrap;\n  min-width:0; }\n\n.bp3-overflow-list-spacer{\n  -ms-flex-negative:1;\n      flex-shrink:1;\n  width:1px; }\n\nbody.bp3-overlay-open{\n  overflow:hidden; }\n\n.bp3-overlay{\n  bottom:0;\n  left:0;\n  position:static;\n  right:0;\n  top:0;\n  z-index:20; }\n  .bp3-overlay:not(.bp3-overlay-open){\n    pointer-events:none; }\n  .bp3-overlay.bp3-overlay-container{\n    overflow:hidden;\n    position:fixed; }\n    .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{\n      position:absolute; }\n  .bp3-overlay.bp3-overlay-scroll-container{\n    overflow:auto;\n    position:fixed; }\n    .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{\n      position:absolute; }\n  .bp3-overlay.bp3-overlay-inline{\n    display:inline;\n    overflow:visible; }\n\n.bp3-overlay-content{\n  position:fixed;\n  z-index:20; }\n  .bp3-overlay-inline .bp3-overlay-content,\n  .bp3-overlay-scroll-container .bp3-overlay-content{\n    position:absolute; }\n\n.bp3-overlay-backdrop{\n  bottom:0;\n  left:0;\n  position:fixed;\n  right:0;\n  top:0;\n  opacity:1;\n  background-color:rgba(16, 22, 26, 0.7);\n  overflow:auto;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  z-index:20; }\n  .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{\n    opacity:0; }\n  .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{\n    opacity:1;\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:200ms;\n            transition-duration:200ms;\n    -webkit-transition-property:opacity;\n    transition-property:opacity;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-overlay-backdrop.bp3-overlay-exit{\n    opacity:1; }\n  .bp3-overlay-backdrop.bp3-overlay-exit-active{\n    opacity:0;\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:200ms;\n            transition-duration:200ms;\n    -webkit-transition-property:opacity;\n    transition-property:opacity;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-overlay-backdrop:focus{\n    outline:none; }\n  .bp3-overlay-inline .bp3-overlay-backdrop{\n    position:absolute; }\n.bp3-panel-stack{\n  overflow:hidden;\n  position:relative; }\n\n.bp3-panel-stack-header{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);\n          box-shadow:0 1px rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-negative:0;\n      flex-shrink:0;\n  height:30px;\n  z-index:1; }\n  .bp3-dark .bp3-panel-stack-header{\n    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);\n            box-shadow:0 1px rgba(255, 255, 255, 0.15); }\n  .bp3-panel-stack-header > span{\n    -webkit-box-align:stretch;\n        -ms-flex-align:stretch;\n            align-items:stretch;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n  .bp3-panel-stack-header .bp3-heading{\n    margin:0 5px; }\n\n.bp3-button.bp3-panel-stack-header-back{\n  margin-left:5px;\n  padding-left:0;\n  white-space:nowrap; }\n  .bp3-button.bp3-panel-stack-header-back .bp3-icon{\n    margin:0 2px; }\n\n.bp3-panel-stack-view{\n  bottom:0;\n  left:0;\n  position:absolute;\n  right:0;\n  top:0;\n  background-color:#ffffff;\n  border-right:1px solid rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  margin-right:-1px;\n  overflow-y:auto;\n  z-index:1; }\n  .bp3-dark .bp3-panel-stack-view{\n    background-color:#30404d; }\n  .bp3-panel-stack-view:nth-last-child(n + 4){\n    display:none; }\n\n.bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{\n  -webkit-transform:translateX(100%);\n          transform:translateX(100%);\n  opacity:0; }\n\n.bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack-push .bp3-panel-stack-exit{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1; }\n\n.bp3-panel-stack-push .bp3-panel-stack-exit-active{\n  -webkit-transform:translateX(-50%);\n          transform:translateX(-50%);\n  opacity:0;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{\n  -webkit-transform:translateX(-50%);\n          transform:translateX(-50%);\n  opacity:0; }\n\n.bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack-pop .bp3-panel-stack-exit{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1; }\n\n.bp3-panel-stack-pop .bp3-panel-stack-exit-active{\n  -webkit-transform:translateX(100%);\n          transform:translateX(100%);\n  opacity:0;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n.bp3-panel-stack2{\n  overflow:hidden;\n  position:relative; }\n\n.bp3-panel-stack2-header{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);\n          box-shadow:0 1px rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-negative:0;\n      flex-shrink:0;\n  height:30px;\n  z-index:1; }\n  .bp3-dark .bp3-panel-stack2-header{\n    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);\n            box-shadow:0 1px rgba(255, 255, 255, 0.15); }\n  .bp3-panel-stack2-header > span{\n    -webkit-box-align:stretch;\n        -ms-flex-align:stretch;\n            align-items:stretch;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n  .bp3-panel-stack2-header .bp3-heading{\n    margin:0 5px; }\n\n.bp3-button.bp3-panel-stack2-header-back{\n  margin-left:5px;\n  padding-left:0;\n  white-space:nowrap; }\n  .bp3-button.bp3-panel-stack2-header-back .bp3-icon{\n    margin:0 2px; }\n\n.bp3-panel-stack2-view{\n  bottom:0;\n  left:0;\n  position:absolute;\n  right:0;\n  top:0;\n  background-color:#ffffff;\n  border-right:1px solid rgba(16, 22, 26, 0.15);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  margin-right:-1px;\n  overflow-y:auto;\n  z-index:1; }\n  .bp3-dark .bp3-panel-stack2-view{\n    background-color:#30404d; }\n  .bp3-panel-stack2-view:nth-last-child(n + 4){\n    display:none; }\n\n.bp3-panel-stack2-push .bp3-panel-stack2-enter, .bp3-panel-stack2-push .bp3-panel-stack2-appear{\n  -webkit-transform:translateX(100%);\n          transform:translateX(100%);\n  opacity:0; }\n\n.bp3-panel-stack2-push .bp3-panel-stack2-enter-active, .bp3-panel-stack2-push .bp3-panel-stack2-appear-active{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack2-push .bp3-panel-stack2-exit{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1; }\n\n.bp3-panel-stack2-push .bp3-panel-stack2-exit-active{\n  -webkit-transform:translateX(-50%);\n          transform:translateX(-50%);\n  opacity:0;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack2-pop .bp3-panel-stack2-enter, .bp3-panel-stack2-pop .bp3-panel-stack2-appear{\n  -webkit-transform:translateX(-50%);\n          transform:translateX(-50%);\n  opacity:0; }\n\n.bp3-panel-stack2-pop .bp3-panel-stack2-enter-active, .bp3-panel-stack2-pop .bp3-panel-stack2-appear-active{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n\n.bp3-panel-stack2-pop .bp3-panel-stack2-exit{\n  -webkit-transform:translate(0%);\n          transform:translate(0%);\n  opacity:1; }\n\n.bp3-panel-stack2-pop .bp3-panel-stack2-exit-active{\n  -webkit-transform:translateX(100%);\n          transform:translateX(100%);\n  opacity:0;\n  -webkit-transition-delay:0;\n          transition-delay:0;\n  -webkit-transition-duration:400ms;\n          transition-duration:400ms;\n  -webkit-transition-property:opacity, -webkit-transform;\n  transition-property:opacity, -webkit-transform;\n  transition-property:transform, opacity;\n  transition-property:transform, opacity, -webkit-transform;\n  -webkit-transition-timing-function:ease;\n          transition-timing-function:ease; }\n.bp3-popover{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n  -webkit-transform:scale(1);\n          transform:scale(1);\n  border-radius:3px;\n  display:inline-block;\n  z-index:20; }\n  .bp3-popover .bp3-popover-arrow{\n    height:30px;\n    position:absolute;\n    width:30px; }\n    .bp3-popover .bp3-popover-arrow::before{\n      height:20px;\n      margin:5px;\n      width:20px; }\n  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{\n    margin-bottom:17px;\n    margin-top:-17px; }\n    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{\n      bottom:-11px; }\n      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(-90deg);\n                transform:rotate(-90deg); }\n  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{\n    margin-left:17px; }\n    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{\n      left:-11px; }\n      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(0);\n                transform:rotate(0); }\n  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{\n    margin-top:17px; }\n    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{\n      top:-11px; }\n      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(90deg);\n                transform:rotate(90deg); }\n  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{\n    margin-left:-17px;\n    margin-right:17px; }\n    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{\n      right:-11px; }\n      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(180deg);\n                transform:rotate(180deg); }\n  .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{\n    top:50%;\n    -webkit-transform:translateY(-50%);\n            transform:translateY(-50%); }\n  .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{\n    right:50%;\n    -webkit-transform:translateX(50%);\n            transform:translateX(50%); }\n  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{\n    top:-0.3934px; }\n  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{\n    right:-0.3934px; }\n  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{\n    left:-0.3934px; }\n  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{\n    bottom:-0.3934px; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{\n    -webkit-transform-origin:top left;\n            transform-origin:top left; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{\n    -webkit-transform-origin:top center;\n            transform-origin:top center; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{\n    -webkit-transform-origin:top right;\n            transform-origin:top right; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{\n    -webkit-transform-origin:center left;\n            transform-origin:center left; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{\n    -webkit-transform-origin:center center;\n            transform-origin:center center; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{\n    -webkit-transform-origin:center right;\n            transform-origin:center right; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{\n    -webkit-transform-origin:bottom left;\n            transform-origin:bottom left; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{\n    -webkit-transform-origin:bottom center;\n            transform-origin:bottom center; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{\n    -webkit-transform-origin:bottom right;\n            transform-origin:bottom right; }\n  .bp3-popover .bp3-popover-content{\n    background:#ffffff;\n    color:inherit; }\n  .bp3-popover .bp3-popover-arrow::before{\n    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);\n            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }\n  .bp3-popover .bp3-popover-arrow-border{\n    fill:#10161a;\n    fill-opacity:0.1; }\n  .bp3-popover .bp3-popover-arrow-fill{\n    fill:#ffffff; }\n  .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{\n    -webkit-transform:scale(0.3);\n            transform:scale(0.3); }\n  .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{\n    -webkit-transform:scale(1);\n            transform:scale(1);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n  .bp3-popover-exit > .bp3-popover{\n    -webkit-transform:scale(1);\n            transform:scale(1); }\n  .bp3-popover-exit-active > .bp3-popover{\n    -webkit-transform:scale(0.3);\n            transform:scale(0.3);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n  .bp3-popover .bp3-popover-content{\n    border-radius:3px;\n    position:relative; }\n  .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{\n    max-width:350px;\n    padding:20px; }\n  .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{\n    width:350px; }\n  .bp3-popover.bp3-minimal{\n    margin:0 !important; }\n    .bp3-popover.bp3-minimal .bp3-popover-arrow{\n      display:none; }\n    .bp3-popover.bp3-minimal.bp3-popover{\n      -webkit-transform:scale(1);\n              transform:scale(1); }\n      .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{\n        -webkit-transform:scale(1);\n                transform:scale(1); }\n      .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{\n        -webkit-transform:scale(1);\n                transform:scale(1);\n        -webkit-transition-delay:0;\n                transition-delay:0;\n        -webkit-transition-duration:100ms;\n                transition-duration:100ms;\n        -webkit-transition-property:-webkit-transform;\n        transition-property:-webkit-transform;\n        transition-property:transform;\n        transition-property:transform, -webkit-transform;\n        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n      .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{\n        -webkit-transform:scale(1);\n                transform:scale(1); }\n      .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{\n        -webkit-transform:scale(1);\n                transform:scale(1);\n        -webkit-transition-delay:0;\n                transition-delay:0;\n        -webkit-transition-duration:100ms;\n                transition-duration:100ms;\n        -webkit-transition-property:-webkit-transform;\n        transition-property:-webkit-transform;\n        transition-property:transform;\n        transition-property:transform, -webkit-transform;\n        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-popover.bp3-dark,\n  .bp3-dark .bp3-popover{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n    .bp3-popover.bp3-dark .bp3-popover-content,\n    .bp3-dark .bp3-popover .bp3-popover-content{\n      background:#30404d;\n      color:inherit; }\n    .bp3-popover.bp3-dark .bp3-popover-arrow::before,\n    .bp3-dark .bp3-popover .bp3-popover-arrow::before{\n      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);\n              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }\n    .bp3-popover.bp3-dark .bp3-popover-arrow-border,\n    .bp3-dark .bp3-popover .bp3-popover-arrow-border{\n      fill:#10161a;\n      fill-opacity:0.2; }\n    .bp3-popover.bp3-dark .bp3-popover-arrow-fill,\n    .bp3-dark .bp3-popover .bp3-popover-arrow-fill{\n      fill:#30404d; }\n\n.bp3-popover-arrow::before{\n  border-radius:2px;\n  content:\"\";\n  display:block;\n  position:absolute;\n  -webkit-transform:rotate(45deg);\n          transform:rotate(45deg); }\n\n.bp3-tether-pinned .bp3-popover-arrow{\n  display:none; }\n\n.bp3-popover-backdrop{\n  background:rgba(255, 255, 255, 0); }\n\n.bp3-transition-container{\n  opacity:1;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  z-index:20; }\n  .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{\n    opacity:0; }\n  .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{\n    opacity:1;\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:100ms;\n            transition-duration:100ms;\n    -webkit-transition-property:opacity;\n    transition-property:opacity;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-transition-container.bp3-popover-exit{\n    opacity:1; }\n  .bp3-transition-container.bp3-popover-exit-active{\n    opacity:0;\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:100ms;\n            transition-duration:100ms;\n    -webkit-transition-property:opacity;\n    transition-property:opacity;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-transition-container:focus{\n    outline:none; }\n  .bp3-transition-container.bp3-popover-leave .bp3-popover-content{\n    pointer-events:none; }\n  .bp3-transition-container[data-x-out-of-boundaries]{\n    display:none; }\n\nspan.bp3-popover-target{\n  display:inline-block; }\n\n.bp3-popover-wrapper.bp3-fill{\n  width:100%; }\n\n.bp3-portal{\n  left:0;\n  position:absolute;\n  right:0;\n  top:0; }\n@-webkit-keyframes linear-progress-bar-stripes{\n  from{\n    background-position:0 0; }\n  to{\n    background-position:30px 0; } }\n@keyframes linear-progress-bar-stripes{\n  from{\n    background-position:0 0; }\n  to{\n    background-position:30px 0; } }\n\n.bp3-progress-bar{\n  background:rgba(92, 112, 128, 0.2);\n  border-radius:40px;\n  display:block;\n  height:8px;\n  overflow:hidden;\n  position:relative;\n  width:100%; }\n  .bp3-progress-bar .bp3-progress-meter{\n    background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);\n    background-color:rgba(92, 112, 128, 0.8);\n    background-size:30px 30px;\n    border-radius:40px;\n    height:100%;\n    position:absolute;\n    -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    width:100%; }\n  .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{\n    animation:linear-progress-bar-stripes 300ms linear infinite reverse; }\n  .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{\n    background-image:none; }\n\n.bp3-dark .bp3-progress-bar{\n  background:rgba(16, 22, 26, 0.5); }\n  .bp3-dark .bp3-progress-bar .bp3-progress-meter{\n    background-color:#8a9ba8; }\n\n.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{\n  background-color:#137cbd; }\n\n.bp3-progress-bar.bp3-intent-success .bp3-progress-meter{\n  background-color:#0f9960; }\n\n.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{\n  background-color:#d9822b; }\n\n.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{\n  background-color:#db3737; }\n@-webkit-keyframes skeleton-glow{\n  from{\n    background:rgba(206, 217, 224, 0.2);\n    border-color:rgba(206, 217, 224, 0.2); }\n  to{\n    background:rgba(92, 112, 128, 0.2);\n    border-color:rgba(92, 112, 128, 0.2); } }\n@keyframes skeleton-glow{\n  from{\n    background:rgba(206, 217, 224, 0.2);\n    border-color:rgba(206, 217, 224, 0.2); }\n  to{\n    background:rgba(92, 112, 128, 0.2);\n    border-color:rgba(92, 112, 128, 0.2); } }\n.bp3-skeleton{\n  -webkit-animation:1000ms linear infinite alternate skeleton-glow;\n          animation:1000ms linear infinite alternate skeleton-glow;\n  background:rgba(206, 217, 224, 0.2);\n  background-clip:padding-box !important;\n  border-color:rgba(206, 217, 224, 0.2) !important;\n  border-radius:2px;\n  -webkit-box-shadow:none !important;\n          box-shadow:none !important;\n  color:transparent !important;\n  cursor:default;\n  pointer-events:none;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-skeleton::before, .bp3-skeleton::after,\n  .bp3-skeleton *{\n    visibility:hidden !important; }\n.bp3-slider{\n  height:40px;\n  min-width:150px;\n  width:100%;\n  cursor:default;\n  outline:none;\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-slider:hover{\n    cursor:pointer; }\n  .bp3-slider:active{\n    cursor:-webkit-grabbing;\n    cursor:grabbing; }\n  .bp3-slider.bp3-disabled{\n    cursor:not-allowed;\n    opacity:0.5; }\n  .bp3-slider.bp3-slider-unlabeled{\n    height:16px; }\n\n.bp3-slider-track,\n.bp3-slider-progress{\n  height:6px;\n  left:0;\n  right:0;\n  top:5px;\n  position:absolute; }\n\n.bp3-slider-track{\n  border-radius:3px;\n  overflow:hidden; }\n\n.bp3-slider-progress{\n  background:rgba(92, 112, 128, 0.2); }\n  .bp3-dark .bp3-slider-progress{\n    background:rgba(16, 22, 26, 0.5); }\n  .bp3-slider-progress.bp3-intent-primary{\n    background-color:#137cbd; }\n  .bp3-slider-progress.bp3-intent-success{\n    background-color:#0f9960; }\n  .bp3-slider-progress.bp3-intent-warning{\n    background-color:#d9822b; }\n  .bp3-slider-progress.bp3-intent-danger{\n    background-color:#db3737; }\n\n.bp3-slider-handle{\n  background-color:#f5f8fa;\n  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));\n  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));\n  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n  color:#182026;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n  cursor:pointer;\n  height:16px;\n  left:0;\n  position:absolute;\n  top:0;\n  width:16px; }\n  .bp3-slider-handle:hover{\n    background-clip:padding-box;\n    background-color:#ebf1f5;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }\n  .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{\n    background-color:#d8e1e8;\n    background-image:none;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n  .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{\n    background-color:rgba(206, 217, 224, 0.5);\n    background-image:none;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed;\n    outline:none; }\n    .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{\n      background:rgba(206, 217, 224, 0.7); }\n  .bp3-slider-handle:focus{\n    z-index:1; }\n  .bp3-slider-handle:hover{\n    background-clip:padding-box;\n    background-color:#ebf1f5;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);\n    cursor:-webkit-grab;\n    cursor:grab;\n    z-index:2; }\n  .bp3-slider-handle.bp3-active{\n    background-color:#d8e1e8;\n    background-image:none;\n    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);\n    cursor:-webkit-grabbing;\n    cursor:grabbing; }\n  .bp3-disabled .bp3-slider-handle{\n    background:#bfccd6;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n    pointer-events:none; }\n  .bp3-dark .bp3-slider-handle{\n    background-color:#394b59;\n    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));\n    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n    color:#f5f8fa; }\n    .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{\n      color:#f5f8fa; }\n    .bp3-dark .bp3-slider-handle:hover{\n      background-color:#30404d;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{\n      background-color:#202b33;\n      background-image:none;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }\n    .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{\n      background-color:rgba(57, 75, 89, 0.5);\n      background-image:none;\n      -webkit-box-shadow:none;\n              box-shadow:none;\n      color:rgba(167, 182, 194, 0.6); }\n      .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{\n        background:rgba(57, 75, 89, 0.7); }\n    .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{\n      background:rgba(16, 22, 26, 0.5);\n      stroke:#8a9ba8; }\n    .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{\n      background-color:#394b59; }\n    .bp3-dark .bp3-slider-handle.bp3-active{\n      background-color:#293742; }\n  .bp3-dark .bp3-disabled .bp3-slider-handle{\n    background:#5c7080;\n    border-color:#5c7080;\n    -webkit-box-shadow:none;\n            box-shadow:none; }\n  .bp3-slider-handle .bp3-slider-label{\n    background:#394b59;\n    border-radius:3px;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n    color:#f5f8fa;\n    margin-left:8px; }\n    .bp3-dark .bp3-slider-handle .bp3-slider-label{\n      background:#e1e8ed;\n      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n      color:#394b59; }\n    .bp3-disabled .bp3-slider-handle .bp3-slider-label{\n      -webkit-box-shadow:none;\n              box-shadow:none; }\n  .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{\n    width:8px; }\n  .bp3-slider-handle.bp3-start{\n    border-bottom-right-radius:0;\n    border-top-right-radius:0; }\n  .bp3-slider-handle.bp3-end{\n    border-bottom-left-radius:0;\n    border-top-left-radius:0;\n    margin-left:8px; }\n    .bp3-slider-handle.bp3-end .bp3-slider-label{\n      margin-left:0; }\n\n.bp3-slider-label{\n  -webkit-transform:translate(-50%, 20px);\n          transform:translate(-50%, 20px);\n  display:inline-block;\n  font-size:12px;\n  line-height:1;\n  padding:2px 5px;\n  position:absolute;\n  vertical-align:top; }\n\n.bp3-slider.bp3-vertical{\n  height:150px;\n  min-width:40px;\n  width:40px; }\n  .bp3-slider.bp3-vertical .bp3-slider-track,\n  .bp3-slider.bp3-vertical .bp3-slider-progress{\n    bottom:0;\n    height:auto;\n    left:5px;\n    top:0;\n    width:6px; }\n  .bp3-slider.bp3-vertical .bp3-slider-progress{\n    top:auto; }\n  .bp3-slider.bp3-vertical .bp3-slider-label{\n    -webkit-transform:translate(20px, 50%);\n            transform:translate(20px, 50%); }\n  .bp3-slider.bp3-vertical .bp3-slider-handle{\n    top:auto; }\n    .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{\n      margin-left:0;\n      margin-top:-8px; }\n    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{\n      height:8px;\n      margin-left:0;\n      width:16px; }\n    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{\n      border-bottom-right-radius:3px;\n      border-top-left-radius:0; }\n      .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{\n        -webkit-transform:translate(20px);\n                transform:translate(20px); }\n    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{\n      border-bottom-left-radius:0;\n      border-bottom-right-radius:0;\n      border-top-left-radius:3px;\n      margin-bottom:8px; }\n\n@-webkit-keyframes pt-spinner-animation{\n  from{\n    -webkit-transform:rotate(0deg);\n            transform:rotate(0deg); }\n  to{\n    -webkit-transform:rotate(360deg);\n            transform:rotate(360deg); } }\n\n@keyframes pt-spinner-animation{\n  from{\n    -webkit-transform:rotate(0deg);\n            transform:rotate(0deg); }\n  to{\n    -webkit-transform:rotate(360deg);\n            transform:rotate(360deg); } }\n\n.bp3-spinner{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  overflow:visible;\n  vertical-align:middle; }\n  .bp3-spinner svg{\n    display:block; }\n  .bp3-spinner path{\n    fill-opacity:0; }\n  .bp3-spinner .bp3-spinner-head{\n    stroke:rgba(92, 112, 128, 0.8);\n    stroke-linecap:round;\n    -webkit-transform-origin:center;\n            transform-origin:center;\n    -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n    transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-spinner .bp3-spinner-track{\n    stroke:rgba(92, 112, 128, 0.2); }\n\n.bp3-spinner-animation{\n  -webkit-animation:pt-spinner-animation 500ms linear infinite;\n          animation:pt-spinner-animation 500ms linear infinite; }\n  .bp3-no-spin > .bp3-spinner-animation{\n    -webkit-animation:none;\n            animation:none; }\n\n.bp3-dark .bp3-spinner .bp3-spinner-head{\n  stroke:#8a9ba8; }\n\n.bp3-dark .bp3-spinner .bp3-spinner-track{\n  stroke:rgba(16, 22, 26, 0.5); }\n\n.bp3-spinner.bp3-intent-primary .bp3-spinner-head{\n  stroke:#137cbd; }\n\n.bp3-spinner.bp3-intent-success .bp3-spinner-head{\n  stroke:#0f9960; }\n\n.bp3-spinner.bp3-intent-warning .bp3-spinner-head{\n  stroke:#d9822b; }\n\n.bp3-spinner.bp3-intent-danger .bp3-spinner-head{\n  stroke:#db3737; }\n.bp3-tabs.bp3-vertical{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex; }\n  .bp3-tabs.bp3-vertical > .bp3-tab-list{\n    -webkit-box-align:start;\n        -ms-flex-align:start;\n            align-items:flex-start;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{\n      border-radius:3px;\n      padding:0 10px;\n      width:100%; }\n      .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected=\"true\"]{\n        background-color:rgba(19, 124, 189, 0.2);\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{\n      background-color:rgba(19, 124, 189, 0.2);\n      border-radius:3px;\n      bottom:0;\n      height:auto;\n      left:0;\n      right:0;\n      top:0; }\n  .bp3-tabs.bp3-vertical > .bp3-tab-panel{\n    margin-top:0;\n    padding-left:20px; }\n\n.bp3-tab-list{\n  -webkit-box-align:end;\n      -ms-flex-align:end;\n          align-items:flex-end;\n  border:none;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  list-style:none;\n  margin:0;\n  padding:0;\n  position:relative; }\n  .bp3-tab-list > *:not(:last-child){\n    margin-right:20px; }\n\n.bp3-tab{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  word-wrap:normal;\n  color:#182026;\n  cursor:pointer;\n  -webkit-box-flex:0;\n      -ms-flex:0 0 auto;\n          flex:0 0 auto;\n  font-size:14px;\n  line-height:30px;\n  max-width:100%;\n  position:relative;\n  vertical-align:top; }\n  .bp3-tab a{\n    color:inherit;\n    display:block;\n    text-decoration:none; }\n  .bp3-tab-indicator-wrapper ~ .bp3-tab{\n    background-color:transparent !important;\n    -webkit-box-shadow:none !important;\n            box-shadow:none !important; }\n  .bp3-tab[aria-disabled=\"true\"]{\n    color:rgba(92, 112, 128, 0.6);\n    cursor:not-allowed; }\n  .bp3-tab[aria-selected=\"true\"]{\n    border-radius:0;\n    -webkit-box-shadow:inset 0 -3px 0 #106ba3;\n            box-shadow:inset 0 -3px 0 #106ba3; }\n  .bp3-tab[aria-selected=\"true\"], .bp3-tab:not([aria-disabled=\"true\"]):hover{\n    color:#106ba3; }\n  .bp3-tab:focus{\n    -moz-outline-radius:0; }\n  .bp3-large > .bp3-tab{\n    font-size:16px;\n    line-height:40px; }\n\n.bp3-tab-panel{\n  margin-top:20px; }\n  .bp3-tab-panel[aria-hidden=\"true\"]{\n    display:none; }\n\n.bp3-tab-indicator-wrapper{\n  left:0;\n  pointer-events:none;\n  position:absolute;\n  top:0;\n  -webkit-transform:translateX(0), translateY(0);\n          transform:translateX(0), translateY(0);\n  -webkit-transition:height, width, -webkit-transform;\n  transition:height, width, -webkit-transform;\n  transition:height, transform, width;\n  transition:height, transform, width, -webkit-transform;\n  -webkit-transition-duration:200ms;\n          transition-duration:200ms;\n  -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n          transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-tab-indicator-wrapper .bp3-tab-indicator{\n    background-color:#106ba3;\n    bottom:0;\n    height:3px;\n    left:0;\n    position:absolute;\n    right:0; }\n  .bp3-tab-indicator-wrapper.bp3-no-animation{\n    -webkit-transition:none;\n    transition:none; }\n\n.bp3-dark .bp3-tab{\n  color:#f5f8fa; }\n  .bp3-dark .bp3-tab[aria-disabled=\"true\"]{\n    color:rgba(167, 182, 194, 0.6); }\n  .bp3-dark .bp3-tab[aria-selected=\"true\"]{\n    -webkit-box-shadow:inset 0 -3px 0 #48aff0;\n            box-shadow:inset 0 -3px 0 #48aff0; }\n  .bp3-dark .bp3-tab[aria-selected=\"true\"], .bp3-dark .bp3-tab:not([aria-disabled=\"true\"]):hover{\n    color:#48aff0; }\n\n.bp3-dark .bp3-tab-indicator{\n  background-color:#48aff0; }\n\n.bp3-flex-expander{\n  -webkit-box-flex:1;\n      -ms-flex:1 1;\n          flex:1 1; }\n.bp3-tag{\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  background-color:#5c7080;\n  border:none;\n  border-radius:3px;\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  color:#f5f8fa;\n  font-size:12px;\n  line-height:16px;\n  max-width:100%;\n  min-height:20px;\n  min-width:20px;\n  padding:2px 6px;\n  position:relative; }\n  .bp3-tag.bp3-interactive{\n    cursor:pointer; }\n    .bp3-tag.bp3-interactive:hover{\n      background-color:rgba(92, 112, 128, 0.85); }\n    .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{\n      background-color:rgba(92, 112, 128, 0.7); }\n  .bp3-tag > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-tag > .bp3-fill{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-tag::before,\n  .bp3-tag > *{\n    margin-right:4px; }\n  .bp3-tag:empty::before,\n  .bp3-tag > :last-child{\n    margin-right:0; }\n  .bp3-tag:focus{\n    outline:rgba(19, 124, 189, 0.6) auto 2px;\n    outline-offset:0;\n    -moz-outline-radius:6px; }\n  .bp3-tag.bp3-round{\n    border-radius:30px;\n    padding-left:8px;\n    padding-right:8px; }\n  .bp3-dark .bp3-tag{\n    background-color:#bfccd6;\n    color:#182026; }\n    .bp3-dark .bp3-tag.bp3-interactive{\n      cursor:pointer; }\n      .bp3-dark .bp3-tag.bp3-interactive:hover{\n        background-color:rgba(191, 204, 214, 0.85); }\n      .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{\n        background-color:rgba(191, 204, 214, 0.7); }\n    .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{\n      fill:currentColor; }\n  .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{\n    fill:#ffffff; }\n  .bp3-tag.bp3-large,\n  .bp3-large .bp3-tag{\n    font-size:14px;\n    line-height:20px;\n    min-height:30px;\n    min-width:30px;\n    padding:5px 10px; }\n    .bp3-tag.bp3-large::before,\n    .bp3-tag.bp3-large > *,\n    .bp3-large .bp3-tag::before,\n    .bp3-large .bp3-tag > *{\n      margin-right:7px; }\n    .bp3-tag.bp3-large:empty::before,\n    .bp3-tag.bp3-large > :last-child,\n    .bp3-large .bp3-tag:empty::before,\n    .bp3-large .bp3-tag > :last-child{\n      margin-right:0; }\n    .bp3-tag.bp3-large.bp3-round,\n    .bp3-large .bp3-tag.bp3-round{\n      padding-left:12px;\n      padding-right:12px; }\n  .bp3-tag.bp3-intent-primary{\n    background:#137cbd;\n    color:#ffffff; }\n    .bp3-tag.bp3-intent-primary.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-intent-primary.bp3-interactive:hover{\n        background-color:rgba(19, 124, 189, 0.85); }\n      .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{\n        background-color:rgba(19, 124, 189, 0.7); }\n  .bp3-tag.bp3-intent-success{\n    background:#0f9960;\n    color:#ffffff; }\n    .bp3-tag.bp3-intent-success.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-intent-success.bp3-interactive:hover{\n        background-color:rgba(15, 153, 96, 0.85); }\n      .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{\n        background-color:rgba(15, 153, 96, 0.7); }\n  .bp3-tag.bp3-intent-warning{\n    background:#d9822b;\n    color:#ffffff; }\n    .bp3-tag.bp3-intent-warning.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-intent-warning.bp3-interactive:hover{\n        background-color:rgba(217, 130, 43, 0.85); }\n      .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{\n        background-color:rgba(217, 130, 43, 0.7); }\n  .bp3-tag.bp3-intent-danger{\n    background:#db3737;\n    color:#ffffff; }\n    .bp3-tag.bp3-intent-danger.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-intent-danger.bp3-interactive:hover{\n        background-color:rgba(219, 55, 55, 0.85); }\n      .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{\n        background-color:rgba(219, 55, 55, 0.7); }\n  .bp3-tag.bp3-fill{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    width:100%; }\n  .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{\n    fill:#5c7080; }\n  .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]){\n    background-color:rgba(138, 155, 168, 0.2);\n    color:#182026; }\n    .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive:hover{\n        background-color:rgba(92, 112, 128, 0.3); }\n      .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive:active{\n        background-color:rgba(92, 112, 128, 0.4); }\n    .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]){\n      color:#f5f8fa; }\n      .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive{\n        cursor:pointer; }\n        .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive:hover{\n          background-color:rgba(191, 204, 214, 0.3); }\n        .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]).bp3-interactive:active{\n          background-color:rgba(191, 204, 214, 0.4); }\n      .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*=\"bp3-intent-\"]) .bp3-icon-large{\n        fill:#a7b6c2; }\n  .bp3-tag.bp3-minimal.bp3-intent-primary{\n    background-color:rgba(19, 124, 189, 0.15);\n    color:#106ba3; }\n    .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{\n        background-color:rgba(19, 124, 189, 0.25); }\n      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{\n        background-color:rgba(19, 124, 189, 0.35); }\n    .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{\n      fill:#137cbd; }\n    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{\n      background-color:rgba(19, 124, 189, 0.25);\n      color:#48aff0; }\n      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{\n        cursor:pointer; }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{\n          background-color:rgba(19, 124, 189, 0.35); }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{\n          background-color:rgba(19, 124, 189, 0.45); }\n  .bp3-tag.bp3-minimal.bp3-intent-success{\n    background-color:rgba(15, 153, 96, 0.15);\n    color:#0d8050; }\n    .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{\n        background-color:rgba(15, 153, 96, 0.25); }\n      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{\n        background-color:rgba(15, 153, 96, 0.35); }\n    .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{\n      fill:#0f9960; }\n    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{\n      background-color:rgba(15, 153, 96, 0.25);\n      color:#3dcc91; }\n      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{\n        cursor:pointer; }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{\n          background-color:rgba(15, 153, 96, 0.35); }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{\n          background-color:rgba(15, 153, 96, 0.45); }\n  .bp3-tag.bp3-minimal.bp3-intent-warning{\n    background-color:rgba(217, 130, 43, 0.15);\n    color:#bf7326; }\n    .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{\n        background-color:rgba(217, 130, 43, 0.25); }\n      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{\n        background-color:rgba(217, 130, 43, 0.35); }\n    .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{\n      fill:#d9822b; }\n    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{\n      background-color:rgba(217, 130, 43, 0.25);\n      color:#ffb366; }\n      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{\n        cursor:pointer; }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{\n          background-color:rgba(217, 130, 43, 0.35); }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{\n          background-color:rgba(217, 130, 43, 0.45); }\n  .bp3-tag.bp3-minimal.bp3-intent-danger{\n    background-color:rgba(219, 55, 55, 0.15);\n    color:#c23030; }\n    .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{\n      cursor:pointer; }\n      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{\n        background-color:rgba(219, 55, 55, 0.25); }\n      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{\n        background-color:rgba(219, 55, 55, 0.35); }\n    .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{\n      fill:#db3737; }\n    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{\n      background-color:rgba(219, 55, 55, 0.25);\n      color:#ff7373; }\n      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{\n        cursor:pointer; }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{\n          background-color:rgba(219, 55, 55, 0.35); }\n        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{\n          background-color:rgba(219, 55, 55, 0.45); }\n\n.bp3-tag-remove{\n  background:none;\n  border:none;\n  color:inherit;\n  cursor:pointer;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin-bottom:-2px;\n  margin-right:-6px !important;\n  margin-top:-2px;\n  opacity:0.5;\n  padding:2px;\n  padding-left:0; }\n  .bp3-tag-remove:hover{\n    background:none;\n    opacity:0.8;\n    text-decoration:none; }\n  .bp3-tag-remove:active{\n    opacity:1; }\n  .bp3-tag-remove:empty::before{\n    font-family:\"Icons16\", sans-serif;\n    font-size:16px;\n    font-style:normal;\n    font-weight:400;\n    line-height:1;\n    -moz-osx-font-smoothing:grayscale;\n    -webkit-font-smoothing:antialiased;\n    content:\"\"; }\n  .bp3-large .bp3-tag-remove{\n    margin-right:-10px !important;\n    padding:0 5px 0 0; }\n    .bp3-large .bp3-tag-remove:empty::before{\n      font-family:\"Icons20\", sans-serif;\n      font-size:20px;\n      font-style:normal;\n      font-weight:400;\n      line-height:1; }\n.bp3-tag-input{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:start;\n      -ms-flex-align:start;\n          align-items:flex-start;\n  cursor:text;\n  height:auto;\n  line-height:inherit;\n  min-height:30px;\n  padding-left:5px;\n  padding-right:0; }\n  .bp3-tag-input > *{\n    -webkit-box-flex:0;\n        -ms-flex-positive:0;\n            flex-grow:0;\n    -ms-flex-negative:0;\n        flex-shrink:0; }\n  .bp3-tag-input > .bp3-tag-input-values{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-negative:1;\n        flex-shrink:1; }\n  .bp3-tag-input .bp3-tag-input-icon{\n    color:#5c7080;\n    margin-left:2px;\n    margin-right:7px;\n    margin-top:7px; }\n  .bp3-tag-input .bp3-tag-input-values{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-item-align:stretch;\n        align-self:stretch;\n    -ms-flex-wrap:wrap;\n        flex-wrap:wrap;\n    margin-right:7px;\n    margin-top:5px;\n    min-width:0; }\n    .bp3-tag-input .bp3-tag-input-values > *{\n      -webkit-box-flex:0;\n          -ms-flex-positive:0;\n              flex-grow:0;\n      -ms-flex-negative:0;\n          flex-shrink:0; }\n    .bp3-tag-input .bp3-tag-input-values > .bp3-fill{\n      -webkit-box-flex:1;\n          -ms-flex-positive:1;\n              flex-grow:1;\n      -ms-flex-negative:1;\n          flex-shrink:1; }\n    .bp3-tag-input .bp3-tag-input-values::before,\n    .bp3-tag-input .bp3-tag-input-values > *{\n      margin-right:5px; }\n    .bp3-tag-input .bp3-tag-input-values:empty::before,\n    .bp3-tag-input .bp3-tag-input-values > :last-child{\n      margin-right:0; }\n    .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{\n      padding-left:5px; }\n    .bp3-tag-input .bp3-tag-input-values > *{\n      margin-bottom:5px; }\n  .bp3-tag-input .bp3-tag{\n    overflow-wrap:break-word; }\n    .bp3-tag-input .bp3-tag.bp3-active{\n      outline:rgba(19, 124, 189, 0.6) auto 2px;\n      outline-offset:0;\n      -moz-outline-radius:6px; }\n  .bp3-tag-input .bp3-input-ghost{\n    -webkit-box-flex:1;\n        -ms-flex:1 1 auto;\n            flex:1 1 auto;\n    line-height:20px;\n    width:80px; }\n    .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{\n      cursor:not-allowed; }\n  .bp3-tag-input .bp3-button,\n  .bp3-tag-input .bp3-spinner{\n    margin:3px;\n    margin-left:0; }\n  .bp3-tag-input .bp3-button{\n    min-height:24px;\n    min-width:24px;\n    padding:0 7px; }\n  .bp3-tag-input.bp3-large{\n    height:auto;\n    min-height:40px; }\n    .bp3-tag-input.bp3-large::before,\n    .bp3-tag-input.bp3-large > *{\n      margin-right:10px; }\n    .bp3-tag-input.bp3-large:empty::before,\n    .bp3-tag-input.bp3-large > :last-child{\n      margin-right:0; }\n    .bp3-tag-input.bp3-large .bp3-tag-input-icon{\n      margin-left:5px;\n      margin-top:10px; }\n    .bp3-tag-input.bp3-large .bp3-input-ghost{\n      line-height:30px; }\n    .bp3-tag-input.bp3-large .bp3-button{\n      min-height:30px;\n      min-width:30px;\n      padding:5px 10px;\n      margin:5px;\n      margin-left:0; }\n    .bp3-tag-input.bp3-large .bp3-spinner{\n      margin:8px;\n      margin-left:0; }\n  .bp3-tag-input.bp3-active{\n    background-color:#ffffff;\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-tag-input.bp3-active.bp3-intent-primary{\n      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-tag-input.bp3-active.bp3-intent-success{\n      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-tag-input.bp3-active.bp3-intent-warning{\n      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n    .bp3-tag-input.bp3-active.bp3-intent-danger{\n      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }\n  .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{\n    color:#a7b6c2; }\n  .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{\n    color:#f5f8fa; }\n    .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n    .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{\n      color:rgba(167, 182, 194, 0.6); }\n  .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{\n    background-color:rgba(16, 22, 26, 0.3);\n    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{\n      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{\n      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{\n      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{\n      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);\n              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }\n\n.bp3-input-ghost{\n  background:none;\n  border:none;\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  padding:0; }\n  .bp3-input-ghost::-webkit-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input-ghost::-moz-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input-ghost:-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input-ghost::-ms-input-placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input-ghost::placeholder{\n    color:rgba(92, 112, 128, 0.6);\n    opacity:1; }\n  .bp3-input-ghost:focus{\n    outline:none !important; }\n.bp3-toast{\n  -webkit-box-align:start;\n      -ms-flex-align:start;\n          align-items:flex-start;\n  background-color:#ffffff;\n  border-radius:3px;\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:20px 0 0;\n  max-width:500px;\n  min-width:300px;\n  pointer-events:all;\n  position:relative !important; }\n  .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{\n    -webkit-transform:translateY(-40px);\n            transform:translateY(-40px); }\n  .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{\n    -webkit-transform:translateY(0);\n            transform:translateY(0);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n  .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{\n    -webkit-transform:translateY(-40px);\n            transform:translateY(-40px); }\n  .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{\n    -webkit-transform:translateY(0);\n            transform:translateY(0);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);\n            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }\n  .bp3-toast.bp3-toast-exit{\n    opacity:1;\n    -webkit-filter:blur(0);\n            filter:blur(0); }\n  .bp3-toast.bp3-toast-exit-active{\n    opacity:0;\n    -webkit-filter:blur(10px);\n            filter:blur(10px);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:300ms;\n            transition-duration:300ms;\n    -webkit-transition-property:opacity, -webkit-filter;\n    transition-property:opacity, -webkit-filter;\n    transition-property:opacity, filter;\n    transition-property:opacity, filter, -webkit-filter;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-toast.bp3-toast-exit ~ .bp3-toast{\n    -webkit-transform:translateY(0);\n            transform:translateY(0); }\n  .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{\n    -webkit-transform:translateY(-40px);\n            transform:translateY(-40px);\n    -webkit-transition-delay:50ms;\n            transition-delay:50ms;\n    -webkit-transition-duration:100ms;\n            transition-duration:100ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-toast .bp3-button-group{\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto;\n    padding:5px;\n    padding-left:0; }\n  .bp3-toast > .bp3-icon{\n    color:#5c7080;\n    margin:12px;\n    margin-right:0; }\n  .bp3-toast.bp3-dark,\n  .bp3-dark .bp3-toast{\n    background-color:#394b59;\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n    .bp3-toast.bp3-dark > .bp3-icon,\n    .bp3-dark .bp3-toast > .bp3-icon{\n      color:#a7b6c2; }\n  .bp3-toast[class*=\"bp3-intent-\"] a{\n    color:rgba(255, 255, 255, 0.7); }\n    .bp3-toast[class*=\"bp3-intent-\"] a:hover{\n      color:#ffffff; }\n  .bp3-toast[class*=\"bp3-intent-\"] > .bp3-icon{\n    color:#ffffff; }\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button, .bp3-toast[class*=\"bp3-intent-\"] .bp3-button::before,\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button .bp3-icon, .bp3-toast[class*=\"bp3-intent-\"] .bp3-button:active{\n    color:rgba(255, 255, 255, 0.7) !important; }\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button:focus{\n    outline-color:rgba(255, 255, 255, 0.5); }\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button:hover{\n    background-color:rgba(255, 255, 255, 0.15) !important;\n    color:#ffffff !important; }\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button:active{\n    background-color:rgba(255, 255, 255, 0.3) !important;\n    color:#ffffff !important; }\n  .bp3-toast[class*=\"bp3-intent-\"] .bp3-button::after{\n    background:rgba(255, 255, 255, 0.3) !important; }\n  .bp3-toast.bp3-intent-primary{\n    background-color:#137cbd;\n    color:#ffffff; }\n  .bp3-toast.bp3-intent-success{\n    background-color:#0f9960;\n    color:#ffffff; }\n  .bp3-toast.bp3-intent-warning{\n    background-color:#d9822b;\n    color:#ffffff; }\n  .bp3-toast.bp3-intent-danger{\n    background-color:#db3737;\n    color:#ffffff; }\n\n.bp3-toast-message{\n  -webkit-box-flex:1;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto;\n  padding:11px;\n  word-break:break-word; }\n\n.bp3-toast-container{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box !important;\n  display:-ms-flexbox !important;\n  display:flex !important;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  left:0;\n  overflow:hidden;\n  padding:0 20px 20px;\n  pointer-events:none;\n  right:0;\n  z-index:40; }\n  .bp3-toast-container.bp3-toast-container-in-portal{\n    position:fixed; }\n  .bp3-toast-container.bp3-toast-container-inline{\n    position:absolute; }\n  .bp3-toast-container.bp3-toast-container-top{\n    top:0; }\n  .bp3-toast-container.bp3-toast-container-bottom{\n    bottom:0;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:reverse;\n        -ms-flex-direction:column-reverse;\n            flex-direction:column-reverse;\n    top:auto; }\n  .bp3-toast-container.bp3-toast-container-left{\n    -webkit-box-align:start;\n        -ms-flex-align:start;\n            align-items:flex-start; }\n  .bp3-toast-container.bp3-toast-container-right{\n    -webkit-box-align:end;\n        -ms-flex-align:end;\n            align-items:flex-end; }\n\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-exit-active ~ .bp3-toast,\n.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{\n  -webkit-transform:translateY(60px);\n          transform:translateY(60px); }\n.bp3-tooltip{\n  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);\n  -webkit-transform:scale(1);\n          transform:scale(1); }\n  .bp3-tooltip .bp3-popover-arrow{\n    height:22px;\n    position:absolute;\n    width:22px; }\n    .bp3-tooltip .bp3-popover-arrow::before{\n      height:14px;\n      margin:4px;\n      width:14px; }\n  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{\n    margin-bottom:11px;\n    margin-top:-11px; }\n    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{\n      bottom:-8px; }\n      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(-90deg);\n                transform:rotate(-90deg); }\n  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{\n    margin-left:11px; }\n    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{\n      left:-8px; }\n      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(0);\n                transform:rotate(0); }\n  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{\n    margin-top:11px; }\n    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{\n      top:-8px; }\n      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(90deg);\n                transform:rotate(90deg); }\n  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{\n    margin-left:-11px;\n    margin-right:11px; }\n    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{\n      right:-8px; }\n      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{\n        -webkit-transform:rotate(180deg);\n                transform:rotate(180deg); }\n  .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{\n    top:50%;\n    -webkit-transform:translateY(-50%);\n            transform:translateY(-50%); }\n  .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{\n    right:50%;\n    -webkit-transform:translateX(50%);\n            transform:translateX(50%); }\n  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{\n    top:-0.22183px; }\n  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{\n    right:-0.22183px; }\n  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{\n    left:-0.22183px; }\n  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{\n    bottom:-0.22183px; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{\n    -webkit-transform-origin:top left;\n            transform-origin:top left; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{\n    -webkit-transform-origin:top center;\n            transform-origin:top center; }\n  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{\n    -webkit-transform-origin:top right;\n            transform-origin:top right; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{\n    -webkit-transform-origin:center left;\n            transform-origin:center left; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{\n    -webkit-transform-origin:center center;\n            transform-origin:center center; }\n  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{\n    -webkit-transform-origin:center right;\n            transform-origin:center right; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{\n    -webkit-transform-origin:bottom left;\n            transform-origin:bottom left; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{\n    -webkit-transform-origin:bottom center;\n            transform-origin:bottom center; }\n  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{\n    -webkit-transform-origin:bottom right;\n            transform-origin:bottom right; }\n  .bp3-tooltip .bp3-popover-content{\n    background:#394b59;\n    color:#f5f8fa; }\n  .bp3-tooltip .bp3-popover-arrow::before{\n    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);\n            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }\n  .bp3-tooltip .bp3-popover-arrow-border{\n    fill:#10161a;\n    fill-opacity:0.1; }\n  .bp3-tooltip .bp3-popover-arrow-fill{\n    fill:#394b59; }\n  .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{\n    -webkit-transform:scale(0.8);\n            transform:scale(0.8); }\n  .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{\n    -webkit-transform:scale(1);\n            transform:scale(1);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:100ms;\n            transition-duration:100ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-popover-exit > .bp3-tooltip{\n    -webkit-transform:scale(1);\n            transform:scale(1); }\n  .bp3-popover-exit-active > .bp3-tooltip{\n    -webkit-transform:scale(0.8);\n            transform:scale(0.8);\n    -webkit-transition-delay:0;\n            transition-delay:0;\n    -webkit-transition-duration:100ms;\n            transition-duration:100ms;\n    -webkit-transition-property:-webkit-transform;\n    transition-property:-webkit-transform;\n    transition-property:transform;\n    transition-property:transform, -webkit-transform;\n    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);\n            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-tooltip .bp3-popover-content{\n    padding:10px 12px; }\n  .bp3-tooltip.bp3-dark,\n  .bp3-dark .bp3-tooltip{\n    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);\n            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }\n    .bp3-tooltip.bp3-dark .bp3-popover-content,\n    .bp3-dark .bp3-tooltip .bp3-popover-content{\n      background:#e1e8ed;\n      color:#394b59; }\n    .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,\n    .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{\n      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);\n              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }\n    .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,\n    .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{\n      fill:#10161a;\n      fill-opacity:0.2; }\n    .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,\n    .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{\n      fill:#e1e8ed; }\n  .bp3-tooltip.bp3-intent-primary .bp3-popover-content{\n    background:#137cbd;\n    color:#ffffff; }\n  .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{\n    fill:#137cbd; }\n  .bp3-tooltip.bp3-intent-success .bp3-popover-content{\n    background:#0f9960;\n    color:#ffffff; }\n  .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{\n    fill:#0f9960; }\n  .bp3-tooltip.bp3-intent-warning .bp3-popover-content{\n    background:#d9822b;\n    color:#ffffff; }\n  .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{\n    fill:#d9822b; }\n  .bp3-tooltip.bp3-intent-danger .bp3-popover-content{\n    background:#db3737;\n    color:#ffffff; }\n  .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{\n    fill:#db3737; }\n\n.bp3-tooltip-indicator{\n  border-bottom:dotted 1px;\n  cursor:help; }\n.bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{\n  color:#5c7080; }\n  .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{\n    color:#137cbd; }\n  .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{\n    color:#0f9960; }\n  .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{\n    color:#d9822b; }\n  .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{\n    color:#db3737; }\n\n.bp3-tree-node-list{\n  list-style:none;\n  margin:0;\n  padding-left:0; }\n\n.bp3-tree-root{\n  background-color:transparent;\n  cursor:default;\n  padding-left:0;\n  position:relative; }\n\n.bp3-tree-node-content-0{\n  padding-left:0px; }\n\n.bp3-tree-node-content-1{\n  padding-left:23px; }\n\n.bp3-tree-node-content-2{\n  padding-left:46px; }\n\n.bp3-tree-node-content-3{\n  padding-left:69px; }\n\n.bp3-tree-node-content-4{\n  padding-left:92px; }\n\n.bp3-tree-node-content-5{\n  padding-left:115px; }\n\n.bp3-tree-node-content-6{\n  padding-left:138px; }\n\n.bp3-tree-node-content-7{\n  padding-left:161px; }\n\n.bp3-tree-node-content-8{\n  padding-left:184px; }\n\n.bp3-tree-node-content-9{\n  padding-left:207px; }\n\n.bp3-tree-node-content-10{\n  padding-left:230px; }\n\n.bp3-tree-node-content-11{\n  padding-left:253px; }\n\n.bp3-tree-node-content-12{\n  padding-left:276px; }\n\n.bp3-tree-node-content-13{\n  padding-left:299px; }\n\n.bp3-tree-node-content-14{\n  padding-left:322px; }\n\n.bp3-tree-node-content-15{\n  padding-left:345px; }\n\n.bp3-tree-node-content-16{\n  padding-left:368px; }\n\n.bp3-tree-node-content-17{\n  padding-left:391px; }\n\n.bp3-tree-node-content-18{\n  padding-left:414px; }\n\n.bp3-tree-node-content-19{\n  padding-left:437px; }\n\n.bp3-tree-node-content-20{\n  padding-left:460px; }\n\n.bp3-tree-node-content{\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  height:30px;\n  padding-right:5px;\n  width:100%; }\n  .bp3-tree-node-content:hover{\n    background-color:rgba(191, 204, 214, 0.4); }\n\n.bp3-tree-node-caret,\n.bp3-tree-node-caret-none{\n  min-width:30px; }\n\n.bp3-tree-node-caret{\n  color:#5c7080;\n  cursor:pointer;\n  padding:7px;\n  -webkit-transform:rotate(0deg);\n          transform:rotate(0deg);\n  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }\n  .bp3-tree-node-caret:hover{\n    color:#182026; }\n  .bp3-dark .bp3-tree-node-caret{\n    color:#a7b6c2; }\n    .bp3-dark .bp3-tree-node-caret:hover{\n      color:#f5f8fa; }\n  .bp3-tree-node-caret.bp3-tree-node-caret-open{\n    -webkit-transform:rotate(90deg);\n            transform:rotate(90deg); }\n  .bp3-tree-node-caret.bp3-icon-standard::before{\n    content:\"\"; }\n\n.bp3-tree-node-icon{\n  margin-right:7px;\n  position:relative; }\n\n.bp3-tree-node-label{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  word-wrap:normal;\n  -webkit-box-flex:1;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto;\n  position:relative;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-tree-node-label span{\n    display:inline; }\n\n.bp3-tree-node-secondary-label{\n  padding:0 5px;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none; }\n  .bp3-tree-node-secondary-label .bp3-popover-wrapper,\n  .bp3-tree-node-secondary-label .bp3-popover-target{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; }\n\n.bp3-tree-node.bp3-disabled .bp3-tree-node-content{\n  background-color:inherit;\n  color:rgba(92, 112, 128, 0.6);\n  cursor:not-allowed; }\n\n.bp3-tree-node.bp3-disabled .bp3-tree-node-caret,\n.bp3-tree-node.bp3-disabled .bp3-tree-node-icon{\n  color:rgba(92, 112, 128, 0.6);\n  cursor:not-allowed; }\n\n.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{\n  background-color:#137cbd; }\n  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,\n  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{\n    color:#ffffff; }\n  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{\n    color:rgba(255, 255, 255, 0.7); }\n  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{\n    color:#ffffff; }\n\n.bp3-dark .bp3-tree-node-content:hover{\n  background-color:rgba(92, 112, 128, 0.3); }\n\n.bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{\n  color:#a7b6c2; }\n  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{\n    color:#137cbd; }\n  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{\n    color:#0f9960; }\n  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{\n    color:#d9822b; }\n  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{\n    color:#db3737; }\n\n.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{\n  background-color:#137cbd; }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@blueprintjs/core/lib/css/blueprint.css":
false,

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dash_blueprint/blueprint.css */ "./dash_blueprint/blueprint.css");
/* harmony import */ var _dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dash_blueprint_blueprint_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */




var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      value: ''
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
        title: "Dialog Box"
      }, "This is a dialog box"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/lib/components/Breadcrumbs.react.js":
false,

/***/ "./src/lib/components/Button.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Button.react.js ***!
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
var _Button$propTypes;

var _excluded = ["setProps"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * This is pretty much a straight copy/paste from the dash html component button,
 * except we render a blueprint button. If you don't care about styling, you should probably
 * use the dash version.
 *
 * TODO - it would be useful to have a href prop here, where clicking a button routes to
 * a different URL
 * @param props
 * @returns {*}
 * @constructor
 */

var Button = function Button(props) {
  var setProps = props.setProps,
      buttonProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
    onClick: function onClick(e) {
      e.stopPropagation();

      if (props.setProps) {
        props.setProps({
          n_clicks: props.n_clicks + 1,
          n_clicks_timestamp: Date.now()
        });
      }

      if (props.href) {
        // prevent anchor from updating location
        e.preventDefault();
        var href = props.href,
            refresh = props.refresh;

        if (props.preserveSearchString) {
          href = href + window.location.search;
        }

        console.log(_objectSpread({}, window.location));

        if (refresh) {
          console.log(window.location.pathname);
          window.location.pathname = href; // this.props.active = true;
        } else {
          window.history.pushState({}, '', href);
          window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
        } // scroll back to top


        window.scrollTo(0, 0);
      }
    }
  }, buttonProps), props.children);
};

Button.defaultProps = {
  n_clicks: 0,
  n_clicks_timestamp: -1
};
Button.propTypes = (_Button$propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_clicks changed. This can be used to tell
   * which button was changed most recently.
   */
  n_clicks_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the form that is the owner of the element.
   */
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the action of the element, overriding the action defined in the <form>.
   */
  formAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the type of the element.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a default value which will be displayed in the element on page load.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the language used in the element.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text to be displayed in a tooltip when hovering over the element.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Button intent (primary/success/warning/danger/none)
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Button intent (primary/success/warning/danger/none)
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If set to true, the button will display in an active state. This is equivalent to setting className={Classes.ACTIVE}.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Text alignment within button. By default, icons and text will be centered within the button. Passing "left" or "right" will align the button text to that side and push icon and rightIcon to either edge. Passing "center" will center the text and icons together.
   * Choice of (`left`, `right`, `center`)
   */
  alignText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}, _defineProperty(_Button$propTypes, "disabled", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_Button$propTypes, "large", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_Button$propTypes, "minimal", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_Button$propTypes, "rightIcon", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_Button$propTypes, "small", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_Button$propTypes, "type", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_Button$propTypes, "href", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _Button$propTypes);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/lib/components/Card.react.js":
false,

/***/ "./src/lib/components/CheckboxGroup.react.js":
/*!***************************************************!*\
  !*** ./src/lib/components/CheckboxGroup.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * This is a wrapper around a set of BlueprintJS checkbox and FormGroup components
 * to give functionality similar to the standard Dash checkbox component.
 * 
 * The BlueprintJS checkbox treats every checkbox individually, whereas this groups
 * them into selection items
 */

var CheckboxGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.call(this, props);
    _this.handleChildChange = _this.handleChildChange.bind(_assertThisInitialized(_this));
    _this.formGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    if (_this.props.setParentProps) {
      _this.props.setParentProps({
        value: _this.props.value
      });
    }

    if (_this.props.setProps) {
      var checkedKeys = _this.props.children.filter(function (child) {
        return child.props._dashprivate_layout.props.checked === true;
      }).map(function (child) {
        return child.props._dashprivate_layout.props.key;
      });

      _this.props.setProps({
        value: checkedKeys
      });
    }

    return _this;
  }
  /**
   * Similar to a FormGroup, but this wraps up a set of checkboxes into a similar form
   * to the standard dash Checkbox
   * 
   * @param {string} key 
   * @param {object} data 
   */


  _createClass(CheckboxGroup, [{
    key: "handleChildChange",
    value: function handleChildChange(key, data) {
      var value;

      if (!this.props.value) {
        value = new Set([]);
      } else {
        value = new Set(this.props.value);
      }

      if (data.checked) {
        value.add(key);
      } else {
        value["delete"](key);
      }

      this.props.setProps({
        value: Array.from(value)
      });

      if (this.props.setParentProps) {
        this.props.setParentProps({
          value: Array.from(value)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          htmlProps = _objectWithoutProperties(_this$props, _excluded);
      /**
       * It's not pretty, but we are injecting the handeChildChange into the props of the 
       * child components so that the parent props are updated when the child value changes.
       */


      var clonedChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child) {
        if (child.props._dashprivate_layout) {
          child.props._dashprivate_layout.props.setParentProps = function (data) {
            return _this2.handleChildChange(child.props._dashprivate_layout.props.key || child.props._dashprivate_layout.props.id, data);
          };
        }

        return child;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], htmlProps, clonedChildren);
    }
  }]);

  return CheckboxGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


CheckboxGroup.defaultProps = {
  value: []
};
CheckboxGroup.propTypes = {
  // TODO

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
   * Label for the form group
   */
  'label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Label for the form group
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Often used with CSS to style elements with common properties.
   */
  'className': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/lib/components/CollapseCard.react.js":
false,

/***/ "./src/lib/components/CollapseCardList.react.js":
false,

/***/ "./src/lib/components/DateInput.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/DateInput.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/datetime */ "./node_modules/@blueprintjs/datetime/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["date", "maxDate", "minDate"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var dateUtils = __webpack_require__(/*! ../utils/date */ "./src/lib/utils/date.js");
/**
 * The DateInput component is an input group that shows a DatePicker in a Popover on focus.
 * Use it in forms where the user must enter a date.
 * @param props
 * @returns {*}
 * @constructor
 */


var DateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(DateInput, _React$Component);

  var _super = _createSuper(DateInput);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    var valid = !props.required || !!props.date;
    props.setProps && props.setProps({
      date: props.date,
      valid: valid
    });
    props.setParentProps && props.setParentProps(props.date, valid);
    return _this;
  }

  _createClass(DateInput, [{
    key: "handleChange",
    value: function handleChange(date, hasUserManuallySelectedDate) {
      if (hasUserManuallySelectedDate) {
        var _this$props = this.props,
            setProps = _this$props.setProps,
            setParentProps = _this$props.setParentProps,
            required = _this$props.required;
        var valid = !required || !!date;
        var formattedDate = date ? dateUtils.formatDate(date) : null;
        console.log(date, formattedDate, valid);

        if (setProps) {
          setProps({
            date: formattedDate,
            valid: valid
          });
        } else {
          this.setState({
            date: date,
            valid: valid
          });
        }

        setParentProps && setParentProps(formattedDate, valid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          date = _this$props2.date,
          maxDate = _this$props2.maxDate,
          minDate = _this$props2.minDate,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      if (minDate) {
        htmlProps.minDate = new Date(minDate);
      }

      if (maxDate) {
        htmlProps.maxDate = new Date(maxDate);
      }

      var defaultValue = date ? new Date(date) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__["DateInput"], _extends({}, htmlProps, {
        defaultValue: defaultValue,
        onChange: function onChange(newDate, hasUserManuallySelectedDate) {
          return _this2.handleChange(newDate, hasUserManuallySelectedDate);
        },
        formatDate: function formatDate(date) {
          return _this2.props.timePrecision ? dateUtils.formatDate(date) : dateUtils.formatDate(date).substring(0, 10);
        },
        parseDate: function parseDate(dateString) {
          return new Date(dateString);
        }
      }));
    }
  }]);

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DateInput.defaultProps = {
  defaultValue: null,
  todayButtonText: 'Today',
  timePrecision: null,
  canClearSelection: true,
  required: false
};
DateInput.propTypes = {
  // TODO

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The selected date
   */
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Initial day the calendar will display as selected. This should not be set if value is set.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The earliest date the user can select.
   */
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The latest date the user can select.
   */
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.
    This is shorthand for timePickerProps.precision and is a quick way to enable time selection.
    Inherited from IDatePickerBaseProps.timePrecision
   */
  timePrecision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the today button in the action bar.
   */
  todayButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the reset button in the action bar.
   */
  clearButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Allows the user to clear the selection by clicking the currently selected day.
   */
  canClearSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/DatePicker.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/DatePicker.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/datetime */ "./node_modules/@blueprintjs/datetime/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["date", "maxDate", "minDate"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var dateUtils = __webpack_require__(/*! ../utils/date */ "./src/lib/utils/date.js");
/**
 * A DatePicker shows a monthly calendar and allows the user to choose a single date.
 *
 * DatePicker is built on top of the react-day-picker library.
 */


var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    var valid = !props.required || !!props.date;
    props.setProps && props.setProps({
      date: props.date,
      valid: valid
    });
    props.setParentProps && props.setParentProps(props.date, valid);
    return _this;
  }

  _createClass(DatePicker, [{
    key: "handleChange",
    value: function handleChange(date, hasUserManuallySelectedDate) {
      if (hasUserManuallySelectedDate) {
        var _this$props = this.props,
            setProps = _this$props.setProps,
            setParentProps = _this$props.setParentProps,
            required = _this$props.required;
        var valid = !required || !!date;
        var formattedDate = date ? dateUtils.formatDate(date) : null;
        console.log(date, formattedDate, valid);

        if (setProps) {
          setProps({
            date: formattedDate,
            valid: valid
          });
        } else {
          this.setState({
            date: date,
            valid: valid
          });
        }

        setParentProps && setParentProps(formattedDate, valid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          date = _this$props2.date,
          maxDate = _this$props2.maxDate,
          minDate = _this$props2.minDate,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      if (minDate) {
        htmlProps.minDate = new Date(minDate);
      }

      if (maxDate) {
        htmlProps.maxDate = new Date(maxDate);
      }

      var defaultValue = date ? new Date(date) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], _extends({}, htmlProps, {
        defaultValue: defaultValue,
        onChange: function onChange(newDate, hasUserManuallySelectedDate) {
          return _this2.handleChange(newDate, hasUserManuallySelectedDate);
        },
        formatDate: function formatDate(date) {
          return _this2.props.timePrecision ? dateUtils.formatDate(date) : dateUtils.formatDate(date).substring(0, 10);
        },
        parseDate: function parseDate(dateString) {
          return new Date(dateString);
        }
      }));
    }
  }]);

  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DatePicker.defaultProps = {
  defaultValue: null,
  todayButtonText: 'Today',
  timePrecision: null,
  canClearSelection: true,
  required: false
};
DatePicker.propTypes = {
  // TODO

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The selected date
   */
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Initial day the calendar will display as selected. This should not be set if value is set.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The earliest date the user can select.
   */
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The latest date the user can select.
   */
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.
    This is shorthand for timePickerProps.precision and is a quick way to enable time selection.
    Inherited from IDatePickerBaseProps.timePrecision
   */
  timePrecision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the today button in the action bar.
   */
  todayButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the reset button in the action bar.
   */
  clearButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Allows the user to clear the selection by clicking the currently selected day.
   */
  canClearSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/DateRangeInput.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/DateRangeInput.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateRangeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/datetime */ "./node_modules/@blueprintjs/datetime/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["date", "maxDate", "minDate"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var dateUtils = __webpack_require__(/*! ../utils/date */ "./src/lib/utils/date.js");
/**
 * The DateRangeInput component is a control group composed of two input groups. It shows a
 * DateRangePicker in a Popover on focus.
 *
 * Use this component in forms where the user must enter a date range.
 */


var DateRangeInput = /*#__PURE__*/function (_React$Component) {
  _inherits(DateRangeInput, _React$Component);

  var _super = _createSuper(DateRangeInput);

  function DateRangeInput(props) {
    var _this;

    _classCallCheck(this, DateRangeInput);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    var valid = !props.required || !!props.start_date && !!props.end_date;
    props.setProps && props.setProps({
      start_date: props.start_date,
      end_date: props.end_date,
      date_range: [props.start_date, props.end_date],
      valid: valid
    });
    props.setParentProps && props.setParentProps(props.date, valid);
    return _this;
  }

  _createClass(DateRangeInput, [{
    key: "handleChange",
    value: function handleChange(dateRange, hasUserManuallySelectedDate) {
      var _this$props = this.props,
          setProps = _this$props.setProps,
          setParentProps = _this$props.setParentProps,
          required = _this$props.required,
          timePrecision = _this$props.timePrecision;
      var valid = !required || !!dateRange[0] && !!dateRange[1];
      var start_date = dateUtils.formatDate(dateRange[0], timePrecision);
      var end_date = dateUtils.formatDate(dateRange[1], timePrecision);
      console.log(start_date, end_date);

      if (setProps) {
        setProps({
          start_date: start_date,
          end_date: end_date,
          date_range: [start_date, end_date],
          valid: valid
        });
      } else {
        this.setState({
          start_date: start_date,
          end_date: end_date,
          date_range: [start_date, end_date],
          valid: valid
        });
      }

      setParentProps && setParentProps([start_date, end_date], valid);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          date = _this$props2.date,
          maxDate = _this$props2.maxDate,
          minDate = _this$props2.minDate,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      if (minDate) {
        htmlProps.minDate = new Date(minDate);
      }

      if (maxDate) {
        htmlProps.maxDate = new Date(maxDate);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_datetime__WEBPACK_IMPORTED_MODULE_2__["DateRangeInput"], _extends({}, htmlProps, {
        defaultValue: [this.props.start_date ? new Date(this.props.start_date) : new Date(undefined), this.props.end_date ? new Date(this.props.end_date) : new Date(undefined)],
        onChange: function onChange(newDateRange, isUserChange) {
          return _this2.handleChange(newDateRange, isUserChange);
        },
        formatDate: function formatDate(date) {
          return dateUtils.formatDate(date, htmlProps.timePrecision);
        },
        parseDate: function parseDate(dateString) {
          return new Date(dateString);
        }
      }));
    }
  }]);

  return DateRangeInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DateRangeInput.defaultProps = {
  todayButtonText: 'Today',
  timePrecision: null,
  canClearSelection: true,
  shortcuts: true,
  singleMonthOnly: false,
  required: false
};
DateRangeInput.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether shortcuts to quickly select a range of dates are displayed or not. If true, preset shortcuts will be displayed. If false, no shortcuts will be displayed. If an array is provided, the custom shortcuts will be displayed.
   */
  shortcuts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether to show only a single month calendar.
   */
  singleMonthOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Selected start date
   */
  start_date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Selected end date
   */
  end_date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The selected date range
   */
  date_range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Initial day the calendar will display as selected. This should not be set if value is set.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The earliest date the user can select.
   */
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The latest date the user can select.
   */
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The precision of time selection that accompanies the calendar. Passing a TimePrecision value (or providing timePickerProps) shows a TimePicker below the calendar. Time is preserved across date changes.
    This is shorthand for timePickerProps.precision and is a quick way to enable time selection.
    Possible values are "minute"|"second"|"millisecond"
   */
  timePrecision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the today button in the action bar.
   */
  todayButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text for the reset button in the action bar.
   */
  clearButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Allows the user to clear the selection by clicking the currently selected day.
   */
  canClearSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

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
var _excluded = ["setProps", "children", "isOpen"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      isOpen = props.isOpen,
      dialogProps = _objectWithoutProperties(props, _excluded);

  var isDialogOpen;
  var setIsOpen;

  if (!setProps) {
    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(isOpen);

    var _React$useState2 = _slicedToArray(_React$useState, 2);

    isDialogOpen = _React$useState2[0];
    setIsOpen = _React$useState2[1];
  }

  console.log("rendering as " + isDialogOpen);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], _extends({}, dialogProps, {
    isOpen: setProps ? isOpen : isDialogOpen // onClose={React.useCallback(() => setIsOpen(false), [])}
    ,
    onClose: function onClose() {
      return setProps ? setProps({
        isOpen: false
      }) : setIsOpen(false);
    }
  }), children);
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

/***/ }),

/***/ "./src/lib/components/EditableText.react.js":
false,

/***/ "./src/lib/components/FormGroup.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/FormGroup.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _blueprintjs_icons_lib_esm_generated_iconNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/icons/lib/esm/generated/iconNames */ "./node_modules/@blueprintjs/icons/lib/esm/generated/iconNames.js");
var _excluded = ["children", "key", "setParentProps", "initParentState"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Form groups support more complex form controls than simple labels,
 * such as control groups or NumericInput.
 * They also support additional helper text to aid with user navigation.
 */

var FormGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(FormGroup, _React$Component);

  var _super = _createSuper(FormGroup);

  function FormGroup(props) {
    var _this;

    _classCallCheck(this, FormGroup);

    _this = _super.call(this, props);
    _this.handleChildChange = _this.handleChildChange.bind(_assertThisInitialized(_this));
    _this.formGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.initState = _this.initState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormGroup, [{
    key: "initState",
    value: function initState(key, data, valid) {
      var _this2 = this;

      console.log(data);
      this.setState(function (state) {
        if (state) {
          var _newChildData = _objectSpread(_objectSpread({}, state.value), {}, _defineProperty({}, key, data));

          var _newChildValidation = _objectSpread(_objectSpread({}, state.childValidation), {}, _defineProperty({}, key, valid));

          return {
            value: _objectSpread(_objectSpread({}, state.value), _newChildData),
            childValidation: _objectSpread(_objectSpread({}, state.childValidation), _newChildValidation)
          };
        }

        var newChildData = _defineProperty({}, key, data);

        var newChildValidation = _defineProperty({}, key, _objectSpread(_objectSpread({}, _this2.props.childValidation.key), data));

        return {
          value: newChildData,
          childValidation: newChildValidation
        };
      });
    }
    /**
     * For child components that are aware, this function can be used to update the
     * FormGroup with property changes. This means that we can just use the childData
     * property for the FormGroup for a callback rather than checking each nested component.
     *
     * Only dash-blueprint objects will be supported. This is very much untested.
     *
     * @param {string} key
     * @param {object} data
     */

  }, {
    key: "handleChildChange",
    value: function handleChildChange(key, data, valid) {
      var _this3 = this;

      // TODO Better way to check if the data is a simple object (string, number) or object.
      // For objects, we spread data with the current child data.
      // For simple values, we simply replace the data
      var _this$props = this.props,
          collapseChildData = _this$props.collapseChildData,
          setProps = _this$props.setProps,
          setParentProps = _this$props.setParentProps,
          value = _this$props.value,
          childValidation = _this$props.childValidation,
          required = _this$props.required;
      console.log(data, valid);
      var newChildData;
      var newChildValidation;

      if (collapseChildData) {
        newChildData = data;
        newChildValidation = valid;
      } else if (_typeof(data) === 'object' && data !== null && !Array.isArray(data)) {
        newChildData = _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, value.key), data)));
        newChildValidation = _objectSpread(_objectSpread({}, childValidation), {}, _defineProperty({}, key, valid));
      } else {
        newChildData = _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, key, data));
        newChildValidation = _objectSpread(_objectSpread({}, childValidation), {}, _defineProperty({}, key, valid));
      }

      var validForm = !required || Object.values(newChildValidation).every(Boolean);
      this.setState(function (state) {
        var newData;

        if (collapseChildData) {
          newData = {
            value: newChildData,
            childValidation: newChildValidation,
            valid: validForm
          };
        } else if (state) {
          // TODO Make this properly recursive, since there might be deeper nested data.
          newData = {
            value: _objectSpread(_objectSpread({}, state.value), newChildData),
            childValidation: _objectSpread(_objectSpread({}, state.childValidation), newChildValidation),
            valid: validForm
          };
        } else {
          newData = {
            value: newChildData,
            childValidation: newChildValidation,
            valid: validForm
          };
        } // TODO this.setState throws a warning if not using as a Dash component


        console.log(newData);
        setProps ? setProps(newData) : _this3.setState({
          value: newData.value
        });
        setParentProps && setParentProps(newData.value, validForm);
        return newData;
      });
    }
  }, {
    key: "insertSetParentProps",
    value: function insertSetParentProps() {
      var _this4 = this;

      /**
       * Hacky, but we need to add the setParentProps to any children so they can update
       * the parent state.
       */
      var childComponents = ['FormGroup', 'EditableText', 'NumericInput', 'Checkbox', 'CheckboxGroup', 'DateInput', 'DatePicker', 'DateRangeInput', 'DateRangePicker', 'InputGroup', 'ListGroup', 'MultiSelect', 'NumericInput', 'RadioGroup', 'Select', 'Slider', 'Switch'];
      var clonedChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child) {
        var dpl = child.props._dashprivate_layout; // Only add functions if the components explicitly can handle them (hackily hard-coded for now)

        if (dpl && dpl.namespace === 'dash_blueprint' && childComponents.includes(dpl.type)) {
          dpl.props.setParentProps = function (data, valid) {
            return _this4.handleChildChange(dpl.props.updateKey || dpl.props.id, data, valid);
          };

          dpl.props.initParentState = function (data, valid) {
            return _this4.initState(dpl.props.updateKey || dpl.props.id, data, valid);
          };
        } else {
          // Native react object, splice in the setParentProps prop
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
            setParentProps: function setParentProps(data, valid) {
              return _this4.handleChildChange(child.props.id, data, valid);
            },
            initParentState: function initParentState(data, valid) {
              return _this4.initState(child.props.id, data, valid);
            }
          });
        }

        return child;
      });
      return clonedChildren;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          key = _this$props2.key,
          setParentProps = _this$props2.setParentProps,
          initParentState = _this$props2.initParentState,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      var moddedChildren = this.insertSetParentProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], htmlProps, moddedChildren);
    }
  }]);

  return FormGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


FormGroup.defaultProps = {
  value: {},
  childValidation: {},
  collapseChildData: false,
  required: true
};
FormGroup.propTypes = {
  // TODO

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Label of this form group.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Collected values of all children of this form group.
   * This will usually be an object, unless `collapseChildData` is `true`,
   * in which case a single value will be passed in.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Collected values of all children of this form group.
   * This will usually be an object, unless `collapseChildData` is `true`,
   * in which case a single value will be passed in.
   */
  childValidation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A space-delimited list of class names to pass along to the Classes.FORM_CONTENT element that contains children.
   */
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether form group should appear as non-interactive. Remember that input elements must be disabled separately.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Optional helper text. The given content will be wrapped in Classes.FORM_HELPER_TEXT and displayed beneath children. Helper text color is determined by the intent.
   */
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether to render the label and children on a single line.
   */
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Visual intent color to apply to element.
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * id attribute of the labelable form element that this FormGroup controls, used as <label for> attribute.
   */
  labelFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Optional secondary text that appears after the label.
   */
  labelInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * CSS properties to apply to the root element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * If `true`, this component assumes there is only one child component that updates
   * data, and collapses `childData` from an object to a single value.
   * This can be useful when working with lots of form groups to avoid having
   * to extract single values from objects
   */
  collapseChildData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/HTMLTable.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/HTMLTable.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _Tr_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tr.react */ "./src/lib/components/Tr.react.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/renderPagination */ "./src/lib/utils/renderPagination.js");
/* harmony import */ var _utils_filterRows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/filterRows */ "./src/lib/utils/filterRows.js");
/* harmony import */ var _utils_renderHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/renderHeader */ "./src/lib/utils/renderHeader.js");
var _excluded = ["sort_column", "children", "displayLimit", "pageNumber", "setProps"],
    _excluded2 = ["selectable", "sort_column", "children", "displayLimit", "pageNumber", "setProps"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // import { Button } from "./Button.react";








var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * This component provides Blueprint styling to native HTML tables.
 *
 * It also includes additional functionality for searching, ordering and pagination of
 * data in the table.
 *
 * IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
 * want selection to show properly, and use css to modify rows with className 'selected'
 * @param props
 * @returns {*}
 * @constructor
 */


var HTMLTable = /*#__PURE__*/function (_React$Component) {
  _inherits(HTMLTable, _React$Component);

  var _super = _createSuper(HTMLTable);

  function HTMLTable(props) {
    var _this;

    _classCallCheck(this, HTMLTable);

    _this = _super.call(this, props);
    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.filterRows = _utils_filterRows__WEBPACK_IMPORTED_MODULE_7__["filterRows"].bind(_assertThisInitialized(_this));
    _this.renderPagination = _utils_renderPagination__WEBPACK_IMPORTED_MODULE_6__["renderPagination"].bind(_assertThisInitialized(_this));
    _this.renderSimpleMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_4__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
    _this.renderHeader = _utils_renderHeader__WEBPACK_IMPORTED_MODULE_8__["renderHeader"].bind(_assertThisInitialized(_this));
    _this.renderBody = _this.renderBody.bind(_assertThisInitialized(_this));
    _this.Trs = {}; // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0
    };
    return _this;
  }

  _createClass(HTMLTable, [{
    key: "renderBody",
    value: function renderBody() {
      var _this2 = this;

      var _this$props = _objectSpread({}, this.props),
          sort_column = _this$props.sort_column,
          children = _this$props.children,
          displayLimit = _this$props.displayLimit,
          pageNumber = _this$props.pageNumber,
          setProps = _this$props.setProps,
          tableProps = _objectWithoutProperties(_this$props, _excluded);

      var sortMultiplier = this.props.sort_direction === 'desc' ? -1 : 1;

      if (children.length > 1) {
        // // Add an on-click method to each row
        // children[children.length - 1].props._dashprivate_layout.props.children.map(row => {
        //     row.props.onClick = (event) => this.handleRowClick(row.props.key, event)
        // });
        // Apply the filter values to each row
        if (typeof sort_column === 'number') {
          children[children.length - 1].props._dashprivate_layout.props.children.sort(function (a, b) {
            var x = a.props.children[sort_column].props.children;
            var y = b.props.children[sort_column].props.children; // Go one level deep if this is still an object

            if (_typeof(x) === 'object') {
              x = x.props.children;
            }

            if (_typeof(y) === 'object') {
              y = y.props.children;
            }

            if (typeof x === 'string') {
              x = x.toLowerCase();
              y = y.toLowerCase();

              if (x < y) {
                return -1 * sortMultiplier;
              }

              if (x > y) {
                return 1 * sortMultiplier;
              }

              return 0;
            }

            if (typeof x === 'number') {
              return (x - y) * sortMultiplier;
            }
          });
        }
      }

      var filteredChildren = this.filterRows(children[children.length - 1].props._dashprivate_layout.props.children.slice(0), this.props.filter_strings);
      var orderedKeys = filteredChildren.map(function (child) {
        return child.props.rowKey;
      });

      children[children.length - 1].props._dashprivate_layout.props.children.map(function (row) {
        row.props.onClick = function (event) {
          return _this2.handleRowClick(row.props.rowKey, event, orderedKeys);
        };
      });

      var clonedTbody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children[children.length - 1], {
        _dashprivate_layout: _objectSpread(_objectSpread({}, children[children.length - 1].props._dashprivate_layout), {}, {
          props: _objectSpread(_objectSpread({}, children[children.length - 1].props._dashprivate_layout.props), {}, {
            children: filteredChildren.slice((this.props.current_page - 1) * this.props.page_size, this.props.current_page * this.props.page_size)
          })
        })
      });

      if (this.props.selectable) {
        // Map selection to active state
        clonedTbody.props._dashprivate_layout.props.children = clonedTbody.props._dashprivate_layout.props.children.map(function (child) {
          if (_this2.props.selection && _this2.props.selection.indexOf(child.props.rowKey) > -1) {
            child.props.selected = true;
            child.props.n_clicks = _this2.state.n_clicks;
            child.props.n_clicks = _this2.props.row_click;
          } else {
            child.props.selected = false;
            child.props.n_clicks = _this2.props.row_click;
          }

          child.props.ref = function (ref) {
            _this2.Trs[child.props.rowKey] = ref;
            return true;
          };

          return child;
        });
      }

      return {
        clonedTbody: clonedTbody,
        filteredChildren: filteredChildren
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$renderHeader = this.renderHeader(),
          filterHeader = _this$renderHeader.filterHeader,
          headerRow = _this$renderHeader.headerRow;

      var _this$renderBody = this.renderBody(),
          clonedTbody = _this$renderBody.clonedTbody,
          filteredChildren = _this$renderBody.filteredChildren;

      var _this$props2 = _objectSpread({}, this.props),
          selectable = _this$props2.selectable,
          sort_column = _this$props2.sort_column,
          children = _this$props2.children,
          displayLimit = _this$props2.displayLimit,
          pageNumber = _this$props2.pageNumber,
          setProps = _this$props2.setProps,
          tableProps = _objectWithoutProperties(_this$props2, _excluded2); // console.log(clonedTbody);


      var pagination;

      if (this.props.show_more_less) {
        pagination = this.renderSimpleMoreLessButtons(filteredChildren.length);
      } else {
        pagination = this.renderPagination(filteredChildren.length);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"], _extends({}, tableProps, {
        key: this.props.key || 'html-table'
      }), [children.slice(1, children.length - 1)].concat([headerRow, filterHeader, clonedTbody])), pagination);
    }
  }]);

  return HTMLTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


HTMLTable.defaultProps = {
  sort_direction: 'asc',
  filter_by: {},
  // TODO remove these defaults
  filter_columns: [],
  sort_columns: [],
  filter_strings: {},
  page_size: 10,
  current_page: 1,
  selection: [],
  show_more_size: 10,
  n_clicks: 0
};
HTMLTable.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Enables borders between rows and cells.
   */
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use small, condensed appearance.
   */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Enables hover styles on row.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use small, condensed appearance for this element and all child elements.
   */
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use an alternate background color on odd rows.
   */
  striped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Key for the clicked row
   */
  row_click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Column to sort values on
   */
  sort_column: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Sort direction (asc or desc)
   */
  sort_direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Filtering strings
   */
  filter_by: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Column numbers that may be filtered
   */
  filter_columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Columns that can be sorted on
   */
  sort_columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Strings to filter columns by
   */
  filter_strings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Page size (in rows)
   */
  page_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Current page to show
   */
  current_page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of rows to increase/decrease page size by
   * (for use in simple show more mode)
   */
  show_more_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Show simple more/less buttons to adjust page size
   */
  show_more_less: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether row selection is enabled
   */
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Currently selected rows
   */
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./src/lib/components/Hotkey.react.js":
false,

/***/ "./src/lib/components/InputGroup.react.js":
false,

/***/ "./src/lib/components/MultiSelect.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/MultiSelect.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/select */ "./node_modules/@blueprintjs/select/lib/esm/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/text */ "./src/lib/utils/text.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["setProps", "icon", "disabled", "minimal", "popoverProps", "tagMinimal"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var INTENTS = [_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].NONE, _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].PRIMARY, _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].SUCCESS, _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].DANGER, _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].WARNING];
/**
 * Use MultiSelect<T> for choosing multiple items in a list.
 * The component renders a TagInput wrapped in a Popover.
 */

var MultiSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  var _super = _createSuper(MultiSelect);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTagRemove", function (_tag, index) {
      _this.deselectItem(index);
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemSelect", function (item) {
      if (!_this.isItemSelected(item)) {
        _this.selectItem(item);
      } else {
        _this.deselectItem(_this.getSelectedItemIndex(item));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      if (_this.props.setProps) {
        _this.props.setProps({
          value: [],
          selectedItems: [],
          valid: !_this.props.required
        });
      } else {
        _this.setState({
          value: [],
          selectedItems: [],
          valid: !_this.props.required
        });
      }

      _this.props.setParentProps && _this.props.setParentProps([], !_this.props.required);
    });

    _defineProperty(_assertThisInitialized(_this), "renderTag", function (item) {
      return item.label;
    });

    _this.handleTagRemove = _this.handleTagRemove.bind(_assertThisInitialized(_this));
    _this.getSelectedItemIndex = _this.getSelectedItemIndex.bind(_assertThisInitialized(_this));
    _this.isItemSelected = _this.isItemSelected.bind(_assertThisInitialized(_this));
    _this.selectItem = _this.selectItem.bind(_assertThisInitialized(_this));
    _this.selectItems = _this.selectItems.bind(_assertThisInitialized(_this));
    _this.deselectItem = _this.deselectItem.bind(_assertThisInitialized(_this));
    _this.handleItemSelect = _this.handleItemSelect.bind(_assertThisInitialized(_this));
    _this.renderTag = _this.renderTag.bind(_assertThisInitialized(_this));
    _this.handleClear = _this.handleClear.bind(_assertThisInitialized(_this));
    var selectedItems = props.items.filter(function (item) {
      return props.value.includes(item.value);
    });
    var selectedValues = selectedItems.map(function (item) {
      return item.value;
    });
    var valid = !props.required || selectedItems.length > 0;
    props.setProps && props.setProps({
      value: selectedValues,
      selectedItems: selectedItems,
      valid: valid
    });
    console.log(props);
    props.setParentProps && props.setParentProps(props.value, valid);

    if (!props.setProps) {
      _this.state = {
        value: props.value,
        selectedItems: props.items.filter(function (item) {
          return props.value.includes(item.value);
        }),
        valid: !props.required || props.value.length > 0
      };
    }

    return _this;
  }

  _createClass(MultiSelect, [{
    key: "getSelectedItemIndex",
    value: function getSelectedItemIndex(item) {
      return this.props.setProps ? this.props.value.indexOf(item.value) : this.state.value.indexOf(item.value);
    }
  }, {
    key: "isItemSelected",
    value: function isItemSelected(item) {
      return this.getSelectedItemIndex(item) !== -1;
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.selectItems([item]);
    }
  }, {
    key: "selectItems",
    value: function selectItems(itemsToSelect) {
      var _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          selectedItems = _this$props.selectedItems,
          setProps = _this$props.setProps,
          setParentProps = _this$props.setParentProps,
          required = _this$props.required;

      if (setProps) {
        var newItemsToSelect = itemsToSelect.filter(function (item) {
          return !value.includes(item.value);
        });
        var newValues = value.concat(newItemsToSelect.map(function (_item) {
          return _item.value;
        }));
        var valid = !required || newValues.length > 0;
        setProps({
          value: newValues,
          selectedItems: selectedItems.concat(newItemsToSelect),
          valid: valid
        });
        setParentProps && setParentProps(newValues, valid);
      } else {
        var _newItemsToSelect = itemsToSelect.filter(function (item) {
          return !_this2.state.value.includes(item.value);
        });

        var _newValues = this.state.value.concat(_newItemsToSelect.map(function (_item) {
          return _item.value;
        }));

        var _valid = !required || _newValues.length > 0;

        this.setState({
          value: _newValues,
          selectedItems: this.state.selectedItems.concat(_newItemsToSelect),
          valid: _valid
        });
        setParentProps && setParentProps(_newValues, _valid);
      }
    }
  }, {
    key: "deselectItem",
    value: function deselectItem(index) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          selectedItems = _this$props2.selectedItems,
          setProps = _this$props2.setProps,
          setParentProps = _this$props2.setParentProps,
          required = _this$props2.required;

      if (setProps) {
        var newValues = value.filter(function (val, i) {
          return i !== index;
        });
        var valid = !required || newValues.length > 0;
        setProps({
          value: newValues,
          selectedItems: selectedItems.filter(function (val, i) {
            return i !== index;
          }),
          valid: valid
        });
        setParentProps && setParentProps(newValues, valid);
      } else {
        var _newValues2 = this.state.value.filter(function (val, i) {
          return i !== index;
        });

        var _valid2 = !required || _newValues2.length > 0;

        this.setState({
          value: _newValues2,
          selectedItems: this.state.selectedItems.filter(function (val, i) {
            return i !== index;
          }),
          valid: _valid2
        });
        setParentProps && setParentProps(_newValues2, _valid2);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          setProps = _this$props3.setProps,
          icon = _this$props3.icon,
          disabled = _this$props3.disabled,
          minimal = _this$props3.minimal,
          popoverProps = _this$props3.popoverProps,
          tagMinimal = _this$props3.tagMinimal,
          htmlProps = _objectWithoutProperties(_this$props3, _excluded);

      var value = setProps ? this.props.value : this.state.value;
      var selectedItems = setProps ? this.props.selectedItems : this.state.selectedItems;

      var getTagProps = function getTagProps(_value, index) {
        return {
          intent: _this3.state && _this3.state.intent ? INTENTS[index % INTENTS.length] : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Intent"].NONE,
          minimal: tagMinimal
        };
      };

      var clearButton = value.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: "cross",
        minimal: true,
        onClick: this.handleClear
      }) : undefined;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_select__WEBPACK_IMPORTED_MODULE_2__["MultiSelect"], _extends({
        itemPredicate: _utils_text__WEBPACK_IMPORTED_MODULE_4__["filterItemByQueryString"],
        itemRenderer: _utils_text__WEBPACK_IMPORTED_MODULE_4__["renderSelectItem"],
        onItemSelect: this.handleItemSelect,
        popoverProps: _objectSpread({
          minimal: minimal
        }, this.props.popoverProps)
      }, htmlProps, {
        tagRenderer: this.renderTag,
        tagInputProps: {
          tagProps: getTagProps,
          onRemove: this.handleTagRemove,
          rightElement: clearButton
        },
        selectedItems: selectedItems
      }));
    }
  }]);

  return MultiSelect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


MultiSelect.defaultProps = {
  disabled: false,
  filterable: true,
  minimal: true,
  value: [],
  selectedItems: [],
  placeholder: 'Search...',
  required: true
};
MultiSelect.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Items to choose from
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The selected item
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Class name
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the menu is disabled
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the list can be filtered
   */
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use minimal popover style
   */
  minimal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Button icon
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Additional props to define the popover behaviour
   */
  popoverProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Returns selected items
   */
  selectedItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Input placeholder text. Shorthand for tagInputProps.placeholder.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/NumericInput.react.js":
false,

/***/ "./src/lib/components/ProgressBar.react.js":
false,

/***/ "./src/lib/components/RadioGroup.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/RadioGroup.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _RadioGroup$propTypes;

var _excluded = ["options", "setProps", "value"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * A radio button typically represents a single option in a mutually exclusive list
 * (where only one item can be selected at a time).
 * Blueprint provides Radio and RadioGroup components for these two layers.
 */

var RadioGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.call(this, props);
    _this.handleRadioChange = _this.handleRadioChange.bind(_assertThisInitialized(_this));
    var valid = !props.required || !!props.value;
    props.setProps ? props.setProps({
      valid: !props.required || !!props.value
    }) : _this.state = {
      value: props.value,
      valid: valid
    };
    props.setParentProps && props.setParentProps(props.value, valid);
    props.validateParent && props.validateParent(valid);
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "handleRadioChange",
    value: function handleRadioChange(event) {
      var _this$props = this.props,
          required = _this$props.required,
          setProps = _this$props.setProps,
          setParentProps = _this$props.setParentProps,
          validateParent = _this$props.validateParent;
      setProps ? setProps({
        value: event.target.value,
        valid: true
      }) : this.setState({
        value: event.target.value,
        valid: true
      });
      setParentProps && setParentProps(event.target.value, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          setProps = _this$props2.setProps,
          value = _this$props2.value,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      var children = options.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], _extends({
          key: item.value
        }, item));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], _extends({}, htmlProps, {
        onChange: this.handleRadioChange,
        selectedValue: setProps ? this.props.value : this.state.value
      }), children);
    }
  }]);

  return RadioGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


RadioGroup.defaultProps = {
  required: false
};
RadioGroup.propTypes = (_RadioGroup$propTypes = {
  // TODO

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Label for the form group
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Label for the form group
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the radio buttons are to be displayed inline horizontally.
   */
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _defineProperty(_RadioGroup$propTypes, "label", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_RadioGroup$propTypes, "name", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_RadioGroup$propTypes, "options", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array), _defineProperty(_RadioGroup$propTypes, "value", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any), _defineProperty(_RadioGroup$propTypes, "required", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_RadioGroup$propTypes, "valid", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _RadioGroup$propTypes);

/***/ }),

/***/ "./src/lib/components/RangeSelector.react.js":
false,

/***/ "./src/lib/components/RawCollapse.react.js":
false,

/***/ "./src/lib/components/Select.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Select.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/select */ "./node_modules/@blueprintjs/select/lib/esm/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/text */ "./src/lib/utils/text.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["icon", "disabled", "minimal", "popoverProps"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Use `Select` for choosing one item from a list.
 */

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    var selectedItem = null;

    if (props.value) {
      selectedItem = props.items.find(function (item) {
        return item.value === props.value;
      });
    }

    var valid = !props.required || !!selectedItem;
    props.setProps && props.setProps({
      label: selectedItem && selectedItem.label,
      valid: valid
    });
    props.setParentProps && props.setParentProps(props.value, valid);

    if (!_this.setProps) {
      _this.state = {
        label: selectedItem && selectedItem.label,
        value: selectedItem && selectedItem.value,
        valid: valid
      };
    }

    return _this;
  }

  _createClass(Select, [{
    key: "handleChange",
    value: function handleChange(selected, event) {
      if (this.props.setProps) {
        this.props.setProps({
          value: selected.value,
          label: selected.label,
          valid: true
        });
      } else {
        this.setState({
          value: selected.value,
          label: selected.label,
          valid: true
        });
      } // Set value on parent if this property is provided


      console.log(this.props);
      this.props.setParentProps && this.props.setParentProps(selected.value, true);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedLabel = this.props.setParentProps || this.props.setProps ? this.props.label : this.state && this.state.value && this.state.label;

      var _this$props = this.props,
          icon = _this$props.icon,
          disabled = _this$props.disabled,
          minimal = _this$props.minimal,
          popoverProps = _this$props.popoverProps,
          htmlProps = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_select__WEBPACK_IMPORTED_MODULE_2__["Select"], _extends({
        itemPredicate: _utils_text__WEBPACK_IMPORTED_MODULE_4__["filterItemByQueryString"],
        itemRenderer: _utils_text__WEBPACK_IMPORTED_MODULE_4__["renderSelectItem"],
        onItemSelect: this.handleChange,
        popoverProps: _objectSpread({
          minimal: minimal
        }, this.props.popoverProps)
      }, htmlProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: icon,
        rightIcon: "caret-down",
        text: selectedLabel ? "".concat(selectedLabel) : '(none)',
        disabled: disabled
      }));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Select.defaultProps = {
  disabled: false,
  filterable: true,
  minimal: true,
  required: true
};
Select.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Items to choose from
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The selected item
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The selected item label
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Class name
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the menu is disabled
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the component should take up the full width of its container.
   * This overrides popoverProps.fill. You also have to ensure that the
   * child component has fill set to true or is styled appropriately.
   */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the list can be filtered
   */
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Use minimal popover style
   */
  minimal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Button icon
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Additional props to define the popover behaviour
   */
  popoverProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/Spinner.react.js":
false,

/***/ "./src/lib/components/Switch.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Switch.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["children", "setParentProps", "initParentState", "checked", "setProps", "updateKey"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  _inherits(Switch, _React$Component);

  var _super = _createSuper(Switch);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    props.setParentProps && props.setParentProps(props.checked, !props.required || props.checked !== null);
    props.setProps ? props.setProps({
      checked: !!props.checked,
      valid: !props.required || props.checked !== null
    }) : _this.state = props.checked;
    return _this;
  }

  _createClass(Switch, [{
    key: "handleChange",
    value: function handleChange() {
      var _this$props = this.props,
          required = _this$props.required,
          setProps = _this$props.setProps,
          setParentProps = _this$props.setParentProps;
      var checked = !(setProps ? this.props.checked : this.state.checked);
      var valid = !required || checked !== null;

      if (setProps) {
        setProps({
          checked: checked,
          valid: valid
        });
      } else {
        this.setState({
          checked: checked
        });
      }

      setParentProps && setParentProps(checked, valid);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          setParentProps = _this$props2.setParentProps,
          initParentState = _this$props2.initParentState,
          checked = _this$props2.checked,
          setProps = _this$props2.setProps,
          updateKey = _this$props2.updateKey,
          htmlProps = _objectWithoutProperties(_this$props2, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], _extends({
        checked: setProps ? checked : this.state.checked,
        onChange: this.handleChange
      }, htmlProps), this.props.children);
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Switch.defaultProps = {
  checked: false,
  required: false
};
Switch.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * key to use when updating parent component
   */
  updateKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the form that is the owner of the element.
   */
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the action of the element, overriding the action defined in the <form>.
   */
  formAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the type of the element.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a default value which will be displayed in the element on page load.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the language used in the element.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text to be displayed in a tooltip when hovering over the element.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Button intent (primary/success/warning/danger/none)
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Whether this input is required. Used in form validation
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determine whether the input is valid. Used in form validation
   */
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/Tag.react.js":
false,

/***/ "./src/lib/components/Tbody.react.js":
/*!*******************************************!*\
  !*** ./src/lib/components/Tbody.react.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["children", "selected", "setProps", "key"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * This is a reimplementation of html Tbody with an extra state that supports modifying the className
 * when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
 */

var Tbody = /*#__PURE__*/function (_React$Component) {
  _inherits(Tbody, _React$Component);

  var _super = _createSuper(Tbody);

  function Tbody() {
    _classCallCheck(this, Tbody);

    return _super.apply(this, arguments);
  }

  _createClass(Tbody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          selected = _this$props.selected,
          setProps = _this$props.setProps,
          key = _this$props.key,
          htmlProps = _objectWithoutProperties(_this$props, _excluded);
      /**
       * We need to wrangle the children objects here as the modification to the key
       * forces an update to that row so that we can actually modify the colour
       * of the selected row. This is needed as the selected row is not the only row
       * that needs to be updated.
       */


      var newChildren;

      if (children) {
        var childrenArray = Array.isArray(children) ? children : [children];
        newChildren = childrenArray.map(function (child) {
          return _objectSpread(_objectSpread({}, child), {}, {
            key: child.props._dashprivate_layout.props.selected ? child.props._dashprivate_layout.props.key + 's' : child.props._dashprivate_layout.props.key
          });
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", _extends({
        key: key || 'html-table-body'
      }, htmlProps), newChildren);
    }
  }]);

  return Tbody;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tbody.defaultProps = {
  className: ''
};
Tbody.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Key
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A proxy for key that can be passed through to the Tr component
   */
  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether row is selected
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Tbody);

/***/ }),

/***/ "./src/lib/components/Tr.react.js":
/*!****************************************!*\
  !*** ./src/lib/components/Tr.react.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["children", "selected", "rowKey", "key", "setProps", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * This is a reimplementation of html Tr with an extra state that supports modifying the className
 * when selected. This allows css styles to apply selectively to selected rows in a HTMLTable.
 */

var Tr = function Tr(props) {
  var children = props.children,
      selected = props.selected,
      rowKey = props.rowKey,
      key = props.key,
      setProps = props.setProps,
      className = props.className,
      htmlProps = _objectWithoutProperties(props, _excluded);

  var updatedClassName = (className || '') + (selected && ' selected');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", _extends({
    key: rowKey || key,
    className: updatedClassName
  }, htmlProps), children);
};

Tr.defaultProps = {
  className: ''
};
Tr.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Key
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A proxy for key that can be passed through to the Tr component
   */
  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Whether row is selected
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Tr);

/***/ }),

/***/ "./src/lib/components/core/Breadcrumbs.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/core/Breadcrumbs.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["items"],
    _excluded2 = ["text"];

var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Breadcrumbs identify the path to the current resource in an application.
 *
 * On click, a Dash Breadcrumb will update the URL to the href of the given crumb.
 * Items are expected to be an array with `href` and `text` entries, e.g.
 *
 * ```
 * [{
 *     text: "Foo",
 *     href: "/foo",
 *     icon: "folder"
 * }]
 * ```
 * as well as other `Breadcrumb` options:
 * - icon
 * - iconTitle
 * - intent
 */

var Breadcrumbs = function Breadcrumbs(props) {
  var items = props.items,
      breadcrumbsProps = _objectWithoutProperties(props, _excluded);

  items.map(function (item) {
    if (item.href && !item.onClick) {
      item.onClick = function (e) {
        return _this.onBreadcrumbClick(e, item.href);
      };
    }
  });

  var onBreacrumbClick = function onBreacrumbClick(e, href) {
    if (href && !e.metaKey) {
      // prevent anchor from updating location
      e.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
      window.scrollTo(0, 0);
    }
  };

  var renderBreadcrumb = function renderBreadcrumb(_ref) {
    var text = _ref.text,
        breadcrumbProps = _objectWithoutProperties(_ref, _excluded2);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], breadcrumbProps, text);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"], _extends({
    currentBreadcrumbRenderer: renderBreadcrumb,
    items: items
  }, breadcrumbsProps));
};

Breadcrumbs.defaultProps = {
  items: []
};
Breadcrumbs.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Which direction the breadcrumbs should collapse from: start or end.
   */
  collapseFrom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * All breadcrumbs to display. Breadcrumbs that do not fit in the container
   * will be rendered in an overflow menu instead.
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The minimum number of visible breadcrumbs that should never collapse into the
   * overflow menu, regardless of DOM dimensions.
   */
  minVisibleItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Props to spread to OverflowList. Note that items, overflowRenderer,
   * and visibleItemRenderer cannot be changed.
   */
  overflowListProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Props to spread to the Popover showing the overflow menu.
   */
  popoverProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./src/lib/components/core/Callout.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/core/Callout.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Callouts visually highlight important content for the user.
 * They can contain a title, an icon and content.
 * Each intent has a default icon associated with it.
 */

var Callout = function Callout(props) {
  var children = props.children,
      calloutProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Callout"], calloutProps, children);
};

Callout.defaultProps = {};
Callout.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of a Blueprint UI icon (or an icon element) to render on the left side.
   *
   * If this prop is omitted or undefined, the intent prop will determine a default icon.
   * If this prop is explicitly null, no icon will be displayed (regardless of intent).
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Visual intent color to apply to background, title, and icon.
   *
   * Defining this prop also applies a default icon, if the icon prop is omitted.
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * String content of optional title element.
   *
   * Due to a conflict with the HTML prop types, to provide JSX content simply
   * pass <H4>JSX title content</H4> as first children element instead of using this
   * prop (note uppercase tag name to use the Blueprint Heading component).
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Callout);

/***/ }),

/***/ "./src/lib/components/core/Card.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/core/Card.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["href", "refresh", "preserveSearchString", "setProps", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * A card is a bounded unit of UI content with a solid background color.
 */

var Card = function Card(props) {
  var href = props.href,
      refresh = props.refresh,
      preserveSearchString = props.preserveSearchString,
      setProps = props.setProps,
      children = props.children,
      cardProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({
    onClick: function onClick(e) {
      if (setProps) {
        setProps({
          n_clicks: props.n_clicks + 1,
          n_clicks_timestamp: Date.now()
        });
      }

      if (href) {
        // prevent anchor from updating location
        e.preventDefault();
        var newLocation = preserveSearchString ? href + window.location.search : href;

        if (refresh) {
          window.location.pathname = newLocation;
        } else {
          window.history.pushState({}, '', newLocation);
          window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
        } // scroll back to top


        window.scrollTo(0, 0);
      }
    }
  }, cardProps), children);
};

Card.defaultProps = {
  n_clicks: 0,
  n_clicks_timestamp: -1
};
Card.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_clicks changed. This can be used to tell
   * which button was changed most recently.
   */
  n_clicks_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.
  Recommended when onClick is also defined.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * window location to set on click
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/lib/components/core/CollapseCard.react.js":
/*!*******************************************************!*\
  !*** ./src/lib/components/core/CollapseCard.react.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["children", "controlled", "isOpen", "setProps", "selectCard"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var COLLAPSECARDDETAILS = 'CollapseDetails';
/**
 * A combination of Collapse and Card, this shows additional details when the card is clicked on.
 *
 * Note: because of the janky way we recreate the children, it currently does not show the
 * transition on Collapse open/close.
 */

var CollapseCard = function CollapseCard(props) {
  var children = props.children,
      controlled = props.controlled,
      isOpen = props.isOpen,
      setProps = props.setProps,
      selectCard = props.selectCard,
      cardProps = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenState = _useState2[0],
      setIsOpenState = _useState2[1];

  var handleShowHide = function handleShowHide(e) {
    e && e.stopPropagation();
    var openState = setProps && setProps({
      isOpen: !isOpen
    }) || setIsOpenState(!isOpenState);
    selectCard && selectCard();
  };
  /**
   * In order to modify the child objects generically (both as dash components and regular
   * react components), this function inspects each child object and applies the `isOpen`
   * property to those of type CollapseDetails
   */


  var collapseChildren = function collapseChildren(children, isOpen) {
    return children.map(function (child) {
      if (child.props._dashprivate_layout && child.props._dashprivate_layout.type === COLLAPSECARDDETAILS) {
        // Where we are modifying Dash components, find those that should be hidden
        // and apply the `isOpen` property
        child.props._dashprivate_layout.props = _objectSpread(_objectSpread({}, child.props._dashprivate_layout.props), {}, {
          isOpen: isOpen,
          key: isOpen ? 'collapse-open' : 'collapse-closed',
          className: isOpen ? 'collapse-open' : 'collapse-closed'
        });
        child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          key: isOpen ? 'collapse-open' : 'collapse-closed'
        });
        return child;
      } else if ( // Handle the case where we are using pure react components
      !child.props._dashprivate_layout && child.type && child.type.name === COLLAPSECARDDETAILS) {
        console.log(isOpenState, isOpen);
        var openState = controlled ? isOpenState : isOpen;
        child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          key: openState ? 'collapse-open' : 'collapse-closed',
          isOpen: openState
        });
        return child;
      }

      return child;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, cardProps, {
    onClick: handleShowHide
  }), collapseChildren(children, isOpen));
};

CollapseCard.defaultProps = {
  interactive: true
};
CollapseCard.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_clicks changed. This can be used to tell
   * which button was changed most recently.
   */
  n_clicks_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether collapsed content is shown
   */
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Used internally to manage whether the component is controlled externally
   */
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CollapseCard);

/***/ }),

/***/ "./src/lib/components/core/CollapseCardList.react.js":
/*!***********************************************************!*\
  !*** ./src/lib/components/core/CollapseCardList.react.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["children", "selected", "opened", "setProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * A component rendering a list of CollapseCard components. The parent list maintains
 * the open/close state of all CollapseCards, and so allows for updating without
 * destroying the state of the list.
 *
 * Note: to use this, the children object passed in must be a list of CollapseDetails components.
 */

var CollapseCardList = function CollapseCardList(props) {
  var children = props.children,
      selected = props.selected,
      opened = props.opened,
      setProps = props.setProps,
      cardListProps = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selected),
      _useState2 = _slicedToArray(_useState, 2),
      selectedState = _useState2[0],
      setSelectedState = _useState2[1];

  var _selectCard = function selectCard(key, isOpen) {
    console.log('selecting card');

    if (isOpen) {
      // It has been closed so should be removed
      setProps && setProps({
        selected: selected.filter(function (item) {
          return item !== key;
        })
      });
      setSelectedState(selectedState.filter(function (item) {
        return item !== key;
      }));
      setProps && setProps({
        opened: null
      });
    } else {
      setProps && setProps({
        selected: selected.concat([key])
      });
      setSelectedState(selectedState.concat([key]));
      setProps && setProps({
        opened: key
      });
    }
  };

  var wrangleChildren = function wrangleChildren(children, selected) {
    console.log(selected);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
      console.log(child);

      if (child.props._dashprivate_layout) {
        child.props._dashprivate_layout.props.selectCard = function (data) {
          return _selectCard(child.props._dashprivate_layout.props.key, child.props._dashprivate_layout.props.isOpen);
        };

        child.props._dashprivate_layout.props = _objectSpread(_objectSpread({}, child.props._dashprivate_layout.props), {}, {
          isOpen: selected.includes(child.props._dashprivate_layout.props.key)
        });
      } else {
        console.log('Cloning child');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          isOpen: selected.includes(child.key),
          selectCard: function selectCard(data) {
            return _selectCard(child.key, child.props.isOpen);
          }
        });
      }

      return child;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, wrangleChildren(children, setProps ? selected : selectedState));
}; // export default class CollapseCardList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.selectCard = this.selectCard.bind(this);
//     }
//     selectCard(key, isOpen) {
//         if (isOpen) {
//             // It has been closed so should be removed
//             this.props.setProps({
//                 selected: this.props.selected.filter((item) => item !== key),
//             });
//             this.props.setProps({opened: null});
//         } else {
//             this.props.setProps({selected: this.props.selected.concat([key])});
//             this.props.setProps({opened: key});
//         }
//     }
//     render() {
//         const clonedChildren = React.Children.map(
//             this.props.children,
//             (child) => {
//                 console.log(child);
//                 if (child.props._dashprivate_layout) {
//                     child.props._dashprivate_layout.props.selectCard = (data) =>
//                         this.selectCard(
//                             child.props._dashprivate_layout.props.key,
//                             child.props._dashprivate_layout.props.isOpen
//                         );
//                     child.props._dashprivate_layout.props = {
//                         ...child.props._dashprivate_layout.props,
//                         isOpen: this.props.selected.includes(
//                             child.props._dashprivate_layout.props.key
//                         ),
//                     };
//                 } else {
//                     console.log('Cloning child');
//                     return React.cloneElement(child, {
//                         isOpen: this.props.selected.includes(child.key),
//                     });
//                 }
//                 return child;
//             }
//         );
//         return <React.Fragment>{clonedChildren}</React.Fragment>;
//     }
// }


CollapseCardList.defaultProps = {
  selected: []
};
CollapseCardList.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_clicks changed. This can be used to tell
   * which button was changed most recently.
   */
  n_clicks_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the form that is the owner of the element.
   */
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the action of the element, overriding the action defined in the <form>.
   */
  formAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the type of the element.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a default value which will be displayed in the element on page load.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the language used in the element.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Controls the intensity of the drop shadow beneath the card: the higher the elevation, the higher the drop shadow. At elevation 0, no drop shadow is applied.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation and change the mouse cursor to a pointer.
  Recommended when onClick is also defined.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * window location to set on click
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The selected (and non-collapsed) card key
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The last opened card key
   */
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CollapseCardList);

/***/ }),

/***/ "./src/lib/components/core/CollapseDetails.react.js":
/*!**********************************************************!*\
  !*** ./src/lib/components/core/CollapseDetails.react.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["children", "isOpen"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * This component renders the collapsible portion of a CollapseCard. When not rendered
 * as a direct child of a CollapseCard, this component is useless as there is no way
 * to trigger it to open.
 */

var CollapseDetails = function CollapseDetails(props) {
  var children = props.children,
      isOpen = props.isOpen,
      collapseProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Collapse"], _extends({
    isOpen: isOpen
  }, collapseProps), children);
};

CollapseDetails.defaultProps = {
  minimal: true,
  transitionDuration: 200,
  keepChildrenMounted: false,
  isOpen: false
};
CollapseDetails.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Show a minimal button
   */
  minimal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Text to display for show button
   */
  showText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Icon to display for show button
   */
  showIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text to display for hide button
   */
  hideText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Icon to display for hide button
   */
  hideIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether content is shown initially
   */
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the child components will remain mounted when the Collapse is closed.
   * Setting to true may improve performance by avoiding re-mounting children.
   */
  keepChildrenMounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The length of time the transition takes, in milliseconds. This must match the duration of the animation in CSS.
   * Only set this prop if you override Blueprint's default transitions with new transitions of a different length.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CollapseDetails);

/***/ }),

/***/ "./src/lib/components/core/Hotkey.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/core/Hotkey.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Hotkeys enable you to create interactions based on user keyboard events.
 *
 * When a Hotkey is enabled, a hotkey interaction will trigger an n_presses and n_presses_timestamp
 * update
 */

var Hotkey = Object(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["HotkeysTarget"])(_class = /*#__PURE__*/function (_React$Component) {
  _inherits(Hotkey, _React$Component);

  var _super = _createSuper(Hotkey);

  function Hotkey() {
    _classCallCheck(this, Hotkey);

    return _super.apply(this, arguments);
  }

  _createClass(Hotkey, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, this.props.children);
    }
  }, {
    key: "fireEvent",
    value: function fireEvent() {
      var _this$props = this.props,
          setProps = _this$props.setProps,
          n_presses = _this$props.n_presses,
          label = _this$props.label;
      setProps && setProps({
        n_presses: n_presses + 1,
        n_presses_timestamp: Date.now(),
        hotkey: label
      });
    }
  }, {
    key: "renderHotkeys",
    value: function renderHotkeys() {
      var _this = this;

      var _this$props2 = this.props,
          globalTrigger = _this$props2.globalTrigger,
          combo = _this$props2.combo,
          label = _this$props2.label;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Hotkeys"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["Hotkey"], {
        global: globalTrigger,
        combo: combo,
        label: label,
        onKeyDown: function onKeyDown() {
          _this.fireEvent();
        }
      }));
    }
  }]);

  return Hotkey;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class;

Hotkey.defaultProps = {
  n_presses: 0,
  n_presses_timestamp: -1,
  label: 'hotkey',
  globalTrigger: true
};
Hotkey.propTypes = {
  // TODO

  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * An integer that represents the number of times
   * that this shortcut has been fired.
   */
  n_presses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.integer,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_presses changed. This can be used to tell
   * which event was fired most recently.
   */
  n_presses_timestamp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.integer,

  /**
   * Signifies the last hotkey that was pressed
   */
  hotkey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Hotkey combination string, such as "space" or "cmd+n".
   */
  combo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * If false, the hotkey is active only when the target is focused.
   * If true, the hotkey can be triggered regardless of what component is focused.
   */
  globalTrigger: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Label for component
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Hotkey);

/***/ }),

/***/ "./src/lib/components/core/ProgressBar.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/core/ProgressBar.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");

 // import { classNames } from "classnames";


/**
 * Progress bars indicate progress towards the completion of a task or an indeterminate loading state.
 * @param {*} props 
 */

var ProgressBar = function ProgressBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], props);
};

ProgressBar.defaultProps = {
  animate: true,
  stripes: true
};
ProgressBar.propTypes = {
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
   * Often used with CSS to style elements with common properties.
   */
  'className': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the background should animate.
   */
  animate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Visual intent color to apply to element.
   * "none"
      | "primary"
      | "success"
      | "warning"
      | "danger"
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the background should be striped.
   */
  stripes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/lib/components/core/Spinner.react.js":
/*!**************************************************!*\
  !*** ./src/lib/components/core/Spinner.react.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");



/**
 * Spinners indicate progress in a circular fashion. They're great for ongoing operations and can also represent known progress.
 * @param {*} props 
 */

var Spinner = function Spinner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], props);
};

Spinner.defaultProps = {};
Spinner.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  'id': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  'key': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  'role': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Visual intent color to apply to element.
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * numberSpinner.SIZE_STANDARD = 50
   * 
   * Width and height of the spinner in pixels. The size cannot be less than 10px.
   * 
   * Constants are available for common sizes:
   * Spinner.SIZE_SMALL = 20px
   * Spinner.SIZE_STANDARD = 50px
   * Spinner.SIZE_LARGE = 100px
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * HTML tag for the two wrapper elements. If rendering a <Spinner> inside an <svg>, change this to an SVG element like "g".
   */
  tagName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/lib/components/core/Tag.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/core/Tag.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Tags are great for lists of strings.
 * @param {*} props 
 */

var Tag = function Tag(props) {
  var children = props.children,
      htmlProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Tag"], htmlProps, children);
};

Tag.defaultProps = {};
Tag.propTypes = {
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
   * The ARIA role attribute
   */
  'role': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the tag should appear in an active state.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the tag should take up the full width of its container.
   */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Name of a Blueprint UI icon (or an icon element) to render before the children.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Visual intent color to apply to element.
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether this tag should use large styles.
   */
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether this tag should use minimal styles.
   */
  minimal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether tag content should be allowed to occupy multiple lines. If false, a single line of 
   * text will be truncated with an ellipsis if it overflows. Note that icons will 
   * be vertically centered relative to multiline text.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Name of a Blueprint UI icon (or an icon element) to render after the children.
   */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether this tag should have rounded ends.
   */
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./src/lib/components/hocs/Histogram.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/hocs/Histogram.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Histogram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _Tr_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tr.react */ "./src/lib/components/Tr.react.js");
/* harmony import */ var _blueprintjs_core_lib_esm_common_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core/lib/esm/common/classes */ "./node_modules/@blueprintjs/core/lib/esm/common/classes.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../css/histogram.css */ "./src/css/histogram.css");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_histogram_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["rows", "maxCount", "setProps", "showCount"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // import { Button } from "./Button.react";


 // import { HTMLTable } from '../../index';
// import { Button } from '../Button.react';





function renderHistogram(scaledValue, count) {
  // row.count > scalingConstant ? Intent.WARNING : Intent.SUCCESS
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-progress-bar bp3-intent-success bp3-no-animation bp3-no-stripes bp3-histogram" // style={{borderRadius: "0px", background: "none"}}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-progress-meter",
    style: {
      width: (scaledValue * 100).toPrecision(2) + "%",
      borderRadius: "0px"
    }
  }, count));
}
/**
 * This component provides Blueprint styling to native HTML tables.
 * 
 * It also includes additional functionality for searching, ordering and pagination of
 * data in the table.
 * 
 * IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
 * want selection to show properly, and use css to modify rows with className 'selected'
 * @param props
 * @returns {*}
 * @constructor
 */


var Histogram = /*#__PURE__*/function (_React$Component) {
  _inherits(Histogram, _React$Component);

  var _super = _createSuper(Histogram);

  function Histogram(props) {
    var _this;

    _classCallCheck(this, Histogram);

    _this = _super.call(this, props); // this.updateSelection = this.updateSelection.bind(this);

    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_5__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_6__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
    _this.filterRows = _this.filterRows.bind(_assertThisInitialized(_this)); // this.handleRowClick = this.handleRowClick.bind(this);
    // this.filterRows = this.filterRows.bind(this);
    // this.renderPagination = this.renderPagination.bind(this);
    // this.Trs = {};
    // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0,
      page_size: props.page_size
    };
    return _this;
  } // updateSelection(key, event, orderedKeys) {
  //     console.log(event);
  //     console.log(orderedKeys);
  //     console.log(key);
  //     console.log(this.state);
  //     event.preventDefault();
  //     const setProps = this.props.setProps ? this.props.setProps : this.setState;
  //     if (this.props.selectable || true) {
  //         setProps({
  //             selection: [key],
  //             row_click: key
  //         })
  //     }
  // }


  _createClass(Histogram, [{
    key: "filterRows",
    value: function filterRows() {
      var pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
      var filteredRows = this.props.rows.slice(0, pageSize - 1);
      console.log('filtered rows to length ' + pageSize);
      console.log(filteredRows);
      return filteredRows;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var _this$props = this.props,
          rows = _this$props.rows,
          maxCount = _this$props.maxCount,
          setProps = _this$props.setProps,
          showCount = _this$props.showCount,
          tableProps = _objectWithoutProperties(_this$props, _excluded);

      var scalingConstant = maxCount;

      if (!scalingConstant) {
        scalingConstant = Math.max.apply(Math, _toConsumableArray(rows.map(function (row) {
          return row.count;
        })));
      }

      ;
      console.log(rows.map(function (row) {
        return row.count;
      }));
      var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: "20%"
        }
      }, "Label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: "80%"
        }
      }, "Count"));
      console.log(scalingConstant);
      var orderedKeys = rows.map(function (row) {
        return row.key;
      });
      var rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
      var filteredRows = this.filterRows(rows);
      var body = filteredRows.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tr_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          selected: rowSelection.indexOf(row.key) > -1,
          key: row.key,
          onClick: function onClick(event) {
            return _this2.handleRowClick(row.key, event, orderedKeys);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: "label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          ellipsize: true
        }, row.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: "count"
        }, renderHistogram(row.count / scalingConstant, showCount ? row.count : null)));
      }); // return <div>{"test"}</div>;

      var pagination;

      if (this.props.show_more_less) {
        pagination = this.renderMoreLessButtons(rows.length);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"], {
        className: "histogram",
        style: {
          width: "100%"
        },
        interactive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body)), pagination);
    }
  }]);

  return Histogram;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Histogram.defaultProps = {
  // sort_direction: 'asc',
  // filter_by: {},
  // // TODO remove these defaults
  // filter_columns: [],
  // sort_columns: [],
  // filter_strings: {},
  page_size: 5,
  // current_page: 1,
  // selection: [],
  show_more_size: 10,
  // n_clicks: 0,
  rows: [],
  selectable: true,
  show_more_less: true,
  showCount: false
};
Histogram.propTypes = {
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
   * The ARIA role attribute
   */
  'role': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  'className': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Row data used to create the histogram
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Maximum count to be included in the histogram. Values above this number
   * will be rendered a different colour
   */
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Enables borders between rows and cells.
  //  */
  // bordered: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance.
  //  */
  // condensed: PropTypes.bool,
  // /**
  //  * Enables hover styles on row.
  //  */
  // interactive: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance for this element and all child elements.
  //  */
  // small: PropTypes.bool,
  // /**
  //  * Use an alternate background color on odd rows.
  //  */
  // striped: PropTypes.bool,

  /**
   * Key for the clicked row
   */
  row_click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // /**
  //  * Column to sort values on
  //  */
  // sort_column: PropTypes.number,
  // /**
  //  * Sort direction (asc or desc)
  //  */
  // sort_direction: PropTypes.string,
  // /**
  //  * Filtering strings
  //  */
  // filter_by: PropTypes.object,
  // /**
  //  * Column numbers that may be filtered
  //  */
  // filter_columns: PropTypes.array,
  // /**
  //  * Columns that can be sorted on
  //  */
  // sort_columns: PropTypes.array,
  // /**
  //  * Strings to filter columns by
  //  */
  // filter_strings: PropTypes.object,

  /**
   * Page size (in rows)
   */
  page_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Current page to show
  //  */
  // current_page: PropTypes.number,

  /**
   * Number of rows to increase/decrease page size by
   * (for use in simple show more mode)
   */
  show_more_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Show simple more/less buttons to adjust page size
   */
  show_more_less: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether row selection is enabled
   */
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Currently selected rows
   */
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  // n_clicks: PropTypes.number,

  /**
   * Show count on histogram bar
   */
  showCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/hocs/PropertyTable.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/hocs/PropertyTable.react.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _Tr_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tr.react */ "./src/lib/components/Tr.react.js");
/* harmony import */ var _Select_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Select.react */ "./src/lib/components/Select.react.js");
/* harmony import */ var _spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spark/Sparkline.react */ "./src/lib/components/spark/Sparkline.react.js");
/* harmony import */ var _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/handleRowClick */ "./src/lib/utils/handleRowClick.js");
/* harmony import */ var _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/renderMoreLessButtons */ "./src/lib/utils/renderMoreLessButtons.js");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../css/histogram.css */ "./src/css/histogram.css");
/* harmony import */ var _css_histogram_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_histogram_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["rows", "columns", "actions", "maxCount", "setProps", "actionButtonProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var KEY_COLUMN = 'id';

function _filterRows(rows, columns, filter, fuzzyMatch) {
  console.log(filter);
  var filterFunction = Object.entries(filter).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        idx = _ref2[0],
        value = _ref2[1];

    var column = columns.find(function (c) {
      return c.key == idx;
    });

    if (!value) {
      return function (entry) {
        return true;
      };
    }

    if (column.type == 'string' || Array.isArray(value)) {
      var stringArray = value.split(',').map(function (elem) {
        return elem.toLowerCase().trim();
      }).filter(function (elem) {
        return elem.length > 0;
      });
      return function (entry) {
        return stringArray.some(function (element) {
          // Exact match
          return getRowValue(entry, column.key) && getRowValue(entry, column.key).toString().toLowerCase() === element; // return getRowValue(entry, column.key) && getRowValue(entry, column.key).toString().toLowerCase().indexOf(element) >= 0
        });
      };
    } else if (column.type == 'number') {
      if (value.indexOf && value.indexOf('<=') === 0) {
        var a = Number(value.slice(2));
        return function (entry) {
          return getRowValue(entry, column.key) <= a;
        };
      } else if (value.indexOf && value.indexOf('<') === 0) {
        var _a = Number(value.slice(1));

        return function (entry) {
          return getRowValue(entry, column.key) < _a;
        };
      } else if (value.indexOf && value.indexOf('>=') === 0) {
        var _a2 = Number(value.slice(2));

        return function (entry) {
          return getRowValue(entry, column.key) >= _a2;
        };
      } else if (value.indexOf && value.indexOf('>') === 0) {
        var _a3 = Number(value.slice(1));

        return function (entry) {
          return getRowValue(entry, column.key) > _a3;
        };
      } else {
        // Compare numbers as strings exactly. Not bulletproof, but will do for now
        var _stringArray = value.toString().split(',').map(function (elem) {
          return elem.toLowerCase().trim();
        }).filter(function (elem) {
          return elem.length > 0;
        });

        return function (entry) {
          return _stringArray.some(function (element) {
            return getRowValue(entry, column.key) && getRowValue(entry, column.key).toString().toLowerCase() === element;
          });
        };
      }
    }
  });
  return rows.filter(function (row) {
    return Object.entries(filterFunction).every(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          idx = _ref4[0],
          value = _ref4[1];

      return value(row);
    });
  });
}

function renderFilterHeader(columns, rows, setProps, filter) {
  var filterCells = columns.map(function (column) {
    switch (column.filter) {
      case 'string':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
          value: filter ? filter[column.key] : '',
          onChange: function onChange(event) {
            return setProps({
              filter: _objectSpread(_objectSpread({}, filter), {}, _defineProperty({}, column.key, event.target.value))
            });
          }
        }));

      case 'select':
        var selectOptions = _toConsumableArray(new Set(rows.map(function (row) {
          return getRowValue(row, column.key);
        }))).filter(function (item) {
          return item !== undefined;
        }).map(function (item) {
          return {
            label: item,
            value: item
          };
        });

        console.log(selectOptions);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          items: selectOptions,
          popoverProps: {
            boundary: 'window',
            modifiers: {
              // arrow: { enabled: true },
              flip: {
                enabled: true
              } // keepTogether: { enabled: true },
              // preventOverflow: { enabled: true },

            }
          },
          fill: true,
          onChange: function onChange(event) {
            return console.log(event);
          },
          label: filter && filter[column.key],
          setParentProps: function setParentProps(value) {
            setProps({
              filter: _objectSpread(_objectSpread({}, filter), {}, _defineProperty({}, column.key, value))
            });
          },
          value: filter ? filter[column.key] : null
        }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null);
  });
  return filterCells;
}

function renderSparkline(data, columnProps) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    data: data
  }, columnProps));
}

function getRowValue(row, key) {
  // Preferentially retrieve from row.properties to handle geojson data
  return row.properties && row.properties[key] || row[key];
}

function renderRow(row, columns, actions, setProps, actionButtonProps) {
  return columns.map(function (column) {
    if (column.type == 'action') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
        icon: column.icon,
        onClick: function onClick(event) {
          event.stopPropagation(); // Stop the event contributing to selection change

          setProps(_defineProperty({}, column.action + 'Action', {
            row: row,
            time: new Date().getTime()
          }));
          setProps({
            action: {
              row: row,
              action: column.action,
              time: new Date().getTime()
            }
          });
        }
      }, actionButtonProps)));
    } else if (column.type == 'sparkline') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, renderSparkline(getRowValue(row, column.key), column.props));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ellipsize: true
    }, getRowValue(row, column.key)));
  });
}

function renderSort(column, setProps, sortBy, sortDirection) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: 'chevron-up',
    small: true,
    style: {
      cursor: 'default'
    },
    minimal: true,
    disabled: sortBy === column.key && sortDirection === 'asc',
    onClick: function onClick() {
      console.log('setting sort props');
      setProps({
        sortBy: column.key,
        sortDirection: 'asc'
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: 'chevron-down',
    small: true,
    style: {
      cursor: 'default'
    },
    minimal: true,
    disabled: sortBy === column.key && sortDirection === 'desc',
    onClick: function onClick() {
      console.log('setting sort props');
      setProps({
        sortBy: column.key,
        sortDirection: 'desc'
      });
    }
  }));
}
/**
 * This component provides Blueprint styling to native HTML tables.
 *
 * It also includes additional functionality for searching, ordering and pagination of
 * data in the table.
 *
 * IMPORTANT: When creating rows, you MUST use the BlueprintJS Tr component if you
 * want selection to show properly, and use css to modify rows with className 'selected'
 * @param props
 * @returns {*}
 * @constructor
 */


var PropertyTable = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyTable, _React$Component);

  var _super = _createSuper(PropertyTable);

  function PropertyTable(props) {
    var _this;

    _classCallCheck(this, PropertyTable);

    _this = _super.call(this, props); // this.updateSelection = this.updateSelection.bind(this);

    _this.handleRowClick = _utils_handleRowClick__WEBPACK_IMPORTED_MODULE_6__["handleRowClick"].bind(_assertThisInitialized(_this));
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.renderMoreLessButtons = _utils_renderMoreLessButtons__WEBPACK_IMPORTED_MODULE_7__["renderMoreLessButtons"].bind(_assertThisInitialized(_this));
    _this.filterRows = _this.filterRows.bind(_assertThisInitialized(_this));
    _this.sortRows = _this.sortRows.bind(_assertThisInitialized(_this));
    _this.renderHeader = _this.renderHeader.bind(_assertThisInitialized(_this));
    _this.truncateRows = _this.truncateRows.bind(_assertThisInitialized(_this)); // this.handleRowClick = this.handleRowClick.bind(this);
    // this.filterRows = this.filterRows.bind(this);
    // this.renderPagination = this.renderPagination.bind(this);
    // this.Trs = {};
    // this.setState({n_clicks: 0});

    _this.state = {
      n_clicks: 0,
      page_size: props.page_size
    };
    return _this;
  }

  _createClass(PropertyTable, [{
    key: "renderHeader",
    value: function renderHeader(columns, actions) {
      // return columns.map((column) => {<th >{"header"}</th>});
      // return columns.map((column) => {<td >{column.key}</td>});
      var _ref5 = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref6 = _slicedToArray(_ref5, 2),
          sortBy = _ref6[0],
          sortDirection = _ref6[1];

      var setProps = this.props.setProps || this.setState;
      var headerCells = columns.map(function (column) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, column.sort !== false && column.type !== 'sparkline' && column.type !== 'action' ? renderSort(column, setProps, sortBy, sortDirection) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          ellipsize: true,
          tagName: 'span'
        }, column.label)));
      });
      return headerCells;
    }
  }, {
    key: "sortRows",
    value: function sortRows(filteredRows) {
      var _ref7 = this.props.setProps ? [this.props.sortBy, this.props.sortDirection] : [this.state.sortBy, this.state.sortDirection],
          _ref8 = _slicedToArray(_ref7, 2),
          sortBy = _ref8[0],
          sortDirection = _ref8[1]; // console.log('checking sort');
      // console.log(sortBy, sortDirection);


      if (sortBy) {
        // return filteredRows.sort(sort_by('sortBy', sortDirection === "asc"));
        if (sortDirection == 'asc') {
          return filteredRows.sort(function (a, b) {
            return (a[sortBy] > b[sortBy]) - (b[sortBy] > a[sortBy]);
          });
        } else {
          return filteredRows.sort(function (a, b) {
            return (b[sortBy] > a[sortBy]) - (a[sortBy] > b[sortBy]);
          });
        }
      }

      return filteredRows;
    }
  }, {
    key: "truncateRows",
    value: function truncateRows(filteredRows) {
      var pageSize = this.props.setProps ? this.props.page_size : this.state.page_size;
      return filteredRows.slice(0, pageSize);
    }
  }, {
    key: "filterRows",
    value: function filterRows() {
      var filteredRows = this.props.rows;
      var filter = this.props.filter || this.state.filter;

      if (filter) {
        filteredRows = _filterRows(filteredRows, this.props.columns, filter);
      }

      return filteredRows;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rows = _this$props.rows,
          columns = _this$props.columns,
          actions = _this$props.actions,
          maxCount = _this$props.maxCount,
          setProps = _this$props.setProps,
          actionButtonProps = _this$props.actionButtonProps,
          tableProps = _objectWithoutProperties(_this$props, _excluded);

      var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, this.renderHeader(columns, actions));
      var filterHeader;

      if (columns.find(function (column) {
        return column.filter;
      })) {
        filterHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, renderFilterHeader(columns, rows, setProps ? setProps : this.setState, setProps ? this.props.filter : this.state.filter));
      }

      console.log(this.renderHeader(columns, actions));
      console.log(columns);
      var rowSelection = (this.props.setProps ? this.props.selection : this.state.selection) || [];
      var filteredRows = this.filterRows(rows);
      var sortedRows = this.sortRows(filteredRows);
      var keyColumn = 'id';
      var orderedKeys = sortedRows.map(function (row) {
        return row[keyColumn];
      });
      var truncateRows = this.truncateRows(sortedRows);
      var body = truncateRows.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tr_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          selected: rowSelection.indexOf(row[keyColumn]) > -1,
          key: row[keyColumn],
          onClick: function onClick(event) {
            return _this2.handleRowClick(row[keyColumn], event, orderedKeys);
          }
        }, renderRow(row, columns, actions, setProps ? setProps : _this2.setState, actionButtonProps));
      });
      var pagination;

      if (this.props.show_more_less) {
        pagination = this.renderMoreLessButtons(sortedRows.length);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["HTMLTable"], {
        className: "histogram",
        interactive: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, [header, filterHeader]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body)), pagination);
    }
  }]);

  return PropertyTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


PropertyTable.defaultProps = {
  // sort_direction: 'asc',
  // filter_by: {},
  // // TODO remove these defaults
  // filter_columns: [],
  // sort_columns: [],
  // filter_strings: {},
  fuzzyMatch: true,
  page_size: 10,
  // current_page: 1,
  // selection: [],
  show_more_size: 10,
  // n_clicks: 0,
  rows: [],
  selectable: true,
  show_more_less: true,
  actionButtonProps: {
    minimal: true,
    small: true
  }
};
PropertyTable.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Row data used to create the histogram
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Maximum count to be included in the histogram. Values above this number
   * will be rendered a different colour
   */
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Enables borders between rows and cells.
  //  */
  // bordered: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance.
  //  */
  // condensed: PropTypes.bool,
  // /**
  //  * Enables hover styles on row.
  //  */
  // interactive: PropTypes.bool,
  // /**
  //  * Use small, condensed appearance for this element and all child elements.
  //  */
  // small: PropTypes.bool,
  // /**
  //  * Use an alternate background color on odd rows.
  //  */
  // striped: PropTypes.bool,

  /**
   * Key for the clicked row
   */
  row_click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // /**
  //  * Column to sort values on
  //  */
  // sort_column: PropTypes.number,
  // /**
  //  * Sort direction (asc or desc)
  //  */
  // sort_direction: PropTypes.string,
  // /**
  //  * Filtering strings
  //  */
  // filter_by: PropTypes.object,
  // /**
  //  * Column numbers that may be filtered
  //  */
  // filter_columns: PropTypes.array,
  // /**
  //  * Columns that can be sorted on
  //  */
  // sort_columns: PropTypes.array,
  // /**
  //  * Strings to filter columns by
  //  */
  // filter_strings: PropTypes.object,

  /**
   * Page size (in rows)
   */
  page_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // /**
  //  * Current page to show
  //  */
  // current_page: PropTypes.number,

  /**
   * Number of rows to increase/decrease page size by
   * (for use in simple show more mode)
   */
  show_more_size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Show simple more/less buttons to adjust page size
   */
  show_more_less: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether row selection is enabled
   */
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Currently selected rows
   */
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * An array of properties to display in the table
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * A set of actions to display in the first column
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  // n_clicks: PropTypes.number,

  /**
   * Props to pass through to the action button
   */
  actionButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Row selected for locate action
   */
  locateAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Row clicked for info action
   */
  infoAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Generic action not covered by previous options
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Whether to match single string objects against parts of words
   */
  fuzzyMatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/lib/components/input/EditableText.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/input/EditableText.react.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _excluded = ["children", "setProps", "setParentProps", "value"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * EditableText appears as normal UI text but transforms into a text input field when the user focuses it.
 *
 * The text input inherits all font styling from its ancestors, making for a seamless transition
 *  between reading and editing text.
 *
 * You might use this component for inline renaming, or for an editable multiline description.
 * You should not use EditableText when a static always-editable <input> or <textarea> tag would suffice.
 */

var EditableText = function EditableText(props) {
  var children = props.children,
      setProps = props.setProps,
      setParentProps = props.setParentProps,
      value = props.value,
      textProps = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      valueState = _useState2[0],
      setValueState = _useState2[1];

  var handleChange = function handleChange(value) {
    setProps ? setProps({
      value: value
    }) : setValueState(value);
    setParentProps && setParentProps(value);
  };

  var handleConfirmValue = function handleConfirmValue(value) {
    setProps ? setProps({
      confirmedValue: value
    }) : null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["EditableText"], _extends({
    onChange: handleChange,
    onConfirm: handleConfirmValue,
    value: setProps ? value : valueState
  }, textProps));
};

EditableText.defaultProps = {
  confirmOnEnterKey: false,
  disabled: false,
  minLines: 1,
  multiline: false,
  placeholder: 'Click to Edit',
  selectAllOnFocus: false
};
EditableText.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * If true and in multiline mode, the enter key will trigger onConfirm and mod+enter will insert a newline. If false, the key bindings are inverted such that enter adds a newline.
   */
  confirmOnEnterKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Default text value of uncontrolled input.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the text can be edited.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Visual intent color to apply to element.
   * = "none" | "primary" | "success" | "warning" | "danger"
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the component is currently being edited.
   */
  isEditing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Maximum number of characters allowed. Unlimited by default.
   */
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Maximum number of lines before scrolling begins, when multiline.
   */
  maxLines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Minimum number of lines (essentially minimum height), when multiline.
   */
  minLines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Minimum width in pixels of the input, when not multiline.
   */
  minWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Whether the component supports multiple lines of text. This prop should not be changed during the component's lifetime.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Placeholder text when there is no value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * hether the entire text field should be selected on focus. If false, the cursor is placed at the end of the text. This prop is ignored on inputs with type other then text, search, url, tel and password. See https://html.spec.whatwg.org/multipage/input.html#do-not-apply for details.
   */
  selectAllOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The type of input that should be shown, when not multiline.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text value of controlled input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The text value when input has been confirmed.
   */
  confirmedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (EditableText);

/***/ }),

/***/ "./src/lib/components/input/InputGroup.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/input/InputGroup.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _InputGroup$propTypes;

var _excluded = ["setProps", "setParentProps", "value", "required", "valid"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * An input group allows you to add icons and buttons within a text input to expand its functionality.
 * For example, you might use an input group to build a visibility toggle for a password field.
 *
 * Note: this implementation only allows for icons to be used, and provides no interactive
 * functionality
 */

var InputGroup = function InputGroup(props) {
  var setProps = props.setProps,
      setParentProps = props.setParentProps,
      value = props.value,
      required = props.required,
      valid = props.valid,
      inputGroupProps = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      valueState = _useState2[0],
      setValueState = _useState2[1];

  var handleChange = function handleChange(event) {
    console.log(event);
    console.log(event.target.value);
    var isValid = !required || !!(event.target.value && event.target.value.length > 0);
    setProps ? setProps({
      value: event.target.value,
      valid: isValid
    }) : setValueState(event.target.value);
    setParentProps && setParentProps(event.target.value, isValid);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isValid = !required || !!(value && value.length > 0);
    setProps && setProps({
      valid: isValid
    });
    setParentProps && setParentProps(value, isValid);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], _extends({
    onChange: handleChange,
    value: setProps ? value : valueState
  }, inputGroupProps));
};

InputGroup.defaultProps = {
  value: '' // Must take an initial value to be a controlled input

};
InputGroup.propTypes = (_InputGroup$propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the form that is the owner of the element.
   */
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the action of the element, overriding the action defined in the <form>.
   */
  formAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the type of the element.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a default value which will be displayed in the element on page load.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the language used in the element.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text to be displayed in a tooltip when hovering over the element.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Button intent (primary/success/warning/danger/none)
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}, _defineProperty(_InputGroup$propTypes, "disabled", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "fill", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "intent", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_InputGroup$propTypes, "large", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "leftIcon", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_InputGroup$propTypes, "placeholder", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_InputGroup$propTypes, "round", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "small", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "type", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_InputGroup$propTypes, "value", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_InputGroup$propTypes, "required", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_InputGroup$propTypes, "valid", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _InputGroup$propTypes);
/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./src/lib/components/input/NumericInput.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/input/NumericInput.react.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _NumericInput$propTyp;

var _excluded = ["setProps", "setParentProps", "value", "stringValue", "required", "valid"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * The NumericInput component provides controls for easily inputting, incrementing, and decrementing numeric values.
 */

var NumericInput = function NumericInput(props) {
  var setProps = props.setProps,
      setParentProps = props.setParentProps,
      value = props.value,
      stringValue = props.stringValue,
      required = props.required,
      valid = props.valid,
      inputProps = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      valueState = _useState2[0],
      setValueState = _useState2[1];

  var isValid = function isValid(val) {
    return !required || !isNaN(val);
  };

  var handleChange = function handleChange(value, stringValue) {
    var isValid = !required || !isNaN(value);

    if (!isNaN(value)) {
      setProps ? setProps({
        value: value,
        stringValue: stringValue,
        valid: isValid
      }) : setValueState(value);
      setParentProps && setParentProps(value, isValid);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isValid = !required || !isNaN(value);
    setProps && setProps({
      valid: isValid
    });
    setParentProps && setParentProps(value, isValid);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__["NumericInput"], _extends({
    onValueChange: handleChange,
    value: stringValue || value
  }, inputProps));
};

NumericInput.defaultProps = {
  required: false
};
NumericInput.propTypes = (_NumericInput$propTyp = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ARIA role attribute
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard data attribute
   */
  'data-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A wildcard aria attribute
   */
  'aria-*': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the form that is the owner of the element.
   */
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates the action of the element, overriding the action defined in the <form>.
   */
  formAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the type of the element.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a default value which will be displayed in the element on page load.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines the language used in the element.
   */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Text to be displayed in a tooltip when hovering over the element.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Button intent (primary/success/warning/danger/none)
   */
  intent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A callback for firing events to dash.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Whether to allow only floating-point number characters in the field, mimicking the native input[type="number"].
   */
  allowNumericCharactersOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * "left" | "right" | "none"Position.RIGHT
   * The position of the buttons with respect to the input field.
   */
  buttonPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the value should be clamped to [min, max] on blur. The value will be clamped to each bound only if the bound is defined. Note that native input[type="number"] controls do NOT clamp on blur.
   */
  clampValueOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the input is non-interactive. Note that rightElement must be disabled separately; this prop will not affect it.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether the numeric input should take up the full width of its container.
   */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _defineProperty(_NumericInput$propTyp, "intent", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_NumericInput$propTyp, "large", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_NumericInput$propTyp, "leftIcon", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_NumericInput$propTyp, "shiftSize", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "max", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "min", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "minorStepSize", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "placeholder", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_NumericInput$propTyp, "selectAllOnFocus", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_NumericInput$propTyp, "selectAllOnIncrement", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_NumericInput$propTyp, "stepSize", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "value", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number), _defineProperty(_NumericInput$propTyp, "stringValue", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string), _defineProperty(_NumericInput$propTyp, "required", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _defineProperty(_NumericInput$propTyp, "valid", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool), _NumericInput$propTyp);
/* harmony default export */ __webpack_exports__["default"] = (NumericInput);

/***/ }),

/***/ "./src/lib/components/spark/Sparkline.react.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/spark/Sparkline.react.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/sparkline/lib/series/BarSeries */ "./node_modules/@data-ui/sparkline/lib/series/BarSeries.js");
/* harmony import */ var _data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4__);



 // open-color colors


/**
 * @param props
 * @returns {*}
 * @constructor
 */

var Sparkline = function Sparkline(props) {
  var margin = props.margin,
      width = props.width,
      height = props.height,
      ariaLabel = props.ariaLabel,
      data = props.data,
      lineSeries = props.lineSeries,
      barSeries = props.barSeries; // const data = Array(25).fill().map(Math.random);

  var children = [];

  if (lineSeries) {
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__["LineSeries"], lineSeries));
  }

  if (barSeries) {
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline_lib_series_BarSeries__WEBPACK_IMPORTED_MODULE_4___default.a, barSeries));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_2__["Sparkline"], {
    ariaLabel: ariaLabel,
    margin: margin,
    width: width,
    height: height,
    data: data,
    valueAccessor: function valueAccessor(datum) {
      return datum;
    } //   style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}

  }, children);
};

Sparkline.defaultProps = {
  margin: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  width: 100,
  height: 20,
  ariaLabel: ""
};
Sparkline.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  'id': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  'key': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Aria label
   */
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Data to display in the sparkline
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Width of the svg including left/right margin
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * chart margin, leave room for labels! note 0 may clip LineSeries and PointSeries. a partial { top/right/bottom/ left } object is filled with the other default values
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),

  /**
   * Optionally set the maximum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Optionally set the minimum y-value of the chart (e.g., to coordinate axes across multiple Sparklines)
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Properties to pass through for a LineSeries object
   */
  lineSeries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    curve: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['linear', 'cardinal', 'basis', 'monotoneX']),
    showArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    showLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['butt', 'square', 'round', 'inherit']),
    strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),

  /**
   * Properties to pass through for a BarSeries object
   */
  barSeries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sparkline);

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: Breadcrumbs, Button, ButtonGroup, ToggleButtonGroup, Callout, Collapse, Card, CollapseCard, CollapseCardList, CollapseDetails, Menu, MenuItem, MenuDivider, NumericInput, InputGroup, Tooltip, Icon, Spinner, ResizeSensor, Toaster, FormGroup, Checkbox, CheckboxGroup, RadioGroup, Switch, Slider, ListGroup, Tree, Tabs, Tab, ProgressBar, EditableText, Divider, Navbar, NavbarDivider, NavbarGroup, NavbarHeading, HTMLTable, Tr, Tbody, Link, Hotkey, Popover, Drawer, NonIdealState, H1, H2, H3, H4, H5, H6, Text, Tag, DatePicker, DateInput, DateRangePicker, DateRangeInput, Omnibar, OmnibarAsync, Select, MultiSelect, Histogram, PropertyTable, Dialog, Sparkline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_core_Breadcrumbs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/core/Breadcrumbs.react */ "./src/lib/components/core/Breadcrumbs.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _components_core_Breadcrumbs_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Button_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Button.react */ "./src/lib/components/Button.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_ButtonGroup_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ButtonGroup.react */ "./src/lib/components/ButtonGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _components_ButtonGroup_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_ToggleButtonGroup_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ToggleButtonGroup.react */ "./src/lib/components/ToggleButtonGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return _components_ToggleButtonGroup_react__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_core_Callout_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/core/Callout.react */ "./src/lib/components/core/Callout.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _components_core_Callout_react__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Collapse_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Collapse.react */ "./src/lib/components/Collapse.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _components_Collapse_react__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_core_Card_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/core/Card.react */ "./src/lib/components/core/Card.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _components_core_Card_react__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_core_CollapseCard_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/core/CollapseCard.react */ "./src/lib/components/core/CollapseCard.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseCard", function() { return _components_core_CollapseCard_react__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_core_CollapseDetails_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/core/CollapseDetails.react */ "./src/lib/components/core/CollapseDetails.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDetails", function() { return _components_core_CollapseDetails_react__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_core_CollapseCardList_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/core/CollapseCardList.react */ "./src/lib/components/core/CollapseCardList.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseCardList", function() { return _components_core_CollapseCardList_react__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_core_Hotkey_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/core/Hotkey.react */ "./src/lib/components/core/Hotkey.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hotkey", function() { return _components_core_Hotkey_react__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_core_ProgressBar_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/core/ProgressBar.react */ "./src/lib/components/core/ProgressBar.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _components_core_ProgressBar_react__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_core_Spinner_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/core/Spinner.react */ "./src/lib/components/core/Spinner.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _components_core_Spinner_react__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_core_Tag_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/core/Tag.react */ "./src/lib/components/core/Tag.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _components_core_Tag_react__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_input_NumericInput_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/input/NumericInput.react */ "./src/lib/components/input/NumericInput.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _components_input_NumericInput_react__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_NonIdealState_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/NonIdealState.react */ "./src/lib/components/NonIdealState.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonIdealState", function() { return _components_NonIdealState_react__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_Tooltip_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Tooltip.react */ "./src/lib/components/Tooltip.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _components_Tooltip_react__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_Icon_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Icon.react */ "./src/lib/components/Icon.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _components_Icon_react__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_Menu_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Menu.react */ "./src/lib/components/Menu.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _components_Menu_react__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _components_MenuItem_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/MenuItem.react */ "./src/lib/components/MenuItem.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _components_MenuItem_react__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _components_MenuDivider_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/MenuDivider.react */ "./src/lib/components/MenuDivider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuDivider", function() { return _components_MenuDivider_react__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _components_ResizeSensor_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ResizeSensor.react */ "./src/lib/components/ResizeSensor.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeSensor", function() { return _components_ResizeSensor_react__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _components_Toaster_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Toaster.react */ "./src/lib/components/Toaster.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return _components_Toaster_react__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _components_DatePicker_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/DatePicker.react */ "./src/lib/components/DatePicker.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _components_DatePicker_react__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _components_DateRangePicker_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/DateRangePicker.react */ "./src/lib/components/DateRangePicker.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangePicker", function() { return _components_DateRangePicker_react__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _components_DateInput_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/DateInput.react */ "./src/lib/components/DateInput.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _components_DateInput_react__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _components_DateRangeInput_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/DateRangeInput.react */ "./src/lib/components/DateRangeInput.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeInput", function() { return _components_DateRangeInput_react__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _components_Omnibar_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Omnibar.react */ "./src/lib/components/Omnibar.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Omnibar", function() { return _components_Omnibar_react__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _components_OmnibarAsync_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/OmnibarAsync.react */ "./src/lib/components/OmnibarAsync.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OmnibarAsync", function() { return _components_OmnibarAsync_react__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _components_FormGroup_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/FormGroup.react */ "./src/lib/components/FormGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _components_FormGroup_react__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _components_CheckboxGroup_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/CheckboxGroup.react */ "./src/lib/components/CheckboxGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _components_CheckboxGroup_react__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _components_ListGroup_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ListGroup.react */ "./src/lib/components/ListGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return _components_ListGroup_react__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _components_RadioGroup_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/RadioGroup.react */ "./src/lib/components/RadioGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _components_RadioGroup_react__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _components_Checkbox_react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/Checkbox.react */ "./src/lib/components/Checkbox.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_Checkbox_react__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _components_Switch_react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/Switch.react */ "./src/lib/components/Switch.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _components_Switch_react__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _components_Slider_react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/Slider.react */ "./src/lib/components/Slider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _components_Slider_react__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _components_input_EditableText_react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/input/EditableText.react */ "./src/lib/components/input/EditableText.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return _components_input_EditableText_react__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _components_Tree_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/Tree.react */ "./src/lib/components/Tree.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return _components_Tree_react__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _components_Tabs_react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/Tabs.react */ "./src/lib/components/Tabs.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _components_Tabs_react__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _components_Tab_react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/Tab.react */ "./src/lib/components/Tab.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _components_Tab_react__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _components_H1_react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/H1.react */ "./src/lib/components/H1.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _components_H1_react__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _components_H2_react__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/H2.react */ "./src/lib/components/H2.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _components_H2_react__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _components_H3_react__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/H3.react */ "./src/lib/components/H3.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _components_H3_react__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _components_H4_react__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/H4.react */ "./src/lib/components/H4.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _components_H4_react__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _components_H5_react__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/H5.react */ "./src/lib/components/H5.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return _components_H5_react__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _components_H6_react__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/H6.react */ "./src/lib/components/H6.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return _components_H6_react__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _components_Text_react__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/Text.react */ "./src/lib/components/Text.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components_Text_react__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _components_Divider_react__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/Divider.react */ "./src/lib/components/Divider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _components_Divider_react__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _components_Navbar_react__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/Navbar.react */ "./src/lib/components/Navbar.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _components_Navbar_react__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _components_NavbarDivider_react__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/NavbarDivider.react */ "./src/lib/components/NavbarDivider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarDivider", function() { return _components_NavbarDivider_react__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _components_NavbarGroup_react__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/NavbarGroup.react */ "./src/lib/components/NavbarGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarGroup", function() { return _components_NavbarGroup_react__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _components_NavbarHeading_react__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/NavbarHeading.react */ "./src/lib/components/NavbarHeading.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarHeading", function() { return _components_NavbarHeading_react__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _components_Select_react__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/Select.react */ "./src/lib/components/Select.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_Select_react__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _components_MultiSelect_react__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/MultiSelect.react */ "./src/lib/components/MultiSelect.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return _components_MultiSelect_react__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _components_input_InputGroup_react__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/input/InputGroup.react */ "./src/lib/components/input/InputGroup.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _components_input_InputGroup_react__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _components_HTMLTable_react__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/HTMLTable.react */ "./src/lib/components/HTMLTable.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLTable", function() { return _components_HTMLTable_react__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _components_Tr_react__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/Tr.react */ "./src/lib/components/Tr.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return _components_Tr_react__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _components_Tbody_react__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/Tbody.react */ "./src/lib/components/Tbody.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tbody", function() { return _components_Tbody_react__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _components_Popover_react__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/Popover.react */ "./src/lib/components/Popover.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _components_Popover_react__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _components_Drawer_react__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/Drawer.react */ "./src/lib/components/Drawer.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _components_Drawer_react__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _components_Link_react__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/Link.react */ "./src/lib/components/Link.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _components_Link_react__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _components_hocs_Histogram_react__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/hocs/Histogram.react */ "./src/lib/components/hocs/Histogram.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Histogram", function() { return _components_hocs_Histogram_react__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _components_hocs_PropertyTable_react__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/hocs/PropertyTable.react */ "./src/lib/components/hocs/PropertyTable.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyTable", function() { return _components_hocs_PropertyTable_react__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _components_spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/spark/Sparkline.react */ "./src/lib/components/spark/Sparkline.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sparkline", function() { return _components_spark_Sparkline_react__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _components_Dialog_react__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/Dialog.react */ "./src/lib/components/Dialog.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _components_Dialog_react__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* eslint-disable import/prefer-default-export */
// Core













 // Form Inputs















































 // Higher-order components







/***/ }),

/***/ "./src/lib/utils/date.js":
/*!*******************************!*\
  !*** ./src/lib/utils/date.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  formatDate: function formatDate(date, timePrecision) {
    if (date === null) {
      return null;
    }

    var minutesOffset = -date.getTimezoneOffset();
    var dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

    if (timePrecision) {
      dateString = dateString + ' ' + this.pad(date.getHours()) + ':' + this.pad(date.getMinutes()) + ':' + this.pad(date.getSeconds()) + ' ' + (minutesOffset >= 0 ? '+' : '') + minutesOffset / 60 + ':' + this.pad(minutesOffset % 60);
    }

    return dateString;
  },
  pad: function pad(val) {
    return ('0' + val).slice(-2);
  }
};

/***/ }),

/***/ "./src/lib/utils/renderHeader.js":
/*!***************************************!*\
  !*** ./src/lib/utils/renderHeader.js ***!
  \***************************************/
/*! exports provided: renderHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHeader", function() { return renderHeader; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function renderHeader() {
  var _this = this;

  // Set up filtering options
  var filterHeader = null;

  if (this.props.filter_columns) {
    var filterBy = this.props.filter_columns.map(function (filter, idx) {
      return /*#__PURE__*/React.createElement("th", {
        key: 'filter-by-' + idx
      }, filter ? /*#__PURE__*/React.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["EditableText"], {
        placeholder: "filter by...",
        onChange: function onChange(value) {
          _this.props.setProps({
            filter_strings: _objectSpread(_objectSpread({}, _this.props.filter_strings), {}, _defineProperty({}, idx, value))
          });
        }
      }) : null);
    });
    filterHeader = /*#__PURE__*/React.createElement("thead", {
      key: 'head-filter'
    }, /*#__PURE__*/React.createElement("tr", null, filterBy));
  }

  var headerRow = this.props.children[0];

  if (this.props.sort_columns && this.props.sort_columns.length > 0) {
    // Add sort elements to the column headers
    var childrenToMangle;

    if (this.props.children[0].props._dashprivate_layout.props.children.type === 'Tr') {
      childrenToMangle = this.props.children[0].props._dashprivate_layout.props.children.props.children; // console.log('Taking children from deeper nest');
    } else {
      childrenToMangle = this.props.children[0].props._dashprivate_layout.props.children;
    } // console.log(
    //     this.props.children[0].props._dashprivate_layout.props.children
    // );
    // console.log(childrenToMangle);
    // console.log(this.props.children[0].props._dashprivate_layout);


    var mangledChildren = childrenToMangle.map(function (child, idx) {
      if (!_this.props.sort_columns[idx]) {
        return child;
      }

      var appendedChildren = [{
        namespace: 'dash_blueprint',
        props: {
          children: null,
          minimal: true,
          // id: "some-id",
          icon: 'chevron-up',
          className: 'bp3-button table-sort-button',
          small: true,
          style: {
            cursor: 'default'
          },
          disabled: _this.props.sort_column === idx && _this.props.sort_direction === 'asc',
          onClick: function onClick() {
            _this.props.setProps({
              sort_column: idx,
              sort_direction: 'asc'
            });
          }
        },
        type: 'Button'
      }, {
        namespace: 'dash_blueprint',
        props: {
          children: null,
          minimal: true,
          // id: "some-id",
          icon: 'chevron-down',
          className: 'bp3-button table-sort-button',
          small: true,
          style: {
            cursor: 'default'
          },
          disabled: _this.props.sort_column === idx && _this.props.sort_direction === 'desc',
          onClick: function onClick() {
            _this.props.setProps({
              sort_column: idx,
              sort_direction: 'desc'
            });
          }
        },
        type: 'Button'
      }];

      var newChild = _objectSpread(_objectSpread({}, child), {}, {
        props: _objectSpread(_objectSpread({}, child.props), {}, {
          children: Array.isArray(child.props.children) ? child.props.children.concat(appendedChildren) : [child.props.children].concat(appendedChildren) // ]

        })
      });

      return newChild;
    });
    headerRow = _objectSpread(_objectSpread({}, this.props.children[0]), {}, {
      props: _objectSpread(_objectSpread({}, this.props.children[0].props), {}, {
        _dashprivate_layout: _objectSpread(_objectSpread({}, this.props.children[0].props._dashprivate_layout), {}, {
          props: _objectSpread(_objectSpread({}, this.props.children[0].props._dashprivate_layout.props), {}, {
            // children: childrenToMangle
            children: _objectSpread(_objectSpread({}, this.props.children[0].props._dashprivate_layout.props.children), {}, {
              props: _objectSpread(_objectSpread({}, this.props.children[0].props._dashprivate_layout.props.children.props), {}, {
                children: mangledChildren
              })
            })
          })
        })
      })
    });
  }

  return {
    filterHeader: filterHeader,
    headerRow: headerRow
  };
}

/***/ }),

/***/ "./src/lib/utils/text.js":
/*!*******************************!*\
  !*** ./src/lib/utils/text.js ***!
  \*******************************/
/*! exports provided: highlightText, filterItemByQueryString, renderSelectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightText", function() { return highlightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterItemByQueryString", function() { return filterItemByQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSelectItem", function() { return renderSelectItem; });
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");


function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function highlightText(text, query) {
  var lastIndex = 0;
  var words = query.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).map(escapeRegExpChars);

  if (words.length === 0) {
    return [text];
  }

  var regexp = new RegExp(words.join("|"), "gi");
  var tokens = [];

  while (true) {
    var match = regexp.exec(text);

    if (!match) {
      break;
    }

    var length = match[0].length;
    var before = text.slice(lastIndex, regexp.lastIndex - length);

    if (before.length > 0) {
      tokens.push(before);
    }

    lastIndex = regexp.lastIndex;
    tokens.push( /*#__PURE__*/React.createElement("strong", {
      key: lastIndex
    }, match[0]));
  }

  var rest = text.slice(lastIndex);

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

function filterItemByQueryString(query, item, _index, exactMatch) {
  var normalizedName = item.label ? item.label.toString().toLowerCase() : "";
  var normalizedQuery = query.toLowerCase();

  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return "".concat(item.value, ". ").concat(normalizedName, " ").concat(item.tag).indexOf(normalizedQuery) >= 0;
  }
}
;
/**
 * 
 * @param {PropType.object} item item with `label`, `value` and optional `tag`
 * @param {*} param1 
 * @returns {MenuItem}
 */

function renderSelectItem(item, _ref) {
  var handleClick = _ref.handleClick,
      modifiers = _ref.modifiers,
      query = _ref.query;

  if (!modifiers.matchesPredicate) {
    return null;
  }

  var text = "".concat(item.label);
  console.log(modifiers, item);
  return /*#__PURE__*/React.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    key: item.value,
    active: modifiers.active,
    disabled: modifiers.disabled,
    label: item.tag,
    onClick: handleClick,
    text: highlightText(text, query)
  });
}
;

/***/ })

})