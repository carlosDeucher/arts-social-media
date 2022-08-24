import React, {useRef} from "react"
import { connect } from "react-redux"
import "./Modals.css"
import {FaTimes} from "react-icons/fa"

const ModalOfAddArt=({setModalOfAddArtOpen, setMockPublishs, userPhoto, userId})=>{
  const mockId=useRef(4)
  const nameOfArtRef=useRef("")
  const linkOfArtRef=useRef("")
  const techniqueOfArtRef=useRef("")
  const dimensionsRef=useRef("")
return (
  <div className="modal-wrapper">
    <div className="modal-box">
      <header className="header-of-modal">
        
          <div className="artist-logo" style={{backgroundImage:`url(${userPhoto})`}}></div>
          <FaTimes className="close-button" onClick={()=>setModalOfAddArtOpen(false)}></FaTimes>
        
      </header>
      <h2 className="modal-title" style={{marginRight:"50px"}}>Salvar nova arte.</h2>
    <form>
    <section className="input-text-group">
      <div className="input-wrapper">
        <label className="label-modal-add-art" htmlFor="input-name-of-art">Nome da arte:</label>
        <input className="input-modal-add-art" id="input-name-of-art" type="text" ref={nameOfArtRef} onChange={(e)=>nameOfArtRef.current=e.target.value}></input>
      </div>
      <div className="input-wrapper">
        <label className="label-modal-add-art" htmlFor="input-link-of-art">Link da arte:</label>
        <input className="input-modal-add-art" id="input-link-of-art" type="text" ref={linkOfArtRef}  onChange={(e)=>linkOfArtRef.current=e.target.value}></input>
      </div>
      <div className="input-wrapper">
        <label className="label-modal-add-art" htmlFor="input-technique-of-art">Técnica da arte:</label>
        <input className="input-modal-add-art" id="input-technique-of-art" type="text" ref={techniqueOfArtRef}  onChange={(e)=>techniqueOfArtRef.current=e.target.value}></input>
      </div>
      <div className="input-wrapper">
        <label className="label-modal-add-art" htmlFor="input-technique-of-art">Dimensões:</label>
        <input className="input-modal-add-art" id="input-technique-of-art" type="text" ref={dimensionsRef}  onChange={(e)=>dimensionsRef.current=e.target.value}></input>
      </div>
    </section>
      <input className="save-button-of-add-art" type={"submit"} onClick={(e)=>{
        e.preventDefault();

        console.log(nameOfArtRef.current,linkOfArtRef.current,techniqueOfArtRef.current)
        if(!nameOfArtRef.current.length || !linkOfArtRef.current.length) return 
        setMockPublishs((previousPublishs)=>[...previousPublishs,{id:mockId,nameOfArt:nameOfArtRef.current,artPhoto:linkOfArtRef.current,techniqueOfArt:techniqueOfArtRef.current,dimensions:dimensionsRef.current ,artistId:userId}])
        mockId.current+=1
        setModalOfAddArtOpen(false);
      } } value="Salvar"></input>
      </form>
    
    
    </div>
  </div>
)
}
const mapStateToProps=(state)=>{
  return ({
  userId:state.userReducer.userId,
  userPhoto:state.userReducer.userPhoto
  })
}

export default connect(mapStateToProps)(ModalOfAddArt)
