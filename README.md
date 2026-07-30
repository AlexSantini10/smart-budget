# Smart Budget

Copyright (c) 2024 Alex Santini

**Smart Budget** è un'applicazione web per la gestione del budget personale. Permette di tenere traccia delle proprie finanze, gestire conti, categorie e transazioni, e visualizzare il saldo in tempo reale.

> 🎓 Progetto sviluppato per il corso di **Ingegneria del Software** — Corso di Laurea in **Ingegneria Informatica T**, [Università di Bologna (UNIBO)](https://www.unibo.it/).

---

## 📚 Progetto Universitario

Progetto sviluppato per il corso di **Ingegneria del Software** del corso di laurea in **Ingegneria Informatica T** presso l'**Università di Bologna (UNIBO)**.

### 👥 Autori

| GitHub | Nome |
|--------|------|
| [@AlexSantini10](https://github.com/AlexSantini10) | Alex Santini |
| [@ErJem](https://github.com/ErJem) | Jemel Merouche |
| [@lucax58](https://github.com/lucax58) | Luca Marongiu |

---

## 🛠️ Tecnologie Utilizzate

| Layer | Tecnologia |
|-------|-----------|
| Frontend | [React](https://react.dev/) 18, [Material UI](https://mui.com/) 5, React Router DOM 6 |
| Backend | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) 4 |
| Database | [Microsoft SQL Server](https://www.microsoft.com/sql-server) 2022 (via Docker) |
| Autenticazione | JWT (JSON Web Token) |
| Containerizzazione | [Docker](https://www.docker.com/) / Docker Compose |

---

## ✨ Funzionalità

- **Registrazione e Login** utente con autenticazione sicura tramite JWT
- **Gestione Conti**: creazione, visualizzazione e gestione dei propri conti bancari/portafogli
- **Gestione Categorie**: organizzazione delle spese per categoria
- **Gestione Transazioni**: registrazione di entrate, uscite e trasferimenti tra conti
- **Dashboard Home**: visualizzazione del saldo attuale e dello storico transazioni
- **Gestione Profilo**: aggiornamento dei dati utente e della password

---

## 📋 Prerequisiti

- [Node.js](https://nodejs.org/it/) (v18 o superiore)
- [Docker](https://www.docker.com/) e Docker Compose

---

## 🚀 Installazione

### 1. Clonare il repository

```bash
git clone https://github.com/AlexSantini10/smart-budget.git
cd smart-budget
```

### 2. Configurare le variabili d'ambiente

Aprire il file `.env` nella root del progetto e impostare le variabili con i propri valori:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=YourStrongPassword
DB_NAME=smart_budget

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_LIFETIME=30d
```

### 3. Avviare il database

Avviare il container Docker con Microsoft SQL Server:

```bash
cd database
MSSQL_SA_PASSWORD=YourStrongPassword docker compose up -d
```

### 4. Inizializzare il database

```bash
cd database
node db_utils/init_db.js
```

> **Nota:** I file SQL in `database/db_utils/sql` devono essere salvati in codifica **UTF-16 LE**.

### 5. Installare le dipendenze e avviare il backend

```bash
cd server
npm install
npm test
```

> **Nota:** Il comando `npm test` avvia il server in modalità sviluppo tramite `nodemon`.

Il server sarà disponibile su `http://localhost:5000`.

### 6. Installare le dipendenze e avviare il frontend

In un nuovo terminale:

```bash
cd client
npm install
npm start
```

Il client sarà disponibile su `http://localhost:3000`.

---

## 📡 API Endpoints

Tutti gli endpoint sono prefissati con `/api/v1`.

### Autenticazione (`/auth`)

| Metodo | Endpoint | Descrizione | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Registra un nuovo utente | No |
| POST | `/auth/login` | Effettua il login | No |
| PATCH | `/auth/updateUser` | Aggiorna i dati utente | ✅ |
| PATCH | `/auth/updatePassword` | Aggiorna la password | ✅ |
| GET | `/auth/getCurrentUser` | Ottieni i dati dell'utente corrente | ✅ |
| GET | `/auth/logout` | Effettua il logout | No |

### Conti (`/conti`)

| Metodo | Endpoint | Descrizione | Auth |
|--------|----------|-------------|------|
| GET | `/conti` | Lista dei conti dell'utente | ✅ |
| GET | `/conti/:id` | Dettaglio di un conto | ✅ |
| POST | `/conti` | Crea un nuovo conto | ✅ |
| PATCH | `/conti/:id` | Modifica un conto | ✅ |
| DELETE | `/conti/:id` | Elimina un conto | ✅ |
| GET | `/conti/saldo` | Saldo totale dell'utente | ✅ |
| GET | `/conti/saldo/:id` | Saldo di un conto specifico | ✅ |
| GET | `/conti/saldoPassato/:data` | Saldo totale a una data passata | ✅ |

### Categorie (`/categorie`)

| Metodo | Endpoint | Descrizione | Auth |
|--------|----------|-------------|------|
| GET | `/categorie` | Lista delle categorie | ✅ |
| POST | `/categorie` | Crea una nuova categoria | ✅ |
| DELETE | `/categorie/:id` | Elimina una categoria | ✅ |

### Transazioni (`/transazioni`)

| Metodo | Endpoint | Descrizione | Auth |
|--------|----------|-------------|------|
| GET | `/transazioni` | Lista delle transazioni | ✅ |
| GET | `/transazioni/:id` | Dettaglio di una transazione | ✅ |
| POST | `/transazioni` | Crea una nuova transazione | ✅ |
| PATCH | `/transazioni/:id` | Modifica una transazione | ✅ |
| DELETE | `/transazioni/:id` | Elimina una transazione | ✅ |

---

## 📁 Struttura del Progetto

```
smart-budget/
├── client/             # Frontend React
│   ├── public/
│   └── src/
│       ├── components/ # Componenti riutilizzabili
│       ├── context/    # Context API (stato globale)
│       ├── pages/      # Pagine dell'applicazione
│       └── widgets/    # Widget UI
├── server/             # Backend Node.js/Express
│   ├── controllers/    # Logica degli endpoint
│   ├── db/             # Connessione al database
│   ├── middleware/     # Middleware (auth, error handling)
│   ├── routes/         # Definizione delle route
│   └── utils/          # Utility (rate limiter, ecc.)
├── database/           # Configurazione database
│   ├── db_utils/       # Script di inizializzazione DB
│   │   └── sql/        # File SQL (codifica UTF-16 LE)
│   └── docker-compose.yaml
└── testing/            # Test delle API
```

---

## 🔒 Sicurezza

- Autenticazione tramite **JWT** con scadenza configurabile
- **Rate limiting** sugli endpoint di autenticazione per prevenire attacchi brute-force
- Gestione sicura delle password
