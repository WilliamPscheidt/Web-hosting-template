import React from 'react'
import './Blog.css'

import Icon from '../../Assets/Icons/Arrow-Blog.svg'

function Blog() {
  return (
    <section className='blog'>
        <h2>Posts Recentes</h2>
        <div className='border'></div>
        <div className='container'>
            <div className='container-internal'>
                <div className='card'>
                    <h1 className='titulo'>Como Monetizar <br/> meu Site?</h1>
                    <p className='subtexto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis arcu, porttitor sit amet scelerisque vitae, scelerisque id tellus. Aliquam vitae nisi nibh. Mauris sed tincidunt metus.</p>
                    <button className='btn'>Ler Mais <img src={Icon} className="icon" /></button>
                </div>
                <div className='card'>
                    <h1 className='titulo'>Seo para <br/> Desenvolvedores</h1>
                    <p className='subtexto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis arcu, porttitor sit amet scelerisque vitae, scelerisque id tellus. Aliquam vitae nisi nibh. Mauris sed tincidunt metus.</p>
                    <button className='btn'>Ler Mais <img src={Icon} className="icon" /></button>
                </div>
                <div className='card'>
                    <h1 className='titulo'>Qual extensão de  <br/> Domínio Escolher?</h1>
                    <p className='subtexto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis arcu, porttitor sit amet scelerisque vitae, scelerisque id tellus. Aliquam vitae nisi nibh. Mauris sed tincidunt metus.</p>
                    <button className='btn'>Ler Mais <img src={Icon} className="icon" /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog