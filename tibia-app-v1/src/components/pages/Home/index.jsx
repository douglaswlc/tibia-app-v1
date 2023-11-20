import { Link } from 'react-router-dom';
import './styles.css';
import characterTibia from '/img/character-tibia.png';
import demonTibia from '/img/demon2.webp';

function Home() {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
          <Link to='/characters'>
            <img src={characterTibia} className='logo' alt='Character logo' />
          </Link>
          <Link to='/characters'>
            <h3>Search character</h3>
          </Link>
        </div>

        <div className='card'>
          <Link to='/monsters'>
            <img src={demonTibia} className='logo monster' alt='Monster logo' />
          </Link>
          <Link to='/monsters'>
            <h3>Search monster</h3>
          </Link>
        </div>
      </div>

      <p className='read-the-docs'>Click on the character or monster to search</p>
    </>
  );
}

export default Home;
