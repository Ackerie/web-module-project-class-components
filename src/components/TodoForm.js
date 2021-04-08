import React from 'react'

class TodoForm extends React.Component {
    

    constructor(){
        super();
        this.state = {
            choir:''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            choir:e.target.value
        })
    };


    submitItem = e => {
        e.preventDefault()
    }

    render() {
        return (
            <form>
            <h1>ToDo List:MVP</h1>
            <input
            type='text'
            name='item'
            placeholder='...todo'
            />
            </form>
        )
    }
}

export default TodoForm;