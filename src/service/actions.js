import { SEARCH_VALUE } from "../service/constants";

export const search_value = (value) => {
  return {
    type: SEARCH_VALUE,
    search_val: value,
  };
};
