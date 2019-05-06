const areFloatsEqual = (v1, v2) => Math.abs(v1 - v2) < 0.00001;

export const getInvertedCircle = function (circle, inversionCircle) {
  const isTouchingCenter = areFloatsEqual(distance(circle, inversionCircle), circle.r);

  // First point is a radius away in one direction
  // Next two points are 120 degrees around the circumference
  const getPointOnCircumference = ({ x, y, r }, angle) => ({ x: r * Math.cos(angle) + x, y: r * Math.sin(angle) + y });
  const pointsOnCircle = [
    getPointOnCircumference(circle, 0),
    getPointOnCircumference(circle, 120),
    getPointOnCircumference(circle, 240),
  ];

  const invertedPoints = pointsOnCircle.map(invert(inversionCircle));

  if (isTouchingCenter) {
    return createLine(invertedPoints[1], invertedPoints[2]);
  }

  const center_inverted = findCenter(...invertedPoints);

  // Get the distance from the center to one of the points
  // that's the new radius.
  const aPoint = invertedPoints[0];
  const dx = center_inverted.x - aPoint.x;
  const dy = center_inverted.y - aPoint.y;
  const r_inv = Math.pow(dx * dx + dy * dy, 1 / 2);

  return {
    type: 'circle',
    x: center_inverted.x,
    y: center_inverted.y,
    r: r_inv
  }
};

const findCenter = (p1, p2, p3) => {
  const div = 2 * (p1.x * (p2.y - p3.y) - p1.y * (p2.x - p3.x) + p2.x * p3.y - p3.x * p2.y);
  return {
    x: (norm2(p1) * (p2.y - p3.y) + norm2(p2) * (p3.y - p1.y) + norm2(p3) * (p1.y - p2.y)) / div,
    y: (norm2(p1) * (p3.x - p2.x) + norm2(p2) * (p1.x - p3.x) + norm2(p3) * (p2.x - p1.x)) / div
  }
};

// The squared norm of a point
const norm2 = p => p.x * p.x + p.y * p.y;

const invert = inversionCircle => point => {
  const { x, y, r } = inversionCircle;
  // Translate everything so that the circle we are inverting over has its center at the origin
  const inv_point = { x: point.x - x, y: point.y - y };

  const norm = norm2(inv_point);
  if (norm === 0) {
    return null;
  }

  const constant = r * r * 1.0 / norm;

  // Invert the point and translate it back to its original place
  return {
    x: inv_point.x * constant + x,
    y: inv_point.y * constant + y
  };
};

const distance = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

const createLine = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  console.log({ x: x1, y: y1 }, { x: x2, y: y2 })
  // y = kx + m
  if (areFloatsEqual(x1, x2)) {
    return { type: 'line', x1: x1, y1: 0, x2: x1, y2: 100 };
  } else {
    const k = (y2 - y1) / (x2 - x1);
    const m = y1 - k * x1;
    const getY = x => k * x + m;
    return { type: 'line', x1: 0, y1: getY(0), x2: 100, y2: getY(100) };
  }
}
