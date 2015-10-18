// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../typings/react/react-global.d.ts" />

namespace app.components {

    interface MyComponentProps {
        testProp: string;
        numberProp: number;
        arrayProp: string[];
    }

    export class MyComponent extends React.Component<MyComponentProps, any> {
        public render()
        {
            var items = this.props.arrayProp.map(function (v) {
                return <span key={v}>{v}</span>
            });

            return (
                <div>
                    <div>{this.props.testProp}</div>
                    <div>{items}</div>
                </div>
            );
        }
    }

}