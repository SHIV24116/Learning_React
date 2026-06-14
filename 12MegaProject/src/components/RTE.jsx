//Real time editor

//import {Editor} from "@tinymce/tinymce-react"
// export default function RTE({name,control,label,defaultValue=""}){
//     return (
//         <Editor
//         initialValue="default value"
//         init={
//             {branding:false,
//             height:500,
//             menubar:true,
//             plugins:[
//                 'advlist autolink lists link image charmap print preview anchor',
//                 'searchreplace visualblocks code fullscreen',
//                 'insertdatetime media table paste code help wordcount'
//             ],
//             toolbar:'undo redo | formatselect | bold italic backcolor |\
//             alignleft aligncenter alignright alignjustify |\
//             bullist numlist outdent indent | removeformat | help'

//             }
//         }
//         ></Editor>
//     )
// }
/////but we will do it using controller(from react hook form).......can also do it using forwardRef

import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor                    /////jo abhi dekha
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}  //edigor me kuch bhi change ho to wo govern hoga {onChange} se
        />
    )}
    />

     </div>
  )
}


