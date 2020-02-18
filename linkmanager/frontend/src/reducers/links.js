import { GET_LINKS } from "../actions/types.js";

const initialState = {
  links: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_LINKS":
      return {
        ...state,
        links: action.payload
      };
    case "DELETE_LINK":
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    default:
      return state;
  }
}
