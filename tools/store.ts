import {configureStore} from '@reduxjs/toolkit';
import latestArticlesReducer from './slices/latestArticles';
import CategoriesReducer from './slices/categoriesReducer';
import IndexArticlesReducer  from './slices/IndexArticlesReducer';

export const store = configureStore({
    reducer:{
        latestArticles:latestArticlesReducer,
        categories:CategoriesReducer,
        articlesByCategory:IndexArticlesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
