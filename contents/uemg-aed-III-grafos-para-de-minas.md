## Análise da gestão de redes sociais aplicada à Prefeitura Municipal de Pará de Minas

Engenharia da Computação - Algoritmos e Estrutura de Dados III\
UEMG - Universidade do Estado de Minas Gerais

#### Resumo

Este trabalho tem por objetivo apresentar uma análise sobre a gestão de redes sociais da Prefeitura Municipal de Pará de Minas embasando-se de duas diferentes gestões e contextualizando-a como poderosa ferramenta para obtenção de informações e conhecimentos a partir de dados isolados. A ênfase principal deste documento é demonstrar como a Análise de Redes Sociais pode trazer valiosas informações. O foco prático baseia-se na mídia social Facebook, por meio de dados gerados pelo aplicativo Netvizz, analisados através de grafos pelo software Gephi.

Palavras-chave: Análise de Redes Sociais, Grafos, Dados, Informação, Conhecimento, Facebook, Pará de Minas.

#### 1 – Introdução

Estudiosos sobre redes, sobretudo as sociais, estão a cada dia buscando desenvolver novas soluções de visualização, métodos e teorias para dar um sentido a essa grande massa de dados disposta hoje nas redes sociais online. 

Segundo A. Gabardo (2015), embora este seja um campo relativamente novo, o estudo das redes sociais tem suas origens no século XVIII, quando o matemático Leonhard Euler solucionou o problema das setes pontes de Königsberg. Em 1736 Euler criou uma representação matemática para provar a teoria de que não era possível atravessar as sete pontes existentes na cidade de Königsberg, Prússia, sem repetir a passagem por qualquer uma das pontes. Esta representação matemática mostrou-se eficaz para resolver diversos problemas, muitos destes ligados a resolução de rotas, cálculo de caminhos mínimos, dentre outras coisas. Grafos também são eficientes para representar relações entre pessoas. Ou seja, modelar relacionamentos.

Os novos desafios impostos pela grande massa de dados online apresentam diversas oportunidades de negócios, com isso engenheiros e cientistas da computação estão interessados na criação de cenários para descobrirem como se interagem os usuários na rede e assim, fazer novas descobertas sobre a interação destes.

#### 1.1 – Princípios e contexto da análise

O conjunto 'dados, informações e conhecimento' é um importante fator de competitividade em diferentes tipos de seguimentos. Prospectar, filtrar e gerenciar esse conjunto é essencial para a consolidação do processo de análise de grafos.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img1.png)

Dados, informação e conhecimento são matérias primas para o processo de compreensão dos sistemas em geral.

#### 1.2 – Facebook

O Facebook é uma rede social lançada em quatro de fevereiro de 2004, operado e de propriedade privada da Facebook Inc.. Em quatro de outubro de 2012, o Facebook atingiu a marca de um bilhão de usuários ativos, sendo por isso a maior rede social em todo o mundo e, consequentemente, uma das melhores fontes de dados e informações.

#### 1.3 – Netvizz

A mídia social Facebook possui uma central de aplicativos disponível aos seus usuários (que vai desde jogos até utilitários) e conta também com disponibilidade de recursos para que desenvolvedores de software criem seus próprios aplicativos para a plataforma do Facebook. 

Desta forma, existe um aplicativo chamado Netvizz que é uma ferramenta que extrai dados de diferentes seções da plataforma - em determinados grupos e páginas - para fins de pesquisa.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img2.png)

#### 1.4 – Gephi

O software Gephi é uma plataforma interativa de visualização e exploração de todos os tipos de redes e sistemas complexos, grafos dinâmicos e hierárquicos. Ele permite que o usuário possa interagir com a representação, manipular as estruturas, formas e cores para revelar propriedades, por vezes ocultas, nos dados brutos. O objetivo principal deste software é ajudar os analistas de dados em busca de hipóteses e descobrir padrões intuitivamente, isolando singularidades estruturais ou falhas nos padrões da fonte de dados.

#### 2 – Análise do Facebook da Prefeitura Municipal de Pará de Minas

Pará de Minas é um município brasileiro do estado de Minas Gerais, Região Sudeste do país. Pertence à Mesorregião Metropolitana, à Microrregião de Pará de Minas e ao colar metropolitano de Belo Horizonte.

Este trabalho apresentará uma analise do Facebook da Prefeitura Municipal de Pará de Minas a fim de encontrar diferenças na gestão dessas mídias, como o envolvimento de usuários na pagina (curtidas, comentários, compartilhamentos e o que chamaremos de engajamento – somas dos demais envolvimentos). A base será do primeiro semestre dos anos de 2016 e 2017, período em que houve a troca de prefeito e demais representantes.

#### 2.1 – Dados obtidos

Utilizando-se do aplicativo Netvizz para receber dados de publicações do primeiro semestre de 2016 e do primeiro semestre de 2017, obtive os seguintes dados:

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img3.png)

Na analise de grafos para páginas no Facebook, o número de vértices representa a soma da quantidade de publicações e de usuários que se envolveram de alguma forma na página, e o número de arestas representa o número total de interação de todos os usuários. 

Diante desses elementos podemos agora gerar o primeiro grafo no aplicativo Gephi, que não sofrerá nenhum tipo de arranjo por um dos vários algoritmos do software e nem opções de exibição.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img4.png)

Apesar de já notar-se uma diferença vamos aprimorar essa visualização. Agora, com os dados no Gephi, estamos aptos a gerenciar esses dados brutos para algo realmente visível e analisável. 

