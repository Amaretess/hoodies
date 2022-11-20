import styled from "styled-components";

const NavBar = () => {
    return (
        <Nav>
            <Logo src="https://scalebranding.com/wp-content/uploads/2021/05/az-logo-za-logo_2.jpg"/>
            <Container>
                <Heading>Hoodies</Heading>
            </Container>
            <Container2>
                <Search placeholder="search hoodies"/>
                <button>men</button>
                <button>women</button>
                <button>=</button>
            </Container2>
        </Nav>
    );
}

export default NavBar;


const Nav = styled.div `
    display: flex;
    justify-content: space-between; 
    height: 12vh;
`

const Logo = styled.img `
    width: 75px;
    height: 75px;
    border-radius: 50%;
    align-self: center;
    padding: 2rem;
`

const Heading = styled.h1 `
    
`

const Container = styled.div `
    display: flex;
    border: 2px solid black;
    align-items: center;
    padding: 2rem;
    margin: 1rem;
    box-shadow: -10px -5px 0px black;
`



const Container2 = styled.div `
    display: flex;
    align-items: center;
    margin: 1rem;
`

const Search = styled.input `
    
`


