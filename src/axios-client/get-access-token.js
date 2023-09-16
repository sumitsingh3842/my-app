import axios from 'axios';
export async function getAccessToken() {
  const options = {
    method: 'POST',
    url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/oauth/token',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      client_id: 'xeJwQ7RJqILXCxRukyPDact9qQs6ATyl',
      client_secret: 'K1eQcMcyFnvaItOy73_gO2Exkc79QbxbzgIYMiahGhs9gNvLD3vDCAy7zQuPvFnH',
      audience: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/',
      grant_type: 'client_credentials',
    },
  };

  try {
    const axiosResp = await axios(options);
    const response = {
      isError: false,
      accessToken: axiosResp.data?.access_token,
    };
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return {
      isError: true,
      error: error.message,
    };
  }
}
