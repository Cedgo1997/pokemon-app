import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  url: string = "https://pokeapi.co/api/v2";

  getAllPokemon() {
    return this.http.get(`${this.url}/pokemon?limit=25`);
  }
}
