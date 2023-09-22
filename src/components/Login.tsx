/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch, AppDispatch } from "../redux/store";
import { loginUser } from "../redux/features/user/user-slice";
import { userLogin } from "../api/apiUser";

const Login = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch: AppDispatch = useAppDispatch();
  const[ login, setLogin ] = useState({ email: '', password: ''})

  const changeForm = (e: any) => {

    const { name, value } = e.target;

    setLogin({ ...login, [name]: value })
  }

  const handleLogin = () => {
  console.log("Dados :", login);
  dispatch(userLogin(login));
}


    return(
        <>
        <h1>Login</h1>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Acesse sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  onChange={changeForm}
                  value={login.email}
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  onChange={changeForm}
                  value={login.password}
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </div>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
        </>
    )
}

export default Login;
function preventDefault() {
  throw new Error("Function not implemented.");
}

