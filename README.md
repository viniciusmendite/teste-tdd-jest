## Teste TDD com Jest

Foi criado uma aplicação de login com autenticação JWT, e com isso foi realizado alguns testes de autenticação. <br/>

Durante o desenvolvimento dos testes, foram usadas algumas bibliotecas para o código não ficar massante e também obter produtividade. Como por exemplo, a lib factory-girl, que permite fazer a multiplicação de dados repetitivos, a lib faker, que permite obter dados inexistentes de forma randômica. <br/>

O banco de dados usado foi o Postgres para armazenar os dados em desenvolvimento. No caso dos testes, optei por utilizar outro banco relacional, o sqlite3. O sqlite3 serve apenas para armazenar os dados gerados nos testes., que logo são destruídos. <br/>

Deixei os arquivos **_.env_** e **_.env.test_** disponíveis para visualização das variáveis de ambiente utilizadas. Mas no caso de uma aplicação real, é interessante incluí-los no _.gitignore_.

### Bibliotecas utilizadas

- bcryptjs
- cross-env
- dotenv
- express
- factory-girl
- faker
- jsonwebtoken
- pg
- pg-hstore
- sequelize
- jest
- nodemon
- sequelize-cli
- sqlite3
- supertest
