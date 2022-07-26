import { Payload } from './Payload'

export class Cargo implements Payload {
    material: string;
    massKg: number;
    constructor(material: string, massKg: number) {
        this.massKg = massKg;
        this.material = material;
    }
 }

