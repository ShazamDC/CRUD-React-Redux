/* import React from 'React';
import  {ItemOutput}  from './ItemOutput';
import {connect}from 'react-redux';
const  ItemList=(props)=>{
return(
   <div>
          {props.items.map((item)=><ItemOutput itemOutput={item}/>
    )}
     </div>   
)
}

const mapStateToProps=(state)=>{
    return{
        items:state.itemArray
    }
     
  }
  
  
  
  export default connect(mapStateToProps)(ItemList);
*/

import React from 'react';
import {connect} from 'react-redux';
import {ItemOutput} from './ItemOutput';

const ItemList=(props)=>{
    console.log("hello",props);
    return(
        <div>
    {props.items.map((item)=><ItemOutput itemOutput={item}/>
    )}
    </div>
    );

}
    
 const mapStateToProps=(state)=>{
  return{
      items:state.itemArray
  }
   
}
export default connect(mapStateToProps)(ItemList);