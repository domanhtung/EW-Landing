import { handleResponse } from "../Helpers/handle-response";
const API_WEB_URL = process.env.NEXT_PUBLIC_WEB_API_ENDPOINT;

export const getListBlog = async(type: any, page: any, size: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getBlog?type=${type}&page=${page}&size=${size}`, requestOptions).then(handleResponse);
}

export const getListTopBlog = async(type: any, page: any, size: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getTopBlog?type=${type}&page=${page}&size=${size}`, requestOptions).then(handleResponse);
}

export const getBlogFeature = async(type: any, page: any, size: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getBlogFeature?type=${type}&page=${page}&size=${size}`, requestOptions).then(handleResponse);
}

export const getBlogDetail = async(id: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getBlogDetail/${id}`, requestOptions).then(handleResponse);
}

export const getBlogDetailByKeyUrl = async(keyUrl: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getBlogDetailKeyUrl/${keyUrl}`, requestOptions).then(handleResponse);
}

export const getUrlBlogDetail = (id: any) => {
    return `${API_WEB_URL}/web-api/blog/getBlogDetail/${id}`
}

export const getMostLike = async(type: any, page: any, size: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/getMostLike?type=${type}&page=${page}&size=${size}`, requestOptions).then(handleResponse);
}

export const mainPicture = (id: any) => {
    return `${API_WEB_URL}/file/${id}`
}

export const likeBlogDetail = async(id: any, type: any) => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/blog/like/${id}?type=${type}`, requestOptions).then(handleResponse);
}

export const postComment = async(param: any) => {
    const postParam = JSON.stringify(param);
    const requestOptions = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: postParam };
    return fetch(`${API_WEB_URL}/web-api/blog/comment/${param.blogId}`, requestOptions).then(handleResponse);
}

export const spinWheel = async(address: any) => {
    const postParam = JSON.stringify({address: address});
    const requestOptions = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: postParam };
    return fetch(`${API_WEB_URL}/web-api/lucky-event`, requestOptions).then(handleResponse);
}

export const getRewardApi = async() => {
    const requestOptions = { method: 'GET' };
    return fetch(`${API_WEB_URL}/web-api/lucky-event-winner`, requestOptions).then(handleResponse);
}

export const registerEmailApi = async(email: any) => {
    const requestOption = { method: 'POST' };
    return fetch(`${API_WEB_URL}/web-api/registerEmail?email=${email}`, requestOption).then(handleResponse);
}