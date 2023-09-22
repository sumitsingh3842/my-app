import axios from 'axios';
export async function createAdminRole(orgName) {
  const accessToken=sessionStorage.getItem('accessToken')  
  const options = {
    method: 'POST',
    url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/roles',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
    },
    data:{
        "name": `${orgName} Admin Role`,
        "description": "string"
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
export async function createUserRole(orgName) {
    const accessToken=sessionStorage.getItem('accessToken')
    const options = {
      method: 'POST',
      url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/roles',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        "Authorization":`Bearer ${accessToken}`
      },
      data:{
        "name": `${orgName} User Role`,
          "description": "User Role for the Organisation"
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
