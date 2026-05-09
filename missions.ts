import { Mission } from './types';

export const MISSIONS: Mission[] = [
  {
    id: 'tecton-1',
    title: 'Plattentektonik Basics',
    description: 'Lerne die Grundlagen der Erdkrustenbewegung.',
    icon: 'Globe',
    statusRank: 'Laien-Geologe',
    questions: [
      {
        id: 'q1',
        text: 'Wer war der Begründer der Theorie der Kontinentaldrift?',
        options: ['Albert Einstein', 'Alfred Wegener', 'Charles Darwin', 'Isaac Newton'],
        correctAnswer: 1,
        explanation: 'Alfred Wegener schlug 1912 die Theorie der Kontinentaldrift vor.',
        difficulty: 'beginner'
      },
      {
        id: 'q2',
        text: 'Was versteht man unter der Lithosphäre?',
        options: ['Der flüssige Kern', 'Die oberste, feste Gesteinsschicht', 'Die Gasschicht der Erde', 'Die tiefste Erdschicht'],
        correctAnswer: 1,
        explanation: 'Die Lithosphäre umfasst die Erdkruste und den obersten Teil des Erdmantels.',
        difficulty: 'beginner'
      },
       {
        id: 'q3',
        text: 'Wie viele große tektonische Platten gibt es etwa?',
        options: ['3', '7-8', '50', 'Über 100'],
        correctAnswer: 1,
        explanation: 'Es gibt etwa 7-8 Hauptplatten und viele kleinere Mikroplatten.',
        difficulty: 'intermediate'
      },
      {
        id: 'q4',
        text: 'Was passiert an einer divergierenden Plattengrenze?',
        options: ['Platten driften auseinander', 'Platten stoßen zusammen', 'Platten gleiten aneinander vorbei', 'Nichts passiert'],
        correctAnswer: 0,
        explanation: 'Divergierend bedeutet "auseinanderstrebend". Hier entsteht oft neuer Meeresboden.',
        difficulty: 'intermediate'
      },
      {
        id: 'q5',
        text: 'Welches Gebirge entstand durch die Kollision der Indischen mit der Eurasischen Platte?',
        options: ['Anden', 'Alpen', 'Himalaya', 'Appalachen'],
        correctAnswer: 2,
        explanation: 'Der Himalaya wächst auch heute noch durch diesen Prozess.',
        difficulty: 'advanced'
      },
      {
        id: 'q6',
        text: 'Welche Rolle spielen die MOR (Mittelozeanischen Rücken)?',
        options: ['Meeresströmungen lenken', 'Neuen Meeresboden bilden', 'Erdmagnetfeld erzeugen', 'Vulkane löschen'],
        correctAnswer: 1,
        explanation: 'Dort steigt Magma auf und bildet neue ozeanische Kruste (Sea-Floor Spreading).',
        difficulty: 'advanced'
      },
      {
        id: 'q7',
        text: 'Warum driften die Platten überhaupt?',
        options: ['Durch den Wind', 'Durch Gezeiten', 'Durch Mantelkonvektion', 'Durch Erdrotation'],
        correctAnswer: 2,
        explanation: 'Heißes Magma steigt auf, kühlt ab und sinkt wieder - wie in einem Kochtopf.',
        difficulty: 'advanced'
      },
      {
        id: 'q8',
        text: 'Was ist eine Subduktionszone?',
        options: ['Wo Platten neu entstehen', 'Wo sich eine Platte unter die andere schiebt', 'Wo Gebirge abgetragen werden', 'Ein ruhiges Gebiet im Ozean'],
        correctAnswer: 1,
        explanation: 'Oft taucht schwerere ozeanische Kruste unter leichtere kontinentale Kruste.',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'nature-disasters',
    title: 'Tektonik & Naturkatastrophen',
    description: 'Wie Plattenbewegungen Gefahr bringen.',
    icon: 'Zap',
    statusRank: 'Geologe',
    questions: [
       {
        id: 'nd-q1',
        text: 'Welche Katastrophe tritt oft an Plattengrenzen auf?',
        options: ['Hurrikan', 'Erdbeben', 'Dürre', 'Waldbrand'],
        correctAnswer: 1,
        explanation: 'Die Reibung zwischen Platten entlädt sich in ruckartigen Erdbeben.',
        difficulty: 'beginner'
      },
      {
        id: 'nd-q2',
        text: 'Was ist das Epizentrum?',
        options: ['Der tiefste Punkt im Erdkern', 'Der Punkt an der Oberfläche direkt über dem Bebenherd', 'Der sicherste Ort bei Beben', 'Die Stärke eines Bebens'],
        correctAnswer: 1,
        explanation: 'Das Epizentrum liegt vertikal über dem Hypozentrum (Bebenherd).',
        difficulty: 'intermediate'
      },
      {
        id: 'nd-q3',
        text: 'Was misst die Richterskala?',
        options: ['Tiefe des Lochs', 'Stärke (Magnitude) eines Bebens', 'Anzahl der Toten', 'Dauer des Regens'],
        correctAnswer: 1,
        explanation: 'Die Richterskala ist ein Maß für die im Fokus freigesetzte Energie.',
        difficulty: 'intermediate'
      },
      {
        id: 'nd-q4',
        text: 'Was ist ein Tsunami?',
        options: ['Ein kleiner Fluss', 'Eine Riesenwelle durch Seebeben', 'Ein starker Wind aus Japan', 'Ein Vulkan im Meer'],
        correctAnswer: 1,
        explanation: 'Wenn der Meeresboden bei einem Beben vertikal versetzt wird, entstehen Tsunamis.',
        difficulty: 'beginner'
      },
       {
        id: 'nd-q5',
        text: 'Welcher Ring ist berüchtigt für seine Vulkane und Erdbeben?',
        options: ['Der Eiserne Ring', 'Der Pazifische Feuerring', 'Der Goldene Kreis', 'Der Saturn-Ring'],
        correctAnswer: 1,
        explanation: 'Rund um den Pazifik liegen die meisten aktiven Subduktionszonen.',
        difficulty: 'intermediate'
      },
      {
        id: 'nd-q6',
        text: 'Wie schützt man Gebäude vor Erdbeben?',
        options: ['Wände dünner machen', 'Gummilager/Dämpfer einbauen', 'Auf Sand bauen', 'Hochhäuser vermeiden'],
        correctAnswer: 1,
        explanation: 'Moderne Technik lässt Häuser mitschwingen oder entkoppelt sie vom Boden.',
        difficulty: 'advanced'
      },
      {
        id: 'nd-q7',
        text: 'Was ist Pyroklastisches Material?',
        options: ['Altes Plastik', 'Glühende Asche- und Gaswolken', 'Gekühltes Lavagestein', 'Ein spezieller Boden'],
        correctAnswer: 1,
        explanation: 'Diese Lawinen sind extrem schnell und heiß und extrem gefährlich.',
        difficulty: 'advanced'
      },
      {
        id: 'nd-q8',
        text: 'Was kündigt oft eine Eruption an?',
        options: ['Schnee im Sommer', 'Leichte Erdbeben und Gasaustritt', 'Dunkle Wolken am Himmel', 'Vogelgesang'],
        correctAnswer: 1,
        explanation: 'Aufsteigendes Magma drückt gegen Gestein und löst Beben aus.',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'earth-layers',
    title: 'Aufbau der Erde',
    description: 'Die Schichten unter unseren Füßen.',
    icon: 'Layers',
    statusRank: 'Schicht-Spezialist',
    questions: [
      {
        id: 'el-1',
        text: 'Wie heißt die innerste Schicht der Erde?',
        options: ['Erdmantel', 'Erdkruste', 'Erdkern', 'Lufthülle'],
        correctAnswer: 2,
        explanation: 'Der Erdkern besteht hauptsächlich aus Eisen und Nickel.',
        difficulty: 'beginner'
      },
       {
        id: 'el-2',
        text: 'In welchem Zustand ist der äußere Erdkern?',
        options: ['Fest', 'Flüssig', 'Gasförmig', 'Wie Eis'],
        correctAnswer: 1,
        explanation: 'Der äußere Kern ist flüssig, was für das Magnetfeld wichtig ist.',
        difficulty: 'intermediate'
      },
       {
        id: 'el-3',
        text: 'Welche Schicht ist am dicksten?',
        options: ['Erdkruste', 'Erdmantel', 'Innerer Kern', 'Äußerer Kern'],
        correctAnswer: 1,
        explanation: 'Der Erdmantel nimmt das größte Volumen der Erde ein.',
        difficulty: 'intermediate'
      },
      {
        id: 'el-4',
        text: 'Was ist die Moho-Diskontinuität?',
        options: ['Ein Berg', 'Grenze zwischen Kruste und Mantel', 'Ein Vulkantyp', 'Die Erdoberfläche'],
        correctAnswer: 1,
        explanation: 'Hier ändert sich die Geschwindigkeit der Erdbebenwellen schlagartig.',
        difficulty: 'advanced'
      },
       {
        id: 'el-5',
        text: 'Aus was besteht der innere Kern hauptsächlich?',
        options: ['Gold', 'Wasserstoff', 'Eisen und Nickel', 'Stein'],
        correctAnswer: 2,
        explanation: 'Trotz hoher Hitze ist er wegen des enormen Drucks fest.',
        difficulty: 'intermediate'
      },
      {
        id: 'el-6',
        text: 'Was ist die Asthenosphäre?',
        options: ['Fester Teil der Kruste', 'Zähflüssige Schicht im oberen Mantel', 'Die Luftschicht', 'Ein Sternbild'],
        correctAnswer: 1,
        explanation: 'Auf ihr "schwimmen" die Lithosphärenplatten.',
        difficulty: 'advanced'
      },
      {
        id: 'el-7',
        text: 'Wie heiß ist es etwa im Erdkern?',
        options: ['100 °C', '1.000 °C', '6.000 °C', '1.000.000 °C'],
        correctAnswer: 2,
        explanation: 'Es ist dort so heiß wie auf der Oberfläche der Sonne.',
        difficulty: 'intermediate'
      },
      {
        id: 'el-8',
        text: 'Wie tief ist das tiefste Bohrloch der Welt (Kola)?',
        options: ['100 m', '12 km', '100 km', '6400 km'],
        correctAnswer: 1,
        explanation: 'Es ist etwa 12,2 km tief - nur ein Kratzer an der Erdkruste!',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'pangea',
    title: 'Pangäa',
    description: 'Als alle Kontinente noch zusammen waren.',
    icon: 'Map',
    statusRank: 'Urzeit-Navigator',
    questions: [
      {
        id: 'pa-1',
        text: 'Was bedeutet der Name "Pangäa"?',
        options: ['Kleine Erde', 'Altes Land', 'Ganze Erde', 'Insel im Meer'],
        correctAnswer: 2,
        explanation: 'Pan = alles, Gäa = Erde.',
        difficulty: 'beginner'
      },
      {
        id: 'pa-2',
        text: 'Vor wie vielen Jahren existierte Pangäa etwa?',
        options: ['2.000 Jahren', '250 Millionen Jahren', '10 Milliarden Jahren', 'Vorgestern'],
        correctAnswer: 1,
        explanation: 'In der Zeit des Perms und der Trias war Pangäa ein Superkontinent.',
        difficulty: 'intermediate'
      },
      {
        id: 'pa-3',
        text: 'Welches Fossil half Wegener bei seiner Theorie?',
        options: ['T-Rex', 'Mesosaurus (Reptil)', 'Pinguin', 'Mammut'],
        correctAnswer: 1,
        explanation: 'Er fand die gleichen Fossilien in Südamerika und Afrika.',
        difficulty: 'intermediate'
      },
      {
        id: 'pa-4',
        text: 'Wie hießen die zwei Teile, in die Pangäa zuerst zerbrach?',
        options: ['Nord- und Südpol', 'Laurasia und Gondwana', 'Atlantik und Pazifik', 'Europa und Asien'],
        correctAnswer: 1,
        explanation: 'Laurasia war der Nordteil, Gondwana der Südteil.',
        difficulty: 'advanced'
      },
       {
        id: 'pa-5',
        text: 'Was war die Tethys?',
        options: ['Ein Kontinent', 'Ein Ozean', 'Eine Bergkette', 'Eine Pflanze'],
        correctAnswer: 1,
        explanation: 'Ein großer Meeresarm zwischen Laurasia und Gondwana.',
        difficulty: 'advanced'
      },
      {
        id: 'pa-6',
        text: 'Welchen Beweis lieferten Gletscherspuren?',
        options: ['Wegener mochte Eis', 'Eis gab es nur am Nordpol', 'Gleiche Spuren in heute heißen Gebieten', 'Gletscher bewegen Platten'],
        correctAnswer: 2,
        explanation: 'Wegener fand Spuren in Indien und Afrika, was für eine Lage am Südpol sprach.',
        difficulty: 'advanced'
      },
      {
        id: 'pa-7',
        text: 'Was bedeutet Kontinentaldrift heute für die Zukunft?',
        options: ['Kontinente bleiben stehen', 'Sie driften weiter (evtl. neue Superkontinente)', 'Sie sinken alle ab', 'Sie werden schneller'],
        correctAnswer: 1,
        explanation: 'In 250 Mio. Jahren gibt es vielleicht "Pangäa Proxima".',
        difficulty: 'intermediate'
      },
      {
        id: 'pa-8',
        text: 'Warum wurde Wegeners Theorie damals abgelehnt?',
        options: ['Er war kein Geologe', 'Er konnte den Antrieb (Motor) nicht erklären', 'Niemand Verstand Deutsch', 'Die Karten waren falsch'],
        correctAnswer: 1,
        explanation: 'Man glaubte nicht, dass Kontinente wie Schiffe durch den Ozean pflügen können.',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'drift-san-andreas',
    title: 'Plattendrift & San Andreas',
    description: 'Wenn Platten aneinander vorbeigleiten.',
    icon: 'Map',
    statusRank: 'Transform-Experte',
    questions: [
      {
        id: 'sa-1',
        text: 'Was ist der San-Andreas-Graben?',
        options: ['Ein Vulkan', 'Eine Transformstörung', 'Ein tiefer See', 'Ein Gebirge'],
        correctAnswer: 1,
        explanation: 'Hier gleiten die Pazifische und die Nordamerikanische Platte horizontal aneinander vorbei.',
        difficulty: 'beginner'
      },
      {
        id: 'sa-2',
        text: 'Welche Stadt liegt direkt an der San-Andreas-Verwerfung?',
        options: ['New York', 'San Francisco', 'Miami', 'Chicago'],
        correctAnswer: 1,
        explanation: 'San Francisco wurde 1906 durch ein Beben an dieser Verwerfung fast völlig zerstört.',
        difficulty: 'intermediate'
      },
      {
        id: 'sa-3',
        text: 'Was passiert, wenn sich die Platten verhaken?',
        options: ['Sie bleiben für immer stehen', 'Spannung baut sich auf und entlädt sich ruckartig', 'Sie schmelzen', 'Ein neues Meer entsteht'],
        correctAnswer: 1,
        explanation: 'Der Ruck beim Lösen der Verhakung ist das eigentliche Erdbeben.',
        difficulty: 'intermediate'
      },
      {
        id: 'sa-4',
        text: 'Wie schnell driften die Platten etwa pro Jahr?',
        options: ['Einige Meter', 'Zentimeter (wie Fingernägel)', 'Kilometer', 'Gar nicht'],
        correctAnswer: 1,
        explanation: 'Meist sind es 2-10 cm pro Jahr.',
        difficulty: 'beginner'
      },
       {
        id: 'sa-5',
        text: 'Was ist eine Blattverschiebung?',
        options: ['Wenn Blätter im Wind wehen', 'Horizontales Aneinandervorbeigleiten von Krustenteilen', 'Vertikales Absinken', 'Faltung von Gestein'],
        correctAnswer: 1,
        explanation: 'Das ist der Fachbegriff für das, was am San-Andreas-Graben passiert.',
        difficulty: 'advanced'
      },
      {
        id: 'sa-6',
        text: 'Was wird aus Kalifornien in Millionen von Jahren laut Theorie?',
        options: ['Es versinkt im Meer', 'Ein Teil wird zur Insel und wandert nach Norden', 'Es wird zur Wüste', 'Es verbindet sich mit Hawaii'],
        correctAnswer: 1,
        explanation: 'Los Angeles wandert langsam in Richtung San Francisco.',
        difficulty: 'intermediate'
      },
      {
        id: 'sa-7',
        text: 'Warum gibt es am San-Andreas-Graben kaum Vulkane?',
        options: ['Es ist zu kalt', 'Dort wird keine Kruste aufgeschmolzen (keine Subduktion)', 'Der Boden ist zu hart', 'Die Feuerwehr ist zu schnell'],
        correctAnswer: 1,
        explanation: 'Vulkane entstehen meist durch Subduktion oder Rifting, nicht durch Transformstörungen.',
        difficulty: 'advanced'
      },
      {
        id: 'sa-8',
        text: 'Welche Platten treffen am San-Andreas-Graben zusammen?',
        options: ['Afrikanische & Eurasische', 'Pazifische & Nordamerikanische', 'Nazca & Südamerikanische', 'Indische & Australische'],
        correctAnswer: 1,
        explanation: 'Diese zwei Giganten reiben sich an der US-Westküste.',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'convection',
    title: 'Mantelkonvektion',
    description: 'Der Motor der Erde.',
    icon: 'Zap',
    statusRank: 'Thermodynamik-Profi',
    questions: [
      {
        id: 'co-1',
        text: 'Was ist der Antrieb für die Plattenbewegung?',
        options: ['Mondanziehung', 'Mantelkonvektion', 'Meeresströmung', 'Erdmagnetfeld'],
        correctAnswer: 1,
        explanation: 'Wärmeströme im Inneren des Mantels bewegen die Platten.',
        difficulty: 'beginner'
      },
      {
        id: 'co-2',
        text: 'Woher kommt die Wärme im Erdinneren?',
        options: ['Von der Sonne', 'Radioaktiver Zerfall & Restwärme der Entstehung', 'Vom Wind', 'Reibung der Luft'],
        correctAnswer: 1,
        explanation: 'Im Inneren zerfallen Atome und setzen dabei enorme Energie frei.',
        difficulty: 'intermediate'
      },
      {
        id: 'co-3',
        text: 'Was passiert mit heißem Material im Mantel?',
        options: ['Es sinkt ab', 'Es steigt auf', 'Es bleibt stehen', 'Es wird fest'],
        correctAnswer: 1,
        explanation: 'Heißes Material hat eine geringere Dichte und steigt deshalb nach oben.',
        difficulty: 'beginner'
      },
      {
        id: 'co-4',
        text: 'Was ist ein "Mantel-Plume"?',
        options: ['Ein Vogel', 'Eine pilzförmige Aufwärtsströmung von Magma', 'Ein tiefer Graben', 'Ein spezieller Stein'],
        correctAnswer: 1,
        explanation: 'Plumes können "Hotspots" an der Oberfläche erzeugen (wie Hawaii).',
        difficulty: 'intermediate'
      },
      {
        id: 'co-5',
        text: 'Was ist "Slab Pull"?',
        options: ['Eine Tanzbewegung', 'Zugkraft der absinkenden Platte', 'Druck an den Rücken', 'Ein Vulkan-Ausbruch'],
        correctAnswer: 1,
        explanation: 'Die schwere, kalte Platte zieht beim Abtauchen den Rest hinter sich her.',
        difficulty: 'advanced'
      },
       {
        id: 'co-6',
        text: 'Was ist "Ridge Push"?',
        options: ['Druck von unten am Rücken', 'Winddruck', 'Eisdruck', 'Magnetischer Druck'],
        correctAnswer: 0,
        explanation: 'Frisches Magma drückt die Platten an den Rücken auseinander.',
        difficulty: 'advanced'
      },
      {
        id: 'co-7',
        text: 'In welcher Schicht findet Konvektion statt?',
        options: ['Kruste', 'Mantel', 'Innerer Kern', 'Atmosphäre'],
        correctAnswer: 1,
        explanation: 'Der Mantel ist zwar fest, verhält sich aber über Millionen Jahre wie eine sehr zähe Flüssigkeit.',
        difficulty: 'intermediate'
      },
      {
        id: 'co-8',
        text: 'Wie verhält sich das Gestein im Mantel bei Konvektion?',
        options: ['Es bricht sofort', 'Es fließt plastisch/viskos', 'Es verdampft', 'Es gefriert'],
        correctAnswer: 1,
        explanation: 'Unter hohem Druck und Hitze wird Gestein verformbar (Duktilitat).',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'ocean-cycle',
    title: 'Auf & Ab eines Ozeans',
    description: 'Der Wilson-Zyklus: Geburt und Tod von Meeren.',
    icon: 'Globe',
    statusRank: 'Ozeanograph',
    questions: [
      {
        id: 'oc-1',
        text: 'Wie nennt man den Zyklus der Ozeanöffnung und -schließung?',
        options: ['Wegener-Zyklus', 'Wilson-Zyklus', 'Darwin-Zyklus', 'Einstein-Ring'],
        correctAnswer: 1,
        explanation: 'J. Tuzo Wilson beschrieb diesen wiederkehrenden Prozess.',
        difficulty: 'beginner'
      },
      {
        id: 'oc-2',
        text: 'Was ist das erste Stadium eines neuen Ozeans?',
        options: ['Ein Gebirge', 'Ein Grabenbruch (Rifting)', 'Ein tiefes Becken', 'Eine Insel'],
        correctAnswer: 1,
        explanation: 'Wie beim Ostafrikanischen Graben bricht das Land zuerst auf.',
        difficulty: 'intermediate'
      },
      {
        id: 'oc-3',
        text: 'Was passiert im "Roten-Meer-Stadium"?',
        options: ['Der Ozean trocknet aus', 'Ein schmales Meer mit neuer ozeanischer Kruste entsteht', 'Zwei Kontinente stoßen zusammen', 'Alles gefriert'],
        correctAnswer: 1,
        explanation: 'Das Rote Meer ist ein junger, schmaler Ozean.',
        difficulty: 'intermediate'
      },
      {
        id: 'oc-4',
        text: 'Welches Stadium folgt nach einem weiten Ozean (wie der Atlantik)?',
        options: ['Stillstand', 'Subduktion beginnt an den Rändern', 'Austrocknung', 'Verdampfung'],
        correctAnswer: 1,
        explanation: 'Wenn die Ränder instabil werden, beginnt die Platte abzutauchen.',
        difficulty: 'advanced'
      },
      {
        id: 'oc-5',
        text: 'Was passiert am Ende des Wilson-Zyklus?',
        options: ['Die Erde explodiert', 'Kontinent-Kontinent-Kollision (Gebirgsbildung)', 'Ein neuer Mond entsteht', 'Nichts'],
        correctAnswer: 1,
        explanation: 'Wenn der Ozean ganz geschlossen ist, falten sich Gebirge wie die Alpen auf.',
        difficulty: 'intermediate'
      },
      {
        id: 'oc-6',
        text: 'Welcher Ozean wird derzeit kleiner?',
        options: ['Atlantik', 'Pazifik', 'Indischer Ozean', 'Keiner'],
        correctAnswer: 1,
        explanation: 'Der Pazifik verkleinert sich durch die vielen Subduktionszonen am Rand.',
        difficulty: 'advanced'
      },
      {
        id: 'oc-7',
        text: 'Welcher Ozean wird derzeit größer?',
        options: ['Atlantik', 'Mittelmeer', 'Totes Meer', 'Kaspisches Meer'],
        correctAnswer: 0,
        explanation: 'Der Atlantik wächst am Mittelozeanischen Rücken um ca. 2 cm pro Jahr.',
        difficulty: 'intermediate'
      },
      {
        id: 'oc-8',
        text: 'Was ist ein "Aulakogen"?',
        options: ['Ein fossiler Fisch', 'Ein gescheiterter Arm eines Grabenbruchs', 'Ein Vulkan-Typ', 'Ein Gestein'],
        correctAnswer: 1,
        explanation: 'Oft bricht ein Kontinent dreistrahlig auf, aber nur zwei Arme werden zum Ozean.',
        difficulty: 'advanced'
      }
    ]
  },
  {
    id: 'volcanism-plus',
    title: 'Vulkanismus & Magma',
    description: 'Feuerspuckende Berge verstehen.',
    icon: 'Zap',
    statusRank: 'Vulkanologe',
    questions: [
      {
        id: 'v-1',
        text: 'Wie nennt man Gesteinsschmelze unter der Erde?',
        options: ['Lava', 'Magma', 'Asche', 'Schwerspat'],
        correctAnswer: 1,
        explanation: 'Sobald Magma an die Oberfläche tritt, nennt man es Lava.',
        difficulty: 'beginner'
      },
      {
        id: 'v-2',
        text: 'Welcher Vulkantyp ist flach und hat dünnflüssige Lava?',
        options: ['Schichtvulkan', 'Schildvulkan', 'Schlackenkegel', 'Kratersee'],
        correctAnswer: 1,
        explanation: 'Schildvulkane (wie auf Hawaii) entstehen durch dünnflüssige, weit fließende Lava.',
        difficulty: 'intermediate'
      },
      {
        id: 'v-3',
        text: 'Welcher Vulkantyp ist steil und oft explosiv?',
        options: ['Schildvulkan', 'Schichtvulkan (Stratovulkan)', 'Maare', 'Spaltenvulkan'],
        correctAnswer: 1,
        explanation: 'Schichtvulkane haben zähflüssige Lava und Gaseinschlüsse, was zu Explosionen führt.',
        difficulty: 'intermediate'
      },
      {
        id: 'v-4',
        text: 'Was ist ein "Hotspot"?',
        options: ['Ein WLAN-Punkt', 'Ortsfeste Magmaquelle tief im Mantel', 'Ein Waldbrand', 'Ein sehr heißer Sommertag'],
        correctAnswer: 1,
        explanation: 'Hotspots bilden Inselketten, wenn die Platten über sie hinwegziehen.',
        difficulty: 'intermediate'
      },
      {
        id: 'v-5',
        text: 'Was ist eine Caldera?',
        options: ['Ein kleiner Vulkan', 'Ein eingestürzter Vulkankrater', 'Eine heiße Quelle', 'Ein Gesteinsbrocken'],
        correctAnswer: 1,
        explanation: 'Wenn die Magmakammer leer ist, bricht der Gipfel oft in sich zusammen.',
        difficulty: 'advanced'
      },
      {
        id: 'v-6',
        text: 'Was ist basaltische Lava?',
        options: ['Sauer und zähflüssig', 'Basisch, heiß und dünnflüssig', 'Kalt und fest', 'Gasförmig'],
        correctAnswer: 1,
        explanation: 'Basaltlava kommt oft aus dem Mantel und ist sehr heiß (über 1000 °C).',
        difficulty: 'advanced'
      },
      {
        id: 'v-7',
        text: 'Warum gibt es Vulkane über Subduktionszonen?',
        options: ['Die Sonne scheint dort mehr', 'Wasser aus der abtauchenden Platte senkt den Schmelzpunkt im Mantel', 'Druck ist dort niedriger', 'Die Erde ist dort dünner'],
        correctAnswer: 1,
        explanation: 'Das mitgeführte Wasser wirkt als "Flußmittel" und lässt Gestein schmelzen.',
        difficulty: 'advanced'
      },
      {
        id: 'v-8',
        text: 'Was ist der VEI?',
        options: ['Vulkan-Energie-Index', 'Vulkan-Explosivitäts-Index', 'Video-Echtzeit-Info', 'Viel-Eis-Index'],
        correctAnswer: 1,
        explanation: 'Er misst die Stärke eines Ausbruchs von 0 bis 8.',
        difficulty: 'intermediate'
      }
    ]
  }
];
