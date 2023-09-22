import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

export const Login = () => {
  const [setLocalStorage]  = useLocalStorage('token')
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userEmail = event.target[0].value as string;
    const userPass = event.target[1].value as string;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPass }),
    };

    fetch("http://localhost:8080/login", options)
      .then((res: Response) => res.json())
      .then((data) => {
        setLocalStorage(data.accessToken)
        navigate("/ordering");
      })
      .catch((err) => setErrorMessage(err));
  };

  return (
    <main className='grid place-content-center justify-center h-[100vh]'>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-[350px] flex flex-col mx-auto gap-6"
      >
        <input
          className="border border-gray-400 rounded-lg p-3"
          type="text"
          name="username"
          id="username"
          placeholder="Usuario"
          defaultValue="grace.hopper@systers.xyz"
        />
        <input
          className="border border-gray-400 rounded-lg p-3"
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          defaultValue="123456"
        />
        <p>{errorMessage}</p>
        <input className="border border-gray-400 rounded-lg p-3 cursor-pointer bg-slate-200 hover:bg-slate-300" type="submit" value="Ingresar" />
      </form>
    </main>
  );
};
