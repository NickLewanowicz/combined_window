import Ember from 'ember';

export default Ember.Controller.extend({
  //callData: Ember.get('app','callData'),
  listData: {
    "data":[
      {
        "rin":"PP16000000048",
        "serviceType":"cc",
        "callType":"245",
        "priority":"6",
        "address":"1144 Holland Ave",
        "callUnits":[
          {
            "unitId":"JPM2",
            "unitType":"PT",
            "status":"DP"
          },
          {
            "unitId":"8899",
            "unitType":"PT",
            "status":"AV"
          }
        ],
        "relatedCalls":[
          {
            "rin":"PG16000000002",
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
        "rin":"PP16000000006",
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
        "rin":"PP15000000024",
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
        "rin":"PF14000000002",
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
        "rin":"PP16000000016",
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
            "rin":"PP17000000001",
            "serviceType":"cc",
            "callType":"ABV",
            "priority":"3",
            "address":"55 Carling Ave"
          }
        ]
      },
      {
        "rin":"PP15000003129",
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
        "rin":"RP16000000046",
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
            "rin":"16000000001",
            "serviceType":"cc",
            "callType":"AB3",
            "address":"123 Sesame Street",
            "priority":"2"
          },
          {
            "rin":"RP16000000046",
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
  			"font-size": "14px"
  		},
  		"table": {
  			"sort": "priority",
  			"headers": {
  				"callId": "Call ID",
  				"callType": "Call Type"
  			},
  			"columns": {
  				"priority": {
  					"background": [
  						{"key":"val"},
  						{"1": "#fb4f4f"},
  						{"2": "#fb4f4f"},
  						{"3": "#fb4f4f"},
  						{"4": "#5858fb"},
  						{"5": "#5858fb"},
  						{"6": "#5858fb"},
  						{"7": "#609460"},
  						{"8": "#609460"},
  						{"9": "#609460"}
  					]
  				},
  				"units": {
  					"color": {
  						"status": [
  							{"key":"val"},
  							{"AV": "#fb4f4f"},
  							{"ER": "#5858fb"},
  							{"OS": "#609460"}
  						]
  					},
  					"label":["unitId"]
  				},
  				"relatedCalls": {
  					"background": {
  						"serviceType": [
  							{"key":"val"},
  							{"cc": "#0091ca"},
  							{"cl": "#ff0000"}
  						]
  					},
            "color":"white",
  					"label": ["serviceType","callNumber"]
  				}
  			}
  		}
  	}
  },
actions:{
  addRow() {
    console.log(this.get('listData'))
    this.set('listData.data', this.get('listData.data').addObject({
      "rin":"RP16000000046",
      "serviceType":"cl",
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
          "rin":"16000000001",
          "serviceType":"cc",
          "callType":"AB3",
          "address":"123 Sesame Street",
          "priority":"2"
        },
        {
          "rin":"RP16000000046",
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
  }))},
  delRow() {
    this.get('listData.data').popObject()
  },
  reqData() {
    console.log(this.get('callData'));
    Ember.$.ajax(
    {
      type: "GET",
      url:"http://localhost:4200/calls",
      contentType: "application/json"
    })
    this.set('data', this.get('data')+1)
  }
}

});
