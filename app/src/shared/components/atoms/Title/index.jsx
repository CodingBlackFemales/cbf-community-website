import React from 'react';
import styled from 'styled-components';

const Title = ({ text, className }) => {
  const classPrefix = 'title';
  return (
    <div className={(classPrefix, className)}>
      <h1 className={`${classPrefix}__text`}>{text}</h1>
    </div>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;

  .title__text {
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 0.2em;
  }
`;

export default StyledTitle;
