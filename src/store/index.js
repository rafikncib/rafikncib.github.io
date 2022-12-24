import { configureStore } from '@reduxjs/toolkit'
import experienceSlice from './experience'
const store=configureStore({
    reducer:{

        experience:experienceSlice.reducer,

    },
})
export const actions=store.actions
export default store
