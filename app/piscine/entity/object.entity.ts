export class ObjectPool {
    public id: number;
    public detail: string;
    public image: string;
    public name: string;

    public constructor(id: number, name: string, detail: string, image: string) {
        this.id = id;
        this.detail = detail;
        this.image = image;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }
}