import { api } from '../api';

interface PostDocsGenerateRequest {
  nomeCliente: string;
  enderecoCliente: string;
  bairroCliente: string;
  cidadeCliente: string;
  municipioCliente: string;
  estadoCliente: string;
  idProposta: string;
  metodo: string;
  comportamento: string;
  visualizacaoHumana: string;
  custo: string;
  condicoesPagamento: string;
  cargoCliente: string;
  // nomeUsuario: string;
  // dataCriacaoDocumento: string;
  // ultimaDataAlteracaoDocumento: string;
}

interface PostDocsGenerateResponse {}

export const postDocsGenerate = async (
  dataRequest: PostDocsGenerateRequest
) => {
  const data = await api.post<PostDocsGenerateResponse>(
    'docs/generate',
    dataRequest
  );

  return data;
};
