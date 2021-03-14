import React, { useState, useRef, useEffect, Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution5: React.FC = () => {
  const [rotated, setRotated] = useState(''),
    message: string = 'This exercise does not require user interaction.',
    status: string = '✔️ Done!',
    str: string = 'w3resource',
    getStr = (): string => {
      return (rotate =
        rotate[rotate.length - 1] + rotate.substring(0, rotate.length - 1));
    };
  let rotate: string = str.concat(' '),
    refStr: any = useRef();

  useEffect(() => {
    const rotating = setInterval(() => {
      refStr.current = getStr();
      setRotated(refStr.current);
    }, 1000);
    return () => {
      clearInterval(rotating);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <p className='t-center'>{rotated}</p>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution5;
