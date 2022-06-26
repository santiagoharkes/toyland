export const formatNumber = (number, decimals = 2) => {
  const numberFormatted = new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return numberFormatted.format(number);
};
