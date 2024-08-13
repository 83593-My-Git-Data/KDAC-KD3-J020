import { useDispatch } from 'react-redux'
import { config } from '../services/config'
import Player1 from "../images/messi.jpg";
import Player2 from "../images/pedri.jpg";
import Player3 from "../images/ronaldo.jpg";


export function Player({ player, onClick }) {
  const dispatch = useDispatch()

  return (
    <div className='col-3'>
      <div className='card'>
        <img
          onClick={onClick}
          style={{ height: 200, cursor: 'pointer' }}
          src={Player1}
          className='card-img-top'
          alt=''
        />
        <div className='card-body'>
          <h5 style={{ fontWeight: 'bold' }} className='card-title'>
            
          </h5>
          <div className='card-text'>
            <span style={{ fontWeight: 'bold', fontSize: 18 }}>
              ₹{player['bidPrise']}
            </span>{' '}
            night
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
