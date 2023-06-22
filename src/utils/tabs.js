import { SvgIcon } from '@mui/material'
import { ReactComponent as ToneVoiceIcon } from '../../public/images/icons/tonevoice.svg'
import { ReactComponent as MentalTriggers } from '../../public/images/icons/gatilhosmentais.svg'

export const tabs = [
  {
    field: 'toneVoice',
    title: 'Tom de voz',
    icon: <SvgIcon component={ToneVoiceIcon} />,
    description: 'Defina a linguagem e o estilo de comunicação.',
  },
  {
    field: 'creativityTemperature',
    title: 'Temperatura de Criatividade',
    icon: '',
    description:
      'Ajuste o nível de variação nas respostas geradas pela Inteligência Artificial.',
  },
  {
    field: 'characterLimit',
    title: 'Comprimento de Texto',
    icon: '',
    description:
      'Ajuste o comprimento do texto de acordo com as limitações do canal selecionado.',
  },
  {
    field: 'playground',
    title: 'Playground',
    icon: '',
    description:
      'Adicione parâmetros personalizados de acordo com as necessidades da campanha. Seja criativo!',
  },
  {
    field: 'targetAudience',
    title: 'Público alvo',
    icon: '',
    description: 'Selecione o público-alvo definido para a campanha.',
  },
  {
    field: 'keyWords',
    title: 'Palavras-chave',
    icon: '',
    description: 'Insira as palavras-chave definidas para a campanha.',
  },
  {
    field: 'mentalTriggers',
    title: 'Gatilhos mentais',
    icon: MentalTriggers,
    description:
      'Adicione elementos que estimulam emoções e promovem maior engajamento do público-alvo.',
  },
  {
    field: 'link',
    title: 'Link',
    icon: '',
    description:
      'Insira o link da campanha. Será utilizado o link curto no conteúdo gerado.',
  },
  {
    field: 'useEmojis',
    title: 'Emoji',
    icon: '',
  },
  {
    field: 'hashtag',
    title: 'Hashtags',
    icon: '',
    description: 'Insira as hashtags definidas para a campanha.',
  },
]
