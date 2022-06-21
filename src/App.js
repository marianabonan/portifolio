import { Header } from "./components/header";
import GlobalStyled from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/pages/home";
function App() {
  return (
    <div>
      <ChakraProvider resetCSS={false}>
        <Header />
      </ChakraProvider>
      <GlobalStyled />
      <Home />
    </div>
  );
}

export default App;
