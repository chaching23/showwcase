import styled from 'styled-components';
import { color, variant, ColorProps, ButtonStyleProps } from 'styled-system';

type Props = ColorProps & ButtonStyleProps;

const Button = styled.button<Props>`
  padding: 10px 30px;
  color: #fff;
  background: teal;
  border-radius: 5px;
  outline: none;
  border: none;
  ${color}
  ${variant({
    variants: {
      mid: {
        padding: '10px 50px',
      },
      long: {
        width: '100%',
      },
    },
  })}
`;

export default Button;
