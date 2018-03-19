import  React  from 'react';
import {Item} from './../model/Item';
import './CSS/ItemOutput.css';
import {store} from './../store/store';

 export  class  ItemOutput extends React.Component{
  constructor(props){
    super(props);   
  }
    markUnmarkDelete(event){
    if(this.props.itemOutput.markForDelete==false){
      event.target.className="markdel";
    }else{
      event.target.className="unmarkdel";
      }
     store.dispatch({
      type:'MarkDel' ,
      payload:{no :this.props.itemOutput.id} 
    });


    }

  render(){
 return(
    <div>
    <div className="row">
    <div className="col col-lg-1">    {this.props.itemOutput.id}</div>        
    <div className="col col-lg-1">      {this.props.itemOutput.name}</div>
    <div className="col col-lg-5">  <img className="item-image"  src={this.props.itemOutput.url} alt="item-image"/></div>
    <div  className="col col-lg-1">   {this.props.itemOutput.price}</div>
    <div  className="col col-lg-1">   <img className="item-edit"  src="http://www.mapcentia.com/images/icons/frontpage/edit.png" alt="edit"/>  </div> 
    <div  className="col col-lg-1"><img className="item-delete" onClick={this.markUnmarkDelete.bind(this)} src="https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/b/b1/Delete_Icon.png " alt="delete"/>  
     </div>
    </div>


</div>      
  )
  }  
  }
  
    



