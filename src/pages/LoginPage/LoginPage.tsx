import React from "react";
import {
  LoginBox,
  LoginPageContainer,
  Logo,
  LogoSvg,
  LogoText,
  PillSvg,
  Title,
} from "./LoginPage.styled";
// import LoginForm from "../../components/LoginForm/LoginForm";
import logoIcon from "../../assets/images/icons/Logo.svg";
import pillIcon from "../../assets/images/icons/White_round_pill.svg";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Logo>
        <LogoSvg src={logoIcon} alt="Logo" />
        <LogoText>E-Pharmacy</LogoText>
      </Logo>
      <LoginBox>
        <Title>
          Your medication, <PillSvg src={pillIcon} alt="White round pill" />
          delivered Say goodbye to all your healthcare worries with us
        </Title>
        {/* <LoginForm /> */}
      </LoginBox>
    </LoginPageContainer>
  );
};

export default LoginPage;
