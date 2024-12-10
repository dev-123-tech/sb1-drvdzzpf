import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOrderNotification = async (orderData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contactniwalma@gmail.com',
    subject: 'Nouvelle commande - Niwalma Shop',
    html: `
      <h2>Nouvelle commande reçue</h2>
      <p><strong>Client:</strong> ${orderData.name}</p>
      <p><strong>Email:</strong> ${orderData.email}</p>
      <p><strong>Téléphone:</strong> ${orderData.phone}</p>
      <p><strong>Total:</strong> ${orderData.total} XOF</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendCustomOrderNotification = async (orderData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contactniwalma@gmail.com',
    subject: 'Nouvelle commande sur mesure - Niwalma Shop',
    html: `
      <h2>Nouvelle commande sur mesure reçue</h2>
      <p><strong>Client:</strong> ${orderData.nom} ${orderData.prenom}</p>
      <p><strong>Téléphone:</strong> ${orderData.telephone}</p>
      <p><strong>Mesures:</strong></p>
      <ul>
        <li>Taille: ${orderData.taille} cm</li>
        <li>Manche: ${orderData.manche} cm</li>
        <li>Épaule: ${orderData.epaule} cm</li>
        <li>Poitrine: ${orderData.poitrine} cm</li>
        <li>Pantalon: ${orderData.pantalon} cm</li>
        <li>Cuisse: ${orderData.cuisse} cm</li>
      </ul>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendContactNotification = async (contactData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contactniwalma@gmail.com',
    subject: `Nouveau message - ${contactData.subject}`,
    html: `
      <h2>Nouveau message reçu</h2>
      <p><strong>De:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Sujet:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};