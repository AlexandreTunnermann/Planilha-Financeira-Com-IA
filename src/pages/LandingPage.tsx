"use client";

import React from 'react';
import { CheckCircle2, ShieldCheck, CreditCard, Zap, MessageCircleQuestion } from 'lucide-react'; // Icons for checkmarks and FAQ

const LandingPage = () => {
  const primaryColor = "#CCFF00";
  const bgColor = "#020D0A";
  const bgGradient = "linear-gradient(180deg, #020D0A 0%, #06261B 100%)";
  const textSecondaryColor = "#A0AEC0";
  const surfaceColor = "rgba(255, 255, 255, 0.05)";
  const safetyBgColor = "#EBE8D8";

  return (
    <div className="font-inter antialiased" style={{ backgroundColor: bgColor, color: '#FFFFFF' }}>
      
      {/* DOBRA 1 - HEADLINE */}
      <section className="min-h-screen flex items-center px-6 py-20" style={{ background: bgGradient }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-sm mb-4 uppercase font-bold tracking-widest inline-block" style={{ color: primaryColor }}>IA FINANCEIRA</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl tracking-tighter">
              Planilha de Controle Financeiro <span style={{ color: primaryColor }}>Automatizada</span> com IA
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6" style={{ color: textSecondaryColor }}>
              Tenha clareza total de para onde seu dinheiro vai em apenas 10 minutos por mês, sem precisar digitar um único gasto manualmente.
            </p>
            <p className="text-md md:text-lg max-w-2xl mb-10 font-medium" style={{ color: textSecondaryColor }}>
              A tecnologia que os bancos usam para lucrar, agora disponível para você dominar sua conta bancária.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/mockup-celular.webp" 
              alt="Mockup Celular com Planilha" 
              className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl transform rotate-6" 
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* DOBRA 2 - PROVA SOCIAL */}
      <section className="py-20 px-6" style={{ backgroundColor: safetyBgColor, color: bgColor }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Mais de 1.450 pessoas já recuperaram o sono e o controle do saldo.</h2>
          <p className="text-lg text-center mb-12 font-medium">"Confira o que estão dizendo no WhatsApp:"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Finalmente o dinheiro sobrou",
              "Instalei no celular e é muito fácil",
              "A IA categorizou tudo sozinha",
              "Adeus planilha manual"
            ].map((text, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-lg border border-black/5 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-100 h-40 rounded flex items-center justify-center text-sm text-gray-500 italic p-4 text-center">
                  "{text}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3 - PEDRA NO SAPATO */}
      <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">A cada dia que passa você trabalha apenas para ver o saldo sumir...</h2>
          <div className="space-y-6">
            {[
              "Parece que eu trabalho, trabalho e não vejo a cor do dinheiro.",
              "Onde foi que eu gastei esses 200 reais que estavam aqui ontem?",
              "A fatura do cartão é uma surpresa desesperadora todo mês.",
              "Eu desisti de anotar porque sempre esqueço de pedir a nota fiscal.",
              "Sinto que estou em uma corrida de ratos, vivendo apenas para pagar boleto."
            ].map((phrase, index) => (
              <div key={index} className="p-6 rounded-r-xl italic text-gray-300 relative pl-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderLeft: `44px solid ${primaryColor}` }}>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl font-bold" style={{ color: primaryColor }}>"</span>
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 4 - DIAGNÓSTICO */}
      <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ENTENDA DE UMA VEZ POR TODAS...</h2>
          <p className="text-xl md:text-2xl mb-12 font-medium" style={{ color: textSecondaryColor }}>
            O problema não está no seu salário, mas na barreira da digitação. As principais razões pelas quais você continua no vermelho:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Fadiga de Dados</h3>
              <p style={{ color: textSecondaryColor }}>Ninguém tem paciência para anotar cada café.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Falta de Categorização</h3>
              <p style={{ color: textSecondaryColor }}>Gastar não é o problema, não saber ONDE gasta é.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Ponto Cego do Cartão</h3>
              <p style={{ color: textSecondaryColor }}>A fatura cresce silenciosamente sem você perceber.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>Falta de Ferramenta</h3>
              <p style={{ color: textSecondaryColor }}>Caderninhos e apps complexos não funcionam a longo prazo.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl mt-12 font-bold" style={{ color: primaryColor }}>É por isso que você precisa da Planilha Automatizada agora!</p>
        </div>
      </section>

      {/* DOBRA 5 - MODO DE PREPARO */}
      <section className="py-20 px-6" style={{ backgroundColor: bgGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Estes são os 3 passos para você assumir o controle:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <span className="text-5xl font-black mb-4" style={{ color: primaryColor }}>1</span>
              <h3 className="text-xl font-bold mb-2">ENVIAR</h3>
              <p className="text-center" style={{ color: textSecondaryColor }}>Mande seu extrato ou fatura para a IA.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <span className="text-5xl font-black mb-4" style={{ color: primaryColor }}>2</span>
              <h3 className="text-xl font-bold mb-2">COLAR</h3>
              <p className="text-center" style={{ color: textSecondaryColor }}>Copie a resposta inteligente e cole na planilha.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <span className="text-5xl font-black mb-4" style={{ color: primaryColor }}>3</span>
              <h3 className="text-xl font-bold mb-2">DOMINAR</h3>
              <p className="text-center" style={{ color: textSecondaryColor }}>Veja os gráficos prontos e tome decisões seguras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 - ENTREGÁVEIS */}
      <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TUDO QUE VOCÊ VAI RECEBER</h2>
          <div className="space-y-4">
            {[
              "Planilha Mestre de Controle com IA (PC e Celular)",
              "Guia Rápido de Configuração (PDF)",
              "Checklist de Fechamento de Mês",
              "BÔNUS: Vídeo-aula Preenchimento Turbo",
              "BÔNUS: Guia 'Como Aumentar seu Score de Crédito'"
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 rounded-xl" style={{ backgroundColor: surfaceColor }}>
                <CheckCircle2 className="mr-4 flex-shrink-0" size={24} style={{ color: primaryColor }} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 7 - PRA QUEM É */}
      <section className="py-20 px-6" style={{ backgroundColor: bgGradient }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Sistema é para você que...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Sente que o dinheiro 'foge' pelas mãos;",
              "Está cansado de ser escravo da fatura do cartão;",
              "É autônomo e tem renda instável;",
              "Quer montar sua reserva de emergência;",
              "Não aguenta mais planilhas manuais chatas;",
              "Busca segurança para o futuro da família."
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 rounded-xl" style={{ backgroundColor: surfaceColor }}>
                <CheckCircle2 className="mr-4 flex-shrink-0" size={24} style={{ color: primaryColor }} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl md:text-2xl mt-12 font-bold" style={{ color: primaryColor }}>
            Se você se identifica com ao menos 2 itens acima, este sistema é para você!
          </p>
        </div>
      </section>

      {/* DOBRA 8 - ANCORAGEM */}
      <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Recapitulando tudo que você vai receber:</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center text-lg p-3 rounded-md" style={{ backgroundColor: surfaceColor }}>
              <span>Planilha Mestre com IA</span>
              <span className="font-bold line-through text-gray-400">R$ 97,00</span>
            </div>
            <div className="flex justify-between items-center text-lg p-3 rounded-md" style={{ backgroundColor: surfaceColor }}>
              <span>Guia de Configuração + Checklist</span>
              <span className="font-bold line-through text-gray-400">R$ 47,00</span>
            </div>
            <div className="flex justify-between items-center text-lg p-3 rounded-md" style={{ backgroundColor: surfaceColor }}>
              <span>Vídeo-aula Turbo</span>
              <span className="font-bold line-through text-gray-400">R$ 67,00</span>
            </div>
            <div className="flex justify-between items-center text-lg p-3 rounded-md" style={{ backgroundColor: surfaceColor }}>
              <span>Guia Aumento de Score</span>
              <span className="font-bold line-through text-gray-400">R$ 47,00</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-2xl font-bold p-4 rounded-md" style={{ backgroundColor: primaryColor, color: bgColor }}>
            <span>TOTAL:</span>
            <span className="line-through">R$ 258,00</span>
          </div>
          <p className="text-sm mt-4" style={{ color: textSecondaryColor }}>(valor real se comprado separado)</p>
        </div>
      </section>

      {/* DOBRA 9 - PREÇO + BOTÃO */}
      <section id="purchase" className="py-20 px-6 flex justify-center" style={{ backgroundColor: bgColor }}>
        <div className="w-full max-w-lg rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(204,255,0,0.1)]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `2px solid ${primaryColor}` }}>
          <h3 className="font-bold text-xl mb-2" style={{ color: primaryColor }}>Hoje você terá acesso por apenas:</h3>
          <div className="text-gray-400">De R$ 258,00 por apenas:</div>
          <div className="text-6xl font-black text-white my-2">R$ 67,00</div>
          <div className="text-lg text-gray-300 mb-8 font-medium">ou 9x de R$ 8,50</div>
          
          <button className="w-full font-bold py-5 rounded-xl text-xl hover:scale-105 transition-transform duration-300" style={{ backgroundColor: primaryColor, color: bgColor }}>
            QUERO ACESSO IMEDIATO
          </button>
          
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Zap size={16} style={{ color: primaryColor }} /> Acesso imediato</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} style={{ color: primaryColor }} /> Garantia de 7 dias</span>
            <span className="flex items-center gap-2"><CreditCard size={16} style={{ color: primaryColor }} /> Compra 100% segura</span>
          </div>
        </div>
      </section>

      {/* DOBRA 10 - CONVERSA SÉRIA */}
      <section className="py-20 px-6" style={{ backgroundColor: bgGradient }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Você tem duas escolhas agora:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <p className="text-xl font-medium mb-4">Continuar ignorando os sinais e ver sua dívida virar uma bola de neve,</p>
              <p className="text-sm" style={{ color: textSecondaryColor }}>(e se arrepender depois)</p>
            </div>
            <div className="p-8 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <p className="text-xl font-medium mb-4">ou investir menos que o valor de um lanche para ter paz financeira pelo resto do ano.</p>
              <p className="text-sm" style={{ color: primaryColor }}>(e finalmente ter controle)</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-12" style={{ color: primaryColor }}>A decisão é sua.</p>
        </div>
      </section>

      {/* DOBRA 11 - AUTORIDADE */}
      <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-end">
            <img 
              src="/images/alexandre-tunnermann.png" 
              alt="Alexandre Tünnermann" 
              className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Alexandre Tünnermann criou este sistema.</h2>
            <p className="text-xl font-medium mb-6" style={{ color: textSecondaryColor }}>
              Especialista formado em Finanças e Contabilidade pela University of Notre Dame (Austrália).
            </p>
            <div className="p-8 rounded-xl italic text-gray-300 relative pl-12" style={{ backgroundColor: surfaceColor, borderLeft: `4px solid ${primaryColor}` }}>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl font-bold" style={{ color: primaryColor }}>"</span>
              "Como consultor, eu via pessoas brilhantes perdendo tudo por falta de organização. Eu mesmo odiava tarefas repetitivas e por vezes me sentia um hipócrita pedindo que meus clientes planilhassem todos os seus gastos. Por isso criei este sistema 'preguiçoso': A Inteligência Artificial faz o trabalho duro para que você só precise olhar os resultados."
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 12 - FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: bgGradient }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2 flex items-center"><MessageCircleQuestion className="mr-3" style={{ color: primaryColor }} /> Preciso saber Excel?</h3>
              <p style={{ color: textSecondaryColor }}>Não, a IA e nossos vídeos fazem tudo por você.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2 flex items-center"><MessageCircleQuestion className="mr-3" style={{ color: primaryColor }} /> Funciona no celular?</h3>
              <p style={{ color: textSecondaryColor }}>Sim, totalmente compatível.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: surfaceColor }}>
              <h3 className="text-xl font-bold mb-2 flex items-center"><MessageCircleQuestion className="mr-3" style={{ color: primaryColor }} /> O pagamento é seguro?</h3>
              <p style={{ color: textSecondaryColor }}>Sim, processado pela maior plataforma de produtos digitais do Brasil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t text-center text-sm" style={{ borderColor: 'rgba(255, 255, 255, 0.05)', color: textSecondaryColor, backgroundColor: bgColor }}>
        <p>© {new Date().getFullYear()} Alexandre Tünnermann - Todos os direitos reservados</p>
      </footer>

    </div>
  );
};

export default LandingPage;