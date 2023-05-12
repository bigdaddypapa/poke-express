const React = require('react');


class index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div>
                  <h1>Pokemon Index Page</h1>
                  <ul>
                      {pokemon.map((pokemon, id) => {
                          return (
                              <li>
                                  The pokemon{' '}
                                  <a href={`/pokemon/${pokemon.id}`}>
                                      {pokemon.name}
                                  </a>{' '}
                                  image link is {pokemon.image} <br></br>
                                 
                              </li>
                          );
                      })}
                  </ul>
                  <nav>
                    <a href="/pokemon/new">Create a Pokemon</a>
                </nav>
              </div>
      );
  }
}
module.exports = index;