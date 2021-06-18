import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { createServer, Model } from 'miragejs';
import theme from '../styles/theme';
import '../src/components/Slider/styles.css';
import { ContinentsProvider } from "../ContinentsContext";

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          title: 'Europa',
          soonDescription: 'O continente mais antigo.',
          description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
          imageSlide: '/assets/Europe.png',
          bannerSlug: '/assets/europe_banner.png',
          country: 50,
          language: 60,
          city: 27,
          cardInfo:
          [ 
          {
            cityTitle: 'Londres',
            countryTitle: 'Reino Unido',
            imgCity: '/assets/londres.svg',
            imgFlag: '/assets/reino-unido-flag.svg'
          },
          {
            cityTitle: 'Paris',
            countryTitle: 'França',
            imgCity: '/assets/paris.svg',
            imgFlag: '/assets/france-flag.svg'
          },
          {
            cityTitle: 'Roma',
            countryTitle: 'Itália',
            imgCity: '/assets/roma.svg',
            imgFlag: '/assets/italia-flag.svg'
          },
          {
            cityTitle: 'Praga',
            countryTitle: 'República Tcheca',
            imgCity: '/assets/praga.svg',
            imgFlag: '/assets/praga-flag.svg'
          },
          {
            cityTitle: 'Amsterdã',
            countryTitle: 'Holanda',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/holanda-flag.svg'
          },
          ],
        },
        {
          id: 2,
          title: 'América',
          soonDescription: 'O continente conhecido como "Novo Mundo".',
          description: 'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas.',
          imageSlide: '/assets/america-slide.png',
          bannerSlug: '/assets/brasil.jpg',
          country: 60,
          language: 50,
          city: 30,
          cardInfo:
          [ 
          {
            cityTitle: 'Rio de Janeiro',
            countryTitle: 'Brasil',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/brazil-flag.png'
          },
          {
            cityTitle: 'Nova York',
            countryTitle: 'Estados Unidos',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/america-flag.png'
          },
          ],
        },
        {
          id: 3,
          title: 'Ásia',
          soonDescription: 'O continente asiático.',
          description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
          imageSlide: '/assets/asia-slide.jpg',
          bannerSlug: '/assets/asia-slide.jpg',
          country: 51,
          language: 61,
          city: 21,
          cardInfo:
          [ 
          {
            cityTitle: 'Tokyo',
            countryTitle: 'Japão',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/japao-flag.png'
          },
          {
            cityTitle: 'Xangai',
            countryTitle: 'China',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/china-flag.png'
          },
          {
            cityTitle: 'Moscou',
            countryTitle: 'Rússia',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/russia-flag.jpg'
          },
          ],
        },
        {
          id: 4,
          title: 'Oceania',
          soonDescription: 'O continente conhecido como "Novíssimo Mundo".',
          description: 'Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d"Urville.',
          imageSlide: '/assets/oceania.jpg',
          bannerSlug: '/assets/oceania.jpg',
          country: 45,
          language: 65,
          city: 20,
          cardInfo:
          [ 
          {
            cityTitle: 'Camberra',
            countryTitle: 'Austrália',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/australia-flag.png'
          },
          ],
        },
        {
          id: 5,
          title: 'África',
          soonDescription: 'O continente tropical.',
          description: 'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
          imageSlide: '/assets/africa-slide.jpg',
          bannerSlug: '/assets/africa-slide.jpg',
          country: 55,
          language: 65,
          city: 35,
          cardInfo:
          [ 
          {
            cityTitle: 'Durban',
            countryTitle: 'África do Sul',
            imgCity: '/assets/amsterda.svg',
            imgFlag: '/assets/africa-flag.png'
          },
          ],
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/continents', () => {
      return this.schema.all('continent')
    })

    this.passthrough((request) => {
      if (
        request.url === "/_next/static/development/_devPagesManifest.json"
      ) {
        return true;
      }
    });
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
