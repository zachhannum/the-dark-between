import React from 'react';
import styled from 'styled-components';
const StyledHeading1 = styled.h1`
  color: ${(p) => p.theme.fg[1]};
`

const Heading1 = (props: React.ComponentPropsWithRef<'h1'>) => {
  return(<StyledHeading1 {...props}/>)
}

export default Heading1;