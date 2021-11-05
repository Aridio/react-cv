import React, { Fragment } from 'react';
import  Avatar from './Avatar';
import  Positions from './Positions';

const WorkExperience = ({ data }) => {

  return (
    <Fragment>
      {data.map((entry, i) => (
        <div key={i} className="card py-5 px-6 bg-gray-100 rounded mb-10">
          <div className="grid xl:grid-flow-col auto-cols-fr xl:auto-cols-auto grid-rows-1 xl:grid-rows-2 gap-6 py-2 xl:py-0">
            <div className="col-span-12 xl:col-auto flex justify-center items-center">
              <Avatar
                image={entry.logo}
                name={entry.workplace}
                size
              />
            </div>
            <div className="col-span-12 xl:col-auto flex justify-center items-center row-start-3 xl:row-start-auto">
              <p className="text-gray-400 text-center w-auto xl:w-20">{entry.mdality}</p>
            </div>
            <div className="col-span-12 flex">
              <div className="grid xl:grid-flow-col grid-flow-col auto-cols-fr xl:auto-cols-auto gap-6 w-full">
                <div className="col-span-full xl:col-auto flex justify-center flex-col text-center xl:text-left">
                  <h5 className="font-semibold text-xl text-blue-900 mb-2">{entry.workplace}</h5>
                  <p className="font-medium text-xl text-gray-400 capitalize">
                    {entry.timeWorked.from.month.substring(0,3)} {entry.timeWorked.from.year} - 
                    {entry.timeWorked.to == null ? (
                      <span className="text-green-600"> Presente</span>
                    ) : (
                      `${entry.timeWorked.to.month.substring(0,3)} - ${entry.timeWorked.to.year}`
                    )}
                  </p>
                </div>
                <div className="col-span-full xl:col-span-12 flex justify-center items-start xl:justify-end xlitems-end">
                  <Positions positions={entry.positions} />
                </div>
              </div>
            </div>
            <div className="col-span-12 text-center xl:text-left flex justify-center items-center">
              <p className="text-gray-400">{entry.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default WorkExperience;