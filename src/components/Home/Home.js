import React, { Component } from "react";
import styles from "./Home.scss";
import classNames from "classnames/bind";
import Waiting from "../Waiting";

const cx = classNames.bind(styles);

export const Start = ({ start }) => {
    return (
        <div className={cx("home")}>
            <div className={cx("home-message-title")}>
                <h3>
                    <strong>인생의 답 사용법</strong>
                </h3>
            </div>
            <div className={cx("home-message-content")}>
                <p>
                    1. 답을 얻고 싶은 질문을 생각합니다.
                    <br />
                    (예: 취업이 잘 될까요? 또는 쉬어도 될까요?)
                </p>
                <p>
                    2. '시작' 버튼을 누르고 촛불을 바라보며 <br />
                    질문에 집중합니다.
                </p>
                <p>3. 잠시 후, 질문의 답을 찾을 수 있습니다.</p>
                <p>
                    * 질문의 답이 찾기 어려울수록 시간이 <br />
                    오래 걸립니다.
                </p>
            </div>
            <input
                onClick={start}
                className={cx("button-start")}
                type="button"
                value="시작"
            />
        </div>
    );
};

class Home extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.pageState !== nextProps.pageState;
    }

    render() {
        const { start, pageState, showMessage } = this.props;
        return pageState === 1 ? (
            <Start start={start} />
        ) : (
            <Waiting showMessage={showMessage} />
        );
    }
}

export default Home;
