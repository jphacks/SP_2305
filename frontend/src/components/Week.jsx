import React from 'react'
import { TimeTable } from "./TimeTable"

export const Week = (props) => {
  const { week } = props;

  return (
    <div className='flex-1 grid grid-cols-8 grid-rows-25'>
      {week.map((hour, i) => (
        <React.Fragment key={i}>
          {hour.map((day, idx) => (
            <TimeTable day={day} key={idx} rowId={i} columnId={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}