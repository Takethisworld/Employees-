import './App.css';
import AppFilter from './components/app-filer/appFilter';
import AppInfo from './components/app-info/appInfo';
import EmploeesAddForm from './components/emploees-add-form/emploeesAddForm';
import EmploeerList from './components/employeer-list/emploeerList';
import SearchPanel from './components/search-panel/searchPanel';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'John', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Mike', salary: 1800, increase: true, rise: false, id: 2 },
        { name: 'Louis', salary: 800, increase: false, rise: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  createUser = (name, salary) => {
    const user = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, user]
      return {
        data: newArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
    console.log(id)
  }

  searchEMP = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })

  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }
  onFilterSelect = (filter) => {
    this.setState({ filter })
  }
  onUpdateFilter = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise)
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  render() {
    const { data, term, filter } = this.state;
    const emploees = this.state.data.length
    const increase = this.state.data.filter(item => item.increase).length;
    const visibleData = this.onUpdateFilter(this.searchEMP(data, term), filter)
    return (
      <div className="App">
        <AppInfo emploees={emploees} increase={increase} />
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmploeerList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
        <EmploeesAddForm data={this.state.data} createUser={this.createUser} />
      </div>
    );
  }
}

export default App;
