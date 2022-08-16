import { useState, useEffect } from "react";
import { Container, Navbar,Nav, NavDropdown } from 'react-bootstrap';

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

import CarouselContainer from "./Components/CarouselContainer";
import { FooterContainer } from './Components/footer'
// import CompanyCards from "./Components/CompanyCards";



import logo from './assets/images/logo.jpg';
import Album from "./Components/Copyright";

// import NavbarContainer from "./Components/NavbarContainer";

function App() {
  
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const [companys, setCompanys] = useState([]);
  const [images, setImages] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const CompanyColltectionRef  = collection(db,"Sponsors");
  const ImagesColltectionRef  = collection(db,"Images");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

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
      console.log(data);
    };

    getUsers();
    getCompany();
    getImages();
  }, [usersCollectionRef,CompanyColltectionRef,ImagesColltectionRef]);

  return (
    <div>
      {/* <NavbarContainer/> */}

      <Navbar bg="light" variant="light" className="navbar" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home">
        {images.map((item, idx) => (
          <img
            src={item.Studprologo}
            width="120"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />))}
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">Studpro 5.0</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <NavDropdown href="#features" title= 'past events'>
            <NavDropdown.Item href="#action/3.1">Studpro 1.0</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Studpro 2.0</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Studpro 3.0</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action/3.4">Studpro 4.0</NavDropdown.Item>
          </NavDropdown>        
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        
      </Navbar>
      

      <CarouselContainer/>
      <Album/>
      <FooterContainer />
    </div>
  );
}

export default App;