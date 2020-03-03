import React from 'react';
import ToDoForm from './ToDoForm';


//STYLING
const apptitle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '70px',
};




class ToDoList extends React.Component {  
  

  render() {
    return (
      <div>
            <div style= {apptitle}>TO DO LIST</div>   
              <ToDoForm/>

      </div>  

  )};
}

export default ToDoList;
