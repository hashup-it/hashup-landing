import { Point } from '../types';

const getMiddle = (points: Point[]): Point => {
	const x = points.reduce((acc, point) => acc + point[0], 0) / points.length;
	const y = points.reduce((acc, point) => acc + point[1], 0) / points.length;

	return [x, y];
};

export { getMiddle };
