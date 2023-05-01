import * as S from "./assets/GlobalStyle";
import Header from "./assets/Header/Header";
import HeaderBox from "./assets/HeaderBoxItens/HeaderBoxItens";
import Description from "./assets/Description/Descripition";

export default function App(){
  return(
    <>
    <S.GlobalStyle/>
    <Header/>
    <HeaderBox/>
    <Description/>
    </>
  );
}
