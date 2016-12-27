import React, {Component}from 'react'
import MyTask from '../containers/index'
import {actions} from '../redux/reducers'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component {
    render() {
        // const {loadTask, fetchPosts, taskList, loading, error, push} = this.props;
        return (
            <div>
                <MyTask {...this.props}/>
            </div>
        )
    }

}

export default  connect(state => {
    return {
        todos: state.reducer
    };
}, (dispatch)=>{
    return {actions: bindActionCreators(actions, dispatch)}
})(App);
