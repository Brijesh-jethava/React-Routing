import React from 'react'
import Header from '../Header'
import { blogs } from '../data/blogs'

export default function Blogs() {
    let content = blogs.map((val,i)=>
        {
            return(
            <div className="blogItems" key={i}>
              <h3>{val.title}</h3>
              <p>{val.body}</p> 

              {/* Problem in Linking  */}
              {/* <button><Link to={ `/Blogs/${val.id}`}>Read More</Link></button> */ }

              <button>Read More</button>
            </div>
            
    
            )
           
        })

  return (
    <div>
        
        <>
        <Header/> 
       <br />
       <br />
       <br />
       <br />
       <br />

       <h1 style={{textAlign:'center',padding:'10px'}}>Blog Page</h1>
        <div className="container">
           {content}
       </div>
        </>
        
    </div>
  )
}
