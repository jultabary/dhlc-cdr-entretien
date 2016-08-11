import { Custom } from './custom.entity';
import { Selector } from './Selector.entity'

export class Customs {
    public mode:string;
    public jet:Custom;
    public aspirateur:Custom;
    public bonde:Custom;
    public skimmer:Custom;
    public selector:Selector;
    public moteur:string;

    public constructor(mode:string,jet:Custom, aspirateur:Custom, bonde:Custom, skimmer:Custom, selector:Selector, moteur:string){
        this.mode = mode;
        this.jet = jet;
        this.aspirateur = aspirateur;
        this.bonde = bonde;
        this.skimmer = skimmer;
        this.selector = selector;
        this.moteur = moteur;
    }
}