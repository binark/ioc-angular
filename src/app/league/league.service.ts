import { delay, Observable, of } from "rxjs";
import { League } from "./league.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { MOCKED_LEAGUES } from "../../mock/league.mock";

@Injectable({providedIn: 'root'})
export class LeagueService {

    private readonly http = inject(HttpClient);
    private readonly PATH = '/getavailableleagues';


    getAll(): Observable<League[]> {
        if (environment.ismock) {
            return of(MOCKED_LEAGUES).pipe(delay(300));
        }
        return this.http.get<League[]>(environment.baseUrl + this.PATH)
    }

}