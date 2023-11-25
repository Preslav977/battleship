import "./style.css";

import { battleShipInterface } from "./View/Interface";

import { battleShipGame } from "./Controller/Player";

battleShipGame.placeAllShipsWithHardcodedCoordinates();

battleShipInterface.renderPlayerBoard();

battleShipInterface.renderComputerBoard();
