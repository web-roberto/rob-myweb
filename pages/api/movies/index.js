import {
  connectdatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  // const eventId = req.query.eventId; //adds a comment to the eventsId - POST /api/comments/[eventId]

  let client;
  try {
    client = await connectdatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    console.error('Error connectdatabase api/movies ');
    return;
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'movies', { _id: -1 });
      res.status(200).json({ movies: documents });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Getting movies failed.' });
      console.error('Error getAllDocuments "movies" ');
      client.close();
      return;
    }
  }
  // client.close();
}

export default handler;
