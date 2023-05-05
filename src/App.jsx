import React from "react";
import Amazhon from "./Amazhon";
import Netflix from "./Netflix";


const favSeries = "netflix";

const FavS = () => {

if (favSeries == "netflix"){
  return(
 <Netflix />)

} else {
    return(
     <Amazhon />)
    }
  };


const App = () => (
  <>
    <h1 className="heading__style"> List of top 5 Netflix Series in 2023</h1>
    <FavS />
  </>
);

export default App;
