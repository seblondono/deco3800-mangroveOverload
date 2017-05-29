function initMap() {

   const nudgeeBeach = {lat:-27.343968, lng:153.099107};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: nudgeeBeach,
    zoom: 10,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: nudgeeBeach,
    map: map
  });

  const locatoins = {659143 CEN: {lat: -27.342081, lng: 153.096279},COOMERA ISL CEN: {lat: -27.843129, lng: 1153.376548},
658094 CEN: {lat: -27.577648, lng: 153.291903},658027 CEN: {lat: -27.829269, lng: 153.374376},
658026 CEN: {lat: -27.844231, lng: 153.373108},iCAB089 CEN: {lat: -27.146765, lng: 153.044211},
CRAB1 CEN: {lat: -27.347652, lng: 153.406487},659095  CEN: {lat: -27.271939, lng: 153.058615},
LOTA01 CEN: {lat: -27.475982, lng: 153.186872},LOTA02 CEN: {lat: -27.477019, lng: 153.18878},
658063 CEN: {lat: -27.736246, lng: 153.381911},659151 CEN: {lat: -27.293883, lng: 153.038764},
TINCHI2 CEN: {lat: -27.291555, lng: 153.04526},BOONDALL2 CEN: {lat: -27.338244, lng: 153.082514},
658062 CEN: {lat: -27.751768, lng: 153.371668},658060 CEN: {lat: -27.769833, lng: 153.371376},
659091 CEN: {lat: -27.144079, lng: 153.037009},659092 CEN: {lat: -27.143641, lng: 153.03799},
659144 CEN: {lat: -27.35321, lng: 153.102823},659107 CEN: {lat: -27.169629, lng: 153.026296},
658108 CEN: {lat: -27.665534, lng: 153.36751},658085 CEN: {lat: -27.639537, lng: 153.329443},
658084 CEN: {lat: -27.640588, lng: 153.329923},660182 CEN: {lat: -26.976666, lng: 153.046772},
LOTA03 CEN: {lat: -27.47843, lng: 153.190887},658067 CEN: {lat: -27.751995, lng: 153.39471},
658065 CEN: {lat: -27.746116, lng: 153.386043},658071 CEN: {lat: -27.745512, lng: 153.402851},
659122 CEN: {lat: -27.395383, lng: 153.232828}};


  const cities = ["Nudgee Beach","East Gosford","City of Parramatta","Pyrmont","Boambee","Paramatta","McGraths Hill",
    "Ipswich","Sydney","Kingscliff","Isabella","Northgate","Boonah","Terry Hills","Beerwah","Gold Coast",
    "Tweed Heads","Yass","Redbank","Bundamba","Palm Beach","Broadbeach","Brisbane","Wynnum",
    "Gladesville","Springwood","Mapleton","Padstow","Enfield","Flinders","Brookfield","Yandina","Merewether",
    "Emu Park","Saint Marys","Upper Coomera","Seaforth","Toogoolawah","Southport","Oatley","Aldinga",
    "Melbourne","Elsternwick","Elwood","Reservoir","Perth","Broadmeadows","Ivanhoe","Ringwood East",
    "Brighton","Elizabeth","Adelaide","Caversham","Brunswick","Ferntree Gully","Salisbury","South Melbourne",
    "Port Melbourne","Abbotsford","Pakenham","Epping","Tarneit","Werribee","Mount Eliza","Reedy Creek","Kirwan",
    "Victoria Point","Mackay","Eight Mile Plains","Toowoomba","Caloundra","Helensvale","Scarborough","Morayfield",
    "Paradise","Stratford","Upper Brookfield","Rockhampton","Petrie","Ripley","Nambour","Albany Creek",
    "Jimboomba","Cairns","Stapylton","Kobble","Thornlands","Logan City","Noosaville","Gladstone","Mooloolah Valley",
    "Park Ridge","Loganlea","Ashgrove","North Tamborine","Toogoom","Bundaberg","Glass House Mountains","Laidley","Samford",
    "Hervey Bay","Buderim","Toowong","Summerholm","Coolum Beach","Manly","Fernvale","Sandstone Point","Bargara","Yaroomba",
    "Narangba","Karana Downs","Townsville","Maryborough","Harvey","Gosnells","Kelmscott","Bunbury","Byford","Karratha",
    "Mandurah","Warnbro","Stoneville","Gooseberry Hill","Geraldton","Busselton","Northam","Coogee","Iluka","Walliston","Maylands",
    "Rockingham","Claremont","Ludlow","Bentley","Bridgetown","Erskine","Belair","Port Pirie","Balaklava",
    "Port Noarlunga","Mount Pleasant","Seaton","Hindmarsh","Darwin","Aldinga Beach","Semaphore","Morphett Vale","Yankalilla",
    "Magill","Mallala","Hallett","Gawler","Little Hampton","Glen Iris","Galston","Bankstown","Newcastle","Balgowlah",
    "Wembley","Ryde","Mudjimba","Wellington Point","Haberfield","Templestowe Lower","Bensville","Glenfield",
    "Ourimbah","Curl Curl","Concord","Albion","Forest","Ivanhoe East","Box Hill","Middleton",
    "Narrabeen","Caboolture","Dapto","Marrickville","Yellow Rock","Ashfield","Manly","Wollongong","Chatswood","Sylvania",
    "Murrumba","Plympton","Wyndham","Bangor","New Farm","North Fitzroy","Hackham","Unley","Modbury","Mitcham",
    "Woodville","Strathalbyn","Happy Valley","Bedford Park","Noarlunga","Hobart","Sandy Bay","Orford","Claremont",
    "New Town","Launceston","Ulverstone","Kingston","Mount Isa","Essendon","Heatherton","Dandenong","Heidelberg",
    "Rosebery","Strathfield","Normanhurst","Blacktown","Epping","Rhodes","Lidcombe","Merrylands","Wentworthville",
    "Baulkham Hills","Balmain","Drummoyne","Saint Leonards","Granville","Quakers Hill","Sutherland","Carlingford",
    "Glenbrook","Blaxland","Jannali","Rooty Hill","Castle Hill","Charlestown","Adamstown","Gosford","Oyster Bay",
    "Lakemba","Kogarah","Bondi","Kensington","Hurstville","Randwick","Earlwood","Annandale","Penshurst","Liverpool",
    "Sans Souci","Alexandria","Villawood","Maroubra","Mascot","Caringbah","Bronte","Newtown","Ingleburn",
    "Engadine","Homebush","Redfern","Coogee","Footscray","Lindfield","Thornleigh","Kellyville","Burwood","Forestville",
    "Belrose","Mosman","Lane Cove","Killara","Gordon","Paddington","Penrith","Minto","Neutral Bay","Cremorne",
    "Rose Bay","Chippendale","Bexley","Rockdale","Newport","Mona Vale",
    "Berowra","Cronulla","Holsworthy","Fairfield","Rosebery","Eastwood","Pennant Hills","Saint Ives","Picton","Maitland",
    "Camden","Spring Hill","Windsor","Cowra","Albion Park","Balgownie","Hornsby","Mount Colah","Leumeah","Goulburn",
    "Revesby","Leichhardt","Westmead","Croydon","Camperdown","Vaucluse","Lambton","Hamilton","Mayfield","Wickham",
    "Waratah","Coburg","Ballarat","Sandringham","Cheltenham","Keilor","Carnegie","Mitcham","Nunawading","Keysborough",
    "Toorak","Clayton North","Fairfield","Yarraville","Ascot Vale","Noble Park","Springvale","Northcote","St Kilda",
    "Richmond","Caulfield South","Narre Warren","Sydenham","Hoppers Crossing","Sunshine","Williamstown",
    "Mulgrave","Burwood","Ashburton","Doncaster East","Fawkner","Lalor","Warrandyte","Glen Waverley","Mount Waverley",
    "Hawthorn","Endeavour Hills","Prahran","Elsternwick","Kew","Vermont","Blackburn","Kensington","Doncaster",
    "Oakleigh","Ringwood","Mooroolbark","Carrum Downs","North Melbourne","Thornbury","Chelsea","Flemington","Bentleigh","Mentone","Glenroy",
    "Carlton","Moonee Ponds","Parkville","Frankston","Bentleigh East","Wantirna",
    "Fitzroy","Langwarrin","Aspendale","East Malvern","Hallam","Tullamarine",
    "Hampton Park","Newport","Belgrave","Thomastown","Mornington","Croydon","Deer Park",
    "Scoresby","Greensborough","Clontarf","Redcliffe","Bundoora","Templestowe",
    "Hampton","Craigieburn","Albert Park","Moorabbin","Derrimut","Sunbury","Geelong","Belmont","Eaglehawk",
    "Hamilton","Croydon North","Berwick","Melton","Carrum","Bayswater","Oakleigh South","Bonbeach","Donvale","Saint Albans","Preston",
    "Balwyn","Coorparoo","Underwood","Woodridge","Bass Hill","Alexandra","Capalaba","Kelvin Grove","Mooloolaba","Sunnybank",
    "Robertson","Nerang","Burleigh Heads","Mudgeeraba","Surfers Paradise","Greenbank","Noosa","Balwyn North",
    "Glen Huntly","Eudlo","Abbotsford",
    "Northmead","Waterloo","Raymond Terrace","Saint Lucia","Canberra","Queanbeyan","Roseville",
    "Cooranbong","Tuncurry","Gunnedah","Prospect","Nairne","Laverton",
    "South Yarra","Mount Martha","Macleod","McKinnon","Subiaco","Maddington",
    "South Perth","Bassendean","Collaroy","Kirribilli","Cammeray","Pendle Hills","Gymea Bay","Wahroonga","Campbelltown","Ayr",
    "Cleveland","Hope Island","Ultimo","Auburn","Botany",
    "Toongabbie","Stanmore","Bathurst","Kelso","Albury","Wodonga","Miranda","Armidale","Surrey Hills","Grovedale",
    "Bendigo","Waurn Ponds","Geelong West","Wendouree","Forest Hill","Hughesdale","Carlton North","Eltham","Hastings","Montmorency",
    "Kew East","Brighton East","Avalon","Rozelle","Valla Beach","Belmont","Tamworth","Mortdale","Lilydale","Butchers Ridge","Lara",
    "Cranbourne","Diamond Creek",
    "Romsey",
    "Caroline Springs","Potts Point","Belmont","Waterford","Riverwood","Monash","Beenleigh","Stirling","Kensington and Norwood","Seaford",
    "Fremantle","O'Halloran Hill","Gymea","Smithfield","Cessnock","Kurri Kurri","Suffolk Park","Glenelg","Rye",
    "Port Fairy","Sebastopol","Tewantin","Riverton","Mullumbimby","Lismore","Ettalong Beach",
    "Tuggerah","Warragul","Spotswood","Camberwell","Gympie","Leopold",
    "Bellambi","Umina","West Hoxton","Doreen","Berkeley Vale","Swansea","Booker Bay","Woy Woy","Unanderra","Towradgi","Fassifern","Moore",
    "Manildra","Middleton","Byron Bay","Ballina","Warrigal","Emerald","Springfield","Jindabyne","Cooma","Berridale",
    "Toronto","Gloucester","Altona","Darlinghurst","Artarmon","Glebe","Woolloomooloo","Lyneham","Greendale","Maroochydore","Central Coast",
    "Queenscliff","Woronora","Lugarno","Berkeley","Thornton","Castlecrag","Killcare","Narellan","Woolwich","Lisarow","Bolton","Matraville",
    "Orient Point","Dural","Nelson Bay","Coniston","Doonside","Saint Peters","Stradbroke","Dakabin","Bellevue Hill",
    "Wyongah","Killarney","Rosehill","Emu Plains","Kangaroo Point","Bahrs Scrub","Mount Cotton","Figtree","Windermere Park",
    "Morisset","New Lambton","Bethania Junction","Ormiston","Fairy Meadow","Long Jetty","Mannering Park",
    "Mount Druitt","Waverley","Coomera","Coolangatta","Benowa","Kincumber","Ebbw Vale","Tugun","Burpengary",
    "Eagleby","Wallan","Boronia","Mordialloc","Mile End","Ormond","Collingwood","Clifton Springs","Minlaton",
    "Wheelers Hill","Seaford","Merlynston","Cowes","Mont Albert North","Fulham","Murrumbeena","Greenvale","Truganina",
    "Wanneroo","Cannington","Armadale","Scarborough","Sorrento","Beaumaris","Kilmore",
    "Corio","Bulleen","Werribee South","Eaglemont","Lyndhurst","Mernda","Rowville",
    "Rosebud","Monbulk","Bacchus Marsh","Morang","Maribyrnong","Warburton",
    "Williamstown","Rockbank","Mount Evelyn","Windsor","Balaclava","Narre Warren North","Ramsgate",
    "Harrington","Sandgate","Gorokan","Maclean","Dayboro","Beachmere","Pialba",
    "Port Lincoln","Wallaroo","Point Cook","Windsor","Deception Bay","Ormeau","Bli Bli","Beaudesert","Goodna",
    "Burnett Heads","Redland Bay","Riverstone","Grove","Gerringong","Freshwater","Guildford","Selby","Loch",
    "Benalla","Heathmont","Findon","Kilsyth","Goolwa","Mount Barker","Marong","Sellicks Hill","Dingley",
    "Encounter Bay","Blair Athol","Narrawong","Wangaratta","Lemon Tree Passage","Seacombe","Lysterfield",
    "Brookfield","Two Rocks","Kenwick","Cringila","Dundas","Moss Vale","Warwick","Woodford",
    "Tamborine","Cundletown","Illawong","Brooklyn","Wagga Wagga","Wauchope","Haymarket","Kangaroo Flat","Fern Tree",
    "Dunolly","Mount Gambier","Kardella","Traralgon","Port MacDonnell","Golden Grove","Murray Bridge","Brighton",
    "Willaston","Brandon","Dromana","Brighton-Le-Sands","Port Kembla","Seven Hills","Wyee","Brookvale","Point Clare",
    "Waverton","Lake Heights","Waitara","Cardiff","Vineyard","Menai","Richmond","Kurnell","Terrigal",
    "Beaumont","Ives","Bowen","Redlynch","Margate","Boondall","Riverview","Aspley","Regents Park","Currumbin","Warren",
    "Murwillumbah","Kingston","Alberton","Strathpine","Mount Gravatt","Rochedale","Gin Gin","Merredin","Orange",
    "Yamba","Coleambally","Rutherford","Coffs Harbour","Lawnton","Norman Park","Oxenford","Pinjarra","Australind",
    "West End","Dimbulah","Kenmore","Alton Downs","Buln Buln","Batesford","Toolern Vale","Strathfieldsaye",
    "Emerald","Somerville","Gellibrand","Barwon Heads","Beauty Point","Legana","Caulfield North","Newtown",
    "Redan","Burnley","Loxton","Albany","Bonython","Blackwood","Bentley","Rathmines","South West Rocks","Eschol","Mansfield","Beveridge",
    "Kilcunda","Streaky Bay","Virginia","Wallsend","Edwardstown","Lake Munmorah","Narara","Wentworth Falls","Mulgoa","Logan",
    "Carlsruhe","Beaconsfield","Sandgate","Springvale South","Clarinda","Kirrawee","Loftus","San Remo","Seville East","Connells Point",
    "Turramurra","Bundeena","Kenthurst","Malvern","Canterbury","Oaklands","Highbury","Campbelltown","Grange","Eltham North","Watsonia",
    "Saint Helena","Nedlands","Cottesloe","Mosman Park","Palm Cove","Birkdale","Brighton","Eagle Farm","Bargo","Warrane","Yatala",
    "Thursday Island","Aitkenvale","Warrimoo","Katoomba","Kurrajong Heights","Woonona","Davistown","Lavington","Chullora",
    "Teralba","Wingham","Neath","Wangi Wangi","Broadford","Melton South","Bulla","Sippy Downs","Kingsthorpe","Lowood","Spring Hill","Collie",
    "Waaia","Woori Yallock","Black Hill","Belgrave Heights","Nindaroo","Pine Mountain","Oman-Ama","Alexandra","Darley","Lower Plenty",
    "Forster",
    "Dungog","Karalee","Mareeba","Windaroo","Bringelly","Crescent Head","Medowie","Glenorie","Kilcoy","Palmwoods","Tallebudgera","Tiaro",
    "Torbanlea","Boulder","Failford","Luddenham","Gisborne","Wantirna South","Baxter","Belconnen","Hall","Margate",
    "Don","Burnie","Devonport","Newstead","Bellerive","Midway Point","Glenorchy","Latrobe","Dilston","Tunnack",
    "Ellendale","Huonville","Lindisfarne","Landsborough","Hope Valley","Normanville","Birkenhead","Two Wells","Kinross",
    "The Basin","Pymble","Little Bay","Laang","Bulimba","Shorncliffe","Tarragindi","Marsden","Loganholme",
    "Red Hill","Hillcrest","Hamilton","Reynella","Ingle Farm","Seacliff","Seaview","Caulfield","Nana Glen","Darling","Mitiamo",
    "Ferny Creek","Osborne","Cardup","Clovelly","The Oaks","Rushworth","Port Macquarie","Yallourn","Burrum Heads","Cardigan",
    "Newstead","Tottenham","Inglewood","Newmarket","Gayndah","Alphington","Davidson",
    "North Turramurra","Greenwich","Malabar","Longueville","Crows Nest","Tennyson",
    "Daisy Hill","Parkwood","Mitchelton","Aylmerton","Gracemere","Yeppoon","Gatton","Stanhope","Kew","Woorim","Condamine","Singleton",
    "Kingswood","The Entrance","Bateau Bay","Mittagong","Shellharbour","Wyong","Hunters Hill","Heddon Greta",
    "Avoca Beach","Highett","Meredith","Seymour","Woolamai","Healesville","Slacks Creek","Bohle Plains","Bushland Beach",
    "Browns Plains","Bongaree","Somerset","Old Beach","St Helens","Adelong","Hurstbridge","Thirroul","Faulconbridge",
    "Yarra Junction","Roma","Pallarenda","Oak Park","Acacia Ridge","Corlette","Stockton","Corrimal",
    "Armadale","Rydalmere","Bruce","Nowra","Raworth","Goonellabah","Taren Point","Wilberforce","Kotara",
    "Barwon Heads","Officer","Creswick","Briar Hill","Moonah","Murrumbateman","Thargomindah","Guildford","Avenue",
    "Stanthorpe","Girraween","Beechworth",
    "Campbellfield","Wanbi","Mannum","Karoonda","Thebarton","Yowie Bay","Wellington","Moana","Alice Springs",
    "Norton Summit","Meadows","Woodside","Crafers","Aldgate","Victor Harbor","Wayville","Wellard","East Fremantle",
    "Seville","Saint James","Swan View","Spearwood","Bicton","Hamilton","Mount Helena","Marion","Aberfoyle","Kapunda",
    "Derwent","Rokeby","Victoria Park","Clifton Hill","Chipping Norton","Como","Toukley",
    "Bonnet Bay","Aberglasslyn","Bellbird","Gilmore","West Pymble","Corinda","Enoggera","Deagon","Drayton","Ascot",
    "Tannum Sands","Drysdale","Kyneton","Riddell","Parkdale","Koo-Wee-Rup","Mooroopna","Alfredton",
    "Ringwood North","Wollert","Kallista","Ballan","Miners Rest","Bannockburn","Lancefield","Waubra",
    "Axedale","Drouin","Burradoo","Yackandandah","Fullerton","Tahmoor","Ulladulla","Bogangar",
    "Wahgunyah","Manning Point","Yerrinbool","Mirrabooka","Norah","Freemans Reach","Ningi","Pomona",
    "Pimpama","Maleny","Harristown","Coolum","Moggill","Jacobs Well","Glenhaven","Elderslie","Virginia","Wacol",
    "Hawthorne","Marino","Dalkeith","Worongary","Redhead","Willow Vale","Lennox Head","Lawson","East Maitland","Alpine",
    "Hazelbrook","Dolans Bay","Tarrawanna","Hat Head","Sylvania Waters","Oxley","Eden","Green Point","Bega",
    "Darling Point","Heathcote","Erina","Moree","Maryland","Smythes Creek","Ross Creek","Haddon","Kiama",
    "Spring Field","Kempsey","Willunga","Maslin Beach","Amaroo","Exeter","Yolla","George Town","Swansea","Cygnet",
    "Deloraine","Selbourne","Hagley","Carrick","Lulworth","Emu Vale","Clifton","Tynong","Pelican","Kawungan","Waikerie",
    "Trunkey","Thompson","Bourke","Young","Wollongbar","Verdun","Colo","Carrington","Waterloo","Milton","Dawson","Mitchell","Narromine",
    "Palmer","Bungendore","Braidwood","Bell","Dubbo","Gaythorne","Saint Georges Basin","Grant","Phillip",
    "Stockyard Creek","Somerset","Gordon","Colac","Hazelwood","Deakin","Glenvale","Southbank","Edith","Monterey","Blakehurst",
    "Hurstville Grove","Kareela","Box Hill South","Montrose","Strathmore","Darra","Lamington","Mourilyan","Sheffield","Fingal",
    "Dardanup","Palm Island","Edmonton","Atherton","Sale","Langhorne Creek","Fyshwick","Wallacia","Leeton",
    "Mooney Mooney","Trafalgar","Hawksburn","Nuriootpa","West Burleigh","Rylstone","Kootingal","Cooroy","Casino",
    "Research","Wonga Park","Napoleons","Whittlesea","River Heads","Clyde","Jilliby","Barnsley","Torquay","Point Lonsdale",
    "Indented Head","Silvan","Portarlington","Olinda","Clunes","Warren Shire","Tyabb","Kyabram","Marysville","Daylesford",
    "The Patch","Goornong","Castlemaine","Oatlands","Tooradin","Lilli Pilli","Dundowran","Proserpine","Bradbury","Taree","Marulan",
    "Bowral","Nords Wharf","Kingston","Drouin South","Neerim South",
    "Moore Park","Pearce","Pioneer","Ridgley","Wilson","Wynyard","Kingston","Hunter","Churchill","O'Connor","Sarina","Salt Ash",
    "Bonnells Bay","Fairview","Banksmeadow","Willaura","Lebrina","Uki","Nerrigundah","Katherine","Oakey","Crookwell",
    "Bungonia","Coondoo","Myrtleford","Maybole","Beeac","Burekup","Bullsbrook","Coolup","Keysbrook",
    "North Mackay","Tempe","Daceyville","Griffith","Macedon","Bayles","Pambula",
    "Shenton Park","Casterton","Woodend","Portland","Trentham","Wamuran","Schofields","Budgewoi",
    "The Rocks","Cambewarra","Grafton","Cowan","Sanctuary Point","Basin View","Murrurundi","Forbes","Mangerton",
    "Anna Bay","Wulkuraka","Kennington","Rocklea","Burnside","Queenstown","Maudsland","Barcoo","Uraidla",
    "Largs North","Keiraville","Stieglitz","Attadale","Lewiston","Melville","Kalgoorlie","Batchelor","Williams","Kingaroy",
    "Binda","Kadina","Tammin","Clare","Lithgow","Yapeen","Oberon","Callington","Calen","Windellama",
    "Hepburn Springs","Snowtown","Yaamba","Wondai","Bundook","Monteagle","Caltowie","Doubtful Creek","Mission Beach","Nebo",
    "Cudlee Creek","Goomeri","Caragabal","Mudgee","Narrabri","Bordertown","Benambra","Yea","Longreach","Gregadoo","Echuca","Buchan",
    "Robertstown","Condobolin","Darkan","Ingham","Mirani","Kenilworth","Esk","Bobin","Kerang","Heathcote","Keith","Weetah","Invermay",
    "Pipers Brook","Hollow Tree","Kindred","Warrnambool","Korumburra","Leongatha","Foster","Jindivick","Garfield","Inverloch","Nyora",
    "Mirboo North","Forsayth","Port Augusta","Woodleigh","Point Pass","Golconda","Jarrahdale","Judbury","Sturt",
    "Mount Lofty","Eumundi","Kuranda","Scottsdale","Tanunda","Ebenezer","Canterbury","Morwell","Stratford","Yarram","Flynn",
    "Bairnsdale","Tinamba","Newry","Alberton","Koetong","Lindenow","Grenfell","Stuart Park","Asquith","Keswick","Bedfordale",
    "Wallington","Toorbul","Clyde North","Cremorne","Lake Illawarra","Holroyd","Blackheath",
    "Wattle Grove","Leura","Edgecliff","Bulli","Woolooware","Woombah","Marsden Park","Diggers Rest","Beverley","Empire Bay",
    "Agnes Banks","Windsor","Silverwater","Cobbitty","Denham","Wattle Grove","Sherbrook","Upwey","Bellbrae","McCrae",
    "Lakes Entrance","Cockatoo","Huntly","Boolarra","Clarkefield","Toolangi","Maryborough","Picnic Bay","Clyde",
    "Sellicks Beach","Lutana","Sassafras","Lyndoch","Whyalla","Sandford","Longwarry",
    "Beaconsfield Upper","Parkes","Arcadia","Pokolbin","Ellalong","Eagle Heights","Taroona","Warrawong",
    "Colo Vale","Yarrambat","Wedderburn","Greta","Jensen","Glenreagh","Franklin","Killarney","Ellerslie","Allansford",
    "Nullawarre","Crossley","Macarthur","Camperdown","Lancelin","Gepps Cross","Kings Park","Kanwal","Long Point",
    "Port Hacking","Edithvale","Barkstead","Buninyong","Nerrina","Fern Tree Gully","Broadwater","Boddington","Manning",
    "Narrogin","Muchea","Berry","Alstonville","Blackwall","Stroud","Tenambit","Warnervale","Beresfield","Matcham","Helensburgh",
    "Avondale","Orchard Hills","Tarro","Thirlmere","Oakdale","Woodford","Lake Cathie","Beechwood","Hastings Point","Marlee",
    "Camden Haven","Boat Harbour","Bowenfels","Hill Top","Weston","Arno Bay","Callala Bay","Abermain","Smithfield",
    "Fingal Bay","Cootamundra","Clareville","Bolwarra","Scarsdale","Swan Hill","Poowong","Teesdale",
    "Wandin North","Moorooduc","Moriac","Mildura","Crib Point","Lethbridge","Euroa","Cardinia","Port Hedland","Donnybrook",
    "Point Vernon","Agnes Water","Port Douglas","Howard","Cawarral","Thuringowa","Closeburn","Innisfail","Meringandan",
    "Yorkeys Knob","Rosewood","Upper Caboolture","Kettering","Longford","Smithton","Perth","Winkleigh",
    "Turners Beach","Penguin","Merriwa","Penfield","Waterloo Corner","Summertown","Gosforth","Barellan","Killingworth","Windang",
    "Oakhurst","Yeoval","Miles","Grantham","Junee",
    "Green Hill","Thagoona","Tully","Amamoor","Mortlake","Batlow","Bangalow","Biloela",
    "Hawkesbury Heights","Narrandera","Wamberal","Linden","Old Bar","Nanango","Silverdale","Cooloolabin",
    "Crystal Creek","Coolah","Woodgate","Bulga","Mount Saint Thomas","Kendall","Wilton","Scarness","Minmi","Broken Hill",
    "Royal Park","Wonthaggi","Buckland","Christies","Austins Ferry",
    "Apollo Bay","Ararat","Yallingup","Mylor","Mooroopna","Ravenswood",
    "Rochester","North Beach","Applecross","Laverton","Tongala","Balnarring","Stanley",
    "Robinvale","Roseworthy","Cummins","Tingoora","Canungra","Glossodia","Woolgoolga","Woombye","Wooloweyah","Howe","Lockhart",
    "Stannum","Port Sorell","Tincurrin","Upper Burringbar","Beverley","Kojonup","Maidenwell","Dirranbandi","Darlington",
    "Baringhup","Newnham","Zeehan","Forrest","Koolewong","Brandy Hill","Branxton","Windsor Downs","Pontville","Evandale",
    "Kinglake","Tallarook",
    "Glenburn","Braeside","Mount Egerton","Wedderburn","Allanson","Brookdale","Broome",
    "Margaret River","Wimbledon","Bundanoon","Gundaroo","Nambucca Heads","Ulmarra","Narooma","Burrum","Tarzali",
    "Mount Julian","Middlemount","Oxley","Mount Larcom","Marmor","Piggabeen","Montville",
    "Armstrong Creek","Bellara","Howlong","Copmanhurst","Mandalong","Wilmot","Cooee","Blackmans Bay","Bagdad","Railton",
    "Beacon","Dover Heights","Yarrawarrah","Mount Morgan","Safety Bay","Bald Hills","Portsea","Ocean Shores",
    "Flinders","Mount Perry","Belgian Gardens","Venus Bay","Seven Mile Beach","Gould","Howard Springs","Bilinga","Horsham",
    "Abbotsham","Black Rock","Blackwarry","Ross","Denman","Clarence Town","Tenterfield","Walgett","Dorrigo","Inverell","Scone",
    "Stawell","Ferndale","Notting Hill","Campbell","Yanchep","Winchelsea","Serpentine","Mount Macedon","Cook",
    "Trinity Beach","Caravonica","Barwon Downs","Burraneer","Saint Andrews",
    "Glenore Grove","Somersby","Riana","Kooyong","Wandoan","Dunsborough","Ellangowan","Balhannah","Tatura","Angaston",
    "Yallourn North","McLaren Vale","Riverside","Urangan","Applethorpe","Booral","Mount Ousley",
    "Douglas Park","Wyreema","Cannonvale","Broadwater","Mount Helen","Buxton","Muswellbrook","Glen Osmond","Risdon","Lovely Banks",
    "Telegraph Point","Medlow Bath","Babinda","Tieri","Mooralla","Normanton","Hove",
    "Mount Direction","Howden","Norwood","Hadspen","Spreyton","Bridgewater","Collinsvale","Sulphur Creek","Lauderdale",
    "Dodges Ferry","Bicheno","Kempton","Goodwood","Endeavour","Dalby","Chinchilla","Yarragon","Parap","Weston Creek","Wongan Hills",
    "McLaren Flat","Moama","White Rock","Deepdene","Somerton","Moruya","Airlie Beach","Canadian","Edge Hill","Advancetown",
    "Big Pats Creek","Myrrhee","Gilberton","Limestone","Logan Village","Rodborough","Highfields","Marshalltown",
    "Stirling","Dereel","Yinnar","Malmsbury","Koornalla","Glengarry","Koroit",
    "Tambo Upper","Maffra","Tarlee","Eudunda","Waterloo","Clare",
    "Long Plains","Gordonvale","Pittsworth","Gheerulla","Westbrook","Lawgi","Blackbutt","Crows Nest",
    "Coutts Crossing","Binnaway","Baynton","Toora","Orroroo","Chatsworth Island","One Tree Hill","Nar Nar Goon",
    "Argents Hill","Dumbalk","Pechey","Bowraville","Nhill","Brown Hill","Kerry","Allora","Yangan","Smythesdale",
    "Success","Cockburn","Norlane","Bridgewater","Port Adelaide","Coromandel Valley","Beaumont","Queensferry",
    "Lockridge","Braddon","Tawonga","Saints","Walhalla","Karnup","Tomago","Drummond Cove","Hyland Park","Moranbah","Willow Grove",
    "Macquarie Park","Gowrie","West Wyalong","Everton","Rosanna","Wyalkatchem","Mundaring","Kununurra","Exmouth",
    "Esperance","Tumut","Blayney","Traralgon South","Clontarf","Heathcote Junction","Wickham","Bundalong",
    "Purnim","Nirranda","Grassmere","Carlton South","Yarra Glen","Mount Dandenong","Macksville",
    "Halls Gap","Kalorama","Bombala","Douglas","Freeling","Corinthia","Tyalgum","Woodburn","Wentworth","Welshpool","Baker",
    "Tooronga","Homebush","Forrest","Torquay","Woodvale","Illawarra","Campbelltown","Blair Athol","Roleystone",
    "Gore Hill","Bilpin","Yenda","Hendon","Ross River","Glenorchy","Dimboola","Blackwood","Pinery",
    "Cotham","Peterborough","Hexham","Murtoa","Rudall","Alma",
    "Cedar Grove","Echunga","Parkhurst","Temora","Wiluna","Mundijong","Langley","Crawford","Marian","Tom Price","Weethalle",
    "Coober Pedy","Glen Huon","Beenak","Anglesea","Carbrook","Little River",
    "Lang Lang","Whitfield","Mangalore","Yarpturk","Kambalda","Blackwater","Darlington","Eaton","Carnarvon","Tuggeranong",
    "City of West Torrens","Lower Chittering","Dunmore","Laguna","Gravesend","Hahndorf","Wollar","Won Wron",
    "Eden Park","Piawaning","Gilston","Drouin West","Parkerville","Coonawarra","Brewarrina","Mallanganee","York","Wooroolin",
    "Martins Creek","Ashton","Austinmer","Westfield","Berrima","Pitt Town","Newstead","Grandchester","Birdwood","Tolga",
    "Pearcedale",
    "Boneo","Walmer","Nagambie","Kardella South","Allambee","Yarraman","Nannup","Perenjori","O'Sullivan Beach","Barry","Sunnyside",
    "Shoal Point","Hawker","Cambridge","McLachlan","Hopetoun","Tallangatta",
    "Pinkenba","Kings Cross","Lyons","Lowanna",
    "Bool Lagoon",
    "Valley Heights","Saint George","Bomaderry","Point Lookout","Ceduna","Mossman","Sandy Hollow","Mount Molloy",
    "Salamander Bay","Woodstock","Menangle","Glen Innes","Arrawarra","Enmore","Koorawatha","Sapphire","Mullewa","Aberdeen",
    "Boyup Brook","Augusta","Dumbleyung","Southern Brook","Wyalong","Talmalmo","Coleraine","Manjimup",
    "Calingiri",
    "Obi Obi","Bullyard","Broke","Womboota","Mirboo","Retreat","Kyogle","Cawongla","Koah","Bulahdelah","Spencer","Cooktown","Coolamon",
    "Sarina Beach","Coledale","Melrose","Maroota","Balmoral","Mount White","Mount Keira","Dunkeld","Hammond","Hoddles Creek","Copacabana"];


  function findPlace(placeToFind, cities) {
    return cities.filter(place => {

      // g means global, the regex will look in the complete string for a match
      // i means case insensitive
      const regex = new RegExp(placeToFind, 'gi');
      return place.match(regex);
    });
  }

  function displayPlaces(){
    if (this.value == "") {
        placesFound.innerHTML = '';
    } else {
      const placesArray = findPlace(this.value, cities);

      const html = placesArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class='name'>${cityName}</span>
        </li>
        `;
      }).join('');

      placesFound.innerHTML = html;
    }
  }

  function goBack() {
      window.location.href = 'index.html';
  }

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;



  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      searchBar.value = transcript;

      if (e.results[0].isFinal && transcript.toLowerCase().includes("Nudgee Beach".toLowerCase())) {
        window.location.href = 'siteMap.html';
      }

  });

  const searchBar = document.querySelector('#searchArea');
  const placesFound = document.querySelector('.suggestions');
  const searchForm = document.querySelector('.search-form');
  const back = document.querySelector('.fa-chevron-left');
  const mic = document.querySelector('.mic');
  const location = document.querySelector('.currentLocation');

  searchBar.addEventListener('change', displayPlaces);
  searchBar.addEventListener('keyup', displayPlaces);
  searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = 'siteMap.html';
  });
  back.addEventListener('click', goBack);
  mic.addEventListener('click', function(){
    recognition.start();
  });
  // location.addEventListener('click', function(){
  //   navigator.geolocation.getLocation((data) => {
  //   });
  // });


}
