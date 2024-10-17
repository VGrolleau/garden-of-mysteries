const storyData = {
  start: {
    text: [
      "Tu es un aventurier qui découvre un jardin magique rempli de plantes étranges et de créatures merveilleuses. En te promenant, tu trouves une porte qui mène à ce jardin secret."
    ],
    choices: [
      {
        text: "Ouvrir la porte.",
        next: "openTheDoor"
      },
      {
        text: "Grimper sur le mur pour observer.",
        next: "climbTheWall"
      }
    ]
  },
  openTheDoor: {
    text: [
      "Tu te tiens devant un jardin merveilleux, un lieu que personne d’autre ne semble connaître. Les plantes ici sont étranges, magiques, et le silence qui y règne est presque apaisant. Devant toi, trois chemins s’ouvrent, chacun invitant à l’exploration.",
      "Le premier, bordé de fleurs bleues lumineuses, scintille doucement dans la pénombre, comme si elles te murmuraient un secret. Le deuxième chemin, quant à lui, est couvert par des fougères géantes, si hautes qu’elles créent une arche naturelle au-dessus de ta tête, comme un tunnel végétal. Le troisième sentier, un peu plus étroit, est enveloppé de vignes entrelacées qui semblent former un labyrinthe naturel.",
      "Chaque chemin paraît fascinant, et pourtant, tu sens que chacun pourrait t’emmener dans une direction bien différente..."
    ],
    choices: [
      {
        text: "Chemin des fleurs bleues lumineuses.",
        next: "luminousBlueFlowers"
      },
      {
        text: "Chemin des fougères géantes.",
        next: "giantFerns"
      },
      {
        text: "Sentier des vignes entrelacées.",
        next: "intertwinedVines"
      }
    ]
  },
  luminousBlueFlowers: {
    text: [
      "Tu trouves un étang et un Gardien de l’Eau. Il te propose cette énigme : \"Je suis léger comme une plume, mais je peux tomber comme une pluie. Qui suis-je ?\""
    ],
    choices: [
      {
        text: "Le vent.",
        next: "wind"
      },
      {
        text: "L'eau.",
        next: "water"
      },
      {
        text: "La neige.",
        next: "snow"
      }
    ]
  },
  wind: {
    text: [
      "Le Gardien te remercie, mais tu repars sans récompense."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  water: {
    text: [
      "Le Gardien sourit et te remet une fiole d'eau enchantée. \"Cette eau a le pouvoir de révéler les secrets du jardin\", dit-il. \"Utilise-la judicieusement.\""
    ],
    choices: [
      {
        text: "Utiliser la fiole pour arroser une plante.",
        next: "vialWaterPlant"
      },
      {
        text: "La garder pour plus tard.",
        next: "keepVial"
      },
      {
        text: "Explorer d'autres parties du jardin.",
        next: "exploreOtherParts"
      },
    ]
  },
  vialWaterPlant: {
    text: [
      "Tu cherches une plante à arroser et trouves un arbre ancien. Lorsque l'eau touche ses racines, il commence à briller d'une lumière dorée.",
      "L'arbre te parle : \"Merci, jeune aventurier. En retour, je t'offre une clé pour un passage secret vers un trésor caché !\""
    ],
    choices: [
      {
        text: "Partir à la recherche du trésor.",
        next: "searchForTheTreasure"
      },
      {
        text: "Explorer encore le jardin avant d'utiliser la clé.",
        next: "exploreBeforeUsingKey"
      },
    ]
  },
  searchForTheTreasure: {
    text: [
      "Tu prends la clé et suis les indications que l’arbre t’a données. Tu traverses le jardin en suivant un chemin bordé de fleurs colorées et d’arbres majestueux.",
      "Après quelques minutes, tu arrives devant une porte en bois sculptée, ornée de motifs de plantes. La clé brille dans ta main, semblant vibrer d’énergie magique."
    ],
    choices: [
      {
        text: "Utiliser la clé pour ouvrir la porte.",
        next: "useKey"
      },
      {
        text: "Regarder autour de la porte pour des indices.",
        next: "lookAroundDoor"
      }
    ]
  },
  useKey: {
    text: [
      "Tu insères la clé dans la serrure et l'actionnes. La porte s'ouvre lentement, révélant une salle remplie de trésors : des gemmes étincelantes, des plantes rares et un ancien livre de magie.",
      "En explorant la salle, tu découvres que le livre contient des secrets sur les plantes magiques et leurs pouvoirs. Tu décides de prendre le livre et les gemmes.",
      "En sortant du jardin, tu réalises que tu as non seulement gagné des trésors matériels, mais aussi des connaissances précieuses qui te permettront de protéger le jardin et ses secrets à l'avenir. Tu deviens un Gardien du Jardin, engagé à préserver sa magie pour les générations futures."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  lookAroundDoor: {
    text: [
      "En inspectant les environs, tu remarques des symboles gravés dans la pierre, indiquant des histoires anciennes sur les plantes du jardin.",
      "Tu trouves un autre chemin qui contourne la porte et mène à une cascade magique où les plantes poussent en harmonie. Tu as l’opportunité de découvrir de nouvelles espèces et d'en apprendre davantage sur leur magie.",
      "En suivant ce chemin, tu deviens un explorateur des merveilles du jardin, t’alliant avec les plantes et les créatures. Tu comprends que chaque plante a son propre rôle dans l'écosystème, et tu promets de partager tes découvertes avec le monde extérieur."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  exploreBeforeUsingKey: {
    text: [
      "Tu décides de faire un dernier tour du jardin avant d'ouvrir la porte. En te promenant, tu rencontres des animaux du jardin, comme des papillons colorés et des oiseaux chantants.",
      "Un petit écureuil s'approche de toi et semble vouloir te montrer quelque chose. Tu le suis jusqu'à un autre arbre, où il y a une cachette secrète remplie de graines magiques."
    ],
    choices: [
      {
        text: "Prendre les graines.",
        next: "takeSeeds"
      },
      {
        text: "Laisser les graines et continuer vers la porte.",
        next: "leaveSeeds"
      }
    ]
  },
  takeSeeds: {
    text: [
      "Tu prends quelques graines magiques avec toi. En ouvrant la porte avec la clé, tu as maintenant un nouveau pouvoir : tu peux faire pousser des plantes extraordinaires partout où tu vas.",
      "Ces graines deviennent le symbole de ta connexion avec le jardin. Tu deviens un Gardien de la Nature, voyageant à travers le monde et plantant des graines de magie dans chaque coin que tu visites."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  leaveSeeds: {
    text: [
      "Tu décides que le jardin doit garder ses trésors. En continuant vers la porte et en l’ouvrant, tu trouves le livre et les gemmes.",
      "Ta sagesse et ta volonté de préserver le jardin te rendent digne de son trésor. Tu sors du jardin, portant avec toi des connaissances anciennes et un engagement à protéger la magie des plantes."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  keepVial: {
    text: [
      "Tu mets la fiole dans ta poche et continues d'explorer le jardin.",
      "Tu découvres une serre remplie de plantes étranges. Dans la serre, une gardienne des plantes t'interpelle. Elle te demande si tu as quelque chose de spécial à partager."
    ],
    choices: [
      {
        text: "Montrer la fiole d'eau enchantée.",
        next: "showVial"
      },
      {
        text: "Parler des merveilles du jardin.",
        next: "talkAboutWonders"
      }
    ]
  },
  showVial: {
    text: [
      "Tu sors la fiole d’eau enchantée de ta poche et la montres à la Gardienne. Ses yeux s’illuminent de reconnaissance. \"Cette fiole contient un pouvoir ancien\", dit-elle doucement. \"Elle peut rendre vie aux plantes en danger.\"",
      "Elle t’amène devant une plante fanée qui semble sur le point de mourir. \"Si tu verses l’eau sur cette plante, tu sauveras le jardin de la destruction.\""
    ],
    choices: [
      {
        text: "Utiliser la fiole pour sauver la plante.",
        next: "useVialToSavePlant"
      },
      {
        text: "Garder la fiole et chercher une autre utilisation.",
        next: "keepVialToAnotherUse"
      }
    ]
  },
  useVialToSavePlant: {
    text: [
      "Tu verses l’eau enchantée sur la plante fanée. Lentement, les feuilles reprennent vie, la tige se redresse, et bientôt, la plante fleurit de nouveau. La Gardienne te regarde avec gratitude.",
      "La plante que tu as sauvée est le cœur du jardin. Grâce à ton action, le jardin entier est à nouveau en pleine floraison. La Gardienne te nomme Gardien du Jardin, et tu apprends que tu peux revenir ici quand tu veux.",
      "En sauvant le cœur du jardin, tu deviens son protecteur. Ta mission est désormais de veiller à ce que ses plantes continuent de prospérer. Tu quittes le jardin avec un profond sentiment d’accomplissement, sachant que tu as aidé à préserver un endroit magique."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  keepVialToAnotherUse: {
    text: [
      "Tu décides de ne pas utiliser la fiole immédiatement. La Gardienne te regarde avec curiosité mais ne te retient pas. En sortant de la serre, tu continues ton exploration du jardin.",
      "Tu arrives dans une clairière cachée, où se trouve un mystérieux arbre de cristal. Cet arbre semble avoir besoin de l’eau enchantée. Si tu utilises la fiole ici, tu pourrais révéler des secrets bien plus anciens."
    ],
    choices: [
      {
        text: "Utiliser la fiole sur l’arbre de cristal.",
        next: "useVialToCristalTree"
      },
      {
        text: "Garder encore la fiole pour une autre situation.",
        next: "keepVialToAnotherSituation"
      }
    ]
  },
  useVialToCristalTree: {
    text: [
      "Tu verses délicatement l’eau enchantée sur les racines de l’arbre de cristal. Aussitôt, une lumière douce se diffuse à travers l’arbre, et ses branches commencent à briller. L’arbre se met à vibrer doucement, et des fleurs de cristal apparaissent, émettant une mélodie envoûtante.",
      "Soudain, l’arbre te parle d’une voix ancienne et apaisante : \"Merci, jeune aventurier. En m'aidant, tu as révélé le plus grand secret du jardin.\"",
      "Un passage secret s'ouvre sous tes pieds, te menant vers une grotte souterraine remplie de plantes légendaires et d’anciens artefacts de la nature. Au centre, une grande bibliothèque naturelle t’attend, contenant des livres anciens sur la magie des plantes et des secrets oubliés du jardin.",
      "Tu as débloqué l’accès à une sagesse ancienne. Grâce à ton choix d'utiliser la fiole sur l’arbre de cristal, tu as découvert des trésors de connaissance. Tu deviens un maître botaniste et utilise ces savoirs pour protéger et revitaliser la nature, non seulement dans le jardin, mais dans le monde entier. C’est la fin d’un voyage, mais aussi le début d’une nouvelle mission : celle de restaurer la magie de la nature autour de toi."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  keepVialToAnotherSituation: {
    text: [
      "Tu décides de ne pas utiliser la fiole sur l’arbre de cristal et continues ton exploration. Cependant, tu sens que l'arbre est important et tu te promet de revenir plus tard. En quittant la clairière, tu aperçois au loin un ancien temple végétal recouvert de vignes scintillantes.",
      "En approchant du temple, tu rencontres un gardien ancien, une créature en partie plante, en partie pierre. Il te regarde avec sagesse et te demande si tu as apporté quelque chose qui pourrait aider à restaurer le temple. C’est à ce moment que tu réalises que la fiole d’eau enchantée pourrait être la clé."
    ],
    choices: [
      {
        text: "Utiliser la fiole pour restaurer le temple.",
        next: "useVialToRestoreTemple"
      },
      {
        text: "Ne pas utiliser la fiole et continuer à explorer.",
        next: "dontUseVialAndExplore"
      }
    ]
  },
  useVialToRestoreTemple: {
    text: [
      "Tu décides d'utiliser la fiole d'eau enchantée. Lorsque l'eau touche les racines des vignes du temple, celles-ci commencent à scintiller, se déployant sur les murs de pierre ancienne. La magie du temple est restaurée, et une douce lumière dorée se répand tout autour.",
      "Le gardien ancien sourit doucement : \"Merci, jeune aventurier. Grâce à toi, le temple est à nouveau vivant. Son énergie sacrée est préservée.\"",
      "Le temple restauré révèle un trésor caché, mais ce n’est pas un trésor matériel. Il s’agit d’une source d’eau magique qui alimente non seulement le temple, mais aussi tout le jardin. Ce trésor est une bénédiction pour la vie qui s’y trouve.",
      "En utilisant la fiole pour restaurer le temple, tu as aidé à régénérer l’équilibre naturel du jardin. Tu quittes le jardin avec la reconnaissance du gardien ancien et le sentiment d'avoir accompli une mission importante. Grâce à ton choix, le jardin prospérera pendant de nombreuses générations. Tu es désormais un protecteur du jardin, et ta connexion avec ce lieu est profonde et éternelle."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  dontUseVialAndExplore: {
    text: [
      "Tu hésites et décides de ne pas utiliser la fiole pour restaurer le temple. Le gardien ancien hoche la tête, respectant ton choix, mais tu ressens une légère tristesse dans son regard.",
      "En continuant ton exploration, tu traverses des chemins et des paysages magnifiques, mais quelque chose semble manquer. L’énergie du jardin semble affaiblie, et tu sens que l’occasion d’apporter une vraie contribution t’a échappé.",
      "En ne restaurant pas le temple, tu continues ton aventure, mais au fond de toi, tu sais que tu as laissé passer une chance unique. Le jardin reste en partie endormi, et bien que tu aies vécu une belle aventure, tu ressors avec un sentiment d'inachevé.",
      "Tu quittes le jardin avec de beaux souvenirs, mais tu n’as pas utilisé tout ton potentiel pour restaurer son harmonie. Le gardien du jardin te laisse partir, mais tu sais que tu aurais pu faire davantage pour protéger et préserver cet endroit magique."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  talkAboutWonders: {
    text: [
      "Tu décides de ne pas montrer la fiole tout de suite et racontes plutôt à la Gardienne tout ce que tu as vu dans le jardin : les fleurs bleues, les fougères géantes, les vignes entrelacées et les créatures magiques.",
      "La Gardienne t’écoute attentivement et sourit : \"Tu as une véritable connexion avec le jardin. Il te fait confiance.\"",
      "Elle te montre une plante rare, qu’elle appelle la Plante des Secrets. Cette plante a la capacité de révéler les mystères cachés du jardin si tu sais comment l’utiliser."
    ],
    choices: [
      {
        text: "Demander comment utiliser la Plante des Secrets.",
        next: "askHowUsePlant"
      },
      {
        text: "Proposer d’utiliser ta fiole d’eau enchantée sur la plante.",
        next: "suggestUsingVialOnPlant"
      }
    ]
  },
  askHowUsePlant: {
    text: [
      "La Gardienne te regarde avec bienveillance et te dit : \"La Plante des Secrets ne révèle ses mystères qu’à ceux qui ont un cœur pur et une curiosité sincère. Si tu fermes les yeux et te concentres sur ce que tu veux savoir, elle te montrera la voie.\"",
      "Tu fermes les yeux, te concentrant sur la question qui te hante : Quels sont les véritables mystères du jardin ?",
      "La Plante des Secrets s’illumine doucement, et soudain, tu vois une vision : des images du passé du jardin, de ses gardiens anciens, et de la magie qui lie chaque plante à la vie du monde.",
      "Grâce à la Plante des Secrets, tu apprends que le jardin est bien plus qu’un simple lieu magique. Il est le cœur vivant de la nature elle-même, et ceux qui en prennent soin sont les gardiens de l’équilibre de la planète. Tu comprends maintenant que chaque plante est connectée à un réseau invisible de vie, et que le jardin est une source de pouvoir pour tout ce qui est naturel.",
      "En obtenant cette connaissance, tu deviens toi-même un Gardien des Secrets du Jardin. Tu réalises que ton rôle ne se limite pas à ce lieu : tu dois maintenant porter ces connaissances et cette sagesse dans le monde extérieur. Tu promets de protéger la nature partout où tu iras, aidant à restaurer l’équilibre de la planète. Le jardin te remerciera toujours de l’avoir compris."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  suggestUsingVialOnPlant: {
    text: [
      "Tu proposes d’utiliser l’eau enchantée sur la Plante des Secrets. La Gardienne hoche la tête en signe d’approbation. \"C’est un choix courageux\", dit-elle, \"mais sois prêt, car l’eau révélera tout, même ce que tu n’es pas encore prêt à entendre.\"",
      "Tu verses l’eau sur la Plante des Secrets, et immédiatement, elle grandit et brille d'une lumière éclatante. Ses feuilles s’ouvrent, révélant un fruit lumineux.",
      "La Gardienne te donne le fruit et te dit : \"Ce fruit contient l’essence même du jardin. Si tu le manges, tu deviendras une partie de ce lieu à jamais, mais tu ne pourras plus jamais revenir dans le monde extérieur.\""
    ],
    choices: [
      {
        text: "Manger le fruit et rester dans le jardin.",
        next: "eatFruit"
      },
      {
        text: "Refuser et garder le fruit comme souvenir.",
        next: "keepFruit"
      }
    ]
  },
  eatFruit: {
    text: [
      "Tu prends une profonde inspiration et manges le fruit. Aussitôt, tu sens une énergie extraordinaire te traverser. Le jardin entier semble te reconnaître, et les plantes s'inclinent légèrement vers toi.",
      "Tu deviens un Gardien éternel du jardin. Tu restes pour toujours dans cet endroit magique, veillant sur ses merveilles et garantissant sa protection contre tout danger. Tu es désormais lié à la nature et au jardin pour l’éternité, remplissant une mission noble et pure."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  keepFruit: {
    text: [
      "Tu refuses de manger le fruit mais le prends avec toi comme symbole de ce que tu as appris. La Gardienne te sourit et dit : \"Tu es sage de ne pas te précipiter. Ce fruit te rappellera toujours le lien spécial que tu as avec le jardin.\"",
      "Tu quittes le jardin avec le fruit en main, sachant que tu ne seras jamais loin de cet endroit magique. Tu as choisi de préserver la mémoire du jardin sans t'y attacher pour toujours. En partant, tu te promets de protéger la nature dans le monde extérieur et de revenir un jour, si nécessaire."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  exploreOtherParts: {
    text: [
      "Tu décides d'explorer davantage. En te promenant, tu entends un bruit étrange. Tu découvres un groupe de créatures en train de danser autour d'un vieux chêne."
    ],
    choices: [
      {
        text: "Te joindre à la danse.",
        next: "joinDance"
      },
      {
        text: "Observer silencieusement.",
        next: "observeSilently"
      }
    ]
  },
  joinDance: {
    text: [
      "Tu décides de te joindre à la danse des créatures. Elles t'accueillent avec des sourires joyeux, et bientôt tu te sens enveloppé dans une atmosphère magique. Les mouvements des créatures sont étranges, presque hypnotiques, et tu réalises que la danse n'est pas ordinaire : elle a un but sacré.",
      "Alors que tu danses, le vieux chêne commence à briller. Ses racines s'enfoncent profondément dans le sol, et ses branches s'étendent vers le ciel. La danse semble réveiller la magie cachée dans l'arbre. Bientôt, une porte de lumière apparaît dans le tronc du chêne, et les créatures t'encouragent à entrer.",
      "En passant la porte, tu te retrouves dans une clairière cachée remplie de plantes lumineuses et d'arbres géants. Au centre, une fontaine cristalline scintille doucement. En t'approchant, tu comprends que l'eau de la fontaine est l'élément vital du jardin tout entier.",
      "Tu réalises que la danse t'a conduit à l'essence du jardin. En trouvant cette source, tu deviens le gardien du cœur du jardin, chargé de veiller sur sa magie. Tu quittes l'aventure avec la connaissance que tu as contribué à la préservation de ce lieu magique pour les générations futures."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  observeSilently: {
    text: [
      "Tu décides de rester à l'écart, observant les créatures dans leur danse étrange. Leurs mouvements sont harmonieux, presque envoûtants, et tu sens une énergie ancienne émaner du vieux chêne. Cependant, en restant à distance, tu comprends que cette danse est une célébration ancienne, destinée à préserver l’équilibre du jardin.",
      "Alors que tu observes, une petite créature s'approche de toi et te tend un objet scintillant : une graine dorée. \"C’est un cadeau\", murmure-t-elle. Si tu la plantes dans un endroit spécial, elle te révélera un secret.\"",
      "Tu prends la graine et cherches un endroit dans le jardin où la planter. Finalement, tu trouves un coin isolé près d’une rivière. Tu plantes la graine et attends patiemment. Bientôt, une petite pousse émerge du sol, grandissant rapidement pour devenir une plante mystérieuse qui commence à chanter doucement.",
      "En plantant la graine, tu as éveillé une nouvelle créature protectrice pour le jardin. Grâce à ton observation patiente, tu es devenu un gardien silencieux, veillant sur le bien-être du jardin et de ses habitants. Tu quittes le jardin avec la certitude que tu as joué un rôle important dans sa préservation."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  snow: {
    text: [
      "Le Gardien est déçu, tu retournes au début."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  giantFerns: {
    text: [
      "Tu es face à la statue mystérieuse, qui te pose la question : \"Quelle plante survit dans le désert ?\""
    ],
    choices: [
      {
        text: "Le cactus",
        next: "cactus"
      },
      {
        text: "La rose",
        next: "rose"
      }
    ]
  },
  cactus: {
    text: [
      "La statue sourit doucement, puis une lumière dorée émane de ses yeux. \"Tu as bien répondu\", dit-elle d'une voix grave. Elle te tend alors une clé dorée.",
      "Soudain, un passage secret s'ouvre derrière la statue, révélant un chemin sombre qui descend sous les fougères géantes. La clé semble être la seule manière de progresser dans cette partie du jardin.",
      "Tu empruntes le passage et découvres une grotte lumineuse, remplie de plantes anciennes qui n'existent nulle part ailleurs. Au centre de la grotte, une source d’eau cristalline coule doucement, entourée de plantes phosphorescentes. Il y a une plaque d'inscription qui te révèle le secret du jardin : \"Celui qui boit de cette eau sera lié à la nature pour toujours.\""
    ],
    choices: [
      {
        text: "Boire l’eau de la source pour te lier à la nature.",
        next: "drinkSpringWater"
      },
      {
        text: "Refuser et garder la clé comme souvenir.",
        next: "refuseAndKeepKey"
      }
    ]
  },
  drinkSpringWater: {
    text: [
      "Tu t'agenouilles près de la source et bois une petite gorgée de l'eau cristalline. Immédiatement, tu ressens une connexion profonde avec chaque plante et chaque arbre du jardin. Les fougères géantes, les fleurs cachées, les arbres imposants... tout semble te parler, et tu comprends que tu es désormais une partie vivante du jardin.",
      "En buvant cette eau, tu es devenu le protecteur du jardin, un être éternel lié à sa magie. Tu ne vieillis plus et veilles désormais sur ce lieu sacré pour le protéger des dangers. Tu fais partie du cycle naturel du jardin pour l'éternité."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  refuseAndKeepKey: {
    text: [
      "Tu choisis de ne pas boire l’eau, mais tu gardes la clé dorée comme symbole de ton aventure. En sortant de la grotte, tu ressens que tu as fait un choix important. Le jardin t’a permis de découvrir ses secrets, mais tu décides de rester toi-même, sans te lier à cet endroit pour l’éternité.",
      "Tu quittes le jardin en emportant avec toi la clé dorée et un profond respect pour la nature et ses mystères. Tu es désormais un gardien externe, quelqu’un qui comprend la beauté et la magie de la nature, prêt à protéger le monde extérieur grâce à ce que tu as appris."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  rose: {
    text: [
      "La statue secoue doucement la tête. \"Réfléchis encore\", dit-elle, avant de s'éteindre. Tu comprends que ce n’était pas la bonne réponse.",
      "La statue te renvoie à l’entrée du chemin, près des fougères géantes. Tu as une nouvelle chance de résoudre l’énigme ou d'explorer d'autres parties du jardin.",
      "Tu reviens au début du chemin près des fougères géantes, avec l'option d'essayer à nouveau de répondre à l'énigme ou de choisir un autre chemin dans le jardin."
    ],
    choices: [
      {
        text: "Retourner près des fougères géantes",
        next: "giantFerns"
      }
    ]
  },
  intertwinedVines: {
    text: [
      "Tu entres dans un bosquet. Une liane t’attrape."
    ],
    choices: [
      {
        text: "Essayer de te débattre.",
        next: "tryStruggle"
      },
      {
        text: "Parler à la liane.",
        next: "talkToCreeper"
      }
    ]
  },
  tryStruggle: {
    text: [
      "Tu te débats avec toutes tes forces, et finalement, la liane relâche son étreinte. Tu réussis à te libérer, mais tu es épuisé. Les autres chemins du jardin semblent maintenant beaucoup plus difficiles à emprunter, et tu te rends compte que tu es revenu au début du chemin.",
      "Tu as réussi à te libérer, mais ta décision de te débattre t’a ramené au point de départ, et tu devras choisir à nouveau parmi les différentes options pour explorer le jardin. Cela te donne une seconde chance d'aborder l'aventure sous un nouvel angle."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  talkToCreeper: {
    text: [
      "Tu décides de parler à la liane, t’adressant à elle calmement. \"Je ne veux pas te faire de mal. Je cherche simplement à comprendre ce jardin.\"",
      "La liane se relâche doucement, te libérant. Ensuite, elle s’agite et fait apparaître une carte du jardin, faite de feuilles et de racines. Sur cette carte, tu peux voir différents chemins, dont certains que tu n’avais pas remarqués auparavant.",
      "Grâce à la liane, tu reçois un avantage précieux : la carte révèle des zones secrètes du jardin, notamment un sanctuaire caché où les plantes les plus anciennes veillent sur le jardin. Ce sanctuaire pourrait détenir les réponses que tu cherches."
    ],
    choices: [
      {
        text: "Suivre la carte jusqu’au sanctuaire caché.",
        next: "followMap"
      },
      {
        text: "Explorer un autre chemin du jardin.",
        next: "exploreAnotherWay"
      }
    ]
  },
  followMap: {
    text: [
      "En suivant les indications de la carte, tu te retrouves devant une porte recouverte de vignes épaisses. La carte s’illumine légèrement, te guidant. Lorsque tu pousses la porte, tu découvres une clairière enchantée, baignée de lumière dorée, où d'immenses plantes ancestrales semblent te regarder.",
      "Au centre de la clairière se trouve une fontaine d'eau pure, émettant une douce lueur. Tu sais instinctivement que cette eau est spéciale et qu'elle détient un pouvoir mystérieux.",
      "L’une des plantes parle d’une voix douce et ancienne : \"Si tu bois de cette fontaine, tu seras lié à ce jardin à jamais.\""
    ],
    choices: [
      {
        text: "Boire l’eau de la fontaine pour devenir le gardien du jardin.",
        next: "drinkFountainWater"
      },
      {
        text: "Refuser et garder la carte comme souvenir.",
        next: "refuseAndKeepMap"
      }
    ]
  },
  drinkFountainWater: {
    text: [
      "Tu t’approches de la fontaine et bois une petite gorgée d’eau. Immédiatement, tu sens une connexion profonde avec le jardin. Les plantes, les arbres, et même le sol semblent te parler. Tu deviens le nouveau gardien du sanctuaire, lié à ce lieu pour l’éternité.",
      "En buvant cette eau, tu deviens un gardien du jardin, veillant sur ses plantes anciennes et préservant l’équilibre naturel. Ton aventure se termine ici, mais ton rôle en tant que protecteur du jardin commence."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  refuseAndKeepMap: {
    text: [
      "Tu décides de ne pas boire l’eau, préférant garder ton autonomie. La plante te sourit et dit : \"Ton choix est respecté. Que cette carte te rappelle toujours la magie de ce jardin.\"",
      "Tu quittes le sanctuaire avec la carte magique, sachant que tu peux revenir quand tu le souhaites. Tu pars en ayant appris beaucoup sur le jardin et ta propre relation avec la nature."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  exploreAnotherWay: {
    text: [
      "Tu décides de ne pas suivre la carte jusqu’au sanctuaire, mais d’explorer un autre chemin. Tu trouves un sentier sinueux parmi les plantes, qui te mène vers une partie encore plus mystérieuse du jardin. Ce chemin semble rempli de nouvelles aventures, mais pour l'instant, ton exploration se poursuit.",
      "L’aventure continue. Tu choisis d'explorer le jardin sous de nouveaux angles, avec encore plus de secrets à découvrir, sans savoir ce qui t'attend derrière chaque détour."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  climbTheWall: {
    text: [
      "Tu décides de ne pas ouvrir la porte tout de suite et choisis plutôt de grimper sur le mur pour observer ce qu’il y a de l’autre côté. Tu montes doucement, t’accrochant aux pierres et aux plantes qui grimpent le long du mur.",
      "Une fois en haut, tu aperçois un jardin extraordinaire. Des plantes d'une taille imposante, aux couleurs vives et lumineuses, s’étendent à perte de vue. Des fleurs aux pétales scintillants, des arbres géants aux feuilles dorées, et une rivière d’eau claire qui serpente à travers les parterres. Au loin, tu aperçois une statue ancienne, partiellement cachée par des fougères géantes, ainsi que des créatures semblant jouer autour d’un vieux chêne majestueux.",
      "Cependant, juste en dessous de toi, près de la porte, tu remarques quelque chose d’étrange : une plante en mouvement ! Ses longues lianes s’étendent lentement comme si elles guettaient quelque chose. Cette plante ne semble pas être ordinaire..."
    ],
    choices: [
      {
        text: "Descendre et ouvrir la porte pour explorer de plus près.",
        next: "goDownstairs"
      },
      {
        text: "Sauter par-dessus le mur pour entrer directement dans le jardin.",
        next: "jumpOver"
      }
    ]
  },
  goDownstairs: {
    text: [
      "Tu redescends doucement et décides d’ouvrir la porte. La plante qui semblait bouger devient immobile dès que tu la touches. La porte s’ouvre sans un bruit, et tu entres dans le jardin avec prudence. Une fois à l'intérieur, tu peux maintenant explorer librement."
    ],
    choices: [
      {
        text: "Ouvrir la porte",
        next: "openTheDoor"
      }
    ]
  },
  jumpOver: {
    text: [
      "Avec agilité, tu sautes par-dessus le mur et atterris dans une partie plus cachée du jardin, où la végétation est plus dense. En t'approchant, tu réalises que les plantes ici semblent vivantes, certaines bougent doucement au rythme du vent, d'autres réagissent à ta présence.",
      "Une plante particulièrement grande, avec de longues lianes, semble s’agiter en ta direction.",
      "La plante s'approche lentement, curieuse. Mais au lieu de t'attaquer, elle tend une de ses lianes et te montre un chemin caché qui n'était pas visible depuis l'extérieur. Il semble mener à une clairière secrète où la végétation brille d'une lumière douce."
    ],
    choices: [
      {
        text: "Suivre le chemin caché que te montre la plante.",
        next: "followHiddenPath"
      }
    ]
  },
  followHiddenPath: {
    text: [
      "Tu décides de faire confiance à la plante et de suivre le chemin qu'elle t'indique. Au fur et à mesure que tu avances, la végétation devient de plus en plus étrange : des fleurs phosphorescentes illuminent le sentier, et des feuilles géantes bougent doucement au passage du vent, comme si elles te guidaient. Le chemin semble plus mystérieux à chaque pas, et l’atmosphère est étrangement calme.",
      "Finalement, tu arrives dans une clairière secrète entourée d’arbres gigantesques. Leur feuillage brille d'une lumière argentée, créant une ambiance presque irréelle. Au centre de la clairière se trouve une fontaine scintillante, dont l’eau pure émet une douce lumière dorée. Il y a également un piédestal en pierre, sur lequel repose une graine dorée, légèrement éclairée par les rayons du soleil."
    ],
    choices: [
      {
        text: "Ramasser la graine dorée pour découvrir son secret.",
        next: "pickUpGoldenSeed"
      },
      {
        text: "Boire l’eau de la fontaine mystérieuse.",
        next: "drinkMysteriousFountainWater"
      }
    ]
  },
  pickUpGoldenSeed: {
    text: [
      "Tu t'approches du piédestal et ramasses délicatement la graine dorée. Aussitôt, une vibration douce parcourt le sol sous tes pieds, et les arbres géants autour de toi semblent te saluer en inclinant légèrement leurs branches. La graine est chaude au toucher, comme si elle contenait une vie puissante.",
      "Tu sens que cette graine détient un pouvoir immense, capable de faire pousser n’importe quelle plante, peu importe les conditions. Elle pourrait régénérer des forêts, guérir des terres stériles ou créer de nouvelles formes de vie végétale.",
      "En prenant la graine, tu deviens le gardien d’un secret ancien, porteur d’un pouvoir immense pour la nature. Le jardin te confie cette responsabilité, et tu quittes la clairière avec la promesse de protéger ce pouvoir et de l’utiliser à bon escient."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
  drinkMysteriousFountainWater: {
    text: [
      "Tu t'approches de la fontaine et bois une petite gorgée de l’eau cristalline. Aussitôt, tu sens une vague de calme et de connexion profonde avec tout ce qui t’entoure. Les arbres, les plantes, les fleurs, chaque être vivant du jardin semble te parler, et tu comprends que tu es maintenant lié à ce lieu magique.",
      "L'eau de la fontaine t'a conféré la capacité de communiquer avec les plantes et de comprendre leurs besoins. Ce don te permettrait d'aider les plantes où que tu ailles, de préserver la nature et de protéger les lieux en danger.",
      "En buvant cette eau, tu es devenu un protecteur de la nature, capable de ressentir et de comprendre les plantes. Tu quittes la clairière avec ce nouveau pouvoir, prêt à défendre le jardin et à utiliser ce don pour préserver l’équilibre du monde végétal."
    ],
    choices: [
      {
        text: "Recommencer.",
        next: "start"
      }
    ]
  },
}

export default storyData;
