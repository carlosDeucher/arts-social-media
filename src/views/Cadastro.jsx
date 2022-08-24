import React, {useRef} from "react"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from "../store/actions/user"
import "./Login-Cadastro.css"
const Cadastro=(props)=>{
  const navigate= useNavigate();
  const userNameRef=useRef("");
  const linkPhotoRef=useRef("");
  const passwordRef=useRef("");
  const passwordConfirmedRef=useRef("");
  const createUser=()=>{
    if(passwordRef.current !== passwordConfirmedRef.current) return console.log("The passwords are diferent")
    props.createUser({userName:userNameRef.current, userPhoto:linkPhotoRef.current})
    navigate("/", {replace:true})
  }
  return(
    <div className="login-box-wrapper">
      <div className="login-box">
        <h2 className="login-title">Cadastro</h2>
        <label htmlFor="username" >Digite um nome de usuário:</label>
        <input id="username" type="text" ref={userNameRef} onChange={((e)=>userNameRef.current=e.target.value)}></input>
        <label htmlFor="link-user-photo" >Link para foto de perfil:</label>
        <input id="link-user-photo" type="text" ref={linkPhotoRef} onChange={((e)=>linkPhotoRef.current=e.target.value)}></input>
        <label htmlFor="password">Digite uma senha:</label>
        <input id="password" type="password" ref={passwordRef} onChange={((e)=>passwordRef.current=e.target.value)}></input>
        <label htmlFor="confirm-password">Confirme sua senha:</label>
        <input id="confirm-password" type="password" ref={passwordConfirmedRef} onChange={((e)=>passwordConfirmedRef.current=e.target.value)}></input>
        <button onClick={()=>createUser()} className="login-button" style={{alignSelf:"flex-end"}}>Salvar</button>
      </div>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
         createUser:(newUser)=>{
             const action= loginUser({id:2,name:newUser.userName,userPhoto:newUser.userPhoto})
             dispatch(action);
         },
  }
}
export default connect(null,mapDispatchToProps)(Cadastro)