
db.clients.drop();
db.clients.insertMany(

    [{
        "_id": {
          "$oid": "64196b0b4057462a4d414f18"
        },
        "nom": "nom1",
        "adreça": "adreça1",
        "numero": "11",
        "pis": "1",
        "porta": "1",
        "ciutat": "ciutat1",
        "codi_postal": 11001,
        "pais": "pais1",
        "telefon": 111111111,
        "fax": 111111111,
        "NIF": "11111111a",
        "compras": [
          {
            "_id": {
              "$oid": "1111111111111111111111a1"
            },
            "dataCompra": {
              "$date": {
                "$numberLong": "1674562915000"
              }
            },
            "empleat": "empleat1",
            "ID_ulleres": {
              "$oid": "222222222222222222222222"
            }
          }
        ]
      }]
);

db.proveidors.drop();
db.proveidors.insertMany(

    [{
        "_id": {
          "$oid": "64196dea4057462a4d414f20"
        },
        "NIF": "11111111a",
        "carrer": "carrerProveidor1",
        "ciutat": "ciutatProveidor1",
        "codiPostal": 110101,
        "fax": 111111111,
        "nom": "nomProveidor1",
        "numero": "1",
        "pais": "paisProveidor1",
        "pis": "1",
        "porta": "1",
        "telefon": 111111111,
        "ulleres": [
          {
            "_id": {
              "$oid": "000000000000000000000000"
            },
            "marca": "marcaUlleres0",
            "graduacioVidreEsquerre": 350,
            "graduacioVidreDret": 350,
            "muntura": "metalica",
            "colorVidreEsquerre": "blau",
            "colorVidreDret": "blau",
            "preu": 4500
          },
          {
            "_id": {
              "$oid": "111111111111111111111111"
            },
            "marca": "marcaUlleres1",
            "graduacioVidreEsquerre": 600,
            "graduacioVidreDret": 590,
            "muntura": "flotant",
            "colorVidreEsquerre": "verd",
            "colorVidreDret": "verd",
            "preu": 8250
          },
          {
            "_id": {
              "$oid": "222222222222222222222222"
            },
            "marca": "marcaUlleres2",
            "graduacioVidreEsquerre": 500,
            "graduacioVidreDret": 500,
            "muntura": "pasta",
            "colorVidreEsquerre": "negre",
            "colorVidreDret": "negre",
            "preu": 1000
          }
        ]
      },{
        "_id": {
          "$oid": "641975944057462a4d414f32"
        },
        "NIF": "22222222b",
        "carrer": "carrerProveidor2",
        "ciutat": "ciutatProveidor2",
        "codiPostal": 220202,
        "fax": 222222222,
        "nom": "nomProveidor2",
        "numero": "2",
        "pais": "paisProveidor2",
        "pis": "2",
        "porta": "2",
        "telefon": 222222222,
        "ulleres": [
          {
            "_id": {
              "$oid": "000000000000000000000001"
            },
            "marca": "marcaUlleres1prov2",
            "graduacioVidreEsquerre": 1,
            "graduacioVidreDret": 1,
            "muntura": "pasta",
            "colorVidreEsquerre": "vermell",
            "colorVidreDret": "vermell",
            "preu": 10000000
          }
        ]
      }]
);