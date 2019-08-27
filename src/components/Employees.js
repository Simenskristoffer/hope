import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Employees = ({ team }) => {
  return (
    <section id='employees' className='section'>
      <div id='team' className='container'>
        <h1 className='has-text-centered'>Vårt team</h1>
        <div className='columns is-multiline'>
          {team.map(employee => (
            <Employee
              key={employee.name}
              name={employee.name}
              img={employee.img}
              info={employee.info}
              mobile={employee.mobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Employee = ({ img, name, info, mobile }) => (
  <div className='column is-4'>
    <Img fluid={img.childImageSharp.fluid} alt={name} />
    <h3 className='subtitle has-text-centered'>{name}</h3>
    <p className='employeeInfo'>{info}</p>
    <a href={"tel:" + mobile}>
      <p className='phoneNumber'>TLF: {mobile}</p>
    </a>
  </div>
);

Employee.propTypes = {
  name: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  info: PropTypes.string,
  mobile: PropTypes.string
};

Employees.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      info: PropTypes.string,
      mobile: PropTypes.string
    })
  )
};

export default Employees;
