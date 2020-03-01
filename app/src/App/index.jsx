import React from 'react';
import styled from 'styled-components';

const App = ({ className }) => {
  const classPrefix = 'app';
  return (
    <div className={(classPrefix, className)}>
      <header className={`${classPrefix}__header`}>
        <p>Placeholder text</p>
      </header>
    </div>
  );
};

const StyledApp = styled(App)`
  text-align: center;

  .app__header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

export default StyledApp;
