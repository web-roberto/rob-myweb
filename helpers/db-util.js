import { MongoClient } from 'mongodb';
require('dotenv').config();

export async function connectDatabase() {
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

export async function getDocumentById(client, collection, sort, id) {
  console.log('-------XXXXXXXXXX - dentro de ----getDocumentById----');

  const allDocuments = await getAllDocuments(client, collection, sort);
  if (allDocuments) {
    const res = allDocuments.find((docu) => docu._id === id);
    console.log('-------XxXXXXXXXXXXXX----', res );
    return res;
  } else return [];
}

export async function getAllDocumentsWhere(client, collection, sort, where) {
  console.log('-------YYYYYYYYYYY - dentro de ----getAllDocumentsWhere----');

  const db = client.db();
  const documents = await db.collection(collection).find(where).sort(sort).toArray();
  if (documents) {
    console.log('-------YYYYYY----', documents );
    return documents;
  } else return [];
}


