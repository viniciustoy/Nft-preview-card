import { Card } from "../Card";

import "./style.css";

export const Nft = ({ nftData }) => {
  console.log(nftData);

  return (
    <Card className="Nft">
      <div className="main-image">
        <img src="./assets/image-equilibrium.jpg" alt="" />
        <div>
          <img src="./assets/icon-view.svg" alt="" />
        </div>
      </div>
      <h2>
        {" "}
        {nftData.title} #{nftData.id}
      </h2>
      <p> {nftData.p} </p>
      <ul>
        <li>
          <img src="./assets/icon-ethereum.svg" alt="" /> 0.041 ETH
        </li>
        <li>
          <img src="./assets/icon-clock.svg" alt="" /> 3 days left
        </li>
      </ul>

      <div className="avata">
        <img src="./assets/image-avatar.png" alt="" />
        <p>
          {" "}
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </Card>
  );
};
