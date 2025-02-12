import {
  connectDatabase,
  insertDocument,
  getAllDocumentsWhere,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;
  console.log(
    '--------XXXXXXXXXXXXX-----en/comments/evendID----eventId:',
    eventId
  );

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    console.error('----Connecting to the database failed!');
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      console.error('----Invalid input!');

      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      //If doesn't exist the email I don't add a comment
      const emailExists = await getAllDocumentsWhere(
        client,
        'newsletter',
        { _id: -1 },
        { email: email }
      );
      console.log(
        '--------------INSERT COMMENT verify email ---------------getDocumentById------emailExists--',
        emailExists
      );
      if (emailExists.length == 0) {
        res.status(422).json({ message: "Email doesn't exist!!" });
        console.error("Email doesn't exist!!");
        return;
      }
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
      console.error('Inserting comment failed!');
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
      console.error('Getting comments failed');
    }
  }

  client.close();
}

export default handler;
