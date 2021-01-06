import styled from 'styled-components';
import { color, ColorProps, layout, LayoutProps } from 'styled-system';

type Props = ColorProps & LayoutProps;

const Input = styled.input<Props>`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  margin: 5px 0;
  width: 100%;
  ${color}
  ${layout}
`;

export default Input;
