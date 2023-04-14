import { StyledLink } from "components/Navigation/Navigation.styled";
import { AuthList } from "./AuthNav.styled";


export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <StyledLink to="/login">Login</StyledLink>

      </li>
      <li>
        <StyledLink to="/register">Registration</StyledLink>
      </li>
    </AuthList>
  );
};