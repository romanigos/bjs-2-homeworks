function parseCount(number) {
	if (isNaN(number)) {
		throw new Error('Невалидное значение');
	}
	return Number.parseFloat(number);
}


function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(a, b, c) {
        this.a = a;
		this.b = b;
		this.c = c;
        
		if (a + b < c || b + c < a || a + c < b) {
			throw new Error('Треугольник с такими сторонами не существует');
		};
			}

	get perimeter() {
		return Number.parseFloat((this.a + this.b + this.c));
	}

	get area() {
		let p = 0.5 * this.perimeter;
		return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}