#### 2.2 – Grau de entrada (in-degree)

O grau de entrada de um vértice é o número de arestas que chegam neste vértice. Em um grafo social, o grau de entrada representa o ranking de engajamento de um vértice (neste caso uma publicação), ou seja, informa a quantidade de relacionamentos que cada publicação teve.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img5.png)

Analisando, diante dos conceitos, percebemos que em 2017 as publicações tiveram um número maior de engajamento. Os círculos maiores e com verde mais forte indica os vértices com maior grau de entrada. 

Como exemplo dos maiores, temos:

*	em 2016 a notícia “O encontro entre crianças e idosos gera uma troca de experiências e de vivência tão intensa que o resultado só pode ser o bem-estar e alegria. Os socioeducandos do PROMAF do Santos Dumont visitaram os idosos da Cidade Ozanan  em uma interação entre gerações que desperta o melhor: o espírito jovem que existe em cada um de nós e a consciência a respeito do nosso próprio futuro.” com engajamento de aproximadamente 193 (175 curtidas, 13 compartilhamentos e 5 comentários).
*	em 2017 a notícia “UPA 24h agora é realidade em Pará de Minas.  Unidade de Pronto Atendimento inaugurada na tarde desta quinta-feira começou a funcionar já na noite deste dia 29 de junho.” com engajamento de aproximadamente 633 (458 curtidas, 104 compartilhamentos e 71 comentários).

Fica claro essa diferença no engajamento das publicações, 2017 obteve um maior número de envolvimento em suas publicações. O número de publicações também foi maior, sendo 350 contra 247.

#### 2.3 – Grau de Saída (out-degree) 

O grau de saída de um vértice é o número de arestas que saem neste vértice. Em um grafo social, o grau de saída representa o ranking de engajamento de um vértice (neste caso um usuário), ou seja, informa a quantidade de relacionamentos que cada usuário fez na página.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img6.png)

Analisando, diante dos conceitos, percebemos que em 2016 temos usuários com um número maior de engajamento. Os círculos maiores e com azul mais forte indica os vértices com maior grau de saída. 

Como exemplo dos maiores, temos:

*	em 2016 um usuário com engajamento de aproximadamente 227 (227 curtidas).
*	em 2017 um usuário com engajamento de aproximadamente 191 (188 curtidas e 3 comentários).

Concluindo o grau de saída, observamos que em 2016 o número de usuários que mais se envolveram na página foi maior. Por outro lado, o número total de usuários que se envolveram de alguma forma na página foi menor, sendo, aproximadamente, 1508 de 2016 contra 3379 de 2017.

#### 2.4 – Modularidade

A modularidade mede o agrupamento do vértice em um grafo (neste caso usuários), e os divide em grupos, de acordo com suas conexões. Quanto maior a densidade entre as conexões em um determinado grupo de vértices, maiores as chances de eles constituírem um módulo na rede. Em um grafo social, a modularidade indica a intensidade de envolvimento entre os próprios usuários, classificando-os por módulos de acordo com suas conexões.

![alt tag](https://raw.githubusercontent.com/ronysfreitas/UEMG-AED-III-GRAFOS/master/Imagens/img7.png)

Observando os grafos percebemos em 2017 uma maior intensidade entre os usuários, além dos próprios módulos mais unidos. Já em 2016 tivemos módulos mais segmentados. Essa intensidade pode explicar o maior grau de entrada que 2017 obteve.

#### 3 – Conclusão

Neste trabalho algumas das principais ações do Facebook são utilizadas como exemplo para uma apresentação introdutória de conceitos e definições essenciais para se começar o estudo de grafos.

Através do estudo realizado, pode-se concluir que no primeiro semestre de 2017 a gestão do Facebook da Prefeitura Municipal de Pará de Minas obteve maior sucesso que no primeiro semestre de 2016 devido às publicações com maiores engajamentos e consequentemente um número maior de interações de usuários nas publicações e entre eles.

É importante ressaltar que a análise descrita neste artigo é fruto de um trabalho acadêmico, com o objetivo de apresentar uma análise de diferenças nas gestões de redes sociais. Não tem a pretensão de realizar uma avaliação aprofundada dos aspectos e diferenças de cada gestão.

#### Referências

Orgnet. Social Network Analysis: An Introduction. Disponível em: <http://www.orgnet.com/sna.html>. Acesso em 04 de Julho de 2017.
Github. Wiki Gephi. Disponivel em <https://github.com/gephi/gephi/wiki>. Acesso em 07 de julho de 2017.

Facebook. Sobre o Facebook. Disponível em: <https://www.facebook.com>. Acesso em 04 de Julho de 2017.

Wikipédia. Wikipédia Pará de Minas. Disponível em <https://pt.wikipedia.org/wiki/Par%C3%A1_de_Minas> . Acesso em 07 de julho de 2017.

Netvizz. Netvizz v1.44. Disponível em: <https://apps.facebook.com/netvizz>. Acesso em 03 de julho de 2017.

USANDO O FACEBOOK E APRENDENDO SOBRE GRAFOS. Disponível em: <https://eventos.unipampa.edu.br/eremat/files/2014/12/PO_monego_02508158003.pdf>. Acesso em 10 de Julho de 2017.

Pedro A. Lemes da Silva. Análise de Redes Sociais aplicada à Engenharia Social. Disponível em: <http://rabci.org/rabci/sites/default/files/Artigo_ARS_e_ES.pdf>. Acesso em 06 de Julho de 2017.