
import Image from 'next/image';
import './motto.css';

const Motto = () => {
  return (
    <div className="motto-wrapper">
      <div className="motto-bgContainer">
        <div className="overlayWrapper"></div>
        <Image
          src={`/images/motto-bg.jpg`}
          width={1500}
          height={1500}
          alt="macbook"
          className="mottoBG"
        />
      </div>
      <div className="motto-sectionName">My Motto</div>
      <h2 className="mottoWords">
        First, solve the problem.
        <br /> Then, write the code.
      </h2>
      <p className="mottoAuthor">John Johnson</p>
    </div>
  );
}

export default Motto 