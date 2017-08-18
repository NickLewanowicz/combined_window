import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  //callData: Ember.get('app','callData'),
  listDataUpdating: {},
  listDataLong1: {
    "data": [
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP92"
              },
              {
                "remarks": "veniam",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP37"
              }
            ],
            "remarks": "",
            "address": "190 Neptune Avenue",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR39",
            "rin": "PP1700000949"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP66"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "415 Veranda Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR97",
            "rin": "QR1700000592"
          },
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP72"
              },
              {
                "remarks": "incididunt",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "628 Dean Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP65",
            "rin": "PP1700000250"
          }
        ],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP97"
          },
          {
            "remarks": "et",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "187 Essex Street",
        "priority": 1,
        "callType": 645,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000864"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR72"
              },
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP36"
              }
            ],
            "remarks": "Trespassing",
            "address": "473 Fountain Avenue",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP48",
            "rin": "QR1700000666"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP29"
              }
            ],
            "remarks": "",
            "address": "953 Highland Avenue",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP22",
            "rin": "JP1700000213"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP87"
              },
              {
                "remarks": "veniam",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP23"
              }
            ],
            "remarks": "",
            "address": "721 Kane Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "PP1700000900"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP95"
          }
        ],
        "remarks": "Drug Activity",
        "address": "680 Dunham Place",
        "priority": 4,
        "callType": 859,
        "serviceType": "cc",
        "id": "PP94",
        "rin": "QR1700000438"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP32"
          },
          {
            "remarks": "incididunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR63"
          },
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP52"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "349 Leonard Street",
        "priority": 4,
        "callType": 902,
        "serviceType": "cc",
        "id": "JP49",
        "rin": "PP1700000636"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "do",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR85"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "993 Beaver Street",
        "priority": 8,
        "callType": 697,
        "serviceType": "cl",
        "id": "QR98",
        "rin": "QR1700000849"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              }
            ],
            "remarks": "",
            "address": "989 Conway Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR28",
            "rin": "QR1700000954"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR38"
          },
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP41"
          },
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP51"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "615 Mill Street",
        "priority": 3,
        "callType": 205,
        "serviceType": "cc",
        "id": "QR53",
        "rin": "JP1700000854"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP15"
              },
              {
                "remarks": "reprehenderit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP69"
              }
            ],
            "remarks": "",
            "address": "379 Sutton Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP51",
            "rin": "JP1700000728"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP51"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "335 Gold Street",
        "priority": 7,
        "callType": 520,
        "serviceType": "cc",
        "id": "QR95",
        "rin": "PP1700000281"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR35"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "146 Keap Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP85",
            "rin": "PP1700000453"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP28"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR85"
              }
            ],
            "remarks": "Trespassing",
            "address": "490 Irving Place",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP30",
            "rin": "PP1700000117"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP13"
              },
              {
                "remarks": "ad",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "299 Ocean Parkway",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP32",
            "rin": "QR1700000329"
          }
        ],
        "callUnits": [
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR18"
          },
          {
            "remarks": "minim",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP81"
          },
          {
            "remarks": "aliqua",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR65"
          }
        ],
        "remarks": "accident with injuries",
        "address": "976 Otsego Street",
        "priority": 6,
        "callType": 482,
        "serviceType": "cc",
        "id": "JP93",
        "rin": "QR1700000279"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR74"
              },
              {
                "remarks": "Lorem",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP47"
              },
              {
                "remarks": "fugiat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "209 Turnbull Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP16",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR16"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "959 Macon Street",
        "priority": 9,
        "callType": 336,
        "serviceType": "cc",
        "id": "JP40",
        "rin": "QR1700000809"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR73"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "808 Bogart Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP77",
            "rin": "PP1700000577"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "323 Osborn Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP20",
            "rin": "JP1700000366"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP12"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR76"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "432 Madison Street",
        "priority": 5,
        "callType": 500,
        "serviceType": "cl",
        "id": "PP27",
        "rin": "QR1700000655"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "anim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP37"
              },
              {
                "remarks": "Lorem",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP62"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "185 Lawn Court",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "QR1700000333"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP82"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "920 Billings Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR66",
            "rin": "JP1700000115"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "268 Aberdeen Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "JP1700000667"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP11"
          },
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP10"
          }
        ],
        "remarks": "Drug Activity",
        "address": "342 Coleman Street",
        "priority": 6,
        "callType": 142,
        "serviceType": "cc",
        "id": "QR23",
        "rin": "PP1700000829"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP23"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP69"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "710 Navy Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP53",
            "rin": "JP1700000655"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP30"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "909 Riverdale Avenue",
        "priority": 3,
        "callType": 782,
        "serviceType": "cc",
        "id": "JP36",
        "rin": "QR1700000168"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "778 Applegate Court",
        "priority": 4,
        "callType": 993,
        "serviceType": "cc",
        "id": "QR24",
        "rin": "QR1700000499"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP70"
              }
            ],
            "remarks": "",
            "address": "912 Doone Court",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP33",
            "rin": "QR1700000578"
          },
          {
            "callUnits": [
              {
                "remarks": "incididunt",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR67"
              }
            ],
            "remarks": "Trespassing",
            "address": "135 Main Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP92",
            "rin": "JP1700000263"
          }
        ],
        "callUnits": [
          {
            "remarks": "cillum",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP66"
          }
        ],
        "remarks": "Drug Activity",
        "address": "297 Jamison Lane",
        "priority": 5,
        "callType": 661,
        "serviceType": "cl",
        "id": "QR20",
        "rin": "QR1700000277"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP93"
              }
            ],
            "remarks": "",
            "address": "264 Hart Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP76",
            "rin": "QR1700000407"
          },
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR11"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP56"
              }
            ],
            "remarks": "",
            "address": "867 Bristol Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR23",
            "rin": "JP1700000339"
          }
        ],
        "callUnits": [
          {
            "remarks": "incididunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "878 Mill Lane",
        "priority": 4,
        "callType": 322,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000375"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR49"
              },
              {
                "remarks": "eu",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "",
            "address": "969 Noble Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP29",
            "rin": "QR1700000438"
          }
        ],
        "callUnits": [
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP54"
          },
          {
            "remarks": "mollit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP73"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "107 Alice Court",
        "priority": 5,
        "callType": 341,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "JP1700000950"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR23"
              }
            ],
            "remarks": "Drug Activity",
            "address": "391 Newton Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR86",
            "rin": "QR1700000862"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP64"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR61"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "432 Autumn Avenue",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP48",
            "rin": "QR1700000950"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP43"
          },
          {
            "remarks": "ad",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "553 Melba Court",
        "priority": 9,
        "callType": 566,
        "serviceType": "cl",
        "id": "PP83",
        "rin": "PP1700000370"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP15"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR21"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "588 Dunne Place",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP70",
            "rin": "PP1700000355"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP72"
          },
          {
            "remarks": "velit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP18"
          }
        ],
        "remarks": "accident with injuries",
        "address": "180 Cleveland Street",
        "priority": 5,
        "callType": 696,
        "serviceType": "cl",
        "id": "QR57",
        "rin": "QR1700000807"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "proident",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP16"
          },
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP77"
          },
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "595 Atlantic Avenue",
        "priority": 4,
        "callType": 461,
        "serviceType": "cc",
        "id": "QR51",
        "rin": "JP1700000857"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR96"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP38"
              }
            ],
            "remarks": "",
            "address": "368 Heyward Street",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP20",
            "rin": "QR1700000218"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR49"
              }
            ],
            "remarks": "Drug Activity",
            "address": "861 Hemlock Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP81",
            "rin": "JP1700000335"
          }
        ],
        "callUnits": [
          {
            "remarks": "do",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP70"
          },
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP28"
          },
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR77"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "596 Franklin Street",
        "priority": 9,
        "callType": 113,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000837"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP87"
              },
              {
                "remarks": "minim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP51"
              }
            ],
            "remarks": "",
            "address": "833 Grand Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP11",
            "rin": "JP1700000756"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP72"
              }
            ],
            "remarks": "Drug Activity",
            "address": "563 Cheever Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP46",
            "rin": "JP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP52"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR74"
              },
              {
                "remarks": "deserunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR80"
              }
            ],
            "remarks": "",
            "address": "485 Harbor Lane",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP67",
            "rin": "PP1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          },
          {
            "remarks": "commodo",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "545 Poplar Avenue",
        "priority": 7,
        "callType": 270,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000196"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP72"
              },
              {
                "remarks": "excepteur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR43"
              },
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR65"
              }
            ],
            "remarks": "accident with injuries",
            "address": "605 Irving Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP98",
            "rin": "JP1700000598"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR76"
              },
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP10"
              }
            ],
            "remarks": "accident with injuries",
            "address": "710 High Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR77",
            "rin": "JP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR26"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP71"
              }
            ],
            "remarks": "",
            "address": "594 Remsen Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "PP1700000160"
          }
        ],
        "callUnits": [
          {
            "remarks": "non",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP82"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "380 Hunts Lane",
        "priority": 2,
        "callType": 185,
        "serviceType": "cl",
        "id": "QR62",
        "rin": "JP1700000310"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR14"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP70"
              },
              {
                "remarks": "non",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP84"
              }
            ],
            "remarks": "",
            "address": "787 Eagle Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR88",
            "rin": "JP1700000441"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR35"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "273 Lamont Court",
        "priority": 1,
        "callType": 625,
        "serviceType": "cc",
        "id": "QR76",
        "rin": "JP1700000776"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR46"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "424 Boerum Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "PP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR34"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP34"
              },
              {
                "remarks": "amet",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "accident with injuries",
            "address": "665 Arion Place",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP31",
            "rin": "PP1700000576"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP47"
              },
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR66"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "676 Willow Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP87",
            "rin": "PP1700000785"
          }
        ],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP32"
          },
          {
            "remarks": "laborum",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP79"
          },
          {
            "remarks": "consequat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "632 Visitation Place",
        "priority": 1,
        "callType": 231,
        "serviceType": "cc",
        "id": "PP98",
        "rin": "PP1700000613"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP35"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP93"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP78"
              }
            ],
            "remarks": "",
            "address": "749 Sandford Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP61",
            "rin": "PP1700000363"
          }
        ],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "320 Kensington Walk",
        "priority": 5,
        "callType": 344,
        "serviceType": "cc",
        "id": "QR71",
        "rin": "PP1700000617"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR84"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP94"
              },
              {
                "remarks": "magna",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR66"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "891 Elizabeth Place",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR90",
            "rin": "QR1700000665"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP97"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "454 Clarkson Avenue",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP37",
            "rin": "QR1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "consectetur",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP24"
          },
          {
            "remarks": "sit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP94"
          },
          {
            "remarks": "elit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR33"
          }
        ],
        "remarks": "Trespassing",
        "address": "529 Cumberland Street",
        "priority": 3,
        "callType": 901,
        "serviceType": "cc",
        "id": "QR39",
        "rin": "JP1700000309"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP64"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP65"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "492 Freeman Street",
        "priority": 1,
        "callType": 486,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "PP1700000464"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "Trespassing",
            "address": "360 Brigham Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR37",
            "rin": "QR1700000764"
          }
        ],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR76"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "258 Pulaski Street",
        "priority": 8,
        "callType": 469,
        "serviceType": "cl",
        "id": "QR22",
        "rin": "QR1700000384"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP31"
              },
              {
                "remarks": "proident",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR33"
              }
            ],
            "remarks": "",
            "address": "896 Seaview Avenue",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR21",
            "rin": "PP1700000172"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR57"
              },
              {
                "remarks": "consequat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP87"
              },
              {
                "remarks": "in",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP13"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "571 Hyman Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "QR1700000839"
          },
          {
            "callUnits": [
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP63"
              }
            ],
            "remarks": "",
            "address": "987 Schenck Place",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP73",
            "rin": "JP1700000284"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR63"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "373 Madison Place",
        "priority": 1,
        "callType": 863,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "QR1700000213"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP74"
              },
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP51"
              }
            ],
            "remarks": "accident with injuries",
            "address": "938 Jewel Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "QR1700000990"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR77"
          },
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "850 Howard Avenue",
        "priority": 1,
        "callType": 478,
        "serviceType": "cl",
        "id": "PP81",
        "rin": "QR1700000996"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP38"
          },
          {
            "remarks": "reprehenderit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP63"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "376 Brightwater Court",
        "priority": 1,
        "callType": 138,
        "serviceType": "cc",
        "id": "JP58",
        "rin": "QR1700000666"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP41"
              }
            ],
            "remarks": "Trespassing",
            "address": "806 Garden Place",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP32",
            "rin": "QR1700000593"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "esse",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP33"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "469 Willoughby Avenue",
        "priority": 5,
        "callType": 122,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "PP1700000430"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "",
            "address": "446 Shale Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "JP1700000517"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP99"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR26"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "451 Bedell Lane",
        "priority": 3,
        "callType": 892,
        "serviceType": "cl",
        "id": "QR96",
        "rin": "PP1700000320"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "246 Mermaid Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "JP1700000171"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "982 Guider Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP50",
            "rin": "QR1700000656"
          }
        ],
        "callUnits": [
          {
            "remarks": "nostrud",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP88"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP40"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "325 Eldert Lane",
        "priority": 3,
        "callType": 597,
        "serviceType": "cl",
        "id": "QR61",
        "rin": "JP1700000429"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP65"
          },
          {
            "remarks": "proident",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR43"
          },
          {
            "remarks": "excepteur",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP30"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "442 Hubbard Place",
        "priority": 4,
        "callType": 942,
        "serviceType": "cc",
        "id": "PP68",
        "rin": "PP1700000669"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR13"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "156 Wolf Place",
        "priority": 1,
        "callType": 857,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000685"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "elit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP12"
          },
          {
            "remarks": "et",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP80"
          },
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR97"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "727 Colin Place",
        "priority": 3,
        "callType": 496,
        "serviceType": "cc",
        "id": "PP28",
        "rin": "JP1700000177"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR97"
          },
          {
            "remarks": "esse",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP19"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "323 Lake Avenue",
        "priority": 1,
        "callType": 970,
        "serviceType": "cl",
        "id": "QR58",
        "rin": "QR1700000954"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR86"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "105 Fulton Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP15",
            "rin": "JP1700000644"
          },
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP50"
              }
            ],
            "remarks": "",
            "address": "451 Brown Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP80",
            "rin": "QR1700000544"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR74"
          },
          {
            "remarks": "in",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP21"
          }
        ],
        "remarks": "accident with injuries",
        "address": "375 Coffey Street",
        "priority": 8,
        "callType": 791,
        "serviceType": "cl",
        "id": "PP96",
        "rin": "JP1700000798"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP53"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP20"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "319 Miller Place",
        "priority": 2,
        "callType": 657,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000341"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR10"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "911 Fuller Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP55",
            "rin": "JP1700000196"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP61"
              },
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "133 Judge Street",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP62",
            "rin": "JP1700000694"
          }
        ],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP62"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "663 Willoughby Street",
        "priority": 2,
        "callType": 666,
        "serviceType": "cl",
        "id": "JP18",
        "rin": "JP1700000264"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP71"
              },
              {
                "remarks": "commodo",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP69"
              }
            ],
            "remarks": "accident with injuries",
            "address": "309 Winthrop Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP87",
            "rin": "JP1700000660"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP32"
              },
              {
                "remarks": "anim",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP72"
              },
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "376 Louis Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP71",
            "rin": "JP1700000692"
          },
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP48"
              }
            ],
            "remarks": "",
            "address": "590 Dover Street",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR96",
            "rin": "PP1700000244"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR58"
          },
          {
            "remarks": "veniam",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          },
          {
            "remarks": "id",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "507 Jerome Avenue",
        "priority": 4,
        "callType": 850,
        "serviceType": "cc",
        "id": "PP86",
        "rin": "PP1700000780"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR87"
          },
          {
            "remarks": "dolor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP27"
          },
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP58"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "666 Whitney Avenue",
        "priority": 7,
        "callType": 912,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "JP1700000705"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ex",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR14"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "353 Lott Street",
        "priority": 9,
        "callType": 327,
        "serviceType": "cl",
        "id": "QR84",
        "rin": "QR1700000654"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP86"
              },
              {
                "remarks": "minim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP92"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR11"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "925 Prospect Place",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "JP1700000532"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP51"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP91"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "368 Atkins Avenue",
        "priority": 5,
        "callType": 372,
        "serviceType": "cl",
        "id": "QR45",
        "rin": "PP1700000941"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP65"
              },
              {
                "remarks": "pariatur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP16"
              }
            ],
            "remarks": "",
            "address": "777 Friel Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP13",
            "rin": "QR1700000874"
          },
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP79"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP32"
              }
            ],
            "remarks": "",
            "address": "392 Hull Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR87",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR97"
              },
              {
                "remarks": "est",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP20"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "110 Hanover Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "PP1700000524"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP41"
          },
          {
            "remarks": "adipisicing",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Trespassing",
        "address": "945 Richardson Street",
        "priority": 7,
        "callType": 801,
        "serviceType": "cc",
        "id": "PP90",
        "rin": "QR1700000688"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP82"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "nulla",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP83"
          }
        ],
        "remarks": "Public Intoxication",
        "address": "210 Rose Street",
        "priority": 1,
        "callType": 480,
        "serviceType": "cl",
        "id": "PP97",
        "rin": "JP1700000846"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR29"
              }
            ],
            "remarks": "",
            "address": "187 Nixon Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP43",
            "rin": "QR1700000262"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP39"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "257 Court Square",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR69",
            "rin": "PP1700000457"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR83"
              },
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR45"
              }
            ],
            "remarks": "accident with injuries",
            "address": "363 Harwood Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR22",
            "rin": "PP1700000569"
          }
        ],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP39"
          },
          {
            "remarks": "officia",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "160 Norman Avenue",
        "priority": 8,
        "callType": 876,
        "serviceType": "cl",
        "id": "PP25",
        "rin": "JP1700000198"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP95"
              },
              {
                "remarks": "tempor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR50"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP49"
              }
            ],
            "remarks": "",
            "address": "963 Elm Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP12",
            "rin": "JP1700000531"
          },
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR51"
              },
              {
                "remarks": "do",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR51"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "492 Beaumont Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "JP1700000452"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR76"
              },
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP68"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "480 Union Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP10",
            "rin": "QR1700000638"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP97"
          },
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP66"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "618 Emerald Street",
        "priority": 9,
        "callType": 760,
        "serviceType": "cc",
        "id": "JP72",
        "rin": "QR1700000653"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP33"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP89"
              },
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP77"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "445 Livingston Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP59",
            "rin": "QR1700000525"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR98"
              }
            ],
            "remarks": "Trespassing",
            "address": "395 Highland Boulevard",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR54",
            "rin": "PP1700000130"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR14"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP55"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "900 Schenck Avenue",
        "priority": 5,
        "callType": 690,
        "serviceType": "cl",
        "id": "JP46",
        "rin": "PP1700000538"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP22"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "274 Rochester Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP29",
            "rin": "JP1700000628"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP31"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "811 Wilson Avenue",
        "priority": 7,
        "callType": 600,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "QR1700000399"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP44"
          },
          {
            "remarks": "occaecat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR53"
          },
          {
            "remarks": "consequat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP91"
          }
        ],
        "remarks": "accident with injuries",
        "address": "873 Oriental Court",
        "priority": 5,
        "callType": 721,
        "serviceType": "cc",
        "id": "JP99",
        "rin": "PP1700000295"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "deserunt",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP13"
              }
            ],
            "remarks": "",
            "address": "247 Centre Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR68",
            "rin": "PP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP78"
              }
            ],
            "remarks": "",
            "address": "512 Auburn Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "JP1700000923"
          }
        ],
        "callUnits": [
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP52"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "626 Pilling Street",
        "priority": 9,
        "callType": 970,
        "serviceType": "cl",
        "id": "JP38",
        "rin": "PP1700000712"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP61"
              },
              {
                "remarks": "aliqua",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP31"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "943 Aitken Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR79",
            "rin": "QR1700000674"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR20"
              }
            ],
            "remarks": "",
            "address": "650 Putnam Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000598"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR97"
          },
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP81"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "176 Macdougal Street",
        "priority": 7,
        "callType": 569,
        "serviceType": "cl",
        "id": "PP52",
        "rin": "QR1700000229"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "690 Arlington Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR73",
            "rin": "PP1700000760"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP66"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "nulla",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP29"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "938 McKibben Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP35",
            "rin": "JP1700000310"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          },
          {
            "remarks": "voluptate",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR25"
          },
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP59"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "982 Hall Street",
        "priority": 7,
        "callType": 614,
        "serviceType": "cc",
        "id": "QR90",
        "rin": "JP1700000565"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "197 Hanson Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP79",
            "rin": "QR1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP22"
          },
          {
            "remarks": "quis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR54"
          }
        ],
        "remarks": "accident with injuries",
        "address": "914 Glendale Court",
        "priority": 2,
        "callType": 259,
        "serviceType": "cl",
        "id": "QR29",
        "rin": "JP1700000874"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP90"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR70"
              },
              {
                "remarks": "reprehenderit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP70"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "206 Hawthorne Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000275"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP80"
              }
            ],
            "remarks": "Trespassing",
            "address": "616 Prescott Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP50",
            "rin": "PP1700000177"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP31"
          },
          {
            "remarks": "culpa",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "163 Conduit Boulevard",
        "priority": 9,
        "callType": 406,
        "serviceType": "cl",
        "id": "QR67",
        "rin": "PP1700000190"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP46"
              },
              {
                "remarks": "excepteur",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR47"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "423 Bayard Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "QR1700000730"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP51"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR47"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "891 Montauk Avenue",
        "priority": 7,
        "callType": 751,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000577"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR61"
          },
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          },
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          }
        ],
        "remarks": "Drug Activity",
        "address": "213 Sullivan Place",
        "priority": 8,
        "callType": 256,
        "serviceType": "cl",
        "id": "JP79",
        "rin": "PP1700000813"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR45"
              },
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR82"
              }
            ],
            "remarks": "",
            "address": "567 McDonald Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP23",
            "rin": "QR1700000462"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP45"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              }
            ],
            "remarks": "",
            "address": "802 Estate Road",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP89",
            "rin": "PP1700000367"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "412 Hart Place",
        "priority": 2,
        "callType": 846,
        "serviceType": "cc",
        "id": "JP89",
        "rin": "PP1700000391"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP67"
          },
          {
            "remarks": "voluptate",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP67"
          },
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP19"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "978 Seabring Street",
        "priority": 9,
        "callType": 632,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000988"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "est",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "pariatur",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR98"
          },
          {
            "remarks": "culpa",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR22"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "583 Newkirk Avenue",
        "priority": 8,
        "callType": 928,
        "serviceType": "cl",
        "id": "QR75",
        "rin": "QR1700000652"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR97"
              }
            ],
            "remarks": "accident with injuries",
            "address": "226 Schenectady Avenue",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP75",
            "rin": "JP1700000923"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP30"
              },
              {
                "remarks": "minim",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP40"
              },
              {
                "remarks": "consectetur",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP58"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "137 Hudson Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP45",
            "rin": "PP1700000932"
          }
        ],
        "callUnits": [
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR71"
          },
          {
            "remarks": "id",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP34"
          },
          {
            "remarks": "minim",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "703 Bradford Street",
        "priority": 8,
        "callType": 309,
        "serviceType": "cl",
        "id": "QR80",
        "rin": "JP1700000839"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP70"
              }
            ],
            "remarks": "Drug Activity",
            "address": "206 Canda Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000948"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "823 Wortman Avenue",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR50"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP10"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "948 Lexington Avenue",
        "priority": 9,
        "callType": 561,
        "serviceType": "cc",
        "id": "PP53",
        "rin": "PP1700000135"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR72"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "329 Laurel Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "PP1700000822"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP93"
              }
            ],
            "remarks": "",
            "address": "901 Grattan Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "JP1700000894"
          },
          {
            "callUnits": [
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP66"
              }
            ],
            "remarks": "",
            "address": "733 Durland Place",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP97",
            "rin": "PP1700000357"
          }
        ],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "689 Pershing Loop",
        "priority": 8,
        "callType": 813,
        "serviceType": "cc",
        "id": "PP64",
        "rin": "PP1700000639"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP55"
              }
            ],
            "remarks": "",
            "address": "265 Kensington Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "PP1700000892"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP23"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "615 Georgia Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR29",
            "rin": "JP1700000421"
          },
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR70"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "300 Gunnison Court",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR84",
            "rin": "JP1700000624"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP57"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "749 Melrose Street",
        "priority": 4,
        "callType": 885,
        "serviceType": "cc",
        "id": "JP14",
        "rin": "JP1700000163"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "640 Vermont Street",
        "priority": 8,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP56",
        "rin": "PP1700000911"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP52"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR39"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR42"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "482 Ide Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR89",
            "rin": "JP1700000539"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP62"
              },
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR60"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "709 Strauss Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP79",
            "rin": "JP1700000709"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP46"
              },
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "408 Fiske Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR18",
            "rin": "QR1700000534"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR12"
          },
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "145 Bank Street",
        "priority": 3,
        "callType": 974,
        "serviceType": "cc",
        "id": "PP71",
        "rin": "JP1700000140"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP43"
          }
        ],
        "remarks": "Trespassing",
        "address": "863 Royce Street",
        "priority": 6,
        "callType": 755,
        "serviceType": "cl",
        "id": "QR83",
        "rin": "JP1700000224"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP87"
              },
              {
                "remarks": "aliqua",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR42"
              },
              {
                "remarks": "elit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP79"
              }
            ],
            "remarks": "",
            "address": "413 Suydam Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP11",
            "rin": "QR1700000766"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP12"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR86"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "398 Brooklyn Road",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP49",
            "rin": "JP1700000626"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP75"
          }
        ],
        "remarks": "Drug Activity",
        "address": "206 Nautilus Avenue",
        "priority": 1,
        "callType": 496,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "JP1700000629"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR61"
              },
              {
                "remarks": "cillum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP59"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "223 Olive Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR47",
            "rin": "JP1700000834"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP78"
              },
              {
                "remarks": "excepteur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "277 Commerce Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP27",
            "rin": "PP1700000157"
          },
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP38"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR65"
              },
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP30"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "894 Wyona Street",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR24",
            "rin": "QR1700000872"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP32"
          }
        ],
        "remarks": "Trespassing",
        "address": "973 Merit Court",
        "priority": 1,
        "callType": 209,
        "serviceType": "cc",
        "id": "JP19",
        "rin": "JP1700000104"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP19"
          },
          {
            "remarks": "non",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "415 Marconi Place",
        "priority": 9,
        "callType": 817,
        "serviceType": "cc",
        "id": "QR47",
        "rin": "QR1700000377"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR62"
              }
            ],
            "remarks": "",
            "address": "869 Hegeman Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP37",
            "rin": "JP1700000998"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR92"
              },
              {
                "remarks": "consequat",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "",
            "address": "314 Whitty Lane",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "QR1700000702"
          },
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP44"
              }
            ],
            "remarks": "",
            "address": "105 Matthews Court",
            "priority": 2,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "PP1700000332"
          }
        ],
        "callUnits": [
          {
            "remarks": "occaecat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR42"
          }
        ],
        "remarks": "accident with injuries",
        "address": "642 Duryea Place",
        "priority": 7,
        "callType": 938,
        "serviceType": "cc",
        "id": "JP74",
        "rin": "PP1700000431"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP41"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR48"
              },
              {
                "remarks": "anim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "389 Radde Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP18"
              },
              {
                "remarks": "aliqua",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "315 Colonial Court",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP63",
            "rin": "JP1700000575"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP97"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR53"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "508 Ross Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP63",
            "rin": "JP1700000931"
          }
        ],
        "callUnits": [
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP85"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "309 Kingsway Place",
        "priority": 7,
        "callType": 513,
        "serviceType": "cl",
        "id": "JP81",
        "rin": "QR1700000706"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP62"
          },
          {
            "remarks": "amet",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "voluptate",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR29"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "971 Varick Street",
        "priority": 8,
        "callType": 249,
        "serviceType": "cl",
        "id": "QR49",
        "rin": "QR1700000130"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR20"
              },
              {
                "remarks": "aliquip",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR65"
              },
              {
                "remarks": "laboris",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR67"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "507 Fleet Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP14",
            "rin": "PP1700000911"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP40"
          },
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR62"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "996 Chestnut Avenue",
        "priority": 5,
        "callType": 308,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000272"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "590 Erskine Loop",
        "priority": 3,
        "callType": 937,
        "serviceType": "cl",
        "id": "QR76",
        "rin": "PP1700000840"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP43"
          },
          {
            "remarks": "fugiat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP99"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "404 Greene Avenue",
        "priority": 9,
        "callType": 920,
        "serviceType": "cl",
        "id": "QR43",
        "rin": "JP1700000240"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP37"
              }
            ],
            "remarks": "",
            "address": "911 Williams Court",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP97",
            "rin": "PP1700000735"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR88"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR44"
          }
        ],
        "remarks": "Trespassing",
        "address": "377 Aster Court",
        "priority": 7,
        "callType": 341,
        "serviceType": "cc",
        "id": "PP57",
        "rin": "QR1700000192"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR57"
              }
            ],
            "remarks": "Trespassing",
            "address": "446 Huron Street",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR30",
            "rin": "QR1700000633"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP75"
          },
          {
            "remarks": "aute",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP16"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "647 Lake Place",
        "priority": 1,
        "callType": 294,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000561"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "462 Grove Place",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP74",
            "rin": "QR1700000726"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP53"
              },
              {
                "remarks": "consectetur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP14"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "279 Garnet Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR59",
            "rin": "PP1700000200"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR77"
              },
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP27"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "376 Hopkins Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "PP1700000318"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP15"
          },
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "767 Beadel Street",
        "priority": 7,
        "callType": 649,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000632"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "labore",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP95"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "",
            "address": "716 Roosevelt Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP84",
            "rin": "QR1700000508"
          },
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR81"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR26"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "187 Powell Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP52",
            "rin": "PP1700000581"
          },
          {
            "callUnits": [
              {
                "remarks": "veniam",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP98"
              },
              {
                "remarks": "labore",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP54"
              }
            ],
            "remarks": "Drug Activity",
            "address": "555 Aurelia Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR92",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP16"
          },
          {
            "remarks": "ipsum",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR47"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "297 Voorhies Avenue",
        "priority": 2,
        "callType": 849,
        "serviceType": "cc",
        "id": "QR80",
        "rin": "PP1700000120"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP44"
              },
              {
                "remarks": "ipsum",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP94"
              },
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "490 Pineapple Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR92",
            "rin": "PP1700000493"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "sit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP94"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR23"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "551 Carlton Avenue",
        "priority": 9,
        "callType": 703,
        "serviceType": "cc",
        "id": "PP14",
        "rin": "QR1700000718"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP45"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR21"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP96"
              }
            ],
            "remarks": "accident with injuries",
            "address": "740 Utica Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP30",
            "rin": "PP1700000981"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP11"
              },
              {
                "remarks": "aliquip",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Drug Activity",
            "address": "855 Ralph Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR18",
            "rin": "JP1700000719"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP13"
          },
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP53"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP62"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "847 Gerritsen Avenue",
        "priority": 8,
        "callType": 772,
        "serviceType": "cc",
        "id": "QR52",
        "rin": "PP1700000385"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              },
              {
                "remarks": "qui",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP55"
              },
              {
                "remarks": "laboris",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR84"
              }
            ],
            "remarks": "",
            "address": "970 Decatur Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR53",
            "rin": "JP1700000971"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP24"
              }
            ],
            "remarks": "",
            "address": "110 Berriman Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP43",
            "rin": "JP1700000890"
          },
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR37"
              },
              {
                "remarks": "quis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP22"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR93"
              }
            ],
            "remarks": "",
            "address": "665 Cypress Court",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP45",
            "rin": "QR1700000737"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP39"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "magna",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP75"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "487 Hoyts Lane",
        "priority": 2,
        "callType": 416,
        "serviceType": "cl",
        "id": "QR85",
        "rin": "QR1700000978"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "559 Blake Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP27",
            "rin": "QR1700000220"
          }
        ],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR24"
          },
          {
            "remarks": "aliquip",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR68"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "695 Bergen Street",
        "priority": 1,
        "callType": 960,
        "serviceType": "cc",
        "id": "QR70",
        "rin": "QR1700000600"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP49"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "447 Alton Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP31",
            "rin": "QR1700000741"
          }
        ],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP53"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "600 Midwood Street",
        "priority": 1,
        "callType": 320,
        "serviceType": "cc",
        "id": "JP55",
        "rin": "QR1700000681"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR90"
          },
          {
            "remarks": "dolore",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP98"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "676 Exeter Street",
        "priority": 7,
        "callType": 906,
        "serviceType": "cc",
        "id": "PP50",
        "rin": "QR1700000924"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR34"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "994 Williams Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP83",
            "rin": "JP1700000823"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "459 Llama Court",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR63",
            "rin": "JP1700000721"
          },
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "veniam",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP99"
              }
            ],
            "remarks": "Trespassing",
            "address": "917 Bancroft Place",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP69",
            "rin": "PP1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP10"
          },
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP82"
          },
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Drug Activity",
        "address": "509 Hicks Street",
        "priority": 9,
        "callType": 761,
        "serviceType": "cl",
        "id": "JP39",
        "rin": "QR1700000876"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP43"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP15"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "561 Lefferts Avenue",
        "priority": 4,
        "callType": 886,
        "serviceType": "cl",
        "id": "QR12",
        "rin": "JP1700000952"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR60"
              },
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP67"
              }
            ],
            "remarks": "",
            "address": "661 Stryker Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "PP1700000579"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR70"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP81"
              },
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP92"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "456 Channel Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "PP1700000955"
          }
        ],
        "callUnits": [
          {
            "remarks": "aute",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP32"
          },
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "786 Nolans Lane",
        "priority": 9,
        "callType": 286,
        "serviceType": "cc",
        "id": "JP88",
        "rin": "QR1700000897"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ut",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR73"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP87"
          },
          {
            "remarks": "aliquip",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP94"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "477 Seton Place",
        "priority": 1,
        "callType": 871,
        "serviceType": "cl",
        "id": "QR28",
        "rin": "JP1700000241"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP92"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "983 Taylor Street",
        "priority": 9,
        "callType": 539,
        "serviceType": "cc",
        "id": "QR68",
        "rin": "PP1700000361"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR98"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP50"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR60"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "904 Meserole Avenue",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR81",
            "rin": "QR1700000819"
          },
          {
            "callUnits": [
              {
                "remarks": "minim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR75"
              }
            ],
            "remarks": "",
            "address": "116 Minna Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR66",
            "rin": "JP1700000445"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP71"
              },
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR16"
              }
            ],
            "remarks": "",
            "address": "553 Kansas Place",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP94",
            "rin": "JP1700000152"
          }
        ],
        "callUnits": [
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP88"
          },
          {
            "remarks": "anim",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP36"
          }
        ],
        "remarks": "Trespassing",
        "address": "144 Cranberry Street",
        "priority": 9,
        "callType": 546,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000935"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "est",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP39"
              },
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP89"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "410 Fanchon Place",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP99",
            "rin": "PP1700000808"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR40"
          },
          {
            "remarks": "irure",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR85"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "468 Railroad Avenue",
        "priority": 6,
        "callType": 849,
        "serviceType": "cl",
        "id": "JP99",
        "rin": "PP1700000331"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "labore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP90"
              },
              {
                "remarks": "dolore",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP25"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "147 Cooper Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP40",
            "rin": "PP1700000111"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP59"
              },
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "185 Village Court",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP94",
            "rin": "PP1700000170"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR48"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR31"
              }
            ],
            "remarks": "Drug Activity",
            "address": "434 Graham Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP92",
            "rin": "PP1700000313"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          }
        ],
        "remarks": "accident with injuries",
        "address": "159 Oceanview Avenue",
        "priority": 7,
        "callType": 827,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "JP1700000755"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "326 Ashland Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000636"
          },
          {
            "callUnits": [
              {
                "remarks": "pariatur",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR82"
              }
            ],
            "remarks": "Trespassing",
            "address": "686 Havens Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP71",
            "rin": "JP1700000767"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR40"
              },
              {
                "remarks": "sint",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP47"
              }
            ],
            "remarks": "",
            "address": "950 Bedford Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP95",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP43"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "201 Madoc Avenue",
        "priority": 5,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000212"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP65"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR97"
              },
              {
                "remarks": "velit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "696 Sutter Avenue",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000926"
          },
          {
            "callUnits": [
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP56"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "accident with injuries",
            "address": "682 Fleet Walk",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP24",
            "rin": "PP1700000221"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP24"
              },
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "ad",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP98"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "752 Flatlands Avenue",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR83",
            "rin": "QR1700000844"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP14"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR92"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "616 Vanderveer Street",
        "priority": 6,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP10",
        "rin": "JP1700000474"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "excepteur",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP36"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "645 Frost Street",
        "priority": 9,
        "callType": 710,
        "serviceType": "cl",
        "id": "JP86",
        "rin": "QR1700000819"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP14"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "607 Gilmore Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP65",
            "rin": "JP1700000329"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR44"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP74"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR41"
              }
            ],
            "remarks": "",
            "address": "368 Danforth Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP19",
            "rin": "QR1700000634"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "196 Evans Street",
        "priority": 9,
        "callType": 607,
        "serviceType": "cl",
        "id": "JP28",
        "rin": "JP1700000173"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP86"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR26"
              },
              {
                "remarks": "irure",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "839 Tabor Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR76",
            "rin": "QR1700000285"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR36"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "862 Gotham Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP81",
            "rin": "PP1700000283"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "",
            "address": "344 Dank Court",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "QR1700000491"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP20"
          }
        ],
        "remarks": "accident with injuries",
        "address": "293 Claver Place",
        "priority": 5,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP77",
        "rin": "JP1700000513"
      }
    ]
  },
  listDataLong2: {
    "data": [
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP92"
              },
              {
                "remarks": "veniam",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP37"
              }
            ],
            "remarks": "",
            "address": "190 Neptune Avenue",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR39",
            "rin": "PP1700000949"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP66"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "415 Veranda Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR97",
            "rin": "QR1700000592"
          },
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP72"
              },
              {
                "remarks": "incididunt",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "628 Dean Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP65",
            "rin": "PP1700000250"
          }
        ],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP97"
          },
          {
            "remarks": "et",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "187 Essex Street",
        "priority": 1,
        "callType": 645,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000864"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR72"
              },
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP36"
              }
            ],
            "remarks": "Trespassing",
            "address": "473 Fountain Avenue",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP48",
            "rin": "QR1700000666"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP29"
              }
            ],
            "remarks": "",
            "address": "953 Highland Avenue",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP22",
            "rin": "JP1700000213"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP87"
              },
              {
                "remarks": "veniam",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP23"
              }
            ],
            "remarks": "",
            "address": "721 Kane Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "PP1700000900"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP95"
          }
        ],
        "remarks": "Drug Activity",
        "address": "680 Dunham Place",
        "priority": 4,
        "callType": 859,
        "serviceType": "cc",
        "id": "PP94",
        "rin": "QR1700000438"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP32"
          },
          {
            "remarks": "incididunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR63"
          },
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP52"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "349 Leonard Street",
        "priority": 4,
        "callType": 902,
        "serviceType": "cc",
        "id": "JP49",
        "rin": "PP1700000636"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "do",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR85"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "993 Beaver Street",
        "priority": 8,
        "callType": 697,
        "serviceType": "cl",
        "id": "QR98",
        "rin": "QR1700000849"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              }
            ],
            "remarks": "",
            "address": "989 Conway Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR28",
            "rin": "QR1700000954"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR38"
          },
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP41"
          },
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP51"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "615 Mill Street",
        "priority": 3,
        "callType": 205,
        "serviceType": "cc",
        "id": "QR53",
        "rin": "JP1700000854"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP15"
              },
              {
                "remarks": "reprehenderit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP69"
              }
            ],
            "remarks": "",
            "address": "379 Sutton Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP51",
            "rin": "JP1700000728"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP51"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "335 Gold Street",
        "priority": 7,
        "callType": 520,
        "serviceType": "cc",
        "id": "QR95",
        "rin": "PP1700000281"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR35"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "146 Keap Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP85",
            "rin": "PP1700000453"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP28"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR85"
              }
            ],
            "remarks": "Trespassing",
            "address": "490 Irving Place",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP30",
            "rin": "PP1700000117"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP13"
              },
              {
                "remarks": "ad",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "299 Ocean Parkway",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP32",
            "rin": "QR1700000329"
          }
        ],
        "callUnits": [
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR18"
          },
          {
            "remarks": "minim",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP81"
          },
          {
            "remarks": "aliqua",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR65"
          }
        ],
        "remarks": "accident with injuries",
        "address": "976 Otsego Street",
        "priority": 6,
        "callType": 482,
        "serviceType": "cc",
        "id": "JP93",
        "rin": "QR1700000279"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR74"
              },
              {
                "remarks": "Lorem",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP47"
              },
              {
                "remarks": "fugiat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "209 Turnbull Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP16",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR16"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "959 Macon Street",
        "priority": 9,
        "callType": 336,
        "serviceType": "cc",
        "id": "JP40",
        "rin": "QR1700000809"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR73"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "808 Bogart Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP77",
            "rin": "PP1700000577"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "323 Osborn Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP20",
            "rin": "JP1700000366"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP12"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR76"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "432 Madison Street",
        "priority": 5,
        "callType": 500,
        "serviceType": "cl",
        "id": "PP27",
        "rin": "QR1700000655"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "anim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP37"
              },
              {
                "remarks": "Lorem",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP62"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "185 Lawn Court",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "QR1700000333"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP82"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "920 Billings Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR66",
            "rin": "JP1700000115"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "268 Aberdeen Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "JP1700000667"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP11"
          },
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP10"
          }
        ],
        "remarks": "Drug Activity",
        "address": "342 Coleman Street",
        "priority": 6,
        "callType": 142,
        "serviceType": "cc",
        "id": "QR23",
        "rin": "PP1700000829"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP23"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP69"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "710 Navy Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP53",
            "rin": "JP1700000655"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP30"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "909 Riverdale Avenue",
        "priority": 3,
        "callType": 782,
        "serviceType": "cc",
        "id": "JP36",
        "rin": "QR1700000168"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "778 Applegate Court",
        "priority": 4,
        "callType": 993,
        "serviceType": "cc",
        "id": "QR24",
        "rin": "QR1700000499"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP70"
              }
            ],
            "remarks": "",
            "address": "912 Doone Court",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP33",
            "rin": "QR1700000578"
          },
          {
            "callUnits": [
              {
                "remarks": "incididunt",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR67"
              }
            ],
            "remarks": "Trespassing",
            "address": "135 Main Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP92",
            "rin": "JP1700000263"
          }
        ],
        "callUnits": [
          {
            "remarks": "cillum",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP66"
          }
        ],
        "remarks": "Drug Activity",
        "address": "297 Jamison Lane",
        "priority": 5,
        "callType": 661,
        "serviceType": "cl",
        "id": "QR20",
        "rin": "QR1700000277"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP93"
              }
            ],
            "remarks": "",
            "address": "264 Hart Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP76",
            "rin": "QR1700000407"
          },
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR11"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP56"
              }
            ],
            "remarks": "",
            "address": "867 Bristol Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR23",
            "rin": "JP1700000339"
          }
        ],
        "callUnits": [
          {
            "remarks": "incididunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "878 Mill Lane",
        "priority": 4,
        "callType": 322,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000375"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR49"
              },
              {
                "remarks": "eu",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "",
            "address": "969 Noble Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP29",
            "rin": "QR1700000438"
          }
        ],
        "callUnits": [
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP54"
          },
          {
            "remarks": "mollit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP73"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "107 Alice Court",
        "priority": 5,
        "callType": 341,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "JP1700000950"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR23"
              }
            ],
            "remarks": "Drug Activity",
            "address": "391 Newton Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR86",
            "rin": "QR1700000862"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP64"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR61"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "432 Autumn Avenue",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP48",
            "rin": "QR1700000950"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP43"
          },
          {
            "remarks": "ad",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "553 Melba Court",
        "priority": 9,
        "callType": 566,
        "serviceType": "cl",
        "id": "PP83",
        "rin": "PP1700000370"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP15"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR21"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "588 Dunne Place",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP70",
            "rin": "PP1700000355"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP72"
          },
          {
            "remarks": "velit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP18"
          }
        ],
        "remarks": "accident with injuries",
        "address": "180 Cleveland Street",
        "priority": 5,
        "callType": 696,
        "serviceType": "cl",
        "id": "QR57",
        "rin": "QR1700000807"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "proident",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP16"
          },
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP77"
          },
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "595 Atlantic Avenue",
        "priority": 4,
        "callType": 461,
        "serviceType": "cc",
        "id": "QR51",
        "rin": "JP1700000857"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR96"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP38"
              }
            ],
            "remarks": "",
            "address": "368 Heyward Street",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP20",
            "rin": "QR1700000218"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR49"
              }
            ],
            "remarks": "Drug Activity",
            "address": "861 Hemlock Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP81",
            "rin": "JP1700000335"
          }
        ],
        "callUnits": [
          {
            "remarks": "do",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP70"
          },
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP28"
          },
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR77"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "596 Franklin Street",
        "priority": 9,
        "callType": 113,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000837"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP87"
              },
              {
                "remarks": "minim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP51"
              }
            ],
            "remarks": "",
            "address": "833 Grand Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP11",
            "rin": "JP1700000756"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP72"
              }
            ],
            "remarks": "Drug Activity",
            "address": "563 Cheever Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP46",
            "rin": "JP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP52"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR74"
              },
              {
                "remarks": "deserunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR80"
              }
            ],
            "remarks": "",
            "address": "485 Harbor Lane",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP67",
            "rin": "PP1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          },
          {
            "remarks": "commodo",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "545 Poplar Avenue",
        "priority": 7,
        "callType": 270,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000196"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP72"
              },
              {
                "remarks": "excepteur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR43"
              },
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR65"
              }
            ],
            "remarks": "accident with injuries",
            "address": "605 Irving Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP98",
            "rin": "JP1700000598"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR76"
              },
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP10"
              }
            ],
            "remarks": "accident with injuries",
            "address": "710 High Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR77",
            "rin": "JP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR26"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP71"
              }
            ],
            "remarks": "",
            "address": "594 Remsen Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "PP1700000160"
          }
        ],
        "callUnits": [
          {
            "remarks": "non",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP82"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "380 Hunts Lane",
        "priority": 2,
        "callType": 185,
        "serviceType": "cl",
        "id": "QR62",
        "rin": "JP1700000310"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR14"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP70"
              },
              {
                "remarks": "non",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP84"
              }
            ],
            "remarks": "",
            "address": "787 Eagle Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR88",
            "rin": "JP1700000441"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR35"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "273 Lamont Court",
        "priority": 1,
        "callType": 625,
        "serviceType": "cc",
        "id": "QR76",
        "rin": "JP1700000776"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR46"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "424 Boerum Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "PP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR34"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP34"
              },
              {
                "remarks": "amet",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "accident with injuries",
            "address": "665 Arion Place",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP31",
            "rin": "PP1700000576"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP47"
              },
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR66"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "676 Willow Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP87",
            "rin": "PP1700000785"
          }
        ],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP32"
          },
          {
            "remarks": "laborum",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP79"
          },
          {
            "remarks": "consequat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "632 Visitation Place",
        "priority": 1,
        "callType": 231,
        "serviceType": "cc",
        "id": "PP98",
        "rin": "PP1700000613"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP35"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP93"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP78"
              }
            ],
            "remarks": "",
            "address": "749 Sandford Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP61",
            "rin": "PP1700000363"
          }
        ],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "320 Kensington Walk",
        "priority": 5,
        "callType": 344,
        "serviceType": "cc",
        "id": "QR71",
        "rin": "PP1700000617"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR84"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP94"
              },
              {
                "remarks": "magna",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR66"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "891 Elizabeth Place",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR90",
            "rin": "QR1700000665"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP97"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "454 Clarkson Avenue",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP37",
            "rin": "QR1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "consectetur",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP24"
          },
          {
            "remarks": "sit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP94"
          },
          {
            "remarks": "elit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR33"
          }
        ],
        "remarks": "Trespassing",
        "address": "529 Cumberland Street",
        "priority": 3,
        "callType": 901,
        "serviceType": "cc",
        "id": "QR39",
        "rin": "JP1700000309"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP64"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP65"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "492 Freeman Street",
        "priority": 1,
        "callType": 486,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "PP1700000464"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "Trespassing",
            "address": "360 Brigham Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR37",
            "rin": "QR1700000764"
          }
        ],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR76"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "258 Pulaski Street",
        "priority": 8,
        "callType": 469,
        "serviceType": "cl",
        "id": "QR22",
        "rin": "QR1700000384"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP31"
              },
              {
                "remarks": "proident",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR33"
              }
            ],
            "remarks": "",
            "address": "896 Seaview Avenue",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR21",
            "rin": "PP1700000172"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR57"
              },
              {
                "remarks": "consequat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP87"
              },
              {
                "remarks": "in",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP13"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "571 Hyman Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "QR1700000839"
          },
          {
            "callUnits": [
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP63"
              }
            ],
            "remarks": "",
            "address": "987 Schenck Place",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP73",
            "rin": "JP1700000284"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR63"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "373 Madison Place",
        "priority": 1,
        "callType": 863,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "QR1700000213"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP74"
              },
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP51"
              }
            ],
            "remarks": "accident with injuries",
            "address": "938 Jewel Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "QR1700000990"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR77"
          },
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "850 Howard Avenue",
        "priority": 1,
        "callType": 478,
        "serviceType": "cl",
        "id": "PP81",
        "rin": "QR1700000996"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP38"
          },
          {
            "remarks": "reprehenderit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP63"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "376 Brightwater Court",
        "priority": 1,
        "callType": 138,
        "serviceType": "cc",
        "id": "JP58",
        "rin": "QR1700000666"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP41"
              }
            ],
            "remarks": "Trespassing",
            "address": "806 Garden Place",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP32",
            "rin": "QR1700000593"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "esse",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP33"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "469 Willoughby Avenue",
        "priority": 5,
        "callType": 122,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "PP1700000430"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "",
            "address": "446 Shale Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "JP1700000517"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP99"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR26"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "451 Bedell Lane",
        "priority": 3,
        "callType": 892,
        "serviceType": "cl",
        "id": "QR96",
        "rin": "PP1700000320"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "246 Mermaid Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "JP1700000171"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "982 Guider Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP50",
            "rin": "QR1700000656"
          }
        ],
        "callUnits": [
          {
            "remarks": "nostrud",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP88"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP40"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "325 Eldert Lane",
        "priority": 3,
        "callType": 597,
        "serviceType": "cl",
        "id": "QR61",
        "rin": "JP1700000429"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP65"
          },
          {
            "remarks": "proident",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR43"
          },
          {
            "remarks": "excepteur",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP30"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "442 Hubbard Place",
        "priority": 4,
        "callType": 942,
        "serviceType": "cc",
        "id": "PP68",
        "rin": "PP1700000669"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR13"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "156 Wolf Place",
        "priority": 1,
        "callType": 857,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000685"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "elit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP12"
          },
          {
            "remarks": "et",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP80"
          },
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR97"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "727 Colin Place",
        "priority": 3,
        "callType": 496,
        "serviceType": "cc",
        "id": "PP28",
        "rin": "JP1700000177"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR97"
          },
          {
            "remarks": "esse",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP19"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "323 Lake Avenue",
        "priority": 1,
        "callType": 970,
        "serviceType": "cl",
        "id": "QR58",
        "rin": "QR1700000954"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR86"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "105 Fulton Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP15",
            "rin": "JP1700000644"
          },
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP50"
              }
            ],
            "remarks": "",
            "address": "451 Brown Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP80",
            "rin": "QR1700000544"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR74"
          },
          {
            "remarks": "in",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP21"
          }
        ],
        "remarks": "accident with injuries",
        "address": "375 Coffey Street",
        "priority": 8,
        "callType": 791,
        "serviceType": "cl",
        "id": "PP96",
        "rin": "JP1700000798"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP53"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP20"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "319 Miller Place",
        "priority": 2,
        "callType": 657,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000341"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR10"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "911 Fuller Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP55",
            "rin": "JP1700000196"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP61"
              },
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "133 Judge Street",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP62",
            "rin": "JP1700000694"
          }
        ],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP62"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "663 Willoughby Street",
        "priority": 2,
        "callType": 666,
        "serviceType": "cl",
        "id": "JP18",
        "rin": "JP1700000264"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP71"
              },
              {
                "remarks": "commodo",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP69"
              }
            ],
            "remarks": "accident with injuries",
            "address": "309 Winthrop Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP87",
            "rin": "JP1700000660"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP32"
              },
              {
                "remarks": "anim",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP72"
              },
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "376 Louis Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP71",
            "rin": "JP1700000692"
          },
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP48"
              }
            ],
            "remarks": "",
            "address": "590 Dover Street",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR96",
            "rin": "PP1700000244"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR58"
          },
          {
            "remarks": "veniam",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          },
          {
            "remarks": "id",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "507 Jerome Avenue",
        "priority": 4,
        "callType": 850,
        "serviceType": "cc",
        "id": "PP86",
        "rin": "PP1700000780"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR87"
          },
          {
            "remarks": "dolor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP27"
          },
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP58"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "666 Whitney Avenue",
        "priority": 7,
        "callType": 912,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "JP1700000705"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ex",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR14"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "353 Lott Street",
        "priority": 9,
        "callType": 327,
        "serviceType": "cl",
        "id": "QR84",
        "rin": "QR1700000654"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP86"
              },
              {
                "remarks": "minim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP92"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR11"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "925 Prospect Place",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "JP1700000532"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP51"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP91"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "368 Atkins Avenue",
        "priority": 5,
        "callType": 372,
        "serviceType": "cl",
        "id": "QR45",
        "rin": "PP1700000941"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP65"
              },
              {
                "remarks": "pariatur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP16"
              }
            ],
            "remarks": "",
            "address": "777 Friel Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP13",
            "rin": "QR1700000874"
          },
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP79"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP32"
              }
            ],
            "remarks": "",
            "address": "392 Hull Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR87",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR97"
              },
              {
                "remarks": "est",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP20"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "110 Hanover Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "PP1700000524"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP41"
          },
          {
            "remarks": "adipisicing",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Trespassing",
        "address": "945 Richardson Street",
        "priority": 7,
        "callType": 801,
        "serviceType": "cc",
        "id": "PP90",
        "rin": "QR1700000688"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP82"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "nulla",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP83"
          }
        ],
        "remarks": "Public Intoxication",
        "address": "210 Rose Street",
        "priority": 1,
        "callType": 480,
        "serviceType": "cl",
        "id": "PP97",
        "rin": "JP1700000846"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR29"
              }
            ],
            "remarks": "",
            "address": "187 Nixon Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP43",
            "rin": "QR1700000262"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP39"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "257 Court Square",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR69",
            "rin": "PP1700000457"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR83"
              },
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR45"
              }
            ],
            "remarks": "accident with injuries",
            "address": "363 Harwood Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR22",
            "rin": "PP1700000569"
          }
        ],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP39"
          },
          {
            "remarks": "officia",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "160 Norman Avenue",
        "priority": 8,
        "callType": 876,
        "serviceType": "cl",
        "id": "PP25",
        "rin": "JP1700000198"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP95"
              },
              {
                "remarks": "tempor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR50"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP49"
              }
            ],
            "remarks": "",
            "address": "963 Elm Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP12",
            "rin": "JP1700000531"
          },
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR51"
              },
              {
                "remarks": "do",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR51"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "492 Beaumont Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "JP1700000452"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR76"
              },
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP68"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "480 Union Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP10",
            "rin": "QR1700000638"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP97"
          },
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP66"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "618 Emerald Street",
        "priority": 9,
        "callType": 760,
        "serviceType": "cc",
        "id": "JP72",
        "rin": "QR1700000653"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP33"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP89"
              },
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP77"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "445 Livingston Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP59",
            "rin": "QR1700000525"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR98"
              }
            ],
            "remarks": "Trespassing",
            "address": "395 Highland Boulevard",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR54",
            "rin": "PP1700000130"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR14"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP55"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "900 Schenck Avenue",
        "priority": 5,
        "callType": 690,
        "serviceType": "cl",
        "id": "JP46",
        "rin": "PP1700000538"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP22"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "274 Rochester Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP29",
            "rin": "JP1700000628"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP31"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "811 Wilson Avenue",
        "priority": 7,
        "callType": 600,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "QR1700000399"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP44"
          },
          {
            "remarks": "occaecat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR53"
          },
          {
            "remarks": "consequat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP91"
          }
        ],
        "remarks": "accident with injuries",
        "address": "873 Oriental Court",
        "priority": 5,
        "callType": 721,
        "serviceType": "cc",
        "id": "JP99",
        "rin": "PP1700000295"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "deserunt",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP13"
              }
            ],
            "remarks": "",
            "address": "247 Centre Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR68",
            "rin": "PP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP78"
              }
            ],
            "remarks": "",
            "address": "512 Auburn Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "JP1700000923"
          }
        ],
        "callUnits": [
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP52"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "626 Pilling Street",
        "priority": 9,
        "callType": 970,
        "serviceType": "cl",
        "id": "JP38",
        "rin": "PP1700000712"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP61"
              },
              {
                "remarks": "aliqua",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP31"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "943 Aitken Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR79",
            "rin": "QR1700000674"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR20"
              }
            ],
            "remarks": "",
            "address": "650 Putnam Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000598"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR97"
          },
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP81"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "176 Macdougal Street",
        "priority": 7,
        "callType": 569,
        "serviceType": "cl",
        "id": "PP52",
        "rin": "QR1700000229"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "690 Arlington Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR73",
            "rin": "PP1700000760"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP66"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "nulla",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP29"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "938 McKibben Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP35",
            "rin": "JP1700000310"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          },
          {
            "remarks": "voluptate",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR25"
          },
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP59"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "982 Hall Street",
        "priority": 7,
        "callType": 614,
        "serviceType": "cc",
        "id": "QR90",
        "rin": "JP1700000565"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "197 Hanson Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP79",
            "rin": "QR1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP22"
          },
          {
            "remarks": "quis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR54"
          }
        ],
        "remarks": "accident with injuries",
        "address": "914 Glendale Court",
        "priority": 2,
        "callType": 259,
        "serviceType": "cl",
        "id": "QR29",
        "rin": "JP1700000874"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP90"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR70"
              },
              {
                "remarks": "reprehenderit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP70"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "206 Hawthorne Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000275"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP80"
              }
            ],
            "remarks": "Trespassing",
            "address": "616 Prescott Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP50",
            "rin": "PP1700000177"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP31"
          },
          {
            "remarks": "culpa",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "163 Conduit Boulevard",
        "priority": 9,
        "callType": 406,
        "serviceType": "cl",
        "id": "QR67",
        "rin": "PP1700000190"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP46"
              },
              {
                "remarks": "excepteur",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR47"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "423 Bayard Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "QR1700000730"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP51"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR47"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "891 Montauk Avenue",
        "priority": 7,
        "callType": 751,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000577"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR61"
          },
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          },
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          }
        ],
        "remarks": "Drug Activity",
        "address": "213 Sullivan Place",
        "priority": 8,
        "callType": 256,
        "serviceType": "cl",
        "id": "JP79",
        "rin": "PP1700000813"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR45"
              },
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR82"
              }
            ],
            "remarks": "",
            "address": "567 McDonald Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP23",
            "rin": "QR1700000462"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP45"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              }
            ],
            "remarks": "",
            "address": "802 Estate Road",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP89",
            "rin": "PP1700000367"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "412 Hart Place",
        "priority": 2,
        "callType": 846,
        "serviceType": "cc",
        "id": "JP89",
        "rin": "PP1700000391"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP67"
          },
          {
            "remarks": "voluptate",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP67"
          },
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP19"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "978 Seabring Street",
        "priority": 9,
        "callType": 632,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000988"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "est",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "pariatur",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR98"
          },
          {
            "remarks": "culpa",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR22"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "583 Newkirk Avenue",
        "priority": 8,
        "callType": 928,
        "serviceType": "cl",
        "id": "QR75",
        "rin": "QR1700000652"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR97"
              }
            ],
            "remarks": "accident with injuries",
            "address": "226 Schenectady Avenue",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP75",
            "rin": "JP1700000923"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP30"
              },
              {
                "remarks": "minim",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP40"
              },
              {
                "remarks": "consectetur",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP58"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "137 Hudson Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP45",
            "rin": "PP1700000932"
          }
        ],
        "callUnits": [
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR71"
          },
          {
            "remarks": "id",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP34"
          },
          {
            "remarks": "minim",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "703 Bradford Street",
        "priority": 8,
        "callType": 309,
        "serviceType": "cl",
        "id": "QR80",
        "rin": "JP1700000839"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP70"
              }
            ],
            "remarks": "Drug Activity",
            "address": "206 Canda Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000948"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "823 Wortman Avenue",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR50"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP10"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "948 Lexington Avenue",
        "priority": 9,
        "callType": 561,
        "serviceType": "cc",
        "id": "PP53",
        "rin": "PP1700000135"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR72"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "329 Laurel Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "PP1700000822"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP93"
              }
            ],
            "remarks": "",
            "address": "901 Grattan Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "JP1700000894"
          },
          {
            "callUnits": [
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP66"
              }
            ],
            "remarks": "",
            "address": "733 Durland Place",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP97",
            "rin": "PP1700000357"
          }
        ],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "689 Pershing Loop",
        "priority": 8,
        "callType": 813,
        "serviceType": "cc",
        "id": "PP64",
        "rin": "PP1700000639"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP55"
              }
            ],
            "remarks": "",
            "address": "265 Kensington Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "PP1700000892"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP23"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "615 Georgia Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR29",
            "rin": "JP1700000421"
          },
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR70"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "300 Gunnison Court",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR84",
            "rin": "JP1700000624"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP57"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "749 Melrose Street",
        "priority": 4,
        "callType": 885,
        "serviceType": "cc",
        "id": "JP14",
        "rin": "JP1700000163"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "640 Vermont Street",
        "priority": 8,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP56",
        "rin": "PP1700000911"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP52"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR39"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR42"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "482 Ide Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR89",
            "rin": "JP1700000539"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP62"
              },
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR60"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "709 Strauss Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP79",
            "rin": "JP1700000709"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP46"
              },
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "408 Fiske Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR18",
            "rin": "QR1700000534"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR12"
          },
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "145 Bank Street",
        "priority": 3,
        "callType": 974,
        "serviceType": "cc",
        "id": "PP71",
        "rin": "JP1700000140"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP43"
          }
        ],
        "remarks": "Trespassing",
        "address": "863 Royce Street",
        "priority": 6,
        "callType": 755,
        "serviceType": "cl",
        "id": "QR83",
        "rin": "JP1700000224"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP87"
              },
              {
                "remarks": "aliqua",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR42"
              },
              {
                "remarks": "elit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP79"
              }
            ],
            "remarks": "",
            "address": "413 Suydam Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP11",
            "rin": "QR1700000766"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP12"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR86"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "398 Brooklyn Road",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP49",
            "rin": "JP1700000626"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP75"
          }
        ],
        "remarks": "Drug Activity",
        "address": "206 Nautilus Avenue",
        "priority": 1,
        "callType": 496,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "JP1700000629"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR61"
              },
              {
                "remarks": "cillum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP59"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "223 Olive Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR47",
            "rin": "JP1700000834"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP78"
              },
              {
                "remarks": "excepteur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "277 Commerce Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP27",
            "rin": "PP1700000157"
          },
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP38"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR65"
              },
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP30"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "894 Wyona Street",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR24",
            "rin": "QR1700000872"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP32"
          }
        ],
        "remarks": "Trespassing",
        "address": "973 Merit Court",
        "priority": 1,
        "callType": 209,
        "serviceType": "cc",
        "id": "JP19",
        "rin": "JP1700000104"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP19"
          },
          {
            "remarks": "non",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "415 Marconi Place",
        "priority": 9,
        "callType": 817,
        "serviceType": "cc",
        "id": "QR47",
        "rin": "QR1700000377"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR62"
              }
            ],
            "remarks": "",
            "address": "869 Hegeman Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP37",
            "rin": "JP1700000998"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR92"
              },
              {
                "remarks": "consequat",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "",
            "address": "314 Whitty Lane",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "QR1700000702"
          },
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP44"
              }
            ],
            "remarks": "",
            "address": "105 Matthews Court",
            "priority": 2,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "PP1700000332"
          }
        ],
        "callUnits": [
          {
            "remarks": "occaecat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR42"
          }
        ],
        "remarks": "accident with injuries",
        "address": "642 Duryea Place",
        "priority": 7,
        "callType": 938,
        "serviceType": "cc",
        "id": "JP74",
        "rin": "PP1700000431"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP41"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR48"
              },
              {
                "remarks": "anim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "389 Radde Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP18"
              },
              {
                "remarks": "aliqua",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "315 Colonial Court",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP63",
            "rin": "JP1700000575"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP97"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR53"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "508 Ross Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP63",
            "rin": "JP1700000931"
          }
        ],
        "callUnits": [
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP85"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "309 Kingsway Place",
        "priority": 7,
        "callType": 513,
        "serviceType": "cl",
        "id": "JP81",
        "rin": "QR1700000706"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP62"
          },
          {
            "remarks": "amet",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "voluptate",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR29"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "971 Varick Street",
        "priority": 8,
        "callType": 249,
        "serviceType": "cl",
        "id": "QR49",
        "rin": "QR1700000130"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR20"
              },
              {
                "remarks": "aliquip",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR65"
              },
              {
                "remarks": "laboris",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR67"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "507 Fleet Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP14",
            "rin": "PP1700000911"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP40"
          },
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR62"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "996 Chestnut Avenue",
        "priority": 5,
        "callType": 308,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000272"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "590 Erskine Loop",
        "priority": 3,
        "callType": 937,
        "serviceType": "cl",
        "id": "QR76",
        "rin": "PP1700000840"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP43"
          },
          {
            "remarks": "fugiat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP99"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "404 Greene Avenue",
        "priority": 9,
        "callType": 920,
        "serviceType": "cl",
        "id": "QR43",
        "rin": "JP1700000240"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP37"
              }
            ],
            "remarks": "",
            "address": "911 Williams Court",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP97",
            "rin": "PP1700000735"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR88"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR44"
          }
        ],
        "remarks": "Trespassing",
        "address": "377 Aster Court",
        "priority": 7,
        "callType": 341,
        "serviceType": "cc",
        "id": "PP57",
        "rin": "QR1700000192"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR57"
              }
            ],
            "remarks": "Trespassing",
            "address": "446 Huron Street",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR30",
            "rin": "QR1700000633"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP75"
          },
          {
            "remarks": "aute",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP16"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "647 Lake Place",
        "priority": 1,
        "callType": 294,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000561"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "462 Grove Place",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP74",
            "rin": "QR1700000726"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP53"
              },
              {
                "remarks": "consectetur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP14"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "279 Garnet Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR59",
            "rin": "PP1700000200"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR77"
              },
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP27"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "376 Hopkins Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "PP1700000318"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP15"
          },
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "767 Beadel Street",
        "priority": 7,
        "callType": 649,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000632"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "labore",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP95"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "",
            "address": "716 Roosevelt Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP84",
            "rin": "QR1700000508"
          },
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR81"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR26"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "187 Powell Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP52",
            "rin": "PP1700000581"
          },
          {
            "callUnits": [
              {
                "remarks": "veniam",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP98"
              },
              {
                "remarks": "labore",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP54"
              }
            ],
            "remarks": "Drug Activity",
            "address": "555 Aurelia Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR92",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP16"
          },
          {
            "remarks": "ipsum",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR47"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "297 Voorhies Avenue",
        "priority": 2,
        "callType": 849,
        "serviceType": "cc",
        "id": "QR80",
        "rin": "PP1700000120"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP44"
              },
              {
                "remarks": "ipsum",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP94"
              },
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "490 Pineapple Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR92",
            "rin": "PP1700000493"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "sit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP94"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR23"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "551 Carlton Avenue",
        "priority": 9,
        "callType": 703,
        "serviceType": "cc",
        "id": "PP14",
        "rin": "QR1700000718"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP45"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR21"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP96"
              }
            ],
            "remarks": "accident with injuries",
            "address": "740 Utica Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP30",
            "rin": "PP1700000981"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP11"
              },
              {
                "remarks": "aliquip",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Drug Activity",
            "address": "855 Ralph Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR18",
            "rin": "JP1700000719"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP13"
          },
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP53"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP62"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "847 Gerritsen Avenue",
        "priority": 8,
        "callType": 772,
        "serviceType": "cc",
        "id": "QR52",
        "rin": "PP1700000385"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              },
              {
                "remarks": "qui",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP55"
              },
              {
                "remarks": "laboris",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR84"
              }
            ],
            "remarks": "",
            "address": "970 Decatur Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR53",
            "rin": "JP1700000971"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP24"
              }
            ],
            "remarks": "",
            "address": "110 Berriman Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP43",
            "rin": "JP1700000890"
          },
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR37"
              },
              {
                "remarks": "quis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP22"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR93"
              }
            ],
            "remarks": "",
            "address": "665 Cypress Court",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP45",
            "rin": "QR1700000737"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP39"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "magna",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP75"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "487 Hoyts Lane",
        "priority": 2,
        "callType": 416,
        "serviceType": "cl",
        "id": "QR85",
        "rin": "QR1700000978"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "559 Blake Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP27",
            "rin": "QR1700000220"
          }
        ],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR24"
          },
          {
            "remarks": "aliquip",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR68"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "695 Bergen Street",
        "priority": 1,
        "callType": 960,
        "serviceType": "cc",
        "id": "QR70",
        "rin": "QR1700000600"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP49"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "447 Alton Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP31",
            "rin": "QR1700000741"
          }
        ],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP53"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "600 Midwood Street",
        "priority": 1,
        "callType": 320,
        "serviceType": "cc",
        "id": "JP55",
        "rin": "QR1700000681"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR90"
          },
          {
            "remarks": "dolore",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP98"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "676 Exeter Street",
        "priority": 7,
        "callType": 906,
        "serviceType": "cc",
        "id": "PP50",
        "rin": "QR1700000924"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR34"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "994 Williams Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP83",
            "rin": "JP1700000823"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "459 Llama Court",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR63",
            "rin": "JP1700000721"
          },
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "veniam",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP99"
              }
            ],
            "remarks": "Trespassing",
            "address": "917 Bancroft Place",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP69",
            "rin": "PP1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP10"
          },
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP82"
          },
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Drug Activity",
        "address": "509 Hicks Street",
        "priority": 9,
        "callType": 761,
        "serviceType": "cl",
        "id": "JP39",
        "rin": "QR1700000876"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP43"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP15"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "561 Lefferts Avenue",
        "priority": 4,
        "callType": 886,
        "serviceType": "cl",
        "id": "QR12",
        "rin": "JP1700000952"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR60"
              },
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP67"
              }
            ],
            "remarks": "",
            "address": "661 Stryker Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "PP1700000579"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR70"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP81"
              },
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP92"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "456 Channel Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "PP1700000955"
          }
        ],
        "callUnits": [
          {
            "remarks": "aute",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP32"
          },
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "786 Nolans Lane",
        "priority": 9,
        "callType": 286,
        "serviceType": "cc",
        "id": "JP88",
        "rin": "QR1700000897"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ut",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR73"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP87"
          },
          {
            "remarks": "aliquip",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP94"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "477 Seton Place",
        "priority": 1,
        "callType": 871,
        "serviceType": "cl",
        "id": "QR28",
        "rin": "JP1700000241"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP92"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "983 Taylor Street",
        "priority": 9,
        "callType": 539,
        "serviceType": "cc",
        "id": "QR68",
        "rin": "PP1700000361"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR98"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP50"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR60"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "904 Meserole Avenue",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR81",
            "rin": "QR1700000819"
          },
          {
            "callUnits": [
              {
                "remarks": "minim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR75"
              }
            ],
            "remarks": "",
            "address": "116 Minna Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR66",
            "rin": "JP1700000445"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP71"
              },
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR16"
              }
            ],
            "remarks": "",
            "address": "553 Kansas Place",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP94",
            "rin": "JP1700000152"
          }
        ],
        "callUnits": [
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP88"
          },
          {
            "remarks": "anim",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP36"
          }
        ],
        "remarks": "Trespassing",
        "address": "144 Cranberry Street",
        "priority": 9,
        "callType": 546,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000935"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "est",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP39"
              },
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP89"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "410 Fanchon Place",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP99",
            "rin": "PP1700000808"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR40"
          },
          {
            "remarks": "irure",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR85"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "468 Railroad Avenue",
        "priority": 6,
        "callType": 849,
        "serviceType": "cl",
        "id": "JP99",
        "rin": "PP1700000331"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "labore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP90"
              },
              {
                "remarks": "dolore",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP25"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "147 Cooper Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP40",
            "rin": "PP1700000111"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP59"
              },
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "185 Village Court",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP94",
            "rin": "PP1700000170"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR48"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR31"
              }
            ],
            "remarks": "Drug Activity",
            "address": "434 Graham Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP92",
            "rin": "PP1700000313"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          }
        ],
        "remarks": "accident with injuries",
        "address": "159 Oceanview Avenue",
        "priority": 7,
        "callType": 827,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "JP1700000755"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "326 Ashland Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000636"
          },
          {
            "callUnits": [
              {
                "remarks": "pariatur",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR82"
              }
            ],
            "remarks": "Trespassing",
            "address": "686 Havens Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP71",
            "rin": "JP1700000767"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR40"
              },
              {
                "remarks": "sint",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP47"
              }
            ],
            "remarks": "",
            "address": "950 Bedford Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP95",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP43"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "201 Madoc Avenue",
        "priority": 5,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000212"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP65"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR97"
              },
              {
                "remarks": "velit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "696 Sutter Avenue",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000926"
          },
          {
            "callUnits": [
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP56"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "accident with injuries",
            "address": "682 Fleet Walk",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP24",
            "rin": "PP1700000221"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP24"
              },
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "ad",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP98"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "752 Flatlands Avenue",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR83",
            "rin": "QR1700000844"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP14"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR92"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "616 Vanderveer Street",
        "priority": 6,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP10",
        "rin": "JP1700000474"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "excepteur",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP36"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "645 Frost Street",
        "priority": 9,
        "callType": 710,
        "serviceType": "cl",
        "id": "JP86",
        "rin": "QR1700000819"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP14"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "607 Gilmore Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP65",
            "rin": "JP1700000329"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR44"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP74"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR41"
              }
            ],
            "remarks": "",
            "address": "368 Danforth Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP19",
            "rin": "QR1700000634"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "196 Evans Street",
        "priority": 9,
        "callType": 607,
        "serviceType": "cl",
        "id": "JP28",
        "rin": "JP1700000173"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP86"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR26"
              },
              {
                "remarks": "irure",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "839 Tabor Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR76",
            "rin": "QR1700000285"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR36"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "862 Gotham Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP81",
            "rin": "PP1700000283"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "",
            "address": "344 Dank Court",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "QR1700000491"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP20"
          }
        ],
        "remarks": "accident with injuries",
        "address": "293 Claver Place",
        "priority": 5,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP77",
        "rin": "JP1700000513"
      }
    ]
  },
  listDataLong3: {
    "data": [
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP92"
              },
              {
                "remarks": "veniam",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP37"
              }
            ],
            "remarks": "",
            "address": "190 Neptune Avenue",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR39",
            "rin": "PP1700000949"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP66"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "415 Veranda Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR97",
            "rin": "QR1700000592"
          },
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP72"
              },
              {
                "remarks": "incididunt",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "628 Dean Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP65",
            "rin": "PP1700000250"
          }
        ],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP97"
          },
          {
            "remarks": "et",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP29"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR72"
          },
        ],
        "remarks": "truck collision with pedestrian",
        "address": "187 Essex Street",
        "priority": 1,
        "callType": 645,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000864"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR72"
              },
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP36"
              }
            ],
            "remarks": "Trespassing",
            "address": "473 Fountain Avenue",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP48",
            "rin": "QR1700000666"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP29"
              }
            ],
            "remarks": "",
            "address": "953 Highland Avenue",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP22",
            "rin": "JP1700000213"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP87"
              },
              {
                "remarks": "veniam",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP23"
              }
            ],
            "remarks": "",
            "address": "721 Kane Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "PP1700000900"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP95"
          }
        ],
        "remarks": "Drug Activity",
        "address": "680 Dunham Place",
        "priority": 4,
        "callType": 859,
        "serviceType": "cc",
        "id": "PP94",
        "rin": "QR1700000438"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP32"
          },
          {
            "remarks": "incididunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR63"
          },
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP52"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "349 Leonard Street",
        "priority": 4,
        "callType": 902,
        "serviceType": "cc",
        "id": "JP49",
        "rin": "PP1700000636"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "do",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR85"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "993 Beaver Street",
        "priority": 8,
        "callType": 697,
        "serviceType": "cl",
        "id": "QR98",
        "rin": "QR1700000849"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              }
            ],
            "remarks": "",
            "address": "989 Conway Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR28",
            "rin": "QR1700000954"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR38"
          },
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP41"
          },
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP51"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "615 Mill Street",
        "priority": 3,
        "callType": 205,
        "serviceType": "cc",
        "id": "QR53",
        "rin": "JP1700000854"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP15"
              },
              {
                "remarks": "reprehenderit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP69"
              }
            ],
            "remarks": "",
            "address": "379 Sutton Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP51",
            "rin": "JP1700000728"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP51"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "335 Gold Street",
        "priority": 7,
        "callType": 520,
        "serviceType": "cc",
        "id": "QR95",
        "rin": "PP1700000281"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR35"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "146 Keap Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP85",
            "rin": "PP1700000453"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP28"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR85"
              }
            ],
            "remarks": "Trespassing",
            "address": "490 Irving Place",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP30",
            "rin": "PP1700000117"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP13"
              },
              {
                "remarks": "ad",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "299 Ocean Parkway",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP32",
            "rin": "QR1700000329"
          }
        ],
        "callUnits": [
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR18"
          },
          {
            "remarks": "minim",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP81"
          },
          {
            "remarks": "aliqua",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR65"
          }
        ],
        "remarks": "accident with injuries",
        "address": "976 Otsego Street",
        "priority": 6,
        "callType": 482,
        "serviceType": "cc",
        "id": "JP93",
        "rin": "QR1700000279"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR74"
              },
              {
                "remarks": "Lorem",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP47"
              },
              {
                "remarks": "fugiat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "209 Turnbull Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP16",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR16"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "959 Macon Street",
        "priority": 9,
        "callType": 336,
        "serviceType": "cc",
        "id": "JP40",
        "rin": "QR1700000809"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR73"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "808 Bogart Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP77",
            "rin": "PP1700000577"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "323 Osborn Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP20",
            "rin": "JP1700000366"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP12"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR76"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "432 Madison Street",
        "priority": 5,
        "callType": 500,
        "serviceType": "cl",
        "id": "PP27",
        "rin": "QR1700000655"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "anim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP37"
              },
              {
                "remarks": "Lorem",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP62"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "185 Lawn Court",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "QR1700000333"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP82"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "920 Billings Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR66",
            "rin": "JP1700000115"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "268 Aberdeen Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "JP1700000667"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP11"
          },
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP10"
          }
        ],
        "remarks": "Drug Activity",
        "address": "342 Coleman Street",
        "priority": 6,
        "callType": 142,
        "serviceType": "cc",
        "id": "QR23",
        "rin": "PP1700000829"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP23"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP69"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "710 Navy Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP53",
            "rin": "JP1700000655"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP30"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "909 Riverdale Avenue",
        "priority": 3,
        "callType": 782,
        "serviceType": "cc",
        "id": "JP36",
        "rin": "QR1700000168"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "778 Applegate Court",
        "priority": 4,
        "callType": 993,
        "serviceType": "cc",
        "id": "QR24",
        "rin": "QR1700000499"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP70"
              }
            ],
            "remarks": "",
            "address": "912 Doone Court",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP33",
            "rin": "QR1700000578"
          },
          {
            "callUnits": [
              {
                "remarks": "incididunt",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR67"
              }
            ],
            "remarks": "Trespassing",
            "address": "135 Main Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP92",
            "rin": "JP1700000263"
          }
        ],
        "callUnits": [
          {
            "remarks": "cillum",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP66"
          }
        ],
        "remarks": "Drug Activity",
        "address": "297 Jamison Lane",
        "priority": 5,
        "callType": 661,
        "serviceType": "cl",
        "id": "QR20",
        "rin": "QR1700000277"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP93"
              }
            ],
            "remarks": "",
            "address": "264 Hart Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP76",
            "rin": "QR1700000407"
          },
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR11"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP56"
              }
            ],
            "remarks": "",
            "address": "867 Bristol Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR23",
            "rin": "JP1700000339"
          }
        ],
        "callUnits": [
          {
            "remarks": "incididunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "878 Mill Lane",
        "priority": 4,
        "callType": 322,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000375"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR49"
              },
              {
                "remarks": "eu",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "",
            "address": "969 Noble Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP29",
            "rin": "QR1700000438"
          }
        ],
        "callUnits": [
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP54"
          },
          {
            "remarks": "mollit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP73"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "107 Alice Court",
        "priority": 5,
        "callType": 341,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "JP1700000950"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR23"
              }
            ],
            "remarks": "Drug Activity",
            "address": "391 Newton Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR86",
            "rin": "QR1700000862"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP64"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR61"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "432 Autumn Avenue",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP48",
            "rin": "QR1700000950"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP43"
          },
          {
            "remarks": "ad",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "553 Melba Court",
        "priority": 9,
        "callType": 566,
        "serviceType": "cl",
        "id": "PP83",
        "rin": "PP1700000370"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP15"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR21"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "588 Dunne Place",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP70",
            "rin": "PP1700000355"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP72"
          },
          {
            "remarks": "velit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP18"
          }
        ],
        "remarks": "accident with injuries",
        "address": "180 Cleveland Street",
        "priority": 5,
        "callType": 696,
        "serviceType": "cl",
        "id": "QR57",
        "rin": "QR1700000807"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "proident",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP16"
          },
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP77"
          },
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "595 Atlantic Avenue",
        "priority": 4,
        "callType": 461,
        "serviceType": "cc",
        "id": "QR51",
        "rin": "JP1700000857"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR96"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP38"
              }
            ],
            "remarks": "",
            "address": "368 Heyward Street",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP20",
            "rin": "QR1700000218"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR49"
              }
            ],
            "remarks": "Drug Activity",
            "address": "861 Hemlock Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP81",
            "rin": "JP1700000335"
          }
        ],
        "callUnits": [
          {
            "remarks": "do",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP70"
          },
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP28"
          },
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR77"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "596 Franklin Street",
        "priority": 9,
        "callType": 113,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000837"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP87"
              },
              {
                "remarks": "minim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP51"
              }
            ],
            "remarks": "",
            "address": "833 Grand Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP11",
            "rin": "JP1700000756"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP72"
              }
            ],
            "remarks": "Drug Activity",
            "address": "563 Cheever Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP46",
            "rin": "JP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP52"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR74"
              },
              {
                "remarks": "deserunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR80"
              }
            ],
            "remarks": "",
            "address": "485 Harbor Lane",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP67",
            "rin": "PP1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          },
          {
            "remarks": "commodo",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "545 Poplar Avenue",
        "priority": 7,
        "callType": 270,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000196"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP72"
              },
              {
                "remarks": "excepteur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR43"
              },
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR65"
              }
            ],
            "remarks": "accident with injuries",
            "address": "605 Irving Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP98",
            "rin": "JP1700000598"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR76"
              },
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP10"
              }
            ],
            "remarks": "accident with injuries",
            "address": "710 High Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR77",
            "rin": "JP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR26"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP71"
              }
            ],
            "remarks": "",
            "address": "594 Remsen Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "PP1700000160"
          }
        ],
        "callUnits": [
          {
            "remarks": "non",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP82"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "380 Hunts Lane",
        "priority": 2,
        "callType": 185,
        "serviceType": "cl",
        "id": "QR62",
        "rin": "JP1700000310"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR14"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP70"
              },
              {
                "remarks": "non",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP84"
              }
            ],
            "remarks": "",
            "address": "787 Eagle Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR88",
            "rin": "JP1700000441"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR35"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "273 Lamont Court",
        "priority": 1,
        "callType": 625,
        "serviceType": "cc",
        "id": "QR76",
        "rin": "JP1700000776"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR46"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "424 Boerum Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "PP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR34"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP34"
              },
              {
                "remarks": "amet",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "accident with injuries",
            "address": "665 Arion Place",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP31",
            "rin": "PP1700000576"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP47"
              },
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR66"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "676 Willow Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP87",
            "rin": "PP1700000785"
          }
        ],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP32"
          },
          {
            "remarks": "laborum",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP79"
          },
          {
            "remarks": "consequat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "632 Visitation Place",
        "priority": 1,
        "callType": 231,
        "serviceType": "cc",
        "id": "PP98",
        "rin": "PP1700000613"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP35"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP93"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP78"
              }
            ],
            "remarks": "",
            "address": "749 Sandford Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP61",
            "rin": "PP1700000363"
          }
        ],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "320 Kensington Walk",
        "priority": 5,
        "callType": 344,
        "serviceType": "cc",
        "id": "QR71",
        "rin": "PP1700000617"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR84"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP94"
              },
              {
                "remarks": "magna",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR66"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "891 Elizabeth Place",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR90",
            "rin": "QR1700000665"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP97"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "454 Clarkson Avenue",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP37",
            "rin": "QR1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "consectetur",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP24"
          },
          {
            "remarks": "sit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP94"
          },
          {
            "remarks": "elit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR33"
          }
        ],
        "remarks": "Trespassing",
        "address": "529 Cumberland Street",
        "priority": 3,
        "callType": 901,
        "serviceType": "cc",
        "id": "QR39",
        "rin": "JP1700000309"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP64"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP65"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "492 Freeman Street",
        "priority": 1,
        "callType": 486,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "PP1700000464"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "Trespassing",
            "address": "360 Brigham Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR37",
            "rin": "QR1700000764"
          }
        ],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR76"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "258 Pulaski Street",
        "priority": 8,
        "callType": 469,
        "serviceType": "cl",
        "id": "QR22",
        "rin": "QR1700000384"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP31"
              },
              {
                "remarks": "proident",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR33"
              }
            ],
            "remarks": "",
            "address": "896 Seaview Avenue",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR21",
            "rin": "PP1700000172"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR57"
              },
              {
                "remarks": "consequat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP87"
              },
              {
                "remarks": "in",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP13"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "571 Hyman Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "QR1700000839"
          },
          {
            "callUnits": [
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP63"
              }
            ],
            "remarks": "",
            "address": "987 Schenck Place",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP73",
            "rin": "JP1700000284"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR63"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "373 Madison Place",
        "priority": 1,
        "callType": 863,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "QR1700000213"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP74"
              },
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP51"
              }
            ],
            "remarks": "accident with injuries",
            "address": "938 Jewel Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "QR1700000990"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR77"
          },
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "850 Howard Avenue",
        "priority": 1,
        "callType": 478,
        "serviceType": "cl",
        "id": "PP81",
        "rin": "QR1700000996"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP38"
          },
          {
            "remarks": "reprehenderit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP63"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "376 Brightwater Court",
        "priority": 1,
        "callType": 138,
        "serviceType": "cc",
        "id": "JP58",
        "rin": "QR1700000666"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP41"
              }
            ],
            "remarks": "Trespassing",
            "address": "806 Garden Place",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP32",
            "rin": "QR1700000593"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "esse",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP33"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "469 Willoughby Avenue",
        "priority": 5,
        "callType": 122,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "PP1700000430"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "",
            "address": "446 Shale Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "JP1700000517"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP99"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR26"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "451 Bedell Lane",
        "priority": 3,
        "callType": 892,
        "serviceType": "cl",
        "id": "QR96",
        "rin": "PP1700000320"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "246 Mermaid Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "JP1700000171"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "982 Guider Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP50",
            "rin": "QR1700000656"
          }
        ],
        "callUnits": [
          {
            "remarks": "nostrud",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP88"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP40"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "325 Eldert Lane",
        "priority": 3,
        "callType": 597,
        "serviceType": "cl",
        "id": "QR61",
        "rin": "JP1700000429"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP65"
          },
          {
            "remarks": "proident",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR43"
          },
          {
            "remarks": "excepteur",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP30"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "442 Hubbard Place",
        "priority": 4,
        "callType": 942,
        "serviceType": "cc",
        "id": "PP68",
        "rin": "PP1700000669"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR13"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "156 Wolf Place",
        "priority": 1,
        "callType": 857,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000685"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "elit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP12"
          },
          {
            "remarks": "et",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP80"
          },
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR97"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "727 Colin Place",
        "priority": 3,
        "callType": 496,
        "serviceType": "cc",
        "id": "PP28",
        "rin": "JP1700000177"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR97"
          },
          {
            "remarks": "esse",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP19"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "323 Lake Avenue",
        "priority": 1,
        "callType": 970,
        "serviceType": "cl",
        "id": "QR58",
        "rin": "QR1700000954"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR86"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "105 Fulton Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP15",
            "rin": "JP1700000644"
          },
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP50"
              }
            ],
            "remarks": "",
            "address": "451 Brown Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP80",
            "rin": "QR1700000544"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR74"
          },
          {
            "remarks": "in",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP21"
          }
        ],
        "remarks": "accident with injuries",
        "address": "375 Coffey Street",
        "priority": 8,
        "callType": 791,
        "serviceType": "cl",
        "id": "PP96",
        "rin": "JP1700000798"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP53"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP20"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "319 Miller Place",
        "priority": 2,
        "callType": 657,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000341"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR10"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "911 Fuller Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP55",
            "rin": "JP1700000196"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP61"
              },
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "133 Judge Street",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP62",
            "rin": "JP1700000694"
          }
        ],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP62"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "663 Willoughby Street",
        "priority": 2,
        "callType": 666,
        "serviceType": "cl",
        "id": "JP18",
        "rin": "JP1700000264"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP71"
              },
              {
                "remarks": "commodo",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP69"
              }
            ],
            "remarks": "accident with injuries",
            "address": "309 Winthrop Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP87",
            "rin": "JP1700000660"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP32"
              },
              {
                "remarks": "anim",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP72"
              },
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "376 Louis Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP71",
            "rin": "JP1700000692"
          },
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP48"
              }
            ],
            "remarks": "",
            "address": "590 Dover Street",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR96",
            "rin": "PP1700000244"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR58"
          },
          {
            "remarks": "veniam",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          },
          {
            "remarks": "id",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "507 Jerome Avenue",
        "priority": 4,
        "callType": 850,
        "serviceType": "cc",
        "id": "PP86",
        "rin": "PP1700000780"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR87"
          },
          {
            "remarks": "dolor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP27"
          },
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP58"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "666 Whitney Avenue",
        "priority": 7,
        "callType": 912,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "JP1700000705"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ex",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR14"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "353 Lott Street",
        "priority": 9,
        "callType": 327,
        "serviceType": "cl",
        "id": "QR84",
        "rin": "QR1700000654"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP86"
              },
              {
                "remarks": "minim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP92"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR11"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "925 Prospect Place",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "JP1700000532"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP51"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP91"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "368 Atkins Avenue",
        "priority": 5,
        "callType": 372,
        "serviceType": "cl",
        "id": "QR45",
        "rin": "PP1700000941"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP65"
              },
              {
                "remarks": "pariatur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP16"
              }
            ],
            "remarks": "",
            "address": "777 Friel Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP13",
            "rin": "QR1700000874"
          },
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP79"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP32"
              }
            ],
            "remarks": "",
            "address": "392 Hull Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR87",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR97"
              },
              {
                "remarks": "est",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP20"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "110 Hanover Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "PP1700000524"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP41"
          },
          {
            "remarks": "adipisicing",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Trespassing",
        "address": "945 Richardson Street",
        "priority": 7,
        "callType": 801,
        "serviceType": "cc",
        "id": "PP90",
        "rin": "QR1700000688"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP82"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "nulla",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP83"
          }
        ],
        "remarks": "Public Intoxication",
        "address": "210 Rose Street",
        "priority": 1,
        "callType": 480,
        "serviceType": "cl",
        "id": "PP97",
        "rin": "JP1700000846"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR29"
              }
            ],
            "remarks": "",
            "address": "187 Nixon Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP43",
            "rin": "QR1700000262"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP39"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "257 Court Square",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR69",
            "rin": "PP1700000457"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR83"
              },
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR45"
              }
            ],
            "remarks": "accident with injuries",
            "address": "363 Harwood Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR22",
            "rin": "PP1700000569"
          }
        ],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP39"
          },
          {
            "remarks": "officia",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "160 Norman Avenue",
        "priority": 8,
        "callType": 876,
        "serviceType": "cl",
        "id": "PP25",
        "rin": "JP1700000198"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP95"
              },
              {
                "remarks": "tempor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR50"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP49"
              }
            ],
            "remarks": "",
            "address": "963 Elm Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP12",
            "rin": "JP1700000531"
          },
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR51"
              },
              {
                "remarks": "do",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR51"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "492 Beaumont Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "JP1700000452"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR76"
              },
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP68"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "480 Union Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP10",
            "rin": "QR1700000638"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP97"
          },
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP66"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "618 Emerald Street",
        "priority": 9,
        "callType": 760,
        "serviceType": "cc",
        "id": "JP72",
        "rin": "QR1700000653"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP33"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP89"
              },
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP77"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "445 Livingston Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP59",
            "rin": "QR1700000525"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR98"
              }
            ],
            "remarks": "Trespassing",
            "address": "395 Highland Boulevard",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR54",
            "rin": "PP1700000130"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR14"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP55"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "900 Schenck Avenue",
        "priority": 5,
        "callType": 690,
        "serviceType": "cl",
        "id": "JP46",
        "rin": "PP1700000538"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP22"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "274 Rochester Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP29",
            "rin": "JP1700000628"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP31"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "811 Wilson Avenue",
        "priority": 7,
        "callType": 600,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "QR1700000399"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP44"
          },
          {
            "remarks": "occaecat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR53"
          },
          {
            "remarks": "consequat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP91"
          }
        ],
        "remarks": "accident with injuries",
        "address": "873 Oriental Court",
        "priority": 5,
        "callType": 721,
        "serviceType": "cc",
        "id": "JP99",
        "rin": "PP1700000295"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "deserunt",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP13"
              }
            ],
            "remarks": "",
            "address": "247 Centre Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR68",
            "rin": "PP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP78"
              }
            ],
            "remarks": "",
            "address": "512 Auburn Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "JP1700000923"
          }
        ],
        "callUnits": [
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP52"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "626 Pilling Street",
        "priority": 9,
        "callType": 970,
        "serviceType": "cl",
        "id": "JP38",
        "rin": "PP1700000712"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP61"
              },
              {
                "remarks": "aliqua",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP31"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "943 Aitken Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR79",
            "rin": "QR1700000674"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR20"
              }
            ],
            "remarks": "",
            "address": "650 Putnam Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000598"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR97"
          },
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP81"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "176 Macdougal Street",
        "priority": 7,
        "callType": 569,
        "serviceType": "cl",
        "id": "PP52",
        "rin": "QR1700000229"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "690 Arlington Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR73",
            "rin": "PP1700000760"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP66"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "nulla",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP29"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "938 McKibben Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP35",
            "rin": "JP1700000310"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          },
          {
            "remarks": "voluptate",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR25"
          },
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP59"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "982 Hall Street",
        "priority": 7,
        "callType": 614,
        "serviceType": "cc",
        "id": "QR90",
        "rin": "JP1700000565"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "197 Hanson Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP79",
            "rin": "QR1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP22"
          },
          {
            "remarks": "quis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR54"
          }
        ],
        "remarks": "accident with injuries",
        "address": "914 Glendale Court",
        "priority": 2,
        "callType": 259,
        "serviceType": "cl",
        "id": "QR29",
        "rin": "JP1700000874"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP90"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR70"
              },
              {
                "remarks": "reprehenderit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP70"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "206 Hawthorne Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000275"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP80"
              }
            ],
            "remarks": "Trespassing",
            "address": "616 Prescott Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP50",
            "rin": "PP1700000177"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP31"
          },
          {
            "remarks": "culpa",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "163 Conduit Boulevard",
        "priority": 9,
        "callType": 406,
        "serviceType": "cl",
        "id": "QR67",
        "rin": "PP1700000190"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP46"
              },
              {
                "remarks": "excepteur",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR47"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "423 Bayard Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "QR1700000730"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP51"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR47"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "891 Montauk Avenue",
        "priority": 7,
        "callType": 751,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000577"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR61"
          },
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          },
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          }
        ],
        "remarks": "Drug Activity",
        "address": "213 Sullivan Place",
        "priority": 8,
        "callType": 256,
        "serviceType": "cl",
        "id": "JP79",
        "rin": "PP1700000813"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR45"
              },
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR82"
              }
            ],
            "remarks": "",
            "address": "567 McDonald Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP23",
            "rin": "QR1700000462"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP45"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              }
            ],
            "remarks": "",
            "address": "802 Estate Road",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP89",
            "rin": "PP1700000367"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "412 Hart Place",
        "priority": 2,
        "callType": 846,
        "serviceType": "cc",
        "id": "JP89",
        "rin": "PP1700000391"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP67"
          },
          {
            "remarks": "voluptate",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP67"
          },
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP19"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "978 Seabring Street",
        "priority": 9,
        "callType": 632,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000988"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "est",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "pariatur",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR98"
          },
          {
            "remarks": "culpa",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR22"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "583 Newkirk Avenue",
        "priority": 8,
        "callType": 928,
        "serviceType": "cl",
        "id": "QR75",
        "rin": "QR1700000652"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR97"
              }
            ],
            "remarks": "accident with injuries",
            "address": "226 Schenectady Avenue",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP75",
            "rin": "JP1700000923"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP30"
              },
              {
                "remarks": "minim",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP40"
              },
              {
                "remarks": "consectetur",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP58"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "137 Hudson Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP45",
            "rin": "PP1700000932"
          }
        ],
        "callUnits": [
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR71"
          },
          {
            "remarks": "id",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP34"
          },
          {
            "remarks": "minim",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "703 Bradford Street",
        "priority": 8,
        "callType": 309,
        "serviceType": "cl",
        "id": "QR80",
        "rin": "JP1700000839"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP70"
              }
            ],
            "remarks": "Drug Activity",
            "address": "206 Canda Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000948"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "823 Wortman Avenue",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR50"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP10"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "948 Lexington Avenue",
        "priority": 9,
        "callType": 561,
        "serviceType": "cc",
        "id": "PP53",
        "rin": "PP1700000135"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR72"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "329 Laurel Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "PP1700000822"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP93"
              }
            ],
            "remarks": "",
            "address": "901 Grattan Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "JP1700000894"
          },
          {
            "callUnits": [
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP66"
              }
            ],
            "remarks": "",
            "address": "733 Durland Place",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP97",
            "rin": "PP1700000357"
          }
        ],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "689 Pershing Loop",
        "priority": 8,
        "callType": 813,
        "serviceType": "cc",
        "id": "PP64",
        "rin": "PP1700000639"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP55"
              }
            ],
            "remarks": "",
            "address": "265 Kensington Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "PP1700000892"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP23"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "615 Georgia Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR29",
            "rin": "JP1700000421"
          },
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR70"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "300 Gunnison Court",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR84",
            "rin": "JP1700000624"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP57"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "749 Melrose Street",
        "priority": 4,
        "callType": 885,
        "serviceType": "cc",
        "id": "JP14",
        "rin": "JP1700000163"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "640 Vermont Street",
        "priority": 8,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP56",
        "rin": "PP1700000911"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP52"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR39"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR42"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "482 Ide Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR89",
            "rin": "JP1700000539"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP62"
              },
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR60"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "709 Strauss Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP79",
            "rin": "JP1700000709"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP46"
              },
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "408 Fiske Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR18",
            "rin": "QR1700000534"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR12"
          },
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "145 Bank Street",
        "priority": 3,
        "callType": 974,
        "serviceType": "cc",
        "id": "PP71",
        "rin": "JP1700000140"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP43"
          }
        ],
        "remarks": "Trespassing",
        "address": "863 Royce Street",
        "priority": 6,
        "callType": 755,
        "serviceType": "cl",
        "id": "QR83",
        "rin": "JP1700000224"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP87"
              },
              {
                "remarks": "aliqua",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR42"
              },
              {
                "remarks": "elit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP79"
              }
            ],
            "remarks": "",
            "address": "413 Suydam Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP11",
            "rin": "QR1700000766"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP12"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR86"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "398 Brooklyn Road",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP49",
            "rin": "JP1700000626"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP75"
          }
        ],
        "remarks": "Drug Activity",
        "address": "206 Nautilus Avenue",
        "priority": 1,
        "callType": 496,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "JP1700000629"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR61"
              },
              {
                "remarks": "cillum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP59"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "223 Olive Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR47",
            "rin": "JP1700000834"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP78"
              },
              {
                "remarks": "excepteur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "277 Commerce Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP27",
            "rin": "PP1700000157"
          },
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP38"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR65"
              },
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP30"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "894 Wyona Street",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR24",
            "rin": "QR1700000872"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP32"
          }
        ],
        "remarks": "Trespassing",
        "address": "973 Merit Court",
        "priority": 1,
        "callType": 209,
        "serviceType": "cc",
        "id": "JP19",
        "rin": "JP1700000104"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP19"
          },
          {
            "remarks": "non",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "415 Marconi Place",
        "priority": 9,
        "callType": 817,
        "serviceType": "cc",
        "id": "QR47",
        "rin": "QR1700000377"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR62"
              }
            ],
            "remarks": "",
            "address": "869 Hegeman Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP37",
            "rin": "JP1700000998"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR92"
              },
              {
                "remarks": "consequat",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "",
            "address": "314 Whitty Lane",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "QR1700000702"
          },
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP44"
              }
            ],
            "remarks": "",
            "address": "105 Matthews Court",
            "priority": 2,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "PP1700000332"
          }
        ],
        "callUnits": [
          {
            "remarks": "occaecat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR42"
          }
        ],
        "remarks": "accident with injuries",
        "address": "642 Duryea Place",
        "priority": 7,
        "callType": 938,
        "serviceType": "cc",
        "id": "JP74",
        "rin": "PP1700000431"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP41"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR48"
              },
              {
                "remarks": "anim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "389 Radde Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP18"
              },
              {
                "remarks": "aliqua",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "315 Colonial Court",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP63",
            "rin": "JP1700000575"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP97"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR53"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "508 Ross Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP63",
            "rin": "JP1700000931"
          }
        ],
        "callUnits": [
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP85"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "309 Kingsway Place",
        "priority": 7,
        "callType": 513,
        "serviceType": "cl",
        "id": "JP81",
        "rin": "QR1700000706"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP62"
          },
          {
            "remarks": "amet",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "voluptate",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR29"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "971 Varick Street",
        "priority": 8,
        "callType": 249,
        "serviceType": "cl",
        "id": "QR49",
        "rin": "QR1700000130"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR20"
              },
              {
                "remarks": "aliquip",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR65"
              },
              {
                "remarks": "laboris",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR67"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "507 Fleet Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP14",
            "rin": "PP1700000911"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP40"
          },
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR62"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "996 Chestnut Avenue",
        "priority": 5,
        "callType": 308,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000272"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "590 Erskine Loop",
        "priority": 3,
        "callType": 937,
        "serviceType": "cl",
        "id": "QR76",
        "rin": "PP1700000840"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP43"
          },
          {
            "remarks": "fugiat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP99"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "404 Greene Avenue",
        "priority": 9,
        "callType": 920,
        "serviceType": "cl",
        "id": "QR43",
        "rin": "JP1700000240"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP37"
              }
            ],
            "remarks": "",
            "address": "911 Williams Court",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP97",
            "rin": "PP1700000735"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR88"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR44"
          }
        ],
        "remarks": "Trespassing",
        "address": "377 Aster Court",
        "priority": 7,
        "callType": 341,
        "serviceType": "cc",
        "id": "PP57",
        "rin": "QR1700000192"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR57"
              }
            ],
            "remarks": "Trespassing",
            "address": "446 Huron Street",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR30",
            "rin": "QR1700000633"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP75"
          },
          {
            "remarks": "aute",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP16"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "647 Lake Place",
        "priority": 1,
        "callType": 294,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000561"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "462 Grove Place",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP74",
            "rin": "QR1700000726"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP53"
              },
              {
                "remarks": "consectetur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP14"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "279 Garnet Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR59",
            "rin": "PP1700000200"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR77"
              },
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP27"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "376 Hopkins Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "PP1700000318"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP15"
          },
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "767 Beadel Street",
        "priority": 7,
        "callType": 649,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000632"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "labore",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP95"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "",
            "address": "716 Roosevelt Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP84",
            "rin": "QR1700000508"
          },
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR81"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR26"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "187 Powell Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP52",
            "rin": "PP1700000581"
          },
          {
            "callUnits": [
              {
                "remarks": "veniam",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP98"
              },
              {
                "remarks": "labore",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP54"
              }
            ],
            "remarks": "Drug Activity",
            "address": "555 Aurelia Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR92",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP16"
          },
          {
            "remarks": "ipsum",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR47"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "297 Voorhies Avenue",
        "priority": 2,
        "callType": 849,
        "serviceType": "cc",
        "id": "QR80",
        "rin": "PP1700000120"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP44"
              },
              {
                "remarks": "ipsum",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP94"
              },
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "490 Pineapple Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR92",
            "rin": "PP1700000493"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "sit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP94"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR23"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "551 Carlton Avenue",
        "priority": 9,
        "callType": 703,
        "serviceType": "cc",
        "id": "PP14",
        "rin": "QR1700000718"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP45"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR21"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP96"
              }
            ],
            "remarks": "accident with injuries",
            "address": "740 Utica Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP30",
            "rin": "PP1700000981"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP11"
              },
              {
                "remarks": "aliquip",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Drug Activity",
            "address": "855 Ralph Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR18",
            "rin": "JP1700000719"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP13"
          },
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP53"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP62"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "847 Gerritsen Avenue",
        "priority": 8,
        "callType": 772,
        "serviceType": "cc",
        "id": "QR52",
        "rin": "PP1700000385"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              },
              {
                "remarks": "qui",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP55"
              },
              {
                "remarks": "laboris",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR84"
              }
            ],
            "remarks": "",
            "address": "970 Decatur Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR53",
            "rin": "JP1700000971"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP24"
              }
            ],
            "remarks": "",
            "address": "110 Berriman Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP43",
            "rin": "JP1700000890"
          },
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR37"
              },
              {
                "remarks": "quis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP22"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR93"
              }
            ],
            "remarks": "",
            "address": "665 Cypress Court",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP45",
            "rin": "QR1700000737"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP39"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "magna",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP75"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "487 Hoyts Lane",
        "priority": 2,
        "callType": 416,
        "serviceType": "cl",
        "id": "QR85",
        "rin": "QR1700000978"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "559 Blake Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP27",
            "rin": "QR1700000220"
          }
        ],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR24"
          },
          {
            "remarks": "aliquip",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR68"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "695 Bergen Street",
        "priority": 1,
        "callType": 960,
        "serviceType": "cc",
        "id": "QR70",
        "rin": "QR1700000600"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP49"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "447 Alton Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP31",
            "rin": "QR1700000741"
          }
        ],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP53"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "600 Midwood Street",
        "priority": 1,
        "callType": 320,
        "serviceType": "cc",
        "id": "JP55",
        "rin": "QR1700000681"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR90"
          },
          {
            "remarks": "dolore",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP98"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "676 Exeter Street",
        "priority": 7,
        "callType": 906,
        "serviceType": "cc",
        "id": "PP50",
        "rin": "QR1700000924"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR34"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "994 Williams Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP83",
            "rin": "JP1700000823"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "459 Llama Court",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR63",
            "rin": "JP1700000721"
          },
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "veniam",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP99"
              }
            ],
            "remarks": "Trespassing",
            "address": "917 Bancroft Place",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP69",
            "rin": "PP1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP10"
          },
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP82"
          },
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Drug Activity",
        "address": "509 Hicks Street",
        "priority": 9,
        "callType": 761,
        "serviceType": "cl",
        "id": "JP39",
        "rin": "QR1700000876"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP43"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP15"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "561 Lefferts Avenue",
        "priority": 4,
        "callType": 886,
        "serviceType": "cl",
        "id": "QR12",
        "rin": "JP1700000952"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR60"
              },
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP67"
              }
            ],
            "remarks": "",
            "address": "661 Stryker Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "PP1700000579"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR70"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP81"
              },
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP92"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "456 Channel Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "PP1700000955"
          }
        ],
        "callUnits": [
          {
            "remarks": "aute",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP32"
          },
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "786 Nolans Lane",
        "priority": 9,
        "callType": 286,
        "serviceType": "cc",
        "id": "JP88",
        "rin": "QR1700000897"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ut",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR73"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP87"
          },
          {
            "remarks": "aliquip",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP94"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "477 Seton Place",
        "priority": 1,
        "callType": 871,
        "serviceType": "cl",
        "id": "QR28",
        "rin": "JP1700000241"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP92"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "983 Taylor Street",
        "priority": 9,
        "callType": 539,
        "serviceType": "cc",
        "id": "QR68",
        "rin": "PP1700000361"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR98"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP50"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR60"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "904 Meserole Avenue",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR81",
            "rin": "QR1700000819"
          },
          {
            "callUnits": [
              {
                "remarks": "minim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR75"
              }
            ],
            "remarks": "",
            "address": "116 Minna Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR66",
            "rin": "JP1700000445"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP71"
              },
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR16"
              }
            ],
            "remarks": "",
            "address": "553 Kansas Place",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP94",
            "rin": "JP1700000152"
          }
        ],
        "callUnits": [
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP88"
          },
          {
            "remarks": "anim",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP36"
          }
        ],
        "remarks": "Trespassing",
        "address": "144 Cranberry Street",
        "priority": 9,
        "callType": 546,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000935"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "est",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP39"
              },
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP89"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "410 Fanchon Place",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP99",
            "rin": "PP1700000808"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR40"
          },
          {
            "remarks": "irure",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR85"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "468 Railroad Avenue",
        "priority": 6,
        "callType": 849,
        "serviceType": "cl",
        "id": "JP99",
        "rin": "PP1700000331"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "labore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP90"
              },
              {
                "remarks": "dolore",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP25"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "147 Cooper Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP40",
            "rin": "PP1700000111"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP59"
              },
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "185 Village Court",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP94",
            "rin": "PP1700000170"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR48"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR31"
              }
            ],
            "remarks": "Drug Activity",
            "address": "434 Graham Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP92",
            "rin": "PP1700000313"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          }
        ],
        "remarks": "accident with injuries",
        "address": "159 Oceanview Avenue",
        "priority": 7,
        "callType": 827,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "JP1700000755"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "326 Ashland Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000636"
          },
          {
            "callUnits": [
              {
                "remarks": "pariatur",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR82"
              }
            ],
            "remarks": "Trespassing",
            "address": "686 Havens Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP71",
            "rin": "JP1700000767"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR40"
              },
              {
                "remarks": "sint",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP47"
              }
            ],
            "remarks": "",
            "address": "950 Bedford Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP95",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP43"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "201 Madoc Avenue",
        "priority": 5,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000212"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP65"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR97"
              },
              {
                "remarks": "velit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "696 Sutter Avenue",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000926"
          },
          {
            "callUnits": [
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP56"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "accident with injuries",
            "address": "682 Fleet Walk",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP24",
            "rin": "PP1700000221"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP24"
              },
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "ad",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP98"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "752 Flatlands Avenue",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR83",
            "rin": "QR1700000844"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP14"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR92"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "616 Vanderveer Street",
        "priority": 6,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP10",
        "rin": "JP1700000474"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "excepteur",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP36"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "645 Frost Street",
        "priority": 9,
        "callType": 710,
        "serviceType": "cl",
        "id": "JP86",
        "rin": "QR1700000819"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP14"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "607 Gilmore Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP65",
            "rin": "JP1700000329"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR44"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP74"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR41"
              }
            ],
            "remarks": "",
            "address": "368 Danforth Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP19",
            "rin": "QR1700000634"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "196 Evans Street",
        "priority": 9,
        "callType": 607,
        "serviceType": "cl",
        "id": "JP28",
        "rin": "JP1700000173"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP86"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR26"
              },
              {
                "remarks": "irure",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "839 Tabor Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR76",
            "rin": "QR1700000285"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR36"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "862 Gotham Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP81",
            "rin": "PP1700000283"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "",
            "address": "344 Dank Court",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "QR1700000491"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP20"
          }
        ],
        "remarks": "accident with injuries",
        "address": "293 Claver Place",
        "priority": 5,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP77",
        "rin": "JP1700000513"
      }
    ]
  },
  listDataLong4: {
    "data": [
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP92"
              },
              {
                "remarks": "veniam",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP37"
              }
            ],
            "remarks": "",
            "address": "190 Neptune Avenue",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR39",
            "rin": "PP1700000949"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP66"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "415 Veranda Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR97",
            "rin": "QR1700000592"
          },
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP72"
              },
              {
                "remarks": "incididunt",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "628 Dean Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP65",
            "rin": "PP1700000250"
          }
        ],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP97"
          },
          {
            "remarks": "et",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP29"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR72"
          },
        ],
        "remarks": "truck collision with pedestrian",
        "address": "187 Essex Street",
        "priority": 1,
        "callType": 645,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000864"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR72"
              },
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP36"
              }
            ],
            "remarks": "Trespassing",
            "address": "473 Fountain Avenue",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP48",
            "rin": "QR1700000666"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP29"
              }
            ],
            "remarks": "",
            "address": "953 Highland Avenue",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP22",
            "rin": "JP1700000213"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP87"
              },
              {
                "remarks": "veniam",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP23"
              }
            ],
            "remarks": "",
            "address": "721 Kane Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "PP1700000900"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP95"
          }
        ],
        "remarks": "Drug Activity",
        "address": "680 Dunham Place",
        "priority": 4,
        "callType": 859,
        "serviceType": "cc",
        "id": "PP94",
        "rin": "QR1700000438"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP32"
          },
          {
            "remarks": "incididunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR63"
          },
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP52"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "349 Leonard Street",
        "priority": 4,
        "callType": 902,
        "serviceType": "cc",
        "id": "JP49",
        "rin": "PP1700000636"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "do",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR85"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "993 Beaver Street",
        "priority": 8,
        "callType": 697,
        "serviceType": "cl",
        "id": "QR98",
        "rin": "QR1700000849"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              }
            ],
            "remarks": "",
            "address": "989 Conway Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR28",
            "rin": "QR1700000954"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR38"
          },
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP41"
          },
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP51"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "615 Mill Street",
        "priority": 3,
        "callType": 205,
        "serviceType": "cc",
        "id": "QR53",
        "rin": "JP1700000854"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP15"
              },
              {
                "remarks": "reprehenderit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP69"
              }
            ],
            "remarks": "",
            "address": "379 Sutton Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP51",
            "rin": "JP1700000728"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP51"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "335 Gold Street",
        "priority": 7,
        "callType": 520,
        "serviceType": "cc",
        "id": "QR95",
        "rin": "PP1700000281"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR35"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "146 Keap Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP85",
            "rin": "PP1700000453"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP28"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR85"
              }
            ],
            "remarks": "Trespassing",
            "address": "490 Irving Place",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP30",
            "rin": "PP1700000117"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP13"
              },
              {
                "remarks": "ad",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "299 Ocean Parkway",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP32",
            "rin": "QR1700000329"
          }
        ],
        "callUnits": [
          {
            "remarks": "sit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR18"
          },
          {
            "remarks": "minim",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP81"
          },
          {
            "remarks": "aliqua",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR65"
          }
        ],
        "remarks": "accident with injuries",
        "address": "976 Otsego Street",
        "priority": 6,
        "callType": 482,
        "serviceType": "cc",
        "id": "JP93",
        "rin": "QR1700000279"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR74"
              },
              {
                "remarks": "Lorem",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP47"
              },
              {
                "remarks": "fugiat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "209 Turnbull Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP16",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "magna",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR16"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "959 Macon Street",
        "priority": 9,
        "callType": 336,
        "serviceType": "cc",
        "id": "JP40",
        "rin": "QR1700000809"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR73"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "808 Bogart Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP77",
            "rin": "PP1700000577"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "323 Osborn Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP20",
            "rin": "JP1700000366"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP12"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR76"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "432 Madison Street",
        "priority": 5,
        "callType": 500,
        "serviceType": "cl",
        "id": "PP27",
        "rin": "QR1700000655"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "anim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP37"
              },
              {
                "remarks": "Lorem",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP62"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "185 Lawn Court",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "QR1700000333"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP82"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "920 Billings Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR66",
            "rin": "JP1700000115"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "268 Aberdeen Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "JP1700000667"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP11"
          },
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP10"
          }
        ],
        "remarks": "Drug Activity",
        "address": "342 Coleman Street",
        "priority": 6,
        "callType": 142,
        "serviceType": "cc",
        "id": "QR23",
        "rin": "PP1700000829"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP23"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP69"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "710 Navy Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP53",
            "rin": "JP1700000655"
          }
        ],
        "callUnits": [
          {
            "remarks": "est",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP30"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "909 Riverdale Avenue",
        "priority": 3,
        "callType": 782,
        "serviceType": "cc",
        "id": "JP36",
        "rin": "QR1700000168"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP98"
          },
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "778 Applegate Court",
        "priority": 4,
        "callType": 993,
        "serviceType": "cc",
        "id": "QR24",
        "rin": "QR1700000499"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP70"
              }
            ],
            "remarks": "",
            "address": "912 Doone Court",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP33",
            "rin": "QR1700000578"
          },
          {
            "callUnits": [
              {
                "remarks": "incididunt",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR67"
              }
            ],
            "remarks": "Trespassing",
            "address": "135 Main Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP92",
            "rin": "JP1700000263"
          }
        ],
        "callUnits": [
          {
            "remarks": "cillum",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP66"
          }
        ],
        "remarks": "Drug Activity",
        "address": "297 Jamison Lane",
        "priority": 5,
        "callType": 661,
        "serviceType": "cl",
        "id": "QR20",
        "rin": "QR1700000277"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP93"
              }
            ],
            "remarks": "",
            "address": "264 Hart Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP76",
            "rin": "QR1700000407"
          },
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR11"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP56"
              }
            ],
            "remarks": "",
            "address": "867 Bristol Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR23",
            "rin": "JP1700000339"
          }
        ],
        "callUnits": [
          {
            "remarks": "incididunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "878 Mill Lane",
        "priority": 4,
        "callType": 322,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000375"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR49"
              },
              {
                "remarks": "eu",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP33"
              }
            ],
            "remarks": "",
            "address": "969 Noble Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP29",
            "rin": "QR1700000438"
          }
        ],
        "callUnits": [
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP54"
          },
          {
            "remarks": "mollit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP73"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "107 Alice Court",
        "priority": 5,
        "callType": 341,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "JP1700000950"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR23"
              }
            ],
            "remarks": "Drug Activity",
            "address": "391 Newton Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR86",
            "rin": "QR1700000862"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP64"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR61"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "432 Autumn Avenue",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP48",
            "rin": "QR1700000950"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP43"
          },
          {
            "remarks": "ad",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP96"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "553 Melba Court",
        "priority": 9,
        "callType": 566,
        "serviceType": "cl",
        "id": "PP83",
        "rin": "PP1700000370"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP15"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR21"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "588 Dunne Place",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP70",
            "rin": "PP1700000355"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP72"
          },
          {
            "remarks": "velit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP18"
          }
        ],
        "remarks": "accident with injuries",
        "address": "180 Cleveland Street",
        "priority": 5,
        "callType": 696,
        "serviceType": "cl",
        "id": "QR57",
        "rin": "QR1700000807"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "proident",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP16"
          },
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP77"
          },
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP91"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "595 Atlantic Avenue",
        "priority": 4,
        "callType": 461,
        "serviceType": "cc",
        "id": "QR51",
        "rin": "JP1700000857"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR96"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP38"
              }
            ],
            "remarks": "",
            "address": "368 Heyward Street",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP20",
            "rin": "QR1700000218"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR49"
              }
            ],
            "remarks": "Drug Activity",
            "address": "861 Hemlock Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP81",
            "rin": "JP1700000335"
          }
        ],
        "callUnits": [
          {
            "remarks": "do",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP70"
          },
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP28"
          },
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR77"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "596 Franklin Street",
        "priority": 9,
        "callType": 113,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000837"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP87"
              },
              {
                "remarks": "minim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP51"
              }
            ],
            "remarks": "",
            "address": "833 Grand Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP11",
            "rin": "JP1700000756"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP72"
              }
            ],
            "remarks": "Drug Activity",
            "address": "563 Cheever Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP46",
            "rin": "JP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP52"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR74"
              },
              {
                "remarks": "deserunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR80"
              }
            ],
            "remarks": "",
            "address": "485 Harbor Lane",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP67",
            "rin": "PP1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          },
          {
            "remarks": "commodo",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "545 Poplar Avenue",
        "priority": 7,
        "callType": 270,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000196"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP72"
              },
              {
                "remarks": "excepteur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR43"
              },
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR65"
              }
            ],
            "remarks": "accident with injuries",
            "address": "605 Irving Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP98",
            "rin": "JP1700000598"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR76"
              },
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP10"
              }
            ],
            "remarks": "accident with injuries",
            "address": "710 High Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR77",
            "rin": "JP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR26"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP71"
              }
            ],
            "remarks": "",
            "address": "594 Remsen Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "PP1700000160"
          }
        ],
        "callUnits": [
          {
            "remarks": "non",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          },
          {
            "remarks": "ex",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP82"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "380 Hunts Lane",
        "priority": 2,
        "callType": 185,
        "serviceType": "cl",
        "id": "QR62",
        "rin": "JP1700000310"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR14"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP70"
              },
              {
                "remarks": "non",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP84"
              }
            ],
            "remarks": "",
            "address": "787 Eagle Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR88",
            "rin": "JP1700000441"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR35"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "273 Lamont Court",
        "priority": 1,
        "callType": 625,
        "serviceType": "cc",
        "id": "QR76",
        "rin": "JP1700000776"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR46"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "424 Boerum Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "PP1700000991"
          },
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR34"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP34"
              },
              {
                "remarks": "amet",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "accident with injuries",
            "address": "665 Arion Place",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP31",
            "rin": "PP1700000576"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP47"
              },
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR66"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "676 Willow Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP87",
            "rin": "PP1700000785"
          }
        ],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP32"
          },
          {
            "remarks": "laborum",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP79"
          },
          {
            "remarks": "consequat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "632 Visitation Place",
        "priority": 1,
        "callType": 231,
        "serviceType": "cc",
        "id": "PP98",
        "rin": "PP1700000613"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP35"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP93"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP78"
              }
            ],
            "remarks": "",
            "address": "749 Sandford Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP61",
            "rin": "PP1700000363"
          }
        ],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "320 Kensington Walk",
        "priority": 5,
        "callType": 344,
        "serviceType": "cc",
        "id": "QR71",
        "rin": "PP1700000617"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR84"
              },
              {
                "remarks": "ullamco",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP94"
              },
              {
                "remarks": "magna",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR66"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "891 Elizabeth Place",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR90",
            "rin": "QR1700000665"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP97"
              }
            ],
            "remarks": "Criminal Mischief Graffiti",
            "address": "454 Clarkson Avenue",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP37",
            "rin": "QR1700000484"
          }
        ],
        "callUnits": [
          {
            "remarks": "consectetur",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP24"
          },
          {
            "remarks": "sit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP94"
          },
          {
            "remarks": "elit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR33"
          }
        ],
        "remarks": "Trespassing",
        "address": "529 Cumberland Street",
        "priority": 3,
        "callType": 901,
        "serviceType": "cc",
        "id": "QR39",
        "rin": "JP1700000309"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP64"
          },
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP65"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "492 Freeman Street",
        "priority": 1,
        "callType": 486,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "PP1700000464"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "Trespassing",
            "address": "360 Brigham Street",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR37",
            "rin": "QR1700000764"
          }
        ],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR76"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "258 Pulaski Street",
        "priority": 8,
        "callType": 469,
        "serviceType": "cl",
        "id": "QR22",
        "rin": "QR1700000384"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP31"
              },
              {
                "remarks": "proident",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR33"
              }
            ],
            "remarks": "",
            "address": "896 Seaview Avenue",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR21",
            "rin": "PP1700000172"
          },
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR57"
              },
              {
                "remarks": "consequat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP87"
              },
              {
                "remarks": "in",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP13"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "571 Hyman Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR72",
            "rin": "QR1700000839"
          },
          {
            "callUnits": [
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP63"
              }
            ],
            "remarks": "",
            "address": "987 Schenck Place",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP73",
            "rin": "JP1700000284"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR63"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "373 Madison Place",
        "priority": 1,
        "callType": 863,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "QR1700000213"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP65"
              },
              {
                "remarks": "eiusmod",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP90"
              }
            ],
            "remarks": "",
            "address": "671 Pioneer Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP66",
            "rin": "QR1700000727"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP74"
              },
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP51"
              }
            ],
            "remarks": "accident with injuries",
            "address": "938 Jewel Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR16",
            "rin": "QR1700000990"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR77"
          },
          {
            "remarks": "commodo",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "850 Howard Avenue",
        "priority": 1,
        "callType": 478,
        "serviceType": "cl",
        "id": "PP81",
        "rin": "QR1700000996"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP38"
          },
          {
            "remarks": "reprehenderit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP63"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "376 Brightwater Court",
        "priority": 1,
        "callType": 138,
        "serviceType": "cc",
        "id": "JP58",
        "rin": "QR1700000666"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP41"
              }
            ],
            "remarks": "Trespassing",
            "address": "806 Garden Place",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP32",
            "rin": "QR1700000593"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "esse",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP33"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "469 Willoughby Avenue",
        "priority": 5,
        "callType": 122,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "PP1700000430"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "",
            "address": "446 Shale Street",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "JP1700000517"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP99"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "JP",
            "unitId": "QR26"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "451 Bedell Lane",
        "priority": 3,
        "callType": 892,
        "serviceType": "cl",
        "id": "QR96",
        "rin": "PP1700000320"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "246 Mermaid Avenue",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "JP1700000171"
          },
          {
            "callUnits": [
              {
                "remarks": "Lorem",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "982 Guider Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP50",
            "rin": "QR1700000656"
          }
        ],
        "callUnits": [
          {
            "remarks": "nostrud",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP88"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP40"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "325 Eldert Lane",
        "priority": 3,
        "callType": 597,
        "serviceType": "cl",
        "id": "QR61",
        "rin": "JP1700000429"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "commodo",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP65"
          },
          {
            "remarks": "proident",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR43"
          },
          {
            "remarks": "excepteur",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP30"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "442 Hubbard Place",
        "priority": 4,
        "callType": 942,
        "serviceType": "cc",
        "id": "PP68",
        "rin": "PP1700000669"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR13"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP77"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "156 Wolf Place",
        "priority": 1,
        "callType": 857,
        "serviceType": "cc",
        "id": "JP26",
        "rin": "PP1700000685"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "elit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP12"
          },
          {
            "remarks": "et",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP80"
          },
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR97"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "727 Colin Place",
        "priority": 3,
        "callType": 496,
        "serviceType": "cc",
        "id": "PP28",
        "rin": "JP1700000177"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR97"
          },
          {
            "remarks": "esse",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP19"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "323 Lake Avenue",
        "priority": 1,
        "callType": 970,
        "serviceType": "cl",
        "id": "QR58",
        "rin": "QR1700000954"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR86"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "105 Fulton Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP15",
            "rin": "JP1700000644"
          },
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP50"
              }
            ],
            "remarks": "",
            "address": "451 Brown Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP80",
            "rin": "QR1700000544"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR74"
          },
          {
            "remarks": "in",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP21"
          }
        ],
        "remarks": "accident with injuries",
        "address": "375 Coffey Street",
        "priority": 8,
        "callType": 791,
        "serviceType": "cl",
        "id": "PP96",
        "rin": "JP1700000798"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP53"
          },
          {
            "remarks": "qui",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP20"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "319 Miller Place",
        "priority": 2,
        "callType": 657,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000341"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR10"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "911 Fuller Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP55",
            "rin": "JP1700000196"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP61"
              },
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP44"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "133 Judge Street",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP62",
            "rin": "JP1700000694"
          }
        ],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP62"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "663 Willoughby Street",
        "priority": 2,
        "callType": 666,
        "serviceType": "cl",
        "id": "JP18",
        "rin": "JP1700000264"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP71"
              },
              {
                "remarks": "commodo",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP69"
              }
            ],
            "remarks": "accident with injuries",
            "address": "309 Winthrop Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP87",
            "rin": "JP1700000660"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP32"
              },
              {
                "remarks": "anim",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP72"
              },
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "376 Louis Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP71",
            "rin": "JP1700000692"
          },
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP48"
              }
            ],
            "remarks": "",
            "address": "590 Dover Street",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR96",
            "rin": "PP1700000244"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR58"
          },
          {
            "remarks": "veniam",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          },
          {
            "remarks": "id",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "507 Jerome Avenue",
        "priority": 4,
        "callType": 850,
        "serviceType": "cc",
        "id": "PP86",
        "rin": "PP1700000780"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR87"
          },
          {
            "remarks": "dolor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP27"
          },
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP58"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "666 Whitney Avenue",
        "priority": 7,
        "callType": 912,
        "serviceType": "cc",
        "id": "PP70",
        "rin": "JP1700000705"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ex",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR14"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "353 Lott Street",
        "priority": 9,
        "callType": 327,
        "serviceType": "cl",
        "id": "QR84",
        "rin": "QR1700000654"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "cupidatat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP86"
              },
              {
                "remarks": "minim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP92"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR11"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "925 Prospect Place",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "JP1700000532"
          }
        ],
        "callUnits": [
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP51"
          },
          {
            "remarks": "duis",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP91"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "368 Atkins Avenue",
        "priority": 5,
        "callType": 372,
        "serviceType": "cl",
        "id": "QR45",
        "rin": "PP1700000941"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP65"
              },
              {
                "remarks": "pariatur",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP13"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP16"
              }
            ],
            "remarks": "",
            "address": "777 Friel Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP13",
            "rin": "QR1700000874"
          },
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP79"
              },
              {
                "remarks": "officia",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP32"
              }
            ],
            "remarks": "",
            "address": "392 Hull Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR87",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR97"
              },
              {
                "remarks": "est",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP20"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "110 Hanover Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "PP1700000524"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP41"
          },
          {
            "remarks": "adipisicing",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Trespassing",
        "address": "945 Richardson Street",
        "priority": 7,
        "callType": 801,
        "serviceType": "cc",
        "id": "PP90",
        "rin": "QR1700000688"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP82"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "nulla",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP83"
          }
        ],
        "remarks": "Public Intoxication",
        "address": "210 Rose Street",
        "priority": 1,
        "callType": 480,
        "serviceType": "cl",
        "id": "PP97",
        "rin": "JP1700000846"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sunt",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR29"
              }
            ],
            "remarks": "",
            "address": "187 Nixon Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP43",
            "rin": "QR1700000262"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP39"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "257 Court Square",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR69",
            "rin": "PP1700000457"
          },
          {
            "callUnits": [
              {
                "remarks": "culpa",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR83"
              },
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR45"
              }
            ],
            "remarks": "accident with injuries",
            "address": "363 Harwood Place",
            "priority": 9,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR22",
            "rin": "PP1700000569"
          }
        ],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP39"
          },
          {
            "remarks": "officia",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP24"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "160 Norman Avenue",
        "priority": 8,
        "callType": 876,
        "serviceType": "cl",
        "id": "PP25",
        "rin": "JP1700000198"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP95"
              },
              {
                "remarks": "tempor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR50"
              },
              {
                "remarks": "velit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP49"
              }
            ],
            "remarks": "",
            "address": "963 Elm Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP12",
            "rin": "JP1700000531"
          },
          {
            "callUnits": [
              {
                "remarks": "esse",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR51"
              },
              {
                "remarks": "do",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR51"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "492 Beaumont Street",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "JP1700000452"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR76"
              },
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP68"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "480 Union Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP10",
            "rin": "QR1700000638"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP97"
          },
          {
            "remarks": "Lorem",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP66"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "618 Emerald Street",
        "priority": 9,
        "callType": 760,
        "serviceType": "cc",
        "id": "JP72",
        "rin": "QR1700000653"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP33"
              },
              {
                "remarks": "exercitation",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP89"
              },
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP77"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "445 Livingston Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP59",
            "rin": "QR1700000525"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR98"
              }
            ],
            "remarks": "Trespassing",
            "address": "395 Highland Boulevard",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR54",
            "rin": "PP1700000130"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR14"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP55"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "900 Schenck Avenue",
        "priority": 5,
        "callType": 690,
        "serviceType": "cl",
        "id": "JP46",
        "rin": "PP1700000538"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP22"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "274 Rochester Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP29",
            "rin": "JP1700000628"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "ER",
            "unitType": "JP",
            "unitId": "JP31"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "811 Wilson Avenue",
        "priority": 7,
        "callType": 600,
        "serviceType": "cc",
        "id": "JP37",
        "rin": "QR1700000399"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP44"
          },
          {
            "remarks": "occaecat",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR53"
          },
          {
            "remarks": "consequat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP91"
          }
        ],
        "remarks": "accident with injuries",
        "address": "873 Oriental Court",
        "priority": 5,
        "callType": 721,
        "serviceType": "cc",
        "id": "JP99",
        "rin": "PP1700000295"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "deserunt",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP13"
              }
            ],
            "remarks": "",
            "address": "247 Centre Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR68",
            "rin": "PP1700000364"
          },
          {
            "callUnits": [
              {
                "remarks": "adipisicing",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP78"
              }
            ],
            "remarks": "",
            "address": "512 Auburn Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP47",
            "rin": "JP1700000923"
          }
        ],
        "callUnits": [
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP52"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "626 Pilling Street",
        "priority": 9,
        "callType": 970,
        "serviceType": "cl",
        "id": "JP38",
        "rin": "PP1700000712"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP61"
              },
              {
                "remarks": "aliqua",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP31"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "943 Aitken Place",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR79",
            "rin": "QR1700000674"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR20"
              }
            ],
            "remarks": "",
            "address": "650 Putnam Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000598"
          }
        ],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR97"
          },
          {
            "remarks": "adipisicing",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP81"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "176 Macdougal Street",
        "priority": 7,
        "callType": 569,
        "serviceType": "cl",
        "id": "PP52",
        "rin": "QR1700000229"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "690 Arlington Place",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR73",
            "rin": "PP1700000760"
          },
          {
            "callUnits": [
              {
                "remarks": "duis",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP66"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR44"
              },
              {
                "remarks": "nulla",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP29"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "938 McKibben Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP35",
            "rin": "JP1700000310"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          },
          {
            "remarks": "voluptate",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR25"
          },
          {
            "remarks": "Lorem",
            "status": "JP",
            "unitType": "QR",
            "unitId": "PP59"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "982 Hall Street",
        "priority": 7,
        "callType": 614,
        "serviceType": "cc",
        "id": "QR90",
        "rin": "JP1700000565"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ut",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "197 Hanson Place",
            "priority": 3,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP79",
            "rin": "QR1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP22"
          },
          {
            "remarks": "quis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR54"
          }
        ],
        "remarks": "accident with injuries",
        "address": "914 Glendale Court",
        "priority": 2,
        "callType": 259,
        "serviceType": "cl",
        "id": "QR29",
        "rin": "JP1700000874"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP90"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR70"
              },
              {
                "remarks": "reprehenderit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP70"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "206 Hawthorne Street",
            "priority": 4,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR85",
            "rin": "QR1700000275"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP80"
              }
            ],
            "remarks": "Trespassing",
            "address": "616 Prescott Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP50",
            "rin": "PP1700000177"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP31"
          },
          {
            "remarks": "culpa",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR93"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "163 Conduit Boulevard",
        "priority": 9,
        "callType": 406,
        "serviceType": "cl",
        "id": "QR67",
        "rin": "PP1700000190"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ex",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP46"
              },
              {
                "remarks": "excepteur",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR47"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "423 Bayard Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP24",
            "rin": "QR1700000730"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP51"
          },
          {
            "remarks": "officia",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR47"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "891 Montauk Avenue",
        "priority": 7,
        "callType": 751,
        "serviceType": "cc",
        "id": "JP42",
        "rin": "QR1700000577"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR61"
          },
          {
            "remarks": "nulla",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP56"
          },
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR94"
          }
        ],
        "remarks": "Drug Activity",
        "address": "213 Sullivan Place",
        "priority": 8,
        "callType": 256,
        "serviceType": "cl",
        "id": "JP79",
        "rin": "PP1700000813"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR45"
              },
              {
                "remarks": "nisi",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR82"
              }
            ],
            "remarks": "",
            "address": "567 McDonald Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP23",
            "rin": "QR1700000462"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP45"
              },
              {
                "remarks": "dolor",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP30"
              }
            ],
            "remarks": "",
            "address": "802 Estate Road",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP89",
            "rin": "PP1700000367"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR88"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "412 Hart Place",
        "priority": 2,
        "callType": 846,
        "serviceType": "cc",
        "id": "JP89",
        "rin": "PP1700000391"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP67"
          },
          {
            "remarks": "voluptate",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP67"
          },
          {
            "remarks": "duis",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP19"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "978 Seabring Street",
        "priority": 9,
        "callType": 632,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000988"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "est",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP29"
          },
          {
            "remarks": "pariatur",
            "status": "JP",
            "unitType": "PP",
            "unitId": "QR98"
          },
          {
            "remarks": "culpa",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR22"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "583 Newkirk Avenue",
        "priority": 8,
        "callType": 928,
        "serviceType": "cl",
        "id": "QR75",
        "rin": "QR1700000652"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "exercitation",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR97"
              }
            ],
            "remarks": "accident with injuries",
            "address": "226 Schenectady Avenue",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP75",
            "rin": "JP1700000923"
          },
          {
            "callUnits": [
              {
                "remarks": "mollit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP30"
              },
              {
                "remarks": "minim",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP40"
              },
              {
                "remarks": "consectetur",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP58"
              }
            ],
            "remarks": "Blue Honda Civic collide with a bycicle",
            "address": "137 Hudson Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP45",
            "rin": "PP1700000932"
          }
        ],
        "callUnits": [
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "QR",
            "unitId": "QR71"
          },
          {
            "remarks": "id",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP34"
          },
          {
            "remarks": "minim",
            "status": "ER",
            "unitType": "JP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "703 Bradford Street",
        "priority": 8,
        "callType": 309,
        "serviceType": "cl",
        "id": "QR80",
        "rin": "JP1700000839"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP70"
              }
            ],
            "remarks": "Drug Activity",
            "address": "206 Canda Avenue",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000948"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP60"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "823 Wortman Avenue",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000620"
          }
        ],
        "callUnits": [
          {
            "remarks": "culpa",
            "status": "NA",
            "unitType": "JP",
            "unitId": "QR50"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "QR",
            "unitId": "JP10"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "948 Lexington Avenue",
        "priority": 9,
        "callType": 561,
        "serviceType": "cc",
        "id": "PP53",
        "rin": "PP1700000135"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR72"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "329 Laurel Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "PP1700000822"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP93"
              }
            ],
            "remarks": "",
            "address": "901 Grattan Street",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP18",
            "rin": "JP1700000894"
          },
          {
            "callUnits": [
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP66"
              }
            ],
            "remarks": "",
            "address": "733 Durland Place",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP97",
            "rin": "PP1700000357"
          }
        ],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP47"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "689 Pershing Loop",
        "priority": 8,
        "callType": 813,
        "serviceType": "cc",
        "id": "PP64",
        "rin": "PP1700000639"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "aliquip",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP55"
              }
            ],
            "remarks": "",
            "address": "265 Kensington Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR34",
            "rin": "PP1700000892"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP23"
              }
            ],
            "remarks": "Illegal Camping",
            "address": "615 Georgia Avenue",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cl",
            "id": "QR29",
            "rin": "JP1700000421"
          },
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR79"
              },
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR70"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "300 Gunnison Court",
            "priority": 8,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR84",
            "rin": "JP1700000624"
          }
        ],
        "callUnits": [
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP57"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "749 Melrose Street",
        "priority": 4,
        "callType": 885,
        "serviceType": "cc",
        "id": "JP14",
        "rin": "JP1700000163"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP29"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "640 Vermont Street",
        "priority": 8,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP56",
        "rin": "PP1700000911"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP52"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR39"
              },
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR42"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "482 Ide Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR89",
            "rin": "JP1700000539"
          },
          {
            "callUnits": [
              {
                "remarks": "dolore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP62"
              },
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR60"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "709 Strauss Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP79",
            "rin": "JP1700000709"
          },
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP84"
              },
              {
                "remarks": "magna",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP46"
              },
              {
                "remarks": "consectetur",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP63"
              }
            ],
            "remarks": "",
            "address": "408 Fiske Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR18",
            "rin": "QR1700000534"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "veniam",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR12"
          },
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP45"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "145 Bank Street",
        "priority": 3,
        "callType": 974,
        "serviceType": "cc",
        "id": "PP71",
        "rin": "JP1700000140"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "eu",
            "status": "ER",
            "unitType": "QR",
            "unitId": "PP43"
          }
        ],
        "remarks": "Trespassing",
        "address": "863 Royce Street",
        "priority": 6,
        "callType": 755,
        "serviceType": "cl",
        "id": "QR83",
        "rin": "JP1700000224"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP87"
              },
              {
                "remarks": "aliqua",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR42"
              },
              {
                "remarks": "elit",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP79"
              }
            ],
            "remarks": "",
            "address": "413 Suydam Street",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP11",
            "rin": "QR1700000766"
          },
          {
            "callUnits": [
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP12"
              },
              {
                "remarks": "mollit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR86"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "398 Brooklyn Road",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP49",
            "rin": "JP1700000626"
          }
        ],
        "callUnits": [
          {
            "remarks": "laboris",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP75"
          }
        ],
        "remarks": "Drug Activity",
        "address": "206 Nautilus Avenue",
        "priority": 1,
        "callType": 496,
        "serviceType": "cc",
        "id": "QR35",
        "rin": "JP1700000629"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR61"
              },
              {
                "remarks": "cillum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP59"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "223 Olive Street",
            "priority": 7,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR47",
            "rin": "JP1700000834"
          },
          {
            "callUnits": [
              {
                "remarks": "sit",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP78"
              },
              {
                "remarks": "excepteur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "277 Commerce Street",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP27",
            "rin": "PP1700000157"
          },
          {
            "callUnits": [
              {
                "remarks": "aute",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP38"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR65"
              },
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP30"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "894 Wyona Street",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR24",
            "rin": "QR1700000872"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliquip",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP91"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP32"
          }
        ],
        "remarks": "Trespassing",
        "address": "973 Merit Court",
        "priority": 1,
        "callType": 209,
        "serviceType": "cc",
        "id": "JP19",
        "rin": "JP1700000104"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR11"
          },
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP19"
          },
          {
            "remarks": "non",
            "status": "NA",
            "unitType": "PP",
            "unitId": "JP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "415 Marconi Place",
        "priority": 9,
        "callType": 817,
        "serviceType": "cc",
        "id": "QR47",
        "rin": "QR1700000377"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ipsum",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR62"
              }
            ],
            "remarks": "",
            "address": "869 Hegeman Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP37",
            "rin": "JP1700000998"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR92"
              },
              {
                "remarks": "consequat",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP17"
              }
            ],
            "remarks": "",
            "address": "314 Whitty Lane",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP21",
            "rin": "QR1700000702"
          },
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP44"
              }
            ],
            "remarks": "",
            "address": "105 Matthews Court",
            "priority": 2,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR36",
            "rin": "PP1700000332"
          }
        ],
        "callUnits": [
          {
            "remarks": "occaecat",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR42"
          }
        ],
        "remarks": "accident with injuries",
        "address": "642 Duryea Place",
        "priority": 7,
        "callType": 938,
        "serviceType": "cc",
        "id": "JP74",
        "rin": "PP1700000431"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP41"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR48"
              },
              {
                "remarks": "anim",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR55"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "389 Radde Place",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP69",
            "rin": "JP1700000777"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP18"
              },
              {
                "remarks": "aliqua",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "315 Colonial Court",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP63",
            "rin": "JP1700000575"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP97"
              },
              {
                "remarks": "id",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR53"
              }
            ],
            "remarks": "– Hit and Run Injury / Just Occurred",
            "address": "508 Ross Street",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP63",
            "rin": "JP1700000931"
          }
        ],
        "callUnits": [
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP85"
          }
        ],
        "remarks": "Medical Call Requiring Police Presence",
        "address": "309 Kingsway Place",
        "priority": 7,
        "callType": 513,
        "serviceType": "cl",
        "id": "JP81",
        "rin": "QR1700000706"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP62"
          },
          {
            "remarks": "amet",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "voluptate",
            "status": "AV",
            "unitType": "QR",
            "unitId": "QR29"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "971 Varick Street",
        "priority": 8,
        "callType": 249,
        "serviceType": "cl",
        "id": "QR49",
        "rin": "QR1700000130"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nulla",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR20"
              },
              {
                "remarks": "aliquip",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR65"
              },
              {
                "remarks": "laboris",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR67"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "507 Fleet Place",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP14",
            "rin": "PP1700000911"
          }
        ],
        "callUnits": [
          {
            "remarks": "minim",
            "status": "NA",
            "unitType": "JP",
            "unitId": "JP40"
          },
          {
            "remarks": "laboris",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR62"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "996 Chestnut Avenue",
        "priority": 5,
        "callType": 308,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000272"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "sunt",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR46"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "590 Erskine Loop",
        "priority": 3,
        "callType": 937,
        "serviceType": "cl",
        "id": "QR76",
        "rin": "PP1700000840"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "tempor",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP43"
          },
          {
            "remarks": "fugiat",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP99"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "404 Greene Avenue",
        "priority": 9,
        "callType": 920,
        "serviceType": "cl",
        "id": "QR43",
        "rin": "JP1700000240"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "JP",
                "unitType": "QR",
                "unitId": "JP37"
              }
            ],
            "remarks": "",
            "address": "911 Williams Court",
            "priority": 4,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP97",
            "rin": "PP1700000735"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR88"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR44"
          }
        ],
        "remarks": "Trespassing",
        "address": "377 Aster Court",
        "priority": 7,
        "callType": 341,
        "serviceType": "cc",
        "id": "PP57",
        "rin": "QR1700000192"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR57"
              }
            ],
            "remarks": "Trespassing",
            "address": "446 Huron Street",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR30",
            "rin": "QR1700000633"
          }
        ],
        "callUnits": [
          {
            "remarks": "amet",
            "status": "AV",
            "unitType": "PP",
            "unitId": "JP11"
          },
          {
            "remarks": "sint",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP75"
          },
          {
            "remarks": "aute",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP16"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "647 Lake Place",
        "priority": 1,
        "callType": 294,
        "serviceType": "cc",
        "id": "QR13",
        "rin": "JP1700000561"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "dolor",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "accident with injuries",
            "address": "462 Grove Place",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP74",
            "rin": "QR1700000726"
          },
          {
            "callUnits": [
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP53"
              },
              {
                "remarks": "consectetur",
                "status": "ER",
                "unitType": "QR",
                "unitId": "JP14"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "279 Garnet Street",
            "priority": 4,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR59",
            "rin": "PP1700000200"
          },
          {
            "callUnits": [
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR77"
              },
              {
                "remarks": "laborum",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP27"
              }
            ],
            "remarks": "Medical Call Requiring Police Presence",
            "address": "376 Hopkins Street",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "PP1700000318"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "reprehenderit",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP15"
          },
          {
            "remarks": "officia",
            "status": "JP",
            "unitType": "JP",
            "unitId": "QR64"
          }
        ],
        "remarks": "Criminal Mischief Graffiti",
        "address": "767 Beadel Street",
        "priority": 7,
        "callType": 649,
        "serviceType": "cc",
        "id": "QR44",
        "rin": "QR1700000632"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "non",
                "status": "JP",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "labore",
                "status": "ER",
                "unitType": "QR",
                "unitId": "PP95"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR39"
              }
            ],
            "remarks": "",
            "address": "716 Roosevelt Place",
            "priority": 1,
            "callType": "green",
            "serviceType": "cc",
            "id": "PP84",
            "rin": "QR1700000508"
          },
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR81"
              },
              {
                "remarks": "irure",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR26"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "187 Powell Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP52",
            "rin": "PP1700000581"
          },
          {
            "callUnits": [
              {
                "remarks": "veniam",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "fugiat",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP98"
              },
              {
                "remarks": "labore",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP54"
              }
            ],
            "remarks": "Drug Activity",
            "address": "555 Aurelia Court",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR92",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "dolor",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP16"
          },
          {
            "remarks": "ipsum",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR47"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "297 Voorhies Avenue",
        "priority": 2,
        "callType": 849,
        "serviceType": "cc",
        "id": "QR80",
        "rin": "PP1700000120"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP44"
              },
              {
                "remarks": "ipsum",
                "status": "NA",
                "unitType": "QR",
                "unitId": "PP94"
              },
              {
                "remarks": "Lorem",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP41"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "490 Pineapple Street",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR92",
            "rin": "PP1700000493"
          }
        ],
        "callUnits": [
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "sit",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP94"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR23"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "551 Carlton Avenue",
        "priority": 9,
        "callType": 703,
        "serviceType": "cc",
        "id": "PP14",
        "rin": "QR1700000718"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP45"
              },
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR21"
              },
              {
                "remarks": "sunt",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP96"
              }
            ],
            "remarks": "accident with injuries",
            "address": "740 Utica Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cc",
            "id": "JP30",
            "rin": "PP1700000981"
          },
          {
            "callUnits": [
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP11"
              },
              {
                "remarks": "aliquip",
                "status": "ER",
                "unitType": "JP",
                "unitId": "JP76"
              }
            ],
            "remarks": "Drug Activity",
            "address": "855 Ralph Avenue",
            "priority": 2,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR18",
            "rin": "JP1700000719"
          }
        ],
        "callUnits": [
          {
            "remarks": "deserunt",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP13"
          },
          {
            "remarks": "velit",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP53"
          },
          {
            "remarks": "adipisicing",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP62"
          }
        ],
        "remarks": "Suspicious Person and Activity",
        "address": "847 Gerritsen Avenue",
        "priority": 8,
        "callType": 772,
        "serviceType": "cc",
        "id": "QR52",
        "rin": "PP1700000385"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "reprehenderit",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR87"
              },
              {
                "remarks": "qui",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP55"
              },
              {
                "remarks": "laboris",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR84"
              }
            ],
            "remarks": "",
            "address": "970 Decatur Street",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "QR53",
            "rin": "JP1700000971"
          },
          {
            "callUnits": [
              {
                "remarks": "elit",
                "status": "NA",
                "unitType": "PP",
                "unitId": "JP24"
              }
            ],
            "remarks": "",
            "address": "110 Berriman Street",
            "priority": 3,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP43",
            "rin": "JP1700000890"
          },
          {
            "callUnits": [
              {
                "remarks": "laboris",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR37"
              },
              {
                "remarks": "quis",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP22"
              },
              {
                "remarks": "non",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR93"
              }
            ],
            "remarks": "",
            "address": "665 Cypress Court",
            "priority": 6,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP45",
            "rin": "QR1700000737"
          }
        ],
        "callUnits": [
          {
            "remarks": "duis",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP39"
          },
          {
            "remarks": "laboris",
            "status": "AV",
            "unitType": "PP",
            "unitId": "QR65"
          },
          {
            "remarks": "magna",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP75"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "487 Hoyts Lane",
        "priority": 2,
        "callType": 416,
        "serviceType": "cl",
        "id": "QR85",
        "rin": "QR1700000978"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "adipisicing",
                "status": "ER",
                "unitType": "PP",
                "unitId": "QR30"
              }
            ],
            "remarks": "",
            "address": "559 Blake Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP27",
            "rin": "QR1700000220"
          }
        ],
        "callUnits": [
          {
            "remarks": "cupidatat",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR24"
          },
          {
            "remarks": "aliquip",
            "status": "ER",
            "unitType": "QR",
            "unitId": "QR68"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "695 Bergen Street",
        "priority": 1,
        "callType": 960,
        "serviceType": "cc",
        "id": "QR70",
        "rin": "QR1700000600"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eiusmod",
                "status": "JP",
                "unitType": "JP",
                "unitId": "JP49"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "447 Alton Place",
            "priority": 5,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP31",
            "rin": "QR1700000741"
          }
        ],
        "callUnits": [
          {
            "remarks": "voluptate",
            "status": "JP",
            "unitType": "PP",
            "unitId": "JP53"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "600 Midwood Street",
        "priority": 1,
        "callType": 320,
        "serviceType": "cc",
        "id": "JP55",
        "rin": "QR1700000681"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "labore",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR90"
          },
          {
            "remarks": "dolore",
            "status": "NA",
            "unitType": "PP",
            "unitId": "QR84"
          },
          {
            "remarks": "veniam",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP98"
          }
        ],
        "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
        "address": "676 Exeter Street",
        "priority": 7,
        "callType": 906,
        "serviceType": "cc",
        "id": "PP50",
        "rin": "QR1700000924"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nostrud",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR34"
              }
            ],
            "remarks": "Domestic Disturbance",
            "address": "994 Williams Avenue",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP83",
            "rin": "JP1700000823"
          },
          {
            "callUnits": [
              {
                "remarks": "amet",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR55"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "459 Llama Court",
            "priority": 8,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR63",
            "rin": "JP1700000721"
          },
          {
            "callUnits": [
              {
                "remarks": "consectetur",
                "status": "AV",
                "unitType": "QR",
                "unitId": "QR14"
              },
              {
                "remarks": "veniam",
                "status": "ER",
                "unitType": "JP",
                "unitId": "PP99"
              }
            ],
            "remarks": "Trespassing",
            "address": "917 Bancroft Place",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP69",
            "rin": "PP1700000521"
          }
        ],
        "callUnits": [
          {
            "remarks": "sint",
            "status": "AV",
            "unitType": "QR",
            "unitId": "JP10"
          },
          {
            "remarks": "enim",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP82"
          },
          {
            "remarks": "qui",
            "status": "JP",
            "unitType": "PP",
            "unitId": "PP70"
          }
        ],
        "remarks": "Drug Activity",
        "address": "509 Hicks Street",
        "priority": 9,
        "callType": 761,
        "serviceType": "cl",
        "id": "JP39",
        "rin": "QR1700000876"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ad",
            "status": "JP",
            "unitType": "JP",
            "unitId": "PP43"
          },
          {
            "remarks": "velit",
            "status": "ER",
            "unitType": "PP",
            "unitId": "JP15"
          },
          {
            "remarks": "eiusmod",
            "status": "AV",
            "unitType": "JP",
            "unitId": "PP71"
          }
        ],
        "remarks": "Trespassing",
        "address": "561 Lefferts Avenue",
        "priority": 4,
        "callType": 886,
        "serviceType": "cl",
        "id": "QR12",
        "rin": "JP1700000952"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "eu",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR60"
              },
              {
                "remarks": "laboris",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP38"
              },
              {
                "remarks": "qui",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP67"
              }
            ],
            "remarks": "",
            "address": "661 Stryker Court",
            "priority": 1,
            "callType": "blue",
            "serviceType": "cl",
            "id": "PP66",
            "rin": "PP1700000579"
          },
          {
            "callUnits": [
              {
                "remarks": "et",
                "status": "JP",
                "unitType": "JP",
                "unitId": "QR70"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP81"
              },
              {
                "remarks": "irure",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP92"
              }
            ],
            "remarks": "truck collision with pedestrian",
            "address": "456 Channel Avenue",
            "priority": 9,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR80",
            "rin": "PP1700000955"
          }
        ],
        "callUnits": [
          {
            "remarks": "aute",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP97"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP32"
          },
          {
            "remarks": "fugiat",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP33"
          }
        ],
        "remarks": "Illegal Camping",
        "address": "786 Nolans Lane",
        "priority": 9,
        "callType": 286,
        "serviceType": "cc",
        "id": "JP88",
        "rin": "QR1700000897"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "ut",
            "status": "AV",
            "unitType": "JP",
            "unitId": "QR73"
          },
          {
            "remarks": "cillum",
            "status": "JP",
            "unitType": "JP",
            "unitId": "JP87"
          },
          {
            "remarks": "aliquip",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP94"
          }
        ],
        "remarks": "Blue Honda Civic collide with a bycicle",
        "address": "477 Seton Place",
        "priority": 1,
        "callType": 871,
        "serviceType": "cl",
        "id": "QR28",
        "rin": "JP1700000241"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "et",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP92"
          }
        ],
        "remarks": "Domestic Disturbance",
        "address": "983 Taylor Street",
        "priority": 9,
        "callType": 539,
        "serviceType": "cc",
        "id": "QR68",
        "rin": "PP1700000361"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR98"
              },
              {
                "remarks": "consequat",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP50"
              },
              {
                "remarks": "eiusmod",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR60"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "904 Meserole Avenue",
            "priority": 7,
            "callType": "green",
            "serviceType": "cc",
            "id": "QR81",
            "rin": "QR1700000819"
          },
          {
            "callUnits": [
              {
                "remarks": "minim",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR75"
              }
            ],
            "remarks": "",
            "address": "116 Minna Street",
            "priority": 2,
            "callType": "brown",
            "serviceType": "cc",
            "id": "QR66",
            "rin": "JP1700000445"
          },
          {
            "callUnits": [
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "PP71"
              },
              {
                "remarks": "ea",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR16"
              }
            ],
            "remarks": "",
            "address": "553 Kansas Place",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "JP94",
            "rin": "JP1700000152"
          }
        ],
        "callUnits": [
          {
            "remarks": "ipsum",
            "status": "NA",
            "unitType": "QR",
            "unitId": "PP88"
          },
          {
            "remarks": "anim",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP36"
          }
        ],
        "remarks": "Trespassing",
        "address": "144 Cranberry Street",
        "priority": 9,
        "callType": 546,
        "serviceType": "cc",
        "id": "PP51",
        "rin": "QR1700000935"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "irure",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR15"
              },
              {
                "remarks": "est",
                "status": "NA",
                "unitType": "QR",
                "unitId": "JP39"
              },
              {
                "remarks": "do",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP89"
              }
            ],
            "remarks": "Black female 38yo unconscieus in the ground",
            "address": "410 Fanchon Place",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP99",
            "rin": "PP1700000808"
          }
        ],
        "callUnits": [
          {
            "remarks": "aliqua",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR40"
          },
          {
            "remarks": "irure",
            "status": "ER",
            "unitType": "PP",
            "unitId": "QR85"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "468 Railroad Avenue",
        "priority": 6,
        "callType": 849,
        "serviceType": "cl",
        "id": "JP99",
        "rin": "PP1700000331"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "labore",
                "status": "AV",
                "unitType": "QR",
                "unitId": "PP90"
              },
              {
                "remarks": "dolore",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP25"
              },
              {
                "remarks": "enim",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP82"
              }
            ],
            "remarks": "",
            "address": "147 Cooper Street",
            "priority": 5,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP40",
            "rin": "PP1700000111"
          },
          {
            "callUnits": [
              {
                "remarks": "ad",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP59"
              },
              {
                "remarks": "fugiat",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR37"
              }
            ],
            "remarks": "",
            "address": "185 Village Court",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP94",
            "rin": "PP1700000170"
          },
          {
            "callUnits": [
              {
                "remarks": "officia",
                "status": "AV",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "proident",
                "status": "ER",
                "unitType": "JP",
                "unitId": "QR48"
              },
              {
                "remarks": "ut",
                "status": "AV",
                "unitType": "PP",
                "unitId": "QR31"
              }
            ],
            "remarks": "Drug Activity",
            "address": "434 Graham Avenue",
            "priority": 8,
            "callType": "green",
            "serviceType": "cl",
            "id": "PP92",
            "rin": "PP1700000313"
          }
        ],
        "callUnits": [
          {
            "remarks": "exercitation",
            "status": "AV",
            "unitType": "JP",
            "unitId": "JP49"
          }
        ],
        "remarks": "accident with injuries",
        "address": "159 Oceanview Avenue",
        "priority": 7,
        "callType": 827,
        "serviceType": "cc",
        "id": "QR21",
        "rin": "JP1700000755"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "ER",
                "unitType": "PP",
                "unitId": "JP67"
              }
            ],
            "remarks": "",
            "address": "326 Ashland Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "PP96",
            "rin": "JP1700000636"
          },
          {
            "callUnits": [
              {
                "remarks": "pariatur",
                "status": "ER",
                "unitType": "PP",
                "unitId": "PP99"
              },
              {
                "remarks": "ullamco",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR82"
              }
            ],
            "remarks": "Trespassing",
            "address": "686 Havens Place",
            "priority": 8,
            "callType": "blue",
            "serviceType": "cc",
            "id": "JP71",
            "rin": "JP1700000767"
          },
          {
            "callUnits": [
              {
                "remarks": "id",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR40"
              },
              {
                "remarks": "sint",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP47"
              }
            ],
            "remarks": "",
            "address": "950 Bedford Place",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "JP95",
            "rin": "QR1700000478"
          }
        ],
        "callUnits": [
          {
            "remarks": "mollit",
            "status": "AV",
            "unitType": "QR",
            "unitId": "PP28"
          },
          {
            "remarks": "anim",
            "status": "NA",
            "unitType": "QR",
            "unitId": "JP43"
          }
        ],
        "remarks": "truck collision with pedestrian",
        "address": "201 Madoc Avenue",
        "priority": 5,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP72",
        "rin": "PP1700000212"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "commodo",
                "status": "AV",
                "unitType": "QR",
                "unitId": "JP65"
              },
              {
                "remarks": "in",
                "status": "AV",
                "unitType": "JP",
                "unitId": "QR97"
              },
              {
                "remarks": "velit",
                "status": "ER",
                "unitType": "QR",
                "unitId": "QR32"
              }
            ],
            "remarks": "Suspicious Person and Activity",
            "address": "696 Sutter Avenue",
            "priority": 7,
            "callType": "brown",
            "serviceType": "cl",
            "id": "PP76",
            "rin": "JP1700000926"
          },
          {
            "callUnits": [
              {
                "remarks": "est",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP56"
              },
              {
                "remarks": "enim",
                "status": "NA",
                "unitType": "JP",
                "unitId": "QR37"
              }
            ],
            "remarks": "accident with injuries",
            "address": "682 Fleet Walk",
            "priority": 3,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP24",
            "rin": "PP1700000221"
          },
          {
            "callUnits": [
              {
                "remarks": "ullamco",
                "status": "JP",
                "unitType": "PP",
                "unitId": "JP24"
              },
              {
                "remarks": "velit",
                "status": "NA",
                "unitType": "QR",
                "unitId": "QR25"
              },
              {
                "remarks": "ad",
                "status": "AV",
                "unitType": "PP",
                "unitId": "JP98"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "752 Flatlands Avenue",
            "priority": 9,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR83",
            "rin": "QR1700000844"
          }
        ],
        "callUnits": [
          {
            "remarks": "quis",
            "status": "NA",
            "unitType": "JP",
            "unitId": "PP14"
          },
          {
            "remarks": "laboris",
            "status": "ER",
            "unitType": "PP",
            "unitId": "PP30"
          },
          {
            "remarks": "mollit",
            "status": "JP",
            "unitType": "QR",
            "unitId": "QR92"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "616 Vanderveer Street",
        "priority": 6,
        "callType": 235,
        "serviceType": "cl",
        "id": "JP10",
        "rin": "JP1700000474"
      },
      {
        "relatedCalls": [],
        "callUnits": [
          {
            "remarks": "excepteur",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP36"
          }
        ],
        "remarks": "Black female 38yo unconscieus in the ground",
        "address": "645 Frost Street",
        "priority": 9,
        "callType": 710,
        "serviceType": "cl",
        "id": "JP86",
        "rin": "QR1700000819"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "nisi",
                "status": "NA",
                "unitType": "PP",
                "unitId": "PP14"
              }
            ],
            "remarks": "white UHAL van rear ended toyota corolla with 3 passengers",
            "address": "607 Gilmore Court",
            "priority": 1,
            "callType": "brown",
            "serviceType": "cc",
            "id": "PP65",
            "rin": "JP1700000329"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "JP",
                "unitType": "QR",
                "unitId": "QR44"
              },
              {
                "remarks": "ea",
                "status": "JP",
                "unitType": "JP",
                "unitId": "PP74"
              },
              {
                "remarks": "officia",
                "status": "JP",
                "unitType": "PP",
                "unitId": "QR41"
              }
            ],
            "remarks": "",
            "address": "368 Danforth Street",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "JP19",
            "rin": "QR1700000634"
          }
        ],
        "callUnits": [
          {
            "remarks": "ullamco",
            "status": "NA",
            "unitType": "PP",
            "unitId": "PP88"
          },
          {
            "remarks": "in",
            "status": "JP",
            "unitType": "QR",
            "unitId": "JP68"
          }
        ],
        "remarks": "– Hit and Run Injury / Just Occurred",
        "address": "196 Evans Street",
        "priority": 9,
        "callType": 607,
        "serviceType": "cl",
        "id": "JP28",
        "rin": "JP1700000173"
      },
      {
        "relatedCalls": [
          {
            "callUnits": [
              {
                "remarks": "do",
                "status": "JP",
                "unitType": "QR",
                "unitId": "PP86"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR26"
              },
              {
                "remarks": "irure",
                "status": "AV",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "839 Tabor Court",
            "priority": 6,
            "callType": "green",
            "serviceType": "cl",
            "id": "QR76",
            "rin": "QR1700000285"
          },
          {
            "callUnits": [
              {
                "remarks": "occaecat",
                "status": "NA",
                "unitType": "PP",
                "unitId": "QR36"
              }
            ],
            "remarks": "Public Intoxication",
            "address": "862 Gotham Avenue",
            "priority": 6,
            "callType": "blue",
            "serviceType": "cl",
            "id": "JP81",
            "rin": "PP1700000283"
          },
          {
            "callUnits": [
              {
                "remarks": "voluptate",
                "status": "AV",
                "unitType": "JP",
                "unitId": "PP41"
              },
              {
                "remarks": "laborum",
                "status": "NA",
                "unitType": "JP",
                "unitId": "JP12"
              }
            ],
            "remarks": "",
            "address": "344 Dank Court",
            "priority": 5,
            "callType": "blue",
            "serviceType": "cc",
            "id": "QR33",
            "rin": "QR1700000491"
          }
        ],
        "callUnits": [
          {
            "remarks": "irure",
            "status": "AV",
            "unitType": "PP",
            "unitId": "PP20"
          }
        ],
        "remarks": "accident with injuries",
        "address": "293 Claver Place",
        "priority": 5,
        "callType": 853,
        "serviceType": "cc",
        "id": "JP77",
        "rin": "JP1700000513"
      }
    ]
  },
  listDataUpdating: task(function * () {
    var arr = [this.get('listDataLong1'),this.get('listDataLong1'),this.get('listDataLong2'),this.get('listDataLong3'),this.get('listDataLong4')]
    var pollNum = 0
    while (true) {
      console.log(pollNum%5)
      this.set('listDataLong',arr[pollNum%5])
      pollNum++
      yield timeout(12000);
      
    }
  }),
  listConfig: {
    "data": {
      "body": {
        "color": "#FFFFFF",
        "background": "#272222",
        "font-family": "arial",
        "font-size": "14px",
        "font-weight": "bold"
      },
      "table": {
        "sort": "priority",
        "headers": {
          "callNumber": "Call #",
          "callType": "Type",
          "priority": "Pri",
          "address": "Address",
          "relatedCalls": "Related Calls",
          "callUnits": "Units",
          "remarks": "Remarks"
        },
        "columns": {
          "priority": {
            "background": {
              "key":"priority",
              "1": "#fb4f4f",
              "2": "#fb4f4f",
              "3": "#fb4f4f",
              "4": "#5858fb",
              "5": "#5858fb",
              "6": "#5858fb",
              "7": "#609460",
              "8": "#609460",
              "9": "#609460"
            }
          },
          "units": {
            "icon": {
              "key":"unitType",
              "FTEST": "ambulance",
              "QR": "ambulance"
            },
            "font-size": "14px",
            "font-weight": "normal",
            "color": "white",
            // "color":{
            //   "key":"status",
            //   "AV": "#5858fb",
            //   "ER": "#609460",
            //   "OS": "#fb4f4f"
            // },
            "background": {
              "key":"status",
              "AV": "#fb4f4f",
              "ER": "#5858fb",
              "OS": "#609460"
            },
            "label":["unitId", "status"],
            "tooltip":["unitId", "unitType", "status", "remarks"]
          },
          "relatedCalls": {
            "font-weight": "lighter",
            "background": {
              "key":"serviceType",
              "cc": "#0091ca",
              "cl": "#ff0000"
            },
            "color":"white",
            "label": ["id"],
            "tooltip":["serviceType","callType", "priority", "address"]
          }
        }
      }
    }
  },

  actions: {
    onScroll() {
    },

    onScrollToTop() {
    }
  },


});
