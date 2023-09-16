# API AI chat

This repository contains the source code and assets for the **API AI chat** project.

## Navigation:

- [How to install](#how-to-install)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Tech stack](#tech-stack)
- [Contributing](#contributing)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Endpoints](#endpoints)
- [Contact](#contact)

---

## <a id="how-to-install">How to install:</a>

1. Click '**<>Code**' => then copy your '**HTTPS**' or '**SSH**' URL.
2. Clone your repository in your projects folder

```shell
git clone https://github.com/your-username/api-ai-chat.git
```

3. Navigate to the project directory:

```shell
cd api-ai-chat
```

4. **Use nvm version 20**:

```shell
nvm use 20
```

5. Install packages:

```shell
npm i
```

6. Start the project with Expo Go:

```shell
npm run start
```

7. Update README.md.

---

## <a id="description">Description:</a>

This API is designed to communicate with OpenAI(text-davinci-003), synchronization with the client is done via websockets. You can also set up your own prompter for correspondence on a specific topic, this prompter will be attached to each of your messages. You can also customize your own prompt code that will be attached to each of your messages. It is built using Nest.js, TypeScript, SocketIO and OpenAI.

- Before you start, you need to configure your environment in the .env.development file:

```dotenv
API_AI_KEY=sk-your-OpenAI-APIKEY

DB_HOST=your-host
DB_PORT=your port
DB_USERNAME=your-db-name
DB_PASSWORD=your-password
DB_DATABASE=your-database
```

- When you start the project, all tables in your database will be automatically created.
- You can change init prompt in this path ```./backend/src/gateways/events.gateway.ts``` in handleAnswer function.

## <a id="features">Features:</a>

- Uninterrupted communication with the client.
- Interaction with OpenAI(text-davinci-003) to generate a response.

## <a id="usage">Usage:</a>

Feel free to customize the content, and functionality of the API AI chat to suit your needs. You can modify the existing code or add new features as required.

## <a id="tech-stack">Tech stack:</a>

- Nest.js
- TypeScript
- SocketIO
- OpenAI

## <a id="contributing">Contributing:</a>

If you would like to contribute to this project, you can follow these steps:

1. Follow the steps from [How to install](#how-to-install).
2. Make your changes and test them locally.
3. Commit your changes:

```shell
git commit -m 'Add some feature'
```

4. Push the branch to your forked repository:

```shell
git push origin feature/your-feature
```

5. Open a pull request in this repository.

## <a id="scripts">Scripts:</a>

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>npm start</code></td>
        <td>Start the project</td>
    </tr>
    <tr>
        <td><code>npm run start:dev</code></td>
        <td>Start the project in dev mod</td>
    </tr>
    <tr>
        <td><code>npm run start:prod</code></td>
        <td>Start the project in prod mod</td>
    </tr>
    <tr>
        <td><code>npm run lint</code></td>
        <td>Check .TS files</td>
    </tr>
</table>

## <a id="project-structure">Project structure:</a>

```
|-src/
|	|-controllers/
|	|	|-example/
|	|	|	|-example.controller.ts
|	|-gateways/
|	|	|-events.gateway.ts
|	|-models/
|	|	|-example.model.ts
|	|-modules/
|	|	|-example/
|	|	|	|-example.module.ts
|	|-services/
|	|	|-example/
|	|	|	|-example.service.ts
|	|-test/
|	|-app.controller.ts
|	|-app.module.ts
|	|-app.service.ts
|	|-main.ts
|	|
|-.env.development
```

## <a id="endpoints">Endpoints:</a>

The base URL for the API is: **[http://localhost:3001/](http://localhost:3001/)**

<table>
    <tr>
        <th>
        	Method
        </th>
        <th>
        	Endpoint
        </th>
        <th>
        	Description
        </th>
        <th>
        	Body
        </th>
    </tr>
    	<tr>
        <th colspan="4">Chat</th>
    	</tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        	<a href="http://localhost:3001/messages">
        		/messages
          </a>
        </td>
        <td>
        	Get an all received messages from client.
        </td>
        <td>
        	NULL
        </td>
    </tr>
    <tr>
        <td>
        	POST
        </td>
        <td>
          <a href="http://localhost:3001/messages">
          	/messages
          </a>
        </td>
        <td>
        	Create message in table ChatMessages
        </td>
        <td>
          <pre>{
	"text": "your_text"
}          </pre>
        </td>
    </tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        	<a href="http://localhost:3001/answers">
        		/answers
          </a>
        </td>
        <td>
        	Get an all received answers from OpenAI.
        </td>
        <td>
        	NULL
        </td>
    </tr>
    <tr>
        <td>
        	POST
        </td>
        <td>
          <a href="http://localhost:3001/answers">
          	/answers
          </a>
        </td>
        <td>
        	Create message in table ChatAnswers that creates from OpenAI
        </td>
        <td>
          <pre>{
	"text": "your_text"
}          </pre>
        </td>
    </tr>
</table>

Data that you receive from the server is:

<pre>{
    "category": "ai" or "user",
    "id": 104,
    "text": "your_text",
    "updatedAt": "2023-09-16T15:54:11.958Z",
    "createdAt": "2023-09-16T15:54:11.958Z"
}</pre>

## <a id="contact">Contact:</a>

If you have any questions, suggestions, or feedback, please feel free to reach out to me.

- Linkedin: [maksym-nemera](https://www.linkedin.com/in/maksym-nemera/)
- Email: [maksym.nemera@gmail.com](mailto:maksym.nemera@gmail.com)
- Telegram: [MaksymNemera](https://t.me/MaksymNemera)
