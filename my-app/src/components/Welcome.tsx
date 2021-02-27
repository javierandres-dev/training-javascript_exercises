import { FC, Dispatch, SetStateAction, Fragment } from 'react';
import { Link } from 'react-router-dom';
import getTitles from '../helpers/getTitles';

type Props = {
  setTitle: Dispatch<SetStateAction<string>>;
  setExercise: Dispatch<SetStateAction<number>>;
};

const Welcome: FC<Props> = ({ setTitle, setExercise }) => {
  const titles: string[] = getTitles(),
    links = titles.map((title: string, idx: number) => (
      <Link
        className='link'
        to={`/exercise`}
        key={idx + 1}
        onClick={() => {
          setTitle(title);
          setExercise(idx + 1);
        }}
      >
        {idx + 1}
      </Link>
    ));
  return (
    <Fragment>
      <main role='main' className='container t-center'>
        <h2>Welcome</h2>
        <p>
          Please choose an exercise and follow its instructions if necessary.
        </p>
        <div className='links'>{links}</div>
      </main>
    </Fragment>
  );
};

export default Welcome;
