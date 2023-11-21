import "./style.css";

import { battleShipInterface } from "./Controller/Interface";

import { battleShipGame } from "./Controller/Player";

battleShipGame.placeAllShipsOnPredeterminedCoordinates();

battleShipInterface.createPlayerBoard();

battleShipInterface.createComputerBoard();
