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
