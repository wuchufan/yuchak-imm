import axios from 'axios';

export const sendContact = async (payload) =>{
  const config = {
    'Content-Type':'application/json'
  }

  try{
    const res = await axios.post('/api/email/contact', payload, config);
    return `Success! data sent as ${JSON.stringify(res.data)}`

  } catch(err){
    return `Fail! error is ${err}`;
  }
}
