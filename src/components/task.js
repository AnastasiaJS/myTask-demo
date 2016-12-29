import React from 'react';
import {Checkbox, Row, Col} from 'antd';


class Task extends React.Component {

    handleCheck(id, e) {

        this.props.actions.checked(id, e.target.checked);
    }

    showTask(id) {
        const {todos, actions}=this.props;
        actions.setCurrent(id, true);
    }

    render() {
        const {todos, actions}=this.props;
        return (
            <div className='row-task' style={this.props.id==todos.currentId?{background:"#FCF8E2"}:{}}>
                <Row type="flex" justify="space-around">
                    <Col span={2}>
                        <div>
                            <Checkbox  className="task-checkbox"
                                       onChange={this.handleCheck.bind(this,this.props.id)}
                                       checked={this.props.checked}
                                       style={this.props.checked?{visibility:"visible"}:{}}
                            >

                            </Checkbox>
                        </div>

                    </Col>
                    <Col className="task-name" span={16} onClick={this.showTask.bind(this,this.props.id)}>
                        <span>
                            {this.props.name} ( {this.props.titleOne} )
                        </span>
                    </Col>
                    <Col span={6}>
                        {this.props.state}
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={2}  onClick={this.showTask.bind(this,this.props.id)}>
                        {this.props.titleTwo}
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Task;
