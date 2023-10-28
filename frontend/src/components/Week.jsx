import React from 'react'
// import { Day_for_Week } from "./Day_for_Week"
import { Day } from "./Day"
import { Day_for_Week } from './Day_for_week';
import dayjs from 'dayjs';

export const Week = (props) => {
  const { week } = props;
  return (
    <div>
      {/* 1週間を表示 */}
      <div className='flex-1 grid grid-cols-7 grid-rows-1'>
        {week.map((i) => (
          <React.Fragment key={i}>
            <Day_for_Week day={dayjs().date()} key={i} />
          </React.Fragment>
        ))}
      </div>
      {/* <div className='flex-1 grid grid-cols-7 grid-rows-24'>
        {week.map((i) => (
          <React.Fragment key={0}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={0} />
            ))}
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
}

