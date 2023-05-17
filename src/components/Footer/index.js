import {
  Container,
  Email,
  EmailLabel,
  Logo,
  LogoWrapper,
  Column,
  Row,
  MenuItem,
  AddressTitle,
  Address,
  Unity,
  AddressColumnLeft,
  CopyrightRow,
  Telefone
} from "./Footer.styles";

export default function Footer(){
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7408084904832!2d-46.547411684495586!3d-23.469812064104087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef57aaabcec91%3A0xe90cc5d562081e9f!2sEspa%C3%A7o%20Canan%C3%A9ia%20-%20Eventos%20%26%20Buffet!5e0!3m2!1spt-BR!2sbr!4v1679002931578!5m2!1spt-BR!2sbr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  return (
    <>
      <Container>
        <LogoWrapper>
          <Logo src="images/logo.png" />
        </LogoWrapper>
        <Column>
          <MenuItem><a href="https://www.instagram.com/espacocananeia/" target="_blank">Como funciona?</a></MenuItem>
          <MenuItem><a href="https://www.instagram.com/espacocananeia/" target="_blank">Quem somos nós?</a></MenuItem>
          <MenuItem><a href="https://www.instagram.com/espacocananeia/" target="_blank">Clientes</a></MenuItem>
        </Column>
        <div>
          <AddressTitle>Onde estamos</AddressTitle>
          <Row>
            <AddressColumnLeft>
              <Unity>Unidade 1</Unity>
              <Address>Rua Cananéia, Nº 51<br/> - Guarulhos</Address>
              <Address>São Paulo - SP</Address>
              <Address>07040-300</Address>
            </AddressColumnLeft>
          </Row>
        </div>
        <div>
          <EmailLabel>Fale com a gente</EmailLabel>
          <Email>espacocananeiaoficial@gmail.com</Email>
          <Telefone>(11) 99899-2034</Telefone>
          <Telefone>(11) 96722-0550</Telefone>
        </div>
      </Container>
      <div dangerouslySetInnerHTML={ {__html:  iframe?iframe:""}} />
      <CopyrightRow id="location">
        Copyright © 2023 Espaço Cananeia- Todos os direitos reservados
      </CopyrightRow>
      <CopyrightRow style={{ fontSize: '11px', color: '#fff5'}}>
        Desenvolvido por <a style={{color: 'yellow'}} href="https://www.github.com/Brazlucas" target="_blank">Lucas Braz</a>
      </CopyrightRow>
    </>
  );
};
