import moment from 'moment'

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Os meses em JavaScript começam a partir do zero
  const year = date.getFullYear()

  // Formatação para dois dígitos
  const formattedDay = String(day).padStart(2, '0')
  const formattedMonth = String(month).padStart(2, '0')

  return `${formattedDay}/${formattedMonth}/${year}`
}
export const editedDate = (date) => {
  const editedDate = moment(date)
  const currentDate = moment()
  const daysAgo = currentDate.diff(editedDate, 'days')

  return `Editado há ${daysAgo} dias`
}
export const formatDateTime = (dateTime) => {
  const date = new Date(dateTime)
  const year = date.getFullYear().toString().slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`
}

const formaters = { formatDate, editedDate, formatDateTime }

export default formaters
