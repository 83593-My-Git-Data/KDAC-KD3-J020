import Navbar from '../components/navbar'
import Footer from '../components/footer'
import messi from "../images/messi.jpg";
import lau from "../images/lautaro.jpg";
import ronaldo from "../images/ronaldo.jpg";
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
    <Link to={`/playerDetails/${1}`} >
      <img src={messi} class="card-img-top" alt="..." width="100" height="300"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">Lionel Messi</h5>
        <p class="card-text">Argentine professional footballer who plays as a forward for, Has won a record eight Ballon d'Or awards, a record six European Golden Shoes</p>
      </div>
    </div>
    
  </div>
  <div class="col">
  <div class="card h-100 image">
  <Link to={`/playerDetails/${2}`} >
      <img src={ronaldo} class="card-img-top" alt="..." width="100" height="300" />
    </Link>
      <div class="card-body">
        <h5 class="card-title">Cristiano Ronaldo</h5>
        <p class="card-text">Portuguese professional footballer who plays. He has won 33 trophies in his career, including seven league titles, five UEFA Champions Leagues</p>
      </div>
      
    </div>
  </div>
  <div class="col">
  <div class="card h-100 image">
    <Link to={`/playerDetails/${3}`} >
      <img src={lau} class="card-img-top" alt="..." width="100" height="300" />
    </Link>
      <div class="card-body">
        <h5 class="card-title">Lautaro Javier</h5>
        <p class="card-text">plays as a striker for Serie A club Inter Milan, which he captains, and the Argentina national team. Regarded as one of the best strikers in the world,
         Martínez is known for his work rate, positioning inside the box, link play, and finishing.</p>
      </div>
      
    </div>
  </div>
</div>

      <a className="more" href="/players"><h5>Click for more....</h5></a>  
      
      <h1 className='page-header'>Upcoming Tournaments</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"> 
  
    <div class="card h-100 image">
    
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
   
      <div class="card-body">
        <h5 class="card-title">Tournament 1</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
  </div>
  <div class="col">
  <div class="card h-100 image">
 
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
   
      <div class="card-body">
        <h5 class="card-title">Tournament 2</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
  <div class="card h-100 image">
  
      <img src={Tournament} class="card-img-top" alt="..." width="100" height="300"/>
    
      <div class="card-body">
        <h5 class="card-title">Tournament 3</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
      <Footer />     
    </div>

    
  )
}

export default Home
