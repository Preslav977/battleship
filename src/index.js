import "./style.css";

import { battleShipInterface } from "./View/Interface";

import { battleShipGame } from "./Controller/Player";

battleShipGame.placeAllShipsRandomly();

battleShipInterface.renderPlayerBoard();

battleShipInterface.renderComputerBoard();
