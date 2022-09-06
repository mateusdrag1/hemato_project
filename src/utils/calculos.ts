export const VCM = (hematocrito: number, hemacias: number) => {
  return (hematocrito / hemacias) * 10;
};

export const HCM = (hemoglobina: number, hemacias: number) => {
  return (hemoglobina / hemacias) * 10;
};

export const CHCM = (hemoglobina: number, hematocrito: number) => {
  return (hemoglobina / hematocrito) * 100;
};
