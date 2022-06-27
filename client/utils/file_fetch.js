import {BASE_URL} from "./api";

/**
 * 
 * @param {string} path for geting IOS Mobile FIle path
 * @returns IOS file path
 */
export const extractFilename = (path) => path.replace(/^.*[\\\/]/, '');
/**
 * 
 * @param {string} filename 
 * @returns filename with out path and other charector 
 */
export const extractFileExt = (filename) => filename.split('.').pop();

export const extractFileData = (file) => {
  let localUri = file.uri;
  let filename = localUri.split('/').pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  return {
    uri: localUri,
    name: filename,
    type,
  };
};

export const handleFetch = async (url, options = {}, nested) => {
  try {
    const resp = await fetch(BASE_URL + url, options);

    if (resp.status >= 500) {
      throw new Error('Error, Not Valid Request: ' + resp.status);
    }

    const json = await resp.json();
    if (resp.ok) {
      if (nested) {
        if (!(json instanceof Array)) throw new Error(`Response can not be mapped.`);
        return await Promise.all(json.map(nested));
      }
      return json;
    } else {
      const message = json.error ? `${json.message}: ${json.error}` : json.message;
      throw new Error(message || resp.statusText);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
