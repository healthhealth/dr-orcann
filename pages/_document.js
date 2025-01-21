import { Html, Head, Main, NextScript } from 'next/document';

// Componente para Schema Markup (pode ser separado em outro arquivo se preferir)
const SchemaMarkup = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: 'Dr. Méndes e Silva',
        description:
          'Especialista em Cannabis Medicinal, Psiquiatria e Neurodivergência',
        url: 'https://dr.orcann.com',
        image: 'https://dr.orcann.com/imagem-do-doutor.jpg', // Substitua pela URL da imagem
        telephone: '+5511988888888', // Substitua pelo telefone
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Gomes de Carvalho, 621',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          postalCode: '04547-002',
          addressCountry: 'BR',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        specialty: ['Cannabis Medicinal', 'Psiquiatria', 'Neurodivergência'],
      }),
    }}
  />
);

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          Dr. Méndes e Silva - Cannabis Medicinal, Psiquiatria e Neurodivergência
        </title>
        <meta
          name="description"
          content="Dr. Méndes e Silva oferece tratamento especializado em medicina cannabis, psiquiatria e acompanhamento para pessoas neurodivergentes em São Paulo - SP. Agende sua consulta!"
        />
        <meta
          name="keywords"
          content="cannabis medicinal, psiquiatria, neurodivergência, São Paulo, médico, tratamento, consulta, TDAH, TEA, autismo, giftedness, superdotação, Dr. Méndes e Silva, saude mental, bem estar"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr.orcann.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dr.orcann.com" />
        <meta
          property="og:title"
          content="Dr. Méndes e Silva - Cannabis Medicinal, Psiquiatria e Neurodivergência"
        />
        <meta
          property="og:description"
          content="Dr. Méndes e Silva oferece tratamento especializado em medicina cannabis, psiquiatria e acompanhamento para pessoas neurodivergentes em São Paulo - SP."
        />
        <meta
          property="og:image"
          content="https://dr.orcann.com/imagem-principal.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dr.orcann.com" />
        <meta
          property="twitter:title"
          content="Dr. Méndes e Silva - Cannabis Medicinal, Psiquiatria e Neurodivergência"
        />
        <meta
          property="twitter:description"
          content="Dr. Méndes e Silva oferece tratamento especializado em medicina cannabis, psiquiatria e acompanhamento para pessoas neurodivergentes em São Paulo - SP."
        />
        <meta
          property="twitter:image"
          content="https://dr.orcann.com/imagem-principal.jpg"
        />

        {/* Adicionar Schema Markup aqui */}
        <SchemaMarkup />

        {/* Fonte Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}