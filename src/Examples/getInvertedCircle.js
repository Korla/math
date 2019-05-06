export const getInvertedCircle = function ({ x, y, r }, inversionCircle) {
  const a = Math.atan2(y - inversionCircle.y, x - inversionCircle.x);

  // Invert a point on the circle
  const rp1 = invert({
    x: x - Math.cos(a) * r,
    y: y - Math.sin(a) * r
  }, inversionCircle);

  // Invert the opposite point on the circle
  const rp2 = invert({
    x: x + Math.cos(a) * r,
    y: y + Math.sin(a) * r
  }, inversionCircle);

  // Invert a third point on the circle
  const rp3 = invert({
    x: x + r,
    y: y
  }, inversionCircle);

  // Find the center of the circle given by those 3 points
  // you can find this formula online
  const center_inverted = findCenter(rp1, rp2, rp3);

  // Get the distance from the center to one of the points
  // that's the new radius.
  const dx = center_inverted.x - rp1.x;
  const dy = center_inverted.y - rp1.y;
  const r_inv = Math.pow(dx * dx + dy * dy, 1 / 2);

  return {
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

const invert = (point, inversionCircle) => {
  const { x, y, r } = inversionCircle;
  // Translate everything so that the circle we are inverting over has it's center at the origin
  const inv_point = {
    x: point.x - x,
    y: point.y - y
  };

  const constant = r * r * 1.0 / norm2(inv_point);

  // Invert the point and translate it back to it's original place
  return {
    x: inv_point.x * constant + x,
    y: inv_point.y * constant + y
  };
};

