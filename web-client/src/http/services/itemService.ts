import axios, { AxiosError } from 'axios';

import { ItemService, SearchResult, ItemResult } from '../../domain/services';
import { HttpError, ErrorCode } from '../../domain/error';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function buildHttpError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<HttpError>;

    if (axiosError.response) {
      const { errorCode, errorMessage } = axiosError.response.data;

      return new HttpError(errorCode, errorMessage);
    }

    if (error.request) {
      return new HttpError(ErrorCode.SOCKET_ERROR, 'Network problems');
    }
  }

  return new HttpError(ErrorCode.UNKNOWN_ERROR, 'Something unexpected happened');
}

export const itemService: ItemService = {
  async searchItems(query: string) {
    try {
      const response = await api.get<SearchResult>(`/api/items?search=${query}`);

      return response.data;
    } catch (error) {
      throw buildHttpError(error);
    }
  },
  async getItemById(id: string) {
    try {
      const response = await api.get<ItemResult>(`/api/items/${id}`);

      return response.data;
    } catch (error) {
      throw buildHttpError(error);
    }
  },
};
