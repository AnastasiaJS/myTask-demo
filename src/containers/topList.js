
import {connect} from 'react-redux'
import {bindActionCreator} from 'redux'
import loadTask from '../actions/action'
import topList from '../components/topList'

// const mapStateToProps = (state) => ({
//     list: state.taskReducer
// });
//
// const mapDispatchToProps = dispatch=> {
//     return {
//         listAction: bindActionCreator(loadTask, dispatch)
//     }
// };

const top = connect()(topList);

export default top;