import StepForm from "@/components/StepForm"
import CardList from "@/components/CustomCard"
import CanalLeftSide from "@/components/CanalLeftSide"
import StepButtons from "@/components/StepButtons"

const Canal = () => {
   
    return (
        <StepForm component={CardList} SelectItems={CanalLeftSide} stepButtons={StepButtons} />
    )
}
export default Canal