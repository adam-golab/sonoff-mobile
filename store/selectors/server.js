import config from '../../config';

export const getServerUrl = state => state.server.url ? state.server.url : config.API_URL;
