import React,{useReducer} from 'react';
export const Studentcontext = React.createContext();
const studentReducer = (state,action)=>{
    switch (action.type) {
        case 'fetch':{
            state=[...action.payload]
        }
        case 'remove':{
            const newState = state.filter(student=>student.student_id!==action.id);
            state=[...newState];
            console.log(newState);
        }

        default:
            return state;
            
    }
    
}
const StudentcontextProvider=(props)=>{
    const[studentsState,dispatch] = useReducer(studentReducer,[]);
    
    return(
        <Studentcontext.Provider value={{studentsState,dispatch}}>
            {props.children}
        </Studentcontext.Provider>
    )
}
export default StudentcontextProvider;

// import react,{useReducer} from "react";

// export const Studentcontext = react.createContext();
// const studentReducer =(state , action)=>{
//     switch (action.type) {
//         case 'fetch':{
//             state=[...action.payload]
//         }
            
    
            
//         default:
            
            
//     }
    
// }
// const StudentcontextProvider =(props)=>{

//     const[studentsState,dispatch]=useReducer(studentReducer,[]);
//     console.log(studentsState);
    
//     return(
//         <Studentcontext.Provider value={{studentsState,dispatch}}>
//             {props.children}
//         </Studentcontext.Provider>
//     )
// }
// export default StudentcontextProvider;