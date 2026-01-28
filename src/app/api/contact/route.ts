import { NextResponse } from "next/server";
import { contactEmailTemplate } from "./emailTemplate";

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, message } = await request.json();

    // valida obrigatórios
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 },
      );
    }

    // valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    // valida telefone (até 11 dígitos)
    const phoneDigits = phone?.replace(/\D/g, "");
    if (phoneDigits && phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Telefone deve ter no máximo 11 dígitos" },
        { status: 400 },
      );
    }

    const html = contactEmailTemplate({
      name,
      email,
      company,
      phone: phoneDigits || "Não informado",
      message: message || "—",
    });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Previsios <no-reply@previsios.com>",
        to: ["contato@previsios.com"],
        reply_to: `${name} <${email}>`,
        subject: `Novo contato – ${company || "Site Previsios"}`,
        html,
        text: `Novo contato recebido de ${name} (${email})`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Erro Resend:", error);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro API contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
