import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "../root/store";

import Header from "../components/base/header";
import ContentContainer from "../components/base/container";
import Footer from "../components/base/footer";
import Logo from "./logo.svg";
import AppRoutes from "./Routes";

const AppHeader = styled(Header)`
  align-items: center;
  display: flex;
`;

const AppFooter = styled(Footer)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const AppLogo = styled.img`
  height: 3rem;
  width: 6rem;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <AppHeader>
        <AppLogo src={Logo} />
      </AppHeader>
      <ContentContainer>
        <AppRoutes />
      </ContentContainer>
      <AppFooter />
    </AppContainer>
  </Provider>
);

export default App;
