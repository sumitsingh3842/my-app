import axios from 'axios';
export async function getAllChats() {
  const integrationId='123'  
  const accessToken=sessionStorage.getItem('idToken');
  const options = {
    method: 'GET',
    url: `https://5m1no7sqj9.execute-api.us-east-1.amazonaws.com/dev/get-all-chats?integrationId=${integrationId}`,
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization":`Bearer ${accessToken}`
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
      isError:true,
      data:[]
    }
    return response;
  }
}
