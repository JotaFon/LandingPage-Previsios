type ContactEmailProps = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export function contactEmailTemplate({
  name,
  email,
  company,
  phone,
  message,
}: ContactEmailProps) {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="x-apple-disable-message-reformatting" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #F4F4F4;
        font-family: Arial, sans-serif;
      }
    </style>
  </head>

  <body>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F4">
      <tr>
        <td align="center" style="padding:20px">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#ffffff;border-radius:10px;overflow:hidden">

            <tr>
              <td style="padding:30px;background:#0A192F;color:#ffffff;text-align:center">
                <h1 style="margin:0">PREVISIOS</h1>
                <p style="margin:5px 0 0;color:#9AAABF;font-size:12px">
                  Novo contato de lead
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:30px;color:#333">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Empresa:</strong> ${company}</p>
                <p><strong>Telefone:</strong> ${phone}</p>

                <hr style="margin:20px 0" />

                <p><strong>Mensagem:</strong></p>
                <p style="line-height:1.6">${message}</p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px;background:#F0F4F8;text-align:center;font-size:12px;color:#666">
                PREVISIOS · contato@previsios.com
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
