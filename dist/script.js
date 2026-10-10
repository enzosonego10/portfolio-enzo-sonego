// Edite os contatos e dados aqui. Não inclua +, espaços ou símbolos no WhatsApp.
const CONFIG = {name: 'Sonego', availability: 'Disponível para novos projetos', whatsapp: '', email: '', github: '', linkedin: '', testimonials: []};
const PROJECTS = [
  {
    "id": "biblioteca",
    "name": "TecHUB Biblioteca",
    "category": "PROJETO ESCOLAR · EXEMPLO",
    "description": "Proposta de sistema de biblioteca, com catálogo e estrutura para consulta e reserva.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL"
    ],
    "problem": "Facilitar a organização e a consulta ao acervo de uma biblioteca.",
    "demo": "",
    "repository": "",
    "features": [],
    "challenges": "",
    "learnings": "",
    "screenshots": []
  },
  {
    "id": "escolar",
    "name": "Portal Escolar",
    "category": "PROJETO EDUCACIONAL · EXEMPLO",
    "description": "Proposta de portal com painel de alunos, avisos e área administrativa.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "problem": "Organizar informações escolares em uma interface acessível.",
    "demo": "",
    "repository": "",
    "features": [],
    "challenges": "",
    "learnings": "",
    "screenshots": []
  },
  {
    "id": "comercial",
    "name": "Site comercial",
    "category": "PROJETO DEMONSTRATIVO",
    "description": "Conceito de site institucional para uma empresa local fictícia.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "problem": "Apresentar serviços e facilitar o contato com uma empresa.",
    "demo": "",
    "repository": "",
    "features": [],
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
const TECHNOLOGIES = [['Front-end',['HTML5','CSS3','JavaScript'],'Estrutura, estilo e interação.'],['Back-end',['PHP','APIs','Lógica de programação'],'Estudo de funcionalidades e aplicações.'],['Banco de dados',['SQL','Modelagem relacional'],'Organização e relacionamento de dados.'],['Ferramentas',['Git','GitHub','Ferramentas web'],'Versionamento e desenvolvimento.']];
const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = value => {try {const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch{return '';}};
const external = (url,label) => safeUrl(url)?`<a class="text-link" href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:'';
document.querySelector('#availability').textContent=CONFIG.availability;
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#projects').innerHTML=PROJECTS.map(p=>`<article class="project"><img src="assets/${esc(p.id)}.svg" alt="Conceito ilustrativo de ${esc(p.name)} — não é uma captura do projeto real" loading="lazy" width="720" height="496"><p class="category">${esc(p.category)}</p><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="tags">${p.technologies.map(t=>`<span>${esc(t)}</span>`).join('')}</div><button class="detail-button" data-project="${esc(p.id)}">Ver detalhes <span>↗</span></button></article>`).join('');
document.querySelector('#services').innerHTML=SERVICES.map(([icon,title,description])=>`<article class="service"><span class="service-icon" aria-hidden="true">${icon}</span><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="#contato" data-service="${esc(title)}">Conversar sobre o projeto <span>↗</span></a></article>`).join('');
document.querySelector('#technologies').innerHTML=TECHNOLOGIES.map(([title,items,note])=>`<article><h3>${esc(title)}</h3><p>${items.map(esc).join(' · ')}</p><small>${esc(note)}</small></article>`).join('');
const menu=document.querySelector('.menu'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>700)closeMenu();});
const dialog=document.querySelector('#project-dialog');
document.querySelector('#projects').addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(!btn)return;const p=PROJECTS.find(p=>p.id===btn.dataset.project);document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">${esc(p.category)}</p><h2>${esc(p.name)}</h2><img src="assets/${esc(p.id)}.svg" alt="Prévia ilustrativa de ${esc(p.name)}"><h3>Contexto e objetivo</h3><p>${esc(p.description)}</p><h3>Problema que procura resolver</h3><p>${esc(p.problem)}</p><h3>Funcionalidades implementadas</h3><p>${p.features.length?p.features.map(esc).join(' · '):'A confirmar com Sonego. O escopo apresentado é uma proposta, sem confirmação de implementação.'}</p><h3>Tecnologias</h3><p>${p.technologies.map(esc).join(' · ')} — lista prevista; confirmar uso no projeto real.</p><h3>Desafios técnicos</h3><p>${esc(p.challenges||'Informação ainda não fornecida.')}</p><h3>Aprendizados</h3><p>${esc(p.learnings||'Informação ainda não fornecida.')}</p>${p.screenshots.filter(safeUrl).map(url=>`<img src="${esc(safeUrl(url))}" alt="Captura adicional de ${esc(p.name)}" loading="lazy">`).join('')}<div class="actions">${external(p.demo,'Demonstração')}${external(p.repository,'Código no GitHub')}</div><p class="fine">${p.demo||p.repository?'':'Links e capturas reais ainda não informados.'}</p>`;dialog.setAttribute('aria-label',`Detalhes de ${p.name}`);dialog.showModal();});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const phoneValid=()=>/^\d{10,15}$/.test(CONFIG.whatsapp);
const emailValid=()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email);
function whatsappUrl(message){return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;}
const links=document.querySelector('#contact-links');
if(phoneValid()){const a=document.createElement('a');a.className='button';a.textContent='Conversar no WhatsApp ↗';a.href=whatsappUrl('Olá! Conheci seu portfólio e gostaria de conversar sobre a criação de um site para minha empresa.');a.target='_blank';a.rel='noopener noreferrer';links.append(a);document.querySelector('#contact-note').textContent='O formulário abre o WhatsApp com sua mensagem preenchida. Você revisa e envia na conversa.';document.querySelector('#contact-form button').innerHTML='Continuar no WhatsApp <span>↗</span>';}
if(emailValid()){const a=document.createElement('a');a.href=`mailto:${CONFIG.email}`;a.textContent='Enviar e-mail ↗';a.className='text-link';links.append(a);}
links.insertAdjacentHTML('beforeend',external(CONFIG.github,'GitHub')+external(CONFIG.linkedin,'LinkedIn'));
const form=document.querySelector('#contact-form');
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const map={'Sites institucionais':'Site institucional','Landing pages':'Landing page','Sistemas web':'Sistema web','APIs e bancos de dados':'Integração de API ou banco de dados','Manutenção e melhorias':'Manutenção e melhorias'};form.elements.type.value=map[a.dataset.service];}));
form.addEventListener('submit',e=>{e.preventDefault();const contact=form.elements.contact;contact.setCustomValidity('');const value=contact.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)&&value.replace(/\D/g,'').length<8){contact.setCustomValidity('Informe um e-mail válido ou um telefone com pelo menos 8 dígitos.');}if(!form.reportValidity())return;const data=new FormData(form);const msg=`Olá, Sonego! Meu nome é ${data.get('name').trim()}.\nContato: ${value}\nProjeto: ${data.get('type')}\nDescrição: ${data.get('description').trim()}\nOrçamento: ${data.get('budget')||'A conversar'}`;if(phoneValid())window.open(whatsappUrl(msg),'_blank','noopener,noreferrer');else document.querySelector('#form-status').textContent='Mensagem validada. O WhatsApp de Sonego ainda não foi configurado; nenhum dado foi enviado.';});
form.elements.contact.addEventListener('input',()=>form.elements.contact.setCustomValidity(''));
if(CONFIG.testimonials.length){document.querySelector('#testimonials').hidden=false;document.querySelector('#testimonial-list').innerHTML=CONFIG.testimonials.map(t=>`<blockquote><p>${esc(t.comment)}</p><cite>${esc(t.name)} · ${esc(t.role)}</cite></blockquote>`).join('');}
