import axios from 'axios'
import { config } from './config'

export async function registerUser(name,phoneNo, emailId, password,confirmPassword,role,teamName) {
  const body = {name,phoneNo, emailId, password,confirmPassword,role,teamName}
  try {
    const response = await axios.post(`${config.serverUrl}/user/register`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }

  return null;
}

export async function login(emailId, password, role) {
  const body = { emailId, password, role }
  console.log("inadmin"+ emailId + password + role)
  try {
    const response = await axios.post(`${config.serverUrl}/user/login`, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  
}
  export async function addTournament(team1, team2) {
    const body = { team1, team2 }
    try {
      const response = await axios.post(`${config.serverUrl}/admin/addTournament`, body)
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  
    return null

}

export async function getAllUsers(){

  try {
      const response = await axios.get(`${config.serverUrl}/user/usersList`, {
       
      })
      console.log(response)
      return response
    } catch (ex) {
      console.log(`exception: `, ex)
    }

}
