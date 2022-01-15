import axios from 'axios';
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from './ListsAction';

//Fetch all lists
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_PROXY}/api/lists/`, {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

//Delete List
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
   await axios.delete(`${process.env.REACT_APP_BACKEND_PROXY}/api/lists/${id}`, {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};

//create Movie
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
   const res = await axios.post(`${process.env.REACT_APP_BACKEND_PROXY}/api/lists/`, list,  {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};