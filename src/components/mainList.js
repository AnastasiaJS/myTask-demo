/**
 * Created by SWSD on 2016-12-23.
 */
import React,{Component} from 'react';
import TaskList from './taskList';

const MainList=(props)=>{
    console.log('MainList...',props);
    return (
        <div>
            <TaskList {...props}/>
        </div>
    )
};

export  default MainList
