"use client"
import { useState } from "react";

export default function HomePage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("ทดสอบจาก Next.js + Resend");
  const [text, setText] = useState("นี่คืออีเมลทดสอบที่ส่งจากหน้าเว็บ");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ กำลังส่ง...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, text }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ ส่งเมลสำเร็จ!");
      } else {
        console.error("Send error:", data.error);
        setStatus("❌ ส่งเมลไม่สำเร็จ");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("❌ เกิดข้อผิดพลาด");
    }
  };

  return (
    <main style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>📧 ทดสอบส่งอีเมล</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>To (Email):</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Message:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "0.25rem",
          }}
        >
          ส่งอีเมล
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </main>
  );
}
