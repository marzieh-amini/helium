import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import {HeaderContainer,PagesContainer,FooterContainer} from "../../containers"
import { Footer, Header } from "../../components/index";
const MainLayout = () => {
  return (
    <HelmetProvider>
     <HeaderContainer>
        <Header />
      </HeaderContainer>

     <PagesContainer>
        <Outlet />
     </PagesContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HelmetProvider>
  );
};

export default MainLayout;
