Passenger Transport Landing Page (Demo)

Este projeto é uma demonstração técnica de uma Landing Page para uma empresa fictícia de transporte de passageiros (fretamento, turismo e excursões).

Nota Importante: Este é um projeto de portfólio. As imagens foram obtidas em bancos gratuitos (Pexels) ou geradas por IA (Google Gemini), e os textos são meramente ilustrativos para demonstrar a aplicação em um cenário real de negócio.

Destaques Técnicos do Código:

Carrossel Nativo: Implementei um carrossel do zero (sem bibliotecas externas) no componente Home, utilizando setInterval para transição automática e lógica de estado para navegação.

Responsividade e Mobile Experience (UX)

O projeto foi desenvolvido sob a filosofia de adaptação dinâmica, garantindo uma navegação fluida tanto em desktops quanto em dispositivos móveis:

Mobile Friendly (Touch Events): O carrossel nativo possui suporte a gestos (onTouchStart, onTouchMove, onTouchEnd). Isso permite que usuários em dispositivos móveis deslizem as imagens com o dedo, simulando a experiência de um aplicativo nativo.

Layout Adaptativo com Media Queries: Utilizei pontos de interrupção (breakpoints) estratégicos para reorganizar a interface:

Otimização de Espaço: Em telas menores (abaixo de 490px), o cabeçalho e o carrossel reduzem sua escala e os botões de seta são ocultados para priorizar o conteúdo visual.

Flexibilidade de Colunas: Seções "Sobre Nós" e "Nossa Missão" passam para flex-direction: column, garantindo que o texto e as imagens fiquem legíveis e bem diagramados em qualquer largura de tela.

Animações de Scroll com Intersection Observer

Em vez de sobrecarregar o navegador com eventos de scroll comuns, utilizei a API Intersection Observer no App.jsx. As classes de animação (slideInLeftActive, toAppearActive e slideInRightActive) só são injetadas quando o componente entra no campo de visão do usuário. Garante que o site pareça "vivo" enquanto o usuário navega, mantendo uma performance de 60 FPS.
