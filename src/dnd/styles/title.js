import styled from '@xstyled/styled-components';
import { grid } from './constants';

export default styled.h4`
  padding: ${grid}px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  user-select: none;
  position: relative;

  right:0px;
  position: relative;


  justify-content: center;
  display: flex;
  font-size: 17px;

 &:focus {
    outline: 2px solid #998dd9;
    outline-offset: 2px;

  }
`;


