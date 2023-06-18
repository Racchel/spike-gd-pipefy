import { api } from "./baseApi";

export const pipefyService = {
  auth: async () => {
    try {
      const response = await api.get(`api/pipefy/auth`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getAllCards: async () => {
    try {
      const response = await api.get(`api/pipefy/card/get`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getCardById: async () => {
    try {
      const response = await api.get(`api/pipefy/card/get/byId`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};
