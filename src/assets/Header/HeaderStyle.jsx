import styled from "styled-components";

export const HeaderMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* border: green 2px solid; */
height: 20vh;
img{
    width: 100%;
}
`;

export const Navbar = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 15vh;
/* border: red 1px solid; */
ul{
    width: 58vw;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: purple 1px solid; */
}
li{
    /* border: red 1px solid; */
    width: 7vw;
    text-align: center;
    font-size: 0.8rem;
    font-family: 'Konkhmer Sleokchher', cursive;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
}
li:hover{
    color: #795c34;
    border-bottom: #795c34 2px solid;
    letter-spacing: 4px;
}
img{
    display: flex;
    /* border: red 1px solid; */
    width: 1vw;
}
`;

export const Logo = styled.div`
/* border: red 1px solid; */
padding-left: 1.2rem;
padding-bottom:1.1rem;
width: 10vw;

img{
    width: 6vw;
}
`;

export const Input = styled.div`
display: flex;
width: 24vw;
align-items: center;
justify-content: space-evenly;
/* border: purple 1px solid; */
input{
    width: 20vw;
    height: 5vh;
    border-radius: 15px;
    border: purple 1px solid;
    background-color: transparent;
    padding-left: 1rem;
}
input::placeholder{
    color: white;
}
img{
    width: 2vw;
    cursor: pointer;
}
`;

export const Menu = styled.div`
padding-right: 1.2rem;
img{
    width: 3.5vw;
    cursor: pointer;
}
`;


