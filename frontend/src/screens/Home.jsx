import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Player from "../images/player.jpg";
import Tournament from "../images/tournament.jpg";
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Navbar />

      <h1 className='page-header'>Players</h1>
      
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"> 
  
    <div class="card h-100 image">
    <Link to='/players' >
      <img src={Player} class="card-img-top" alt="..." width="100" height="300"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">Player 1</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
  </div>
  <div class="col">
  <div class="card h-100 image">
    <Link to='/players' >
      <img src={Player} class="card-img-top" alt="..." width="100" height="300" />
    </Link>
      <div class="card-body">
        <h5 class="card-title">Player 2</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
  <div class="card h-100 image">
    <Link to='/players' >
      <img src={Player} class="card-img-top" alt="..." width="100" height="300" />
    </Link>
      <div class="card-body">
        <h5 class="card-title">Player 3</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>

      <a className="more" href="/players"><h5>Click for more....</h5></a>  
      
      <h1 className='page-header'>Upcoming Tournaments</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"> 
  
    <div class="card h-100 image">
    <Link to='/tournament' >
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">Tournament 1</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
  </div>
  <div class="col">
  <div class="card h-100 image">
  <Link to='/tournament' >
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">Tournament 2</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
  <div class="card h-100 image">
  <Link to='/tournament' >
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">Tournament 3</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
  <a className="more" href="/tournament"><h6>Click for more....</h6></a>  
      <Footer />     
    </div>

    
  )
}

export default Home
