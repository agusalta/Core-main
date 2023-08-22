import React from 'react'
import '../styles/Contacto.css'

function Contacto() {
    return (
        <body className = 'body-contacto'>
            <section className = 'section-contacto'>
                <div class="title">
                    <h1>CONTACTANOS</h1>
                    <p>Tenes alguna duda sobre lo que hacemos o de como funciona algo?. No dudes en contactarnos usando este apartado o nuestras redes sociales!</p>

                </div>

                <div class="contact">
                    <div class="contact-form">
                        <form>
                            <div class="row">
                                <div class="input50">
                                    <input type="text" placeholder="First name"/>
                                </div>
                                <div class="input50">
                                    <input type="text" placeholder="Last name"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input50">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div class="input50">
                                    <input type="text" placeholder="Subject"/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input100">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input100">
                                    <input type="submit" value="Send"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="contact-info">
                        <div class="info-box">
                            <img src="Images/address.png" class="contact-icon"/>
                            <div class="details">
                                <h4>Direccion</h4>
                                <p>Debajo de un puente, Buenos Aires, Argentina</p>
                            </div>
                        </div>
                        <div class="info-box">
                            <img src="Images/email.png" class="contact-icon"/>
                            <div class="details">
                                <h4>Email</h4>
                                <a href="coreSupport@gmail.com">coreSupport@gmail.com</a>
                            </div>
                        </div>
                        <div class="info-box">
                            <img src="Images/call.png" class="contact-icon"/>
                            <div class="details">
                                <h4>Telefono</h4>
                                <a href="tel:+1143277476">+11 4327 7476</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </body>
    )

}

export default Contacto