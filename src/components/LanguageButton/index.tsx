import React from 'react';
import { useTranslation } from 'react-i18next';
import I18n from '../../_translation/i18n';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const Button = styled.button`
  font-size: 2rem;
  border: none;
  background: transparent;
  padding: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #007cf0, #00dfd8 20%, #f9cb28 60%, #ff4d4d);
  background-size: 400% 400%;
  animation: ${shimmer} 5s ease infinite;
`;

const LanguageButton = (props: any) => {
  const { i18n } = useTranslation('translation');

  const changeLanguage = () => {
    i18n.language === 'en' ? I18n.changeLanguage('tc') : I18n.changeLanguage('en');
  };

  return <Button onClick={changeLanguage}>{i18n.language.toUpperCase()}</Button>;
};

export default LanguageButton;
