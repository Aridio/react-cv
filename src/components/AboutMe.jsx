import React, { Fragment } from 'react'

const AboutMe = ({ data }) => {
  // console.log(Object.values(data));
  return (
    <Fragment>
      {data.map((entry, i) => (
        <p key={i} className={`text-gray-400 ${Object.keys(entry) == 'p' ? 'text-justify font-normal mb-5' : 'font-bold'}`}>
          {Object.values(entry)}
        </p>
      ))}
    </Fragment>
  )
}

export default AboutMe;