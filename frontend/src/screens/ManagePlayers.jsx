import Navbar from '../components/adminNavbar'
import Footer from '../components/footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPlayers } from '../services/player'
import { Link, useNavigate } from 'react-router-dom'
import { config } from '../services/config'


export function ManagePlayers() {
    
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()
    
    const loadPlayers = async () => {
        const result = await getAllPlayers()
       if (result){
        console.log(result.data)
           setPlayers(result['data'])
           
       }
     
    }
    
    useEffect(() => {
       
        loadPlayers();
    }, [])

    const onDelete = (index) => {
        players.splice(index, 1)
        setPlayers([...players])
      }
    
      const onUpdate = (index) => {
        navigate('/update-player')
      }
    
    return (
    <>

        <Navbar />

        <h2 className='page-header'>Manage Players</h2>
        
      <Link to='/add-players' className='btn btn-primary'>
        Add Player
      </Link>    
             
            
            <table className='table table-striped'>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>About</th>
              <th>Age</th>
              <th>Base Price</th>
              <th>Current Price</th>
              <th>Bid Price</th>
            </tr>
          </thead>
          
          <tbody>
          {players.map((player, index) => (
              <tr>
             
                  <td>{index + 1}</td>
                  <td><img
                      style={{ width: 100, height: 100 }}
                      src={`${config.serverUrl}/image/${player.image}`}
                      alt=''
                    /></td>
                  <td>{player.name}</td>
                  <td>{player.about}</td>
                  <td>{player.playerAge}</td>
                  <td>{player.basePrice}</td>
                  <td>{player.currentPrice}</td>
                  <td>{player.bidPrice}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDelete(index)
                      }}
                      className='btn btn-danger bt-sm me-2'
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        onUpdate(index)
                      }}
                      className='btn btn-primary bt-sm'
                    >
                      update
                    </button>
                  </td>
                  
              </tr>
              )

              )}
          </tbody>
          
          </table>
            
        
        
                

        <Footer />
        
    </>
    )
}

export default ManagePlayers