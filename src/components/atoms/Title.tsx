import styled from "styled-components";
import { color, variant, ColorProps, ButtonStyleProps } from "styled-system";

type Props = ColorProps & ButtonStyleProps;

const Title = styled.h1<Props>`
  color: #000;

  ${color}
  ${variant({
    variants: {
      small: {
        fontSize: "20px",
      },
      big: {
        fontSize: "3em",
      },
    },
  })};
`;

export default Title;
