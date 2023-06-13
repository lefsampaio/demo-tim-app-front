import moment from 'moment';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Os meses em JavaScript começam a partir do zero
  const year = date.getFullYear();

  // Formatação para dois dígitos
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year}`;
};
export const editedDate = (date) => {
  const editedDate = moment(date);
  const currentDate = moment();
  const daysAgo = currentDate.diff(editedDate, 'days');

  return `Editado há ${daysAgo} dias`;
};
const formaters = { formatDate, editedDate }

export default formaters