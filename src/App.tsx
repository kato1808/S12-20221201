import theme from "./theme/theme";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
        <p>DDDDDDDDDDDDDDDD</p>
      </ChakraProvider>
    </div>
  );
}
