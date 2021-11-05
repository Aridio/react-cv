import React from 'react'

const Positions = ({ positions }) => {
  return (
    <div className="flex flex-col gap-y-3 justify-end items-center md:items-end">
      {positions.map((position, i) => (
        <div className="flex justify-end" key={i}>
          <div className="rounded-lg px-3 py-1 bg-blue-100 font-medium text-indigo-400 text-center">
            {position}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Positions;