import { Link } from 'react-router';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className="home-inner">
        <p className='home-text italic'>Hello!</p>
        <p className='home-text'>
          I love creating beautiful and functional web applications. Check out my
          <Link to="/projects" className="home-link"> projects </Link>
          and feel free to reach out if you want to collaborate or just say hi!
        </p>
      </div>
    </div>
  )
}