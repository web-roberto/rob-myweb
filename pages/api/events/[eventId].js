import {
  connectdatabase,
  insertDocument,
  getAllDocumentsWhere,
  getDocumentById,
  getDocumentById2,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;
  //console.log(
  //   '--------XXXXXXXXXXXXX-----en/events/eventId----eventId:',
  //   eventId
  // );

  let client;

  try {
    client = await connectdatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    console.error('----Connecting to the database failed!');
    return;
  }

  if (req.method === 'GET') {
    // const nid = ObjectId(movieId);

    try {
      //puedo usar getDocumentById tambien funciona bien.
      const documents = await getDocumentById2(
        client,
        'events',
        { _id: 1 },
        { id: eventId }
      );
      res.status(200).json({ events: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting events failed.' });
      console.error('Getting events failed');
    }
  }

  client.close();
}

export default handler;
