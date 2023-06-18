import { api } from "./baseApi";

const PIPE_ID = 303335871

export const pipefyService = {
  auth: async () => {
    try {
      const response = await api.get(`api/pipefy/auth`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getAllCards: async (pipeId=PIPE_ID) => {
    try {
      const response = await api.get(`api/pipefy/card/get?pipeId=${pipeId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getCardByOrderId: async (pipeId=PIPE_ID, orderId="5678") => {
    try {
      const response = await api.get(`api/pipefy/card/get/byOrderId?pipeId=${pipeId}&orderId=${orderId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  createNewCard: async (pipeId=PIPE_ID) => {
    try {
      const response = await api.post(`api/pipefy/card/post?pipeId=${pipeId}`, {
        title: "New Title",
        category: "Rede",
        orderId: "0909",
        description: "Minha descrição",
        user: "728799370"
      });
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
