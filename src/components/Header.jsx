import { Link, useLocation } from 'react-router';
import './Header.css';

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className='header'>
      <div className="header-inner">
        <h1 className='heading'>Elena Tropanets</h1>
        <h2 className='subheading'>frontend developer</h2>
        <nav>
          <ul className='nav-list'>
            {navList.map((item, index) => {
              const isActive = pathname === item.path;
              const className = isActive ? 'nav-list-item active' : 'nav-list-item';
              return (
                <li key={index} className={className}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}