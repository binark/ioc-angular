import { Component, OnDestroy, OnInit } from '@angular/core';
import { League } from '../league.model';
import { Subscription } from 'rxjs';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit, OnDestroy{

  constructor(private readonly leagueService: LeagueService) {}

  private _subscription: Subscription | undefined = undefined;

  leagues: League[] = [];

  ngOnInit(): void {
    this._subscription = this.leagueService.getAll().subscribe(data => {this.leagues = data});
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

}
