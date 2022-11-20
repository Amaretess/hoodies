import styled from "styled-components"


const Banner = () => {
    return (
        <>
            <Container>
                <h1>SHOP BASICS</h1>
            </Container>

        </>
    );
}
export default Banner;

const Container = styled.div `
    display: flex;
    justify-content: center;
    border: 2px solid black;
    margin: 2rem;
    box-shadow: -10px -5px 0px black;
` 