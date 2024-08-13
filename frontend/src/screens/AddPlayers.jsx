import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/adminNavbar'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { addPlayers } from '../services/player'

function AddPlayers() {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [baseprice, setBaseprice] = useState('')
    const [age , setAge] = useState('')
    const [image, setImage] = useState(undefined)

    const navigate = useNavigate()

const onSave = async () => {
    if (name.length == 0) {
      toast.warn('Please enter name')
    } else if (about.length == 0) {
      toast.warn('Please enter contact about')
    } else if (baseprice.length == 0) {
      toast.warn('Please enter base price')
    } else if (!image) {
      toast.warn('Please select a player photo')
    } else {
        const result = await addPlayers(name,about,baseprice,age,image)
        console.log(name,about,baseprice,age,image);
        if (result) {
            toast.success('Successfully Added a player')
            navigate('/managePlayers')
          } else {
            toast.error(result['error'])
          }
        }
    }



    return (
        <div>

      <Navbar />

      <h2 className='page-header'>New Player</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Player Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
             <div className='mb-3'>
              <label htmlFor=''>About Player</label>
              <input
                onChange={(e) => setAbout(e.target.value)}
                type='text'
                className='form-control'
              />
            </div> 
            <div className='mb-3'>
                <label htmlFor=''>Base Price</label>
                <input
                    onChange={(e) => setBaseprice(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Age</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type='number'
                className='form-control'
              />
            </div>
            
            <div className='mb-3'>
            <label htmlFor=''>Image</label>
                <input
                 accept='image/*'
                 onChange={(e) => setImage(e.target.files[0])}
                 type='file'
                 className='form-control'
          />
            </div>
            
            <div className='mb-3'>
              <button onClick={onSave} className='btn btn-success mt-2'>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      

        </div>
    )
}

export default AddPlayers