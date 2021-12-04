<h1 align="center">Ignite desafio 1: Conceitos do React</h1>
<img src="https://i.ibb.co/q0VvtmY/cover-reactjs.png" alt="Imagem cover do curso Ignite trilha ReactJS da Rocketseat">

> Primeiro desafio do curso Ignite trilha ReactJS da Rocketseat.

## 💻 Sobre o desafio

Nesse desafio, o principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React. Onde deverá ser feito:

- Adicionar uma nova tarefa
- Remover uma tarefa
- Marcar e desmarcar uma tarefa como concluída

### Template da aplicação

Para realizar esse desafio, a Rocketseat criou um modelo para utilizar como um template do GitHub.

O template está disponível na seguinte URL: <a href="https://github.com/rocketseat-education/ignite-template-reactjs-conceitos-do-react" target="_balnk">Template Desafio 1</a>

### O que deve ser feito

Criar as funcionalidades para as três funções presentes no template, que são:

- **handleCreateNewTask**: Deve ser possível adicionar uma nova task no estado de `tasks`, com os campos `id` que deve ser gerado de forma aleatória, `title` que deve ser um texto e `isComplete` que deve iniciar como false.
```javascript
  function handleCreateNewTask() {
    // Check if the user has added a task in the input field
    if (!newTaskTitle) {
      return;
    }
    // Create an object to receive the attributes according to the interface
    const userTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    // Change the state of Tasks by adding the created object
    setTasks((prevState) => [...prevState, userTask]);
    // Reset input field to empty
    setNewTaskTitle("");
  }
```
- **handleToggleTaskCompletion:** Deve alterar o status de `isComplete` para uma task com um ID específico que é recebido por parâmetro.
```javascript
function handleToggleTaskCompletion(id: number) {
  // Create an array to modify isComplete attr of checked tasks
  const completedTasks = tasks.map((task) =>
    task.id === id ? { ...task, isComplete: !task.isComplete } : task
  );
  // Change the state of Tasks by the new Array with Completed tasks
  setTasks(completedTasks);
}
```
- **handleRemoveTask:** Deve receber um ID por parâmetro e remover a task que contém esse ID do estado.
```javascript
  function handleToggleTaskCompletion(id: number) {
    // Create an array to modify isComplete attr of checked tasks
    const completedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    // Change the state of Tasks by the new Array with Completed tasks
    setTasks(completedTasks);
  }
```
### Como deve ficar a aplicação ao final?

Link para vídeo demonstrativo: <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04e38cba-e14d-4512-a4fa-ee24152ab75f/challenge2.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T134948Z&X-Amz-Expires=86400&X-Amz-Signature=22807be17ce27cb22d51efa200cc544908288bd1a0d5472f2f47e69f8e39fc6f&X-Amz-SignedHeaders=host&x-id=GetObject" target="_blank">Clique aqui</a>.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de `node`
* Você instalou a versão mais recente de `yarn`

## 🚀 Instalando

Para instalar, após o clone do repositório, siga estas etapas:

- Entre na pasta do repositório clonado e no terminal:
```
yarn install
yarn dev
```


## ☕ Usando 

Agora basta abrir em um navegador: <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a>
