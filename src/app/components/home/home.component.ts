import { Component, OnInit, HostBinding } from "@angular/core";
import { Router } from "@angular/router";
import { routeFadeStateTrigger } from "src/app/shared/route-animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [routeFadeStateTrigger]
})
export class HomeComponent {
  //@HostBinding("@routeFadeState") routeAnimation = true;

  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(["about"]);
  }
}
