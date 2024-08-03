import { Injectable } from "@angular/core";
import { AbstractLeagueService } from "../app/league/abstract-league.service";
import { delay, Observable, of } from "rxjs";
import { League } from "../app/league/league.model";

@Injectable({providedIn: 'root'})
export class FakeLeagueService extends AbstractLeagueService {

    private leagues: League[] = [
        {leagueName: 'Mocked league 1', leagueShortcut: "ML1", leagueSeason: "2010"},
        {leagueName: 'Mocked league 2', leagueShortcut: "ML2", leagueSeason: "2011"},
        {leagueName: 'Mocked league 3', leagueShortcut: "ML3", leagueSeason: "2012"},
        {leagueName: 'Mocked league 4', leagueShortcut: "ML4", leagueSeason: "2013"},
        {leagueName: 'Mocked league 5', leagueShortcut: "ML5", leagueSeason: "2014"},
        {leagueName: 'Mocked league 6', leagueShortcut: "ML6", leagueSeason: "2015"},
        {leagueName: 'Mocked league 7', leagueShortcut: "ML7", leagueSeason: "2016"},
    ];

    override getAll(): Observable<League[]> {
        return of(this.leagues).pipe(delay(300));
    }

}