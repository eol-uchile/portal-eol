import React, {useState, useEffect} from 'react';
import { LanguageContext } from './LanguageContext';

// i18n
import { IntlProvider } from 'react-intl';
import { translations } from './translations';


// Language provider with context
export const LanguageProvider = ({ children }) => {
    const initialLanguage = localStorage["language"] ? localStorage["language"] : "es";
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
      localStorage.setItem('language', language);
    }, [language]);

    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <IntlProvider locale={language} messages={translations[language]}>
            { children }
        </IntlProvider>
      </LanguageContext.Provider>
    );
};