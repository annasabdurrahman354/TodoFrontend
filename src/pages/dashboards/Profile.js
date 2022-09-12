import React from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import { Input, Button, Label} from '@windmill/react-ui'
import { EditIcon } from '../../icons'

function Profile() {
  return (
    <>
      <PageTitle>Profile</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      
        <div class="flex flex-wrap justify-center">
          <div>
            <img src={"https://ui-avatars.com/api/?name=" + "Annas" + "+" + "Abdurrahman" + "&background=random&size=128&rounded=true"} alt="..." class="rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>
        <Label className="mt-4">
          <span>Profile Picture</span>
          <div className="relative">
            <input
              disabled={true}
              className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Profile Picture "
            />
            <button className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Select
            </button>
          </div>
        </Label>
        <Label className="mt-4">
          <span>Username</span>
          <Input disabled className="mt-1" placeholder="Username" />
        </Label>
        <Label className="mt-4">
          <span>First Name</span>
          <Input  className="mt-1" placeholder="First Name" />
        </Label>
        <Label className="mt-4">
          <span>Last Name</span>
          <Input  className="mt-1" placeholder="Last Name" />
        </Label>
        <div className='mt-4'>
          <Button iconLeft={EditIcon}>
            <span>Update Profile</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Profile
