import { Link, animateScroll as scroll } from "react-scroll";
import {
  Container,
  ContainerBelow,
  Description,
  SectionWrapper,
  DivisorWrapper,
  SectionWrapperBelow,
  SectionTitle,
  Action,
  ButtonWrapper,
  Button
} from "./Operation.styles";
import 'rsuite/dist/rsuite.min.css';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Operation() {

  return (
    <>
      <Container id="espaco">
        <SectionWrapper>
          <SectionTitle>Espaço Cananéia</SectionTitle>
          <br/>
          <DivisorWrapper>
            <img style={{ width: '30%', height: '20px' }} src="images/line.png" alt="" />
            <img style={{ width: '115px', height: '30px' }} src="images/divisor_03.png" alt="" />
            <img style={{ width: '30%', height: '20px' }} src="images/line.png" alt="" />
          </DivisorWrapper>
          <Description>
            &nbsp; Buffet em Guarulhos para Casamento, Festa de 15 anos, Festa infantil, Aniversário, e Eventos.
            Buffet e Espaço para festa. <strong style={{ color: '#EDBC40' }}>Um lugar aconchegante e único para a realização da sua festa ou evento; </strong>
            Dispomos de: Serviço de Buffet, Piscina Bar, Show de Luzes, Telão, DJ, Cozinha completa em ambiente agradável e rústico cercado de
            verde com muito charme e encanto para convidados especiais.
            Temos equipe de profissionais bem preparados e muito educados pra fazer do seu evento um sucesso!
            Serviço completo de Buffet para festas e eventos em geral.
            Estamos localizados na Rua Cananéia Número 51 - Em Guarulhos. Espaço e Buffet Cananeia,
            a sua melhor opção para Buffet em Guarulhos com atendimento especializado para fazer da sua festa um evento inesquecível -
            Atendemos a todos os bairros da cidade de Guarulhos e São Paulo.
          </Description>
          <ButtonWrapper>
            <Link 
              smooth duration={200} 
              to="services"
            >
              <Button>
                <AiFillCaretDown style={{paddingTop: '6px'}}/> 
                Serviços
              </Button>
            </Link>
            <Link 
              smooth duration={200}
              to="benefits"
            >
              <Button>
                <AiFillCaretDown style={{paddingTop: '6px'}}/>
                Galeria
              </Button>
            </Link>
          </ButtonWrapper>
        </SectionWrapper>
        <ContainerBelow id="services">
          <SectionWrapperBelow>
            <SectionTitle style={{ marginTop: '40px'}}>Serviços de Buffet:</SectionTitle>
            <br />
            <DivisorWrapper>
              <img style={{ width: '50%', height: '20px' }} src="images/line.png" alt="" />
              <img style={{ width: '115px', height: '30px' }} src="images/divisor_03.png" alt="" />
              <img style={{ width: '50%', height: '20px' }} src="images/line.png" alt="" />
            </DivisorWrapper>
            <Description>
              &nbsp; Serviço de Buffet completo em Guarulhos para festa de casamento, festa de aniversário, festa de debutantes e eventos corporativos em
              ambiente agradável, bonito e adequado pra fazer do seu evento um sucesso! O nosso diferencial é o atendimento! Oferecemos flexibilidade
              para criar ou desenvolver vários tipos cardápios com sofisticação, sabor, beleza e requinte para um evento memorável. O Buffet e
              Espaço Cananeia, conta com uma equipe de profissionais preparados e treinados para lhe atender com educação e prestar os melhores serviços
              de gastronomia de Guarulhos. Buffet e Espaço Cananeia, a sua melhor opção para Buffet em Guarulhos com atendimento especializado para fazer
              da sua festa algo inesquecível - Atendemos a todos os bairros da cidade de Guarulhos e São Paulo.
            </Description>
          </SectionWrapperBelow>
        </ContainerBelow>
        <Link to="form">
          <Action>Quero fazer um orçamento!</Action>
        </Link>
      </Container>
    </>
  );
}