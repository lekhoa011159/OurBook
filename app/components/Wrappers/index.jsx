import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${props => props.maxWidth}px;
  margin: 0 auto;
  display: block;
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-flow: ${props => props.flow};
`;

const FlexedPanel = styled.div`
  flex-basis: ${props => props.basis}%;
`;

export { FlexWrapper, FlexedPanel };
