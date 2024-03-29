import * as React from 'react'

export default function Exercicio02({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage 💰 
  //window.localStorage.getItem('name') || initialName  
  
  // const [name, setName] = React.useState(initialName) - ESSA ERA A FORMA INICIAL DO EXERCICIO, MODIFICAMOS PARA \/

  
  const [name, setName] = React.useState(
    // Recuperação de um valor previamente salvo no localStorage OU (||) usa o valor de InitialName, caso o item do localStorage não exista

    // Retornando uma função para criar um lazy initializer, que é executado apenas uma vez, no carregamento inicial da página (ou recarregamento)
    () => readStorage() || initialName
)
  const [count, setCount] = React.useState(() => 0)

    function readStorage() {
        console.count('Lido localStorage')
        return window.localStorage.getItem('name')
    }
  // 🐨 Here's where you'll use `React.useEffect`.  
  // The callback should set the `name` in localStorage.💰 
  //window.localStorage.setItem('name', name)  

  // Armazenando em um item do localStorage chamado "name" o valor da variável de estado name. Criando um hook de useEffect
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    setCount(count + 1)
  }, [name]) // vetor de dependências das mudanças no setName

  function handleChange(event) {
      // A atualização da variável de estado "name" vai desencadear uma atualização do componente. Após a atualização ter sido processada, será executado o useEffect
      setName(event.target.value)
}

  return (
    <div>      
        <form>        
            <label htmlFor="name">Name: </label>        
            <input value={name} onChange={handleChange} id="name" />      
            </form>      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
            <div>Quantidade de atualizações: {count}</div>
    </div>  
    )
}