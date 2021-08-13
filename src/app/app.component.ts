import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroesApi} from "./heroesApi";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updatedAt?: number;
  heroesList: Hero[] = [];

  constructor(
    private heroesApi: HeroesApi,
  ) {
  }

  public addHero(): void {
    const newHero = this.heroesApi.getNewHero();
    if (newHero) {
      this.heroesList.push(newHero);
      this.updatedAt = Date.now();
    }
  }

  public deleteHero({ id }: Hero): void {
    this.heroesApi.refreshHero(id);
    this.heroesList = this.heroesList.filter(hero => hero.id !== id)
    this.updatedAt = Date.now();
  }

  public clear(): void {
    this.heroesList = [];
    this.heroesApi.clearList();
    this.updatedAt = undefined;
  }
}
