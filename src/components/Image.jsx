import styled from "styled-components"


const Image = () => {
    return (
        <>
            <Container>
                image
            </Container>
        </>
    );
}

export default Image;

const Container = styled.div`
    display: flex;
    justify-content: center;
    border: 5px solid black;
    padding: 2rem;
    margin: 2rem;
    height: 20rem;
`