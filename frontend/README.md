# Client AI chat

This repository contains the source code and assets for the **Client AI chat** project.

## Navigation:

- [How to use tamplate](#how-to-use-template)
  - [Description](#description-template)
  - [How to install](#how-to-install)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Tech stack](#tech-stack)
- [Contributing](#contributing)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Contact](#contact)

---

<details>
<summary><a id="how-to-use-template">How to use <a href="https://github.com/maksym-nemera/react-ts_template">template:</a></a></summary>

This [repository](https://github.com/maksym-nemera/react-ts_template) contains the template code and assets for the **React App** projects.

You may try it on this page: [CLICK ME](https://maksym-nemera.github.io/react-ts_template/#/)

### <a id="description-template">Description:</a>

This template is designed to create various types of react apps using **_React.js_**, **_CSS/SCSS_**, and **_TS_**. It includes specialized checkers such as **ESLint**, **StyleLint**, and **Prettier** for code formatting, and uses **EditorConfig** to standardize the entire project. The project is built with **react-scripts**. In addition, it has **Husky** and **Lint-Staged** configured to detect and prevent errors during the commit.

This template can be used to create attractive React apps with modern design and good code structure. Additional improvements and customizations can be added to meet specific project requirements.

## <a id="how-to-install">How to install:</a>

1. Click '**Use this template**' => then click '**Create a new repository**'.
2. Add a name to your new repository => then click '**Create repository**'.
3. Click '**<>Code**' => then copy your '**HTTPS**' or '**SSH**' URL.
4. Clone your repository in your projects folder

```shell
git clone https://github.com/your-username/your-repository.git
```

5. Navigate to the project directory:

```shell
cd your-repository
```

6. **Use nvm version 20**:

```shell
nvm use 20
```

7. Install packages:

```shell
npm i
```

8. Build your project:

```shell
npm run build
```

9. Start the project:

```shell
npm run start
```

10. Update README.md.
</details>

---

## <a id="description">Description:</a>

The Client AI chat project is a web application developed to communicate with AI that can help with various situations. You can also customize your own promo code on the backend that will be attached to each of your messages. It provides a user-friendly chat interface. It is built using React.js, SocketIO, TypeScript, and MaterialUI.

## <a id="features">Features:</a>

- Responsive design for optimal viewing on different devices.
- Constant connection to the server using Socket IO


![ezgif com-video-to-gif](https://github.com/maksym-nemera/ai-chat/assets/81112084/7f131f95-3eee-4ad1-93ef-04fa16f62283)

## <a id="usage">Usage:</a>

Feel free to customize the content, styles, and functionality of the Client AI chat to suit your needs. You can modify the existing code or add new features as required.

## <a id="tech-stack">Tech stack:</a>

- React.js
- React-router
- SocketIO
- TypeScript
- MaterialUI

## <a id="contributing">Contributing:</a>

If you would like to contribute to this project, you can follow these steps:

1. Follow the steps from [How to install](#how-to-install) from 3 to the last.
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
        <td><code>npm run build</code></td>
        <td>Build the project into /build/</td>
    </tr>
    <tr>
        <td><code>npm run deploy</code></td>
        <td>Deploy the project</td>
    </tr>
    <tr>
        <td><code>npm run deploy:force</code></td>
        <td>Force deploy the project</td>
    </tr>
    <tr>
        <td><code>npm run lint</code></td>
        <td>Check .TSX files</td>
    </tr>
    <tr>
        <td><code>npm run style</code></td>
        <td>Check .SCSS files</td>
    </tr>
    <tr>
        <td><code>npm run format</code></td>
        <td>Formatting your code</td>
    </tr>
    <tr>
        <td><code>npm run fix-style</code></td>
        <td>Check and fix all code</td>
    </tr>
</table>

## <a id="project-structure">Project structure:</a>

```
|-public/
|	|-images/
|	|	|-icons/
|	|	|	|-example-icons.png
|	|	|-example-images.jpg
|	|-index.html
|	|-favicon.ico
|
|-src/
|	|-api/
|	|	|-example-fetch.ts
|	|-app/
|	|	|-hooks.ts
|	|	|-store.ts
|	|-components/
|	|	|-Example-component/
|	|	|	|-Example-component.tsx
|	|	|	|-Example-component.scss
|	|	|	|-Example-component.tsx
|	|-enums/
|	|	|-example-enums.ts
|	|-features/
|	|	|-example/
|	|		|-exampleSlice.ts
|	|-types/
|	|	|-example-types.ts
|	|-utils/
|	|	|-example-utils.ts
|	|-App.tsx
|	|-AppRouting.tsx
|	|-index.scss
|	|-index.tsx
```

## <a id="contact">Contact:</a>

If you have any questions, suggestions, or feedback, please feel free to reach out to me.

- Linkedin: [maksym-nemera](https://www.linkedin.com/in/maksym-nemera/)
- Email: [maksym.nemera@gmail.com](mailto:maksym.nemera@gmail.com)
- Telegram: [MaksymNemera](https://t.me/MaksymNemera)
