import { SEARCH_VALUE } from "../service/constants";

const initialVal = {
  search_value: "",
};

export const reducer = (state = initialVal, action) => {
  //console.log("action.search_val", action.search_val);
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        search_value: action.search_val,
      };

    default:
      return state;
  }
};
