class List {
  constructor() {
    this.toDo = [];
  }

  addNote(text) {
    const currentDate = new Date();
    this.toDo.push({
      text,
      dateCreated: currentDate.toLocaleString(),
      dateEdited: currentDate.toLocaleString(),
      isDone: false,
    });
  }
  removeNote(text) {
    this.toDo.splice(
      this.toDo.findIndex((note) => note.text === text),
      1
    );
  }
  editNote(text, newText) {
    const noteIndex = this.toDo.findIndex((note) => note.text === text);
    const note = this.toDo[noteIndex];
    note.text = newText;
    note.dateEdited = new Date().toLocaleString();
  }
  getNote(text) {
    return this.toDo[this.toDo.findIndex((note) => note.text === text)];
  }
  getList() {
    return this.toDo;
  }
  isDone(text) {
    this.toDo[this.toDo.findIndex((note) => note.text === text)].isDone = true;
  }
  getNotesNumber() {
    return `Number of tasks: ${this.toDo.length}`;
  }
  getUndoneNotes() {
    return `Number of undone tasks: ${
      this.toDo.filter((note) => !note.isDone).length
    }`;
  }
  findNote(text, date = null) {
    return this.toDo.find(
      (note) =>
        note.text === text &&
        (date === null || date(note.dateCreated, note.dateEdited))
    );
  }
  sortNotes(status, date = null) {
    this.toDo.sort((a, b) => {
      if (a.isDone === b.isDone) {
        if (date) {
          const dateComparison =
            date(a.dateCreated, a.dateEdited) -
            date(b.dateCreated, b.dateEdited);
          if (dateComparison !== 0) {
            return dateComparison;
          }
        }
        return 0;
      } else if (status == true) {
        return a.isDone ? -1 : 1;
      } else {
        return a.isDone ? 1 : -1;
      }
    });
    return this.toDo;
  }
}

const myList = new List();
task1 = myList.addNote("go to gym");
task2 = myList.addNote("buy your favorite food");
task3 = myList.addNote("watch a movie");
task2 = myList.removeNote("buy your favorite food");
console.log(myList.getList());
myList.isDone("watch a movie");
console.log(myList.getNote("watch a movie"));
myList.editNote("go to gym", "run");
console.log(myList.getList());
console.log(myList.getNotesNumber());
console.log(myList.getUndoneNotes());
console.log(myList.findNote("watch a movie"));
console.log(myList.sortNotes(true));
