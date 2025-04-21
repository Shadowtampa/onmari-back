# 🤖 ChatERP — ERP Conversacional com Ações via Chatbot

> Plataforma ERP moderna com controle total via chatbot inteligente.  
> Foco: Micro e pequenos empreendedores que precisam de agilidade e simplicidade.

---

## 🧭 Visão Geral

O **ChatERP** é um sistema de gestão empresarial pensado para funcionar com ou sem interface gráfica, usando um **chatbot inteligente como principal ponto de interação**. Ele permite que usuários cadastrem produtos, fornecedores, registrem vendas, consultem resumos de caixa e muito mais — tudo através de linguagem natural.

Este ERP é orientado à produtividade, escalabilidade e automação de tarefas operacionais.  

---

## 🧱 Stack Técnica

- **Backend:** Laravel + Laravel Octane
- **Banco de Dados:** MySQL ou PostgreSQL
- **IA/NLP:** Ollama (modelo local customizado) + pipeline de prompts
- **Chatbot:** Plataforma via WhatsApp (usando providers como Z-API ou Twilio)
- **Frontend (futuro):** React com Admin Panel (modular)
- **Infra:** Docker + NGINX + GitHub Actions para CI/CD
- **Documentação:** Swagger + Markdown Readmes

---

## 🧩 Módulos Principais

### 🔹 Core ERP
- Cadastro de produtos, fornecedores, clientes
- Registro de vendas e entradas
- Relatórios e resumos financeiros

### 🔹 Chatbot Inteligente
- Interface natural para interações via WhatsApp
- Ações baseadas em intenção (ex: "cadastrar um produto novo")
- Confirmações, fallback e resumos

### 🔹 Motor de Prompt
- Sistema interno que transforma mensagens em comandos de API
- Baseado em contexto e dados estruturados
- Aprende com as interações

### 🔹 Painel Administrativo (futuro)
- Acesso a dados em modo visual
- Histórico de interações
- Controle granular de permissões

---

## 🚀 MVP – Produto Mínimo Viável

**Objetivo:** permitir que o usuário crie produtos e fornecedores via chatbot, e consulte resumos diários de vendas.

### Funcionalidades MVP:
- [ ] Integração básica do chatbot com backend
- [ ] Ação: Criar produto via chat
- [ ] Ação: Criar fornecedor via chat
- [ ] Ação: Consultar resumo diário
- [ ] Confirmação por mensagens e fallback de erro
- [ ] Documentação da API (Swagger)

---

## 📆 Milestones

### 📍 Semana 1-2
- Setup do projeto Laravel
- Definição dos modelos: Produto, Fornecedor, Venda
- Setup da base do chatbot (escutador + roteador)

### 📍 Semana 3-4
- Implementação das primeiras intenções: criar produto, criar fornecedor
- Integração com banco de dados
- Validação via testes simulados

### 📍 Semana 5-6
- Implementação do resumo diário (receitas, vendas, top produtos)
- Refino da UX conversacional
- Deploy local com Docker

### 📍 Semana 7-8
- Logs + fallback de mensagens
- Documentação técnica + uso
- Primeiros testes com usuários reais (validação de mercado)

---

## 🛣️ Roadmap Futuro

- Ações mais complexas: edição de dados, cancelamentos, estoque
- Detecção de intenções com modelos LLM customizados
- Suporte a múltiplas empresas
- Módulo financeiro integrado
- App mobile (Progressive Web App)

---

## 🧑‍💻 Time Inicial

- **Luis Gomes** – Fullstack Developer e idealizador
- **Lucas De Andrade** – Especialista em IA e NLP

---

## 📜 Licença

Código fechado no momento. Projeto sob gestão da **XDZ Tech**. Para parcerias, entre em contato.

---

## 📞 Contato

Para dúvidas, parcerias ou colaboração:

**Luis Gomes**  
📍 Santarém - PA  
📧 xdztech@contato.com  
📲 WhatsApp: +55 (93) [seu número]

---

> “A interface mais acessível do mundo é a linguagem.” — visão de produto do ChatERP
