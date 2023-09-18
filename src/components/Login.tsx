import { useState } from "react"

export const Login = () => {

  const [errorMessage, setErrorMessage] = useState('')
  
  const handleSubmit = (event) => {
    const userEmail = event.target[0].value;
    const userPass = event.target[1].value;

    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: userEmail, password: userPass})
    }

    fetch('http://localhost:8080/login', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => setErrorMessage(err))
  }

  return (
    <form onSubmit={handleSubmit} action="" className=" w-[350px] flex flex-col mx-auto gap-6">
      <input className="border border-gray-400 rounded-lg p-3" type="text" name="username" id="username" placeholder="Usuario" value='grace.hopper@systers.xyz' />
      <input className="border border-gray-400 rounded-lg p-3" type="password" name="password" id="password" placeholder="Contraseña" value='123456' />
      <p>{errorMessage}</p>
      <input type="submit" value="Ingresar" />
    </form>
  )
}
