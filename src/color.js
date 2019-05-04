export class Color {
  constructor(hexOrObject) {
    const { r, g, b } = hexOrObject instanceof Object ? hexOrObject : convertHexToRgb(hexOrObject);
    this.r = r;
    this.g = g;
    this.b = b;
  }
  asRgbCss() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const convertHexToRgb = hex => {
  const [rS, gS, bS] = hex.replace(/#/, '').match(/.{1,2}/g);
  const [r, g, b] = [rS, gS, bS].map(v => parseInt(v, 16))
  return new Color({ r, g, b });
}

export const interpolateColor = ({ r: lR, g: lG, b: lB }, { r: rR, g: rG, b: rB }, percentage) => (
  new Color({
    r: Math.round(lR + (rR - lR) * percentage / 100),
    g: Math.round(lG + (rG - lG) * percentage / 100),
    b: Math.round(lB + (rB - lB) * percentage / 100),
  })
);
