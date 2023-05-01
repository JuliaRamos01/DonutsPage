import styled from "styled-components";

export const DescriptionMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
/* border: red 2px solid; */
height: 190vh;
width: 100%;
margin-top: 39rem;
`;

export const Title = styled.div`
/* border: green 1px solid; */
height: 80vh;
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
/* border: blue 2px solid; */
height: 100vh;
align-items: center;
justify-content: space-evenly;
/* background-color: #3a2755; */
img{
    width: 23vw;
}
p{
    border: red 1px solid;
    background: rgba( 58, 39, 85, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: 'Konkhmer Sleokchher', cursive;
    text-align: justify;
    width: 50vw;
    height: 40vh;
    font-size: 1.2rem;
    padding: 1rem;
    color: white;
    font-weight: lighter;
}
`;

export const Footer = styled.div`
/* border: green 2px solid; */
height: 25vh;
background-color: #3a2755;
display: flex;
align-items: center;
justify-content: center;
h1{
    color: white;
    font-family: 'Konkhmer Sleokchher', cursive;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
}
`;