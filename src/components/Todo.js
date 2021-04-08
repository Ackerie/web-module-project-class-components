import React from 'react';

class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
          toDo: ''
        }
    }

    handleChange = e  => {
      this.setState({
        ...this.state,
        toDo: e.target.value
      })
    }




    render(){
    return (
            
           <div><button>AddTodo</button>
            <button>Clear</button>

            
            </div> 

            
        
    )}
}

export default Todo;