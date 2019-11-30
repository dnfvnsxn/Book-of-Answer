import React, { Component } from "react";
import gif1 from "../../gif/1.gif";
import gif2 from "../../gif/2.gif";
import gif3 from "../../gif/3.gif";
import classNames from "classnames/bind";
import styles from "./Waiting.scss";

const cx = classNames.bind(styles);
/* const cx = classNames.bind(styles); */
class Waiting extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.showMessage();
        }, Math.round(Math.random() * 7 + 3) * 1000);
    }

    render() {
        const gifList = [gif1, gif2, gif3];

        const bak = gifList[Math.floor(Math.random() * 3)];

        return (
            <div className={cx("waiting")}>
                <div
                    className={cx("effect")}
                    style={{
                        background: "url(" + bak + ")",
                        left: "10%",
                        top: "10%",
                        width: "80%",
                        height: "80%",
                        backgroundSize: "100% 100%",
                        opacity: "0.7"
                    }}
                />
            </div>
        );
    }
}

export default Waiting;
