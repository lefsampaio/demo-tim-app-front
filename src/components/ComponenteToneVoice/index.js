import RadioButtonList from '../RadioButtonList'

const ComponenteToneVoice = () => {
  const options = [
    'Formal',
    'Amigável',
    'Divertido',
    'Informal',
    'Profissional',
    'Natural',
  ]
  return <RadioButtonList options={options} type="toneVoice" />
}
export default ComponenteToneVoice
