import cars from "../cars.json";
import { Car } from "../types";
import { exit } from "process";
import * as readline from "readline-sync";

const All_cars: Car[] = cars;

while (true) {
  console.log("Welcome to the JSON data viewer!");
  console.log("1. View all data");
  console.log("2. Filter by ID");
  console.log("3. Exit");
  let choise: number = readline.questionInt("Please enter your choice:");
  if (choise === 1) console.log(All_cars);
  else if (choise === 2) {
    let id: string = readline.question(
      "Please enter the ID you want to filter by:",
    );
    const car: Car[] = All_cars.filter((p: Car) => p.id === id);
    console.log(car);
  } else {
    exit(0);
  }
}

export {};
