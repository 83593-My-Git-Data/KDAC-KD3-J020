import Navbar from '../components/adminNavbar'
import Footer from '../components/footer'
import Auction from "../images/auction.jpg";
import ManageSchedule from "../images/schedule.jpg";
import ManageTournament from "../images/tournament.jpg";
import { Link } from 'react-router-dom'

export function AdminDashboard() {
    return (
    <>

        <Navbar />
        <br></br>
        <br></br>
        
    <div class="card bg-dark text-white image" >
       
    <Link to='/auction' >
      <img src={Auction} class="card-img-top" alt="..." width="80" height="300"/>
    
            <div class="card-img-overlay">
            <h2 class="card-title">Manage Auction</h2>
            </div>
    </Link>       
    </div>

        <br></br>
        <br></br>

    <div class="card bg-dark text-white image" >
       
    <Link to='/manageTournament' >
      <img src={ManageTournament} class="card-img-top" alt="..." width="80" height="300"/>
    
            <div class="card-img-overlay">
            <h2 class="card-title">Manage Tournaments</h2>
            </div>
    </Link>       
    </div>

        <br></br>
        <br></br>

    <div class="card bg-dark text-white image" >
       
    <Link to='/manageSchedule' >
      <img src={ManageSchedule} class="card-img-top" alt="..." width="80" height="300"/>
    
            <div class="card-img-overlay">
            <h2 class="card-title">Manage Schedule</h2>
            </div>
    </Link>       
    </div>

        <br></br>
        <br></br>

        <Footer />
    </>
    )
}

export default AdminDashboard