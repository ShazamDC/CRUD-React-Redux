var initialState={
    itemArray:[]
};

export const Reducer=(state=initialState,action)=>{
var temp=[];
temp=[...state.itemArray];
switch(action.type){
    case 'MarkDel':
    console.log("in markdel");
    console.log("before marking ");
    console.log(temp);
    console.log(action.payload.no);
for(let i=0;i<temp.length;i++){
if(temp[i].id==action.payload.no){
 temp[i].markForDelete=!temp[i].markForDelete;   
}
}
console.log("after marking ");
console.log(temp);
    
 return {
         itemArray:temp
     }   
          break;

case 'Add':
console.log(action.payload.item);
temp.push(action.payload.item);
 return {
     itemArray:temp
 }   
      break;
case 'Delete':  
temp=temp.filter((item)=>item.markForDelete==false);
 return { 
     itemArray:temp
 }   
      break;
      case 'Save':  
      if(!localStorage){
        alert("Ur Browser Doesn't Support LocalStorage...");
        return ;
    }
    localStorage.items=JSON.stringify(temp);
    alert("Data is Stored...");
      return { 
           itemArray:temp
       }   
            break;
 case 'Load':  
 if(!localStorage){
    alert("Ur Browser Doesn't Support LocalStorage...");
    return ;
}
 if(!localStorage.items){
    alert("LocalStorage is Empty Can't Load any Record...");
    return ;
}
temp= JSON.parse(localStorage.items);
 return { 
     itemArray:temp
 }   
      break;         
      default:
      return state;
}
}

