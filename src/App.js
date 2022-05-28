import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  };
  componentDidMount() {
    fetch('https://swapi.dev/api/people/1/')
    .then(response=> response.json())
      .then(people => {this.setState({ 'people': people})});
  }

  render() {
     let {name, mass, hair_color, skin_color} = this.state.people
    return (
      <div className ='container'>
        <h1> Starwars API </h1>;
        <p> name: <span className='power'>{name}</span> </p>;
        <p> mass: <span>{mass}</span> </p>;
        <p> hair color: <span>{hair_color}</span> </p>;
        <p> skin_color: <span>{skin_color}</span> </p>;
      </div>
      
    );
}
}

export default App;
