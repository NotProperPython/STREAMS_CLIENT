import _ from "lodash";

import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    case DELETE_STREAM:
      return _.omit(state, payload);

    default:
      return state;
  }
};
