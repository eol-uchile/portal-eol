import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import "./selector.css";

export const LanguageSelectorComponent = () => {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = ({ target }) => setLanguage(target.value);

    return (
        <div className="language-container container-fluid text-right pr-md-5">
            <select
                onChange={handleChange}
                value={language}
            >
                <option value='es'>Español</option>
                <option value='en'>English</option>
            </select>
        </div>
    )
}
