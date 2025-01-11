
import TextRevealByWord from '../textRevealByWord';
import './clients.css';

const Clients = () => {
  return (
    <div className='clients-wrapper'>
        <div className="clients-content-wrapper">
        <p className="clients-section-name">Clients</p>
        <TextRevealByWord
            text="I collaborated with some of the most innovative tech leaders to develop software solutions that drive impact."
            className="clients-overlayText"
            section="clients"
        />
        </div>
    </div>
  )
}

export default Clients