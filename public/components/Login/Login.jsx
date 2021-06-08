import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import logo from '../../images/HiStream.png'
import Button from '../Button'
import './Login.css'

const Login = () => {
  const history = useHistory()

  const authentication = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(googleAuthProvider).then((response) => {
      const currentUser = response.user.displayName
      localStorage.setItem('currentUser', currentUser)
      history.push('/assistance')
    })
  }

  return (
    <div className="loginContainer">
      <img src={logo} alt="HiStream-logo" />
      <Button option="Gmail Authentication" onClick={authentication} />
    </div>
  )
}

export default Login
