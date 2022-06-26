/**
 * Helper function for setting JWT to
 * x-access-token header.
 * @param {string} token
 * @returns {{'x-access-token': string}} Header with JWT set.
 */
 export const setJWT = (token) => ({ 'x-access-token': token });
