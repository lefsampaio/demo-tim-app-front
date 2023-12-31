import { Container, Box, Grid, AppBar } from '@mui/material'
import TopBar from '@/components/TopBar'
import { inputState } from '@/store/campaignSlice'
import { useSelector } from 'react-redux'
import BreadcrumbStepper from '@/components/Stepper'
import CardList from '../CustomCard'
import TabPanel from '../TabPanel'
import CanalLeftSide from '../CanalLeftSide'
import ParameterComponent from '../ParameterComponent'
import Results from '../Results'
import { selectOpenState } from '@/store/openSlice'

const StepForm = ({ stepButtons: StepButtons }) => {
  const inputValues = useSelector(inputState)
  const activeStep = useSelector((state) => state.step.value)
  const isTopBarOpen = useSelector(selectOpenState)

  return (
    <>
      <TopBar title={inputValues.name} component={BreadcrumbStepper} />
      {/* <Container> */}
      <Grid container>
        {/* Parte esquerda */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            marginRight: '40px',
            marginLeft: isTopBarOpen ? '250px' : '100px',
            transition: 'margin-left 0.3s ease',
          }}
        >
          {activeStep === 0 && (
            <CanalLeftSide
              title="Seleção de canal"
              subtitle={[
                'Selecione o canal para esta campanha entre as opções disponíveis no lado direito. O conteúdo será gerado de acordo com as boas práticas de cada canal específico.',
              ]}
            />
          )}
          {activeStep === 1 && <ParameterComponent />}
          {activeStep === 2 && (
            <CanalLeftSide
              title="Resultados"
              subtitle={[
                'Confira os conteúdos que a Inteligência Artificial gerou para a campanha, de acordo com a base de dados selecionada e os parâmetros definidos. Caso queira redefinir os parâmetros, clique em voltar.',
                'Selecione as opções que servirão de referência para gerar novos conteúdos .Caso algum conteúdo não tenha sido satisfatório, exclua da lista.',
                'Importante: sua avaliação contribui para a geração de novos conteúdos para essa mesma campanha.',
              ]}
            />
          )}
        </Grid>

        {/* Parte direita */}
        <Grid
          item
          mt={8.5}
          xs={12}
          md={4}
          sx={{
            // marginLeft: '40px',
            // marginRight: '40px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FCFCFC',
          }}
        >
          <Box>
            {activeStep === 0 && <CardList />}
            {activeStep === 1 && <TabPanel />}
            {activeStep === 2 && <Results />}
          </Box>
        </Grid>
        {/* Barra inferior */}
        <Grid item xs={12}>
          <AppBar
            role="footer"
            position="fixed"
            sx={{ backgroundColor: '#fff', top: 'auto', bottom: 0 }}
          >
            <Container fixed>{StepButtons && <StepButtons />}</Container>
          </AppBar>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  )
}
export default StepForm
