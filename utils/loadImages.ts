// utils/loadImages.ts
const importAll = (r: any) => r.keys().map((fileName: string) => r(fileName));

export const loadImages = () => {
  const images = importAll(require.context("/public/gallery", true));
  return images;
};
