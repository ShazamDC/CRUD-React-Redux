import  React  from 'react';
import { Item } from './../model/Item';
import {store} from './../store/store';
import ItemList from './ItemList';
 export class ItemInput extends React.Component{
     constructor(props){
         super(props);
          }
     doOperations(event){
         var targetValue=event.target.innerHTML;
         if(targetValue=='Add'){  
         store.dispatch({
            type:'Add' ,
            payload:{
               item:{
                   id:this.refs.id.value,
                   name:this.refs.name.value,
                   url:this.refs.url.value,
                   price:this.refs.price.value,
                   markForDelete:false,
               } 
            } 
          })
        }else if(targetValue=='Delete'){
            store.dispatch({
                type:'Delete',  
                payload:null
            })
        
        }else if(targetValue=='Save'){
            store.dispatch({
                type:'Save',  
                payload:null
            })
        
        }else if(targetValue=='Load'){
            store.dispatch({
                type:'Load',  
                payload:null
            })
        
        }
      } 


     


  

     

 
 render(){
     return(
        <div>
            



          <div className="form-group">
                <label >Id</label>
                <input type="text" placeholder="Type ItemId"  className="form-control" ref='id'/>
            </div>
            <div className="form-group">
                <label >Name</label>
                <input type="text" placeholder="Type Name" className="form-control" ref='name'/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text"  className="form-control" ref='price'/>
            </div>
            <div className="form-group">
                <label >Url</label>
                <input type="text" placeholder="Type URL" className="form-control" ref='url'/>
            </div>
            <div className="form-group">
                <label >Color</label>
                <input ref="color" type="color" placeholder="Type Color"  className="form-control"/>
            </div>
            <div className="form-group">
                <label >Date</label>
                <input ref="date" type="date" className="form-control"/>
            </div>
            <div className="form-group">
                <label >Desc</label>
                <textarea ref="desc"  className="form-control" rows="10" cols="20" placeholder="Type Desc Here"></textarea>
            </div>
            <div className="form-group">
                <button onClick={this.doOperations.bind(this)}  className="btn btn-primary">Add</button>
                <button onClick={this.doOperations.bind(this)} className="btn btn-primary">Delete</button>
                <button className="btn btn-info">Search</button>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-info">Sort</button>
                <button onClick={this.doOperations.bind(this)} className="btn btn-success">Save</button>
                <button onClick={this.doOperations.bind(this)} className="btn btn-primary">Load</button>
                <button className="btn btn-info">Load from Server</button>
                <button className="btn btn-default">Clear All</button>

            </div>


</div>



          
     )
 }
 
    }
