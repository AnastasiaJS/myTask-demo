/**
 * Created by SWSD on 2016-12-23.
 */
import {LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR} from '../actions/index';
import data from '../api/data'

// const initialState = {
//     loading: true,
//     error: false,
//     taskList: [],
// };

const initialState =data;

export default function taskList(state = initialState, action) {
    switch (action.type) {
        case LOAD_TASK:
        {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case LOAD_TASK_SUCCESS:
        {
            console.log(action);
            return {
                ...state,
                loading: false,
                error: false,
                taskList: action.taskList,
            };
        }

        case LOAD_TASK_ERROR:
        {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        default:
            return state;
    }
}