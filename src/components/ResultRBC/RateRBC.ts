export const erythrocytes = (erythrocytes: number) => {
  if (erythrocytes < 3.8) {
    return 'Anemia';
  } else if (erythrocytes >= 3.8 && erythrocytes <= 5.9) {
    return 'Normal';
  } else {
    return 'Policitemia';
  }
};

export const hemoglobin = (hemoglobin: number) => {
  if (hemoglobin < 12) {
    return 'Anemia';
  } else if (hemoglobin >= 12 && hemoglobin <= 16) {
    return 'Normal';
  } else {
    return 'Policitemia';
  }
};

export const hematocrit = (hematocrit: number) => {
  if (hematocrit < 36) {
    return 'Anemia / Hemorragia';
  } else if (hematocrit >= 36 && hematocrit <= 48) {
    return 'Normal';
  } else {
    return 'Policitemia / DPOC / Desidratação';
  }
};

export const rdw = (rdw: number) => {
  if (rdw <= 15.5) {
    return 'Normal';
  } else {
    return 'Anisocitose';
  }
};

export const WBCSerie = ({
  erythrocytesIn,
  hemoglobinIn,
  hematocritIn,
}: {
  erythrocytesIn: number;
  hemoglobinIn: number;
  hematocritIn: number;
}) => {
  const VCM = Number(((hematocritIn / erythrocytesIn) * 10).toFixed(2));
  const HCM = Number(((hemoglobinIn / erythrocytesIn) * 10).toFixed(2));
  const CHCM = Number(((hemoglobinIn / hematocritIn) * 100).toFixed(2));

  const VCMResult = () => {
    if (VCM < 80) {
      return 'Microcitose';
    } else if (VCM >= 80 && VCM <= 100) {
      return 'Normal';
    } else {
      return 'Macrocitose';
    }
  };

  const HCMResult = () => {
    if (HCM < 27) {
      return 'Hipocromia';
    } else if (HCM >= 27 && HCM <= 32) {
      return 'Normal';
    } else {
      return 'Hipercromia';
    }
  };

  const CHCMResult = () => {
    if (CHCM < 32) {
      return 'Hipocromia';
    } else if (CHCM >= 32 && CHCM <= 36) {
      return 'Normal';
    } else {
      return 'Hipercromia';
    }
  };

  return { VCM, HCM, CHCM, VCMResult, HCMResult, CHCMResult };
};
