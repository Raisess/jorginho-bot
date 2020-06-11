# JORGINHOBOT DOCS

## Requisitos

* [NodeJS versão LTS](https://nodejs.org/en/download/)

## Instalando

Baixe o bot no [repositório oficial](https://github.com/Raisess/jorginho-bot).

Extraia os arquivos, entre na pasta do bot e em seguida use o comando:

```shell
  npm install
```

ou clique duas vezes sobre o arquivo **install.bat**.

## Configurando o bot

O bot vem com um arquivo chamado **credencials.template.json** dentro da pasta **src**, você pode usá-lo como o arquivo de configuração ou criar um arquivo chamado **credencials.json** no mesmo diretório para ignorar o arquivo template.

A estrutura do arquivo de credenciais é esta:

```json
  {
    "USERNAME": "<bot-account-username>",
    "PASSWORD": "<bot-account-password-token | make this pass token here: https://twitchapps.com/tmi/>",
    "CHANNELS": ["...<bot-channels-array>"],
    "STREAMER": "<streamer-account-username>",
    "SOCIALS": ["<twitter-user>", "<instagram-user>"],
    "GIT": "<streamer-github-username>"
  }
```

*O USERNAME é o nome da conta do bot que pode ser a sua própira conta se preferir.*

*O PASSWORD do bot é um token que pode ser gerado [aqui](https://twitchapps.com/tmi/).*

*O campo CHANNELS é um array que contém os canais do chat **use o nome do seu perfil na twitch por exemplo**.*

## Rodando

Para rodar o bot use o comando:

```shell
  npm start
```

ou clique duas vezes sobre o arquivo **run.bat**.

## Comandos padrão

* !help - Ver a lista de comandos do bot.
* !hello - Dizer hello!
* !color < colorname | hex > - Mudar a cor do bot.
* !colorlist - Ver a lista de cores que o bot pode usar.
* !dice - Girar um dado de seis lados.
* **MOD** !ban < username > - Banir um úsuario do chat!
* **MOD** !clear - Limpar as mensagens do chat!
* !social - Redes sociais do streamer.
* !git - Link do github do streamer.