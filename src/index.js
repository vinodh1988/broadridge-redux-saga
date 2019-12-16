import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {state} from './Redux/reducers/rootReducer';
import {courseAction} from './Redux/actions/courseAction';
import  {rootSaga} from './Redux/sagas/root';
import createSagaMiddleware from 'redux-saga';
import  '../node_modules/bootstrap/dist/js/bootstrap.min';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
let store=createStore(state,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

//store.dispatch(courseAction());
store.dispatch({type:"COURSE_ACTION"})

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"));