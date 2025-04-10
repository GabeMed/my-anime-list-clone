# myAnimeListClone

Esse é um aplicativo web desenvolvido com **React** e **TypeScript** que utiliza a **Jikan API** para buscar e exibir informações sobre animes. O projeto usa **Chakra UI** para a interface e **Axios** para realizar requisições HTTP, proporcionando uma experiência fluida e moderna para os fãs de anime.

## ✨ Features

- **Busca de Animes por Gênero**: Explore animes filtrados por gêneros específicos.
- **Interface Responsiva**: Desenvolvido com Chakra UI para garantir um design moderno e adaptável.
- **Hooks Personalizados**: Utiliza hooks React para organização de lógica de requisição HTTP.
- **TypeScript**: Tipagem forte para maior segurança e produtividade no desenvolvimento.

## 📚 Tecnologias Utilizadas

- **React** – Biblioteca para a construção de interfaces de usuário.
- **TypeScript** – Superset do JavaScript com tipagem estática.
- **Chakra UI** – Biblioteca de componentes de interface acessíveis e elegantes.
- **Axios** – Cliente HTTP para consumo da Jikan API.
- **Jikan API** – API não oficial para acesso aos dados do MyAnimeList.

## 📁 Estrutura do Projeto

```
Anime-Genres-Explorer/
├── public/                 # Arquivos públicos (index.html, favicon, etc.)
├── src/
│   ├── assets/             # Recursos estáticos (imagens, ícones, etc.)
│   ├── components/         # Componentes reutilizáveis do React
│   ├── hooks/              # Custom hooks (ex.: useData, useAnimeByGenre)
│   ├── services/           # Configuração do Axios e serviços de API
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada da aplicação
├── package.json            # Gerenciamento de dependências
└── tsconfig.json           # Configurações do TypeScript
```

## ⚡ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/GabeMed/my-anime-list-clone.git
cd my-anime-list-clone
```

2. Instale as dependências:

```bash
npm install
```

## 🔧 Uso

Inicie a aplicação em ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

- Selecione um gênero na barra lateral para visualizar animes relacionados.

## 👨‍💻 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Adiciona nova feature'`
4. Envie para o GitHub: `git push origin minha-feature`
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido por [Gabriel Medeiros](https://github.com/GabeMed)


