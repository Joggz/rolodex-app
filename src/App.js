import React , { Component }from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/searchbox/searchbox.component'

class App extends Component {

  state =  {
    monsters: [],
    searchField: ''
  }
  async componentDidMount(){
      const M_api_call = await fetch('http://jsonplaceholder.typicode.com/users');
      const res = await M_api_call.json();
      console.log(res);
      this.setState({
        monsters: res,
      })

    }
  
    render(){
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <Searchbox 
          placeholder='Search monsters'
          handleChange={e => {this.setState({
            searchField: e.target.value
           });
         }}
        />
        {/* <input type='search'
         placeholder='search monsters'
         onChange={ e => {this.setState({
           searchField: e.target.value
          });
        }}  
         /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
