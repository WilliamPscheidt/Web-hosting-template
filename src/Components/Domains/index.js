import React from 'react'
import './Domains.css'

import SVGSearch from '../../Assets/Icons/Search.svg'

function Domains() {
  return (
    <section className="domains-container">
        <div className="domains-internal">
            <h1>Registre um Domínio</h1>
            <div className="border"></div>
            <div className="search-input">
                <img src={SVGSearch} className='icon-search'/>
                <input placeholder='Pesquise o Domínio' className='input-domain'></input>
                <button className='search'>Pesquisar</button>
            </div>
            <div>
                <span className="extension"><b className="destaque">.</b>com </span>
                <span className="extension"><b className="destaque">.</b>com.br </span>
                <span className="extension"><b className="destaque">.</b>org </span>
                <span className="extension"><b className="destaque">.</b>store </span>
                <span className="extension"><b className="destaque">.</b>net </span>
                <span className="extension"><b className="destaque">.</b>info </span>
                <span className="extension"><b className="destaque">Ver Mais</b></span>
            </div>            
        </div>
    </section>
  )
}

export default Domains