import axios from 'axios'
import { config } from './config'

export async function register(firstName, lastName, email, password) {
  try {
    // post body
    const body = { firstName, lastName, email, password }

    // send the post request
    const response = await axios.post(
      `${config.serverUrl}/admin/register`,
      body
    )

    // return the json body from response object
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

export async function login(email, password) {
  const body = { email, password }
  try {
    const response = await axios.post(`${config.serverUrl}/admin/login`, body)
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
