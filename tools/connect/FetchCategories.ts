import axios from "axios";
import Urls from "../urls";

export default class FetchCategories{
    static async fetchAll(){
        return axios
      .get(Urls.AllCategoriesApi)
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

    static async fetchOne({id}:{id:number}){
        return axios
        .get(Urls.AllCategoriesApi)
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