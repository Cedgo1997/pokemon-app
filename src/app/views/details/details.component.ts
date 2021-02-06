import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.getPokemon();
  }

  pokemonData;
  ngOnInit(): void {}

  getPokemon() {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonService
      .getPokemon(id)
      .then((m) => m.json())
      .then((p) => console.log(p));
  }
}
