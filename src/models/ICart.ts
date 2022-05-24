import { IMovies } from "./IMovies";

export class ICart {
  constructor(public movie: IMovies, public amount: number) {
    (this.movie = movie), (this.amount = amount);
  }

  // movie: IMovies;
  // amount: number;
}
