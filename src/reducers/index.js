/**
 * Created by SWSD on 2016-12-23.
 */
import data from '../api/data'
import * as Types from '../redux/contant'
// const initialState = {
//     loading: true,
//     error: false,
//     taskList: [],
// };

const initialState = data;

export default function taskList(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD_TASK:
        {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case Types.LOAD_TASK_SUCCESS:
        {
            return {
                ...state,
                loading: false,
                error: false,
                taskList: action.taskList,
            };
        }

        case Types.LOAD_TASK_ERROR:
        {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        case Types.CHECK:
        {
            console.log("checked........")
            return {
                ...state,
                checkOne: !action.checkOne,

            }
        }
        case Types.SHOW:
        {
            console.log("types.show.........");
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state;
    }
}