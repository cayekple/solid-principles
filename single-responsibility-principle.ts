/*
*   Simple Responsibility Principle
*   
*   A class should have one and only one reason to change, 
*   meaning that a class should have only one job.
*/

class Circle {
    radius: number;

    constructor(radius: number) {
        radius = this.radius;
    }
}

class Square {
    length: number;

    constructor(length: number) {
        length = this.length;
    }
}

class AreaCalculator {

    shapes: object;

    constructor(shapes: object) {
        shapes = this.shapes;
    }

    sum() {
        // logic to sum the areas
    }

    output() {
        return `
           <h1>
             Sum of the areas of provided shapes:
             ${this.sum()} 
           </h1>`;
    }
}

const circle = new Circle(2);
const square = new Square(5);
const square1 = new Square(6);

const shapes = { circle, square, square1};

const areas = new AreaCalculator(shapes);

console.log(areas.output());