import React, {useRef} from "react"
import {Link, useNavigate} from "react-router-dom"
import "./Login-Cadastro.css"
const Login=()=>{
  const navigate= useNavigate();
  const userNameRef=useRef("")
  const passwordRef=useRef("")
  const login=()=>{
      navigate("/", {replace:true})
  }
  return(
    <div className="login-box-wrapper">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <label htmlFor="username">Digite o usuário:</label>
        <input id="username" type="text" ref={userNameRef} onChange={((e)=>userNameRef.current=e.target.value)}></input>
        <label htmlFor="password">Digite sua senha:</label>
        <input id="password" type="password" ref={passwordRef} onChange={((e)=>passwordRef.current=e.target.value)}></input>
        <button className="login-button" onClick={()=>login()}>Entrar</button>
        <p className="dont-have-an-account">Não possui uma conta? <Link to="/cadastro" style={{color:"var(--secundary-color", textDecoration:"underline", cursor:"pointer"}}>Clique aqui</Link> para criar uma.</p>
      </div>
    </div>
  )
}
export default Login