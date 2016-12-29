/**
 * Created by SWSD on 2016-12-23.
 */
// import data from '../api/data'
import * as Types from '../redux/contant'
const initialState = {
    loading: true,
    error: false,
    currentType: "生产任务",
    currentId: 0,
    taskList: [],
};

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
                currentContent: action.currentContent
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
            state.taskList.map(item=> {
                if (item.id == action.id) {
                    item.checked = !item.checked;
                }
            });
            return Object.assign({}, state);
        }
        case Types.CHECK_ALL:
        {
            state.taskList.map(item=> {
                item.checked = action.checked;
            });
            return Object.assign({}, state);
        }
        case Types.CURRENT_TYPE:
        {
            state.taskList.map(item=> {
                if (item.id == action.id) {
                    state.currentContent = `${item.name}(${item.titleOne})`;
                    state.currentId = action.id;
                    state.currentType = item.name;
                    state.isTask = action.isTask;
                }
            });
            return Object.assign({}, state);

        }
        case Types.DONE:
        {
            state.taskList.map(item=> {
                if (item.id == action.id) {
                    item.done = true;
                }
            });
            state.rollbackId=action.rollbackId;
            return Object.assign({}, state);
        }
        case Types.DONE_ALL:
        {
            state.taskList.map(item=> {
                if(item.checked){
                    item.done = true;
                }
            });
            return Object.assign({}, state);
        }
        case Types.FOLLOW:
        {
            state.taskList.map(item=> {
                if (item.id == action.id) {
                    item.follow = !item.follow;
                }
            });
            return Object.assign({}, state);
        }
        case Types.ROLLBACK:
        {
            state.taskList.map(item=> {
                if (item.id == action.id) {
                    item.done = false;
                }
            });
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}