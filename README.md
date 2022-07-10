# Revisão On-15

## O que é um endpoint?

- Especificação do caminho da rota 

Um endpoint de um web service é a URL onde seu serviço pode ser acessado por uma aplicação cliente. 

Exemplo: Endpoint para cadastrar um estudante.
/estudante/cadastrar

Uma API é um conjunto de rotinas, protocolos e ferramentas para construir aplicações.

APIs podem existir sem endpoints. Na lista de APIs do windows você pode verificar que a grande maioria trata de conteúdo local - como exibir janelas, ou como gerenciar o input de teclado e mouse.

Endpoints também podem existir sem APIs. Imagine uma implementação simples, que retorna apenas a data e hora do servidor; a simplicidade da operação não exige a implementação de uma API exclusivamente para isso.

Hoje em dia é comum se referir a uma coleção de endpoints pertencentes a um dado serviço como API, por proximidade e acoplamento; em muitos casos o serviço é desenhado e planejado tendo em mente a exposição via endpoints.