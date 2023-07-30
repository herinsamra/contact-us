import styles from './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar ${styles.Navbar}">
        <img src="/images/bird1.png" alt="LOGO" className="logo" />
        <ul className="menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        </ul>
      
    </div>
  )
}

export default Navbar;
