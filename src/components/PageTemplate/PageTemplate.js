import React, { Component } from "react";
import styles from "./PageTemplate.scss";
import classNames from "classNames/bind";
import Home from "../Home/Home";
import Solution from "../Solution/Solution";

const cx = classNames.bind(styles);

class PageTemplate extends Component {
    state = {
        leftPage: 1,
        rightPage: 1
    };

    start = () => {
        this.setState({
            leftPage: 2,
            rightPage: 1
        });
    };

    showMessage = () => {
        this.setState({
            rightPage: 2
        });
    };

    restart = () => {
        this.setState({
            leftPage: 1,
            rightPage: 1
        });
    };

    render() {
        return (
            <>
                <div className="scene">
                    <div className="book-wrap">
                        <div className="left-side">
                            <div className="book-cover-left" />
                            <div className="layer1">
                                <div className="page-left" />
                            </div>
                            <div className="layer2">
                                <div className="page-left" />
                            </div>
                            <div className="layer3">
                                <div className="page-left" />
                            </div>
                            <div className="layer4">
                                <div className="page-left" />
                            </div>
                            <div className="layer-text">
                                <div className="page-left-2">
                                    <Home
                                        start={this.start}
                                        pageState={this.state.leftPage}
                                        showMessage={this.showMessage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="center" />
                        <div className="right-side">
                            <div className="book-cover-right" />
                            <div className="layer1">
                                <div className="page-right" />
                            </div>
                            <div className="layer2 right">
                                <div className="page-right" />
                            </div>
                            <div className="layer3 right">
                                <div className="page-right" />
                            </div>
                            <div className="layer4 right">
                                <div className="page-right" />
                            </div>
                            <div className="layer-text right">
                                <div className="page-right-2">
                                    <Solution
                                        restart={this.restart}
                                        pageState={this.state.rightPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <input
                    onClick={() => {
                        window.close();
                    }}
                    className={cx("button-end")}
                    type="button"
                    value="X"
                />
            </>
        );
    }
}

export default PageTemplate;
