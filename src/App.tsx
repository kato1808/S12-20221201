import "./styles.css";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </div>
  );
}
