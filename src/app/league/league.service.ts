import { Observable } from "rxjs";
import { AbstractLeagueService } from "./abstract-league.service";
import { League } from "./league.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class LeagueService extends AbstractLeagueService {

    private readonly PATH = '/getavailableleagues';

    constructor(private readonly http: HttpClient) {
        super();
    }

    override getAll(): Observable<League[]> {
        return this.http.get<League[]>(environment.baseUrl + this.PATH)
    }

}