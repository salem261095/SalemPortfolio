export async function POST({ request }: { request: Request }) {
    const form = await request.formData();
  
    const name = form.get("name");
    const email = form.get("email");
    const social = form.get("social");
    const details = form.get("details");
    const recaptchaToken = form.get("recaptcha");
  
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: import.meta.env.RECAPTCHA_SECRET_KEY!,
        response: String(recaptchaToken),
      }),
    });
  
    const result = await verifyResponse.json();
  
    if (!result.success || result.score < 0.5) {
      return new Response("reCAPTCHA verification failed", { status: 403 });
    }
  
    // TODO: send email or store data
    console.log({ name, email, social, details });
  
    return new Response("Thanks! Your message has been sent successfully.", { status: 200 });
  }
  