import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function LanguageSelector() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <label>{t('language')}: </label>
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">{t('english')}</option>
        <option value="ru">{t('russian')}</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
