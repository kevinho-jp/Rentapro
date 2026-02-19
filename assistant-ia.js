// ============================================
// ASSISTANT IA RENTAPRO - VERSION COMPLÈTE
// ============================================

const assistantIA = {
    // Base de connaissances enrichie
    connaissances: {
        "rendement": "📊 Le rendement locatif se calcule de deux façons :\n\n• Rendement brut : (Loyer annuel / Prix d'achat) × 100\n• Rendement net : (Loyer annuel - charges) / Prix d'achat × 100\n\nUtilisez notre simulateur pour des calculs précis ! Il prend en compte les frais de notaire, les travaux, et la fiscalité.",
        
        "cash-flow": "💰 Le cash-flow est la différence entre vos revenus locatifs et vos charges (crédit, taxe foncière, charges de copropriété, assurance).\n\nUn cash-flow positif signifie que votre investissement s'autofinance et génère un revenu complémentaire. C'est l'objectif à atteindre !",
        
        "van": "📈 La VAN (Valeur Actuelle Nette) mesure la rentabilité d'un investissement sur la durée.\n\n• VAN > 0 : Projet rentable\n• VAN = 0 : Projet à l'équilibre\n• VAN < 0 : Projet non rentable\n\nPlus la VAN est élevée, plus l'investissement crée de la valeur.",
        
        "tri": "📊 Le TRI (Taux de Rendement Interne) est le taux d'actualisation pour lequel la VAN est nulle.\n\nIl doit être comparé au taux d'actualisation (généralement le coût du crédit). Un TRI supérieur au taux d'emprunt signifie que l'investissement est rentable.",
        
        "premier achat": "🏠 Pour un premier achat locatif, voici mes conseils :\n\n• Privilégiez les petites surfaces (studios, T2)\n• Choisissez des zones étudiantes ou bien desservies\n• Prévoyez un apport de 10-20%\n• Calculez précisément la rentabilité avant d'acheter\n• N'oubliez pas les frais de notaire (7-8%)",
        
        "financement": "🏦 Options de financement :\n\n• Crédit immobilier classique : taux 3.5-4.5%\n• Prêt à taux zéro (PTZ) : pour primo-accédants\n• Crédit in fine : vous ne remboursez que les intérêts\n• Apport personnel : idéalement 10-20%\n\nFaites jouer la concurrence entre banques !",
        
        "fiscalité": "📝 Résumé fiscalité immobilière :\n\n• Micro-foncier : abattement 30% (jusqu'à 15 000€)\n• Régime réel : déduction des charges\n• LMNP : amortissement du bien possible\n• Pinel : réduction d'impôt (investissement neuf)\n• Malraux : pour l'immobilier ancien",
        
        "gestion": "👥 La gestion locative peut être :\n\n• Personnelle : économies mais plus de travail\n• Par une agence : 6-10% des loyers, tranquillité\n• Par un mandataire : alternative moins chère\n\nPoints clés : sélection rigoureuse des locataires, assurance loyers impayés, entretien régulier.",
        
        "investir afrique": "🌍 L'Afrique offre des rendements attractifs (8-15%) mais nécessite une bonne connaissance du marché local.\n\nVilles prometteuses :\n• Casablanca (Maroc) : marché stable\n• Nairobi (Kenya) : croissance forte\n• Kinshasa (RDC) : demande énorme\n• Dakar (Sénégal) : économie dynamique",
        
        "investir europe": "🇪🇺 En Europe, les rendements varient de 3 à 6% :\n\n• Europe de l'Ouest : stabilité, rendements plus faibles\n• Europe de l'Est : meilleurs rendements, plus de risques\n\nMeilleures villes : Berlin, Lisbonne, Budapest, Varsovie",
        
        "investir amerique": "🌎 Amérique du Nord :\n\n• USA : REITs très développés, rendements 4-8%\n• Canada : marché stable, forte immigration\n\nAmérique latine :\n• Mexique, Brésil, Colombie : rendements 6-12%",
        
        "investir asie": "🌏 Asie : marchés très contrastés\n\n• Japon : stabilité, rendements faibles\n• Singapour : marché mature, très cher\n• Vietnam, Thaïlande : croissance forte, risques",
        
        "investir oceanie": "🇦🇺 Océanie :\n\n• Australie : marché transparent, forte immigration\n• Nouvelle-Zélande : qualité de vie, rendements modérés\n\nAttention aux règles d'accès pour les non-résidents.",
        
        "lmnp": "🏢 Le statut LMNP (Loueur Meublé Non Professionnel) :\n\n• Location meublée obligatoire\n• Amortissement du bien possible (réduction d'impôts)\n• Deux régimes : micro-BIC (abattement 50%) ou réel\n• Idéal pour les petites surfaces en zone tendue",
        
        "pinel": "🏗️ Loi Pinel :\n\n• Investissement dans le neuf\n• Réduction d'impôt de 12-21% selon la durée\n• Plafonds de loyer et de ressources\n• Zones éligibles limitées",
        
        "scpi": "📦 SCPI (Société Civile de Placement Immobilier) :\n\n• Investir dans l'immobilier sans gérer\n• Mise de départ faible (quelques centaines d'euros)\n• Rendement moyen 4-5%\n• Diversification possible"
    },

    // Réponses par défaut
    reponsesDefaut: [
        "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?",
        "Intéressant ! Pouvez-vous être plus précis ?",
        "Je recherche cette information... En attendant, consultez notre guide !",
        "Bonne question ! Je vous suggère de lire notre article sur le sujet.",
        "Désolé, je n'ai pas encore appris cela. Utilisez notre simulateur ou consultez le guide !"
    ],

    // Suggestions rapides
    suggestions: [
        "Comment calculer le rendement ?",
        "Qu'est-ce que le cash-flow ?",
        "Comment financer mon premier achat ?",
        "LMNP ou location vide ?",
        "Investir en Afrique",
        "Erreurs à éviter"
    ],

    // Fonction pour trouver une réponse
    repondre: function(question) {
        question = question.toLowerCase();
        
        // Chercher une correspondance dans les connaissances
        for (let motCle in this.connaissances) {
            if (question.includes(motCle)) {
                return this.connaissances[motCle];
            }
        }
        
        // Réponse par défaut aléatoire
        return this.reponsesDefaut[Math.floor(Math.random() * this.reponsesDefaut.length)];
    },

    // Initialisation
    init: function() {
        console.log("✅ Assistant IA RentaPro chargé avec succès !");
    }
};

// Initialiser au chargement
assistantIA.init();
