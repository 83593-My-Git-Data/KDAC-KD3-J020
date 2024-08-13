import Navbar from '../components/adminNavbar'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllUsers } from '../services/user'

export function Clients() {

    const [clients, setClients] = useState([])
    const navigate = useNavigate()

    const loadClients = async () => {
        const result = await getAllUsers()
        if (result){
            console.log(result.data)
            setClients(result['data'])
        }
    }

    useEffect(() => {
        loadClients();
    })

    const onDelete = (index) => {
        clients.splice(index, 1)
        setClients([...clients])
      }
    
    return (
    <>

        <Navbar />

        <h3>Client List</h3>


      

        <Footer />

    </>
    )
}

export default Clients