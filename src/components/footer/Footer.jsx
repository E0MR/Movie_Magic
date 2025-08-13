import './Footer.css'

import logo from '../../assets/images/logo_.png'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt='Logo' />
      <p className='links'>
        About Us
        <br /><br />
        Contact Us
      </p>
      <p>Copyright &copy; Emr 2025</p>
    </div>
    );
}

export default Footer