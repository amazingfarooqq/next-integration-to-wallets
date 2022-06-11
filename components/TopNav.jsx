import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useWeb3React } from '@web3-react/core';
import { IntegrationWallets } from "./IntegrationWallets";

const TopNav = () => {
  const { active, account, chainId, deactivate } = useWeb3React()

  const disconnect = async () => {
    try {
     deactivate()
   } catch (ex) {
     console.log(ex)
   }

 };

  
  return (
    <Navbar className="theme1-bg-color" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#" className="text-light">Farooq</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end " id="navbarScroll">
          <Nav className="my-2 my-lg-0 d-flex align-items-center">
              <Link href="/">
                <a className="btn text-light">Home</a>
              </Link>
              
              <Link href="/about">
                <a className="btn text-light">About</a>
              </Link>
              
              {active ? (
                <button
                  className="btn theme1-btn-color"
                  title="Disconnect From Wallet"
                  onClick={disconnect}
                >{`${account.slice(0, 5)}...${account.slice(-5)}`}</button>
              ) : (
                <IntegrationWallets
                />
              )}

              <button className="btn"> <img className="rounded-circle" width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkQ96i7T8iy1VOxQ8uBR8HHmr9p601qK7tA&usqp=CAU" alt="" /> </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
