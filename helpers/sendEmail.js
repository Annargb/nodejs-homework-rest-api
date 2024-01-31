const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();
const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "annasamoylenko2015@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
