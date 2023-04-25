var alles = document.getElementById("alles");
var result = document.getElementById("result");
var pokemon = document.createElement("img");
var input = document.getElementById("vulin");
var counter = document.getElementById("counter");
var goed = document.getElementById("correct")

var pokemonverzameling = {'Bulbasaur': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'Ivysaur': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', 'Venusaur': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png', 'Charmander': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', 'Charmeleon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png', 'Charizard': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png', 'Squirtle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'Wartortle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png', 'Blastoise': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png', 'Caterpie': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', 'Metapod': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png', 'Butterfree': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png', 'Weedle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png', 'Kakuna': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png', 'Beedrill': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png', 'Pidgey': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png', 'Pidgeotto': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png', 'Pidgeot': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png', 'Rattata': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png', 'Raticate': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png', 'Spearow': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png', 'Fearow': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png', 'Ekans': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png', 'Arbok': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png', 'Pikachu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Raichu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png', 'Sandshrew': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png', 'Sandslash': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png', 'Nidoran': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png', 'Nidorina': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png', 'Nidoqueen': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png', 'Nidoran': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png', 'Nidorino': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png', 'Nidoking': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png', 'Clefairy': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png', 'Clefable': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png', 'Vulpix': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png', 'Ninetales': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png', 'Jigglypuff': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png', 'Wigglytuff': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png', 'Zubat': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png', 'Golbat': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png', 'Oddish': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png', 'Gloom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png', 'Vileplume': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png', 'Paras': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png', 'Parasect': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png', 'Venonat': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png', 'Venomoth': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png', 'Diglett': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png', 'Dugtrio': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png', 'Meowth': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png', 'Persian': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png', 'Psyduck': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png', 'Golduck': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png', 'Mankey': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png', 'Primeape': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png', 'Growlithe': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png', 'Arcanine': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png', 'Poliwag': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png', 'Poliwhirl': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png', 'Poliwrath': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png', 'Abra': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png', 'Kadabra': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png', 'Alakazam': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png', 'Machop': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png', 'Machoke': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png', 'Machamp': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png', 'Bellsprout': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png', 'Weepinbell': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png', 'Victreebel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png', 'Tentacool': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png', 'Tentacruel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png', 'Geodude': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png', 'Graveler': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png', 'Golem': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png', 'Ponyta': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png', 'Rapidash': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png', 'Slowpoke': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png', 'Slowbro': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png', 'Magnemite': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png', 'Magneton': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png', 'Farfetch’d': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png', 'Doduo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png', 'Dodrio': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png', 'Seel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png', 'Dewgong': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png', 'Grimer': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png', 'Muk': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png', 'Shellder': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png', 'Cloyster': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png', 'Gastly': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png', 'Haunter': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png', 'Gengar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png', 'Onix': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png', 'Drowzee': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png', 'Hypno': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png', 'Krabby': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png', 'Kingler': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png', 'Voltorb': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png', 'Electrode': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png', 'Exeggcute': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png', 'Exeggutor': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png', 'Cubone': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png', 'Marowak': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png', 'Hitmonlee': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png', 'Hitmonchan': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png', 'Lickitung': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png', 'Koffing': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png', 'Weezing': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png', 'Rhyhorn': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png', 'Rhydon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png', 'Chansey': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png', 'Tangela': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png', 'Kangaskhan': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png', 'Horsea': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png', 'Seadra': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png', 'Goldeen': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png', 'Seaking': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png', 'Staryu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png', 'Starmie': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png', 'Mr. Mime': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png', 'Scyther': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png', 'Jynx': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png', 'Electabuzz': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png', 'Magmar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png', 'Pinsir': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
 'Tauros': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png', 'Magikarp': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png', 'Gyarados': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png', 'Lapras': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png', 'Ditto': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png', 'Eevee': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png', 'Vaporeon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png', 'Jolteon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png', 'Flareon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png', 'Porygon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png', 'Omanyte': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png', 'Omastar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png', 'Kabuto': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png', 'Kabutops': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png', 'Aerodactyl': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png', 'Snorlax': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png', 'Articuno': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png', 'Zapdos': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png', 'Moltres': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png', 'Dratini': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png', 'Dragonair': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png', 'Dragonite': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png', 'Mewtwo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png', 'Mew': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png', 'Chikorita': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png', 'Bayleef': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png', 'Meganium': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png', 'Cyndaquil': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png', 'Quilava': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png', 'Typhlosion': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png', 'Totodile': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png', 'Croconaw': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png', 'Feraligatr': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png', 'Sentret': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png', 'Furret': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png', 'Hoothoot': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png', 'Noctowl': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png', 'Ledyba': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png', 'Ledian': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png', 'Spinarak': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png', 'Ariados': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png', 'Crobat': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png', 'Chinchou': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png', 'Lanturn': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png', 'Pichu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png', 'Cleffa': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png', 'Igglybuff': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png', 'Togepi': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png', 'Togetic': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png', 'Natu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png', 'Xatu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png', 'Mareep': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png', 'Flaaffy': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png', 'Ampharos': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png', 'Bellossom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png', 'Marill': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png', 'Azumarill': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png', 'Sudowoodo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png', 'Politoed': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png', 'Hoppip': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png', 'Skiploom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png', 'Jumpluff': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png', 'Aipom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png', 'Sunkern': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png', 'Sunflora': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png', 'Yanma': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png', 'Wooper': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png', 'Quagsire': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png', 'Espeon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png', 'Umbreon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png', 'Murkrow': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png', 'Slowking': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png', 'Misdreavus': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png', 'Unown': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png', 'Wobbuffet': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png', 'Girafarig': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png', 'Pineco': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png', 'Forretress': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png', 'Dunsparce': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png', 'Gligar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png', 'Steelix': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png', 'Snubbull': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png', 'Granbull': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png', 'Qwilfish': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png', 'Scizor': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png', 'Shuckle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png', 'Heracross': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png', 'Sneasel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png', 'Teddiursa': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png', 'Ursaring': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png', 'Slugma': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png', 'Magcargo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png', 'Swinub': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png', 'Piloswine': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png', 'Corsola': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png', 'Remoraid': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png', 'Octillery': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png', 'Delibird': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png', 'Mantine': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png', 'Skarmory': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png', 'Houndour': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png', 'Houndoom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png', 'Kingdra': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png', 'Phanpy': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png', 'Donphan': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png', 'Porygon2': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png', 'Stantler': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png', 'Smeargle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png', 'Tyrogue': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png', 'Hitmontop': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png', 'Smoochum': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png', 'Elekid': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png', 'Magby': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png', 'Miltank': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png', 'Blissey': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png', 'Raikou': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png', 'Entei': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png', 'Suicune': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png', 'Larvitar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png', 'Pupitar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png', 'Tyranitar': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png', 'Lugia': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png', 'Ho-Oh': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png', 'Celebi': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png', 'Treecko': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png', 'Grovyle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png', 'Sceptile': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png', 
 'Torchic': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png', 'Combusken': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png', 'Blaziken': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png', 'Mudkip': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png', 'Marshtomp': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png', 'Swampert': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png', 'Poochyena': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png', 'Mightyena': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png', 'Zigzagoon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png', 'Linoone': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png', 'Wurmple': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png', 'Silcoon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png', 'Beautifly': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png', 'Cascoon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png', 'Dustox': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png', 'Lotad': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png', 'Lombre': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png', 'Ludicolo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png', 'Seedot': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png', 'Nuzleaf': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png', 'Shiftry': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png', 'Taillow': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png', 'Swellow': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png', 'Wingull': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png', 'Pelipper': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png', 'Ralts': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png', 'Kirlia': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png', 'Gardevoir': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png', 'Surskit': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png', 'Masquerain': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png', 'Shroomish': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png', 'Breloom': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png', 'Slakoth': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png', 'Vigoroth': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png', 'Slaking': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png', 'Nincada': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png', 'Ninjask': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png', 'Shedinja': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png', 'Whismur': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png', 'Loudred': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png', 'Exploud': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png', 'Makuhita': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png', 'Hariyama': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png', 'Azurill': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png', 'Nosepass': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png', 'Skitty': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png', 'Delcatty': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png', 'Sableye': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png', 'Mawile': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png', 'Aron': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png', 'Lairon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png', 'Aggron': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png', 'Meditite': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png', 'Medicham': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png', 'Electrike': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png', 'Manectric': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png', 'Plusle': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png', 'Minun': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png', 'Volbeat': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png', 'Illumise': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png', 'Roselia': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png', 'Gulpin': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png', 'Swalot': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png', 'Carvanha': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png', 'Sharpedo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png', 'Wailmer': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png', 'Wailord': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png', 'Numel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png', 'Camerupt': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png', 'Torkoal': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png', 'Spoink': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png', 'Grumpig': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png', 'Spinda': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png', 'Trapinch': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png', 'Vibrava': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png', 'Flygon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png', 'Cacnea': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png', 'Cacturne': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png', 'Swablu': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png', 'Altaria': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png', 'Zangoose': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png', 'Seviper': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png', 'Lunatone': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png', 'Solrock': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png', 'Barboach': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png', 'Whiscash': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png', 'Corphish': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png', 'Crawdaunt': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png', 'Baltoy': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png', 'Claydol': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png', 'Lileep': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png', 'Cradily': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png', 'Anorith': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png', 'Armaldo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png', 'Feebas': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png', 'Milotic': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png', 'Castform': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png', 'Kecleon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png', 'Shuppet': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png', 'Banette': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png', 'Duskull': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png', 'Dusclops': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png', 'Tropius': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png', 'Chimecho': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png', 'Absol': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png', 'Wynaut': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png', 'Snorunt': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png', 'Glalie': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png', 'Spheal': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png', 'Sealeo': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png', 'Walrein': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png', 'Clamperl': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png', 'Huntail': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png', 'Gorebyss': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png', 'Relicanth': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png', 'Luvdisc': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png', 'Bagon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png', 'Shelgon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png', 'Salamence': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png', 'Beldum': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png', 'Metang': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png', 'Metagross': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png', 'Regirock': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png', 'Regice': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png', 'Registeel': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png', 'Latias': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png', 'Latios': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png', 
 'Kyogre': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png', 'Groudon': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png', 'Rayquaza': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png', 'Jirachi': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png', 'Deoxys': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png', 'Tyrantrum': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/697.png'}
