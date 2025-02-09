import { Text } from "@chakra-ui/react";

interface HeadingTextProps {
  children: string
}

export function HeadingText({ children }: HeadingTextProps) {
  return (
    <Text 
      textStyle="2xl" 
      fontFamily="heading" 
      fontWeight="medium" 
      textAlign="center"
    >
      {children}
    </Text>
  )
}