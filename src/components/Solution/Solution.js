import React, { Component } from "react";
import styles from "./Solution.scss";
import classNames from "classnames/bind";
import Message from "../../../message.json";
const cx = classNames.bind(styles);

export class SolutionMessage extends Component {
    state = {
        display: { display: "none" },
        message:
            Message.message[
                Math.round(Math.random() * (Message.message.length - 1))
            ]
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ display: { display: "inline" } });
        }, 3000);
    }

    render() {
        return (
            <div className={cx("solution")}>
                {this.state.message}
                <input
                    onClick={this.props.restart}
                    style={this.state.display}
                    className={cx("button-home")}
                    type="button"
                    value="다시하기"
                />
            </div>
        );
    }
}

export default class Solution extends Component {
    render() {
        return (
            this.props.pageState === 2 && (
                <SolutionMessage restart={this.props.restart} />
            )
        );
    }
}
