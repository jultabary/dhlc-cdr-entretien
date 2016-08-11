import { Customs } from './customs.entity';
import { Custom } from './custom.entity';
import { Selector } from './selector.entity';

export const FILTRAGE:Customs = new Customs("Filtrage (mode Normal)",new Custom("jet d'eau",true),new Custom("aspirateur",false), new Custom("bonde de fond",true),new Custom("skimmer",true), new Selector("Filtrage"),"Marche");
export const ASPIRATEUR:Customs = new Customs("Aspirateur",new Custom("jet d'eau",true),new Custom("aspirateur",true), new Custom("bonde de fond",false),new Custom("skimmer",false), new Selector("Filtrage"),"Marche");
export const NETTOYAGE_FILTRE:Customs = new Customs("Nettoyage du filtre",new Custom("jet d'eau",true),new Custom("aspirateur",true), new Custom("bonde de fond",true),new Custom("skimmer",true), new Selector("Nettoyage"),"Marche");
export const NETTOYAGE_MOTEUR:Customs = new Customs("Nettoyage du moteur",new Custom("jet d'eau",false),new Custom("aspirateur",false), new Custom("bonde de fond",false),new Custom("skimmer",false), new Selector("?"),"Arrêt");

export const SELECTS:Customs[] = [FILTRAGE,ASPIRATEUR,NETTOYAGE_FILTRE,NETTOYAGE_MOTEUR];