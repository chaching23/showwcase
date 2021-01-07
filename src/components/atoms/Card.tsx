import styled from "styled-components";
import { color, ColorProps } from "styled-system";

type Props = ColorProps;

const Card = styled.div<Props>`
  padding: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  ${color};
`;

export default Card;
