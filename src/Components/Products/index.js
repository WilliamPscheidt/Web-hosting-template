import React from 'react'
import './Products.css'

import SVGWaves from '../../Assets/Geometricos/Waves.svg'

import SVGHtml from '../../Assets/Icons/html.svg'
import SVGStar from '../../Assets/Icons/star.svg'
import SVGCpu from '../../Assets/Icons/cpu.svg'


function Products() {
  return (
    <div className="products">
        <div className="products-internal">
            <h1>Os nossos Valores</h1>
            <div className="border"></div>
            <img src={SVGWaves} className="waves"/>
            <div className="cards">
                <div className="card">
                    <img src={SVGHtml} className="icon-card"/>
                    <span>Servidor de Hospedagem</span>
                    <span>A partir de</span>
                    <h3>R$16,99</h3>
                    <button>Ver Planos</button>
                </div>
                <div className="card">
                    <img src={SVGStar} className="icon-card"/>
                    <span>Registro de Domínio</span>
                    <span>A partir de</span>
                    <h3>R$16,99</h3>
                    <button>Registrar Domínio</button>
                </div>
                <div className="card">
                    <img src={SVGCpu} className="icon-card"/>
                    <span>Servidor VPS</span>
                    <span>A partir de</span>
                    <h3>R$16,99</h3>
                    <button>Contratar VPS</button>
                </div>
            </div>
                
        </div>

    </div>
  )
}

export default Products