// export function UserForm({ addContact }) {

//     const [input, setInput] = useState({
//       name: "",
//     });
  
//     const handleChange = (event) => {
//       setInput({ ...input, [event.target.name]: event.target.value });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       addContact(input);
//       setInput({ name: "", email: "", phonenumber: "" });
//     };
  
//     return (
//       <Form>
//       <Form.Title>Adjust Table</Form.Title>
//       <Form.Subtitle>Input me with some data</Form.Subtitle>
//       <Form.Body id="form" onSubmit={handleSubmit}>
//         <Form.Wrapper>
//           <Form.Label type="text">
//             name:
//             <Form.Input placeholder="Enter name.." id="name" name="name" type="text"  value={input.name}
//               onChange={handleChange}/>
//           </Form.Label>
//           <Form.Label type="email">
//             email:
//             <Form.Input placeholder="Enter email.." id="email" name="email" type="email"  value={input.email}
//               onChange={handleChange}/>
//           </Form.Label>
//             <Button text="submit" buttonbg="bg-indigo-500" buttonring="ring-indigo-500">Submit</Button>
//         </Form.Wrapper>
//       </Form.Body>
//       <Form.Content>
//       </Form.Content>
//     </Form>
//     );
//   }
  