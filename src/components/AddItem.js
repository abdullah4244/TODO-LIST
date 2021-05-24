import React,{Component} from 'react';


class AddItem extends Component {
    state = {
        inputtext: ''
    }
    
    render() {


        
        return (
            <div style= {{marginBottom : "20px"}}>
  <input type="text" style={inputstyle} onChange = {(e)=>this.setState({inputtext : e.target.value})} value = {this.state.inputtext} ></input>
     
     <button type="button" style= {btnStyle} onClick = {()=>this.props.AddItem(this.state.inputtext)}>ADD</button>
            </div>
        )
    }
}

const inputstyle = {

 padding : "10px",
 fontSize : "20px",
 borderRadius : "10px"

}
const btnStyle = {
    padding : '10px',
    backgroundColor: "red",
    color: "#ffff",
    border : 'none',
    fontSize : '20px',
    borderRadius : '5px',
    cursor : "pointer"
}

export default AddItem;