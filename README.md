# next-email-service

A simple email sending system using Next.js and [Resend](https://resend.com)

---

## Environment Variables

Create a `.env.local` file and add the following:

```env
RESEND_API_KEY=your_resend_api_key
````

> Sign up and generate your API key at [https://resend.com](https://resend.com)

---

## Run the Project

```bash
npm run dev
```

Then open your browser at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
next-email-service/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.js         # API route for sending email
│   └── page.js                  # Web form to send email
├── .env.local                   # Contains RESEND_API_KEY
├── package.json
└── README.md
```

---

## Sample Email Payload

Send a POST request to `/api/send-email`:

```json
{
  "to": "someone@example.com",
  "subject": "Test from Next.js",
  "text": "This is a test message from the system."
}
```

---

## Notes

* `onboarding@resend.dev` is the default sender email provided by Resend for unverified domains.
* To ensure emails reach the inbox (not spam), you should verify your domain and configure DNS settings in your Resend dashboard.

---