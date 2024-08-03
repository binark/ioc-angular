import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractLeagueService } from '../abstract-league.service';
import { League } from '../league.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit, OnDestroy{

  private readonly leagueService = inject(AbstractLeagueService);

  private _subscription: Subscription | undefined = undefined;

  leagues: League[] = [];

  ngOnInit(): void {
    this._subscription = this.leagueService.getAll().subscribe(data => {this.leagues = data});
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

}
