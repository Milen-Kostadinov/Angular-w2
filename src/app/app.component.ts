import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  reviewCompleted = false;
  index = 0
  index2 = 0
  books = [
    {
      name: "Lord of the rings: The fellowshit of the ring",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.R.R.Tolkein",
      averageRating: 0,
      allRatings: [2,3,4,5,6,2]
    },
    {
      name: "Lord of the rings: The two towers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.R.R.Tolkein",
      averageRating: 0,
      allRatings: [2,2]
    },
    {
      name: "Lord of the rings: The return of the king",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.R.R.Tolkein",
      averageRating: 0,
      allRatings: [2,2]
    },
    {
      name: "Harry potter and prisoner of askaban",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.K.Rowling",
      averageRating: 0,
      allRatings: [2,2]
    },
    {
      name: "Harry potter and the deadly hollows part 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.K.Rowling",
      averageRating: 0,
      allRatings: [2,2]
    },
    {
      name: "Harry potter and the deadly hollows part 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.K.Rowling",
      averageRating: 0,
      allRatings: [2,2]
    },
    {
      name: "Harry potter and the philosophers stone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      author: "J.K.Rowling",
      averageRating: 0,
      allRatings: [2,2]
    }
  ]
  public currentBook = this.books[this.index]
  public addNewReview(rating: number){
    this.books[this.index].allRatings[this.books[this.index].allRatings.length] = rating;
    let sum = 0
    for(let i = 0; i < this.books[this.index].allRatings.length; i++){
      sum+= this.books[this.index].allRatings[i]
    }
    this.books[this.index].averageRating = sum / this.books[this.index].allRatings.length
    console.log(this.books.length)
    console.log(this.index)
    if(this.index >= this.books.length - 1)
    {
      this.reviewCompleted = true
      this.index = 0;
    }
    else{
      this.index++
    }
  }
  public review(){
    this.reviewCompleted = false;
  }
  link = ""
  public getVideo(){
    this.link = "https://youtu.be/iQzqxXzeGRU?si=pWEiKL8kkpQEmn9n"
  }
}
