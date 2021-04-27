import { Episode } from "./episode.interface";
import { Location } from "./location.interface";

export interface ResEp{

    info: {
        count: number,
        pages: number,
        next: String,
        prev: any
    },
    results: Episode[]
    

}

export interface ResLo{
    info: {
        count: number,
        pages: number,
        next: String,
        prev: any
    },
    results: Location[]
}