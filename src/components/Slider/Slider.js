import Carousel from 'react-bootstrap/Carousel';
import Img1 from './mine.jpg'
import Image2 from './fifa.jpg'
import Image3 from './call.jpg'
import './slider.css';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block imgslider"
          src={Img1}
        />
        <Carousel.Caption>
          <h3 className='titul'>MINECRAFT</h3>
          <p className='parraf'>
          Explora MineCraft y crea tu propio mundo pelao
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgslider"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='titul'>FIFA</h3>
          <p className='parraf'>Juega con tus amigos al fifa  y diviertete metiendo goles pelele</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgslider"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='titul'>CALL OF DUTY</h3>
          <p className='parraf'>
           Date bala con tus socios y diviertete sabiendo quien es mas gamin que el otro.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;