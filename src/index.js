import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './MainApp';

import './index.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// i18n
import { IntlProvider } from 'react-intl';
import locale_en from "./translations/en.json";
import locale_es from "./translations/es.json";

const translation = {
  'es': locale_es,
  'en': locale_en
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={translation[language]}>
      <MainApp />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
