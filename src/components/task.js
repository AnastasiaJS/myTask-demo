import React from 'react';
import {Checkbox, Row, Col} from 'antd';
const CheckboxGroup = Checkbox.Group;

class Task extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
    };

    handleCheck(id,actions,e) {
        // 阻止原生链接跳转
        e.preventDefault();

        actions.checked(id);
    }

    render() {
        console.log("task.....", this.props)
        const {todos,actions}=this.props;
        return (
            <div className='row-task'>
                <Row type="flex" justify="space-around">
                    <Col span={2}>
                        <Checkbox className="task-checkbox" key={this.props.id} 
                        onChange={this.handleCheck.bind(this,this.props.id,actions)}>

                        </Checkbox>
                    </Col>
                    <Col span={16} >
                        {this.props.name} ( {this.props.titleOne} )
                    </Col>
                    <Col span={6}>
                        {this.props.state}
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={2}>
                        {this.props.titleTwo}
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Task;
