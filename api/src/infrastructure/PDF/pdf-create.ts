import fs, { WriteStream } from 'fs'
import PDFDocument from 'pdfkit'
import IRequestBody from '../../domain/interfaces/common/request'
import { uploadToS3 } from '../AWS/s3/upload'
import { generateExpirableUrl } from '../AWS/s3/download'

class PDFGenerator {
  private readonly document: PDFKit.PDFDocument
  private readonly source: WriteStream
  private currentPage: number = 1
  private outputPath: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Temporary any
  constructor(outputPath: string) {
    this.source = fs.createWriteStream(outputPath)
    this.outputPath = outputPath
    this.document = new PDFDocument()
  }

  public addPage(page: number, data: IRequestBody) {
    switch (page) {
      case 0:
        this.addHeader()
        this.document.font('Times-Roman')
        this.document.fontSize(14)
        this.document.text(`São Paulo, ${data.dataCriacaoDocumento}`, { align: 'right' })
        this.document.moveDown(1)
        this.image('pagina1', 450, 450)
        this.addFooter('footer1')
        this.document.addPage()
        break
      case 1:
        this.addHeader()
        this.document.fontSize(14)
        this.document.text(`Proposta - Número ${data.idProposta}`)
        this.document.text(`Ao Sr. (a) ${data.nomeCliente}`, { align: 'left' })
        this.document.moveDown(0.5)
        this.document.text(`Endereço: ${data.enderecoCliente}`, { align: 'left' })
        this.document.moveDown(0.5)
        this.document.text(`Bairro: (a), ${data.bairroCliente}`, { align: 'left' })
        this.document.moveDown(0.5)
        this.document.text(`Cidade ${data.cidadeCliente}`, { align: 'left' })
        this.document.moveDown(4)
        this.document.fontSize(16)
        this.document.font('Times-Bold')
        this.document.moveDown(1)
        this.document.text(
          `Vistoria - Desculpinização - Xilófagos - Deterioração de madeiras e comprometimento de estruturas.`,
        )
        this.document.moveDown(1)
        this.document.text(`Comportamento de praga de maneira - ${data.comportamento}`)
        this.document.moveDown(1)
        this.document.text(`Visualização humana -  ${data.visualizacaoHumana}`, { align: 'left' })
        this.document.moveDown(2)
        this.document.addPage()
        break
      case 2:
        this.addHeader()
        this.document.fontSize(16)
        this.document.text('CONHECIMENTO')
        this.document.fontSize(12)
        this.document.text(
          'Cupim Subterrâneo – Vivem no Solo – Adentram às estruturas atacando os alicerces e subindo para dentro das paredes trazendo uma quantidade volumosa de terra, processo este para construírem seus ninhos secundários que são interligados com o ninho de solo central onde encontra-se a RAINHA FISOGÁSTRICA. ',
        )
        this.document.text(
          'Essa interligação é uma espécie de  cordão umbilical  onde  todos  os  ninhos  secundários (sub bases dentro das estruturas) dependem do comando em tempo real daquele que está no solo, onde está a poderosa Rainha. ',
        )
        this.document.text(
          'Com o carregamento de terra 24 horas por dia do solo para dentro das estruturas que estão sendo atacadas de maneira OCULTA podem levar as construções ao que chamamos de. (falência estrutural), rompimentos seríssimos devido ao acúmulo volumoso desta terra para dentro de paredes, lajes e pisos dessas construções.         ',
        )
        this.document.text(
          ' Atacam quaisquer madeiras afixadas em pisos e paredes juntamente com ataques em fiações elétricas devido às capas dos fios além do plástico possuírem 1,8% de material celulósico.        ',
        )
        this.document.text(
          ' Atacam também vegetações que estiverem no solo em raios de atuações  que podem chegar  à 800 metros quadrados do ninho central (ninho de solo onde está a RAINHA).        ',
        )
        this.document.text(
          'Fontes celulósicas (madeiras) ligadas à estrutura e PERÍMETROS ESTRUTURAIS que os Cupins de Concreto atacam de maneira Oculta comprometendo com o acumulo de terra que trazem do solo.        ',
        )
        this.document.text(
          '1)Madeiramentos de sustentação de telhados – Cabeças das vigas que são introduzidas para dentro das paredes.        ',
        )
        this.document.text('2)Forros de madeira (tetos)')
        this.document.text('3)Redes elétricas')
        this.document.text('4)Batentes e guarnições de portas e janelas / decks / vegetações')
        this.document.text('5)Fundos e laterais de armários embutidos')
        this.document.text('6)Pisos e rodapés de madeira')
        this.document.text('7)Molduras de gesso')
        this.document.text('8)Painéis afixados em paredes e madeiramentos de decks.')
        this.document.text('9)Painéis de energia em quadros mestres.')
        this.document.text('10)Caixas de agua de concreto onde são atraídos pela umidade')
        this.document.addPage()
        break
      case 3:
        this.addHeader()
        this.document.moveUp(2)
        this.document.text('Cupim subterraneo')
        this.image('pag5', 480, 500)
        this.document.fontSize(12)
        this.document.text(
          'Praga de solo que precisa ser combatida com técnicas à base de implante de adesivos estruturais e iscas de solo ao redor das construções implantando nos (360º) juntamente com infiltrações de calda cupinicida apropriada para o terreno em locais que julgarmos necessário. ',
        )
        this.document.text(
          'Com o implante das iscas de solo ao redor das edificações formar assim uma barreira química linear e profunda protegendo definitivamente as sapatas (alicerces) impedindo que a praga  migre para o perímetro interno das unidades  infestando as paredes e outros locais onde começam à construir  seus ninhos secundários de maneira invisível causando seriíssimos prejuízos às pessoas.        ',
        )
        this.document.text(
          'OBS – Tais Trabalhos são somente para empresas profissionais na área de descupinização, pois estas dominam técnicas e conhecimentos específicos para os referidos controles de solo e estruturas armadas.        ',
        )

        this.document.addPage()
        break
      case 4:
        this.addHeader()
        this.document.text(' NOTA:    Comportamento da praga em questão em estruturas armadas.')
        this.document.moveDown(2)
        this.image('predio', 240, 250)
        this.document.moveDown(2)
        this.document.text(
          'Acessam os prédios pelo solo e sobem pelas vias de acesso assim como exemplifica a ilustração, parando somente na última laje onde geralmente ficam as coberturas ou apartamentos dos últimos andares. Ao baterem nesta última laje não tendo mais para onde subirem constroem seus ninhos secundários dentro das paredes e lajes, atacando em primeira instância as fontes celulósicas deste referido perímetro, desalojando para os demais apartamentos assim que a celulose do apartamento em questão acabar, processo este que chamamos de (ataque invertido) ou seja em construções verticais (prédios) os Cupins de Concreto também podem atacar de baixo para cima.        ',
        )
        this.document.text(
          'O grande perigo caso cheguem ao topo do prédio é descobrirem as caixas de água superiores, pois caso isso aconteça iniciam ataques fortissimos no concreto das paredes para poderem ter acesso à umidade onde se prevalecem dela para fortalecerem  as colônias secundárias causando seríssimos problemas de rompimentos nesses reservatórios, onde as caixas começam à trincar e no posterior rompem totalmente causando seríos riscos às pessoas que estão abaixo.         ',
        )
        this.document.addPage()
        break
      case 5:
        this.addHeader()
        this.document.fontSize(16)
        this.document.text('NOTA –        ')
        this.document.fontSize(12)
        this.document.text(
          '        A empresa STOP PRAG através dos profissionais Sr. Wagner e             Sr. Marcelo De Farias atenderam a ocorrência no condominio com endereço acima citado onde já são cliente da empresa STOP PRAG,   observaram que o problema está voltando no solo do condominio devido ao residual dos produtos que foram aplicados à anos atrás  estar terminando. Além disso as unidades (apartamentos) estão com ninhos dentro de suas paredes e também em lajes dos ultimos andares onde os Cupins estão de maneira alucinada em busca das caixas de água, pois as unidades não foram imunizadas juntamente com o tratamento de solo no serviço  realizado à anos atrás. Em uma das torres à anos atrás nossa empresa já tratou o concreto das caixas de água porque os Cupins de Concreto já estavam ali infiltrando-se onde iriam em tempo habil curtíssimo comprometer a refrida estrutura causando trincas e rompimentos inesperados abalando a segurança das pessoas.        ',
        )
        this.document.text(
          '       Dando sequência ao processo de vistoria nossa equipe técnica mesmo não realizando controles internos nos apartamentos à anos atrás  descupinizou atualmente algumas dessas unidades em  algumas torres porque como o residual das iscas que foram aplicadas no solo do condominio estão enfraquecendo  os Cupins já iestão novamente iniciando os ataques internos nas estruturas desses  apartamentos.        ',
        )
        this.document.text(
          '       Tratando-se de edificações verticais (prédios) os Cupins Subterrâneos  acessam as sapatas ou alicerces migrando para os perímetros internos dessas unidades, iniciando assim  o trânsito livre dentro de pisos e paredes (alvenaria)  na procura alucinada por quaisquer materiais celulósicos que possam encontrar incluindo o sistema de eletricidade.        ',
        )
        this.document.text(
          '       Realizamos uma investigação  em pontos de subida dentro de algumas  unidades  e através de nossa vasta experiência nessa área  executando  bons serviços  à mais de 30 anos,  entendemos que os ataques do solo para dentro das unidades atualmente  estão em níveis já  elevados.        ',
        )
        this.document.text(
          '       Já conhecemos o condomínio e entendemos  que a praga está atacando as sapatas ou alicerces das torres de maneira elevada via solo, mas AINDA não infestou  De maneira globalizada a estrutura vertical, onde caso isto já estivesse  ocorrido estariam causando  seríssimos prejuízos à massa estrutural desses prédios devido  ao  volumoso carregamento de terra do solo para dentro destas paredes deixando essas estruturas muito pesadas.        ',
        )
        this.document.addPage()
        break
      case 6:
        this.addHeader()
        this.document.text(
          '        Metodologia de controle gobalizada que será implantada no condominio.        ',
        )
        this.document.text(
          'Vamos agora abaixo neste mencionar a metodologia de tratamento que será adotada por nós para criarmos uma BAREIRA PROTETORA impedindo assim que a praga  inicie os ataques nas estruturas pelo solo e vamos também mencionar como será realizado o controle globalizado em todas as unidades do condomínio, procedimento este que já era pára ter sido implantado à anos atrás.        ',
        )
        this.document.text(
          '1) Será tratado todo o terreno  do condomínio com implante de iscas de solo em todas as ruas, canteiros, estacionamentos, jardins e pontos que julgarmos necessário.        ',
        )
        this.document.text(
          '2) Após o tratamento do terreno da área comum em geral iremos executar ao redor de todos os prédios e casas o que chamamos de (barreira quimica linear e profunda) processo este para brecarmos os acessos dos cupins nas sapatas ou alicerces dessas edificações, porque quando realizamos um tratamento global de solo nas áreas comuns os Cupins tendem antes de morrerem  à saírem ou desalojarem para os perímetros internos das contruções nas imediações  onde se infiltrarão  para o perimetro interno das unidades (apartamentos e casas ) do referido condominio causando assim muitos prejuízos indesejáveis aos condôminos.        ',
        )
        this.document.text(
          '3) Ápós a confecção das barreiras quimicas ao redor das edificações iremos tratar o perímetro interno das unidades, serão tratados todos os apartamentos do condomínio e também todas as casas com serviços seguros às pessoas não causando nenhum tipo de transtorno para as famílias que ali residem juntamente com seus pts.        ',
        )
        this.document.text(
          '4)  Dentro das unidades e casas iremos implantar iscas ecologicas em pontos que julgarmos necessário de pisos e paredes, produto este que irá fazer uma fachina estrutural matando todos os ninhos secundários que estiverem dentro das referidas paredes ou pisos  dessas unidades.        ',
        )
        this.document.addPage()
        break
      case 7:
        this.addHeader()
        this.document.text(
          '5)  Este proceso será executado dentro de cada unidade em tempo de mais ou menos 20 minutos, pois inicialmente iremos passar um aparelho sonda em todas as paredes e piso das unidades para podermos efetuar uma leitura do que está dentro dessas paredes com relação aos ninhos secundários que são invisíveis aos olhos humanos e no posterior implantar os adesivos ou caixinhas iscas nesses pontos estruturais internos.        ',
        )
        this.document.text(
          '6)  esses aesivos em forma de iscas não possuem quaisquer cheiro ou odores e não possuem nenhum tipo de toxidade (toxidade zero), não prejudicando em hipotese alguma pessos adultas ou crianças que possuam algum mal alérgico, é um processo natural à base de um princípio ativo de nome (exaflomurum) extraído do próprio suor dos Cupins.        ',
        )
        this.document.text(
          '7)  Esse processo de controle é o que o mundo hoje está absorvendo em nível de tratamentos internos contra a espécie de Cupim estrutural, porque não causa transtornos, não causa sujeira e as pessos não precisam mais desocuparem todos os seus armarios dos quartos e armários da cozinha dando a impressão de uma mudança.        ',
        )
        this.document.text(
          '8)  Essas iscas ao serem implantadas na estrutura interna das unidades e casas do condominio entram em movimento imediatamente e caso exista ninhos secundários naquele perímetro (Cupins dentro das paredes) serão atraídos para atacarem as mesmas onde irão levar para alimentar todas as castas que estiverem dentro das paredes e pisos  daquele perímetro  causando sem saberem o efeito morte por completo nesses ninhos secundários.        ',
        )
        this.document.text(
          '9)  Após esse tratamento interno iremos imunizar todo o sistema de elericidade do condominio, externo e denro das unidades com produtos sem cheiro e sem quaisquer toxidades.        ',
        )
        this.document.text(
          '10)  Por último iremos implantar no topo dos prédios iscas protetoras nas ultimas lejes para podermos proteger as caixas de ágiua de concreto que estão ali.        ',
        )
        this.document.addPage()
        break
      case 8:
        this.addHeader()
        this.document.text(
          '        Estes trabalhos irão demorar entre 45 à 60 dias com duias equipes trabalhando em horário comercial.        ',
        )
        this.document.text('Da garantia –        ')
        this.document.text(
          'A garantia será de 48 meses com monitoramentos semestrais no primeiro ano  e anuais nos demais.  Esses monitaramentos não terão custo para o codominio e havendo a necessidade de algumas correções ao longo dos anos essas serão realizadas também sem quaisquer custos para o condominio.        ',
        )
        this.document.text('Proposta Orçamentária         ')
        this.document.text('Custo para tratamento nas areas comuns -            ')
        this.document.text('As condições de pagamento serão as seguintes:        ')
        this.addFooter('footer2')
        break
      case 9:
        this.addHeader()
        this.document.font('Times-Roman')
        this.document.fontSize(14)
        this.document.text('PRODUTOS QUE SERÃO UTILIZADOS PARA O CONTROLE GLOBALIZADO')
        //uma imagem
        this.document.text(
          'Produto sem quaisquer toxidade ou odor, produto de ordem botânica, adesivos estes que serão utilizados dentro das unidades e quadros de energia.',
        )
        this.document.addPage()
        break
      case 10:
        this.addHeader()
        this.document.text(
          'Sem mais para o momento e à disposiçao 24 horas por dia para quaisquer esclarecimentos que se fizerem necessário nos fones acima.',
        )
        this.document.text('Departamento de orçamento')
        this.document.text('_____________________')
        this.document.text('Fernando de Carvalho')
        break
      case 11:
        this.addHeader()
        this.document.text('CLIENTES PARCEIROS - STOP PRAG:')
        this.document.text('• Secretaria da Fazenda do Estado de São Paulo        ')
        this.document.text('• Universidade do Estado de Mato Grosso do Sul        ')
        this.document.text('• Cond. Edif. Marina e Sonia        ')
        this.document.text('• Met Life do Brasil        ')
        this.document.text('• Petrobrás (Divisão Cubatão)        ')
        this.document.text('• Estádio do Morumbi        ')
        this.document.text('• Estádio da Portuguesa (Canindé)        ')
        this.document.text('• Igreja da Consolação        ')
        this.document.text('• Igreja Central da Barra Funda        ')
        this.document.text('• Centro de Medicamentos ACHÉ          ')
        this.document.text('• Policia Militar do Estado de São Paulo          ')
        this.document.text('• Aeroporto Internacional de Guarulhos          ')
        this.document.text('• Residência do Sr. Abravanel (Silvio Santos)          ')
        this.document.text('• CPTM          ')
        this.document.text('• Sabesp          ')
        this.document.text('• Pinacoteca de São Paulo          ')
        this.document.text('• Rede Carrefour (Supermercados)          ')
        this.document.text('• Makro (Rede Supermercados)          ')
        this.document.text('• Rede Bandeirantes de Televisão          ')
        this.document.text('• SBT – Cidade Cenográfica          ')
        this.addFooter('footer2')
        break
      default:
        break
    }
  }

