import styled from "styled-components";

const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 89.33vw;

  @media (min-width: ${breakpoints.mobile}) {
    max-width: 335px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled.input`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(29, 30, 33, 0.4);
  margin-bottom: 14px;
  padding: 13px 18px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  background-color: var(--background-3);
  outline: none;
`;

export const ErrorMessage = styled.div`
  margin-left: 20px;
  color: red;
`;

export const LogInButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  padding: 13px 18px;
  margin-top: 26px;
  background-color: var(--accent);
  color: var(--background-3);
  border: none;
  border-radius: 60px;
  cursor: pointer;
  &:hover {
    background-color: var(--background-4);
    transition: var(--anim);
  }
`;
