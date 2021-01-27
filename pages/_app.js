import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar';
import '../assets/sass/app.scss';

export default function MyApp({ Component, pageProps }) {

  const rotas = ["home", "projetos", "sobre"];

  return (
    <Fragment>
      <Navbar rotas={rotas} />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>

      </footer>
    </Fragment>
  )
}