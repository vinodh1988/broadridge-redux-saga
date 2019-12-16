
import Home from '../components/pages/Home';
import {connect} from 'react-redux';

const mapStoreToProps=(store)=>{
    return {courses:store.courseData.course};
}


export const HomeConnected=connect(mapStoreToProps,null)(Home);