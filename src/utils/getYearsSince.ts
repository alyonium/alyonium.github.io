export const getYearsSince = (startDate: string) => {
  const today = new Date();
  const start = new Date(startDate);

  const fullYears = today.getFullYear() - start.getFullYear();

  const isAnniversaryPassed =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() &&
      today.getDate() >= start.getDate());

  return isAnniversaryPassed ? fullYears : fullYears - 1;
};
