import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env)
const fileName = './token.json';
const alreadyExists = fs?.existsSync(fileName) ? true : false;
//if file exists, do nothing

const createToken = () => {
    if (typeof fs !== 'undefined' && !alreadyExists) {
        fs.writeFile(fileName, JSON.stringify({
            "type": "service_account",
            "project_id": "credible-flag-358617",
            "private_key_id": process.env.PRIVATE_KEY_ID,
            "private_key": process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
            "client_email": "sentiment-analysis@credible-flag-358617.iam.gserviceaccount.com",
            "client_id": process.env.CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sentiment-analysis%40credible-flag-358617.iam.gserviceaccount.com"
        }, null, 2), function writeJSON(err) {
            if (err)
                return console.log(err);
            console.log('updated config.json');
            fs.chmod(fileName, 777, (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Changed file permissions');
                }
            });
        });

    }
}

export default createToken