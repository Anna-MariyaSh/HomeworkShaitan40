/** @format */
function LMSConstructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.presenceMarks = new Array(10);
    this.marks = new Array(10);

    LMSConstructor.prototype.ageUser = () => {
        return Math.max((new Date()).getFullYear() - this.year, 0) || undefined;
    }

    LMSConstructor.prototype.present = () => {
        const emptyPlace = this.presenceMarks.findIndex(x => x === undefined)
        if (emptyPlace === -1) return
        return this.presenceMarks[emptyPlace] = true;
    }
    LMSConstructor.prototype.absent = () => {
        const emptyPlace = this.presenceMarks.findIndex(x => x === undefined)
        if (emptyPlace === -1) return
        return this.presenceMarks[emptyPlace] = false;
    }
    LMSConstructor.prototype.markUser = (mark) => {
        const emptyPlace = this.marks.findIndex(x => x === undefined)
        if ((emptyPlace === -1) || (mark < 0 || mark > 10)) return
        return this.marks[emptyPlace] = mark;
    }
    LMSConstructor.prototype.summary = () => {
        let sumMark = this.marks.reduce((a, b) => { return a + b; }, 0) / this.marks.length;
        console.log(sumMark);
        let sumPresence = this.presenceMarks.reduce((a, b) => { return a + b; }, 0) / this.presenceMarks.length;
        console.log(sumPresence);
        if (sumMark < 9 && sumPresence < 0.9) {
            alert("Редиска!");
        } else if ((sumMark < 9 && sumPresence >= 0.9) || (sumMark >= 0.9 && sumPresence < 0.9)) {
            alert("Норм, но можно лучше")
        } else if (sumMark >= 9 && sumPresence >= 0.9) {
            alert("Ути какой молодчинка!")
        }
    }
}

let user1 = new LMSConstructor(
    'Margarita',
    'Tomatoes',
    1998
);

user1.absent();
user1.present();
user1.markUser(9);
user1.summary();
console.log(user1);

let user2 = new LMSConstructor(
    'Mary',
    'Svon',
    1999
);
user2.absent();
user2.present();
user2.markUser(13);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.markUser(10);
user2.summary();
console.log(user2);
