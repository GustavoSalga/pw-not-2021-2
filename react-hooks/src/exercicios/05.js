// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()

  const divRoot = React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.


  React.useEffect( () => {

    /* Forma não react de fazer funcionar na primeira DIV 
    const tiltNode = document.getElementById('root-div')
    VanillaTilt.init(tiltNode, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      }) */
      const tiltNode = divRoot.current // Dessa forma fazemos funcionar nos dois elementos
      VanillaTilt.init(tiltNode, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      })

      // Quando o useEffect() retorna uma função, esta será executada uma única vez na fase de unmount (finalização) do componente.
      // Este recurso pode ser utilizado para destruir recursos que foram criados e não são mais necessários.
      return () => tiltNode.vanillaTilt.destroy()


  }, []) // -> Quando o vetor de dependências [] do useEffect() ficar vazio, significa que ele será executado como um lazy initializer (apenas uma vez na primeira atualização do componente) durante o carregamento da página.


  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    /* Forma não react de fazer funcionar na primeira DIV, vai dar erro pois não podemos ter duas DIVs com mesmo ID. Usamos o useRef que é a forma react de resolver esse problema
    <div id="root-div" className="tilt-root"> */
    <div ref={divRoot} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

export default function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <hr />
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}