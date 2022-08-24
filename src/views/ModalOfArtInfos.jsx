import React,{useState, useEffect} from "react"
import "./Modals.css"

import {FaTimes} from "react-icons/fa"





const Modal=(props)=>{
       const {setModalOfArtInfosOpen,idOfArt, mockPublishs, mockArtists}=props

       console.log(console.log(mockArtists))
       const [artOnModal, setArtOnModal]=useState({})
       const [artistOnModal, setArtistOnModal]=useState({})
       useEffect(()=>{
        console.log("eae")
        console.log(idOfArt)
        //esse código vou substituir por buscas no banco
        if(idOfArt){   
            
            const selectArt=mockPublishs.find(value=> value.id===idOfArt)
            setArtOnModal(selectArt)
            setArtistOnModal(mockArtists.find(value=> value.id===selectArt.artistId))
        }
       },[idOfArt])
       return(
        <div className="modal-wrapper">
        <div className="modal-box">
            <header className="header-of-modal">
                <div className="artist-profile">
                    <div className="artist-logo" style={{backgroundImage:`url("${artistOnModal.artistLogo}")`}}></div>
                    <h2 className="modal-title">{artistOnModal.name}</h2>
                    
                </div>
             
             <FaTimes className="close-button" onClick={()=>setModalOfArtInfosOpen(false)}></FaTimes>
            </header>
            <section className="art-infos">
                <div className="container">
                <p className="description">Nome da arte:</p>
                <h2 className="info">{artOnModal.nameOfArt}</h2></div>
                <div className="container">
                <p className="description">Técnicas da arte:</p>
                <h2 className="info">{artOnModal.techniqueOfArt}</h2></div>
                <div className="container">
                <p className="description">Dimensões:</p>
                <h2 className="info">{artOnModal.dimensions}</h2></div>
            </section>   
                <img className="art-photo" src={artOnModal.artPhoto} alt="imagem da arte"></img>
            
            
        </div>
        </div>
       )
}
export default Modal