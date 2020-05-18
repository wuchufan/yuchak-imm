import axios from 'axios';

export const sendContact = async (payload) =>{
  const config = {
    'Content-Type':'application/json'
  }

  try{
    const res = await axios.post('/api/email/contact', payload, config);
    return `Success! data sent as ${JSON.stringify(res.data)}`

  } catch(err){
    return err.response;
  }
}


export const sendEvaluation = async (payload)=>{
  const config = {
    'Content-Type':'application/json'
  }

  try{

    const res = await axios.post('/api/email/evaluation',payload,config);

    return `Success! data sent as ${JSON.stringify(res.data)}`;


  } catch(err){
    return err.response
  }
}
