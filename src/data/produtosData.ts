import abajour_infantil from '../assets/imagens/abajour-infantil.jpeg';
import bolsa_colorida from '../assets/imagens/bolsa-colorida.jpeg';
import bolsa_porta_celular from '../assets/imagens/bolsa-porta-celular.jpeg';
import bolsa_roxa from '../assets/imagens/bolsa-roxa.jpeg';
import bolsa_tira_colo from '../assets/imagens/bolsa-tira-colo.jpeg';
import bolsa_yin_yang from '../assets/imagens/bolsa-yin-yang.jpeg';
import boneca_japonesa_media from '../assets/imagens/boneca-japonesa-media.jpeg';
import boneca_japonesa from '../assets/imagens/boneca-japonesa.jpeg';
import cestinha from '../assets/imagens/cestinha.jpeg';
import jogo_americano_supla from '../assets/imagens/jogo-americano-supla.jpeg';
import juzu_homem from '../assets/imagens/juzu-homem.jpeg';
import juzu_mulher from '../assets/imagens/juzu-mulher.jpeg';
import mandala_de_7_cores from '../assets/imagens/mandala-de-7-cores.jpeg';
import porta_copos from '../assets/imagens/porta-copos.jpeg';
import porta_guardanapo_quadrado from '../assets/imagens/porta-guardanapo-quadrado.jpeg';
import porta_guardanapo_retangular from '../assets/imagens/porta-guardanapo-retangular.jpeg';
import porta_guardanapo_triangulo from '../assets/imagens/porta-guardanapo-triangulo.jpeg';
import porta_joia from '../assets/imagens/porta-joia.jpeg';
import porta_papel_higienico_2 from '../assets/imagens/porta-papel-higienico-2.jpeg';
import porta_papel_higienico_com_um_rolo from '../assets/imagens/porta-papel-higienico-com-um-rolo.jpeg';
import porta_papel_higienico from '../assets/imagens/porta-papel-higienico.jpeg';
import porta_talher from '../assets/imagens/porta-talher.jpeg';
import porta_treco_sem_tampa from '../assets/imagens/porta-treco.jpeg';
import toalha_35_cm from '../assets/imagens/toalha-35-cm.jpeg';
import toalha_retangular from '../assets/imagens/toalha-retangular.jpeg';
import copos_times from '../assets/imagens/corinthians-e-palmeiras.jpeg'

