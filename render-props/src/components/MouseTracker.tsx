import React from "react";

interface MouseTrackerState {
    x: number;
    y: number;
}

interface MouseTrackerProps {
    render: (state: MouseTrackerState) => React.ReactNode;
}

export class MouseTracker extends React.Component<MouseTrackerProps, MouseTrackerState> {
    state: MouseTrackerState = { x: 0, y: 0 };

    handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }

    render(): React.ReactNode {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}