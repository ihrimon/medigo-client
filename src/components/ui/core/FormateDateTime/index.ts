export const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 
  const hourString = String(hours).padStart(2, '0');

  return `${day}-${month}-${year} at ${hourString}.${minutes} ${ampm}`;
};

