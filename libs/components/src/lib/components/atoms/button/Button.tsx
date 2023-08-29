import st from './button.module.scss';

interface ButtonProps {
  /*Chanhe the background color of the button */
  backgroundColor?: string;
  /*Chanhe the text of the button */
  text?: string;
  children?: any;
}


export const Button = (props: ButtonProps) => {
  return <button className={st.button} {...props}>{props.text}</button>;
};
