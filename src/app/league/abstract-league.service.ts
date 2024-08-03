import { Observable } from "rxjs";
import { League } from "./league.model";

export abstract class AbstractLeagueService {
    abstract getAll(): Observable<League[]>;
}