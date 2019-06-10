import './styles.scss';
import React, { useState } from 'react';

export const Home = (props: { sth: string }) => {
  //

  const [state, setState] = useState({ counter: 0 });

  return (
    <div>
      <div>Template Home Page</div>
      <div>{'Here is some props: ' + props.sth}</div>
      <div>{'Counter:' + state.counter} </div>
      <button onClick={() => setState(oldState => ({ counter: oldState.counter + 1 }))}>
        HSDSDD
      </button>
    </div>
  );
};

export default Home;
