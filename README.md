# 🔎 Git & GitHub Fundamentals Lab – Static Web Project

![git-workflow](project-banner.png)

---

## 📌 Sobre o Projeto

Este projeto é um laboratório prático focado exclusivamente no aprendizado dos fundamentos de **Git** e **GitHub**, utilizando um servidor web estático simples como base.

O objetivo principal não é a aplicação em si, mas sim a prática estruturada de:

* Versionamento de código
* Controle de branches
* Pull Requests
* Resolução de conflitos
* Rebase vs Merge
* Versionamento com tags
* Simulação de fluxo colaborativo real

---

## 🎯 Objetivos do Projeto

* Aprender Git na prática
* Dominar GitHub
* Trabalhar com múltiplas branches
* Criar e revisar Pull Requests
* Resolver conflitos de merge
* Praticar rebase vs merge
* Versionar com tags
* Simular ambiente colaborativo

---

# 🏗️ Estrutura da Aplicação

Projeto simples de site estático:

```
git-fundamentals-lab/
├── index.html
├── style.css
├── script.js (opcional)
└── README.md
```

---

## 🌐 Aplicação Base

### 📄 index.html

* Página HTML simples
* Header
* Navbar
* Conteúdo principal
* Footer

### 🎨 style.css

* Estilização básica
* Layout simples
* Ajustes incrementais via branches

---

# 🌳 Estratégia de Branching

O projeto utiliza um modelo simplificado inspirado em Git Flow:

```
main
develop
feature/*
hotfix/*
```

---

## 🔹 main

* Sempre estável
* Versão pronta
* Apenas merges aprovados

---

## 🔹 develop

* Branch de integração
* Recebe todas as features antes da main

---

## 🔹 feature/*

Exemplos praticados:

* feature/add-footer
* feature/add-navbar
* feature/change-title
* feature/improve-style
* feature/add-responsive-layout

Cada feature é desenvolvida isoladamente e integrada via Pull Request.

---

## 🔹 hotfix/*

Exemplos:

* hotfix/fix-css-bug
* hotfix/fix-typo-index

Correções críticas feitas diretamente a partir da main.

---

# 🔄 Fluxo de Trabalho Utilizado

1️⃣ Criar branch a partir de develop
2️⃣ Implementar feature
3️⃣ Realizar commits semânticos
4️⃣ Push para o GitHub
5️⃣ Abrir Pull Request
6️⃣ Revisão
7️⃣ Merge na develop
8️⃣ Release para main via tag

---

# ⚔️ Resolução de Conflitos

O projeto inclui simulações reais de conflito:

* Alteração do mesmo trecho do `index.html` em branches diferentes
* Merge intencional gerando conflito
* Resolução manual via markers:

```
<<<<<<< HEAD
=======
>>>>>>> feature-branch
```

Objetivo:

* Entender conflitos na prática
* Resolver manualmente
* Criar commit de merge

---

# 🔁 Merge vs Rebase

Foram praticados dois cenários:

## Merge

* Criação de merge commit
* Histórico preservado

## Rebase

* Histórico linear
* Reorganização de commits
* Uso consciente antes de merge

Visualização com:

```
git log --oneline --graph --all
```

---

# 🏷️ Versionamento

Uso de Versionamento Semântico:

* v1.0.0 – Versão inicial
* v1.1.0 – Nova feature
* v1.2.0 – Melhorias visuais
* v2.0.0 – Refatoração estrutural

Criação de tags:

```
git tag v1.0.0
git push origin v1.0.0
```

---

# 🧪 Funcionalidades de Git Exploradas

✔ git init
✔ git add
✔ git commit
✔ git branch
✔ git checkout -b
✔ git merge
✔ git rebase
✔ git stash
✔ git revert
✔ git reset
✔ git tag
✔ git log --graph
✔ Pull Request
✔ Code Review
✔ Squash Merge

---

# 👥 Simulação de Trabalho em Equipe

Foram simulados cenários colaborativos:

* Fork do repositório
* Criação de Pull Request externo
* Revisão de código
* Resolução de conflitos remotos
* Squash merge

Objetivo:

Simular fluxo real de times de desenvolvimento.

---

# 🔐 Boas Práticas Aplicadas

* Commits semânticos (Conventional Commits)
* Branch naming padronizado
* Histórico limpo
* PR descritivos
* Separação clara entre feature e hotfix
* Versionamento consistente

---

# 📈 Resultados Técnicos

✔ Domínio dos fundamentos de Git
✔ Segurança ao trabalhar com múltiplas branches
✔ Capacidade de resolver conflitos
✔ Entendimento de rebase vs merge
✔ Simulação de ambiente profissional
✔ Organização de fluxo colaborativo

---

# 📚 Aprendizados Aplicados

* Controle de versão distribuído
* Governança de código
* Estruturação de fluxo Git profissional
* Colaboração via GitHub
* Versionamento semântico
* Histórico limpo e organizado

---

# 🚀 Próximos Passos

Possíveis evoluções do projeto:

* GitHub Actions para CI
* Deploy automático para GitHub Pages
* Branch protection rules
* CODEOWNERS
* Changelog automático

---

# ⭐ Se este projeto foi útil

Considere:

* Dar uma estrela ⭐
* Compartilhar com sua rede
* Contribuir com melhorias

---

> Este projeto demonstra domínio prático dos fundamentos de Git e GitHub, utilizando um servidor web estático simples como laboratório para simular fluxos profissionais de versionamento e colaboração.
