import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    // Ambil variabel dari .env (Server Side bisa baca ini)
    const formLink = process.env.GOOGLE_FORM_LINK;
    const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
    const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
    const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
    const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

    const formData = new URLSearchParams();
    formData.append(fieldIdName!, name);
    formData.append(fieldIdEmail!, email);
    formData.append(fieldIdMessage!, message);
    formData.append(fieldIdSocial!, social || "");

    // Kirim ke Google Form
    const googleResponse = await fetch(`${formLink}/formResponse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!googleResponse.ok) {
      throw new Error("Failed to send to Google Form");
    }

    return NextResponse.json("Success!", { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
