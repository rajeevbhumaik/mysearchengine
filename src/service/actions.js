import { SEARCH_VALUE, GET_SEARCH_DATA } from "../service/constants";

export const search_value = (value) => {
  return {
    type: SEARCH_VALUE,
    search_val: value,
  };
};
