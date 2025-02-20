import {
  connectdatabase,
  insertDocument,
  getAllDocumentsWhere,
  getDocumentById,
  getDocumentById2,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const movieId = req.query.movieId;
  console.log(
    '--------XXXXXXXXXXXXX-----en/movies/movieId----movieId:',
    movieId
  );

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
        'movies',
        { _id: 1 },
        { _id: movieId }
      );
      res.status(200).json({ movies: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting movies failed.' });
      console.error('Getting movies failed');
    }
  }

  client.close();
}

export default handler;
