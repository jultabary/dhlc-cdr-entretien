import { GardenComposant } from './composant.entity';
import { VALVES, CENTRALVALVE, GARDENVALVE, HOUSEVALVE } from './text';

export const GARDENVALVES:GardenComposant[]= [new GardenComposant("Vannes d'arrivées d'eau",VALVES,"resources/img/jardin/jardin.jpg"),
                                              new GardenComposant("Robinet central",CENTRALVALVE,"resources/img/jardin/robinet_central.jpg"),
                                              new GardenComposant("Vanne du jardin",GARDENVALVE,"resources/img/jardin/vannes_jardin.jpg"),
                                              new GardenComposant("Vanne de la maison",HOUSEVALVE,"resources/img/jardin/vannes_maison.jpg")];