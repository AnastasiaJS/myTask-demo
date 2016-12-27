import React from 'react'
import MainList from './mainList'
import TopList from './topList'

import {Collapse, Row, Col,Checkbox} from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

// const text = `
//   <Icon type="calendar" />
// `;
class Task extends React.Component {

    render() {
        const {loadTask, fetchPosts, taskList, loading, error, push} = this.props;
        return (
            <div className="tqr-box">
                <Row className="tqr-top-box">
                    <Col span={24}>
                    </Col>
                </Row>
                <Row gutter={16} className="tqr-main-box">
                    <Col className="gutter-left" span={4}>
                        <div className="gutter-box">
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="我的任务" key="1" className="panel-myTask">
                                    <MainList {...this.props}/>
                                </Panel>
                                <Panel header="我的关注" key="2" className="panel-myFollow">
                                    我的关注
                                </Panel>
                            </Collapse>
                            <div id="doSomething">
                                <Checkbox>全选</Checkbox>
                                <span>审核</span>
                                <span>退回</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <div className="gutter-box">
                            <Row gutter={16}>
                                <Col span={4}>采购合同</Col>
                                <Col span={20}>正在执行</Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-right" span={4}>
                        <div className="gutter-box">
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="浏览记录" key="3">
                                    浏览记录
                                </Panel>
                                <Panel header="我的工作" key="4">
                                    我的工作
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
            </div >
        )

    }
}
;

export default Task
