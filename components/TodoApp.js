import React from 'react';
// import {inputTask, addTask} from '../actions/tasks';

export default function TodoApp({task, tasks, inputTask, addTask}){
    // const {task,tasks} = store.getState();
    return(
        <div>
          <input type="text" onChange = {(e) => inputTask(e.target.value)} />
          <input type="button" value = "add"  onClick = {() => addTask(task)} />
          <ul>
              {
                  tasks.map(function(item,i){
                      return(
                          <li key={i}>{item}</li>
                      );
                  })
              }
          </ul>
        </div>
    );
}
