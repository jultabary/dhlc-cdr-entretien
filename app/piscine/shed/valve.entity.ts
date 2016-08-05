export class Valve {
    private id: number;
    public color: string;
    public detail: string;

    public constructor(id: number, color: string, detail: string) {
        this.id = id;
        this.color = color;
        this.detail = detail;
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number){
        this.id = id;
    }
}