import React from "react";
import { Link } from "gatsby";

export default function Tjenester() {
  return (
    <section className='section is-large' id='tjenester'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column' id='column1'>
            Flere av våre tjenester!
          </div>
          <div className='column' id='column2'>
            <Link to='/rustfritt-rekkverk'>
              Rustfritt rekkverk
              <img src='/img/fence-icon.png' />
            </Link>
          </div>
          <div className='column' id='column3'>
            <Link to='/aluminiumsrenner'>
              Aluminiumsrenner, pipehatter og beslag
              <br />
              <img
                src='/img/aluminiumsrenner-icon.png'
                className='is-centered'
              />
            </Link>
          </div>
          <div className='column' id='column4'>
            <Link to='/automatisk-industrimaskin'>
              Automatisk industrimaskin
              <img src='/img/industrimaskin-icon.png' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
