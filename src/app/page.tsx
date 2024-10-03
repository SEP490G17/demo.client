import { Flex, Spin } from "antd";
import MainContent from "./components/MainContent/MainContent";
import SideContent from "./components/SideContent/SideContent";


export default function Home() {
  return (
    <>
      <Flex gap="large">
        <MainContent />
        <SideContent />
      </Flex>
    </>
  );
}
