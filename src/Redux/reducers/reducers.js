

export const CourseReducer=(state={course:[]},action)=>{
    switch(action.type){
        case "COURSE_DATA":
               return {course:action.data};
        default:
               return state;
    }

}