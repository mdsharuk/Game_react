import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/girl-mascot-4718135_1280.png";
import ColorMoodSwitch from "./ColorMoodSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={Logo} boxSize={"40px"}></Image>
        <ColorMoodSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
