import 'bootstrap/dist/css/bootstrap.min.css';
import react, {useState} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import logo from "../images/library book logo.png";
import "../App.css"
function Header(){
  const [showForm,setShowForm] = useState(false);
  const [id, setId] = useState('');
  const [bookname, setBookname] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishdate, setPublishdate] = useState('');

  const addBook =  (e) => {
    e.preventDefault();
     axios.post('/admindata', {
      id: id,
      bookname: bookname,
      author: author,
      genre: genre,
      publishdate: publishdate
    }).then((response)=>{
      console.log(response);
      window.location.reload();
    }); 
    
  }
  console.log(addBook)
  const ButtonStyle = {
    marginTop: "1%",
    marginLeft: "10%",
    paddingRight: "30px"
  };
  
  const ButtonContainerStyle = {
    // marginTop: "10%",
    display: "flex"
  };
  
  const FirstButtonStyle = {
    marginRight: "10px"
  };

  const labelStyle = {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  };

  return(
    <div>
    <div>
  <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div className="header-logo">
    </div>
    <div className="header-mid">
      <h3>Library Book Management</h3>
    </div>
    <div className="header-links">
      <div className="right-link" style={{ marginLeft: 'auto' }}>
      </div>
    </div>
  </div>
  <hr />
</div>
        <Button variant="primary" style={{ ...ButtonStyle, ...FirstButtonStyle }} onClick={() =>{setShowForm(!showForm)}}>
          {!showForm ? "Add Books" : "Remove"} 
        </Button>
        {showForm && (
          <Form>
            <label style={labelStyle}>Add Books</label>
            <Form.Group className="mb-3" controlId="formBasicCenter">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicLocality">
              <Form.Label>Bookname</Form.Label>
              <Form.Control type="text" placeholder=" Enter Bookname" onChange={(e) => setBookname(e.target.value)} />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicSlots">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder=" Enter Author" onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSlots">
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" placeholder=" Enter Genre" onChange={(e) => setGenre(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSlots">
              <Form.Label>Publishdate</Form.Label>
              <Form.Control type="text" placeholder=" Enter Publishdate" onChange={(e) => setPublishdate(e.target.value)} />
            </Form.Group>
  
            <Button variant="primary" type='submit' onClick={addBook}>
              Submit
            </Button>
          </Form>
        )}


</div>


    
  )
}
export default Header;

