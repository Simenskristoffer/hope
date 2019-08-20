import React from "react";

export default function Tjenester() {
  return (
    <section className='section is-medium'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>Flere av våre tjenester</div>
          <div
            className='column'
            style={{ background: "#01468a", color: "white", height: "20rem" }}
          >
            Alininiumsrenner, pipehatter og beslag
          </div>
          <div
            className='column'
            style={{ background: "#1a5b9b", color: "white", height: "20rem" }}
          >
            Liftutleie
          </div>
          <div
            className='column'
            style={{ background: "#4887c7", color: "white", height: "20rem" }}
          >
            Automatisk industrimaskin
          </div>
        </div>
      </div>
    </section>
  );
}
