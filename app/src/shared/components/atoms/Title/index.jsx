import React from 'react';
import styled from 'styled-components';

const Title = ({ label, tagline = null, className }) => {
  const classPrefix = 'title';
  return (
    <div className={(classPrefix, className)}>
      <header className={`${classPrefix}__header`}>
        <h1>{label}</h1>
        {tagline && <p>{tagline}</p>}
      </header>
    </div>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;

  .title__header {
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

export default StyledTitle;
