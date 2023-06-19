import StepForm from '@/components/StepForm'
import StepButtons from '@/components/StepButtons'
import ParameterComponent from '@/components/ParameterComponent'

const Parametrizacao = () => (
  <StepForm
    SelectItems={ParameterComponent}
    stepButtons={StepButtons}
    // component={TabPanel}
  />
)
export default Parametrizacao
