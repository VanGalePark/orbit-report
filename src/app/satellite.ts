import { typeWithParameters } from '@angular/compiler/src/render3/util';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name:string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning() {
        if (this.type.includes('Space Debris')) {
            return true
        } else {
            return false
        }
    }
}
