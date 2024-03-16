import axios from 'axios'

const API_URL = "https://fakestoreapi.com/";

export const callGetApi = async(END_POINT) => {

  let response =await axios.get(API_URL+END_POINT);
  console.log(response);
  return response;
}

export const callPostApiJson = async(END_POINT,params) => {

    let response =await axios.post(API_URL+END_POINT,params);
    console.log(response);
    return response;
  }

export const callPostApiFormData = async(END_POINT=null,params,header=null) => {

    let formdata=new FormData();
    formdata.append({
        "key":"value"
    })
    let response =await axios.get(API_URL+END_POINT,params,);
    console.log(response);
    return response;
  }