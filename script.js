// BANCO DE DADOS DE QUESTÕES (6 Níveis x 15 Questões = 90 Questões)
const db = {
    nivel1: {
        title: "Nível 1: Fundamentos",
        questions: [
            // Repetindo as bases essenciais para quem começa aqui
            { q: "(Git) O que é um Repositório?", opts: { a: "Uma pasta rastreada pelo Git.", b: "Um antivírus.", c: "Linguagem de programação." }, ans: "a", fb: "Um repositório é o local onde o Git guarda o histórico do projeto." },
            { q: "(JSONB) O que o 'B' em JSONB significa?", opts: { a: "Basic", b: "Backup", c: "Binary" }, ans: "c", fb: "Binary. O dado é convertido para formato binário no banco, agilizando buscas." },
            { q: "(Git) Qual comando salva alterações localmente?", opts: { a: "git push", b: "git commit", c: "git pull" }, ans: "b", fb: "O commit tira uma 'foto' do estado atual do seu código." },
            { q: "(JSONB) Qual a vantagem do JSONB sobre JSON?", opts: { a: "Suporta indexação e buscas rápidas.", b: "Ocupa menos espaço no disco.", c: "Nenhuma." }, ans: "a", fb: "O JSONB permite criar índices (como GIN) para buscas performáticas." },
            { q: "(Git) Como baixar um projeto do GitHub?", opts: { a: "git download", b: "git clone", c: "git get" }, ans: "b", fb: "O comando git clone faz a cópia exata do servidor para sua máquina." },
            { q: "(JSONB) Estrutura base de um JSON:", opts: { a: "Linhas e Colunas", b: "Pares de Chave e Valor", c: "Tabelas interligadas" }, ans: "b", fb: "JSON é composto por chaves (nomes) e valores correspondentes." },
            { q: "(Git) O que é uma Branch?", opts: { a: "Um erro no código.", b: "Uma ramificação paralela de desenvolvimento.", c: "Uma senha de acesso." }, ans: "b", fb: "Branches permitem testar código novo sem afetar a linha principal." },
            { q: "(JSONB) Como o JSONB lida com chaves duplicadas no insert?", opts: { a: "Dá erro.", b: "Soma os valores.", c: "Mantém apenas a última declarada." }, ans: "c", fb: "Ele limpa duplicações automaticamente, preservando o último valor." },
            { q: "(Git) Comando para enviar código para a nuvem?", opts: { a: "git push", b: "git send", c: "git upload" }, ans: "a", fb: "Push empurra seus commits locais para o repositório remoto." },
            { q: "(JSONB) Qual o operador para extrair valor como texto puro?", opts: { a: "->", b: "->>", c: "@>" }, ans: "b", fb: "O operador ->> retorna o valor decodificado como string (texto)." },
            { q: "(Git) Diferença entre Git e GitHub?", opts: { a: "São a mesma coisa.", b: "Git é local (software), GitHub é a nuvem (serviço).", c: "GitHub é para Mac." }, ans: "b", fb: "Git é a tecnologia; GitHub é o site onde os repositórios ficam salvos." },
            { q: "(JSONB) O que o operador '?' faz?", opts: { a: "Deleta uma chave.", b: "Verifica se uma chave de texto existe no topo do JSON.", c: "Multiplica valores." }, ans: "b", fb: "Ele responde se determinada string existe como chave no JSONB." },
            { q: "(Git) Para que serve o .gitignore?", opts: { a: "Ignorar bugs.", b: "Dizer ao Git quais arquivos não rastrear/enviar.", c: "Deletar pastas." }, ans: "b", fb: "Evita o envio de senhas e arquivos inúteis ao GitHub." },
            { q: "(JSONB) Símbolo que define um Objeto no JSON:", opts: { a: "{ } (Chaves)", b: "[ ] (Colchetes)", c: "( ) (Parênteses)" }, ans: "a", fb: "Objetos usam {}, enquanto Arrays (listas) usam []." },
            { q: "(Git) Como trazer novidades da nuvem pro seu PC?", opts: { a: "git push", b: "git update", c: "git pull" }, ans: "c", fb: "O git pull baixa as alterações remotas e as mescla no seu código local." }
        ]
    },
    nivel2: {
        title: "Nível 2: Iniciante Prático",
        questions: [
            { q: "(Git) Antes do commit, qual comando prepara os arquivos?", opts: { a: "git status", b: "git add", c: "git save" }, ans: "b", fb: "O 'git add' move as mudanças para o 'staging area' antes do commit." },
            { q: "(JSONB) Como verificar se 'email' está dentro da coluna jsonb 'dados'?", opts: { a: "dados ? 'email'", b: "dados -> 'email'", c: "dados LIKE 'email'" }, ans: "a", fb: "O operador '?' checa se a chave 'email' existe no nível raiz." },
            { q: "(Git) Como ver o histórico dos últimos commits?", opts: { a: "git history", b: "git log", c: "git show" }, ans: "b", fb: "O 'git log' lista cronologicamente os commits feitos." },
            { q: "(JSONB) Se obj = {\"a\": 1, \"b\": 2}, o que retorna obj -> 'a'?", opts: { a: "O número 1 em formato numérico padrão.", b: "O valor 1, mas como tipo jsonb.", c: "A letra 'a'." }, ans: "b", fb: "O '->' extrai o dado mantendo o formato jsonb." },
            { q: "(Git) Qual comando cria uma nova branch chamada 'feature' e já muda pra ela?", opts: { a: "git checkout -b feature", b: "git branch feature", c: "git switch new feature" }, ans: "a", fb: "O atalho '-b' no checkout cria a branch e troca para ela imediatamente." },
            { q: "(JSONB) Como buscar usuários onde 'idade' dentro do JSON é 25?", opts: { a: "WHERE dados ->> 'idade' = '25'", b: "WHERE dados.idade = 25", c: "WHERE dados -> 'idade' = 25" }, ans: "a", fb: "Usando '->>' obtemos texto, então comparamos com a string '25'." },
            { q: "(Git) Como saber quais arquivos foram modificados hoje?", opts: { a: "git check", b: "git status", c: "git diff" }, ans: "b", fb: "O 'git status' mostra o estado atual do repositório (arquivos alterados/adicionados)." },
            { q: "(JSONB) Qual destes NÃO é um tipo válido no JSON?", opts: { a: "Boolean", b: "Date", c: "Array" }, ans: "b", fb: "JSON não tem tipo nativo de Data. Datas são enviadas como String." },
            { q: "(Git) O que é o comando 'git init'?", opts: { a: "Inicia o computador.", b: "Cria um repositório Git vazio em uma pasta.", c: "Apaga o projeto." }, ans: "b", fb: "Transforma uma pasta comum em um repositório rastreado pelo Git." },
            { q: "(JSONB) Função para extrair array jsonb e transformar em múltiplas linhas SQL:", opts: { a: "jsonb_explode()", b: "jsonb_array_elements()", c: "jsonb_to_rows()" }, ans: "b", fb: "Expande um array JSON para um conjunto de linhas de tabela." },
            { q: "(Git) Qual arquivo README é o padrão do GitHub para mostrar na página do repo?", opts: { a: "README.md", b: "LEIAME.txt", c: "index.html" }, ans: "a", fb: "O Markdown (.md) é a linguagem de marcação padrão lida pelo GitHub." },
            { q: "(JSONB) Operador usado para verificar contenção (se contém um obj específico):", opts: { a: "@>", b: "?|", c: "->" }, ans: "a", fb: "O '@>' verifica se o JSONB da esquerda contém totalmente o da direita." },
            { q: "(Git) O que fazer se alterar um arquivo e quiser descartar as alterações locais (antes do add)?", opts: { a: "git restore <arquivo>", b: "git delete <arquivo>", c: "git remove" }, ans: "a", fb: "O restore descarta modificações não 'staged', voltando ao último commit." },
            { q: "(JSONB) Como adicionar um valor dentro do JSONB no SQL UPDATE?", opts: { a: "Usando concat()", b: "Usando a função jsonb_set()", c: "Usando jsonb_insert()" }, ans: "b", fb: "jsonb_set altera ou adiciona chaves pontuais dentro do objeto." },
            { q: "(Git) Como enviar uma nova branch local para o GitHub pela primeira vez?", opts: { a: "git push", b: "git push -u origin <nome_branch>", c: "git upload branch" }, ans: "b", fb: "O '-u' (set-upstream) vincula a branch local à nova branch remota." }
        ]
    },
    nivel3: {
        title: "Nível 3: Intermediário",
        questions: [
            { q: "(Git) O que é um Pull Request (PR)?", opts: { a: "Pedido para deletar código.", b: "Pedido para mesclar sua branch em outra, passando por revisão.", c: "O mesmo que git pull." }, ans: "b", fb: "É a ferramenta padrão para revisão de código em equipe." },
            { q: "(JSONB) O que faz a query: WHERE dados ?| array['a', 'b']?", opts: { a: "Busca se contém a OU b.", b: "Deleta a e b.", c: "Gera erro." }, ans: "a", fb: "?| verifica se PELO MENOS UMA das chaves existe no objeto." },
            { q: "(Git) O que acontece em um Conflito de Merge?", opts: { a: "O Git apaga os dois arquivos.", b: "O Git pausa o merge para você decidir manualmente qual código manter.", c: "O GitHub cai." }, ans: "b", fb: "Conflitos exigem intervenção humana para unir partes que mexeram na mesma linha." },
            { q: "(JSONB) Como remover a chave 'senha' de um JSONB na tabela 'users'?", opts: { a: "UPDATE users SET info = info - 'senha';", b: "UPDATE users DELETE 'senha';", c: "DROP jsonb 'senha';" }, ans: "a", fb: "O operador de subtração '-' remove chaves diretamente." },
            { q: "(Git) Comando para mesclar a branch 'feature' na branch atual:", opts: { a: "git combine feature", b: "git merge feature", c: "git join feature" }, ans: "b", fb: "O merge integra o histórico de 'feature' para a sua branch atual." },
            { q: "(JSONB) Como converter uma linha relacional inteira para JSON?", opts: { a: "row_to_json()", b: "to_jsonb()", c: "Ambas funcionam, dependendo do tipo desejado (json/jsonb)." }, ans: "c", fb: "O Postgres possui funções robustas de conversão linha-para-json." },
            { q: "(Git) Para que serve fazer um 'Fork' no GitHub?", opts: { a: "Apagar um repositório.", b: "Criar uma cópia pessoal de um projeto de outra pessoa na sua conta.", c: "Atualizar a página." }, ans: "b", fb: "Permite contribuir em projetos Open Source sem ter permissão na origem." },
            { q: "(JSONB) Como navegar por objetos aninhados ({a: {b: 1}}) para pegar texto?", opts: { a: "dados -> 'a' ->> 'b'", b: "dados.a.b", c: "dados ->> 'a.b'" }, ans: "a", fb: "Você encadeia -> para descer os níveis e ->> no último para pegar o texto." },
            { q: "(Git) O que significa a pasta oculta '.git'?", opts: { a: "Vírus de sistema.", b: "É onde o Git armazena todo o banco de dados do histórico local.", c: "Lixeira do projeto." }, ans: "b", fb: "Apagar a .git destrói seu histórico, deixando apenas os arquivos normais." },
            { q: "(JSONB) Diferença de jsonb_set e || (concatenação)?", opts: { a: "|| não funciona em JSONB.", b: "jsonb_set edita em níveis profundos; || mescla objetos de primeiro nível.", c: "Nenhuma." }, ans: "b", fb: "O || faz merge de dois objetos no nível raiz ({a:1} || {b:2} = {a:1,b:2})." },
            { q: "(Git) Qual estado o arquivo entra após um 'git add'?", opts: { a: "Committed", b: "Modified", c: "Staged" }, ans: "c", fb: "O Stage (ou índice) é a área de preparação antes do commit final." },
            { q: "(JSONB) Qual tipo de índice é ideal para o operador @> em JSONB?", opts: { a: "B-Tree", b: "Hash", c: "GIN" }, ans: "c", fb: "GIN (Generalized Inverted Index) é otimizado para vasculhar elementos internos de arrays/jsonb." },
            { q: "(Git) Como visualizar quem alterou uma linha específica de um arquivo?", opts: { a: "git show-line", b: "git blame <arquivo>", c: "git log --lines" }, ans: "b", fb: "O git blame lista linha a linha com autor e hash do commit." },
            { q: "(JSONB) O que faz a função jsonb_agg()?", opts: { a: "Deleta tudo.", b: "Agrupa múltiplas linhas SQL em um único Array JSONB.", c: "Ordena alfabeticamente." }, ans: "b", fb: "Perfeito para endpoints de API, condensando JOINs num formato de lista." },
            { q: "(Git) O que faz a ferramenta GitHub Issues?", opts: { a: "Comunica a queda do servidor.", b: "Gerencia tarefas, bugs e requisições do projeto.", c: "Muda a senha." }, ans: "b", fb: "É um sistema integrado de tracking de tarefas e bugs." }
        ]
    },
    nivel4: {
        title: "Nível 4: Avançado",
        questions: [
            { q: "(Git) Precisou pausar o trabalho atual para corrigir um bug rápido na main. O que usar?", opts: { a: "git stash", b: "git drop", c: "git pause" }, ans: "a", fb: "O stash 'guarda' as modificações sujas em uma gaveta temporária para você limpar a árvore de trabalho." },
            { q: "(JSONB) Como extrair um valor de caminho profundo de uma vez (ex: a.b.c)?", opts: { a: "dados #>> '{a,b,c}'", b: "dados ->> 'a.b.c'", c: "dados.path('a','b','c')" }, ans: "a", fb: "O operador #>> (e #>) navega por um array de texto especificando o caminho exato." },
            { q: "(Git) O que o 'git rebase' faz diferentemente do merge?", opts: { a: "Deleta a branch atual.", b: "Pega seus commits locais e os reaplica no TOPO da branch alvo, criando um histórico linear.", c: "Criptografa." }, ans: "b", fb: "O rebase evita o 'commit de merge' mantendo a linha do tempo limpa e reta." },
            { q: "(JSONB) O operador @? faz o que no Postgres 12+?", opts: { a: "Compara Regex.", b: "Verifica se uma query JSONPath retorna algum resultado.", c: "Gera dados nulos." }, ans: "b", fb: "Suporte poderoso ao padrão SQL/JSON path language." },
            { q: "(Git) Como reescrever e juntar os 3 últimos commits locais em um só?", opts: { a: "git commit --amend", b: "git rebase -i HEAD~3", c: "git reset --hard" }, ans: "b", fb: "O rebase interativo (-i) permite dar 'squash' (esmagar) commits menores em um grande." },
            { q: "(JSONB) jsonb_typeof('\"123\"'::jsonb) retorna o quê?", opts: { a: "number", b: "string", c: "object" }, ans: "b", fb: "Como está entre aspas duplas dentro das aspas simples, é interpretado como string JSON." },
            { q: "(Git) Qual o perigo do comando 'git push --force'?", opts: { a: "Ele formata o PC.", b: "Sobrescreve o histórico do repositório remoto, podendo apagar commits de colegas.", c: "Ele ignora senha." }, ans: "b", fb: "Nunca force push em branches públicas/compartilhadas." },
            { q: "(JSONB) Uma tabela com 10M de linhas usa GIN na coluna dados. Qual query usa o índice?", opts: { a: "dados ->> 'nome' = 'João'", b: "dados @> '{\"nome\": \"João\"}'", c: "dados LIKE '%João%'" }, ans: "b", fb: "A query usando @> utiliza o índice GIN perfeitamente. Extrações diretas (->>) exigem B-Tree funcional." },
            { q: "(Git) Fiz commit na branch errada (ainda local). Qual comando remove o commit, mas MANTÉM os arquivos modificados na máquina?", opts: { a: "git reset --hard HEAD~1", b: "git reset --soft HEAD~1", c: "git rm" }, ans: "b", fb: "O --soft volta o histórico, mas deixa os arquivos alterados intactos no stage." },
            { q: "(JSONB) Como excluir um elemento específico de um array jsonb pelo índice (ex: deletar o item 0)?", opts: { a: "array - 0", b: "json_remove(array, 0)", c: "array - '0'" }, ans: "a", fb: "O operador - com um número inteiro remove o elemento do array baseado no índice." },
            { q: "(Git) O que faz a automação GitHub Actions?", opts: { a: "Edita imagens.", b: "Executa rotinas de CI/CD (testes, deploys) baseadas em eventos do repositório.", c: "Mina cripto." }, ans: "b", fb: "É o motor de esteiras automatizadas embutido no GitHub (YAML files)." },
            { q: "(JSONB) Para criar um índice em uma chave ESPECÍFICA (ex: 'cpf') extraída do jsonb, você usa:", opts: { a: "CREATE INDEX ON users ((dados->>'cpf'));", b: "CREATE INDEX GIN ON users ('cpf');", c: "Não é possível." }, ans: "a", fb: "Isso é um índice funcional B-Tree, muito mais rápido se você consulta sempre por essa chave exata." },
            { q: "(Git) O que é o comando 'git cherry-pick'?", opts: { a: "Baixa apenas arquivos vermelhos.", b: "Pega um commit específico de outra branch e o aplica na sua branch atual.", c: "Apaga logs antigos." }, ans: "b", fb: "Ótimo para 'pescar' uma correção de bug feita em outra branch sem precisar fazer merge de tudo." },
            { q: "(JSONB) A função jsonb_strip_nulls() serve para:", opts: { a: "Converter null em string vazia.", b: "Remover todos os pares onde o valor é nulo (null) do objeto JSONB.", c: "Travar a tabela." }, ans: "b", fb: "Limpa o objeto JSON reduzindo seu tamanho final." },
            { q: "(Git) A tag no Git (ex: v1.0.0) normalmente aponta para o quê?", opts: { a: "Uma branch infinita.", b: "Um hash de commit específico, servindo como marcação de release.", c: "Um usuário." }, ans: "b", fb: "Tags são marcações fixas, ideais para versionamento semântico de entregas." }
        ]
    },
    nivel5: {
        title: "Nível 5: Especialista",
        questions: [
            { q: "(Git) Você deletou acidentalmente uma branch não unida (unmerged) e perdeu commits. Qual comando salva sua vida achando hashes perdidos?", opts: { a: "git reflog", b: "git revert", c: "git search" }, ans: "a", fb: "O reflog grava todo movimento do HEAD local por 30 dias, mesmo commits 'órfãos'." },
            { q: "(JSONB) Você precisa transformar um array literal [1,2,3] no SQL para JSONB. Qual o cast?", opts: { a: "to_jsonb(ARRAY[1,2,3])", b: "ARRAY[1,2,3]::jsonb", c: "jsonb_array(1,2,3)" }, ans: "a", fb: "Usar a função to_jsonb é seguro para arrays SQL e tipos complexos." },
            { q: "(Git) Como desfazer um commit problemático em uma branch pública sem reescrever histórico?", opts: { a: "git reset --hard", b: "git revert <hash>", c: "git rebase" }, ans: "b", fb: "Revert cria um NOVO commit que inverte as mudanças antigas, mantendo a paz na equipe." },
            { q: "(JSONB) O que jsonb_path_query(dados, '$.users[*]?(@.age > 18)') faz?", opts: { a: "Erro de sintaxe.", b: "Usa JSONPath para extrair usuários maiores de 18 de um array complexo.", c: "Retorna true/false." }, ans: "b", fb: "Postgres possui engine JSONPath embutida para buscas altamente avançadas e declarativas." },
            { q: "(Git) Qual o objetivo de um arquivo .gitmodules?", opts: { a: "Controlar sub-repositórios aninhados (submodules).", b: "Configurar atalhos.", c: "Acelerar push." }, ans: "a", fb: "Submodules permitem colocar um repositório Git inteiro dentro de outro (ex: bibliotecas genéricas)." },
            { q: "(JSONB) Se você fizer uma atualização concorrente complexa em colunas JSONB isoladas via ORM, o que pode ocorrer?", opts: { a: "Nenhum problema.", b: "Condição de corrida se ambos lerem o objeto inteiro, editarem em memória e sobreescreverem.", c: "Deadlock instantâneo." }, ans: "b", fb: "Sempre que possível use jsonb_set e || diretamente no banco para atomicidade." },
            { q: "(Git) O que são 'Git Hooks'?", opts: { a: "Scripts acionados automaticamente em eventos do Git (ex: pre-commit).", b: "Um cliente visual Git.", c: "Chaves SSH." }, ans: "a", fb: "Comuns para rodar linters localmente. Ficam na pasta .git/hooks." },
            { q: "(JSONB) Diferença entre ? e ?& no PostgreSQL:", opts: { a: "? verifica uma chave; ?& verifica se TODAS as chaves de um array existem no JSONB.", b: "Nenhuma.", c: "?& concatena." }, ans: "a", fb: "?| é o 'OR' (alguma existe), ?& é o 'AND' (todas existem)." },
            { q: "(Git) Você quer clonar um repo gigantesco, mas só o último estado (sem histórico antigo) para economizar disco.", opts: { a: "git clone --depth 1 <url>", b: "git clone --fast", c: "git clone --latest" }, ans: "a", fb: "O Shallow Clone (--depth 1) baixa apenas o último commit." },
            { q: "(JSONB) O que ocorre se aplicarmos DISTINCT em uma consulta com colunas json vs jsonb?", opts: { a: "jsonb falha, json funciona.", b: "json falha, jsonb funciona.", c: "Ambos falham." }, ans: "b", fb: "O tipo json não possui operador de igualdade estabelecido, jsonb possui. Portanto, DISTINCT, ORDER BY só funcionam nativamente no jsonb." },
            { q: "(Git) Para que serve a funcionalidade 'CODEOWNERS' do GitHub?", opts: { a: "Pagar desenvolvedores.", b: "Definir automaticamente quem deve aprovar um PR baseado na pasta/arquivo alterado.", c: "Bloquear clones." }, ans: "b", fb: "Excelente para arquiteturas de monorepo corporativas." },
            { q: "(JSONB) Como inserir uma quebra de linha em uma string JSONB?", opts: { a: "Usando \\n (escapado)", b: "Dando enter.", c: "Proibido no JSON." }, ans: "a", fb: "Caracteres de controle devem ser escapados adequadamente segundo a RFC do JSON." },
            { q: "(Git) Qual é a finalidade do 'git bisect'?", opts: { a: "Dividir arquivos.", b: "Achar o commit exato que introduziu um bug via busca binária no histórico.", c: "Compactar o banco." }, ans: "b", fb: "Bisect automatiza testes pelo histórico até achar o hash culpado (o commit ruim)." },
            { q: "(JSONB) O que é o JSONB GIN opclass 'jsonb_path_ops'?", opts: { a: "Índice que não suporta o operador @>.", b: "Índice focado apenas na contenção (@>), menor e mais rápido que o GIN padrão.", c: "Um erro." }, ans: "b", fb: "Se você só vai usar @>, criar o GIN com jsonb_path_ops salva espaço brutal de disco." },
            { q: "(Git) O comando 'git fetch origin' faz o quê comparado ao pull?", opts: { a: "Apaga origin.", b: "Baixa os commits novos, mas NÃO aplica na sua branch atual (não faz merge).", c: "Faz push oculto." }, ans: "b", fb: "Útil para olhar o que mudou no remoto antes de integrar no seu código." }
        ]
    },
    final: {
        title: "Avaliação Master: Cenários de Crise e Otimização",
        questions: [
            { q: "CENÁRIO: A AWS caiu, o repo remoto principal foi apagado do GitHub. O que a equipe ainda possui?", opts: { a: "Nada, o código sumiu.", b: "O histórico completo descentralizado nos PCs locais de quem tinha feito clone recente.", c: "Apenas arquivos PDF." }, ans: "b", fb: "A maior força do Git: cada clone é um backup autônomo. Basta recriar no GitHub e dar push." },
            { q: "CENÁRIO: LGPD! Você precisa expurgar a chave 'ssn' (CPF) de 10 milhões de JSONs. Qual a forma performática de UPDATE?", opts: { a: "UPDATE users SET data = data - 'ssn' WHERE data ? 'ssn';", b: "Fazer via Python ORM num for-loop.", c: "UPDATE users SET data = jsonb_set(data, '{ssn}', null);" }, ans: "a", fb: "A filtragem WHERE usando o operador ? (com índice) evita reescrever linhas que não possuem a chave, poupando I/O violento do banco." },
            { q: "CENÁRIO: Vazou token no GitHub num commit há 5 dias. Foram feitos 20 commits depois. Padrão de mitigação:", opts: { a: "git revert do commit 5 dias atrás.", b: "Revogar a credencial na fonte imediatamente, pois o vazamento já ocorreu.", c: "Tornar repo privado e usar BFG Repo-Cleaner sem revogar." }, ans: "b", fb: "Tokens vazados devem ser considerados comprometidos no milissegundo do push." },
            { q: "CENÁRIO: Um cliente usa array JSONB `tags = [\"premium\", \"ativo\"]`. A query `WHERE tags @> '\"ativo\"'` falha. Por quê?", opts: { a: "O índice está quebrado.", b: "Sintaxe. O lado direito de @> deve ser o mesmo tipo, ou seja, um array JSONB: '[\"ativo\"]'.", c: "Array não usa @>." }, ans: "b", fb: "Regra de ouro do contenção: a estrutura base precisa bater. Array contém Array, Objeto contém Objeto." },
            { q: "CENÁRIO: A branch Main está protegida. Você desenvolveu uma feature imensa. Antes de aprovar, pediram squash. Como fazer do seu lado sem perder controle local?", opts: { a: "Criar PR novo.", b: "git rebase -i main (ou origin/main) na sua branch, aplicar s, salvar, testar e push --force.", c: "git commit amend 50x." }, ans: "b", fb: "Rebase interativo é a ferramenta do artesão de Git. O push --force (-f) é mandatório na SUA branch após reescrever o próprio histórico." },
            { q: "CENÁRIO: Ao invés de relacionamentos N:N imensos de 'likes', a equipe decidiu guardar IDs num JSONB `likes: [1,4,9]`. Qual o risco?", opts: { a: "Não pode haver JOIN.", b: "Perda da Integridade Referencial (Foreign Keys não funcionam em itens de array JSON).", c: "Nenhum." }, ans: "b", fb: "Se o post 4 for deletado, você terá um ID 4 'fantasma' no array do usuário. JSONB quebra regras clássicas de integridade relacional." },
            { q: "CENÁRIO: Conflito de Merge catastrófico (100+ arquivos). Sua branch é a certa. Qual atalho para dizer 'aceite os meus, ignore a main' temporariamente?", opts: { a: "git checkout --ours .", b: "git clean -f", c: "Apagar tudo." }, ans: "a", fb: "--ours pega a sua versão no conflito, --theirs pega a da branch que está entrando. Agiliza a resolução mecânica." },
            { q: "CENÁRIO: Criando um carrinho. A key 'items' cresceu para 2MB. Ao fazer UPDATE em 'status', o disco sofre. Por quê?", opts: { a: "Postgres é ruim.", b: "Devido ao MVCC, um UPDATE reescreve a tupla inteira (linha), incluindo o JSONB de 2MB não modificado.", c: "O JSONB gera lixo extra." }, ans: "b", fb: "JSONB massivo exige atenção: atualizar 1 byte dentro dele causa a reescrita de todo o bloco (arquitetura do PG). Antipattern comum." },
            { q: "CENÁRIO: Usando GitHub Actions para deploy em prod na AWS. Onde guardar a senha de acesso?", opts: { a: "No README oculto.", b: "Num arquivo env.json na raiz.", c: "No painel de 'Secrets' do repositório no GitHub." }, ans: "c", fb: "Secrets são criptografadas e injetadas de forma segura nos runners do Actions, sem ficarem expostas no código." },
            { q: "CENÁRIO: Necessidade de consultar keys com case-insensitive ('EmaiL' ou 'email') em milhões de registros JSONB. Ação recomendada:", opts: { a: "Usar ILIKE após ->> e criar índice Trigram/BTree com lower(dados->>'email').", b: "Mudar tudo para letras maiúsculas no banco.", c: "Nao é possível no PostgreSQL." }, ans: "a", fb: "Bancos de dados brilham quando você combina funções nativas com índices funcionais." },
            { q: "CENÁRIO: Qual a melhor prática de commits segundo o 'Conventional Commits'?", opts: { a: "Commits gigantes no fim da sexta.", b: "Mensagens semânticas (ex: feat: adiciona login, fix: corrige css).", c: "Usar nomes próprios no commit." }, ans: "b", fb: "Facilita rastreamento automatizado, relatórios de lançamento (changelogs) e legibilidade humana." },
            { q: "CENÁRIO: jsonb_populate_record() serve para?", opts: { a: "Criar dados falsos.", b: "Mapear o conteúdo de um objeto JSON diretamente para colunas de um Record/Tabela.", c: "Copiar bancos." }, ans: "b", fb: "Uma maneira mágica de inserir um JSON pesado direto nas colunas corretas de uma tabela." },
            { q: "CENÁRIO: Deletou um commit há 20 dias, mas a branch sumiu. Usando 'git fsck --lost-found', o que ocorre?", opts: { a: "O disco desfragmenta.", b: "O Git caça e extrai objetos pendentes/órfãos do banco de dados na pasta .git/lost-found.", c: "Nenhum resultado." }, ans: "b", fb: "Ferramenta de recuperação profunda quando o reflog não dá mais conta ou sofreu pruning." },
            { q: "CENÁRIO: Como garantir que logs no JSON não ultrapassem 100 itens usando a engine de banco de dados?", opts: { a: "É impossível no banco, deve ser feito no back-end.", b: "Usar jsonb_path_query com limite temporal.", c: "Não há um 'teto' automático. Deve ser checado no middleware antes do update ou via trigger PL/pgSQL." }, ans: "c", fb: "JSONB não possui constraints de tamanho de array. Lógica de truncamento requer triggers ou controle de app." },
            { q: "CENÁRIO: O que a tag '[skip ci]' no título do commit informa ao GitHub?", opts: { a: "Cancela pagamentos.", b: "Instrui o GitHub Actions a ignorar e não iniciar a pipeline de CI para este commit (útil para mudanças em readme/docs).", c: "Fecha a issue ligada." }, ans: "b", fb: "Otimiza minutos/custos de pipeline para mudanças menores." }
        ]
    }
};

