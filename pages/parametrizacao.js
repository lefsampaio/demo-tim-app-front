import StepForm from "@/components/StepForm";
import StepButtons from "@/components/StepButtons";
import ParameterComponent from "@/components/ParameterComponent";
import TabPanel from "@/components/TabPanel";

const Parametrizacao = () => (
  <StepForm
    SelectItems={ParameterComponent}
    stepButtons={StepButtons}
    component={TabPanel}
  />
);
export default Parametrizacao