import styled from "styled-components";

const ButtonStyled = styled.button`
  margin: 12px 0 0 24px;
  display: inline-flex;
  background-color: #979aff;
  color: #000;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #975fff;
    transform: scale(1.5);
  }
`;

export const Button = ({ children, onClick }) => {
  return (
    <ButtonStyled className="button-default" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
