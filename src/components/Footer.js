import React from "react";
import { Link } from "gatsby";

import Logo from "../img/Logo.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='content has-text-left'>
          <img
            src={Logo}
            alt='Eivind Hope AS'
            style={{ width: "20em", height: "5em" }}
          />
        </div>
        <div className='content has-text-centered'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-item'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Heim
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='navbar-item'
                        to='/automatisk-industrimaskin'
                      >
                        Automatisk industrimaskin
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/liftutleie'>
                        Liftutleie
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/rustfritt-rekkverk'>
                        Rustfritt rekkverk
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/aluminiumsrenner'>
                        Aluminiumsrenner
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/om-oss'>
                        Om oss
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/kontakt'>
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 has-text-left'>
                <section>
                  <h2 className='footer-title'>Adresse:</h2>
                  <p>Furunesvegen 47</p>
                  <p>5420 Rubbestadneset</p>
                </section>
              </div>
              <div className='column is-4 has-text-left'>
                <section>
                  <h2 className='footer-title'>Kontakt:</h2>
                  <p>
                    <a href='tel:+4753427500 '>Telefon: 53 42 75 00</a>
                  </p>
                  <p>
                    <a href='tel:+4748148889'>Mobil: 48 14 88 89</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
