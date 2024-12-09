import { useEffect, useState } from "react";
import "./style.css";
import { Questions } from "./questions";

function App() {
  const [page, setPage] = useState(0);
  const [pg, setPg] = useState("");
  const [loveLanguages, setLoveLanguages] = useState([]);
  const [verify, setVerify] = useState([]);

  useEffect(() => {
    if (((page > 0) && (page < 31)) && (pg !== "")) {
      const e = {
        id: Questions[page - 1][pg].id,
        ask: Questions[page - 1][pg].ask,
        ans: Questions[page - 1][pg].ans
      };
  
      const id = String(e.id);
      const size = e.id.length;
      let push = '';
  
      // Verificar se a resposta para esta pergunta já foi dada
      const questionIndex = verify.findIndex(e => String(e) === String(id.slice(1, size)));
  
      if (questionIndex === -1) {
        // Se a pergunta ainda não foi respondida, adicionar a resposta
        if (e.id[0] === "f") {
          push = Questions[e.id.slice(1, size) - 1].first.ans;
        } else {
          push = Questions[e.id.slice(1, size) - 1].second.ans;
        }
  
        // Atualizando o estado com a nova resposta
        setLoveLanguages(prev => [...prev, push]);
        setVerify(prev => [...prev, id.slice(1, size)]);
      } else {
        // Se a pergunta já foi respondida, substituir a resposta
        if (e.id[0] === "f") {
          push = Questions[e.id.slice(1, size) - 1].first.ans;
        } else {
          push = Questions[e.id.slice(1, size) - 1].second.ans;
        }
  
        // Atualizando o estado, substituindo a resposta no índice correto
        setLoveLanguages(prev => {
          const updatedLoveLanguages = [...prev];
          updatedLoveLanguages[questionIndex] = push;  // Substitui a resposta existente
          return updatedLoveLanguages;
        });
  
        setVerify(prev => {
          const updatedVerify = [...prev];
          updatedVerify[questionIndex] = id.slice(1, size);  // Substitui o id no índice correto
          return updatedVerify;
        });
      }
    }
  }, [pg, page]);  // Agora o useEffect também depende da variável "page"   
  
  return (
    <>
    <img className="watermark" src="./assets/CF-ico.png" alt="watermark" />
    <header className="top">
        <main className="main">
            <img src="assets/CF-logo-black.png" alt="logo" />
        </main>
    </header>
    <main className="container">
      {page === 0 ?
        
        <div className="content">
            <h1 className="title">TESTE - AS CINCO LINGUAGENS DO AMOR</h1>
            <h2 className="quote">(Gary Chapman)</h2>
            <p>Você já ouviu falar das 5 Linguagens do Amor de Gary Chapman?</p>
            <p>Essas linguagens são a chave para entender e expressar o amor de maneira eficaz em suas relações pessoais e amorosas</p>
            <p>Para descobrir a sua linguagem do amor e conhecer cada vez mais a si mesmo, considere as afirmações do teste e selecione a opção que melhor representa sua forma de amar e o seu desejo de sentir amado(a)</p>
            <div className="button btn-blue btn-sep" onClick={() => setPage(1)}>Começar Teste</div>
        </div> :
      page > 30 ?
      <div className="ask-box">
        <h1>Parabéns</h1>
        <h2>Essas são suas linguagens do amor</h2>
        <div className="answer">
            <div>
                <h4 className="value">{loveLanguages.reduce((counter, obj) => obj === 'palavras de afirmação' ? counter += 1 : counter, 0)}</h4>
                <h5 className="type">Palavras de afirmação</h5>
            </div>
            <div>
                <h4 className="value">{loveLanguages.reduce((counter, obj) => obj === 'tempo de qualidade' ? counter += 1 : counter, 0)}</h4>
                <h5 className="type">Tempo de qualidade</h5>
            </div>
            <div>
                <h4 className="value">{loveLanguages.reduce((counter, obj) => obj === 'presentes' ? counter += 1 : counter, 0)}</h4>
                <h5 className="type">Receber presentes</h5>
            </div>
            <div>
                <h4 className="value">{loveLanguages.reduce((counter, obj) => obj === 'atos de serviço' ? counter += 1 : counter, 0)}</h4>
                <h5 className="type">Atos de serviço</h5>
            </div>
            <div>
                <h4 className="value">{loveLanguages.reduce((counter, obj) => obj === 'toque fisico' ? counter += 1 : counter, 0)}</h4>
                <h5 className="type">Toque físico</h5>
            </div>
        </div>
        <div className="explain">
          <p>Saber a sua linguagem do amor é fundamental porque ajuda a entender melhor suas próprias necessidades emocionais e a forma como você expressa e recebe afeto. O conceito de linguagens do amor foi desenvolvido pelo autor Gary Chapman e se baseia na ideia de que as pessoas têm formas diferentes de demonstrar e perceber o amor. Conhecer sua linguagem do amor pode trazer benefícios tanto no âmbito pessoal quanto nos relacionamentos, ajudando a fortalecer a comunicação, aumentar a conexão emocional e melhorar a satisfação no relacionamento. Aqui estão algumas razões pelas quais isso é importante</p>
          <br />
          <p>O desenvolvimento pessoal é o estudo constante de quem se é, por isso é necessário buscar se conhecer cada vez mais</p>
          <div className="toggle-pg">
            <a href={`https://api.whatsapp.com/send?phone=5511940645187&text=*Minhas%20linguagens%20do%20amor%20s%C3%A3o%3A*%0A%0A_%E2%8F%B2%EF%B8%8F${loveLanguages.reduce((counter, obj) => obj === 'tempo de qualidade' ? counter += 1 : counter, 0)}%20em%20tempo%20de%20qualidade_%0A_%F0%9F%97%A3%EF%B8%8F${loveLanguages.reduce((counter, obj) => obj === 'palavras de afirmação' ? counter += 1 : counter, 0)}%20em%20palavras%20de%20afirma%C3%A7%C3%A3o_%0A_%F0%9F%AB%B4${loveLanguages.reduce((counter, obj) => obj === 'atos de serviço' ? counter += 1 : counter, 0)}%20em%20atos%20de%20servi%C3%A7o_%0A_%F0%9F%8E%81${loveLanguages.reduce((counter, obj) => obj === 'presentes' ? counter += 1 : counter, 0)}%20em%20dar%20presentes_%0A_%F0%9F%AB%82${loveLanguages.reduce((counter, obj) => obj === 'toque fisico' ? counter += 1 : counter, 0)}%20em%20toque%20f%C3%ADsico_%0A%0A*Quero%20saber%20mais%20sobre%20mim*`} target="_blank" without rel="noreferrer"><div className="button btn-nav btn-blue btn-sep btn-cng">Quero me conhecer melhor</div></a>
          </div>
          <h4>1. Melhor Comunicação no Relacionamento</h4>
          <p>Ao conhecer sua própria linguagem do amor e a do seu parceiro, você pode expressar seus sentimentos de maneira mais clara e eficaz. Isso reduz o risco de mal-entendidos e frustrações, pois ambos saberão como o outro prefere receber carinho e afeto.</p>
          <h4>2. Fortalecimento dos Laços Emocionais</h4>
          <p>Quando você e seu parceiro entendem as preferências um do outro, podem se dedicar a ações que realmente toquem o coração do outro. Isso fortalece a conexão emocional, criando um relacionamento mais sólido e saudável.</p>
          <h4>3. Atenção às Necessidades Emocionais</h4>
          <p>Cada pessoa tem uma maneira específica de se sentir amada, e compreender a sua linguagem do amor permite que você se atente a essas necessidades. Isso também ajuda a perceber se o seu parceiro está expressando amor de uma maneira que ressoe com você.</p>
          <h4>4. Resolução de Conflitos</h4>
          <p>Conhecer as linguagens do amor ajuda a evitar mal-entendidos que podem gerar conflitos. Muitas vezes, os desentendimentos surgem porque uma pessoa pode estar oferecendo amor de uma forma que não é bem recebida pela outra. Ao compreender como o outro se sente mais amado, é possível evitar essas falhas na comunicação e lidar com os desafios de forma mais eficaz.</p>
          <h4>5. Promoção de Bem-Estar Emocional</h4>
          <p>Quando suas necessidades emocionais são atendidas de maneira consistente, você se sente mais seguro, apreciado e amado. Isso contribui para o seu bem-estar geral e para a felicidade no relacionamento.</p>
          <h4>6. Desenvolvimento Pessoal</h4>
          <p>Saber sua linguagem do amor também é uma forma de autoconhecimento. Você começa a entender melhor suas preferências e os motivos pelos quais certos gestos ou palavras fazem você se sentir mais conectado e valorizado. Isso pode ajudar a melhorar sua autoestima e a satisfação pessoal.</p>
          <h4>7. Relacionamentos Duradouros</h4>
          <p>Relacionamentos onde as linguagens do amor são compreendidas e atendidas tendem a ser mais duradouros e satisfatórios. Quando as necessidades emocionais de ambos os parceiros são reconhecidas e atendidas, o relacionamento tende a crescer de maneira mais saudável e equilibrada.</p>
          <p>Entender sua linguagem do amor e a do seu parceiro é uma ferramenta poderosa para criar e manter relações mais felizes e saudáveis. Esse conhecimento permite que você se conecte de forma mais profunda, evite mal-entendidos e nutra seu relacionamento de maneira mais eficaz.</p>
        </div>
        <div className="toggle-pg">
          <a href={`https://api.whatsapp.com/send?phone=5511940645187&text=*Minhas%20linguagens%20do%20amor%20s%C3%A3o%3A*%0A%0A_%E2%8F%B2%EF%B8%8F${loveLanguages.reduce((counter, obj) => obj === 'tempo de qualidade' ? counter += 1 : counter, 0)}%20em%20tempo%20de%20qualidade_%0A_%F0%9F%97%A3%EF%B8%8F${loveLanguages.reduce((counter, obj) => obj === 'palavras de afirmação' ? counter += 1 : counter, 0)}%20em%20palavras%20de%20afirma%C3%A7%C3%A3o_%0A_%F0%9F%AB%B4${loveLanguages.reduce((counter, obj) => obj === 'atos de serviço' ? counter += 1 : counter, 0)}%20em%20atos%20de%20servi%C3%A7o_%0A_%F0%9F%8E%81${loveLanguages.reduce((counter, obj) => obj === 'presentes' ? counter += 1 : counter, 0)}%20em%20dar%20presentes_%0A_%F0%9F%AB%82${loveLanguages.reduce((counter, obj) => obj === 'toque fisico' ? counter += 1 : counter, 0)}%20em%20toque%20f%C3%ADsico_%0A%0A*Quero%20saber%20mais%20sobre%20mim*`} target="_blank" without rel="noreferrer"><div className="button btn-nav btn-blue btn-sep btn-cng">Preciso me conhecer melhor</div></a>
        </div>
      </div> :
        <>
        <div className="ask-box">
            <div className="evolution-bar">{page} / 30</div>
            <h1 className="ask">Qual das opções abaixo faz mais sentido para você?</h1>
            <button className="button btn-blue btn-sep btn-focus btn-fullw" id={Questions[page - 1].first.id} onClick={() => {
              setPg("first")
            }}>{Questions[page - 1].first.ask}</button>
            <button className="button btn-blue btn-sep btn-focus btn-fullw" id={Questions[page - 1].second.id} onClick={() => {
              setPg("second")
            }}>{Questions[page - 1].second.ask}</button>
            <div className="nav">
            </div>
        </div>

        {page === 1 ?
          <div className="toggle-pg">
            <button className="button btn-nav btn-blue btn-sep btn-cnt" onClick={() => setPage(page + 1)}>próximo</button>
          </div> :
        page < 30 ?
          <div className="toggle-pg">
            <button className="button btn-nav btn-blue btn-sep btn-cng" onClick={() => setPage(page - 1)}>anterior</button>
            <button className="button btn-nav btn-blue btn-sep btn-cng" id={page} onClick={() => setPage(page + 1)}>próximo</button>
          </div> :
          <div className="toggle-pg">
            <button className="button btn-nav btn-blue btn-sep btn-l" onClick={() => setPage(page - 1)}>anterior</button>
            {verify.length === 30 ? <button className="button btn-nav btn-blue btn-sep btn-cng" id={page} onClick={() => setPage(page + 1)}>finalizar</button> : <></>}
          </div>
        }
        </>
      }
    </main>
    <h3 className="signature">created by Allan Majas</h3>
    </>
  );
}

export default App;
