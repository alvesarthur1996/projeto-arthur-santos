import React, { Fragment } from 'react'
import Image from 'next/image'
import ProgressBar from '../components/ProgressBar/ProgressBar';

function Sobre() {

    return (
        <Fragment>
            <div className="container fade-in">
                <div className="sobre--perfil">
                    <div className="sobre--perfil-avatar">
                        <img src="/lambo_maple_leafs_square.jpg" alt="Foto do desenvolvedor" />
                    </div>
                    <div className="sobre--perfil-desc">
                        <h3 className="titulo">Arthur Alves dos Santos</h3>
                        <p>
                            Sou Desenvolvedor Full Stack, natural de Guarulhos, SP. Adoro desenvolvedor aplicações
                            voltadas para web.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container fade-in">
                <div className="sobre--perfil">
                    
                    <div className="sobre--perfil-desc img-right">
                        <h3 className="titulo">Fatos sobre mim</h3>
                        <ul className="sobre--perfil-desc-lista">
                            <li>
                                💻&emsp;Amante das tecnologias web
                            </li>
                            <li>
                                🎮&emsp;Jogador <s>Profissional</s> de Counter-Strike Global Offensive
                            </li>
                            <li>
                                🏎&emsp;Piloto amador no automobilismo virtual
                            </li>
                            <li>
                                🏒&emsp;APAIXONADO por hockey! #GoLeafsGo #LeafsForever
                            </li>
                            <li>
                                🎹&emsp;Músico autodidata
                            </li>
                        </ul>
                    </div>
                    <div className="sobre--perfil-avatar">
                        <img src="/playing_keyboard.jpg" alt="Foto do desenvolvedor" />
                    </div>
                </div>
            </div>

            <div className="container fade-in">
                <div className="sobre--perfil">
                    <div className="sobre--perfil-avatar">
                        <img src="/lambo_maple_leafs_square.jpg" alt="Foto do desenvolvedor" />
                    </div>
                    <div className="sobre--perfil-desc">
                        <h3 className="titulo">Stacks</h3>
                        <div className="sobre--perfil-desc-skills">
                            <div className="grupo-skills">
                                <ProgressBar skill="Javascript" lvl="90" />
                                <ProgressBar skill="PHP" lvl="90" />
                                <ProgressBar skill="CSS" lvl="90" />
                                <ProgressBar skill="GIT" lvl="70" />
                                <ProgressBar skill="MySql" lvl="80" />
                            </div>
                            <div className="grupo-skills">
                                <ProgressBar skill="ReactJS" lvl="75" />
                                <ProgressBar skill="NextJS" lvl="75" />
                                <ProgressBar skill="Laravel" lvl="70" />
                                <ProgressBar skill="CodeIgniter" lvl="50" />
                            </div>
                        </div>
                    </div>
                </div>
                <span style={{ textAlign: 'right', display: 'block' }}><i>* Medidas baseadas em unidades de INCRÍVEL</i></span>
            </div>
        </Fragment>
    )
}

export default Sobre;