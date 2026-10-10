# Portfólio Enzo Sonego

## Estrutura
```
dist/
  index.html
  style.css
  script.js
  assets/ (favicon e três capturas reais em WebP)
  robots.txt
  sitemap.xml
```

Abra `dist/index.html` no navegador, ou use um servidor estático. Não há dependências de produção nem frameworks.

## Personalizar
Edite CONFIG no início de `dist/script.js`: WhatsApp internacional apenas com números, e-mail, GitHub, LinkedIn e disponibilidade. WhatsApp, e-mail e GitHub já estão configurados. Contatos vazios não geram links. Edite PROJECTS para confirmar categorias, funcionalidades reais, desafios, aprendizados, tecnologias, links e capturas. As imagens WebP são capturas reais: TecHUB publicado, O Mundo em Conflito e War News Web nas versões locais fornecidas. As descrições se baseiam nos arquivos desses projetos. Os links GitHub foram fornecidos pelo proprietário, que confirmou serem repositórios privados; o acesso exige permissão. Edite SERVICES para remover serviços que você ainda não entrega e TECHNOLOGIES para atualizar sua lista. Depoimentos ficam ocultos enquanto CONFIG.testimonials está vazio. A marca e apresentação estão no HTML. Você pode trocar o monograma por sua foto.

## Publicação gratuita
1. Mantenha os arquivos e `assets/` juntos, sem renomear referências.
2. No GitHub, crie um repositório para seu portfólio.
3. Envie o conteúdo de `dist/` para a raiz desse repositório.
4. Em Settings → Pages, selecione Deploy from a branch, branch main e pasta /(root), e salve. Alternativamente, no Netlify, use a opção de deploy manual e envie a pasta dist, ou conecte o repositório sem comando de build e com diretório de publicação na raiz.
5. Abra a URL fornecida e teste navegação, menu no celular, detalhes e contatos. Configure os contatos antes de divulgar.
6. Para atualizar, edite os arquivos e envie um novo commit; em deploy manual, envie a pasta novamente.
7. Para domínio próprio, cadastre-o nas configurações da hospedagem e siga os registros DNS informados pelo provedor. Atualize og:url, sitemap.xml e a referência Sitemap no robots.txt usando esse domínio.

O formulário não armazena nem envia dados a um servidor. Com WhatsApp configurado, abre a mensagem preenchida para o visitante revisar e enviar. Envio por formulário exige um serviço externo de recebimento ou um back-end. PHP e bancos de dados precisam de hospedagem compatível: este portfólio é estático. Não há serviços de analytics nem fontes externas.

A apresentação pessoal inclui idade e etapa escolar fornecidas em outubro de 2026. Atualize esses dados com o tempo.
