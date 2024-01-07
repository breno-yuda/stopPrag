import fs, { WriteStream } from 'fs'
import PDFDocument from 'pdfkit'
import IRequestBody from '../../domain/interfaces/common/request'
class PDFGenerator {
  private readonly document: PDFKit.PDFDocument
  private readonly source: WriteStream
  private currentPage: number = 1

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Temporary any
  constructor(private readonly data: IRequestBody, outputPath: string) {
    this.source = fs.createWriteStream(outputPath)
    this.document = new PDFDocument()
  }

  public addPage(page: number, data: IRequestBody) {
    switch (page) {
      case 0:
        this.addHeader()
        this.document.text(`São Paulo, ${data.dataCriacaoDocumento}`, { align: 'right' })
        this.document.moveDown(1)
        this.image('pagina1', 450, 450)
        this.addFooter('footer1')
        this.document.addPage()
        break
      case 1:
        this.addHeader()
        this.image('pagina2', 500, 500)
        this.document.addPage()
        break
      case 2:
        this.addHeader()
        this.document.text(`Ao Sr. (a) ${data.nomeCliente}`, { align: 'left' })
        this.document.text(`End: ${data.enderecoCliente}`, { align: 'left' })
        this.document.text(`Bairro: (a), ${data.bairroCliente}`, { align: 'left' })
        this.document.text(`Cidade ${data.cidadeCliente}`, { align: 'left' })
        this.document.moveDown(2)
        this.document.text(`Proposta - Número ${data.idProposta}`)
        this.document.text(`Vistoria - Desculpinização - Xilófagos - Deterioração de madeiras`)
        this.document.text(`Deterioração de estruturas pelo solo`, { align: 'left' })
        this.document.text(`Comportamento de praga de maneira - ${data.comportamento}`)
        this.document.text(`Visualização humana -  ${data.visualizacaoHumana}`, { align: 'left' })
        this.addFooter('footer1')
        this.document.addPage()
        break
      case 3:
        this.addHeader()
        this.image('pagina4', 480, 500)
        this.document.addPage()
        break
      case 4:
        this.addHeader()
        this.image('pagina5', 450, 500)
        this.document.addPage()
        break
      case 5:
        this.addHeader()
        this.document.moveUp(2)
        this.image('pagina6', 480, 500)
        this.document.addPage()
        break
      case 6:
        this.addHeader()
        this.document.moveUp(2)
        this.image('pagina7', 450, 450)
        this.image('pagina8', 450, 450)

        this.document.addPage()
        break
      case 7:
        this.addHeader()
        this.document.text(`Custo para o trabalho:`)
        this.document.text(`R$ ${data.custo}`)
        this.document.text(`Condições para o pagamento`)
        this.document.text(`${data.condicoesPagamento}`)
        this.document.text(
          `Sem mais para o momento e a disposição para quaisquer esclarecimentos que se fizerem necessário nos fones acima neste.`,
        )
        this.document.text(`${data.nomeCliente}`)
        this.document.text(`${data.cargoCliente}`)
        this.addFooter('footer2')

        this.document.addPage()

        break
      case 8:
        this.addHeader()
        this.image('pagina9', 500, 500)
        this.addFooter('footer3')
        break
    }
  }

  public template1(data: IRequestBody) {
    for (let i = 0; i < 10; i++) {
      this.addPage(i, data)
      console.log(i)
    }
    this.document.pipe(this.source)
    this.document.end()
  }

  private addHeader() {
    // Assuming 'headerImage' is a path to your header image
    const headerImage =
      '/Users/brenocarlopiccolipinto/yuda/software_development/stopPrag/stopPrag/api/src/domain/images/cabecalho.jpg'
    this.document.moveUp(2)
    // Add an image to the header of all pages
    this.document.image(headerImage, {
      fit: [450, 100],
      align: 'center',
      valign: 'bottom',
    } as PDFKit.Mixins.ImageOption)
    this.document.moveDown(10)
    this.document.fontSize(12)
  }

  private addFooter(name: string) {
    // Assuming 'headerImage' is a path to your header image
    const headerImage = `/Users/brenocarlopiccolipinto/yuda/software_development/stopPrag/stopPrag/api/src/domain/images/${name}.jpg`

    // Add an image to the header of all pages
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
      // valign: 'center',
    } as PDFKit.Mixins.ImageOption)
  }
}

export default PDFGenerator
