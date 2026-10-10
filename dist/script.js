// Edite os contatos e dados aqui. Não inclua +, espaços ou símbolos no WhatsApp.
const CONFIG = {name: 'Enzo Sonego', availability: 'Disponível para novos projetos', whatsapp: '5514996920447', email: 'enzosonego106@gmail.com', github: 'https://github.com/enzosonego10', linkedin: '', testimonials: []};
const PROJECTS = [
  {
    "id": "techub",
    "name": "TecHUB Biblioteca",
    "category": "PROJETO ESCOLAR · SISTEMA WEB",
    "description": "Uma biblioteca escolar digital com catálogo, reservas, fila de espera e gestão de empréstimos.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL"
    ],
    "problem": "Facilitar a consulta ao acervo e organizar o fluxo de reservas, retiradas e devoluções em uma biblioteca escolar.",
    "demo": "https://techub-biblioteca.vercel.app/",
    "repository": "https://github.com/enzosonego10/techub-biblioteca",
    "image": "assets/techub.webp",
    "features": [
      "Catálogo com busca e filtros",
      "Login por perfil e validação institucional",
      "Reservas e fila de espera",
      "Histórico e notificações do leitor",
      "Painel administrativo para livros, usuários e empréstimos"
    ],
    "implementation": "A interface em JavaScript se comunica com uma API em PHP. O código reúne controle de sessão, autorização por perfil e organização dos dados relacionais.",
    "note": "A captura mostra a tela de acesso da versão publicada. As áreas de aluno e administração exigem uma conta autorizada.",
    "challenges": "",
    "learnings": "",
    "screenshots": []
  },
  {
    "id": "conflitos",
    "name": "O Mundo em Conflito",
    "category": "PROJETO ESCOLAR · SITE EDUCACIONAL",
    "description": "Um dossiê visual sobre conflitos contemporâneos, com contexto histórico, linha do tempo e interação em JavaScript.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "problem": "Organizar conteúdo introdutório sobre quatro conflitos contemporâneos em uma experiência de leitura clara e navegável.",
    "demo": "",
    "repository": "https://github.com/enzosonego10/O-mundo-em-conflito",
    "image": "assets/conflitos.webp",
    "features": [
      "Dossiês de quatro conflitos contemporâneos",
      "Seção de origens e atores centrais",
      "Linha do tempo conjunta",
      "Calculadora de duração com validação de campos",
      "Navegação responsiva e referências consultadas"
    ],
    "implementation": "A calculadora lê os dados do formulário, valida os anos e apresenta a duração aproximada. O conteúdo usa seções semânticas e imagens cartográficas para orientar a leitura.",
    "note": "Captura da versão local fornecida. Projeto de finalidade escolar e introdutória.",
    "challenges": "",
    "learnings": "",
    "screenshots": []
  },
  {
    "id": "war-news",
    "name": "War News Web",
    "category": "PROJETO DEMONSTRATIVO · PORTAL HISTÓRICO",
    "description": "Um portal sobre guerras e seus protagonistas, com visual editorial, navegação por categorias e perfis em modal.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "problem": "Reunir conteúdo histórico em uma interface organizada por temas, permitindo explorar diferentes categorias sem recarregar a página.",
    "demo": "",
    "repository": "https://github.com/enzosonego10/War-News-Web",
    "image": "assets/war-news.webp",
    "features": [
      "Navegação entre categorias sem recarregar a página",
      "Seções de guerras, líderes, soldados e eventos",
      "Cartões de soldados gerados por JavaScript",
      "Modais com perfis e fechamento por Escape",
      "Linha do tempo e layout responsivo"
    ],
    "implementation": "Os perfis são mantidos em uma estrutura de dados no JavaScript e renderizados em cartões e modais. A navegação alterna as seções de uma única página.",
    "note": "Captura da versão local fornecida, cuja marca interna é War Chronicle. Conteúdo educacional e demonstrativo.",
    "challenges": "",
    "learnings": "",
    "screenshots": []
  }
];
const SERVICES = [
 ['⌘','Sites institucionais','Uma presença digital para apresentar sua empresa, seus serviços e suas formas de contato.'],
 ['↗','Landing pages','Uma página focada na sua oferta, com conteúdo claro e um caminho para a próxima ação.'],
 ['⌨','Sistemas web','Formulários, cadastros e painéis conforme a necessidade e a viabilidade do projeto.'],
 ['⇄','APIs e bancos de dados','Conexões entre interfaces, serviços e dados, com escopo avaliado caso a caso.'],
 ['✳','Manutenção e melhorias','Atualizações, correções e ajustes para cuidar de um site que já existe.']
];
const TECHNOLOGIES = [['Front-end',['HTML5','CSS3','JavaScript'],'Estrutura, estilo e interação.'],['Back-end',['PHP','APIs','Lógica de programação'],'Funcionalidades, integrações e aplicações.'],['Banco de dados',['SQL','Modelagem relacional'],'Organização e relacionamento de dados.'],['Ferramentas',['Git','GitHub','Ferramentas web'],'Versionamento e desenvolvimento.']];
const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = value => {try {const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch{return '';}};
const external = (url,label) => safeUrl(url)?`<a class="text-link" href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:'';
document.querySelector('#availability').textContent=CONFIG.availability;
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#projects').innerHTML = PROJECTS.map(p => `<article class="project">
  <div class="project-preview"><div class="preview-bar" aria-hidden="true"><span>● ● ●</span><span>${esc(p.name)}</span><span>↗</span></div><img src="${esc(p.image)}" alt="Captura da página de ${esc(p.name)}" loading="lazy" width="1440" height="980"></div>
  <p class="category">${esc(p.category)}</p><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>
  <div class="tags">${p.technologies.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
  <div class="project-actions"><button class="detail-button" data-project="${esc(p.id)}" aria-label="Ver detalhes de ${esc(p.name)}">Ver detalhes <span>↗</span></button>${external(p.repository,'GitHub')}</div>
</article>`).join('');
document.querySelector('#services').innerHTML=SERVICES.map(([icon,title,description])=>`<article class="service"><span class="service-icon" aria-hidden="true">${icon}</span><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="#contato" data-service="${esc(title)}">Conversar sobre o projeto <span>↗</span></a></article>`).join('');
document.querySelector('#technologies').innerHTML=TECHNOLOGIES.map(([title,items,note])=>`<article><h3>${esc(title)}</h3><p>${items.map(esc).join(' · ')}</p><small>${esc(note)}</small></article>`).join('');
const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>700)closeMenu();});
const dialog=document.querySelector('#project-dialog');
document.querySelector('#projects').addEventListener('click', e => {
  const button = e.target.closest('[data-project]');
  if (!button) return;
  const project = PROJECTS.find(p => p.id === button.dataset.project);
  document.querySelector('#dialog-content').innerHTML = `
    <p class="eyebrow">${esc(project.category)}</p><h2 id="project-title">${esc(project.name)}</h2>
    <img src="${esc(project.image)}" alt="Captura da página de ${esc(project.name)}">
    <h3>Contexto e objetivo</h3><p>${esc(project.description)}</p>
    <h3>Problema que procura resolver</h3><p>${esc(project.problem)}</p>
    <h3>Funcionalidades no projeto</h3><ul>${project.features.map(feature=>`<li>${esc(feature)}</li>`).join('')}</ul>
    <h3>Tecnologias</h3><div class="tags">${project.technologies.map(tech=>`<span>${esc(tech)}</span>`).join('')}</div>
    <h3>Implementação em foco</h3><p>${esc(project.implementation)}</p>
    ${project.challenges?`<h3>Desafios técnicos</h3><p>${esc(project.challenges)}</p>`:''}
    ${project.learnings?`<h3>Aprendizados</h3><p>${esc(project.learnings)}</p>`:''}
    <div class="actions dialog-actions">${external(project.demo,'Visitar site')}${external(project.repository,'Código no GitHub')}</div>
    <p class="fine">${esc(project.note)}</p>`;
  dialog.setAttribute('aria-labelledby','project-title');
  dialog.showModal();
});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const phoneValid=()=>/^\d{10,15}$/.test(CONFIG.whatsapp);
const emailValid=()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email);
function whatsappUrl(message){return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;}
const links=document.querySelector('#contact-links');
if(phoneValid()){const a=document.createElement('a');a.className='button';a.textContent='Conversar no WhatsApp ↗';a.href=whatsappUrl('Olá! Conheci seu portfólio e gostaria de conversar sobre a criação de um site para minha empresa.');a.target='_blank';a.rel='noopener noreferrer';links.append(a);document.querySelector('#contact-note').textContent='O formulário abre o WhatsApp com sua mensagem preenchida. Você revisa e envia na conversa.';document.querySelector('#contact-form button').innerHTML='Continuar no WhatsApp <span>↗</span>';}
if(emailValid()){const a=document.createElement('a');a.href=`mailto:${CONFIG.email}`;a.textContent='Enviar e-mail ↗';a.className='text-link';links.append(a);}
links.insertAdjacentHTML('beforeend',external(CONFIG.github,'GitHub')+external(CONFIG.linkedin,'LinkedIn'));
document.querySelector('#footer-socials').innerHTML=external(CONFIG.github,'GitHub')+external(CONFIG.linkedin,'LinkedIn');
const contactDetails=document.querySelector('#contact-details');
if(emailValid())contactDetails.textContent=CONFIG.email;
const form=document.querySelector('#contact-form');
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const map={'Sites institucionais':'Site institucional','Landing pages':'Landing page','Sistemas web':'Sistema web','APIs e bancos de dados':'Integração de API ou banco de dados','Manutenção e melhorias':'Manutenção e melhorias'};form.elements.type.value=map[a.dataset.service];}));
form.addEventListener('submit',e=>{e.preventDefault();const contact=form.elements.contact;contact.setCustomValidity('');const value=contact.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)&&value.replace(/\D/g,'').length<8){contact.setCustomValidity('Informe um e-mail válido ou um telefone com pelo menos 8 dígitos.');}if(!form.reportValidity())return;const data=new FormData(form);const msg=`Olá, Enzo Sonego! Meu nome é ${data.get('name').trim()}.\nContato: ${value}\nProjeto: ${data.get('type')}\nDescrição: ${data.get('description').trim()}\nOrçamento: ${data.get('budget')||'A conversar'}`;if(phoneValid())window.open(whatsappUrl(msg),'_blank','noopener,noreferrer');else document.querySelector('#form-status').textContent='Mensagem validada. O WhatsApp de Enzo Sonego ainda não foi configurado; nenhum dado foi enviado.';});
form.elements.contact.addEventListener('input',()=>form.elements.contact.setCustomValidity(''));
if(CONFIG.testimonials.length){document.querySelector('#testimonials').hidden=false;document.querySelector('#testimonial-list').innerHTML=CONFIG.testimonials.map(t=>`<blockquote><p>${esc(t.comment)}</p><cite>${esc(t.name)} · ${esc(t.role)}</cite></blockquote>`).join('');}
