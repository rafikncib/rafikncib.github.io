import { createSlice } from "@reduxjs/toolkit";

const experienceSlice=createSlice({
    name:"experience",
    initialState:{
        experiences:[
            'educations',
        ]
    },
    reducers:{
        resetExperience:(state)=>{
            state.experiences='educations';
        },
        changeExperience:(state,action)=>{
            state.experiences=action.payload;
        }
    }
});


export const experienceActions=experienceSlice.actions;
export default experienceSlice;