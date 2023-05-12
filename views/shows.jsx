const React = require('react')
class shows extends React.Component {
  render () {
   const pokemon = this.props.pokemon
    return (
      <div>
      <h1> Show Page </h1>
      <div>
        <h2 >{pokemon.name}</h2> 
        
        <img src={pokemon.image}/>
        </div>
      </div>
      
      );
     }
   }
  module.exports  = shows;