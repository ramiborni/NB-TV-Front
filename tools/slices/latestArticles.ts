import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type Article from '../../models/Article'

interface LatestArticlesState{
    value:Article[]
}

const initialState : LatestArticlesState={
    value: []
}

export const latestArticlesSlice = createSlice({
    name:'latestArticles',
    initialState,
    reducers:{
        getArticles: (state,{payload} : PayloadAction<Article[]>) => {
            state.value=payload;
        },
    }
})


export const { getArticles } = latestArticlesSlice.actions;

export default latestArticlesSlice.reducer;
