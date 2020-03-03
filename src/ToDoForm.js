import React from 'react';
import ListItems from './ListItems';

//import Input from './Input';



class ToDoForm extends React.Component {

    //references : https://reactjs.org/docs/forms.html
    //store value
    constructor(props){
        super(props);
        this.state = {
         items:[],
         currentItem:{
            text:'',
            key:''
         }
        }
        //if experiencing performance issues, avoid using bind or arrow functions in render.
        this.handleInput = this.handleInput.bind(this);
        this.addButton = this.addButton.bind(this);//this keyword point to class
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        
    }

     handleInput(e){
        this.setState({
            //variable that we want to update by using useState
            currentItem:{
            text: e.target.value, //value line67
            key: Date.now()
            }
        })
    }
    

    addButton(e){
        
        e.preventDefault();//when user click the button the page will not refresh
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !==""){
            const items = [...this.state.items, newItem];//destructuring assignment
            this.setState({
                    items: items,
                    currentItem:{
                        text:'',
                        key:''
                    }
            })
        }
    }

    deleteItem(key){
        console.log("Button delete is clicked")
        const filteredItems= this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items: filteredItems
            })
    }

    setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item=>{      
            if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
            }
        })
        this.setState({
            items: items
        })     
     }

    render () {

      //STYLE
        const horizontalline = {
        border: '5px solid #fff',
        width: '70%',
        margin: 'auto',
        marginTop: '2%',
        marginBottom: '2%',
        };
        const addbtn= {
        backgroundColor: '#00A8A8',
        width: '35px',
        height: '35px',
        cursor: 'pointer',
        fontWeight: 'bolder',
        fontSize:'18px',
        color:'#000',
        }

        const inputField={
        backgroundColor: '#ffff',
        border: '3',
        borderColor:'#00A8A8',
        width: '330px',
        height: '30px',
        fontSize:'18px',
        color: '#000',
        marginLeft: '40%',
        }


        return(
        
        <div>
            <form >
                <input style={inputField} type="text" value={this.state.currentItem.text} onChange= {this.handleInput} placeholder="Add List" />
                <button style={addbtn} onSubmit={this.addButton} onClick={this.addButton} ><i> + </i></button>
            </form> 
            <div style={horizontalline}/>
        
              <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        </div>
        );  
    }
}
export default ToDoForm;