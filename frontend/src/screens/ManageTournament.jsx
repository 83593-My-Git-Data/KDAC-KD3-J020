import Navbar from '../components/adminNavbar'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { addTournament } from '../services/user'


export function ManageTournament() {

  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [isTeam1Empty, setTeam1Empty] = useState(false)
  const [isTeam2Empty, setTeam2Empty] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isDateEmpty, setDateEmpty] = useState(false)
  const [isTimeEmpty, setTimeEmpty] = useState(false)

  
  const navigate = useNavigate()

  const onAddTournament = async () => {
    if (team1.length == 0) {
      toast.error('Please enter Team name')
    } else if (team2.length == 0) {
      toast.error('Please enter Team name')
    } else {
        const result = await addTournament(team1, team2, date, time)
        if (result['status'] == 'success') {
          toast.success('Successfully added new tournament')
          navigate('/manageTournament')
        } else {
          toast.error(result['error'])
      }
    }
  }


    return (
    <>

        <Navbar />

        <h2 className='page-header'>Manage Tournament</h2>

    <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Team 1</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setTeam1Empty(true)
                  } else {
                    setTeam1Empty(false)
                  }
                  setTeam1(e.target.value)
                }}
                type='text'
                className='form-control'
              />
              {isTeam1Empty && (
                <p style={{ color: 'red' }}>Team name is mandatory</p>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Team 2</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setTeam2Empty(true)
                  } else {
                    setTeam2Empty(false)
                  }
                  setTeam2(e.target.value)
                }}
                type='text'
                className='form-control'
              />
              {isTeam2Empty && (
                <p style={{ color: 'red' }}>Team name is mandatory</p>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Date</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setDateEmpty(true)
                  } else {
                    setDateEmpty(false)
                  }
                  setDate(e.target.value)
                }}
                type='date'
                className='form-control'
              />
              {isDateEmpty && (
                <p style={{ color: 'red' }}>Set Date</p>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Time</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setTimeEmpty(true)
                  } else {
                    setTimeEmpty(false)
                  }
                  setTime(e.target.value)
                }}
                type='time'
                className='form-control'
              />
              {isTimeEmpty && (
                <p style={{ color: 'red' }}>Set Time</p>
              )}
            </div>
            
            <div className='mb-3'>
             
              <button onClick={onAddTournament} className='btn btn-success mt-2'>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>

      

        <Footer />
    </>
    )
}

export default ManageTournament