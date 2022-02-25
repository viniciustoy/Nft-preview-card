import "./App.css";
import { Nft } from "./components/Nft";

function App() {
  const nft = {
    id: "3429",
    title: "Equlibrium",
    p: "Our Equilibrium collection promotes balance and calm.",
  };

  return (
    <div className="App">
      <Nft nftData={nft} />
    </div>
  );
}

export default App;
