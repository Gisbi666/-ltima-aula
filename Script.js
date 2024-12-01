const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');

let currentStep = 'start';

// Define a estrutura da história
const story = {
  start: {
    text: 'Você acorda em uma floresta desconhecida. O que deseja fazer?',
    choices: [
      { text: 'Explorar a floresta', nextStep: 'explorar' },
      { text: 'Gritar por ajuda', nextStep: 'gritar' },
    ],
  },
  explorar: {
    text: 'Enquanto explora, você encontra uma cabana. O que deseja fazer?',
    choices: [
      { text: 'Entrar na cabana', nextStep: 'cabana' },
      { text: 'Continuar andando', nextStep: 'andar' },
    ],
  },
  gritar: {
    text: 'Você grita por ajuda, mas atrai uma criatura perigosa. Fim de jogo!',
    choices: [
      { text: 'Recomeçar', nextStep: 'start' },
    ],
  },
  cabana: {
    text: 'Dentro da cabana, você encontra um mapa. Ele mostra uma saída. O que fazer?',
    choices: [
      { text: 'Seguir o mapa', nextStep: 'saida' },
      { text: 'Ignorar o mapa', nextStep: 'perdido' },
    ],
  },
  andar: {
    text: 'Você se perde na floresta e nunca mais é encontrado. Fim de jogo!',
    choices: [
      { text: 'Recomeçar', nextStep: 'start' },
    ],
  },
  saida: {
    text: 'Você segue o mapa e encontra a saída. Parabéns, você venceu!',
    choices: [
      { text: 'Recomeçar', nextStep: 'start' },
    ],
  },
  perdido: {
    text: 'Você ignora o mapa e se perde para sempre. Fim de jogo!',
    choices: [
      { text: 'Recomeçar', nextStep: 'start' },
    ],
  },
};

// Atualiza o texto da história e as opções
function updateStory(step) {
  const current = story[step];
  storyText.textContent = current.text;
  choices.innerHTML = '';

  current.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.addEventListener('click', () => updateStory(choice.nextStep));
    choices.appendChild(button);
  });
}

// Inicia o jogo
updateStory(currentStep);
