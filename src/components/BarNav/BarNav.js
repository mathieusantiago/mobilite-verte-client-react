import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import _get from "../../utils/dataUtils";
import NavLogo from "../../assets/Logo_Greenmove.png";
import './BarNav.css'
import _strNoAccent from "../../utils/strNoAccent";
import { Link } from "react-router-dom";

const BarNav = () => {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    getCategoris();
  }, []);

  const getCategoris = () => {
    _get("get", "api/categorie", "", "", "").then((res) => {
      setCategorie(res.data); 
    });
  };

  return (
    <div className="mb-5">
      <Navbar.Brand  className="d-flex justify-content-center mt-2 bg-light" href="/">
        <img src={NavLogo} alt="Logo GreenMove" className="logo-greenMove ms-1"/>
      </Navbar.Brand>
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navBarFont'>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link className="ms-4 me-4">
                <Link className='barNav-link' to='/'>
                  Home
                </Link>
              </Nav.Link>
              {categorie.map((cat) => {
                if (cat.categorie_type.length > 0 && cat.state) {
                  return (
                    <NavDropdown
                      title={cat.categorie_name}
                      id="basic-nav-dropdown"
                      key={cat._id}
                      className="ms-4 me-4"
                    >
                      {cat.categorie_type.map((subCat) => {
                        if(subCat.status){
                          return (
                            <NavDropdown.Item key={subCat._id}>
                              <Link className='barNav-link' to={_strNoAccent(subCat.name_type).split(' ').join('_').toLowerCase()}>
                                {subCat.name_type}
                              </Link>
                            </NavDropdown.Item>
                          );
                        }else{
                          return null
                        }
                      })}
                    </NavDropdown>
                  );
                } else {
                  if(cat.state){
                    return <Nav.Link className="ms-4 me-4" key={cat._id}>
                      <Link className='barNav-link' to={_strNoAccent(cat.categorie_name).split(' ').join('_').toLowerCase()}>
                        {cat.categorie_name}
                      </Link>
                      </Nav.Link>;
                  }else{
                    return null
                  }
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarNav;
