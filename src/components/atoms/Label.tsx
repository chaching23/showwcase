import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

type Props = ColorProps;

const Label = styled.p<Props>`
  color: #000;
  font-size: 14px;
  margin: 0;
  padding: 0;
  ${color}
`;

export default Label;
