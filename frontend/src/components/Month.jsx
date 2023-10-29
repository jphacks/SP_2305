import React from 'react'
import { Day } from "./Day"
import { Day2 } from "./Day2"

export const Month = (props) => {
  const { month } = props;
  return (
    <div className='flex flex-col h-screen'>
      <div className='grid grid-cols-7 grid-rows-1'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day2 day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div >
  );
}