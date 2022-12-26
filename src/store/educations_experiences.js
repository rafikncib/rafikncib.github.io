import { createSlice } from "@reduxjs/toolkit";

const educationsExperiencesSlice=createSlice({
    name:"education_experience",
    initialState:{
        info:'educations',
    },
    reducers:{
        resetInfo:(state)=>{
            state.info='educations';
        },
        changeInfo:(state,action)=>{
            state.info=action.payload;
        }
    }
});


export const educationsExperiencesActions=educationsExperiencesSlice.actions;
export default educationsExperiencesSlice;