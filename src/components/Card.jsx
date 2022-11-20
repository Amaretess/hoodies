import styled from "styled-components"

const Card = ({ mainBasics }) => {

    

    return (
        <Div>
            {mainBasics?.map((basic) => {
                return (
                        <Container key={basic.id} className="card">
                            <ImageContainer>
                                <Image src={basic?.attributes?.image} />
                            </ImageContainer>
                            <Details>
                                <Name>{basic?.attributes?.name}</Name>
                                <Price>{basic?.attributes?.price}</Price>
                            </Details>
                        </Container>
                )
            })}
        </Div>
    );
}

export default Card;


const Div = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 2rem;
    align-items: center;
    margin: 2rem;
    height: 250px;
` 

const ImageContainer = styled.div `
    display: flex;
` 

const Details = styled.div `
    display: flex;
    flex-direction: column;
` 


const Image = styled.img `
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
` 

const Name = styled.h2 `
    display: flex;
    align-self: flex-end;
` 

const Price = styled.h3 `
    display: flex;
    align-self: flex-end;
    margin: 1.2rem;
`