const produtos = [
  { id: 1, nome: 'Porta guardanapo retangular', preco: 95.0, imagem: porta_guardanapo_retangular, descricao: 'Porta guardanapo formato retangular feito à mão.' },
  { id: 2, nome: 'Porta guardanapo quadrado', preco: 95.0, imagem: porta_guardanapo_quadrado, descricao: 'Porta guardanapo quadrado artesanal.' },
  { id: 3, nome: 'Porta guardanapo triangulo', preco: 70.0, imagem: porta_guardanapo_triangulo, descricao: 'Porta guardanapo triangular estiloso.' },
  { id: 4, nome: 'Porta papel higiênico tecido 2', preco: 50.0, imagem: porta_papel_higienico, descricao: 'Porta papel higiênico de tecido para 2 rolos.' },
  { id: 5, nome: 'Porta papel higiênico de 1 rolo', preco: 80.0, imagem: porta_papel_higienico_com_um_rolo, descricao: 'Porta papel higiênico para 1 rolo.' },
  { id: 6, nome: 'Porta papel higiênico 2 rolos', preco: 160.0, imagem: porta_papel_higienico_2, descricao: 'Porta papel higiênico para 2 rolos.' },
  { id: 7, nome: 'Bolsas yin yang', preco: 190.0, imagem: bolsa_yin_yang, descricao: 'Bolsa moderna com estampa Yin Yang.' },
  { id: 8, nome: 'Bolsa colorida', preco: 160.0, imagem: bolsa_colorida, descricao: 'Bolsa artesanal super colorida.' },
  { id: 9, nome: 'Bolsa a tira colo', preco: 150.0, imagem: bolsa_tira_colo, descricao: 'Bolsa prática para usar no dia a dia.' },
  { id: 10, nome: 'Bolsa roxa', preco: 150.0, imagem: bolsa_roxa, descricao: 'Bolsa artesanal na cor roxa, elegante e resistente.' },
  { id: 11, nome: 'Porta Celular', preco: 60.0, imagem: bolsa_porta_celular, descricao: 'Porta celular compacto e leve.' },
  
  // IDs ausentes preenchidos com nomes e descrições genéricas - troque depois se quiser
  { id: 12, nome: 'Produto Exemplo 12', preco: 100.0, imagem: porta_papel_higienico, descricao: 'Descrição do produto 12.' },
  { id: 13, nome: 'Boneca media', preco: 50.0, imagem: boneca_japonesa_media, descricao: 'Boneca japonesa tamanho médio.' },
  { id: 14, nome: 'Boneca pequena', preco: 30.0, imagem: boneca_japonesa, descricao: 'Boneca japonesa pequena e delicada.' },
  { id: 15, nome: 'Porta treco sem tampa', preco: 115.0, imagem: porta_treco_sem_tampa, descricao: 'Porta treco versátil e espaçoso.' },
  { id: 16, nome: 'Produto Exemplo 16', preco: 120.0, imagem: cestinha, descricao: 'Descrição do produto 16.' },
  { id: 17, nome: 'Juzu grande/homem', preco: 70.0, imagem: juzu_homem, descricao: 'Juzu grande tradicional.' },
  { id: 18, nome: 'Juzu pequeno/mulher', preco: 50.0, imagem: juzu_mulher, descricao: 'Juzu pequeno, delicado para mulheres.' },
  { id: 19, nome: 'Colar mandala 7 cores', preco: 50.0, imagem: mandala_de_7_cores, descricao: 'Colar com mandala das 7 cores.' },
  { id: 20, nome: 'Porta joias', preco: 115.0, imagem: porta_joia, descricao: 'Porta joia artesanal para guardar acessórios.' },
  { id: 21, nome: 'Supla de pratos', preco: 110.0, imagem: jogo_americano_supla, descricao: 'Supla de pratos com design artesanal.' },
  { id: 22, nome: 'Abajour infantil', preco: 120.0, imagem: abajour_infantil, descricao: 'Abajour infantil decorativo e funcional.' },
  { id: 23, nome: 'Porta Copos de tamanho 35 cm', preco: 50.0, imagem: porta_copos, descricao: 'Porta copos.' },
  { id: 24, nome: 'Cestas Coloridas feitas à mão', preco: 60.0, imagem: cestinha, descricao: 'Cestinhas coloridas feitas à mão.' },
  { id: 25, nome: 'Porta talher com 4 quadrados', preco: 160.0, imagem: porta_talher, descricao: 'Porta talheres elegante e prático.' },
  
  { id: 26, nome: 'Produto Exemplo 26', preco: 70.0, imagem: porta_papel_higienico, descricao: 'Descrição do produto 26.' },
  { id: 27, nome: 'Produto Exemplo 27', preco: 75.0, imagem: porta_guardanapo_quadrado, descricao: 'Descrição do produto 27.' },
  { id: 28, nome: 'Produto Exemplo 28', preco: 80.0, imagem: porta_guardanapo_retangular, descricao: 'Descrição do produto 28.' },
  { id: 29, nome: 'Produto Exemplo 29', preco: 85.0, imagem: porta_guardanapo_triangulo, descricao: 'Descrição do produto 29.' },
  { id: 30, nome: 'Produto Exemplo 30', preco: 90.0, imagem: porta_joia, descricao: 'Descrição do produto 30.' },
  { id: 31, nome: 'Produto Exemplo 31', preco: 95.0, imagem: porta_talher, descricao: 'Descrição do produto 31.' },
  // { id: 32, nome: 'Produto Exemplo 32', preco: 100.0, imagem: cesta, descricao: 'Descrição do produto 32.' }, // Você pode trocar "cesta" pela imagem certa
  { id: 33, nome: 'Produto Exemplo 33', preco: 105.0, imagem: bolsa_colorida, descricao: 'Descrição do produto 33.' },
  { id: 34, nome: 'Produto Exemplo 34', preco: 110.0, imagem: bolsa_roxa, descricao: 'Descrição do produto 34.' },
  
  { id: 35, nome: 'Toalhas 35 cm', preco: 50.0, imagem: toalha_35_cm, descricao: 'Toalhas de 35 cm, ótimo acabamento.' },
  { id: 36, nome: 'Produto Exemplo 36', preco: 60.0, imagem: toalha_retangular, descricao: 'Descrição do produto 36.' },
  { id: 37, nome: 'Produto Exemplo 37', preco: 65.0, imagem: porta_copos, descricao: 'Descrição do produto 37.' },
  { id: 38, nome: 'Toalha retangular', preco: 75.0, imagem: toalha_retangular, descricao: 'Toalha retangular de alta qualidade.' },
  { id: 39, nome: 'Copos Corinthians e Palmeiras', preco: 75.0, imagem: copos_times, descricao: 'Copos do Corinthians e Palmeiras.' },

];
export default produtos;
