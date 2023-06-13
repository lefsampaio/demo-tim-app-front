import { decrement, increment } from "@/store/stepSlice";
import { Box, Button, Toolbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";

const StepButtons = () => {
    const activeStep = useSelector((state) => state.step.value);
    const dispatch = useDispatch();

    const handleStepChange = (step) => {
        dispatch(increment());
    };

    const handleBack = (step) => {
        dispatch(decrement());
    };

    return (
        <Toolbar sx={{ justifyContent: 'space-between', alignSelf: 'auto' }}>
            <Box>
                <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ textTransform: 'none', alignSelf: 'center', backgroundColor: "#fff", color: 'customBlue.main' }} size="large">voltar</Button>
            </Box>
            <Box>
                <Button disabled={activeStep === - 1} onClick={handleStepChange} variant="contained" sx={{ textTransform: 'none', backgroundColor: "customBlue.main" }} size="large">{activeStep === 0 ? 'continuar' : 'gerar conteúdo'}</Button>
            </Box>
        </Toolbar>
    )
}
export default StepButtons