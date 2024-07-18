import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import {HeaderContainer,PagesContainer,RegisterContainer} from "../../containers"
import { Header } from "../../components/index";
const RegisterLayout = () => {
  return (
    <HelmetProvider>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <RegisterContainer>
        <Outlet />
     </RegisterContainer>
    </HelmetProvider>
  );
};

export default RegisterLayout;

