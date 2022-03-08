import "./App.css";
import { Nft } from "./components/Nft"

function App() {
  const nft = {
    id: "3429",
    title: "Equlibrium",
    p: "Our Equilibrium collection promotes balance and calm.",
  };
 const nft2 = {
   id: "0420",
    title: "Evolução",
   p: "Cada experiência na vida serve para a nossa própria evolução.",
 }
  return (
    <div className="App">
      <Nft nftData={nft} />
      <Nft nftData={nft2} />
    </div>
  );
}

export default App;
