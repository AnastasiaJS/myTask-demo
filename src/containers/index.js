import React from 'react'
import {Row, Col, Icon} from 'antd';
import ShowTask from './../components/currentTask'
import CheckAll from './../components/checkAll'
import BrowserList from './../components/browserList'
import JobList from './../components/jobList'
import FollowList from './../components/followList'
import TaskList from './../components/taskList'


import '../static/layout.css';

class Index extends React.Component {

    render() {
        return (
            <div className="tqr-box">
                <div className="tqr-top-box">
                    <img src="/build/img/title-2cd72f.png" alt=""/>
                </div>
                <Row gutter={16} className="tqr-main-box">
                    <Col className="gutter-left" span={4}>
                        <div className="div-myTask">
                            <div className="div-myTask-top">
                                <Icon type="calendar" style={{fontSize:1.5+"rem",marginRight:1.5+"em"}}/>
                                <span style={{
                                fontWeight:900,
                                fontSize:1.5+"rem",
                                 marginRight:6+"rem",
                                 lineHeight:1.5+"rem"
                                }}>我的任务</span>
                                <Icon type="plus-square-o"/>
                                <Icon type="down"/>
                            </div>
                            <TaskList {...this.props}/>
                        </div>
                        <div className="div-myFollow">
                            <div className="div-myFollow-top">
                                <Icon type="star" style={{fontSize:1.5+"rem",marginRight:1.5+"em"}}/>
                                <span style={{
                                fontWeight:900,
                                fontSize:1.5+"rem",
                                marginRight:6+"rem",
                                lineHeight:1.5+"rem"
                                }}>我的关注</span>
                            </div>
                            <FollowList {...this.props}/>
                        </div>

                        <CheckAll {...this.props}/>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <div className="gutter-box">
                            <Row gutter={16}>
                                <Col span={4}>采购合同</Col>
                                <Col span={20}>
                                    正在执行
                                    <ShowTask {...this.props}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-right" span={4}>
                        <div className="div-myBrowser">
                            <div className="div-myBrowser-top">
                                        <span style={{
                                            fontWeight:900,
                                            fontSize:1.5+"rem",
                                            marginRight:6+"rem",
                                            lineHeight:1.5+"rem"}}>
                                            浏览记录
                                        </span>
                            </div>
                            <BrowserList {...this.props}/>
                        </div>
                        <div className="div-myJob">
                            <div className="div-myJob-top">
                                        <span style={{
                                            fontWeight:900,
                                            fontSize:1.5+"rem",
                                            marginRight:6+"rem",
                                            lineHeight:1.5+"rem"}}>
                                            我的工作
                                        </span>
                            </div>
                            <JobList {...this.props}/>
                        </div>

                    </Col>
                </Row>
            </div >
        )
    }
}
;

export default Index
