import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Category from '../../models/Category';
interface CategoriesInitState{
    value:Category[]
}
const initialState :  CategoriesInitState = {
    value:[]
}
export const categoriesReducer = createSlice({
    name:'categories',
    initialState,
    reducers:{
        getCategories:(state,{payload}:PayloadAction<Category[]>) => {
            state.value = payload;
        }
    }
})


export const { getCategories } = categoriesReducer.actions;

export default categoriesReducer.reducer;
