import React from "react";
import {
  BackgroundImage,
  LoginBox,
  LoginPageContainer,
  Logo,
  LogoSvg,
  LogoText,
  PillSvg,
  Span,
  Title,
} from "./LoginPage.styled";
// import LoginForm from "../../components/LoginForm/LoginForm";
import logoIcon from "../../assets/images/icons/logo.svg";
import pillIcon from "../../assets/images/icons/white_round_pill.svg";
import backgroundImage from "../../assets/images/icons/elements.svg";

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <Logo>
        <LogoSvg src={logoIcon} alt="Logo" />
        <LogoText>E-Pharmacy</LogoText>
      </Logo>
      <LoginBox>
        <Title>
          Your medication, <PillSvg src={pillIcon} alt="White round pill" />
          delivered Say goodbye to all <Span>your healthcare</Span> worries with
          us
        </Title>
        {/* <LoginForm /> */}
      </LoginBox>
      <BackgroundImage src={backgroundImage} alt="Background Image" />
    </LoginPageContainer>
  );
};

export default LoginPage;
