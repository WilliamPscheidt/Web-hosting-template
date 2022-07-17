import React from 'react'
import Lottie from 'react-lottie-player'

import './HomeInfos.css'

import SVGArrowRight from '../../Assets/Icons/Arrow-Right.svg'
import SVGArrowDown from '../../Assets/Icons/Arrow-Down.svg'

import GeometriaLeft from '../../Assets/Geometricos/GeometriaHomeInfosLeft.svg'
import GeometriaRight from '../../Assets/Geometricos/GeometriaHomeInfosRight.svg'

import AnimacaoServidor from '../../Assets/Animations/server.json'

import SVGHtml from '../../Assets/Icons/html.svg'
import SVGChat from '../../Assets/Icons/chat.svg'
import SVGCpu from '../../Assets/Icons/cpu.svg'
import SVGShield from '../../Assets/Icons/shield.svg'
import SVGstar from '../../Assets/Icons/star.svg'

import CardA from '../../Assets/Geometricos/CardA.svg'
import CardB from '../../Assets/Geometricos/CardB.svg'

function HomeInfos() {
  return (
    <section className='nav-extend-container'>
        <img src={GeometriaLeft} className="GeometriaA" />
        <img src={GeometriaRight} className="GeometriaB" />
        <div className='container'>
            <div className='container-internal'>
                <div className='infos'>
                    <h1 className='titulo'>Hospede o Seu Site <br />Conosco!</h1>
                    <h2 className='subtitulo'>Foque no seu negócio, deixe a hospedagem <br />Conosco!</h2>
                    <div className='buttons'>
                        <button className='btn-projeto'>Comece o seu Projeto <img src={SVGArrowRight} className='icon-projeto'/></button>
                        <button className='btn-planos'>Ver Planos <img src={SVGArrowDown} className='icon-planos'/></button>
                    </div>
                </div>
                <div className='animation'>
                    <Lottie className='animacao'
                        loop
                        animationData={AnimacaoServidor}
                        play
                    />
                </div>
            </div>
        </div>
        <div className="container-cards">
            <div className='container-internal-cards'>
                <div className="card">
                    <img src={SVGHtml} className="icon-card" />
                    <span className='texto-card'>Hospedagem de</span>
                    <span className='texto-card'>Sites</span>
                </div>
                <div className="card">
                    <img src={SVGShield} className="icon-card" />
                    <span className='texto-card'>Certificados</span>
                    <span className='texto-card'>SSL</span>
                </div>
                <div className="card">
                    <img src={CardA} className="cardA" />
                    <img src={CardB} className="cardB" />
                    <img src={SVGstar} className="icon-card-active"  />
                    <span className='texto-card-active'>Registro de</span>
                    <span className='texto-card-active'>Domínios</span>
                </div>
                <div className="card">
                    <img src={SVGCpu} className="icon-card" />
                    <span className='texto-card'>Servidores</span>
                    <span className='texto-card'>VPS</span>
                </div>
                <div className="card">
                    <img src={SVGChat} className="icon-card" />
                    <span className='texto-card'>Suporte</span>
                    <span className='texto-card'>Especializado</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeInfos