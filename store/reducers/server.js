import initialState from '../initialState';
import { CHANGE_SERVER } from '../actionTypes';

export default function server(state = initialState.server, action = {}) {
  switch (action.type) {
    case CHANGE_SERVER:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
}
