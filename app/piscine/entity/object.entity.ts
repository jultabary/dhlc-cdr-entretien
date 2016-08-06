export class ObjectPool {
    public id: number;
    public detail: string;
    public image: string;

    public constructor(id: number, detail: string, image: string) {
        this.id = id;
        this.detail = detail;
        this.image = image;
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number){
        this.id = id;
    }
}