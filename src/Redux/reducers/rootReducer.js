import {combineReducers} from 'redux';
import {CourseReducer} from './reducers'

export const state=combineReducers(
    {
        courseData: CourseReducer
    }
)