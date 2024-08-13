import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import { useEffect } from 'react'
import { getPlayerById } from '../services/player';
import BG from "../images/playerBG.jpg";
import { Link, useNavigate, useParams } from 'react-router-dom'


export function PlayerDetails() {

    const [players, setPlayers] = useState([])
    const { id } = useParams()
    
    const loadPlayerDetails = async () => {
        const result = await getPlayerById(id)
       if (result){
        console.log(result.data)
           setPlayers(result['data'])
           
       }
     
    }
    
    useEffect(() => {
       
        loadPlayerDetails();
    }, [])

    const navigate = useNavigate()

    return (
    <>

    <div style={{ 
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>

        <Navbar />
        <div className='container'>
    <h2 className="page-header">Players Profile</h2>
        <div className="row mt-5">
        <div className="col-3">
        <Row>
            <Col md={12}>
            
            </Col>
        </Row>
        </div>
        <div className="col">
        <Row>
            <Col md={12} style={{textAlign : "center"}}>
            <h4>{players.name}</h4>
            <img src="..." class="img-thumbnail" alt="..." />
        
            </Col>
        </Row>
        </div>
        <div className="col-3">
        <Row>
            <Col md={12}>
            <h5 >About</h5>
                <p>
                   {players.about}
                </p>
                <h8>Age : {players.playerAge}</h8>
                <p>
            <h5>Team</h5>
                {players.team}
                </p>
                
            </Col>
        </Row></div>            
            
        </div>

        </div>
      </div>
        <Footer />
      
    </>
    )
}

export default PlayerDetails