import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  url: string = "https://pokeapi.co/api/v2/pokemon";

  // This function return only the pokemon name and detail url.

  getPokemon(id: string | number) {
    return fetch(`${this.url}/${id}`);
  }
}
