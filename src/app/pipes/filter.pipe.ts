import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(allPokemon: any, word: string) {
    const newPokemon = [];
    if (word == "") {
      return allPokemon;
    } else {
      for (const pokemon of allPokemon) {
        if (pokemon["name"].indexOf(word.toLowerCase()) > -1) {
          newPokemon.push(pokemon);
        }
      }
      return newPokemon;
    }
  }
}
