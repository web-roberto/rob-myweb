import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  // const eventId = req.query.eventId; //adds a comment to the eventsId - POST /api/comments/[eventId]

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    console.error('Error connectDatabase api/events ');
    return;
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'events', { _id: -1 });
      res.status(200).json({ events: documents });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Getting events failed.' });
      console.error('Error getAllDocuments "events" ');
      client.close();
      return;
    }
  }
  // client.close();
}

export default handler;
