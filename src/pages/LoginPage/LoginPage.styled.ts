import styled from "styled-components";

const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

export const LoginPageContainer = styled.div`
  position: relative;
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
  position: relative;
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

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 0;
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
  top: -14.93vw;
  right: 5.33vw;

  @media (min-width: ${breakpoints.mobile}) {
    width: 95px;
    height: 93px;
    top: -56px;
    right: 20px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 179px;
    height: 175px;
    top: -104px;
    right: 19px;
  }
`;

export const LoginBox = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    gap: 150px;
  }
`;

export const BackgroundImageDiv = styled.div`
  position: absolute;
  bottom: -260px;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1000;

  @media (min-width: ${breakpoints.mobile}) {
    bottom: -210px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    bottom: -250px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    bottom: -230px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: -40vw;
  right: -54.93vw;

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
