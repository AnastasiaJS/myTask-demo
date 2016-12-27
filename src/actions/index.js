/**
 * Created by SWSD on 2016-12-23.
 */
export const LOAD_TASK = 'LOAD_TASK';
export const LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS';
export const LOAD_TASK_ERROR = 'LOAD_TASK_ERROR';

export const loadTask = ()=>({
    type: LOAD_TASK
});
export const requireTask=json=>({
    type: LOAD_TASK_SUCCESS,
    taskList: json
});

export const fetchPosts = dispatch => {
    dispatch(loadTask());
    return fetch(`/src/api/data.json`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch(requireTask(json));
            console.log("fetch over.....");
        })
}
