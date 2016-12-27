/**
 * Created by SWSD on 2016-12-23.
 */

import * as Types from '../redux/contant'
export const loadTask = ()=>({
    type: Types.LOAD_TASK
});
export const requireTask=json=>({
    type: Types.LOAD_TASK_SUCCESS,
    taskList: json
});

export const checked=(id,check)=>({
    type:Types.CHECK,
    checkOne:check,
    id
});

export const showContent=title=>({
    type:Types.SHOW,
    title
});

export const fetchPosts = dispatch => {
    dispatch(loadTask());
    return fetch(`/src/api/data.json`)
        .then(response => response.json())
        .then(json => {
            dispatch(requireTask(json));
            console.log("fetch over.....");
        })
};
