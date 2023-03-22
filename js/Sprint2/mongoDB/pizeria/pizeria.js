db.botiga.drop();
db.botiga.insertMany(

    [{
        "_id": {
          "$oid": "000000000000000000000b01"
        },
        "adreça": "adreçaBotiga1",
        "codi_postal": "01010",
        "localitat": "Barcelona",
        "provincia": "Barcelona",
        "empleats": [
          {
            "nom": "nomEmpelat11",
            "cognoms": "cognomEmpelat11",
            "nif": "11111111b",
            "telefon": 111111121,
            "treballadorKind": "cuiner",
            "empleat_id": {
              "$oid": "000000000000000000000a06"
            }
          },
          {
            "nom": "nomEmpleat1",
            "cognoms": "cognomEmpleat1",
            "nif": "11111111a",
            "telefon": 666666661,
            "treballadorKind": "repartidor",
            "empleat_id": {
              "$oid": "000000000000000000000a01"
            }
          }
        ]
      },{
        "_id": {
          "$oid": "000000000000000000000b02"
        },
        "adreça": "adreçaBotiga2",
        "codi_postal": "02020",
        "localitat": "Barcelona",
        "provincia": "Barcelona",
        "empleats": [
          {
            "nom": "nomEmpelat2",
            "cognoms": "cognomEmpelat2",
            "nif": "22222222a",
            "telefon": 222222212,
            "treballadorKind": "cuiner",
            "empleat_id": {
              "$oid": "000000000000000000000a02"
            }
          },
          {
            "nom": "nomEmpleat2",
            "cognoms": "cognomEmpleat2",
            "nif": "22222222b",
            "telefon": 222222112,
            "treballadorKind": "repartidor",
            "empleat_id": {
              "$oid": "000000000000000000000a02"
            }
          }
        ]
      }]
);

db.clients.drop();
db.clients.insertMany(

    [{
        "_id": {
          "$oid": "641ab978a8cef9b5eb5a1301"
        },
        "adreça": "adreçaClient1",
        "codi_postal": 1010,
        "cognom": "cognomClient1",
        "localitat": "Barcelona",
        "nom": "nomClient1",
        "numero": "111111221",
        "provincia": "Barcelona",
        "comanda": [
          {
            "data": {
              "$date": {
                "$numberLong": "1523811280000"
              }
            },
            "comandaKind": "domicili",
            "preu": 355,
            "comanda_id": {
              "$oid": "641aba2aa8cef9b5eb5a1304"
            },
            "botiga_id": {
              "$oid": "641ac0daa8cef9b5eb5a131e"
            },
            "empelat_id": {
              "$oid": "641ac6baa8cef9b5eb5a132b"
            },
            "comanda_detall": [
              {
                "quantitat": 3,
                "producte_id": {
                  "$oid": "641abcd9a8cef9b5eb5a1313"
                }
              },
              {
                "quantitat": 27,
                "producte_id": {
                  "$oid": "641abd19a8cef9b5eb5a1314"
                }
              }
            ]
          }
        ]
      },{
        "_id": {
          "$oid": "641ab978a7cef9b5eb5a1301"
        },
        "adreça": "adreçaClient11",
        "codi_postal": 1010,
        "cognom": "cognomClient11",
        "localitat": "Barcelona",
        "nom": "nomClient11",
        "numero": "111112221",
        "provincia": "Barcelona",
        "comanda": [
          {
            "data": {
              "$date": {
                "$numberLong": "1523811280000"
              }
            },
            "comandaKind": "botiga",
            "preu": 35585,
            "botiga_id": {
              "$oid": "641ac1daa8cef9b5eb5a131f"
            },
            "comanda_id": {
              "$oid": "641aba5aa8cef9b5eb5a1304"
            },
            "empleat_id": {
              "$oid": "641ac6dba8cef9b5eb5a132c"
            },
            "comanda_detall": [
              {
                "quantitat": 1000,
                "producte_id": {
                  "$oid": "641ac21ea8cef9b5eb5a1320"
                }
              }
            ]
          }
        ]
      }]
);

db.productes.drop();
db.productes.insertMany(

    [{
        "_id": {
          "$oid": "641ac00fa8cef9b5eb5a131b"
        },
        "categoria": "pizza",
        "descripcio": "descripcioBreudelProducte1",
        "imatge": "/path_Imatge:producte_1",
        "nom": "producte1",
        "preu": 3451
      },{
        "_id": {
          "$oid": "641ac016a8cef9b5eb5a131c"
        },
        "categoria": "hamburguesa",
        "descripcio": "descripcioProducte2",
        "imatge": "/path_Imatge:producte_2",
        "nom": "producte2",
        "preu": 22222
      },{
        "_id": {
          "$oid": "641ac019a8cef9b5eb5a131d"
        },
        "categoria": "beguda",
        "descripcio": "descripcioProducte_3",
        "imatge": "/path_Imatge:producte_3",
        "nom": "producte3",
        "preu": 333333
      }]
);