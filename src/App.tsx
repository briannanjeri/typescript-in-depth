import React, { Children, ReactNode, useState } from 'react';

//conventional props

const Heading=({title, children}:{title:string, children:ReactNode})=>{
   return(
    <div>
    <h2>{title}</h2>
    <p>{children}</p>
    </div>
   )
}
 
//functional props

function TextWithNumber({header,children}:
  {header:(num:number)=>ReactNode;
  children:(num:number)=>ReactNode}
  ){
  const[state, setState]=useState<number>(1)
  return(
    <div>
      <h2>{header(state)}</h2>
      <div>
      {children(state)}
      </div>
      <div>
        <button onClick={()=>setState(prev=>prev+1)}>Add</button>
      </div>
    </div>
  )
}

//list
function List<listitem>({items, render}:{items:listitem[], 
  render:(item:listitem)=>ReactNode})
{
  return(
    <ul>
      {items.map((item,index)=>(
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )

}


function App() {
  return (
    <div className="App">
      <Heading title='hello'>hi</Heading>
      <TextWithNumber header={(num:number)=><span>header {num}</span>}>
      {(num:number)=><div>today number is {num}</div>}</TextWithNumber>
      <List items={["kamau", "Brian", "jose"," will", "john","junior"]} 
        render= {(item:string)=><div>{item.toLowerCase()}</div>}/>
    </div>
  );
}

export default App;
