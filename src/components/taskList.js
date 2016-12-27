/**
 * Created by SWSD on 2016-12-26.
 */
import React from 'react';
import Task from './task'
import {fetchPosts,loadTask,requireTask} from '../actions'
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
        // store.dispatch(requireTask);
        console.log('componentDidMout>>>>>',this.props)
    }

    render() {
        const { loading, error, taskList } = this.props.todos;
        // const { loading, error, taskList } = store.getState().reducer;

        if (error) {
            return <h2 className="message">Oops, something is wrong.</h2>;
        }

        if (loading) {
            return <h2 className="message">Loading...</h2>;
        }

        return (
            <div>
                {taskList.map(item => {
                    return <Task {...item}  push={this.props.push}/>
                })}
                
            </div>
        );
    }
}

export default TaskList;
