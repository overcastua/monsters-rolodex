import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (event) => this.setState({ searchField: event.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (m) =>
        m.name.toLowerCase().includes(searchField) ||
        m.email.toLowerCase().includes(searchField),
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
