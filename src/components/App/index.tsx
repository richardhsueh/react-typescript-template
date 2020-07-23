import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import LanguageButton from '../LanguageButton';
import './index.scss';

const shimmer = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const H1 = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0;
  font-size: 7rem;
  line-height: 1;
  font-weight: 900;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #ff4d4d, #f9cb28 20%, #00dfd8 60%, #007cf0);
  background-size: 400% 400%;
  animation: ${shimmer} 5s ease infinite;
  overflow-wrap: break-word;
`;

const App = () => {
  const { t } = useTranslation('translation');

  return (
    <div>
      <LanguageButton />
      <H1>React. Typescript. Webpack. {t('welcome')}</H1>
    </div>
  );
};

export default App;
