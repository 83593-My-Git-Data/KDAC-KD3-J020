import axios from 'axios'
import { config } from './config'

export async function getAllPlayers(){

    try {
        const response = await axios.get(`${config.serverUrl}/playersList`, {
         
        })
        console.log(response)
        return response
      } catch (ex) {
        console.log(`exception: `, ex)
      }

}

export async function getPlayerById(id){
  
  try {
      const response = await axios.get(`${config.serverUrl}/playerDetails/${id}`, {
       
      })
      console.log(response)
      return response
    } catch (ex) {
      console.log(`exception: `, ex)
    }

}

export async function addPlayers(name,about,baseprice,age,image) {
  const body = {name,about,baseprice,age,image}
  try {
    const response = await axios.post(`${config.serverUrl}/addPlayer`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }

  return null;
}


