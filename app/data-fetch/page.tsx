import React from 'react'

async function fetchData() {
  const res =await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3}});
  const data =res.json();
  return data
}

export default async function page(){
  const data= await fetchData();

  const style ={
    backgroundColor:"red",
    color:"white"
   }

  return (
    <div>
      <h1 style={style}>Data fetch {new Date().toLocaleTimeString()}</h1>
      <ul>
        {data.map((d : any) => (
          <li style={{backgroundColor: d.id%2 > 0 ? 'green': 'orange',color:'white'}} key={d.id}> {d.id} - {d.title}</li>
        ))}
      </ul>
    </div>
  )

 
}

