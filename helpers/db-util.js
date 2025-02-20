import { MongoClient, ObjectId } from 'mongodb';
require('dotenv').config();

export async function connectdatabase() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export async function getDocumentById2(client, collection, sort, id) {
  console.log('-------XXXXXXXXXX - dentro de ----getDocumentById2----id:', id);
  const db = client.db();
  const result = await db
    .collection(collection)
    .findOne({ _id: ObjectId(id.id) });
  return result;
}

export async function getDocumentById(client, collection, sort, id) {
  console.log('-------XXXXXXXXXX - dentro de ----getDocumentById----id', id);

  const allDocuments = await getAllDocuments(client, collection, sort);

  if (allDocuments) {
    // console.log(
    //   '-------XxXXXXXXXXXXXX-- getDocumentById-- allDocuments---',
    //   allDocuments
    // );
    // const res = allDocuments.find((docu) => String(docu._id) === String(id.id));
    const res = allDocuments.find((docu) => String(docu._id) === String(id));

    return res;
  } else return [];
}

export async function getAllDocumentsWhere(client, collection, sort, where) {
  //console.log('-------YYYYYYYYYYY - dentro de ----getAllDocumentsWhere----');

  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(where)
    .sort(sort)
    .toArray();
  if (documents) {
    //console.log('-------YYYYYY----', documents );
    return documents;
  } else return [];
}

// export const GetAllMovies = async (client) => {
//   //const db = client.db();
//   try {
//     const documents = await getAllDocuments(client, 'movies', { _id: 1 });
//     //res.status(200).json({ movies: documents });
//     client.close();
//     return documents;

//   } catch (error) {
//     res.status(500).json({ message: 'Getting movies failed.' });
//     console.error('Error getAllDocuments "movies" ');
//     client.close();
//     return;
//   }

// const documents = await db.collection(collection).find().sort(sort).toArray();

// async function handler(req, res) {
// const eventId = req.query.eventId; //adds a comment to the eventsId - POST /api/comments/[eventId]

// let client;
// try {
//   client = await connectdatabase();
// } catch (error) {
//   res.status(500).json({ message: 'Connecting to the database failed!' });
//   console.error('Error connectdatabase api/movies ');
//   return;
// }

// if (req.method === 'GET') {
// try {
//   const documents = await getAllDocuments(client, 'movies', { _id: 1 });
//   res.status(200).json({ movies: documents });
//   client.close();
// } catch (error) {
//   res.status(500).json({ message: 'Getting movies failed.' });
//   console.error('Error getAllDocuments "movies" ');
//   client.close();
//   return;
// }
// }
// client.close();
//}

//return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies`).then((res) => res.json());
//return await fetch(process.env.URL + '/api/movies').then((res) => res.json());

// export const GetOneMovies = async (id) => {
//   //return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies/${id}`).then((res) => res.json());
//   return await fetch(process.env.URL + '/api/movies/${id}').then((res) =>res.json()
//   );
// };
