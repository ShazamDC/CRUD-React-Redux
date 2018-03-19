import  React from 'react';
import   ItemList  from './../components/ItemList';
import { ItemInput } from './../components/ItemInput';
 export class Crud extends React.Component{
      
    
        render(){
        return(
         <div>
          <ItemInput/>
          <ItemList />    
             </div>   
        )
    }
}


