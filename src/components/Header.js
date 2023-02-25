import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <> <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/20/20429.png?w=740&t=st=1677040857~exp=1677041457~hmac=09575125245b58bfe48a96b02ba9331483ac203818057eb36d64e25fae5518ef"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                   PLATE & FORK
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
        )
}

export default Header