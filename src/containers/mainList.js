import React,{Component} from 'react';

import MainList from '../components/mainList'

// const mapStateToProps = (state) => ({
//     list: state.taskReducer
// });
//
// const mapDispatchToProps = dispatch=> {
//     return {
//         listAction: bindActionCreator(loadTask, dispatch)
//     }
// };

// const main = connect()(MainList);
//
// export default main;




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