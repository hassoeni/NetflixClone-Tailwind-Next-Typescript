import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node, 
    id: PropTypes.string, 
    type: PropTypes.string, 
    name: PropTypes.string, 
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

const defaultProps = {};



Form.propTypes = propTypes;
Form.defaultProps = defaultProps;


// destructured props 

function Form({children }) {
    return (
        <div method="POST" className="max-w-lg p-8 mx-auto my-10 bg-white shadow rounded-xl shadow-slate-300">{children}</div>
    )
}

const Logo = ({children}) => <div>{children}</div>
const FormTitle = ({children}) => <div className="text-4xl font-medium">{children}</div>
const FormSubtitle = ({children}) => <p className="py-6 text-slate-500">{children}</p>
const FormBody = ({children, id, handleSubmit}) => <form className="my-10" id={id} 
onSubmit={handleSubmit}
>{children}</form>
const FormItemWrapper = ({children}) => <div className="flex flex-col space-y-5 ">{children}</div>
const FormLabel = ({children, type}) => <label htmlFor={type}>{children}</label>
const FormInput = ({placeholder, onChange, id, name ,type, value }) => <input placeholder={placeholder} onChange={onChange} id={id} name={name} type={type} value={value} className="w-full px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 hover:shadow" />
const InputFile = ({placeholder, id, name, type}) => <input placeholder={placeholder} id={id} name={name} type={type} className="sr-only" />
const Select = ({children, id, placeholder, type, name}) => <select placeholder={placeholder} id={id} name={name} type={type} className="h-full p-2 py-0 pl-2 text-gray-500 bg-transparent border border-transparent border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm border-rounded">{children}</select>
const FormContentWrapper = ({children}) => <div className="flex flex-row justify-between">{children}</div>


Form.Body = FormBody;
Form.Wrapper = FormItemWrapper;
Form.Logo = Logo;
Form.Title = FormTitle;
Form.Subtitle = FormSubtitle;
Form.Content = FormContentWrapper;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.UploadFile = InputFile;
Form.Select = Select;


export default Form

// // How to use optional items 
//     <Form.Label>Currency</Form.Label>
//     <Form.Select type="select">
//       <option>USD</option>
//       <option>EUR</option>
//       <option>PND</option>
//     </Form.Select>
//     {/* <div>

// FILE HANDLING
//       <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
//       <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//         <div class="space-y-1 text-center">
//           <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
//             <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//           <div class="flex text-sm text-gray-600">
//             <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
//               <span>Upload a file</span>
//               <Form.UploadFile id="file-upload" name="file-upload" type="file" />
//             </label>
//             <p class="pl-1">or drag and drop</p>
//           </div>
//           <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//         </div>
//       </div>
//     </div> */}
// // </Form.Wrapper>
// // </Form.Body>
// // <Form.Content>

// // </Form.Content>
// // </Form> */}