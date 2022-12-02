import { useState, useEffect } from "react";
import { Container, Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { db} from "./firebase-config";
// import storage from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



import Home from "./pages/Home";
import Gallerypage from "./pages/Gallerypage";
import Studpro1 from "./pages/Studpro1";
import Studpro2 from "./pages/Studpro2";
import Studpro3 from "./pages/Studpro3";
import Studpro4 from "./pages/Studpro4";


function App() {
  
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const [companys, setCompanys] = useState([]);
  const [images, setImages] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const CompanyColltectionRef  = collection(db,"Sponsors");
  const ImagesColltectionRef  = collection(db,"Images");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getCompany = async () => {
      const data = await getDocs(CompanyColltectionRef);
      setCompanys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getImages = async () => {
      const data = await getDocs(ImagesColltectionRef);
      setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    
    };

    getUsers();
    getCompany();
    getImages();
  }, [usersCollectionRef,CompanyColltectionRef,ImagesColltectionRef]);

  return (
    <div>

      <Navbar bg="light" variant="light"  collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home">
        {images.map((item, idx) => (
          <img
            src={item.Studprologo}
            width="130"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />))}
        </Navbar.Brand>
        <div className="navbar">
        <Navbar.Toggle />

        <Navbar.Collapse >
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown href="#features" title= 'past events'>
            <NavDropdown.Item href="/Studpro1">Studpro 1.0</NavDropdown.Item>
            <NavDropdown.Item href="/Studpro2">Studpro 2.0</NavDropdown.Item>
            <NavDropdown.Item href="/Studpro3">Studpro 3.0</NavDropdown.Item>
            <NavDropdown.Item href="/Studpro4">Studpro 4.0</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Gallery">Gallery</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </div>
        </Container>
        
      </Navbar>
      <Router>
      <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/Gallery" element={<Gallerypage/>} />
          <Route path="/Studpro1" element={<Studpro1/>} />
          <Route path="/Studpro2" element={<Studpro2/>} />
          <Route path="/Studpro3" element={<Studpro3/>} />
          <Route path="/Studpro4" element={<Studpro4/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;