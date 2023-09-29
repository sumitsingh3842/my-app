import axios from 'axios';
export async function createOrganisation(data) {
  const idToken=sessionStorage.getItem('idToken');
  const options = {
    method: 'POST',
    url: 'https://5m1no7sqj9.execute-api.us-east-1.amazonaws.com/dev/create-organisation',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${idToken}`
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
