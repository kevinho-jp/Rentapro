// ==================== ASSISTANT IA - RentaPro ====================

// ---- Base de connaissances enrichie ----
const botKnowledge = {
  'rendement': [
    "Le rendement locatif moyen en France est de 4,5 % hors charges. Les villes moyennes offrent souvent 6 à 7 %.",
    "En Europe, Lisbonne affiche 6,2 %, Berlin 4,5 %, Paris 3,8 %. L'Afrique propose les meilleurs rendements : Le Cap 10,2 %.",
    "Pour un investissement locatif, le rendement brut se calcule : (loyer annuel / prix d'achat) × 100.",
    "Les SCPI distribuent en moyenne 4 à 5 % par an, sans gestion locative."
  ],
  'scpi': [
    "Les SCPI permettent d'investir dans l'immobilier d'entreprise ou résidentiel sans acheter de murs. Le rendement moyen est de 4,5 %.",
    "Les SCPI de rendement (ex : Primovie, Epargne Pierre) versent des dividendes trimestriels. Attention aux frais d'entrée.",
    "Vous pouvez acheter des parts de SCPI en direct ou via un contrat d'assurance-vie."
  ],
  'travaux': [
    "Pour financer vos travaux, un prêt travaux ou un crédit immobilier avec apport sont possibles. Notre simulateur de travaux vous aide.",
    "Les travaux de rénovation énergétique peuvent donner droit à des subventions (MaPrimeRénov', CEE).",
    "Prévoyez un budget de 10 à 20 % du prix d'achat pour des travaux de rafraîchissement."
  ],
  'credit': [
    "Les taux d'emprunt sont actuellement autour de 3,5 % sur 20 ans. Utilisez notre comparateur de crédit pour trouver le meilleur taux.",
    "Votre capacité d'emprunt dépend de vos revenus, de votre apport et de la durée. Le taux d'endettement ne doit pas dépasser 35 %.",
    "N'oubliez pas d'inclure l'assurance emprunteur dans votre calcul."
  ],
  'colocation': [
    "La colocation peut augmenter votre rendement locatif de 20 à 30 % par rapport à une location classique.",
    "Notre simulateur de colocation vous aide à estimer le loyer optimal et la rentabilité.",
    "La colocation est particulièrement prisée dans les villes étudiantes et les métropoles."
  ],
  'lmnp': [
    "Le statut LMNP (Loueur Meublé Non Professionnel) permet de bénéficier d'un régime fiscal avantageux : amortissement du bien et déduction des charges.",
    "Avec le LMNP, vous pouvez déduire les intérêts d'emprunt, les travaux et les frais de gestion de vos revenus fonciers.",
    "Le régime réel est plus intéressant que le micro-BIC si vos charges dépassent 50 % des loyers."
  ],
  'plus-value': [
    "La plus-value immobilière est imposée à 19 % + prélèvements sociaux (17,2 %) après un abattement pour durée de détention.",
    "Au-delà de 22 ans de détention, vous êtes totalement exonéré d'impôt sur la plus-value.",
    "Utilisez notre simulateur de plus-value pour estimer votre fiscalité."
  ],
  'frais': [
    "Les frais de notaire représentent environ 7 à 8 % du prix d'achat dans l'ancien, et 2 à 3 % dans le neuf.",
    "Les frais d'agence sont généralement à la charge de l'acheteur (5 à 8 %). Négociez-les !",
    "Les frais de dossier bancaire et les garanties (hypothèque, caution) sont aussi à prévoir."
  ],
  'merci': [
    "Avec plaisir ! N'hésitez pas si vous avez d'autres questions.",
    "Je suis là pour vous aider. À votre service !",
    "De rien ! Pensez à consulter nos simulateurs pour aller plus loin."
  ],
  'bonjour': [
    "Bonjour ! Je suis RentaBot, votre assistant immobilier. Comment puis-je vous aider ?",
    "Bonjour et bienvenue ! Avez-vous une question sur l'investissement locatif ?",
    "Bonjour ! Que souhaitez-vous savoir : rendement, fiscalité, financement ?"
  ]
};

// Réponses par défaut (aléatoires, variées)
const defaultReplies = [
  "Je vous conseille de consulter notre simulateur pour une estimation personnalisée.",
  "Avez-vous pensé à diversifier vos investissements entre immobilier neuf et ancien ?",
  "Pensez à vérifier les dispositifs fiscaux (Pinel, LMNP) qui peuvent booster votre rentabilité.",
  "Je vous recommande de lire notre guide sur l'effet de levier pour optimiser votre financement.",
  "Pourriez-vous reformuler votre question ? Je suis là pour vous éclairer.",
  "Saviez-vous que l'investissement en SCPI permet de commencer avec un petit budget ?",
  "La colocation est une excellente stratégie pour maximiser vos revenus locatifs."
];

// ---- Fonction de recherche de réponse ----
function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  let reply = '';

  // Parcours des mots-clés
  for (const [keyword, responses] of Object.entries(botKnowledge)) {
    if (msg.includes(keyword)) {
      const randomIndex = Math.floor(Math.random() * responses.length);
      reply = responses[randomIndex];
      break;
    }
  }

  // Si pas de correspondance, réponse par défaut aléatoire
  if (!reply) {
    const randomIndex = Math.floor(Math.random() * defaultReplies.length);
    reply = defaultReplies[randomIndex];
  }

  return reply;
}

// ---- Création dynamique de l'interface du chat ----
function createChatWidget() {
  // Structure HTML du chat
  const chatHTML = `
    <div class="chat-float">
      <div class="chat-box" id="chatBox">
        <div class="chat-header">
          <span><i class="fas fa-robot"></i> RentaBot IA</span>
          <i class="fas fa-times" id="closeChat"></i>
        </div>
        <div class="chat-messages" id="chatMessages">
          <div class="msg bot">Bonjour ! Je suis RentaBot, votre assistant investissement. Posez-moi une question sur le rendement, la fiscalité, les SCPI, les travaux, le crédit, etc.</div>
        </div>
        <div class="chat-input-area">
          <input type="text" id="chatInput" placeholder="Ex: Quel est le meilleur rendement ?" />
          <button id="sendChat"><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
      <div class="chat-toggle" id="chatToggle">
        <i class="fas fa-comment-dots"></i>
      </div>
    </div>
  `;

  // Insérer le HTML dans le body
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // ---- Gestion des événements ----
  const chatToggle = document.getElementById('chatToggle');
  const chatBox = document.getElementById('chatBox');
  const closeChat = document.getElementById('closeChat');
  const sendBtn = document.getElementById('sendChat');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  function toggleChat() {
    chatBox.classList.toggle('open');
  }

  chatToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    // Afficher le message utilisateur
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.textContent = msg;
    chatMessages.appendChild(userDiv);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simuler une réponse du bot après un court délai
    setTimeout(() => {
      const reply = getBotReply(msg);
      const botDiv = document.createElement('div');
      botDiv.className = 'msg bot';
      botDiv.textContent = reply;
      chatMessages.appendChild(botDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 400);
  }

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });

  // Fermer le chat si on clique en dehors (sauf sur le toggle)
  document.addEventListener('click', function(e) {
    const chat = document.querySelector('.chat-float');
    if (chat && !chat.contains(e.target) && !e.target.closest('.chat-float')) {
      chatBox.classList.remove('open');
    }
  });
}

// ---- Lancer la création au chargement du DOM ----
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createChatWidget);
} else {
  createChatWidget();
}