// CONTROLE DE ESTADO
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// ELEMENTOS DOM
const viewHub = document.getElementById('hub-view');
const viewQuiz = document.getElementById('quiz-view');
const btnBack = document.getElementById('btn-back');
const quizTitle = document.getElementById('quiz-title');
const questionsContainer = document.getElementById('questions-container');
const scoreSpan = document.getElementById('score');
const quizFooter = document.getElementById('quiz-footer');
const btnFinish = document.getElementById('btn-finish');
const levelButtons = document.querySelectorAll('.level-btn');

// EVENT LISTENERS
levelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const levelId = btn.getAttribute('data-level');
        startQuiz(levelId);
    });
});

btnBack.addEventListener('click', showHub);
btnFinish.addEventListener('click', showHub);

// FUNÇÕES DE NAVEGAÇÃO E LÓGICA
function startQuiz(levelId) {
    const data = db[levelId];
    currentQuestions = data.questions;
    quizTitle.textContent = data.title;
    
    // Reset state
    score = 0;
    currentIndex = 0;
    scoreSpan.textContent = score;
    quizFooter.classList.add('hidden');
    questionsContainer.innerHTML = ''; // Limpa

    // Renderiza todas as 15 perguntas (visuais independentes)
    currentQuestions.forEach((qObj, index) => {
        const card = createQuestionCard(qObj, index);
        questionsContainer.appendChild(card);
    });

    // Troca a tela
    viewHub.classList.remove('active');
    viewQuiz.classList.add('active');
    window.scrollTo(0, 0);
}

