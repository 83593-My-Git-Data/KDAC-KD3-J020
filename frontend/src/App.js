import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import Schedule from './screens/Schedule'
import AdminDashboard from './screens/AdminDashboard'
import ClientDashboard from './screens/ClientDashboard'
import Players from './screens/Players'
import Tournament from './screens/Tournament'
import Clients from './screens/Clients'
import Auction from './screens/Auction'
import EditAboutUs from './screens/EditAboutUs'
import ManageTournament from './screens/ManageTournament'
import ManageSchedule from './screens/ManageSchedule'
import ManagePlayers from './screens/ManagePlayers'
import ManageAuction from './screens/ManageAuction'
import AttendAuction from './screens/AttendAuction'
import ViewSchedule from './screens/ViewSchedule'
import PlayerDetails from './screens/PlayerDetails'
import AddPlayers from './screens/AddPlayers'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/clientDashboard" element={<ClientDashboard />} />
        <Route path="/players" element={<Players />} />
        <Route path='add-players' element={<AddPlayers />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/editAboutUs" element={<EditAboutUs />} />
        <Route path="/manageTournament" element={<ManageTournament />} />
        <Route path="/manageSchedule" element={<ManageSchedule />} />
        <Route path="/managePlayers" element={<ManagePlayers />} />
        <Route path="/manageAuction" element={<ManageAuction />} />
        <Route path="/attendAuction" element={<AttendAuction />} />
        <Route path="/viewSchedule" element={<ViewSchedule />} />
        <Route path="/playerDetails/:id" element={<PlayerDetails />} />
        

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
