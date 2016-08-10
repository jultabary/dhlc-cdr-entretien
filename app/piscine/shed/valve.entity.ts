import { ObjectPool } from '../entity/object.entity';

export class Valve extends ObjectPool {
    public color: string;

    public constructor(id: number, color: string, name: string,detail: string, image: string) {
        super(id,name,detail,image);
        this.image = image;
    }

}