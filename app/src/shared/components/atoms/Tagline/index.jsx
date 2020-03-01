import React from 'react';
import styled from 'styled-components';

const Tagline = ({ text, className }) => {
  const classPrefix = 'tagline';
  return (
    <div className={(classPrefix, className)}>
      <p className={`${classPrefix}__text`}>{text}</p>
    </div>
  );
};

const StyledTagline = styled(Tagline)`
  text-align: center;

  .tagline__text {
    margin-top: 0.2em;
    font-weight: 400;
  }
`;

export default StyledTagline;
