# JORGINHOBOT DOCS 🤖

## Requisitos 🔮

* [NodeJS versão LTS](https://nodejs.org/en/download/)

## Instalando 💡

Baixe o bot no [repositório oficial](https://github.com/Raisess/jorginho-bot).

Extraia os arquivos, entre na pasta do bot e em seguida use o comando:

```shell
  npm install
```

ou clique duas vezes sobre o arquivo **install.bat**.

## Configurando o bot ⚙

O bot vem com um arquivo chamado **credencials.template.json** dentro da pasta **src**, você pode usá-lo como o arquivo de configuração ou criar um arquivo chamado **credencials.json** no mesmo diretório para ignorar o arquivo template.

A estrutura do arquivo de credenciais é esta:

```json
  {
    "USERNAME": "<bot-account-username>",
    "PASSWORD": "<bot-account-password-token | make this pass token here: https://twitchapps.com/tmi/>",
    "CHANNELS": ["...<bot-channels-array>"],
    "STREAMER": "<streamer-account-username>",
    "SOCIALS": ["<twitter-user>", "<instagram-user>"],
    "GIT": "<streamer-github-username>",
    "PREFIX": "<bot-prefix-simbol | default: !>"
  }
```

*O USERNAME é o nome da conta do bot que pode ser a sua própira conta se preferir.*

*O PASSWORD do bot é um token que pode ser gerado [aqui](https://twitchapps.com/tmi/).*

*O campo CHANNELS é um array que contém os canais do chat **use o nome do seu perfil na twitch por exemplo**.*

## Rodando 🚀

Para rodar o bot use o comando:

```shell
  npm start
```

ou clique duas vezes sobre o arquivo **run.bat**.

## Comandos padrão 🕹

* !help - Ver a lista de comandos do bot.
* !hello - Dizer hello!
* !color < colorname | hex > - Mudar a cor do bot.
* !colorlist - Ver a lista de cores que o bot pode usar.
* !dice - Girar um dado de seis lados.
* **MOD** !ban < username > - Banir um úsuario do chat!
* **MOD** !clear - Limpar as mensagens do chat!
* !social - Redes sociais do streamer.
* !git - Link do github do streamer.
* !jorge - Link para baixar o bot jorginho.

## Criando novos comandos 🛠

Os comandos do Jorge nada são do que apenas modulos CommomJS, para criar um novo modulo é fácil.
Todos os comandos do Jorge devem ficar na Pasta **commands**, onde fica o arquivo **list.js** que é o controlador do comandos.

Estrutura de um comando:

```javascript
  // comando hello.js
  module.exports = (client, channel, user) => client.say(
    channel,
    `hello @${user.username}!`
  );
```

Agora veja como fica a estrutura no modulo **list** do arquivo **list.js**:
```javascript
  const hello = require('./hello');

  module.exports = [
    {
      cmd: 'hello', // nome do comando | no chat fica: !hello (se o prefixo definido para "!")
      description: 'Dizer hello!', // descrição do comando
      // função de callback executada pelo comando
      func: (client, channel, user) => hello(
        client,
        channel,
        user
      )
    }
  ]
```

A função de callback do comando recebe **quatro** parâmetros por padrão:

```javascript
  // ...

  module.exports = [
    {
      cmd: '<name>',
      description: '<description>',
      // função de callback executada pelo comando
      func: (client, channel, user, message) => command(
        client,
        channel,
        user,
        message
      )
    }
  ]
```

Sobre os parâmetros da função de callback:

* client - É o parametro que executa as funções do cliente (bot), ou seja, enviar mensagens (client.say(canal< string >, mensagem< string >)).
* channel - É a variável que armazena o canal onde o comando foi executado, um exemplo de uso dela é na função **client.say(channel, msg)**, onde ela deve ser o **primeiro parâmetro da função**.
* user - armazena os dados do usuário que executou o comando, por exemplo **user.username** entrega o nome do usuário.
* message - armazena a mensagem enviada pelo usuário.

## Expressions e Responses 🤓

As **expressions** podem ser qualquer palavra ou frase pré defina que tem uma respota pré definida, chamada de **response**, por exemplo:

```
  fulano: osh
  jorginhobot: osh
  fulano: oi
  jorginhobot: oi, bom dia
```

Essas palavras ou frases são definidas nos respectivos arquivos **expressions.json** e **responses.json** que estão na pasta **data**.

Esses dados estão salvos no formato de array, ex:

Arquivo expressions.json:
```json
  [
    "osh",
    "oi"
  ]
```

Arquivo responses.json:
```json
  [
    "osh",
    "oi, bom dia"
  ]
```

Onde as **expressions** devem estar de acordo com as **responses** isso em relação ao indice de busca de um array, o primeiro indice, no exemplo *"osh"*, é o mesmo em ambos os arquivos o que significa que quando a palavra *"osh"* for dita no chat o bot irá responder também com *"osh"*.