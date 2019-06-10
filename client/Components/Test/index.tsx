import './styles.scss';
import React, { useState } from 'react';

export const Test = (props: any) => {
  const [state, setState] = useState({});

  return <div>This is a test component</div>;
};

const Home = () => {
  const [state, setState] = useState({
    isError: false
  });

  if (!!state.isError) {
    // return (throw new Error("Denied"));
  }

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setState({ isError: true });
          throw new Error('Hmmm...');
        }}
      >
        Error Me
      </button>
    </div>
  );
};

export default Test;
