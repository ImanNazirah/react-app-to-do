import React from 'react';
import './ListStyle.css';

function ListItems(props){     
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
          <p>
            <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
            <button className="removebutton" onClick={() => {props.deleteItem(item.key)}}><i> - </i></button>
          </p>
     
    </div>})


    return(
      <div>  {listItems}</div>
    )
}
 export default ListItems;

     /*const liststyle = {
          color: '#fff',
          width: '300px',
          margin: '20px auto',
          height: '50px',
          backgroundColor: '#0C6980',
          borderRadius: '5px',
        }
        const pstyle= {
          padding:'10px',
          fontSize:'20px',
          fontWeight: 'bold',
          fontVariant: 'small-caps',
          position: 'relative',
        }
        const removebutton= {
          backgroundColor: '#C4DBE0',
          width: '25px',
          height: '25px',
          cursor: 'pointer',
          fontWeight: 'bolder',
          fontSize:'18px',
          color:'#000',
          float:'right',
        }
        const listpinput= {
          backgroundColor: 'transparent',
          boder: '0',
          color:'#fff',
          fontSize: '20px',
          }
*/
/*
  //input field for editing text of the list item we added 
    const items = props.items;
    const listItems = items.map(item =>
      {
       return(
          <div style={liststyle} key={item.key}>
            <p style={pstyle} >
             <input style={listpinput} type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
            <button style={removebutton} onClick={() => {props.deleteItem(item.key)}}><i> - </i></button>
            </p>
          </div>
        )
      }
    )
    return (
      <div>{listItems}</div>
    )
}
export default ListItems;



 return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>.  npm - -S react-flip-move

*/

