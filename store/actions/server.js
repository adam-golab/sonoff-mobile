import { CHANGE_SERVER } from '../actionTypes';

export const changeServer = url => ({
  type: CHANGE_SERVER,
  url,
});
