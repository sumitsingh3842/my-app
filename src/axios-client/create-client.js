import axios from 'axios';
export async function createClient(orgId,userIds) {
  const accessToken=sessionStorage.getItem('accessToken');
  const options = {
    method: 'POST',
    url: `https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/clients`,
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
    },
    data:{
        "name": "My App",
        "app_type": "regular_web",
        "is_first_party": true,
        "oidc_conformant": true,
        "jwt_configuration": {
            "alg": "RS256",
            "lifetime_in_seconds": 36000
        },
        "token_endpoint_auth_method": "client_secret_post"
    }
  };

  try {
    const axiosResp = await axios(options);
    console.log(axiosResp);
    const response={
      isError:false,
      data:axiosResp.data
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
