import { postCampaign } from '@/api/services/services'
import { inputState } from '@/store/campaignSlice'
import { setGeneratedContent, startLoading } from '@/store/itemsSlice'
import { decrement, increment } from '@/store/stepSlice'
import { Box, Button, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const StepButtons = () => {
  const inputs = useSelector(inputState)

  const timelineData = {
    name: inputs.name,
    description: 'Descrição da campanha',
    campaignChannel: inputs.campaignChannel,
    toneVoice: inputs.toneVoice,
    creativityTemperature: inputs.creativityTemperature,
    characterLimit: inputs.characterLimit,
    paragraphs: inputs.paragraphs,
    playground: inputs.playground,
    targetAudience: inputs.targetAudience,
    keyWords: inputs.keyWords,
    mentalTriggers: inputs.mentalTriggers,
    link: inputs.link,
    useEmojis: inputs.useEmojis,
    hashtag: '#Tim; #RockinRio; #TimControle; #FestivaldeMúsica',
    author: 'Leticia Sampaio',
  }

  const activeStep = useSelector((state) => state.step.value)
  const dispatch = useDispatch()

  const handleStepChange = (step) => {
    dispatch(increment())
  }

  const handleBack = (step) => {
    dispatch(decrement())
  }

  const sendData = () => {
    dispatch(startLoading())
    postCampaign(timelineData)
      .then((response) => {
        dispatch(setGeneratedContent(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
    handleStepChange()
  }
  return (
    <Toolbar sx={{ justifyContent: 'space-between', alignSelf: 'auto' }}>
      <Box>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
          sx={{
            textTransform: 'none',
            alignSelf: 'center',
            backgroundColor: '#fff',
            color: 'customBlue.main',
            '&:hover': {
              backgroundColor: 'customBlue.main',
              color: '#fff',
            },
          }}
          size="large"
        >
          voltar
        </Button>
      </Box>
      <Box>
        {activeStep !== 2 && (
          <Button
            disabled={activeStep === -1 || !inputs.campaignChannel}
            onClick={activeStep === 0 ? handleStepChange : sendData}
            variant="contained"
            sx={{ textTransform: 'none', backgroundColor: 'customBlue.main' }}
            size="large"
          >
            {activeStep === 0 ? 'continuar' : 'gerar conteúdo'}
          </Button>
        )}
      </Box>
    </Toolbar>
  )
}
export default StepButtons
