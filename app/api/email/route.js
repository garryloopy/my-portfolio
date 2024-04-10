const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  // console.log(process.env.EMAIL_USER);
  // console.log(process.env.EMAIL_PASSWORD);

  try {
    let data = await req.json();

    const mainOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Website Portfolio Contact Entry from ${data.name}`,
      html: `
      <section>
        <h2>Website Portfolio Contact Entry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      </section>
    `,
    };

    transporter.sendMail(mainOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
