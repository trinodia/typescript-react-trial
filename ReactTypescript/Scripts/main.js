// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/react-dom/react-dom.d.ts" />
var ReactDom = __ReactDom;
var app;
(function (app) {
    var components;
    (function (components) {
        ReactDom.render(React.createElement(components.MyComponent, {"testProp": "test", "numberProp": 4, "arrayProp": ["One", "Two", "Three"]}), document.getElementById("main"));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=main.js.map