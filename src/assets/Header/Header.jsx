import * as S from "./HeaderStyle";
import Background from "../images/background.png";
import Logo from "../images/donutslogo.png";
import Lupa from "../images/lupa.png";
import Circle from "../images/circle.png";
import Menu from "../images/menuhamburguer.png";

export default function Header (){
    return(
        <S.HeaderMain>
            <img src={Background} alt="Background"/>
            <S.Navbar>
                <S.Logo>
                <img src={Logo} alt="Logo"/>
                </S.Logo>
                <S.Input>
                <input type="text" placeholder="Search..."/>
                <img src={Lupa} alt="Lupa"/>
                </S.Input>
                <ul>
                    <li>Home</li>
                    <img src={Circle} alt="Circle"/>
                    <li>About</li>
                    <img src={Circle} alt="Circle"/>
                    <li>Product</li>
                    <img src={Circle} alt="Circle"/>
                    <li>Contact</li>
                </ul>
                <S.Menu>
                    <img src={Menu} alt="Menu"/>
                </S.Menu>
            </S.Navbar>
        </S.HeaderMain>
    );
}