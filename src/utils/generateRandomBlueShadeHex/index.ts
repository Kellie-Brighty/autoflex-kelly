import hueToRGB from "@/utils/hueToRgb";

function generateRandomBlueShadeHex(): string {
  const hue: number = Math.floor(Math.random() * 61) + 180; // Random hue value between 180 and 240
  const saturation: number = Math.floor(Math.random() * 30) + 70; // Random saturation between 70 and 100
  const lightness: number = Math.floor(Math.random() * 30) + 60; // Random lightness between 60 and 90

  const h: number = hue / 360;
  const s: number = saturation / 100;
  const l: number = lightness / 100;

  const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p: number = 2 * l - q;

  const rgb: number[] = [
    Math.round(hueToRGB(p, q, h + 1 / 3) * 255),
    Math.round(hueToRGB(p, q, h) * 255),
    Math.round(hueToRGB(p, q, h - 1 / 3) * 255),
  ];

  const hexColor: string = rgb
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

  return `#${hexColor}`;
}

export default generateRandomBlueShadeHex;
