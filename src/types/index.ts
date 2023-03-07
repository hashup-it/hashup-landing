type Point = [number /* X coordinate */, number /* Y coordinate */]

interface Ray {
	point1: Point;
	point2: Point;
}

export type { Point, Ray };
