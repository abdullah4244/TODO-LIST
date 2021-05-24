import React , {Component} from 'react';

class TodoItem extends Component {

    getStyle = () => {

        return {
            background: '#f4f4f4',
            color: '#000',
            padding : '10px',
            display : 'flex',
            justifyContent : 'space-between',
            borderBottom : '1px #ccc dotted',
            
        }
    }

    ParagraghStyling  =()=> {
        return {
            display:'inline-block',
            textDecoration : this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {

        
        return (
            <div style={this.getStyle()}>
                <div>
                <input type="checkbox" onChange ={() => this.props.markComplete(this.props.todo.id)}/>
        <p style={this.ParagraghStyling()}>{this.props.todo.title}</p>
        </div>
        <button type="button" style = {buttonStyles} onClick={()=> this.props.Deleteitem(this.props.todo.id)}>Del</button>
         </div>
        );
    }
}
export default TodoItem;

const buttonStyles = {
    padding : '10px',
    backgroundColor: "#5cb85c",
    color: "#ffff",
    border : 'none',
    fontSize : '20px',
    borderRadius : '5px',
    cursor : "pointer"
    
}