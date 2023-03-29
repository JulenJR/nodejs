const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://julenjr:JuLeNunodostrescuatro@mycluster.2tyy3ze.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'youtube';

const usuari = [
    {
        "_id": {
          "$oid": "64214b41111bbf073dd05507"
        },
        "dataNaixement": {
          "$date": {
            "$numberLong": "5940091234800000"
          }
        },
        "email": "usuari1@gmail.com",
        "nomUsuari": "usuari1",
        "password": "contraseñaUser1",
        "CP": 11010,
        "pais": "paisUser1",
        "sexe": "M",
        "videos_upload_byUser": [
          {
            "video_id": {
              "$oid": "64214c78111bbf073dd05509"
            }
          }
        ],
        "canal": {
          "canal_id": {
            "$oid": "64215038111bbf073dd05511"
          },
          "nomCanal": "canaluser1",
          "descripcio": "descripcio del canal creat per uruasi1",
          "dataCreacioCanal": {
            "$date": {
              "$numberLong": "5308826050800000"
            }
          },
          "suscriptors": 100000001
        },
        "dislikes": [
          {
            "video_id": {
              "$oid": "6421518a111bbf073dd05515"
            },
            "dataDislike": {
              "$date": {
                "$numberLong": "3763198134000000"
              }
            }
          }
        ],
        "likes": [
          {
            "video_id": {
              "$oid": "6421513c111bbf073dd05514"
            },
            "dataLike": {
              "$date": {
                "$numberLong": "3444441231600000"
              }
            }
          }
        ],
        "canalsSuscrit": [
          {
            "canal_id": {
              "$oid": "64215212111bbf073dd05518"
            }
          }
        ],
        "playlists": [
          {
            "playlist_id": {
              "$oid": "64215283111bbf073dd05519"
            },
            "nomPlaylist": "playlist1",
            "dataCreacioPlaylist": {
              "$date": {
                "$numberLong": "7840387868400000"
              }
            },
            "status": "publica"
          }
        ],
        "comentarisDislike": [
          {
            "video_id": {
              "$oid": "64215820111bbf073dd05521"
            },
            "comentari": "comentari dislike1 by user1 at video (x)",
            "data": {
              "$date": {
                "$numberLong": "4684313977200000"
              }
            },
            "comentari_id": {
              "$oid": "6422bbf207c7d1e020f4a07e"
            }
          }
        ],
        "comentarisLike": [
          {
            "video_id": {
              "$oid": "642157c0111bbf073dd05520"
            },
            "comentari": "coenmtari c1 by user1 at video (x)",
            "data": {
              "$date": {
                "$numberLong": "4703658332400000"
              }
            },
            "comentari_id": {
              "$oid": "6422bbfc07c7d1e020f4a07f"
            }
          }
        ]
      }
];

const video = [
    {
        "_id": {
          "$oid": "64214c78111bbf073dd05509"
        },
        "descripcio": "descripcioVideo1",
        "dislikes": 3313,
        "durada": 13345,
        "grandaria": "idkxdVideo1",
        "likes": 566456345,
        "nomArxiu": "video1.mp4",
        "reproduccions": 1451222312,
        "thumbnail": "/path_to_video1_thumbnail",
        "titol": "titolVideo1",
        "status": "privat",
        "etiquetas": [
          {
            "etiqueta_id": {
              "$oid": "64214e5c111bbf073dd0550c"
            },
            "nomEtiqueta": "etiqueta1"
          }
        ],
        "dataPublicacion": {
          "$date": {
            "$numberLong": "4388025740400000"
          }
        },
        "comentaris": [
          {
            "comentari_id": {
              "$oid": "6421562a111bbf073dd0551b"
            },
            "dataComentari": {
              "$date": {
                "$numberLong": "4678412770800000"
              }
            },
            "usuari_id": {
              "$oid": "64214b41111bbf073dd05507"
            }
          }
        ]
      }
];

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Connected successfully to server');
  
    // Get the reference to the database
    const db = client.db(dbName);

    // Clear the collection before insert values
    db.collection('usuari').drop();
  
    // Insert "usuari" collection
    db.collection('usuari').insertMany(usuari, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log(`${result.insertedCount} documents were inserted into the 'fruits' collection`);
    });

    // Clear the collection before insert values
    db.collection('video').drop();
  
    // Insert "video" collection
    db.collection('video').insertMany(video, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log(`${result.insertedCount} documents were inserted into the 'vegetables' collection`);
    });
  
    // Close the connection to the MongoDB server
    client.close();
  });