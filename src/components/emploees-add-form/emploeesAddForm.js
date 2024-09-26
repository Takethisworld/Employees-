import { Component } from 'react';
import './emploeesAddForm.css';

class EmploeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rise: false,
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name === '' || this.state.salary === '') {
            return alert('Enter Name and Salary')
        } else {
            this.props.createUser(this.state.name, this.state.salary);
        }
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (

            <div className="app-add-form">
                <h3>Add new worker</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text" className="new-post-label form-control" placeholder="What his name?"
                        value={name}
                        name='name'
                        onChange={this.onValueChange}
                    />
                    <input type="text" className="new-post-label form-control" placeholder="profit in $"
                        value={salary}
                        name='salary'
                        onChange={this.onValueChange}
                    />
                    <button type="buttomn" className="btn btn-outline-light" >Add</button>
                </form>
            </div>)
    }
}
export default EmploeesAddForm;