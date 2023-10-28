import React from 'react'
import { TimeTable } from "./TimeTable"

export const Week = (props) => {
  const { week } = props;

  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-24'>
      {week.map((hour, i) => (
        <React.Fragment key={i}>
          {hour.map((day, idx) => (
            <TimeTable day={day} key={idx} rowId={i}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}