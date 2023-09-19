import { useState } from 'react'
import './loginform.css'

export default function LoginForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    alert('Login feito com sucesso!')
  }

  return (
    <form onSubmit={handleSubmit} className="container-login">
      <h1>Login</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />

      <button className='submit-btn' type='submit'>Sign in</button>
    </form>
  )
}