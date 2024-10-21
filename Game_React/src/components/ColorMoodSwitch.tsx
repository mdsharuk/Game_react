import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMoodSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Text>Dark Mood</Text>
      </HStack>
    </div>
  );
};

export default ColorMoodSwitch;
