const parseFlightDate = (date: string) => {
  return date.split('T')[0];
};

export default parseFlightDate;
