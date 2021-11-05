import React, { Fragment } from 'react';

const Skills = ({ data }) => {
  return (
    <div className="flex flex-grow-0 lg:flex-grow flex-col">
      {data.map((skill, i) => (
        <div key={i} className="flex flex-col :md-flex-row -p-2 items-center">
          <p className="flex-1 m-2 font-semibold text-xl text-blue-900 text-left md:text-right">
            {Object.values(skill.skill)}
          </p>
          <div className="flex-1 m-2 flex flex-row">
            {[1,2,3,4,5].map((number, i2) => (
              <div key={i2} className={`flex flex-1 justify-center ${i2 >= skill.level ? 'transform scale-95' : ''}`}>
                <div style={{maxWidth:'1.25rem'}} className={`w-full h-5 rounded ${i2 >= skill.level ? 'bg-indigo-100 transform scale-90' : 'bg-indigo-400'}`}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;