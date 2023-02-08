import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const getCommentList = async (boardId) => {
  try {
    const response = await axiosInstance.get(PATH.BOARD + boardId + PATH.COMMENT_LIST);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (data, boardId) => {
  try {
    const response = await axiosInstance.post(PATH.BOARD + boardId + PATH.COMMENT_INSERT, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateComment = async (data, boardId, id) => {
  try {
    const response = await axiosInstance.patch(
      PATH.BOARD + boardId + PATH.COMMENT_UPDATE + id,
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (boardId, id) => {
  try {
    const response = await axiosInstance.delete(PATH.BOARD + boardId + PATH.COMMENT_DELETE + id);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
