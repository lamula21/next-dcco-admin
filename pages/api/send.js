import { Resend } from 'resend';
import { DefaultEmail } from '@/components/defaultEmail'
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const {content, to, subject} = req.body


  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to,
      subject,
      react: <DefaultEmail data={content}/>,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
