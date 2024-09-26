import { Component } from 'react'
import './searchPanel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearct = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSearch(term)
    }
    render() {
        return (<input type='text'
            className='form-control search-input'
            placeholder='Find worker'
            value={this.state.term}
            onChange={this.onUpdateSearct} />)
    }
}

export default SearchPanel;