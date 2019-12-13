import * as React from 'react';

/**
 * A sheet anchored to the bottom of the page.
 */
export class BottomSheet extends React.Component<IProps> {

    public render() {

        // TODO: make this a transition so it floats up from the bottom.
        return (

            <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: '100%'
                 }}>

                {this.props.children}

            </div>
        );

    }

}

export interface IProps {
}

