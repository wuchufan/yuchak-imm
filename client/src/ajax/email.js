import axios from 'axios';

export const sendEmail = async (payload) =>{
  const config = {
    'Content-Type':'application/json'
  }

  try{
    const res = await axios.post('/api/email', payload, config);
    return `Success! data sent as ${JSON.stringify(res.data)}`
    // console.log(res.data);
  } catch(err){
    return `Fail! error is ${err}`
  }
}
