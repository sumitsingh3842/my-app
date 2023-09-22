import axios from 'axios';
export async function createPermissions(orgId,orgName) {
  const accessToken=sessionStorage.getItem('accessToken')  
  const options = {
    method: 'PATCH',
    url: `https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/resource-servers/6506f968e83cea86ff39d630`,
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
    },
    data: {
        scopes: [
          {value: `${orgId}:admin_permission`, description: `${orgName} Admin Permission`},
          {value:`${orgId}:user_permission`, description: `${orgName} User Permission`}
        ]
      }
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
