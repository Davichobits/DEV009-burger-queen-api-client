
export const Login = () => {
  return (
    <form action="" className=" w-[350px] flex flex-col mx-auto gap-6">
      <input className="border border-gray-400 rounded-lg p-3" type="text" name="username" id="username" placeholder="Usuario" />
      <input className="border border-gray-400 rounded-lg p-3" type="password" name="password" id="password" placeholder="Contraseña" />
      <input type="submit" value="Ingresar" />
    </form>
  )
}
