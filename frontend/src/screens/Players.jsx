import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPlayers } from '../services/player'
import { Link, useNavigate } from 'react-router-dom'


export function Players() {
    
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

    
    return (
    <>

        <Navbar />

        <h2 className='page-header'>Players</h2>
        <div className='row mt-5'style={{ marginLeft: "120px"}}>
             
             {players.map((player, index) => (
            
            <div class="card col-5 me-5 mb-5 h-100 image">
              <Link to={`/playerDetails/${player.id}`} >
                <img src="..." class="card-img-top" alt="..." width="100" height="300" />
              </Link>
                <div class="card-body">
             <h5 class="card-title">{player.name}</h5>
             <p class="card-text">{player.about}</p>
                </div>
                
              </div>
            
        )

        )}
        </div>
                

        <Footer />
        
    </>
    )
}

export default Players