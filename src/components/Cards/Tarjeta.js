import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Cards/Tarjeta.css';


function Tarjeta({title,text,src}) {
  return (
    <div className='todo'>
      <div className='cards-body'>
        <div className='wrapper'>
            <div className='card'>
                <img src={src} alt="Black" />
                <div className='info'>
                    <center><h1>{title}</h1></center>
                    <p>{text}</p>
                    <a href="#" className='boton'>Detalles</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;