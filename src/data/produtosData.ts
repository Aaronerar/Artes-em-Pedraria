const produtos = [
  {
    id: 1,
    nome: 'Porta guardanapo retangular',
    preco: 95.0,
    imagem: '/imagens/porta-guardanapo-retangular.jpeg',
    descricao: 'Porta guardanapo formato retangular feito à mão.'
  },
  {
    id: 2,
    nome: 'Porta guardanapo quadrado',
    preco: 95.0,
    imagem: '/imagens/porta-guardanapo-quadrado.jpeg',
    descricao: 'Porta guardanapo quadrado artesanal.'
  },
  {
    id: 3,
    nome: 'Porta guardanapo triangulo',
    preco: 70.0,
    imagem: '/imagens/porta-guardanapo-triangulo.jpeg',
    descricao: 'Porta guardanapo triangular estiloso.'
  },
  {
    id: 4,
    nome: 'Porta papel higiênico tecido 2',
    preco: 50.0,
    imagem: '/imagens/porta-papel-higienico.jpeg',
    descricao: 'Porta papel higiênico de tecido para 2 rolos.'
  },
  {
    id: 5,
    nome: 'Porta papel higiênico de 1 rolo',
    preco: 80.0,
    imagem: '/imagens/porta-papel-higienico-com-um-rolo.jpeg',
    descricao: 'Porta papel higiênico para 1 rolo.'
  },
  {
    id: 6,
    nome: 'Porta papel higiênico 2 rolos',
    preco: 160.0,
    imagem: '/imagens/porta-papel-higienico-2.jpeg',
    descricao: 'Porta papel higiênico para 2 rolos.'
  },
  {
    id: 7,
    nome: 'Bolsa yin yang',
    preco: 190.0,
    imagem: '/imagens/bolsa-yin-yang.jpeg',
    descricao: 'Bolsa moderna com estampa Yin Yang.'
  },
  {
    id: 8,
    nome: 'Bolsa colorida',
    preco: 160.0,
    imagem: '/imagens/bolsa-colorida.jpeg',
    descricao: 'Bolsa artesanal super colorida.'
  },
  {
    id: 9,
    nome: 'Bolsa a tira colo',
    preco: 150.0,
    imagem: '/imagens/bolsa-tira-colo.jpeg',
    descricao: 'Bolsa prática para usar no dia a dia.'
  },
  {
    id: 10,
    nome: 'Bolsa roxa',
    preco: 150.0,
    imagem: '/imagens/bolsa-roxa.jpeg',
    descricao: 'Bolsa artesanal na cor roxa, elegante e resistente.'
  },
  {
    id: 11,
    nome: 'Porta Celular',
    preco: 60.0,
    imagem: '/imagens/bolsa-porta-celular.jpeg',
    descricao: 'Porta celular compacto e leve.'
  },
  {
    id: 12,
    nome: 'Produto Exemplo 12',
    preco: 100.0,
    imagem: '/imagens/porta-papel-higienico.jpeg',
    descricao: 'Descrição do produto 12.'
  },
  {
    id: 13,
    nome: 'Boneca media',
    preco: 50.0,
    imagem: '/imagens/boneca-japonesa-media.jpeg',
    descricao: 'Boneca japonesa tamanho médio.'
  },
  {
    id: 14,
    nome: 'Boneca pequena',
    preco: 30.0,
    imagem: '/imagens/boneca-japonesa.jpeg',
    descricao: 'Boneca japonesa pequena e delicada.'
  },
  {
    id: 15,
    nome: 'Porta treco sem tampa',
    preco: 115.0,
    imagem: '/imagens/porta-treco.jpeg',
    descricao: 'Porta treco versátil e espaçoso.'
  },
  {
    id: 16,
    nome: 'Produto Exemplo 16',
    preco: 120.0,
    imagem: '/imagens/cestinha.jpeg',
    descricao: 'Descrição do produto 16.'
  },
  {
    id: 17,
    nome: 'Juzu grande/homem',
    preco: 70.0,
    imagem: '/imagens/juzu-homem.jpeg',
    descricao: 'Juzu grande tradicional.'
  },
  {
    id: 18,
    nome: 'Juzu pequeno/mulher',
    preco: 50.0,
    imagem: '/imagens/juzu-mulher.jpeg',
    descricao: 'Juzu pequeno, delicado para mulheres.'
  },
  {
    id: 19,
    nome: 'Colar mandala 7 cores',
    preco: 50.0,
    imagem: '/imagens/mandala-de-7-cores.jpeg',
    descricao: 'Colar com mandala das 7 cores.'
  },
  {
    id: 20,
    nome: 'Porta joias',
    preco: 115.0,
    imagem: '/imagens/porta-joia.jpeg',
    descricao: 'Porta joia artesanal para guardar acessórios.'
  },
  {
    id: 21,
    nome: 'Supla de pratos',
    preco: 110.0,
    imagem: '/imagens/jogo-americano-supla.jpeg',
    descricao: 'Supla de pratos com design artesanal.'
  },
  {
    id: 22,
    nome: 'Abajour infantil',
    preco: 120.0,
    imagem: '/imagens/abajour-infantil.jpeg',
    descricao: 'Abajour infantil decorativo e funcional.'
  },
  {
    id: 23,
    nome: 'Porta Copos de tamanho 35 cm',
    preco: 50.0,
    imagem: '/imagens/porta-copos.jpeg',
    descricao: 'Porta copos.'
  },
  {
    id: 24,
    nome: 'Cestas Coloridas feitas à mão',
    preco: 60.0,
    imagem: '/imagens/cestinha.jpeg',
    descricao: 'Cestinhas coloridas feitas à mão.'
  },
  {
    id: 25,
    nome: 'Porta talher com 4 quadrados',
    preco: 160.0,
    imagem: '/imagens/porta-talher.jpeg',
    descricao: 'Porta talheres elegante e prático.'
  },
  {
    id: 26,
    nome: 'Produto Exemplo 26',
    preco: 70.0,
    imagem: '/imagens/porta-papel-higienico.jpeg',
    descricao: 'Descrição do produto 26.'
  },
  {
    id: 27,
    nome: 'Produto Exemplo 27',
    preco: 75.0,
    imagem: '/imagens/porta-guardanapo-quadrado.jpeg',
    descricao: 'Descrição do produto 27.'
  },
  {
    id: 28,
    nome: 'Produto Exemplo 28',
    preco: 80.0,
    imagem: '/imagens/porta-guardanapo-retangular.jpeg',
    descricao: 'Descrição do produto 28.'
  },
  {
    id: 29,
    nome: 'Produto Exemplo 29',
    preco: 85.0,
    imagem: '/imagens/porta-guardanapo-triangulo.jpeg',
    descricao: 'Descrição do produto 29.'
  },
  {
    id: 30,
    nome: 'Produto Exemplo 30',
    preco: 90.0,
    imagem: '/imagens/porta-joia.jpeg',
    descricao: 'Descrição do produto 30.'
  },
  {
    id: 31,
    nome: 'Produto Exemplo 31',
    preco: 95.0,
    imagem: '/imagens/porta-talher.jpeg',
    descricao: 'Descrição do produto 31.'
  },
  {
    id: 33,
    nome: 'Produto Exemplo 33',
    preco: 105.0,
    imagem: '/imagens/bolsa-colorida.jpeg',
    descricao: 'Descrição do produto 33.'
  },
  {
    id: 34,
    nome: 'Produto Exemplo 34',
    preco: 110.0,
    imagem: '/imagens/bolsa-roxa.jpeg',
    descricao: 'Descrição do produto 34.'
  },
  {
    id: 35,
    nome: 'Toalhas 35 cm',
    preco: 50.0,
    imagem: '/imagens/toalha-35-cm.jpeg',
    descricao: 'Toalhas de 35 cm, ótimo acabamento.'
  },
  {
    id: 36,
    nome: 'Produto Exemplo 36',
    preco: 60.0,
    imagem: '/imagens/toalha-retangular.jpeg',
    descricao: 'Descrição do produto 36.'
  },
  {
    id: 37,
    nome: 'Produto Exemplo 37',
    preco: 65.0,
    imagem: '/imagens/porta-copos.jpeg',
    descricao: 'Descrição do produto 37.'
  },
  {
    id: 38,
    nome: 'Toalha retangular',
    preco: 75.0,
    imagem: '/imagens/toalha-retangular.jpeg',
    descricao: 'Toalha retangular de alta qualidade.'
  },
  {
    id: 39,
    nome: 'Copos Corinthians e Palmeiras',
    preco: 75.0,
    imagem: '/imagens/corinthians-e-palmeiras.jpeg',
    descricao: 'Copos do Corinthians e Palmeiras.'
  }
];

export default produtos;
