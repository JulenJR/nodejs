const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://julenjr:JuLeNunodostrescuatro@mycluster.2tyy3ze.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'youtube';

const usuari = [
    {
    _id: new ObjectId("64214b41111bbf073dd05507"),
    "dataNaixement": new Date("5940091234800000"),
    "email": "usuari1@gmail.com",
    "nomUsuari": "usuari1",
    "password": "contraseñaUser1",
    "CP": 11010,
    "pais": "paisUser1",
    "sexe": "M",
    "videos_upload_byUser": [
      {
        "video_id": new ObjectId("64214c78111bbf073dd05509")
      }
    ],
    "canal": {
      canal_id : new ObjectId("64215038111bbf073dd05511"),
      nomCanal: "canaluser1",
      "descripcio": "descripcio del canal creat per uruasi1",
      "dataCreacioCanal":new Date("5308826050800000")
      },
      "suscriptors": 100000001,
    "dislikes": [
      {
        "video_id": new ObjectId("6421518a111bbf073dd05515"),
        "dataDislike": new Date("3763198134000000"),
      }
    ],
    "likes": [
      {
        "video_id": new ObjectId("6421513c111bbf073dd05514"),
        "dataLike": new Date("3444441231600000"),
      }
    ],
    "canalsSuscrit": [
      {
        "canal_id": new ObjectId("64215212111bbf073dd05518"),
      }
    ],
    "playlists": [
      {
        "playlist_id": new ObjectId("64215283111bbf073dd05519"),
        "nomPlaylist": "playlist1",
        "dataCreacioPlaylist": new ObjectId("784038786840000000000000"),
        "status": "publica"
      }
    ],
    "comentarisDislike": [
      {
        "video_id": new ObjectId("64215820111bbf073dd05521"),
        "comentari": "comentari dislike1 by user1 at video (x)",
        "data": new Date("4684313977200000"),
        "comentari_id": new ObjectId("6422bbf207c7d1e020f4a07e"),
      }
    ],
    "comentarisLike": [
      {
        "video_id": new ObjectId("642157c0111bbf073dd05520"),
        "comentari": "coenmtari c1 by user1 at video (x)",
        "data": new Date("4703658332400000"),
        "comentari_id": new ObjectId("6422bbfc07c7d1e020f4a07f"),
      }
    ]
  }
];

const video = [
  {
    "_id": new ObjectId("64214c78111bbf073dd05409"),
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
        "etiqueta_id": new ObjectId("64214e5c111bbf073dd0550c"),
        "nomEtiqueta": "etiqueta1"
      }
    ],
    "dataPublicacion": new Date("4388025740400000"),
    "comentaris": [
      {
        "comentari_id": new ObjectId("6421562a111bbf073dd0551b"),
        "dataComentari": new Date("4678412770800000"),
        "usuari_id": new ObjectId("64214b41111bbf074dd05507"),
      }
    ]
  }
];

// Connect to the MongoDB server
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected successfully to server');

    // Get the reference to the database
    const db = client.db(dbName);

    // Insert usuari collection
    return db.collection('usuari').insertMany(usuari)
      .then(result => {
        console.log(`${result.insertedCount} documents were inserted into the 'usuari' collection`);
      })
      .catch(err => {
        console.error(err);
      });
  })
  .then(() => {
    // Insert video collection
    const db = client.db(dbName);

    return db.collection('video').insertMany(video)
      .then(result => {
        console.log(`${result.insertedCount} documents were inserted into the 'video' collection`);
      })
      .catch(err => {
        console.error(err);
      });
    })
    .then(() => {
      // Close the connection to the MongoDB server
      client.close();
      console.log('Script finished');
    })
    .catch(err => {
      console.error(err);
  });