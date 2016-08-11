export class Custom {
    public vanne:string;
    public open:boolean;
    public styleColor:string;
    public open_str:string;
    
    public constructor(vanne:string, open:boolean){
        this.vanne = vanne;
        this.open = open;
        this.updateStyleColor();
    }

    public updateStyleColor(){
        if(this.open === true ){
            this.styleColor = "green";
            this.open_str = "ouvert";
        }
        else{
            this.styleColor = "red";
            this.open_str = "fermé";
        }
    }
}