import Navbar from '../components/afterLoginNavbar'
import Footer from '../components/footer'
import { Link } from "react-router-dom"
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPlayers } from '../services/player'

export function AttendAuction() {
  const [bidPrice, setBidPrice] = useState('')
    const [players, setPlayers] = useState([])

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

        
            <h2 className='page-header'>Set your Bidding prize</h2>
            <div className='row mt-5' style={{ marginLeft: "120px"}}>
             
            {players.map((players, index) => (

            <div class="card col-5 me-5 mb-5" style={{width: '18rem'}} key={index}>
            <img 
            src={`${players.image}`}
            class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{players.name}</h5>
                 <p class="card-text">{players.about}</p>
            </div>
            <ul class="list-group list-group-flush">
        <li class="list-group-item">Base Price : {players.basePrice}</li>
              <li class="list-group-item">Current Bided Price : {players.bidePrice}</li>
              <li class="list-group-item">Bid : 
              <input
                onChange={(e) => setBidPrice(e.target.value)}
                type='number'
                
              />
              </li>
            </ul>
          </div>
        )

        )}
           </div> 
        
        <Footer />
        
    </>
    )
}

export default AttendAuction