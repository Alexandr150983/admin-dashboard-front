import styled from "styled-components";

const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

export const LoginPageContainer = styled.div`
  padding: 6.4vw 5.33vw;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 24px 20px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 24px 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 28px 100px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 39.46vw;

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 148px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 204px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 226px;
  }
`;

export const LogoText = styled.p`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.03em;
`;

export const LogoSvg = styled.img`
  width: 44px;
  height: 44px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 7.5vw;
  line-height: 1.21;
  margin-bottom: 10.66vw;
  color: var(--main-black);

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-bottom: 40px;
    max-width: 335px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 54px;
    line-height: 1.11;
    margin-bottom: 50px;
    max-width: 614px;
  }
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 7.5vw;
  line-height: 1.21;
  color: var(--accent);

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 54px;
    line-height: 1.11;
  }
`;

export const PillSvg = styled.img`
  position: absolute;
  display: inline-block;
  width: 25.33vw;
  height: 24.8vw;
  top: 42.67vw;
  right: 10.67vw;

  @media (min-width: ${breakpoints.mobile}) {
    width: 95px;
    height: 93px;
    top: 160px;
    right: 40px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 179px;
    height: 175px;
    top: 168px;
    right: 141px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 194px;
    left: 516px;
  }
`;

export const LoginBox = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    gap: 150px;
  }
`;

export const BackgroundImageDiv = styled.div`
  position: absolute;
  bottom: -23.5vw;
  right: -49.33vw;

  @media (min-width: ${breakpoints.mobile}) {
    bottom: -199.11px;
    right: -206.39px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    bottom: -82.11px;
    right: -198.39px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    bottom: -88.11px;
    right: -185.39px;
  }
`;

export const BackgroundImage = styled.img``;
