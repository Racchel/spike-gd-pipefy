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
  getAllCards: async (pipeId="303335871") => {
    try {
      const response = await api.get(`api/pipefy/card/get?pipeId=${pipeId}`);
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
