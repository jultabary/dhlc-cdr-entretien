import { Valve } from './valve.entity';
import { FILTRE, SELECTEUR, MOTEUR, BOITIER, ASPIRATEUR, SKIMMER, BONDE, JET } from '../entity/text';

export var VALVES: Valve[] = [
  new Valve(1, 'bleu', 'vannes d\'arrivéees','', 'resources/img/valves.jpg'),
  new Valve(1, 'bleu', 'aspirateur', ASPIRATEUR, 'resources/img/aspirateur.jpg'),
  new Valve(2, 'bleu', 'bonde de fond', BONDE, 'resources/img/bonde.jpg'),
  new Valve(3, 'bleu', 'skimmer', SKIMMER, 'resources/img/skimmer.jpg'),
  new Valve(4, 'rouge', 'jet d\'eau', JET, 'resources/img/jet.jpg')
];
