import styled from 'styled-components';
import { color, variant, ColorProps, ButtonStyleProps } from 'styled-system';

type Props = ColorProps & ButtonStyleProps;

const Container = styled.div<Props>`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${color}
  ${variant({
    variants: {
      left: {
        alignItems: 'center',
      },
    },
  })}
`;

export default Container;
