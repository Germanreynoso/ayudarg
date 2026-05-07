"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const slides = [
        { img: "/carousel_child.png", title: "Niños", desc: "Tranquilidad en el parque y excursiones." },
        { img: "/carousel_athlete.png", title: "Deportistas", desc: "Tu identificación vital en cada ruta." },
        { img: "/carousel_traveler.png", title: "Viajeros", desc: "Seguridad en cualquier lugar del mundo." },
        { img: "/carousel_elderly.png", title: "Adultos Mayores", desc: "Autonomía con el respaldo de tu familia." },
    ];

    return (
        <main>
            <header className={scrolled ? "scrolled" : ""}>
                <div className="container">
                    <nav>
                        <a href="#" className="logo">
                            <i className="fas fa-qrcode"></i> SOS QR
                        </a>
                        <div className="nav-links">
                            <a href="#inicio">Inicio</a>
                            <a href="#nosotros">Nosotros</a>
                            <a href="#beneficios">Beneficios</a>
                            <a href="#solicitar">Solicitar Pulsera</a>
                        </div>
                        <a href="#solicitar" className="btn btn-primary">Pedir Pulsera</a>
                    </nav>
                </div>
            </header>

            <section id="inicio" className="hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-content animate__animated animate__fadeInLeft">
                            <h1>Garantiza el regreso a casa de los que amas</h1>
                            <p>Un sistema de identificación de emergencia vital para cualquier persona: niños, deportistas,
                                viajeros y seres queridos que necesiten protección.</p>
                            <div style={{ display: "flex", gap: "15px" }}>
                                <a href="#solicitar" className="btn btn-primary">Obtener mi pulsera</a>
                                <a href="#nosotros" className="btn btn-outline">Conocer la historia</a>
                            </div>
                        </div>
                        <div className="hero-image animate__animated animate__fadeInRight">
                            <Image 
                                src="/hero_bracelet_emotional.png" 
                                alt="Seguridad y Cuidado" 
                                width={600} 
                                height={400} 
                                priority
                                style={{ height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="carousel" className="carousel-container">
                <div className="container">
                    <h2 className="section-title">Para cada etapa de la vida</h2>
                    <p className="section-subtitle">Seguridad y tranquilidad sin importar quién seas o a dónde vayas.</p>

                    <div className="carousel-viewport">
                        <div 
                            className="carousel-track" 
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="carousel-slide">
                                    <Image 
                                        src={slide.img} 
                                        alt={slide.title} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }} 
                                    />
                                    <div className="carousel-caption">
                                        <h4>{slide.title}</h4>
                                        <p>{slide.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-controls">
                        {slides.map((_, index) => (
                            <div 
                                key={index} 
                                className={`dot ${activeSlide === index ? "active" : ""}`}
                                onClick={() => setActiveSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="nosotros" className="origin">
                <div className="container">
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="section-subtitle">Lo que nació de una tragedia se convirtió en una misión de esperanza para toda Tucumán.</p>

                    <div className="origin-card animate__animated animate__fadeInUp">
                        <div className="origin-image">
                            <Image 
                                src="/qr_bracelet_detail.png" 
                                alt="Pulsera QR Detalle" 
                                width={500} 
                                height={350} 
                                style={{ borderRadius: "20px" }}
                            />
                        </div>
                        <div className="origin-text">
                            <h3>¿Cómo surgió esta idea?</h3>
                            <p>Hace poco tiempo, en nuestra provincia, ocurrió una tragedia evitable. Una persona con
                                discapacidad mental se desorientó y se perdió. Quienes lo encontraron no tenían forma de saber
                                quién era ni cómo contactar a su familia. Lamentablemente, falleció solo.</p>
                            <blockquote>
                                "Nadie debería morir solo por no poder decir su nombre."
                            </blockquote>
                            <p>De esa necesidad dolorosa nace <strong>SOS QR</strong>: hoy evolucionado para proteger a
                                <strong> cualquier persona</strong>, desde niños en excursiones hasta deportistas de riesgo,
                                garantizando que quien te encuentre sepa quién eres en segundos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="beneficios" className="benefits">
                <div className="container">
                    <h2 className="section-title">Beneficios Vitales</h2>
                    <p className="section-subtitle">Por qué una pulsera SOS QR es la mejor inversión en tranquilidad para tu familia.</p>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon"><i className="fas fa-bolt"></i></div>
                            <h3>Rapidez Crítica</h3>
                            <p>Identificación inmediata en segundos. De horas de angustia a minutos de resolución.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><i className="fas fa-heartbeat"></i></div>
                            <h3>Datos Médicos</h3>
                            <p>Información de alergias, medicación y condiciones especiales visibles al instante.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><i className="fas fa-users-cog"></i></div>
                            <h3>Sin Apps</h3>
                            <p>Funciona con cualquier celular. No requiere descargar nada ni tener conocimientos técnicos.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><i className="fas fa-shield-alt"></i></div>
                            <h3>Resistente</h3>
                            <p>Silicona médica hipoalergénica, resistente al agua, golpes y el desgaste diario.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="historias" className="stories">
                <div className="container">
                    <h2 className="section-title">Historias que Inspiran</h2>
                    <p className="section-subtitle">Pequeños relatos ficticios de cómo una pulsera SOS QR puede cambiar el curso de un día difícil.</p>

                    <div className="stories-grid">
                        <div className="story-card animate__animated animate__fadeInUp">
                            <i className="fas fa-quote-left story-icon"></i>
                            <p className="story-text">
                                "Mateo de 6 años se soltó de mi mano en una plaza llena. Fueron 5 minutos de terror, hasta que
                                un policía lo encontró. Escaneó su pulsera y me llamó al instante. Mateo no tuvo que decir nada,
                                su pulsera habló por él."
                            </p>
                            <div className="story-author">
                                <div className="story-author-info">
                                    <h5>Carla M.</h5>
                                    <span>Madre de Mateo</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                            <i className="fas fa-quote-left story-icon"></i>
                            <p className="story-text">
                                "Salí a rodar solo y tuve una caída fuerte. Perdí el conocimiento por unos minutos. Los médicos
                                supieron que soy alérgico a ciertos medicamentos gracias al SOS QR antes de llegar al hospital.
                                Eso evitó complicaciones graves."
                            </p>
                            <div className="story-author">
                                <div className="story-author-info">
                                    <h5>Rodrigo G.</h5>
                                    <span>Ciclista Amateur</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                            <i className="fas fa-quote-left story-icon"></i>
                            <p className="story-text">
                                "Mi abuelo se desorientó en una feria de artesanos durante el viaje. Una vendedora vio su SOS
                                QR, escaneó el código y nos envió un mensaje de WhatsApp con su ubicación. Lo encontramos en
                                menos de 10 minutos gracias a la tecnología."
                            </p>
                            <div className="story-author">
                                <div className="story-author-info">
                                    <h5>Sofía L.</h5>
                                    <span>Nieta viajera</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <div className="container">
                    <h2 className="section-title" style={{ color: "var(--white)", WebkitTextFillColor: "var(--white)" }}>Cómo funciona</h2>
                    <div className="steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h4>Solicita</h4>
                            <p>Pide tu pulsera personalizada a través de nuestro formulario.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h4>Recibe</h4>
                            <p>Llevamos tu pulsera lista para usar con tu código QR único.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h4>Seguridad</h4>
                            <p>Úsala siempre. En caso de emergencia, cualquier persona podrá ayudarte.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solicitar" className="request-form">
                <div className="container">
                    <h2 className="section-title">Solicita tu Pulsera</h2>
                    <p className="section-subtitle">Completa el formulario y nos pondremos en contacto para coordinar la entrega.</p>
                    
                    <div className="form-container">
                        <form action="https://formsubmit.co/973523275752c003309a6369527ec688" method="POST">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Nombre Completo</label>
                                    <input type="text" name="nombre" placeholder="Ej: Juan Pérez" required />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono de Contacto</label>
                                    <input type="tel" name="telefono" placeholder="Ej: 381 123 4567" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="tu@email.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Cantidad de Pulseras</label>
                                    <select name="cantidad">
                                        <option value="1">1 Pulsera</option>
                                        <option value="2">2 Pulseras</option>
                                        <option value="3">3 Pulseras</option>
                                        <option value="more">Más de 3</option>
                                    </select>
                                </div>
                                <div className="form-group full">
                                    <label>Mensaje o Dudas (Opcional)</label>
                                    <textarea name="mensaje" rows={4} placeholder="Cuéntanos para quién es la pulsera o si tienes alguna duda especial."></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                Enviar Solicitud <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <i className="fas fa-qrcode"></i> SOS QR
                            </div>
                            <p>Protegiendo a la comunidad tucumana con tecnología solidaria. Una iniciativa nacida para que nadie se sienta solo en una emergencia.</p>
                        </div>
                        <div className="footer-links">
                            <h4>Enlaces</h4>
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#nosotros">Nosotros</a></li>
                                <li><a href="#beneficios">Beneficios</a></li>
                                <li><a href="#solicitar">Solicitar</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Contacto</h4>
                            <ul>
                                <li><i className="fas fa-envelope"></i> contacto@sosqr.com</li>
                                <li><i className="fas fa-phone"></i> +54 381 000 0000</li>
                                <li><i className="fas fa-map-marker-alt"></i> Tucumán, Argentina</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2025 SOS QR Tucumán. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
