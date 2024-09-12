"use client";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
// import logo from "../../../public/logo_webrm.jpg";
import styled from "styled-components";
import Link from "next/link";

function AppHeader() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="./">Reras</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/about">About</Nav.Link>
    //         <Nav.Link href="/data">Data</Nav.Link>
    //         <Nav.Link href="/graph">Graph</Nav.Link>
    //         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <HeaderStyled>
      <nav>
        <div className="logo">
          {/* <Image
            src="s3://rewes2024/favicon.ico"
            alt="logo"
            width={40}
            height={40}
          /> */}
          <h2>
            <Link href={"/"}>Real time Monitor</Link>
          </h2>
        </div>
        <ul className="nav-items">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/data">Data</Link>
          </li>
          <li>
            <Link href="/graph">Graph Data</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    width: 100%;
    background-color: #3b3b3b;
    padding: 0 8rem;
    min-height: 12vh;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      grap: 1rem;
      cursor: pointer;
    }
    .logo h2 {
      margin-left: 5px;
      font-size: 22px;
    }
    .nav-items {
      color: black;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: black;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export default AppHeader;
