import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  HeaderContainer,
  PagesContainer,
  FooterContainer,
} from "../../containers";
import { Footer, Header } from "../../components/index";
const Layouts = ({ children, title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <PagesContainer>{children}</PagesContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HelmetProvider>
  );
};

export default Layouts;
