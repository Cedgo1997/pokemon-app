import { Component, Input, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input("pokemon") allPokemon: [];
  @Input() filterPokemon: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  pokemonDetail(id: string) {
    this.router.navigate([`details/${id}`]);
  }
}
