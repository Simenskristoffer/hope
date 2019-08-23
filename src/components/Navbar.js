import React from "react";
import { Link } from "gatsby";
import Logo from "../img/Logo.png";
import "./all.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <img
                src={Logo}
                alt='Eivind Hope AS'
                style={{ maxHeight: "50px", width: "auto" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu is-white'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-end has-text-centered'>
              <Link className='navbar-item' to='/'>
                Heim
              </Link>
              <Link className='navbar-item' to='/automatisk-industrimaskin'>
                Automatisk industrimaskin
              </Link>
              <Link className='navbar-item' to='/liftutleie'>
                Liftutleie
              </Link>
              <Link className='navbar-item' to='/rustfritt-rekkverk'>
                Rustfritt rekkverk
              </Link>
              <Link className='navbar-item' to='/aluminiumsrenner'>
                Aluminiumsrenner
              </Link>
              <Link className='navbar-item' to='/om-oss'>
                Om oss
              </Link>
              <Link className='navbar-item' to='/kontakt'>
                Kontakt
              </Link>
              <Link className='navbar-item' to='/contact'>
                Contact
              </Link>
              <Link className='navbar-item' to='/contact/examples'>
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
