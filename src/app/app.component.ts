import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle = 'My store';
  addOrEditOpen = false;
  selectedItem: any = {};
  items = [
    {
      id: 1,
      name: "Beginning Programming All-in-One Desk Reference For Dummies",
      description: "So you want to be a programmer? Or maybe you just want to be able to make your computer do what YOU want for a change? Maybe you enjoy the challenge of identifying a problem and solving it. If programming intrigues you for whatever reason, Beginning Programming All-In-One Desk Reference For Dummies is like having a starter programming library all in one handy, if beefy, book. In this practical guide, you'll find out about compiling, algorithms, best practices, debugging your programs, and much more. The concepts are illustrated in several different programming languages, so you'll get a feel for the variety of languages and the needs they fill. Seven minibooks cover:* Getting started* Programming basics* Data structures* Algorithms* Web programming* Programming language syntax* Applications Beginning Programming All-In-One Desk Reference For Dummies shows you how to decide what you want your program to do, turn your instructions into 'machine language' that the computer understands, use programming best practices, explore the 'how' and 'why' of data structuring, and more.",
      price: 5
    },
    {
      id: 2,
      name: "Practical Programming, 3e : An Introduction to Computer Science Using Python 3.6",
      description: "Classroom-tested by tens of thousands of students, this new edition of the bestselling intro to programming book is for anyone who wants to understand computer science. Learn about design, algorithms, testing, and debugging. Discover the fundamentals of programming with Python 3.6--a language that's used in millions of devices. Write programs to solve real-world problems, and come away with everything you need to produce quality code. This edition has been updated to use the new language features in Python 3.6",
      price: 10
    },
    {
      id: 3,
      name: "Guide to Competitive Programming : Learning and Improving Algorithms Through Contests",
      description: "Building on what already is the most comprehensive introduction to competitive programming, this enhanced new textbook features new material on advanced topics, such as calculating Fourier transforms, finding minimum cost flows in graphs, and using automata in string problems. Critically, the text accessibly describes and shows how competitive programming is a proven method of implementing and testing algorithms, as well as developing computational thinking and improving both programming and debugging skills.",
      price: 20
    }
  ];

  removeItemFromList(id: number) {
    this.items = this.items.filter(item =>
      item.id !== id
    );
  }

  editItemInList(id: number) {
    this.selectedItem = this.items.filter(item =>
      item.id === id
    )[0];
    this.openAddOrEdit();
  }

  addItem() {
    this.selectedItem = {};
    this.openAddOrEdit();
  }

  openAddOrEdit() {
    this.addOrEditOpen = true;
  }

  saveItem(obj: any) {
    if (obj.id <= this.items[this.items.length - 1].id) {
      let currentObj = this.items.filter(item => item.id === obj.id)[0];
      let currentObjIndex = this.items.indexOf(currentObj);
      this.items[currentObjIndex] = obj;
      this.selectedItem = obj;
    } else {
      this.items.push(obj);
    }
  }
}
