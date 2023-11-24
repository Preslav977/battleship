import "./style.css";

import { battleShipInterface } from "./Model/View/Interface";

import { battleShipGame } from "./Controller/Player";

battleShipGame.placeAllShipsWithHardcodedCoordinates();

battleShipInterface.renderPlayerBoard();

battleShipInterface.renderComputerBoard();
