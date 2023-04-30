import styled from "styled-components";

export const Header = styled.div`
position: absolute;
width: 100%;
height: 90vh;
display: flex;
/* border: green 1px solid; */
`;

export const Welcome = styled.div`
/* border: red 1px solid; */
position: absolute;
width: 100%;
height: 30vh;
text-align: center;
padding-left: 1.5rem;
h1{
    text-transform: uppercase;
    font-size: 8.5rem;
    font-family: 'Konkhmer Sleokchher', cursive;
    font-weight:lighter;
    color: #ff9b9b;
    letter-spacing: 4.7rem;
}
`;

export const Donuts = styled.div`
/* border: blue 2px solid; */
img{
    position: relative;
    width: 50vw;
    margin-top: -19rem;
}
`;

export const TextBox = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-top: 12rem;
margin-left: 10rem;
/* border: blue 2px solid; */
height: 55vh;
width: 18vw;
p{
    font-size: 1.5rem;
    font-family: 'Konkhmer Sleokchher', cursive;
    color: white;
}
h2{
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Konkhmer Sleokchher', cursive;
    color: white;
}
button{
    width: 10vw;
    height: 8vh;
    border-radius: 30px;
    border: none;
    background-color: #3b2655;
    color: white;
    font-family: 'Konkhmer Sleokchher', cursive;
    font-size: 0.9rem;
    box-shadow: 0px 10px 14px -7px #000;
    cursor: pointer;
}
button:hover{
    background-color: #795c34;
    letter-spacing: 2px;
}
`;

export const Milkshake = styled.div`
/* border: blue 1px solid; */
margin-top: 13rem;
margin-left: 56rem;

img{
    width: 25vw;
}
`;

export const Text = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
/* border: red 1px solid; */
margin-top: 33rem;
margin-left: 60rem;
width: 20vw;
height: 10vh;
p{
    border-bottom: white 2px solid;
    color: white;
    font-family: 'Konkhmer Sleokchher', cursive;
    font-size: 1.2rem;
}
`;

export const Medias = styled.div`
height: 20vh;
display: flex;
margin-top: 12rem;
flex-direction: column;
justify-content: space-around;
/* border: red 2px solid; */
position: absolute;
padding-left: 1rem;
img{
    width: 2vw;
}
`;