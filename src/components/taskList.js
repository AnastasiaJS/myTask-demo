/**
 * Created by SWSD on 2016-12-26.
 */
import React from 'react';
import Task from './task';
import {Icon} from 'antd';
import  '../static/task.css'
class TaskList extends React.Component {
    static propTypes = {
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool,
        taskList: React.PropTypes.arrayOf(React.PropTypes.object),
        loadTasks: React.PropTypes.func,
        push: React.PropTypes.func,
    };


    componentDidMount() {
        const {actions}=this.props;
        actions.fetchPosts();
    }

    

    render() {
        const { loading, error, taskList } = this.props.todos;
       

        if (error) {
            return <div className="message">Oops, something is wrong.</div>;
        }

        if (loading) {
            return <div className="message">Loading...</div>;
        }
        return (
            <div className="div-task-list">
                {taskList.filter(item=>{
                    return !item.done;
                }).map(item => {
                    console.log(...item);
                    return <Task {...item} key={item.id} {...this.props}/>
                })}
            </div>
        );
    }
}

export default TaskList;
