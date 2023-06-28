import StepForm from '@/components/StepForm'
import CanalLeftSide from '@/components/CanalLeftSide'
import StepButtons from '@/components/StepButtons'

const Canal = () => (
  <StepForm SelectItems={CanalLeftSide} stepButtons={StepButtons} />
)

export default Canal
