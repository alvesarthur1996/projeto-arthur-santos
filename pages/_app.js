import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import '../assets/sass/app.scss';
import FAB from '../components/FAB/FAB';
import Background from '../components/Background/Background'

export default function MyApp({ Component, pageProps }) {

  const rotas = ["home", "projetos", "sobre"];

  return (
    <Fragment>
      <Navbar rotas={rotas} />
      <main>
        <Component {...pageProps} />
      </main>
      <div className="floating-bg" />
      <div className="floating-bg" />
      <Background minTop={30} color="rgba(0, 186, 199, 0.4)" />
      <footer>
        <FAB/>
      </footer>
    </Fragment>
  )
}