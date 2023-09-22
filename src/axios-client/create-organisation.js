import axios from 'axios';
export async function createOrganisation(data) {
  const accessToken=sessionStorage.getItem('accessToken');
  const options = {
    method: 'POST',
    url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/api/v2/organizations',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
    },
    data
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
      isError:true,
      data:''
    }
    return response;
  }
}
