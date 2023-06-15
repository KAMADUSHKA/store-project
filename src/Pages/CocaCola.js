import TextField from '@mui/material/TextField';
import { FieldArray, Form, Formik } from 'formik'
import React from 'react'

export default function CocaCola() {
  return (
    <div>
      <div>
     
     <Formik
       initialValues={{ friends: ['aaaa', 'bbbb'] }}
       onSubmit={values =>
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values }) => (
         <Form>
           <FieldArray
             name="friends"
             render={arrayHelpers => (
               <div>
                 {values.friends && values.friends.length > 0 ? (
                   values.friends.map((friend, index) => (
                     <div key={index}>
                       <TextField name={`friends.${index}`} placeholder={friend} variant="standard" />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add a friend
                   </button>
                 )}
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               </div>
             )}
           />
         </Form>
       )}
     />
   </div>
    </div>
  )
}
