import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import './Assistance.css'
import Button from '../Button'
import ListedNames from './sub-components/ListedNames'
import logo from '../../images/HiStream.png'

const Assistance = () => {
  const history = useHistory()
  const db = firebase.firestore()
  const currentUser = localStorage.getItem('currentUser')
  const collection = db.collection('students')
  const [students, setStudents] = useState([])

  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const studients = []
      snapshot.forEach((item) => {
        const datos = item.data()
        datos.id = item.id
        studients.push(datos)
      })

      setStudents(studients)
    })
  }, [])

  return (
    <div className="assistance">
      <div className="header">
        <h1>Bienvenido</h1>
        <h1>{currentUser}</h1>
      </div>

      {students.map((result) => (
        <ListedNames result={result} key={result.id} />
      ))}
      <div className="logo">
        <img src={logo} alt="HiStream-logo" />
      </div>
      <div className="buttons">
        <Button option="Regresar" onClick={history.goBack} />
      </div>
    </div>
  )
}

export default Assistance
