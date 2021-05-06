import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import "./selector.css";

export const LanguageSelectorComponent = () => {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = ({ target }) => setLanguage(target.value);

    return (
        <select
            onChange={handleChange}
            value={language}
            className="language-select"
        >
            <option value='es'>Español</option>
            <option value='en'>English</option>
        </select>
    )
}
