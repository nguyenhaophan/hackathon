import axios from 'axios';

export const BASE_URL = 'https://';
export const client = axios;

/**
 * Create API url for connection
 * @param {string} route API 
 * @param {string} param URL parameter (optional)
 */
const BuildUrl = (route, param) => {
  let URL = `${BASE_URL}/${route}`;
  return param ? `${URL}/${param}` : URL;
};


export const routes = {
  auth: {
    /**
     * Login User. No Authondication needed
     * @method POST
     */
    login: BuildUrl('login'),
  },
  user: {
    /**
     * Check if username is in use. No Authondication needed
     * @method GET
     * @param {string} username
     */
    nameExists: (username) => BuildUrl('users/username', username),

    /**
     * Create new user. No Authondication needed
     * @method POST
     */
    create: BuildUrl('users'),

    /**
     * Modify existing user values.
     * Token Authondication Needed 
     * @method PUT
     * @param {number} id
     */
    modify: BuildUrl('modify-user'),

    /**
     * Get user info by id.
     * Token Authondication Needed 
     * @method GET
     * @param {number} id.
     */
    info: (id) => BuildUrl('users', id),
  },
  task: {
    /**
     * Request the task info for specified userd id.
    * Token Authondication Needed 
    * @url tasks/mobiletest
     * @method GET
     * @param {string} id .
     */
    allTask: (id) => BuildUrl('tasks/mobiletest', id),
  },
  /**
   * File Upload
   */
  uploads: {
     /**
     * Upload Task realated files and doc.
     * Token Authondication Needed 
     * multipart/form-data
     * @method POST
     */
      updateTask: BuildUrl('task-upload-file'),
  },
  /**
   * comment control and handle
   */
  comment: {
    /**
     * Delete user's comment.
     * Token Authondication Needed 
     * @method DELETE
     * @param {number} id comment id.
     */
    delete: (id) => BuildUrl('comments', id),

    /**
     * Post new comment.
     * Token Authondication Needed 
     * @method POST
     */
    post: BuildUrl('create-comments'),

    /**
     * Get all comments by current user.
     * Token Authondication Needed 
     * @method PUT
     */
    byUser: BuildUrl('update-comments'),

    /**
     * Get all comments posted to task id.
     * Token Authondication Needed 
     * @method GET
     * @param {number} id task id.
     */
     getAllCommentByTaskId: (id) => BuildUrl('comments/taskid', id),
  },
  
};
