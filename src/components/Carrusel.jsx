import React from "react"
import "../assets/styles/components/Carousel.scss"
function Carrusel({ children }) {
    return (
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>
    )
}

export default Carrusel