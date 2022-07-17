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
            <img src={SVGWaves} className="waves"/>
            <div className="cards">
                <div className="card">
                    <img src={SVGHtml} className="icon-card"/>
                    <span className='textoA'>Planos de</span>
                    <span className='texto'>Hospedagem</span>
                    <span className='subtexto'>A partir de</span>
                    <h3 className='valor'>R$16,99</h3>
                    <button className='btn'>Ver Planos</button>
                </div>
                <div className="card">
                    <img src={SVGStar} className="icon-card"/>
                    <span className='textoA'>Registro de</span>
                    <span className='texto'>Domínio</span>
                    <span className='subtexto'>A partir de</span>
                    <h3 className='valor'>R$16,99</h3>
                    <button className='btn'>Registrar Domínio</button>
                </div>
                <div className="card">
                    <img src={SVGCpu} className="icon-card"/>
                    <span className='textoA'>Servidor VPS</span>
                    <span className='texto'>A partir de</span>
                    <span className='subtexto'>A partir de</span>
                    <h3 className='valor'>R$16,99</h3>
                    <button className='btn'>Contratar VPS</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products