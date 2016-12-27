/**
 * Created by SWSD on 2016-12-26.
 */
import React from 'react';
import Task from './task'
import {fetchPosts,loadTask,requireTask} from '../actions/action'
import configureStore from '../redux/configureStore';
const store = configureStore();
class TaskList extends React.Component {
    static propTypes = {
        loading: React.PropTypes.bool,
        error: React.PropTypes.bool,
        taskList: React.PropTypes.arrayOf(React.PropTypes.object),
        loadTasks: React.PropTypes.func,
        push: React.PropTypes.func,
    };


    componentDidMount() {
        // const {dispatch}=this.props;
        store.dispatch(fetchPosts);
        // console.log('componentDidMout>>>>>',this.props)
    }

    

    render() {
        const { loading, error, taskList } = this.props.todos;
       

        if (error) {
            return <h2 className="message">Oops, something is wrong.</h2>;
        }

        if (loading) {
            return <h2 className="message">Loading...</h2>;
        }

        return (
            <div>
                {taskList.map(item => {
                    return <Task {...item} key={item.id} push={this.props.push} className="task-item"/>
                })}
            </div>
        );
    }
}

export default TaskList;
