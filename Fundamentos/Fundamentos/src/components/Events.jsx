import React from 'react'

const Events = () => {
    const handleClick = () => {
      console.log("Executou com função");
    };

    const renderSomething = (x) => {
      if(x){
        return <h1>Renderizando isso</h1>
      }else{
        return <h1>Renderizando outra coisa!</h1>
      }
    }

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando o Evento")}>Clique aqui</button>
      </div>
<hr />
      <div>
        <button onClick={handleClick}>Clique aqui com Função</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events