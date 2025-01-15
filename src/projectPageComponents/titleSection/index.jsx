import './titleSection.css';

const TitleSection = ({ title, red}) => {
  const splittedTitle = title?.split(red) ?? ['', '']
  return (
    <div className='titleSection-wrapper'>
        <p className="title-section-label">PROJECT TITLE</p>
        <p className="projectTitle">{splittedTitle[0] && splittedTitle[0]} <span className='red'>{red}</span> {splittedTitle[1]}</p>
    </div>
  )
}

export default TitleSection