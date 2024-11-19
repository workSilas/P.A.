import './index.scss';
import Nav from '../../Components/Nav';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    document.title = "CineVespa | Home"  // Adicionem um título intodutivo do
  },[])

  return (
    <div className="Home">
      <Nav />

    </div>
  );
}
