import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import PageTitle from './components/Typography/PageTitle'
import { Input, Button, Label} from '@windmill/react-ui'
import { EditIcon } from './icons'

export default function Edit() {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }
  return (
    <>
      <div className="px-4 py-3 mb-8 bg-white dark:bg-gray-800">
        <PageTitle>Profile</PageTitle>
        <div class="flex flex-wrap justify-center">
          <div>
            <img src={"https://ui-avatars.com/api/?name=" + "Annas" + "+" + "Abdurrahman" + "&background=random&size=128&rounded=true"} alt="..." class="rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>
        <Label className="mt-4">
          <span>Profile Picture</span>
          <div className="relative">
            <input
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
          <Input  className="mt-1 disabled" placeholder="Username" />
        </Label>
        <Label className="mt-4">
          <span>First Name</span>
          <Input  className="mt-1 disabled" placeholder="First Name" />
        </Label>
        <Editor
          tinymceScriptSrc="tinymce/tinymce.min.js"
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 600,
            automatic_uploads: true,
            images_upload_url: 'http://localhost:3120/api/Post/upload-image/annas120',
            importcss_append: true,
            image_caption: true,
            image_advtab: true,
            images_reuse_filename: true,
            menubar: false,
            toolbar_mode: 'sliding',
            contextmenu: 'link image imagetools table',
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            plugins: ['print preview paste importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media codesample table charmap hr nonbreaking insertdatetime advlist lists wordcount imagetools textpattern noneditable charmap quickbars emoticons'],
            toolbar: 'undo redo | bold italic underline strikethrough |hr| fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap emoticons | fullscreen  preview print | insertdatetime insertfile image media link codesample | ltr rtl ',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}>Log editor content</button>
        <div className='mt-4'>
          <Button iconLeft={EditIcon}>
            <span>Update Post</span>
          </Button>
        </div>
      </div>
    </>
  )
}