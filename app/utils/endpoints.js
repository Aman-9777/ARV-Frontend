// const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//https://0cdd-103-54-103-195.ngrok-free.app
const API_URL = "https://0cdd-103-54-103-195.ngrok-free.app";

export const LOGIN = `${API_URL}/auth/login`;
export const SIGNUP = `${API_URL}/auth/signup`;
export const LOGOUT = `${API_URL}/auth/logout`;
export const VERIFY_EMAIL = `${API_URL}/auth/verifyToken`;
export const ADD_COMPANY = `${API_URL}/company/create`;
export const VIEW_COMPANY = `${API_URL}/company/get`;
export const UPDATE_COMPANY = `${API_URL}/company/`;
export const ADD_VOTER = `${API_URL}/voter/create`;
export const VIEW_VOTER = `${API_URL}/voter/get`;
export const UPDATE_VOTER = `${API_URL}/voter/get/`;
export const CREATE_MEETING = `${API_URL}/meeting/create`;
export const VIEW_MEETING = `${API_URL}/meeting/get`;
export const UPDATE_MEETING = `${API_URL}/meeting/`;
export const HEALTH = `${API_URL}/health`;
export const RP_CREATE = `${API_URL}/rp/create`;
export const UPDATE_RP = `${API_URL}/rp/`;
export const VIEW_RP = `${API_URL}/rp/get`;
export const AR_CREATE = `${API_URL}/ar/create`;
export const VIEW_AR = `${API_URL}/ar/get`;
export const UPDATE_AR = `${API_URL}/ar/`;
