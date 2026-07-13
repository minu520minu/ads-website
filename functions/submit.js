export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    let emailBody = "New Form Submission:\n\n";

    for (const [key, value] of formData.entries()) {
      emailBody += `${key}: ${value}\n`;
    }

    const { EmailMessage } = await import("cloudflare:email");

    // Replace the first email address with one using your custom domain extension
    const msg = new EmailMessage(
      "no-reply@yourdomain.com", 
      "yuzhou9421@gmail.com",
      emailBody
    );

    await context.env.EMAIL.send(msg);

    return new Response("Thank you! Your message has been sent.", { status: 200 });

  } catch (error) {
    return new Response(`Error sending email: ${error.message}`, { status: 500 });
  }
}
