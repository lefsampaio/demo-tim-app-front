import { Container, Box, Grid, AppBar } from "@mui/material"
import TopBar from "@/components/TopBar";
import { inputState } from "@/store/campaignSlice";
import { useSelector } from "react-redux";
import BreadcrumbStepper from "@/components/Stepper";


const StepForm = ({ SelectItems, component: Component, stepButtons: StepButtons }) => {
    const inputValues = useSelector(inputState);
    
    return (
        <>
            <TopBar title={inputValues.name} component={BreadcrumbStepper} />
            <Container>
                <Grid container>
                    {/* Parte esquerda */}
                    <Grid item xs={12} md={6} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', marginLeft: '-60px', boxShadow: '8px 0 6px -2px rgba(0, 0, 0, 0.1)' }}>
                        {SelectItems && <SelectItems leftSide={Component} />}
                    </Grid>

                    {/* Parte direita */}
                    <Grid item xs={12} md={6} sx={{ alignContent: 'center' }}>
                        <Box sx={{ height: '100%', display: 'flex', mt: 8, ml: '121px' }}>
                            {Component && <Component />}
                        </Box>
                    </Grid>

                    {/* Barra inferior */}
                    <Grid item xs={12} >
                        <AppBar position="fixed" sx={{ backgroundColor: "#fff", top: 'auto', bottom: 0 }}>
                            <Container fixed>
                                {StepButtons && <StepButtons />}
                            </Container>
                        </AppBar>
                    </Grid>
                </Grid>
            </Container>
        </>
    )



}
export default StepForm