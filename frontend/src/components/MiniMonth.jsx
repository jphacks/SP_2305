import React from 'react'
import { MiniDay } from './MiniDay';
import { MiniDay2 } from './MiniDay2';

export const MiniMonth = (props) => {
  const { month } = props;
  return (
    <div>
      <div className='flex-1 grid grid-cols-7 grid-rows-1'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <MiniDay2 day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <MiniDay day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}