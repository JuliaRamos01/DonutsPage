import * as S from "./DescriptionStyle";
import Donuts from "../images/donutsimg.jpg";

export default function Description() {
    return (
        <S.DescriptionMain>
            <S.Title>
                <h1>About our Donuts</h1>
            </S.Title>
            <S.TextBox>
                <img src={Donuts} alt="Donut Rosa" />
                <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Cevadis im ampola pa arma uma pindureta.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Paisis, filhis, espiritis santis.

                    Viva Forevis aptent taciti sociosqu ad litora torquent.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça.Atirei o pau no gatis, per gatis num morreus.</p>
            </S.TextBox>
        </S.DescriptionMain>
    );
}