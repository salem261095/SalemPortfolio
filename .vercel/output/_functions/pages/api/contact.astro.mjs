export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
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
      secret: "6LcHpi4rAAAAAJLLsNVDp4xEvRr0ys9LeGvPUlNm",
      response: String(recaptchaToken)
    })
  });
  const result = await verifyResponse.json();
  if (!result.success || result.score < 0.5) {
    return new Response("reCAPTCHA verification failed", { status: 403 });
  }
  console.log({ name, email, social, details });
  return new Response("Thanks! Your message has been sent successfully.", { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
