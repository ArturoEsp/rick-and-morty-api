import styled from "@emotion/styled";
import LogoPNG from "../assets/logo.png";

type Props = {
  width?: string;
}

const LogoStyled = styled.div`
  width: ${(props: Props)  => (props.width ? props.width : '230px') }
`;

const Logo = (props: Props) => {
  return (
    <LogoStyled width={props.width}>
      <img style={{ width: "100%", height: "100%" }} src={LogoPNG} alt="Logo" />
    </LogoStyled>
  );
};

export default Logo;