  public async templateChooser(template: string, data: IRequestBody) {
    let urlnew: string
    const fileName = `generated_pdf_${Date.now()}.pdf`
    const params = {
      Bucket: 'stop-prag-pdf',
      Key: fileName,
      contentType: 'application/pdf',
    }
    switch (template) {
      case '1':
        for (let i = 0; i < 10; i++) {
          this.addPage(i, data)
          console.log(i)
        }
        this.document.pipe(this.source)
        this.document.end()

        // await uploadToS3(this.document, fileName)
        //   .then(async () => {
        //     fs.unlinkSync(this.outputPath)
        //     console.log('then no template chooser')
        //     // urlnew = await generateExpirableUrl('sa-east-1', params.Bucket, params.Key)
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })
        console.log('aqui')
        return 'locally saved'
      case '2':
    }
  }

  private addHeader() {
    const headerImage =
      '/Users/brenocarlopiccolipinto/yuda/software_development/stopPrag/stopPrag/api/src/domain/images/cabecalho.jpg'
    this.document.moveUp(2)
    this.document.image(headerImage, {
      fit: [450, 100],
      align: 'center',
      valign: 'bottom',
    } as PDFKit.Mixins.ImageOption)
    this.document.moveDown(10)
    this.document.fontSize(12)
  }

  private addFooter(name: string) {
    const headerImage = `/Users/brenocarlopiccolipinto/yuda/software_development/stopPrag/stopPrag/api/src/domain/images/${name}.jpg`

    this.document.moveDown(2)
    this.document.image(headerImage, {
      fit: [450, 100],
      align: 'center',
      valign: 'bottom',
    } as PDFKit.Mixins.ImageOption)
  }

  private image(name: string, x: number, y: number) {
    const headerImage = `/Users/brenocarlopiccolipinto/yuda/software_development/stopPrag/stopPrag/api/src/domain/images/${name}.jpg`
    this.document.image(headerImage, {
      fit: [x, y],
      align: 'center',
    } as PDFKit.Mixins.ImageOption)
  }
}

export default PDFGenerator
