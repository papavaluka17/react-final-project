import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            count2: 0
        };
    }

    render() {
        return (
            <div className="Counter" >
                <div className="wrapper">
                    <h6>Adults</h6>
                    <div className="Counter-2">
                        <span onClick={() => this.state.count >= 1 ? this.setState({ count: this.state.count - 1 }) : null }>
                           -
                        </span>
                        <p>{this.state.count}</p>
                        <span onClick={() => this.state.count <= 5 ? this.setState({ count: this.state.count + 1 }) : null}>
                            +
                        </span>
                    </div>
                </div>

                <div className="wrapper">
                    <h6>Kids</h6>
                    <div className="Counter-2">
                    <span onClick={() => this.state.count2 >= 1 ? this.setState({ count2: this.state.count2 - 1 }) : null }>
                           -
                        </span>
                        <p>{this.state.count2}</p>
                        <span onClick={() => this.state.count2 <= 2 ? this.setState({ count2: this.state.count2 + 1 }) : null}>
                            +
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Counter;
