export const plateletsResult = (platelets: number) => {
  if (platelets < 150000) {
    return 'Trombocitopenia';
  } else if (platelets > 450000) {
    return 'Trombocitose';
  } else {
    return 'Normal';
  }
};

export const plateletsDescription = (platelets: number) => {
  if (platelets < 150000) {
    return `A trombocitopenia, que é a redução nas plaquetas circulantes (abaixo
      de 150.000), surge na maioria das vezes de uma ou duas causas gerias. Formação deficiente
      de plaquetas (como em estados aplásticos, efeito de quimioterapia mielotóxica e por
      sensibilidade a droga), e uma destruição aumentada de plaquetas na circulação e no baço
      (originária geralmente de uma sensibilização auto- imune das plaquetas, tornando-as sujeitas
      a fagocitose por macrófagos).`;
  } else if (platelets > 450000) {
    return `A trombocitose, que é o aumento nas plaquetas circulantes (acima de 450.000), é denominado
    trombocitose, e correlaciona-se com formação de trombos intravasculares`;
  } else {
    return `A contagem normal de plaquetas é de 150.000 a 450.000 por mm3.`;
  }
};
