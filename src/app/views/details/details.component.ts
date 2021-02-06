import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  userSubscription: Subscription;
  pokemonData;
  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe((param: Params) =>
      this.pokemonService
        .getPokemon(param.id)
        .then((m) => m.json())
        .then(({ name, id, height, weight, abilities, sprites }) => {
          this.pokemonData = { name, id, height, weight, abilities, sprites };
          console.log(this.pokemonData);
        })
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
