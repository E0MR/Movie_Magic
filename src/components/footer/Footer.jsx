import './Footer.css'

// import logo from '../../assets/images/logo_.png'

function Footer() {
  return (
    <div className="footer">
      {/* <p className='links'>
        <button className="btn-sec">About</button>
        <button className="btn-sec">Contact</button>
      </p> */}
      <p>Copyright &copy; Emr {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(new Date())}</p>
    </div>
    );
}

export default Footer