import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import Article from '../../models/Article';
interface ArticleInitState{
    value:Article[]
}
const initialState :  ArticleInitState = {
    value:[]
}

export const IndexArticlesReducer = createSlice({
    name:'IndexArticles',
    initialState,
    reducers:{
        getIndexArticles:(state,{payload}:PayloadAction<Article[]>) => {
            state.value = payload;
        }
    }
})
export const { getIndexArticles } = IndexArticlesReducer.actions;

export default IndexArticlesReducer.reducer; 