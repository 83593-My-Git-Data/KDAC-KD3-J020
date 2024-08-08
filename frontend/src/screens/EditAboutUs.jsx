import Navbar from '../components/adminNavbar'
import Footer from '../components/footer'

export function EditAboutUs() {
    return (
    <>

        <Navbar />

        <h1 className='page-header'>About Us</h1>

          <p>
              A web application to manage the auction of football players and to manage the
              tournament. The auction of players will be carried in presence of authorized
              clients, who will bid for players to form their team.
          </p>
          <p>
              After team are formed, the application will generate the schedule for football
              tournament.
          </p>
          <p>
              In this application there are 3 type of user : Admin, Authorized Clients, Viewers.
          </p>
          <p>
              1) Admin can manage auction, manage clients, manage tournaments, manage players
                 and create schedule of tournaments.
              2) Authorized clients will be responsible for team formation. The auction of players
                 will be carried in presence of authorized clients
              3) Viewers can view schedules of tournaments, players and teams.
          </p>
      

        <Footer />
    </>
    )
}

export default EditAboutUs