import language from '@google-cloud/language';

const getLangResults = async (clientReq) => {
  
  // Instantiates a client
  const client = new language.LanguageServiceClient();

  //Define the document object with properties content and type
  const document = {
    //The text to be analyzed
    content: clientReq,
    //The type of document
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  
  //return the result
  return result;
}

export default getLangResults;