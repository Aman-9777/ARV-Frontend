import * as ENDPOINT from "../utils/endpoints";
import { toast } from "react-toastify";

const fetchApi = async (url, method = "GET", data = null, authToken = null) => {
  //  console.log('fetch', data)
  //  console.log('fetch Token', authToken)
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": authToken,
    },
  };

  if (method !== "GET" && data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    const responseData = await response.json();
    console.log(responseData.error);
    if (!response.ok) {
      toast.error(responseData.message);
    } else {
      toast.success(responseData.message);
    }
    return responseData;
  } catch (error) {
    toast.error("Server is not responding. Please try again.");
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

// AUTH
export const login = async (data) => {
  // console.log(data);
  try {
    return await fetchApi(ENDPOINT.LOGIN, "POST", data);
  } catch (error) {
    throw error;
  }
};
export const healthCheck = async () => {
  console.log("ENDPOINT.HEALTH", ENDPOINT.HEALTH);
  try {
    return await fetchApi(ENDPOINT.HEALTH, "GET");
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
  try {
    return await fetchApi(ENDPOINT.SIGNUP, "POST", data);
  } catch (error) {
    throw error;
  }
};
export const logout = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.LOGOUT, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const verifyEmail = async (token) => {
  try {
    const endpoint = `${ENDPOINT.VERIFY_EMAIL}?token=${token}`;
    return await fetchApi(endpoint, "GET");
  } catch (error) {
    throw error;
  }
};
//Company List
export const addCompany = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.ADD_COMPANY, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const getCompany = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.VIEW_COMPANY, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const updateCompany = async (companyId, data, authToken) => {
  try {
    const endpoint = `${ENDPOINT.UPDATE_COMPANY + companyId}`;
    return await fetchApi(endpoint, "PATCH", data, authToken);
  } catch (error) {
    throw error;
  }
};
//Voter List
export const addVoter = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.ADD_VOTER, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const getVoter = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.VIEW_VOTER, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const updateVoter = async (voterID, data, authToken) => {
  try {
    const endpoint = `${ENDPOINT.UPDATE_VOTER + voterID}`;
    return await fetchApi(endpoint, "PATCH", data, authToken);
  } catch (error) {
    throw error;
  }
};
//Meeting List
export const createMeeting = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.CREATE_MEETING, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const getMeetings = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.VIEW_MEETING, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const updateMeeting = async (meetingId, data, authToken) => {
  try {
    const endpoint = `${ENDPOINT.UPDATE_MEETING + meetingId}`;
    return await fetchApi(endpoint, "PATCH", data, authToken);
  } catch (error) {
    throw error;
  }
};
//RP Create

export const rpCreate = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.RP_CREATE, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const getRp = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.VIEW_RP, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
//AR Create

export const arCreate = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.AR_CREATE, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
export const getAr = async (data, authToken) => {
  try {
    return await fetchApi(ENDPOINT.VIEW_AR, "POST", data, authToken);
  } catch (error) {
    throw error;
  }
};
