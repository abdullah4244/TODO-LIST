import React,{Component} from 'react';
import Todos from './components/Todos';
import AddItem from './components/AddItem';
import './App.css';

class App extends Component {
  
state = {
  todos: [

    {
      id : 1,
      title : 'Take out the trash',
      completed:false
    },
    {
      id : 2,
      title : 'Prepare for office',
      completed:false
    }
    ,
    {
      id : 3,
      title : 'Go To office',
      completed:false
    }
  ]
}

markComplete = (id) => {
  const todos = [...this.state.todos];
  
  let todolist = todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    }
    return todo;
  })
  
  this.setState({todos : todolist});
}
DeletelistHandler = (id) => {
  const todos = [...this.state.todos].filter(todo => todo.id !== id);
  this.setState({todos:todos});
  
}
AddItemHandler = (todotext) => {
  if(this.state.todos.length > 0) {
  let todos = [...this.state.todos];
  const todoID = todos[todos.length-1].id;
  todos.push({id:todoID + 1 , title : todotext , completed : false});
  this.setState({todos: todos});
  }
  else {
    this.setState({todos:[{id:1,title:todotext,completed:false}]});
  }
}
  render(){
  return (

    <div className="App">
      <h1 style={{marginBottom : "20px"}}>TODO LIST ASSIGNMENT</h1>
      <AddItem  AddItem = {this.AddItemHandler}/>
      <Todos todos ={this.state.todos} markComplete = {this.markComplete} Deletelist = {this.DeletelistHandler} />
    </div>
  );
}
}

export default App;
