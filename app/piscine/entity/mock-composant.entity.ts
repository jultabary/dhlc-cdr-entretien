import { ShedComposant } from './composant.entity';
import { FILTRE, SELECTEUR, MOTEUR, BOITIER, ASPIRATEUR, SKIMMER, BONDE, JET } from './text';
import { POOL_ASPIRATEUR, POOL_SKIMMER, POOL_BONDE, POOL_JET} from './text';
import { ObjectPool } from '../entity/object.entity';

export var COMPOSANTS: ShedComposant[] = [
  new ShedComposant(1, 'filtre', FILTRE, 'resources/img/filtre.jpg'),
  new ShedComposant(2, 'selecteur', SELECTEUR, 'resources/img/filtre_selecteur.jpg'),
  new ShedComposant(3, 'moteur', MOTEUR, 'resources/img/moteur.jpg'),
  new ShedComposant(4, 'boitier', BOITIER, 'resources/img/boitier.jpg')
];

export var POOL_COMPOSANTS: ObjectPool[] = [
  new ObjectPool(1, 'Jet d\'eau', POOL_JET, 'resources/img/pool/jet.jpg'),
  new ObjectPool(2, 'Aspirateur', POOL_ASPIRATEUR, 'resources/img/pool/aspirateur.jpg'),
  new ObjectPool(3, 'Bonde de fond', POOL_BONDE, 'resources/img/pool/bonde.jpg'),
  new ObjectPool(4, 'Skimmer', POOL_SKIMMER, 'resources/img/pool/skimmer.jpg')
];
