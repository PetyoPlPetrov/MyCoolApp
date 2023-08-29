import styled from 'styled-components';
interface ButtonProps {
  /*Chanhe the background color of the button */
  backgroundColor?: string;
  /*Chanhe the text of the button */
  text?: string;
}
const ButtonInner = styled.button<ButtonProps>`
  display: block;
  background-color: ${(props) => props.backgroundColor || '#4caf50'};
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Button = (props: ButtonProps) => {
  return <ButtonInner {...props}>{props.text}</ButtonInner>;
};
