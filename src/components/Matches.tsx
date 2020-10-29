import React, { useEffect, useState } from "react";
import { getMatches } from "../api/";

export default function Matches() {
  const [matches, setMatches] = useState();

  useEffect(async getMatches () => {
    const data = await getMatches();
    setMatches(data);
  }, []);

  console.log(matches);

  return <div>Matches</div>;
}
