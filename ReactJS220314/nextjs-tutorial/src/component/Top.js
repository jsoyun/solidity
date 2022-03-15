import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
export default function Top() {
  return (
    <div>
      {/* <img src="/images/mountain.jpg" alt="logo" /> */}
      <Header as="h1">코딩</Header>
      <Gnb />
    </div>
  );
}
