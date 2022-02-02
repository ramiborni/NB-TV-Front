import React from "react";
import axios from "axios";
import Urls from "../urls";
import Article from "../../models/Article";
import PrincipalsCategories from "../../data/PrincipalsCategories";

export default class FetchArticles {
  static getTopArticles() {
    return axios
      .get(Urls.AllArticlesApi)
      .then((res) => {
        return {
          isSuccess: true,
          result: res.data,
        };
      })
      .catch((err) => {
        return { isSuccess: false, result: err.message };
      });
  }
  static async getIndexArticles() {
    var data: Article[] = [];
    await Promise.all(PrincipalsCategories.map(async (category,index) => {
      const resultFetch= await axios.get(Urls.AllArticlesApiByCategory(category.id))
      data = [...data,...resultFetch.data]
    }));
    return {
      isSuccess:true,
      result:data,
    };
  }
  static  getArticleBySlug(slug:string) {
    return axios
    .get(encodeURI(Urls.ArticleLinkApi(slug)))
    .then((res) => {
      return {
        isSuccess: true,
        result: res.data[0],
      };
    })
    .catch((err) => {
      return { isSuccess: false, result: err.message };
    });
  }
  static  getArticleById(id:number) {
    return axios
        .get(Urls.ArticleByIdApi(id))
        .then((res) => {
          return {
            isSuccess: true,
            result: res.data[0],
          };
        })
        .catch((err) => {
          return { isSuccess: false, result: err.message };
        });
  }
  static searchArticlebyTitle(title:string){
    return axios
        .get(encodeURI(Urls.SearchArticleApi(title)))
        .then((res) => {
          return {
            isSuccess: true,
            result: res.data,
          };
        })
        .catch((err) => {
          return { isSuccess: false, result: err.message };
        });
  }

  static async fetchArticlesByCategory(category: number) {
    return axios
        .get(encodeURI(Urls.AllArticlesApiByCategory(category)))
        .then((res) => {
          return {
            isSuccess: true,
            result: res.data,
          };
        })
        .catch((err) => {
          return { isSuccess: false, result: err.message };
        });
  }
}
