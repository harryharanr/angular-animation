import { animate, style, transition, trigger } from "@angular/animations";

export const routeFadeStateTrigger = trigger("routeFadeState", [
  transition(":enter", [
    style({
      transform: "translateY(-100vh)"
    }),
    animate("1000ms ease-out")
  ]),
  transition(
    ":leave",
    animate(
      "500ms",
      style({
        transform: "translateY(-100vh)",
        height: 0
      })
    )
  )
]);
