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
import CompanyCards from "./Components/CompanyCards";


import logo from './assets/images/logo.jpg';
import Album from "./Components/Copyright";

// import NavbarContainer from "./Components/NavbarContainer";

function App() {
  
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const [companys, setCompanys] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const CompanyColltectionRef  = collection(db,"Sponsors");

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

    getUsers();
    getCompany();
  }, [usersCollectionRef,CompanyColltectionRef]);

  return (
    <div>
      {/* <NavbarContainer/> */}

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Studpro 5.0</Navbar.Brand>
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
        </Container>
      </Navbar>

      <CarouselContainer/>
      {/* <CompanyCards/> */}
      <Album/>
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
      {/* <img 
      src="https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/4f32b-16486378788659-1920.webp?alt=media&token=2963b3a3-4476-458e-aaed-c2513760344b"
      alt="new"
      /> */}
      {companys.map((company) => {
        return (
          <div>
            {" "}
            <h1>Name: {company.name}</h1>
            <img
            src={company.logo}
            alt="new"
            />
            
          </div>
        );
      }
      )}
      <h1>vyvhk</h1>
      
      
    </div>
  );
}

export default App;