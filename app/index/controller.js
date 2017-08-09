import Ember from 'ember';
export default Ember.Controller.extend({
  //callData: Ember.get('app','callData'),
  listData: {
    "data":[
      {
        "rin":"PP17000000048",
        "id":"PP48",
        "serviceType":"cc",
        "callType":"245",
        "priority":"6",
        "address":"1144 Holland Ave",
        "callUnits":[
          {
            "unitId":"JPM2",
            "unitType":"PT",
            "status":"DP",
            "remarks":"Blah"
          },
          {
            "unitId":"8899",
            "unitType":"PT",
            "status":"AV"
          }
        ],
        "relatedCalls":[
          {
            "id":"PG2",
            "rin":"PP17000000048",
            "serviceType":"cc",
            "callType":"245",
            "priority":"2",
            "address":"1 South Bvd",
            "callUnits":[
              {
                "unitId":"PR",
                "unitType":"PT",
                "status":"AV"
              }
            ]
          }
        ]
      },
      {
        "id":"PP6",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"THC",
        "priority":"3",
        "address":"456 York Street",
        "callUnits":[
          {
            "unitId":"ROBO",
            "unitType":"PT",
            "status":"NA"
          }
        ]
      },
      {
        "id":"PP24",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"ACCNON",
        "priority":"7",
        "address":"1 Rideau Ave",
        "callUnits":[
          {
            "unitId":"VMU1",
            "unitType":"PT",
            "status":"NA"
          }
        ]
      },
      {
        "id":"PF2",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"ABV",
        "priority":"3",
        "address":"323 Elgin Street",
        "callUnits":[
          {
            "unitId":"KS20",
            "unitType":"PT",
            "status":"OS"
          }
        ]
      },
      {
        "id":"PP16",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"TS",
        "priority":"3",
        "address":"222 Laser Street",
        "callUnits":[
          {
            "unitId":"866",
            "unitType":"PT",
            "status":"OU"
          }
        ],
        "relatedCalls":[
          {
            "id":"PP1",
            "rin":"PP17000000048",
            "serviceType":"cc",
            "callType":"ABV",
            "priority":"3",
            "address":"55 Carling Ave"
          }
        ]
      },
      {
        "id":"PP3129",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"ACCNON",
        "priority":"2",
        "address":"32 Terrance Ave",
        "callUnits":[
          {
            "unitId":"AUTO22",
            "unitType":"PT",
            "status":"ER"
          }
        ]
      },
      {
        "id":"RP46",
        "rin":"PP17000000048",
        "serviceType":"cc",
        "callType":"ABV",
        "priority":"9",
        "address":"1 North Bvd",
        "callUnits":[
          {
            "unitId":"CCE4",
            "unitType":"FTEST",
            "status":"AV",
            "capabilities":"asdf"
          },
          {
            "unitId":"BC3",
            "unitType":"ABV",
            "status":"OS",
            "capabilities":"C"
          }
        ],
        "relatedCalls":[
          {
            "id":"RP11",
            "rin":"PP17000000048",
            "serviceType":"cc",
            "callType":"AB3",
            "address":"123 Sesame Street",
            "priority":"2"
          },
          {
            "id":"RP46",
            "rin":"PP17000000048",
            "serviceType":"cl",
            "callType":"ABV",
            "priority":"9",
            "address":"456 Malibu Terrace",
            "callUnits":[
              {
                "unitId":"CCE4",
                "unitType":"FTEST",
                "status":"AV",
                "capabilities":"asdf"
              },
              {
                "unitId":"BC3",
                "unitType":"ABV",
                "status":"OS",
                "capabilities":"C"
              }
            ]
          }
        ]
      }
    ]
  },
  listConfig: {
    "data": {
      "body": {
        "color": "#FFFFFF",
        "background": "#000000",
        "font-family": "arial",
        "font-size": "14px",
        "font-weight": "bold"
      },
      "table": {
        "sort": "priority",
        "headers": {
          "priority": "Pri",
          "callId": "Call ID",
          "callType": "Type"
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
              "FTEST": "ambulance"
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
            "label":["unitId", "status"]
          },
          "relatedCalls": {
            "font-weight": "lighter",
            "background": {
              "key":"serviceType",
              "cc": "#0091ca",
              "cl": "#ff0000"
            },
            "color":"white",
            "label": ["id"]
          }
        }
      }
    }
  }
});
