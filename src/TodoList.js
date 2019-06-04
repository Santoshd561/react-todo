import React, { Component } from 'react'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            arr: [],
            isEditing: false
        }
         

    }
    getinput(event) {

        this.setState({
            name: event.target.value
        });
    }
    onEditClick(event){

    }
    clearAndShow() {
        this.setState({
            name: ""
        })
    }
   

    btnClicked() {
        this.state.arr.push(this.state.name);
        this.setState({
            arr: this.state.arr


        });
        this.clearAndShow()

        
    }


    render() {
        const {isEditing} = this.state.isEditing;
        return (
                
            <div className="wrapper">
             <div className="form-wrapper" style={{height:"1000px",width:"500px",marginTop:"-20px"}}>
             <h1 style={{alignSelf:"center"}}>ToDo List</h1>
             <input type="text" value={this.state.name} onChange={this.getinput.bind(this)} />
                <div>
                <button className="button" style={{marginLeft:"200px"}} onClick={this.btnClicked.bind(this)}>
                    Add
              </button>
              </div>
              <div className="list-type5">
                <ol>
                    {this.state.arr.map((single) => (
                        <div className="header">
                       
                    <li>{single}</li>
                    <button className="button" type="submit">update </button>
                    <button className="button"
                                onClick={() => {
                                    this.state.arr.splice(this.state.arr.indexOf(single), 1);
                                    console.log(this.state.arr);
                                    this.setState({
                                      arr:this.state.arr
                                    })

                                }}>
                                Delete
                            </button> 
                                   
                         
                        </div>

                    ))}
                     </ol>
                     </div>
                            
               

                     </div>
            </div>
           
        );
    }
}
  
export default TodoList