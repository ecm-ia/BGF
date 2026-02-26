/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Truck, 
  Instagram, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  CreditCard,
  ChevronRight,
  Heart
} from "lucide-react";
import { useState } from "react";

// Static paths from the public/images directory
const paoFrancesImg = "./images/paofrances.jpg";
const paoMilhoImg = "images/paodemilho.jpg";
const paoAustralianoImg = "images/paoaustraliano.jpg";
const pizzaImg = "images/pizza.jpg";
const paoFornoImg = "images/paonoforno.jpg";
const massaFermentandoImg = "images/massafermentando.jpg";
const paoSovandoVid = "images/pao-sovando.mp4";

const products = [
  {
    id: 1,
    name: "Pão de Milho Verde",
    description: "Textura macia e sabor autêntico do milho, perfeito para o café da manhã.",
    image: paoMilhoImg,
    tags: ["Sem Glúten", "Artesanal"]
  },
  {
    id: 2,
    name: "Pão Australiano",
    description: "Escuro, levemente adocicado e com aquele toque especial de cacau e mel.",
    image: paoAustralianoImg,
    tags: ["Sem Glúten", "Sem Lactose"]
  },
  {
    id: 3,
    name: "Pão Francês",
    description: "O clássico que não pode faltar, com casquinha crocante e miolo leve.",
    image: paoFrancesImg,
    tags: ["Sem Glúten", "Crocante"]
  },
  {
    id: 4,
    name: "Pizza Artesanal",
    description: "Massa leve e fermentação natural para uma experiência italiana sem glúten.",
    image: pizzaImg,
    tags: ["Sem Glúten", "Vários Sabores"]
  }
];

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Feito com Amor",
    description: "Produção caseira e artesanal, cuidando de cada detalhe para sua saúde."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "100% Sem Glúten",
    description: "Segurança total para celíacos e sensíveis ao glúten."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Sempre Fresquinho",
    description: "Pães assados sob encomenda para garantir o melhor sabor."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/c/5514974003713";

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#4a3728] font-sans selection:bg-[#e6d5c3]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-[#4a3728]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#8b5e3c] rounded-full flex items-center justify-center text-white font-serif italic text-xl">B</div>
              <span className="text-xl font-serif font-bold tracking-tight text-[#4a3728]">Bauru Glúten Free</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#produtos" className="hover:text-[#8b5e3c] transition-colors font-medium">Produtos</a>
              <a href="#entrega" className="hover:text-[#8b5e3c] transition-colors font-medium">Entrega</a>
              <a href="#contato" className="hover:text-[#8b5e3c] transition-colors font-medium">Contato</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b5e3c] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#724d31] transition-all flex items-center gap-2 shadow-md shadow-[#8b5e3c]/20"
              >
                <ShoppingBag className="w-4 h-4" />
                Pedir Agora
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#4a3728] mb-1.5"></div>
              <div className="w-6 h-0.5 bg-[#4a3728] mb-1.5"></div>
              <div className="w-6 h-0.5 bg-[#4a3728]"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#fdfbf7] border-b border-[#4a3728]/10 p-4 space-y-4"
          >
            <a href="#produtos" className="block px-4 py-2 hover:bg-[#f5e6d3] rounded-lg">Produtos</a>
            <a href="#entrega" className="block px-4 py-2 hover:bg-[#f5e6d3] rounded-lg">Entrega</a>
            <a href="#contato" className="block px-4 py-2 hover:bg-[#f5e6d3] rounded-lg">Contato</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#8b5e3c] text-white px-6 py-3 rounded-full font-medium"
            >
              Ver Catálogo no WhatsApp
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5e6d3] text-[#8b5e3c] rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Padaria Artesanal & Caseira
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#4a3728] leading-[1.1] mb-6">
              Sabor de verdade, <br />
              <span className="italic text-[#8b5e3c]">sem glúten.</span>
            </h1>
            <p className="text-lg text-[#6b5a4d] mb-8 max-w-lg leading-relaxed">
              Descubra o prazer de comer pães fresquinhos, artesanais e 100% seguros. 
              Feitos em Bauru com ingredientes selecionados e muito carinho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b5e3c] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#724d31] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#8b5e3c]/30"
              >
                Ver Catálogo Completo
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#produtos"
                className="border-2 border-[#8b5e3c] text-[#8b5e3c] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8b5e3c] hover:text-white transition-all flex items-center justify-center"
              >
                Conhecer Produtos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src={paoFornoImg}
                alt="Pão artesanal saindo do forno"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] -rotate-3 border border-[#f5e6d3]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-[#4a3728]">100% Seguro</span>
              </div>
              <p className="text-sm text-[#6b5a4d]">Produção exclusiva sem contaminação cruzada.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#f5e6d3]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-[#f5e6d3] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#fdfbf7] text-[#8b5e3c] rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#6b5a4d] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="produtos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nossas Delícias</h2>
            <p className="text-[#6b5a4d] max-w-2xl mx-auto">
              Cada pão é único, feito com fermentação cuidadosa e ingredientes de alta qualidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="bg-white/90 backdrop-blur-sm text-[#8b5e3c] text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#8b5e3c] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#6b5a4d] mb-4 line-clamp-2">{product.description}</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b5e3c] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Pedir no WhatsApp <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#4a3728]">O Segredo da Nossa Massa</h2>
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="text-4xl font-serif italic text-[#8b5e3c] opacity-30">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fermentação Lenta</h4>
                    <p className="text-[#6b5a4d]">Respeitamos o tempo da natureza para garantir digestibilidade e sabor incomparável.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6"
                >
                  <div className="text-4xl font-serif italic text-[#8b5e3c] opacity-30">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ingredientes Puros</h4>
                    <p className="text-[#6b5a4d]">Selecionamos as melhores farinhas sem glúten e ingredientes naturais, sem conservantes químicos.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-6"
                >
                  <div className="text-4xl font-serif italic text-[#8b5e3c] opacity-30">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cuidado Artesanal</h4>
                    <p className="text-[#6b5a4d]">Cada pão é modelado à mão, garantindo que cada unidade que chega à sua mesa seja especial.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={massaFermentandoImg} alt="Massa fermentando" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg mt-8"
                >
                  <video 
                    src={paoSovandoVid} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f5e6d3] rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="entrega" className="py-24 bg-[#4a3728] text-[#fdfbf7] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5e3c] rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Como Receber</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#8b5e3c] rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Entrega Normal</h4>
                    <p className="text-[#e6d5c3] leading-relaxed">
                      Pedidos até <span className="text-white font-bold">quinta-feira</span> são entregues no <span className="text-white font-bold">sábado</span>.
                      <br />
                      <span className="inline-block mt-2 px-3 py-1 bg-white/10 rounded-lg text-sm">
                        Frete Grátis em Bauru para pedidos acima de R$ 100,00
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#8b5e3c] rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Entrega Expresso</h4>
                    <p className="text-[#e6d5c3] leading-relaxed">
                      Peça até as 16h e receba no dia seguinte via Uber Moto. 
                      Valor variável conforme o aplicativo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#8b5e3c] rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Pagamento Facilitado</h4>
                    <p className="text-[#e6d5c3] leading-relaxed">
                      Aceitamos pagamentos via <span className="text-white font-bold">Pix</span> de forma rápida e segura.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#8b5e3c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Peça pelo WhatsApp</h3>
                <p className="text-[#e6d5c3] mt-2">Atendimento personalizado e catálogo sempre atualizado.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <span className="text-[#e6d5c3]">Status do Catálogo</span>
                  <span className="flex items-center gap-2 text-green-400 font-bold">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    ABERTO
                  </span>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#4a3728] py-4 rounded-2xl font-bold text-center hover:bg-[#e6d5c3] transition-all"
                >
                  Acessar Catálogo Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-20 px-4 border-t border-[#4a3728]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#8b5e3c] rounded-full flex items-center justify-center text-white font-serif italic text-xl">B</div>
                <span className="text-2xl font-serif font-bold tracking-tight text-[#4a3728]">Bauru Glúten Free</span>
              </div>
              <p className="text-[#6b5a4d] max-w-sm mb-8">
                Levando saúde e sabor para a mesa dos bauruenses com pães artesanais de verdade, 
                sempre livres de glúten e contaminação.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/bauruglutenfree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f5e6d3] text-[#8b5e3c] rounded-full flex items-center justify-center hover:bg-[#8b5e3c] hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f5e6d3] text-[#8b5e3c] rounded-full flex items-center justify-center hover:bg-[#8b5e3c] hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-[#6b5a4d]">
                <li><a href="#produtos" className="hover:text-[#8b5e3c] transition-colors">Nossos Pães</a></li>
                <li><a href="#entrega" className="hover:text-[#8b5e3c] transition-colors">Entregas</a></li>
                <li><a href={whatsappLink} className="hover:text-[#8b5e3c] transition-colors">Fazer Pedido</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-[#6b5a4d]">
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8b5e3c]" />
                  Bauru - SP
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#8b5e3c]" />
                  (14) 97400-3713
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#4a3728]/10 text-center text-sm text-[#6b5a4d]">
            <p>© {new Date().getFullYear()} Bauru Glúten Free. Todos os direitos reservados.</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para uma vida mais saudável.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
