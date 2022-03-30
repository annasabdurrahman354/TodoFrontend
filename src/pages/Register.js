import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Input, Label, Button } from '@windmill/react-ui'
import { register } from '../services/auth';
import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  
  let history = useHistory();

  const handleRegister = () => {
    if(password !== confirmPassword){
      setMessage("Password confirmation doesn't match")
    }
    else{
      setMessage([])
      register(username, email, firstname, lastname, password, setLoading, setMessage, history)
    }
  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <Label>
                <span>Username</span>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1" type="text" placeholder="Enter your accounts username" />
              </Label>

              <Label className="mt-4">
                <span>Email</span>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" type="email" placeholder="Enter your email" />
              </Label>

              <Label className="mt-4">
                <span>First Name</span>
                <Input value={firstname} onChange={(e) => setFirstname(e.target.value)} className="mt-1" type="text" placeholder="Enter your first name" />
              </Label>

              <Label className="mt-4">
                <span>Last Name</span>
                <Input value={lastname} onChange={(e) => setLastname(e.target.value)} className="mt-1" type="text" placeholder="Enter your last name" />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1" placeholder="***************" type="password" />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1" placeholder="***************" type="password" />
              </Label>
              
              <Label className="mt-6" check>
                <Input type="checkbox"/>
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <p className='text-red-500 font-normal my-2'>
                {JSON.stringify(message)}
              </p>

              <p className='text-red-500 font-normal my-2'>
                {loading.toString()}
              </p>

              <Button onClick={handleRegister}  block className="mt-4">
                Create account
              </Button>

              <hr className="mt-4 mb-6" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Register
