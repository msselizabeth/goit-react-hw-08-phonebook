import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul` 
    display: flex;
     justify-content: center;
     align-items: center;
    column-gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  transition: color 250ms ease-out;
  &:hover {
    color: palevioletred;
  }
  &.active {
    color: palevioletred;
  }
`;

