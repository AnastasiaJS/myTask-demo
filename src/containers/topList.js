
import {connect} from 'react-redux'
import {bindActionCreator} from 'redux'
import loadTask from '../actions/action'
import topList from '../components/topList'

const top = connect()(topList);

export default top;