use('spotify');

db.cançons.drop();
db.cançons.insertMany(
  [{
  "_id": {
    "$oid": "6422a5b707c7d1e020f4a079"
  },
  "album": "albumA1",
  "artista": "artistahhhhhxdidk",
  "durada": 231,
  "nomCanço": "canço1",
  "reproduccions": 3021578
}]
);

db.suscripcioPayPal.drop();
db.suscripcioPayPal.insertMany(
  [{
  "_id": {
    "$oid": "6422a35707c7d1e020f4a06d"
  },
  "nomUsuari": "UsuariPayPal1",
  "user_id": {
    "$oid": "642294aa07c7d1e020f4a061"
  }
}]
)

db.suscripcioTargetaDeCredit.drop();
db.suscripcioTargetaDeCredit.insertMany(
  [{
    "_id": {
      "$oid": "6422a3a907c7d1e020f4a072"
    },
    "caducitat": {
      "$date": {
        "$numberLong": "292091180400000"
      }
    },
    "numeroTargeta": "481487526457832",
    "pin": 2525,
    "usuari_id": {
      "$oid": "6422a40f07c7d1e020f4a073"
    }
  }]
);

db.usuari.drop();
db.usuari.insertMany(
    [{
    "_id": {
      "$oid": "642294aa07c7d1e020f4a061"
    },
    "codiPostal": "022510",
    "correuElectronic": "user1@bmail.ko",
    "dataNaixement": {
      "$date": {
        "$numberLong": "3421657206000000"
      }
    },
    "isPremium": true,
    "nomUsuari": "usuari1",
    "pais": "Mozambique",
    "password": "user1password",
    "sexe": "H",
    "suscripcio": {
      "dataIniciSuscripcio": {
        "$date": {
          "$numberLong": "4381398774000000"
        }
      },
      "dataRenovacio": {
        "$date": {
          "$numberLong": "3750291270000000"
        }
      },
      "metodepagaments": "PayPal"
    },
    "pagaments": [
      {
        "pagament_id": {
          "$oid": "64229fd207c7d1e020f4a069"
        },
        "dataPagament": {
          "$date": {
            "$numberLong": "7843512006000000"
          }
        },
        "total": 12.99
      }
    ],
    "playlists": [
      {
        "playlist_id": {
          "$oid": "6422a43b07c7d1e020f4a075"
        },
        "nomPlaylist": "playlist1usuari1",
        "dataCreacioPlaylist": {
          "$date": {
            "$numberLong": "8152770092400000"
          }
        },
        "cançons": [
          {
            "canço_id": {
              "$oid": "6422a5b707c7d1e020f4a079"
            },
            "dataInsert": {
              "$date": {
                "$numberLong": "266719388400000"
              }
            },
            "usuari_inserta_canço": {
              "$oid": "642294aa07c7d1e020f4a061"
            }
          }
        ],
        "statusPlaylist": "activa"
      }
    ]
  }]
);