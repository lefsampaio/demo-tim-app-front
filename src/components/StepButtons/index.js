import { decrement, increment } from "@/store/stepSlice";
import { Box, Button, Toolbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";

const StepButtons = () => {
    const dispatch = useDispatch();
    const activeStep = useSelector((state) => state.step.value);
    
    const handleStepChange = (step) => {
        dispatch(increment());
    };

    const handleBack = (step) => {
        dispatch(decrement());
    };

    return (
        <Toolbar sx={{ justifyContent: 'space-between', alignSelf: 'auto' }}>
            <Box>
                <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ alignSelf: 'center', backgroundColor: "#fff", color: 'customBlue.main' }} size="large">voltar</Button>
            </Box>
            <Box>
                <Button disabled={activeStep === - 1} onClick={handleStepChange} variant="contained" sx={{ backgroundColor: "customBlue.main" }} size="large">continuar</Button>
            </Box>
        </Toolbar>
    )
}
export default StepButtons