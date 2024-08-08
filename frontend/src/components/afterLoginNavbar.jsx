import { Link } from 'react-router-dom'
import Icon from "../images/icon.jpg";

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
        <img src={Icon} alt="Icon" width="80" height="100" />
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='/clientDashboard'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/attendAuction'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Attend Auction
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/viewSchedule'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Schedule
              </Link>
            </li>
            
          </ul>

            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
        
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
            </li>
          
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
