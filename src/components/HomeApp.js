import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './NavbarApp/NavbarApp';
import Slider from './Slider/Slider';
import Text from './Textinfo/Text';
import Tarjeta from './Cards/Tarjeta';
import Footer from './Footer/Footer';
import Copy from './Footer/Copy';
import imge1 from '../components/img/fall.jpg';
import imge2 from '../components/img/gen.jpg';
import imge3 from '../components/img/dios.jpg';
import { Route, Routes } from 'react-router-dom';

function HomeApp() {
  return (
    <div className="HomeApp">
      
      <Slider></Slider>
      <Text/>
      <Tarjeta src={imge1} title='Fall Guys' text='En un enfrentamiento todos contra todos que se desarrolla ronda tras ronda entre un caos creciente hasta que solo queda un único ...'/>
      <Tarjeta src={imge2} title='Genshin Impact' text=' Es un videojuego de rol de acción de mundo abierto y gratuito, con una mecánica de monetización de Gacha para conseguir elementos adicionales como personajes especiales y armas.'/>
      <Tarjeta src={imge3} title='God Of War' text=' God of War es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment (SCE).'/>
      <Footer/>
      <Copy/>
    </div>
  );
}

export default HomeApp;