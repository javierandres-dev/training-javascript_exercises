import { FC, Dispatch, SetStateAction } from 'react';
import { getWeekDays } from '../../helpers/auxiliar';

type Props = {
  setMessage: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
};

const Solution1: FC<Props> = ({ setMessage, setStatus }) => {
  setMessage('This exercise does not require user interaction.');
  const weekDays = getWeekDays(),
    date = new Date(),
    day = date.getDay(),
    getHours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  let hours = undefined;
  let period = undefined;
  if (getHours >= 0 && getHours <= 12) {
    hours = getHours;
    period = 'AM';
  } else {
    hours = getHours - 12;
    period = 'PM';
  }
  setStatus('✔️ Done!');
  return (
    <div className='card-body'>
      <p>Today is: {weekDays[day]}</p>
      <p>
        {hours < 10 ? '0' + hours : hours} {period} :
        {minutes < 10 ? '0' + minutes : minutes} :
        {seconds < 10 ? '0' + seconds : seconds}
      </p>
    </div>
  );
};

export default Solution1;
