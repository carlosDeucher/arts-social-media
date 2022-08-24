import React, {useState} from "react"
import "./Feed.css"
import {FaLock,FaLockOpen} from "react-icons/fa"

const Feed= (props)=>{
  
  return(
    <section className="feed">
      
      {props.mockPublishs.map((publication, index)=><Publication key={index} publication={publication} setModalOpen={props.setModalOfArtInfosOpen}></Publication>)}
    </section>
     
    

  )
}

export default Feed

const Publication= ({publication, setModalOpen})=>{
     const [clicked, setClicked]= useState(false)
  return(
    <div  className="publication">
      <div className="user-info">
        <h2 className="art-name" clicked={clicked.toString()}  onClick={()=>{setClicked(true)}}>{clicked ?publication.nameOfArt : (<FaLock style={{color:"var(--primary-color)", fontSize:"15px"}}></FaLock>)}</h2>
        
      </div>
      <img className="art" src={publication.artPhoto} alt="an art" onClick={()=>setModalOpen(publication.id)}></img>
    </div>
  )
}