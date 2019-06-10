import './styles.scss';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import * as d3 from "d3";
// console.log(d3);

const MyH1 = styled.h1`
  background-color: rgba(0, 0, 150, 0.6);
`;

const MyDiv = styled.div`
  /* background-color: rgba(255, 0, 150, 0.6); */
  border: solid 10px red;
  ul {
    background-color: cyan;
  }
`;

export const Template = (props: any) => {
  const [state, setState] = useState({ counter: 0 });

  return (
    <div className="template-class">
      <MyH1>Template XXXY Page</MyH1>
      <div>{'Here are some props: ' + props}</div>
      <div>{'Counter:' + state.counter} </div>
      <button onClick={() => setState(oldState => ({ counter: oldState.counter + 1 }))}>
        INCREASE COUNTER
      </button>
      <hr />
      <MyDiv>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testing">Testing</Link>
          </li>
          <li>
            <Link to="/template">Template</Link>
          </li>
        </ul>
      </MyDiv>
    </div>
  );
};

export default Template;
