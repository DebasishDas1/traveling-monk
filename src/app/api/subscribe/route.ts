import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Traveling Monk <hello@thetravelingmonk.in>",
      to: email,
      subject: "Welcome to Traveling Monk 🏔️",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Welcome to the Tribe 🌿</h2>
          <p>You’re now part of Traveling Monk.</p>
          <p>Expect stories, hidden trails, and early trek drops.</p>
          <br/>
          <p>See you on the mountains,</p>
          <strong>— Team Traveling Monk</strong>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}