// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../typings/react/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var components;
    (function (components) {
        var MyComponent = (function (_super) {
            __extends(MyComponent, _super);
            function MyComponent() {
                _super.apply(this, arguments);
            }
            MyComponent.prototype.render = function () {
                var items = this.props.arrayProp.map(function (v) {
                    return React.createElement("span", {"key": v}, v);
                });
                return (React.createElement("div", null, React.createElement("div", null, this.props.testProp), React.createElement("div", null, items)));
            };
            return MyComponent;
        })(React.Component);
        components.MyComponent = MyComponent;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=MyComponent.js.map