var namelist = Object.keys(pokemonverzameling)
var linklist = Object.values(pokemonverzameling)
var pokedex = []
pokemon.style.width = "344px"
pokemon.style.filter = "brightness(0%)"
alles.appendChild(pokemon)
alles.style.backgroundImage = pokemon
var counterCompleted = 1
var counterTotal = namelist.length
var amountCorrect = 0
var amountFalse = 0
var randomNumber = Reset()
var bezig = false
 input.addEventListener("keypress", function(event){
    if (bezig == false){
    if (event.key == "Enter") {
        var tekst = input.value
        tekst = tekst.charAt(0).toUpperCase() + tekst.slice(1);
      if (tekst == namelist[randomNumber]){correct();}
      else{wrong();}}
    }})

function correct(){//this is for when you guess right
    bezig = true
    console.log(namelist)
    Pokemonname()
    pokemon.style.filter = "brightness(100%)"
    alles.style.backgroundColor = "lightgreen"
    amountCorrect +=1
    setTimeout(Reset,2000)
    bezig = false
}

function wrong(){//this is for when you guess wrong
    bezig = true
    Pokemonname()
    amountFalse +=1
    pokemon.style.filter = "brightness(100%)"
    alles.style.backgroundColor = "rgb(211, 69, 69)"
    setTimeout(Reset, 2000)
    bezig = false
    
}
function Pokemonname(){//This is for showing the pokemons name after guessing
    result.innerText = namelist[randomNumber].toUpperCase()
    setTimeout(2000)
}
function Reset(){//This is for removing the current pokemon and showing the next one
    while (true){
    randomNumber = Math.floor(Math.random() * namelist.length);
    if (pokedex.includes(randomNumber)){
        if (pokedex.length == namelist.length){
            completed()}
        else{continue}
    }
    else{
        pokedex.push(randomNumber)}
    
    counter.innerText = counterCompleted+"/"+counterTotal
    if (counterCompleted < counterTotal){counterCompleted +=1}
    goed.innerText = "Correct: "+amountCorrect+" | Wrong: "+amountFalse
    pokemon.src = linklist[randomNumber]
    input.value = ""
    alles.style.backgroundColor = "white"
    result.innerText = ""
    pokemon.style.filter = "brightness(0%)"
    return randomNumber}
}

function completed(){//This is the end screen
    alles.style.backgroundColor = "lightgreen"
    alles.innerHTML = "Congratulations, you passed the quiz!"+"<br>"+"Your score was "+ 
    Math.round(amountCorrect*100/namelist.length)+"% Correct and "+Math.round(amountFalse*100/namelist.length)+"% Wrong"

    
}