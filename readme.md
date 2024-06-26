# 🙋‍♂️ Projeto SOLID e Clean Architecture

Neste repositório encontra-se o projeto criado na aula [SOLID + Clean Architecture: Projeto completo com NodeJS, Typescript, Express e Prisma](https://youtu.be/vkcTw9jgDTw) do [Doutorwaka](https://www.youtube.com/@doutorwaka).

No projeto, desenvolveremos uma ***API Rest*** que possibilitará o cadastro de produtos bem como ações de venda e de compra deste mesmo produto diminuindo ou aumentando o estoque respectivamente. Será possível também listar todos os produtos cadastrados.

# SOLID

O acrônimo ***SOLID*** é um conjunto de princípios de design de código que visam facilitar a manutenção e a evolução do software. Ele foi introduzido por Robert C. Martin em 2000 e é composto por cinco princípios:

- **S** - Single Responsibility Principle (Princípio da Responsabilidade Única)
- **O** - Open/Closed Principle (Princípio do Aberto/Fechado)
- **L** - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **I** - Interface Segregation Principle (Princípio da Segregação de Interfaces)
- **D** - Dependency Inversion Principle (Princípio da Inversão de Dependências)

# Clean Architecture

A ***Clean Architecture*** é um conjunto de práticas e técnicas que visam facilitar a manutenção e a evolução do software. Ela foi introduzida por [Robert C. Martin em 2012](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) e é composta por quatro camadas:

- **Domain** (Domínio) - Camada mais interna, onde se encontra as regras de negócio do sistema. Ela deve ser totalmente agnóstica em relação a qualquer tecnologia/infraestrutura.
- **Use Cases** (Casos de Uso) - Camada intermediária, que faz a orquestração do fluxo de dados entre a camada de domínio e a camada de infraestrutura. Cada caso de uso é uma intenção do usuário.
- **Infraestrutura** (Infra-estrutura) - Terceira camada, onde se encontram as implementações concretas das interfaces definidas na camada de domínio. Ela é responsável por lidar com detalhes de tecnologia e é a única camada que pode depender de frameworks e bibliotecas. É aqui que você irá encontrar os repositórios e os *controllers*, por exemplo.
- **External Interface** (Interface externa) - Camada mais externa, na qual usualmente não temos acesso. Geralmente é onde se encontram os dispositivos de entrada e saída, como a interface do usuário, banco de dados, web browsers, aplicativos móveis, etc. De forma geral, é aqui que residem os clientes da aplicação, o banco de dados, as APIs externas, etc.

## Para mais informações
Se quiser mais informações sobre o projeto, por favor me contate em [https://www.doutorwaka.com/contact](https://www.doutorwaka.com/contact).

## Mais sobre o autor

Olá! Tudo bem? Eu me chamo José Eurípedes, tenho 36 anos e sou doutor em Ciência da Computação. Escrevi minhas primeiras linhas de código com 13 anos e hoje tenho uma grande paixão em ensinar tudo o que aprendi nessa minha caminhada de 23 anos de experiência.

Para saber mais sobre mim, basta acessar minhas redes sociais:
  - [Meu Curso de Programação](https://www.doutorwaka.com/)
  - [YouTube](https://www.youtube.com/@doutorwaka)
  - [Instagram](https://instagram.com/doutorwaka)
  - [TikTok](https://www.tiktok.com/@doutorwaka)
  - [Site Pessoal](https://www.doutorwaka.com/)
