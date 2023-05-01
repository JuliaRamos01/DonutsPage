import styled from "styled-components";

export const DescriptionMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: red 2px solid;
height: 120vh;
width: 100%;
margin-top: 39rem;
`;

export const Title = styled.div`
/* border: green 1px solid; */
height: 60vh;
display: flex;
justify-content: center;
text-align: center;
h1{
    text-transform: uppercase;
    font-size: 7rem;
    font-family: 'Konkhmer Sleokchher', cursive;
    font-weight:lighter;
    color: #ff9b9b;
    letter-spacing: 4rem;
}
`;

export const TextBox = styled.div`
display: flex;
border: blue 2px solid;
height: 40vh;
align-items: center;
img{
    width: 20vw;
    border-radius: 20px;
    padding-left: 1rem;
}
p{
    font-family: 'Konkhmer Sleokchher', cursive;
}
`;