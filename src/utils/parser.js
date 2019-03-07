export const parseTime = (date) => {
  if (!date) {
    return '';
  }
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};