import SectionTitle from "../Shared/SectionTitle/SectionTitle.component";
import {
  Container,
  List,
  ListItem,
  ListWrapper,
  CardapioWrapper,
  SecurityDescription,
  SecurityDescriptionTitle,
  SecurityDescriptionWrapper,
  SecurityInfoWrapper,
  SecutiryIconWrapper,
  TitleWrapper,
} from "./DataReceive.styles";

export default function Cardapio() {
  return (
    <>
      <Container id="cardapio">
        <TitleWrapper>
          <SectionTitle text="Cardápios:" />
        </TitleWrapper>
        <CardapioWrapper style={{marginTop: '10px'}}>
          <a href="https://espacocananeia.com/cardapios/Ouro.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/ouro.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Prata.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/prata.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Bronze.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/bronze.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Esmeralda.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/esmeralda.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Mini-wedding.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/Mini-wedding.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Coquetel.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/coquetel.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Coquetel-Kids.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/coquetel-kids.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Espetinhos.pdf" target="_blank">
            <img style={{margin: '5px'}}src="https://espacocananeia.com/_img/cardapios/espetinho.jpg"></img>
          </a>
          <a href="https://espacocananeia.com/cardapios/Cardapio-Boteco.pdf" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/boteco.jpg"></img>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511998992034&text=" target="_blank">
            <img style={{margin: '5px'}} src="https://espacocananeia.com/_img/cardapios/Cardapio-2020-Valores.jpg"></img>
          </a>
        </CardapioWrapper>
        {/* <SecurityInfoWrapper>
          <SecutiryIconWrapper>
            <img src="images/lock.svg" />
          </SecutiryIconWrapper>
          <SecurityDescriptionWrapper>
            <SecurityDescriptionTitle>E mais...</SecurityDescriptionTitle>
            <SecurityDescription>
              O Infovist valida a identidade do seu cliente na hora da vistoria e oferece para a sua empresa dados 100% protegidos, atualizados e seguindo todas as diretrizes da LGPD.
            </SecurityDescription>
          </SecurityDescriptionWrapper>
        </SecurityInfoWrapper> */}
      </Container>
    </>
  );
};