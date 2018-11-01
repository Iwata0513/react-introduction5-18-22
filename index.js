import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import './index.css';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(tasksReducer);

function renderApp(store){
    render(
        <Provider store={store}>
            <TodoApp />
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(() => renderApp(store));
renderApp(store);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
