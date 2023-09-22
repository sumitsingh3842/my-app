import axios from 'axios';
export async function createUser(accessToken,data) {
  const options = {
    method: 'POST',
    url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/users',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
    },
    data
  };

  try {
    const axiosResp = await axios(options);
    const response={
      isError:false
    }
    return response;
  } catch (error) {
    console.error(error);
    const response={
      isError:true
    }
    return response;
  }
}
