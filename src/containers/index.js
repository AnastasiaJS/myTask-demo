import React from 'react'
import MainList from './mainList'
import TopList from './topList'

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

// const text = `
//   <Icon type="calendar" />
// `;
class Task extends React.Component {

    render() {
        const { loadTask,fetchPosts, taskList,loading, error, push } = this.props;
        return (
            <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="我的任务" key="1">
                <TopList/>
                <MainList {...this.props}/>
            </Panel>
            <Panel header="我的关注" key="2">

    </Panel>
    </Collapse>
        )

    }
}
;

export default Task
