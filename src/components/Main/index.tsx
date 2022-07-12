import { Link } from "react-router-dom";

import { St } from "../ExampleButton/style";
import PiickleMe from "./PiickleMe";
import BestPiickle from "./BestPiickle";

export default function Main() {
  return (
    <main>
      <PiickleMe />
      <BestPiickle />
    </main>
  );
}
