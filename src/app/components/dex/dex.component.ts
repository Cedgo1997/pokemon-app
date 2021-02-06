import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dex",
  templateUrl: "./dex.component.html",
  styleUrls: ["./dex.component.scss"],
})
export class DexComponent implements OnInit {
  @Input() data: any;

  constructor(private router: Router) {
    console.log(this.data);
  }

  ngOnInit(): void {}

  changePokemon(id: number | string) {
    this.router.navigate(["details", id]);
  }

  nextPokemon() {
    if (this.data.id + 1 > 898) return;
    this.router.navigate(["details", this.data.id + 1]);
  }
  previousPokemon() {
    if (this.data.id - 1 < 1) return;
    this.router.navigate(["details", this.data.id - 1]);
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}
