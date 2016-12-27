import React,{Component} from 'react';

import MainList from '../components/mainList'

class main extends React.Component {
    render() {
        const { loadTask,fetchPosts, taskList,loading, error, push } = this.props;
        return (
            <div>
                <MainList {...this.props} />
            </div>
        );
    }
}

export  default main;