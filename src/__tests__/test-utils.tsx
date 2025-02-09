import { render } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export const renderWithChakra = (ui: React.ReactNode) => {
  return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
};