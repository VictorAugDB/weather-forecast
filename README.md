# Introdução
Essa é uma aplicação feita para facilitar o acesso a dados meteorológicos principalmente no brasil,
a aplicação consome a [Weather API](https://www.weatherapi.com/).
A aplicação trás dados como temperatura mínima e máxima para todas as capitais do Brasil para dar uma panorama geral ao usuário.
A aplicação também conta com busca por cidade, estado e país, trazendo dados mais detalhados para cada dia da semana, como sensação términa,
velocidade do vento em km/h, condição do tempo, umidade, temperatura média, tempraturas mínima e máxima.

A aplicação está hospedada [aqui](https://weather-forecast-khaki-phi.vercel.app/).
# Como rodar
1. Instale as dependencias
2. Clone o arquivo .env.example e coloque a API KEY da [Weather API](https://www.weatherapi.com/docs/#intro-request)
3. Rode o projeto
---
```shell
  pnpm i
  cp .env.example .env.local
  pnpm run dev
```
---
```shell
  npm i
  cp .env.example .env.local
  npm run dev
```
---
```shell
  yarn
  cp .env.example .env.local
  yarn run dev
```
---
