import { Header } from "./components/header";
import GlobalStyled from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/pages/home";
import { About } from "./components/pages/about";
function App() {
  return (
    <div>
      <GlobalStyled />
      <ChakraProvider resetCSS={false}>
        <Header />

        <Home />
        <About />
      </ChakraProvider>
    </div>
  );
}

export default App;
