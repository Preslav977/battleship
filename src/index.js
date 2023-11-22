import "./style.css";

import { battleShipInterface } from "./Controller/Interface";

import { battleShipGame } from "./Controller/Player";

battleShipGame.placeAllShipsWithHardcodedCoordinates();

battleShipInterface.renderPlayerBoard();

battleShipInterface.renderComputerBoard();