function showHub() {
    viewQuiz.classList.remove('active');
    viewHub.classList.add('active');
    window.scrollTo(0, 0);
}

function createQuestionCard(qData, idx) {
    const div = document.createElement('div');
    div.className = 'question-card';
    
    div.innerHTML = `
        <h3>${idx + 1}. ${qData.q}</h3>
        <div class="options">
            <button class="option" data-value="a">A) ${qData.opts.a}</button>
            <button class="option" data-value="b">B) ${qData.opts.b}</button>
            <button class="option" data-value="c">C) ${qData.opts.c}</button>
        </div>
        <div class="feedback"><strong>Correto: ${qData.ans.toUpperCase()}.</strong> ${qData.fb}</div>
    `;

    const options = div.querySelectorAll('.option');
    const feedback = div.querySelector('.feedback');
    let answered = false;

    options.forEach(opt => {
        opt.addEventListener('click', function() {
            if (answered) return;
            answered = true;
            
            const selectedVal = this.getAttribute('data-value');
            
            if (selectedVal === qData.ans) {
                this.classList.add('correct');
                score++;
                scoreSpan.textContent = score;
            } else {
                this.classList.add('incorrect');
                const correctBtn = div.querySelector(`.option[data-value="${qData.ans}"]`);
                correctBtn.classList.add('correct');
            }

            options.forEach(b => b.setAttribute('disabled', 'true'));
            feedback.style.display = 'block';

            checkCompletion();
        });
    });

    return div;
}

function checkCompletion() {
    const totalAnswered = questionsContainer.querySelectorAll('.feedback[style="display: block;"]').length;
    if (totalAnswered === currentQuestions.length) {
        quizFooter.classList.remove('hidden');
    }
}