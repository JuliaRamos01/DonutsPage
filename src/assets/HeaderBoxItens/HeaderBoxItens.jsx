import * as S from "./HeaderBoxItensStyle";
import Donuts from "../images/donutsgrandes.png";
import Copos from "../images/copos.png";
import IconInstagram from "../images/iconinstagram.png";
import IconFacebook from "../images/iconfacebook.png";
import IconPinterest from "../images/iconpinterest.png";

export default function HeaderBoxItens() {
    return (
        <S.Header>
            <S.Welcome>
                <h1>Welcome</h1>
                <S.Donuts>
                    <img src={Donuts} alt="Donuts"/>
                </S.Donuts>
            </S.Welcome>
            <S.TextBox>
                <p>B I Y</p>
                <h2>Baked</h2>
                <h2>it</h2>
                <h2>Yourself</h2>
                <button>Get Started</button>
            </S.TextBox>
            <S.Milkshake>
                <img src={Copos} alt="Milkshake"/>
            </S.Milkshake>
            <S.Text>
                <p>Baked it with the love!</p>
            </S.Text>
            <S.Medias>
                <img src={IconPinterest} alt="Pinterest"/>
                <img src={IconInstagram} alt="Instagram"/>
                <img src={IconFacebook} alt="Facebook"/>
            </S.Medias>
        </S.Header>
    );
}