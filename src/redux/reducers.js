/**
 * Created by SWSD on 2016-12-26.
 */
import reducer from '../reducers/index';
import {loadTask,requireTask,fetchPosts} from '../actions/index'
export default {
    reducer,
};
export const actions = {
    loadTask,
    requireTask,
    fetchPosts
};