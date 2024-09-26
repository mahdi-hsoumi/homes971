import { mailOptions, transporter } from '@/app/config/nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = req.body;
  // if (!data.name || !data.email || !data.phone || !data.message) {
  //   return res.status(200).json({ message: 'Bad Request' });
  // }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.email,
      text: 'This is a test string',
      html: '<h1>This is a test</h1><p>Some body Text</p>',
    });

    // return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    // return res.status(200).json({ message: 'Bad Request' });
  }
}
