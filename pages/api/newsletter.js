import {
  connectdatabase,
  getAllDocumentsWhere,
  insertDocument,
} from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectdatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      //Check if already exist the email
      const emailExists = await getAllDocumentsWhere(
        client,
        'newsletter',
        { _id: 1 },
        { email: userEmail }
      );
      //console.log(
      //   '--------------INSERT NEWSLETTER verify email ---------------getAllDocumentsWhere------emailExists--',
      //   emailExists
      // );
      if (emailExists.length !== 0) {
        res.status(422).json({ message: 'Email already exists!!' });
        console.error('Email already exists!!');
        return;
      }

      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
