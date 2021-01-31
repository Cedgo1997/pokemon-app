import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  pokemon: any[] = [];
  constructor(private pokemonService: PokemonService) {
    this.getAllPokemon();
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  getAllPokemon() {
    for (let i = 1; i <= 25; i++) {
      this.pokemonService
        .getPokemon(i)
        .then((res) => res.json())
        .then((p) => this.pokemon.push(p));
    }
  }
}
