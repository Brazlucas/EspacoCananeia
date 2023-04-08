import { Title, TitleWrapper } from "./SectionTitle.styles";

export default function SectionTitle(props) {
  const { text } = props;

  return (
    <TitleWrapper>
      <Title>{text}</Title>
      {/* <img src="images/title-dash.svg" /> */}
    </TitleWrapper>
  );
};
