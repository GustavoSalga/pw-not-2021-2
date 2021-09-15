import * as React from 'react'

export default function Teste2() {

    const [caption, setCaption] = React.useState ('Clique Aqui')

    const handleButtonClick = event => setCaption('Botão clicado')

    return (
        <button onClick={handleButtonClick}>{caption}</button>
    )
}