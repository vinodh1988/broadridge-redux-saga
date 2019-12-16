import { takeEvery,call,put} from 'redux-saga/effects';
import axios from 'axios';


export  function* rootSaga(){
    yield takeEvery("COURSE_ACTION",HandleCourse);
}


function getCaller(url){
    return axios.get(url);
}

function* HandleCourse(){
    
    let response=yield call(getCaller,"http://ec2-3-16-166-243.us-east-2.compute.amazonaws.com:8897/rest-api/courses");
    console.log(response);
    yield put({type:'COURSE_DATA',data:response.data});
 }