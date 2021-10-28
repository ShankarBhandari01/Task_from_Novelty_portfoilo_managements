import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    if (localStorage.getItem('token')) {
        var menu =
            <>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/dashboard">
                    <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>Portfolio <span style={{ color: "#51227F" }}>Management System</span></h3>
                </Navbar.Brand>


                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard"> Home</Nav.Link>
                        <Nav.Link href="#">Trading</Nav.Link>
                        <Nav.Link href="/stock">Stocks</Nav.Link>
                        <NavDropdown title={localStorage.getItem('name')} id="basic-nav-dropdown" style={{ fontWeight: 'Bold' }}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </>
    }
    else {
        var menu = <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
               <h3   style={{ color: "#a018a0", fontWeight: "bolder", textAlign:"center", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>Portfolio <span style={{ color: "#51227F" }}>Management System</span></h3>
            </Navbar.Brand>
        </>
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" className="shadow sticky-top " >
                {menu}
            </Navbar>

        </div>
    )
}
export default Header;