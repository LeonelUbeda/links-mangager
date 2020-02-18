import axios from "axios";
import { GET_LINKS, DELETE_LINK } from "./types";

// GET LINKS

export const getLinks = () => dispatch => {
  axios
    .get("/api/links/")
    .then(response => {
      dispatch({
        type: GET_LINKS,
        payload: response.data
      });
    })
    .catch(error => console.log(error));
};

export const deleteLink = id => dispatch => {
  axios
    .delete(`/api/links/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_LINK,
        payload: id
      });
    })
    .catch(error => console.log(error));
};

export const createLink = link => dispatch => {
  console.log(link);
  axios
    .post(`api/links/`, link)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};
