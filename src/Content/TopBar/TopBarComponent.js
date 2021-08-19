import React from 'react';
import { LanguageSelectorComponent } from '../../Extras/Language/LanguageSelectorComponent';
import './topbar.css'

export const TopBarComponent = () => {
    return (
        <div className="top-bar-container container-fluid text-right pr-md-5">
            <table className="ml-auto text-center">
                <tbody>
                    <tr>
                        <td className="platforms-link">
                            <a href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">
                                EOL
                            </a> |
                            <a href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">
                                UAbierta
                            </a> |
                            <a href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">
                                CMM Eduformación
                            </a> |
                            <a href="https://eduonline.ing.uchile.cl/" target="_blank" rel="noreferrer">
                                EduOnline
                            </a> |
                            <a href="https://cajalosandes.virtual-labx.cl/" target="_blank" rel="noreferrer">
                                Caja los Andes
                            </a>
                        </td>
                        <td>
                            <LanguageSelectorComponent />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
