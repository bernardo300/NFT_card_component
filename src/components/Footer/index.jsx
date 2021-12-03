import './style.css'
const Footer = (props) =>{
  const {author} = props;
  return(
    <div className="footer">
      Challenge by 
      <a 
        href="https://www.frontendmentor.io?ref=challenge" 
        target="_blank"
        rel="noreferrer"> Frontend Mentor.</a> 
        Coded by 
      <a
        href="https://github.com/bernardo300" 
        target="_blank" 
        rel="noreferrer" > {author}</a>
    </div>
  )
}

export default Footer;