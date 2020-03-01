import React from 'react';
import styled from 'styled-components';

const Title = ({ label, tagline = null, className }) => {
  const classPrefix = 'title';
  return (
    <div className={(classPrefix, className)}>
      <header className={`${classPrefix}__header`}>
        <h1 className={`${classPrefix}__label-text`}>{label}</h1>
        {tagline && <p className={`${classPrefix}__tagline-text`}>{tagline}</p>}
      </header>
    </div>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;

  .title__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title__label-text {
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 0.2em;
  }

  .title__tagline-text {
    margin-top: 0.2em;
    font-weight: 400;
  }
`;

export default StyledTitle;
