import { configureStore } from '@reduxjs/toolkit'
import educationsExperiencesSlice from './educations_experiences'
const store=configureStore({
    reducer:{

        experiences:educationsExperiencesSlice.reducer,

    },
})
export const actions=store.actions
export default store
