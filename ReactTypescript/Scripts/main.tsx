// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/react-dom/react-dom.d.ts" />

import ReactDom = __ReactDom;

namespace app.components {
    ReactDom.render(
        <MyComponent testProp={"test"} numberProp={4} arrayProp={["One", "Two", "Three"]} />,
        document.getElementById("main")
    );
}
