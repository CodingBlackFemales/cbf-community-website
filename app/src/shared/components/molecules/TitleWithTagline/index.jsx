import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';
import Tagline from '../../atoms/Tagline';

const TitleWithTagline = ({ titleText, taglineText, className }) => {
  const classPrefix = 'title-with-tagline';
  return (
    <div className={(classPrefix, className)}>
      <header className={`${classPrefix}__header`}>
        <Title text={titleText} />
        {taglineText && <Tagline text={taglineText} />}
      </header>
    </div>
  );
};

const StyledTitleWithTagline = styled(TitleWithTagline)`
  text-align: center;

  .title-with-tagline__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledTitleWithTagline;
