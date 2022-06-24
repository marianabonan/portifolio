import { Header } from "./components/header";
import GlobalStyled from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/pages/home";
import { About } from "./components/pages/about";
import { Project } from "./components/pages/project";
import { Footer } from "./components/footer";
function App() {
  return (
    <div>
      <GlobalStyled />
      <ChakraProvider resetCSS={true}>
        <Header />
        <Home />
        <About />
        <Project />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
