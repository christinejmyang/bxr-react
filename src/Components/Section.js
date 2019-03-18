import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const SectionTitle = styled.h1`
  margin: 0 auto 40px;
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 0.75em;
`;

export const bodyTextStyle = css`
  opacity: 0.75;
`;

export const Paragraph = styled.p`
  ${bodyTextStyle}
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
`;

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);
