import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Label, Input, Button } from '@windmill/react-ui'
import ImageLight from '../assets/img/forgot-password-office.jpeg'
import ImageDark from '../assets/img/forgot-password-office-dark.jpeg'
import { forgotPassword } from '../services/auth'

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])

  let history = useHistory();

  const handleForgotPassword = () => {
    if(email === ""){
      setMessage("Please enter your email first!")
    }
    else{
      setMessage([])
      forgotPassword(email, setLoading, setMessage, history)
    }
  };

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
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" placeholder="Enter your email" />
              </Label>

              <p className='text-red-500 font-normal my-2'>
                {JSON.stringify(message)}
              </p>

              <p className='text-red-500 font-normal my-2'>
                {loading.toString()}
              </p>

              <Button onClick={handleForgotPassword}   block className="mt-4">
                Recover password
              </Button>

              <hr className="mt-4 mb-6" />

              <p>
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Back to login page
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
