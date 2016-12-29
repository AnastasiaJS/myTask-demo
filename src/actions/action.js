/**
 * Created by SWSD on 2016-12-23.
 */

import * as Types from '../redux/contant'
export const loadTask = ()=>({
    type: Types.LOAD_TASK
});
export const loadError = ()=>({
    type: Types.LOAD_TASK_ERROR
});
export const requireTask=json=>({
    type: Types.LOAD_TASK_SUCCESS,
    taskList: json.taskList,
    currentContent:json.taskList[0].name
});

export const checked=(id,check)=>({
    type:Types.CHECK,
    checked:check,
    id
});

export const checkAll=(checked)=>({
    type:Types.CHECK_ALL,
    checked:checked
});
export const setCurrent=(id,isTask)=>({
    type:Types.CURRENT_TYPE,
    currentId:id,
    isTask:isTask,
    id
});
export const doneTask=(id)=>({
    type:Types.DONE,
    rollbackId:id,
    id
});

export const doneAllTask=()=>({
    type:Types.DONE_ALL,
    
});

export const followTask=(id)=>({
    type:Types.FOLLOW,
    id
});
export const rollbackTask=(id)=>({
    type:Types.ROLLBACK,
    id
});

export const fetchPosts = ()=>dispatch => {
    dispatch(loadTask);
    return fetch(`/src/api/data.json`)
        .then(response => response.json())
        .then(json => {
            dispatch(requireTask(json));
        })
};
