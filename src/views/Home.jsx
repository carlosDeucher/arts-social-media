import React, {useState} from "react"
import { connect } from "react-redux";

import './Home.css';
import "./elements.css"
import "./variables.css"

import {Link} from "react-router-dom"
import { FaEnvelope,FaSignOutAlt,FaPlusCircle, FaSearch} from "react-icons/fa";

import Feed from "./Feed"
import ModalOfInfosArt from "./ModalOfArtInfos"
import ModalOfAddArt from "./ModalOfAddArt"
import Sidebar from "./Sidebar";


const iconsStyles={color:"var(--primary-color)",fontSize:"50px",margin: "20px 0"}
const mockArtists=[{id:1,name:"Van Gogh",artistLogo:"https://pbs.twimg.com/profile_images/1369019107660693506/ygKrb8My_400x400.jpg"},{id:2, name:"Carlos", artistLogo:"https://media-exp1.licdn.com/dms/image/C4D03AQFypstqyrRD6w/profile-displayphoto-shrink_100_100/0/1659722505987?e=1666828800&v=beta&t=70i8K6kbuwhYw2v8S1odVVpcKKgwQXH-d2VpfIH0hN0"},{id:3, name:"Joãozinho", artistLogo:"https://pbs.twimg.com/profile_images/1268640795042689024/PwNgt9do_400x400.jpg"}]
function Home({userPhoto}) {
    const [idModalOfArtInfosOpen, setModalOfArtInfosOpen]=useState(null)
    const [isModalOfAddArtOpen, setModalOfAddArtOpen]=useState(null)
    const [mockPublishs, setMockPublishs]=useState([{id:1,artPhoto:"https://pbs.twimg.com/media/Fa2e9m6X0AAwCdc?format=jpg&name=900x900", nameOfArt:"Segura",techniqueOfArt:"Grafite", artistId:1, dimensions:"600x900cm"},{id:2,nameOfArt:"Coração partido",artPhoto:"https://pbs.twimg.com/media/FaXwSgqWQAIcHpc?format=jpg&name=900x900",techniqueOfArt:"Costura",dimensions:"50x80cm", artistId:3},{ id:3,artPhoto:"https://shayarimaza.com/files/good-night-images/good-night-images/Beautiful-Good-Night-Images.jpg", nameOfArt:"Paisagem",techniqueOfArt:"Pintura",dimensions:"100x100cm",artistId:1}])


    return(
      <main className="app">

           {idModalOfArtInfosOpen && <ModalOfInfosArt mockArtists={mockArtists} mockPublishs={mockPublishs} idOfArt={idModalOfArtInfosOpen} setModalOfArtInfosOpen={setModalOfArtInfosOpen}></ModalOfInfosArt>}
          {isModalOfAddArtOpen && <ModalOfAddArt setMockPublishs={setMockPublishs} setModalOfAddArtOpen={setModalOfAddArtOpen}></ModalOfAddArt>}
          <div className="header-mobile">
              
                <div className="user-photo" style={{backgroundImage:`url(${userPhoto})`}}></div>
              
          </div>
          <div className="sidebar-wrapper">
            <Sidebar setModalOfAddArtOpen={setModalOfAddArtOpen}></Sidebar>
          </div>
          <div className="feed-wrapper">
              <Feed setModalOfArtInfosOpen={setModalOfArtInfosOpen} mockPublishs={mockPublishs}></Feed>
          </div>
          
      </main>
     )
    
}
const mapStateToProps=(state)=>{
  return({userPhoto:state.userReducer.userPhoto,})
}
export default connect(mapStateToProps)(Home);
