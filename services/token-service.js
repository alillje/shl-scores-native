/** 
 * Token service module
 * Version (1.0.0)
 */
import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, API_AUTH_URL } from '@env';

/** 
 * Gets an access token fron the auth API 
 */
export async function getToken() {
    try {

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: {
        client_id: String(CLIENT_ID),
        client_secret: String(CLIENT_SECRET)
      },
      url: String(API_AUTH_URL)
    };
    // THIS IS WHERE THE ERROR OCCURS
    const response = await axios(options)

    if (response.status !== 200) {      
        const error = new Error('Response error. Code: ' + response.status)
        throw error
    }

    
    return response.data.access_token

  } catch (error) {
    return Promise.reject(error)
  }
}
