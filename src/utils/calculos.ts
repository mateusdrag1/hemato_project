interface Smear {
  segmentados: number;
  eosinofilos: number;
  bastonetes: number;
  linfocitos: number;
  monocitos: number;
}

export const VCM = (hematocrito: number, hemacias: number) => {
  return (hematocrito / hemacias) * 10;
};

export const HCM = (hemoglobina: number, hemacias: number) => {
  return (hemoglobina / hemacias) * 10;
};

export const CHCM = (hemoglobina: number, hematocrito: number) => {
  return (hemoglobina / hematocrito) * 100;
};

export const reviewNeutrophils = (neutrophils: number) => {
  const neutrophilsPercent = neutrophils / 100;

  if (neutrophilsPercent < 0.55) {
    return 'Neutropenia';
  } else if (neutrophilsPercent >= 0.55 && neutrophilsPercent <= 0.65) {
    return 'Normal';
  } else {
    return 'Neutrofilia';
  }
};

export const reviewEosino = (eosino: number) => {
  const eosinoPercent = eosino / 100;

  if (eosinoPercent <= 0.04) {
    return 'Normal';
  } else {
    return 'Eosinofilia';
  }
};

export const reviewBaso = (baso: number) => {
  const basoPercent = baso / 100;

  if (basoPercent <= 0.1) {
    return 'Normal';
  } else {
    return 'Basofilia';
  }
};

export const reviewLymphocytes = (lymphocytes: number) => {
  const lymphocytesPercent = lymphocytes / 100;

  if (lymphocytesPercent <= 0.4) {
    return 'Normal';
  } else {
    return 'Linfocitose';
  }
};

export const reviewMonocytes = (monocytes: number) => {
  const monocytesPercent = monocytes / 100;

  if (monocytesPercent <= 0.08) {
    return 'Normal';
  } else {
    return 'Monocitose';
  }
};

export const reviewBastos = () => {
  return 'Normal';
};

export const analyzeWBC = (smear: Smear) => {
  const segmentados = reviewNeutrophils(smear.segmentados);
  const eosinofilos = reviewEosino(smear.eosinofilos);
  const linfocitos = reviewLymphocytes(smear.linfocitos);
  const monocitos = reviewMonocytes(smear.monocitos);
  let obs = 'Paciente apresenta ';

  if (segmentados === 'Neutrofilia') {
    obs += 'neutrofilia - Comum em infecções bacterianas, inflamações e estresse - ';
  }

  if (eosinofilos === 'Eosinofilia') {
    obs += 'eosinofilia - Comum em infecções parasitárias, alergias e doenças autoimunes - ';
  }

  if (linfocitos === 'Linfocitose') {
    obs +=
      'linfocitose - Comum em infecções virais e infecções crônicas (tuberculose e sífilis) - ';
  }

  if (monocitos === 'Monocitose') {
    obs +=
      'monocitose - Comum em infecções bacterianas (septicemia, mononucleose e tuberculose) - ';
  }

  if (obs === 'Paciente apresenta ') {
    obs = 'Paciente sem alterações no leucograma';
  } else {
    obs += ' Consulte um médico para maiores informações';
  }

  return obs;
};
