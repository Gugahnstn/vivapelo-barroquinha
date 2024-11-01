import LogoViva from '../assets/group.svg'
import Text from '../components/Text';
import ImageWithText from '../components/ImageWithText';
import * as S from './style';
import Imageone from '../assets/barro.jpg'
import Image from '../assets/pelourinho 1.png'

const Home = () => {
  return (
    <>
      <header>
        <S.Image src={LogoViva}/>
      </header>
      <main>
        <S.Imagens>
          <ImageWithText title="PELOURINHO" phrase="O Pelourinho amado pelas famílias de nobres e ricos, pois é uma localização privilegiada, sendo o lugar mais alto em relação a outros pontos da região, representando o quanto as famílias ricas e nobres gostavam de se acharem superiores a outras classes sociais. O nome 'Pelourinho' se refere as colunas que eram utilizadas para castigar criminosos em praça públicas, em Salvador houveram outros Pelourinhos, como na Praça Castro Alves, Terreiro de Jesus e Praça Tomé de Souza. Onde hoje é o largo do Pelourinho, hoje é Praça de José Alencar, era o local onde os escravos eram castigados. A rua Chile, construida em 1549, foi originalmente chamada de Rua Direita dos Mercadores . O Pelourinho, desde 1985, é considerado pela UNESCO, como Patrimônio Mundial da Humanidade." image={Image}/>
          <ImageWithText title="BARROQUINHA" phrase="A rua da Barroquinha foi nomeada dessa forma devido as erosões causadas pela ação da água corrente em um terreno específico. Durante o inverno as águas iam escavando os solos onde hoje é chamado de Baixa dos Sapateiros e por esse motivo em meados do século XVIII, a rua da barroca começou a ser chamada no diminutivo. Possui grande importância cultural, por ser centros de resistência da cultura africana no período de escravidão, muitos negros ocupavam a localidade na época muito famosa pelo candomblé lá habitado e nos tempos atuais também muito pesquisado por antropólogos e historiadores." image={Imageone}/>
        </S.Imagens>
        <S.Textos>
          <Text textone="HISTÓRIA DAS FEIRAS LIVRES" texttwo="As primeiras referências às feiras aparecem em meio ao comércio e às festividades religiosas. A própria palavra latina feria, que deu origem à portuguesa feira, significa dia santo, feriado. Esses eventos têm origem na Europa durante a Idade Média e tiveram papel fundamental no desenvolvimento das cidades e no chamado renascimento comercial do século XIII. Quando os camponeses não conseguiam vender nos mercados a produção excedente, trocavam por outros produtos nas ruas a um preço mais baixo. Realizadas estrategicamente em áreas onde rotas comerciais se cruzavam, dois fatores curiosos é que durante elas interrompiam-se guerras e a paz era garantida para que os vendedores pudessem trabalhar. Também aconteciam algumas vezes ao ano, e quase todas elas eram realizadas em épocas relacionadas com festas de Igreja."/>
          <Text textone="Contemporaneidade e seus riscos" texttwo="Atualmente, a feira livre enfrenta alguns riscos na contemporaneidade devido ao cenário econômico voraz, com alta competição no comércio, e à supervisão do poder público, que progressivamente tira características fundamentais da manifestação. Por ser um evento regulado pelas prefeituras, cada vez mais existe uma pressão por organização e padronização das feiras em diversos aspectos. Em relação à limpeza, aos horários, à localização, à qualidade dos produtos etc. Já no aspecto econômico, a voraz competição do mercado capitalista e consequentemente as facilidades proporcionadas por grandes empresas em uma compra colocam em risco a tradição das feiras. O que não deixa de ser irônico, considerando-se que foram as feiras livres que fizeram surgir os primeiros mercados." />
        </S.Textos>
      </main>
      <div>
        <video > <source src="https://drive.google.com/file/d/18hgYxULJHbCKchw_U30sF362VUttAVBW/view?usp=drivesdk"/></video>
      </div>
    </>
  );
}

export default Home;