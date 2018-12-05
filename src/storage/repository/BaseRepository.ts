import { ReadInterface } from "../interfaces/ReadInterface";
import { WriteInterface } from "../interfaces/WriteInterface";

export abstract class BaseRepository<T> implements ReadInterface<T>, WriteInterface<T>{
   
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}