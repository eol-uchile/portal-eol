import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./footer.css";

export const FooterComponent = () => {
    return (
        <footer>
            <div className="container">
                <div className="row text-center text-md-left">
                    <div className="col-md-4 pt-4 px-2 text-center">
                        <h4 className="text-uppercase">
                            <FormattedMessage id="footer.rrss" />
                        </h4>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/vti_uchile/" target="_blank" rel="noreferrer">
                                    <i className="fa fa-instagram mx-2 fa-2x"></i>
                                </a>
                                <a href="https://twitter.com/vti_uchile" target="_blank" rel="noreferrer">
                                    <i className="fa fa-twitter mx-2 fa-2x"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/vti-uchile/?viewAsMember=true" target="_blank" rel="noreferrer">
                                    <i className="fa fa-linkedin mx-2 fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-4 px-2 text-center">
                        <h4 className="text-uppercase">
                            <FormattedMessage id="footer.platforms" />
                        </h4>
                        <ul>
                            <li><a href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">Educación Online (EOL)</a></li>
                            <li><a href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">CMM Edu Formación</a></li>
                            <li><a href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">UAbierta</a></li>
                            <li><a href="https://eduonline.ing.uchile.cl/" target="_blank" rel="noreferrer">Eduonline</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-4 px-2 text-center">
                        <h4 className="text-uppercase">
                            <FormattedMessage id="footer.contact" />
                        </h4>
                        <ul>
                                <table>
                                    <tr className="mb-2">
                                        <td className="pr-2"><i className="fas fa-map-marker-alt mx-auto"></i></td>
                                        <td>Diagonal Paraguay 265, Torre 15, Oficina 1004, Santiago, Chile</td>
                                    </tr>
                                    <tr className="mb-2">
                                        <td className="pr-2"><i className="far fa-envelope mx-auto"></i></td>
                                        <td><a href="mailto:eol-ayuda@uchile.cl" target="_blank" rel="noreferrer">eol-ayuda@uchile.cl</a></td>
                                    </tr>
                                    <tr className="mb-2">
                                        <td className="pr-2"><i className="far fa-calendar-alt mx-auto"></i></td>
                                        <td>
                                            <FormattedMessage id="footer.schedule_1" />
                                            <br/>
                                            <FormattedMessage id="footer.schedule_2" /></td>
                                    </tr>
                                </table>
                        </ul>
                    </div>
                    <div className="col-12 mt-2">
                        <img 
                            src="/images/logo-eol-white.svg" 
                            alt="Oficina de Educación Online Universidad de Chile" 
                            className="img-fluid"
                        />
                        <p className="copyright text-center"><FormattedMessage id="footer.copyright" /></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
