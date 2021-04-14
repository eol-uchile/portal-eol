import React from 'react';
import "./footer.css";

export const FooterComponent = () => {
    return (
        <footer>
            <div className="container">
                <div className="row text-center text-md-left">
                    <div className="col-md-6 pt-4">
                        <h4>PLATAFORMAS</h4>
                        <ul>
                            <li><a href="https://eol.uchile.cl/" target="_blank" rel="noreferrer">Educación Online (EOL)</a></li>
                            <li><a href="https://cmmeduformacion.uchile.cl/" target="_blank" rel="noreferrer">CMM Edu Formación</a></li>
                            <li><a href="https://uabierta.uchile.cl/" target="_blank" rel="noreferrer">UAbierta</a></li>
                            <li><a href="https://eduonline.ing.uchile.cl/" target="_blank" rel="noreferrer">Eduonline</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 pt-4">
                        <h4>CONTACTO</h4>
                        <ul>
                            <li><a href="mailto:eol-ayuda@uchile.cl" target="_blank" rel="noreferrer"><i className="far fa-envelope mr-2 pt-1"></i>eol-ayuda@uchile.cl</a></li>
                        </ul>
                    </div>
                    <div className="col-12 mt-2">
                        <img 
                            src="/images/logo-eol-white.svg" 
                            alt="Oficina de Educación Online Universidad de Chile" 
                            className="img-fluid"
                        />
                        <p className="copyright text-center">© 2021 Oficina de Educación Online, Vicerrectoría de Tecnologías de la Información, Universidad de Chile. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
