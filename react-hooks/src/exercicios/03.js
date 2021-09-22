import * as React from 'react'

/* VERSÃO UTILIZADA COM O NAME NO PAI
function Name({name, onNameChange}) { // função filho
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input 
        id="name" 
        value={name} 
        onChange={onNameChange} />
    </div>
  )
} */

function Name() { // função filho
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input 
        id="name" 
        value={name} 
        onChange={event => setName(event.target.value)} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) { // função filho
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal}  onChange={onAnimalChange}
      />
    </div>
  )
}

/* ANTIGA FUNÇAO DISPLAY QUE MOSTRAVA O NOME E O ANIMAL
function Display({name, animal}) {
 return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
} */

function Display({animal}) {
  return <div>{`Hey, your favorite animal is: ${animal}!`}</div>
 }

/* 
ELEVAÇAO DE ESTADO (state lifting) acontece quando estados precisam ser compartilhados entre componentes irmãos. Como dois irmãos não podem compartilhar diretamente seus estados entre si, seus estados precisam ser deslocados para o componente pai 

REBAIXAMENTO DE ESTADO (state colocation) ocorre quando um estado não precisa mais ser compartilhado entre os componentes irmãos, podemos retirar o estado compartilhado do componente pai e devolver ao componente filho
*/



export default function Exercicio03() { // Função pai
  // Vamos retirar a variável de estado name do pai e devolver ao filho
  // const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('') // Recriamos aqui a variável no pai

  // Funções de mudança de estado criadas por nós, mas elas podem ser substituidas pela arrow function criada no form abaixo
   /* 
   function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleAnimalChange(event) {
    setAnimal(event.target.value)
  }
  */

  return (
    <form>
      {/* <Name name={name} onNameChange={event => setName(event.target.value)} /> ESSA É A FORMA PARA A VARIAVEL SE MANTER NO PAI E PASSAR AO FILHO*/}
      <Name />
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      {/* <Display name={name} animal={animal} /> COMO NÃO PRECISAMOS MAIS MOSTRAR O NAME, DEIXAMOS SÓ O ANIMAL*/}
      <Display animal={animal} />
    </form>
  )
}