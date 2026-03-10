import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="lg"
      />
      <Text whiteSpace="nowrap">
        <FaRegMoon />
      </Text>
    </HStack>
  );
};
