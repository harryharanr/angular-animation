import { Component, OnInit, HostBinding } from "@angular/core";
import { routeFadeStateTrigger } from "src/app/shared/route-animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [routeFadeStateTrigger]
})
export class AboutComponent implements OnInit {
  @HostBinding("@routeFadeState") routeAnimation = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome() {
    this.router.navigate([""]);
  }
}
