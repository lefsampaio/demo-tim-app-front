import RadioButtonList from '../RadioButtonList'

const ComponenteTargetAudience = () => {
  const options = [
    'Clientes Tim Pré',
    'Clientes TIM Pós Básico',
    'Clientes TIM Black Pós',
    'Todos os clientes',
    'Não clientes',
  ]
  return <RadioButtonList options={options} type="targetAudience" />
}
export default ComponenteTargetAudience
