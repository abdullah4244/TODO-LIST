import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component {
    render() {


        let persons = this.props.todos.map(todoo => {
            return <TodoItem  key={todoo.id} todo={todoo} markComplete = {this.props.markComplete} Deleteitem = {this.props.Deletelist}/>
        })
        return (
              <div style = {{width : "50%" , margin: "0 auto"}}>
              {persons}
             </div>
             );
    }
}

export default Todos;