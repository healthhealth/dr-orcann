import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';
import ContactInfo from '@/components/ContactInfo';

const Home = () => {
  const services = [
    {
      title: 'Cannabis Medicinal',
      description:
        'Tratamento baseado em evidências científicas para diversas condições.',
      details: (
        <ul className="list-disc pl-4 space-y-2 text-gray-200">
          <li>• Manejo de dores crônicas</li>
          <li>• Tratamento de ansiedade e depressão</li>
          <li>• Acompanhamento neurológico especializado</li>
          <li>
            <Link href="/cannabis" passHref className="text-white hover:underline">
                Saiba Mais
            </Link>
          </li>
        </ul>
      ),
    },
    {
      title: 'TDAH e Neurodivergência',
      description: 'Atendimento especializado e personalizado.',
      details: (
        <ul className="list-disc pl-4 space-y-2 text-gray-200">
          <li>• Avaliação completa e personalizada</li>
          <li>• Estratégias práticas para o dia a dia</li>
          <li>• Suporte contínuo ao desenvolvimento</li>
        </ul>
      ),
    },
    {
      title: 'Psiquiatria',
      description: 'Tratamento psiquiátrico baseado em evidências.',
      details: (
        <ul className="list-disc pl-4 space-y-2 text-gray-200">
          <li>• Avaliação psiquiátrica completa</li>
          <li>• Acompanhamento personalizado</li>
          <li>• Tratamento focado em resultados</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          Dr. Méndes e Silva | Cannabis Medicinal, Psiquiatria e Neurodivergência
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
          content="Dr. Méndes e Silva | Cannabis Medicinal, Psiquiatria e Neurodivergência"
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
          content="Dr. Méndes e Silva | Cannabis Medicinal, Psiquiatria e Neurodivergência"
        />
        <meta
          property="twitter:description"
          content="Dr. Méndes e Silva oferece tratamento especializado em medicina cannabis, psiquiatria e acompanhamento para pessoas neurodivergentes em São Paulo - SP."
        />
        <meta
          property="twitter:image"
          content="https://dr.orcann.com/imagem-principal.jpg"
        />
      </Head>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(
              180deg,
              #e5e7eb 12.5%,
              #e5e7eb 12.5%,
              transparent 12.5%,
              transparent 25%,
              #e5e7eb 25%,
              #e5e7eb 37.5%,
              transparent 37.5%,
              transparent 50%,
              #e5e7eb 50%,
              #e5e7eb 62.5%,
              transparent 62.5%,
              transparent 75%,
              #e5e7eb 75%,
              #e5e7eb 87.5%,
              transparent 87.5%,
              transparent 100%
            )`,
          backgroundSize: 'auto 32px',
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-4 text-gray-900">
              Dr. Méndes e Silva
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Cannabis medicinal • Psiquiatria • Neurodivergência
            </p>
            <p className="text-lg text-gray-500 mb-8">
              {/* Link para o modal do Google Meu Negócio no endereço */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Implementar a lógica de abrir o modal aqui
                }}
                className="hover:underline"
              >
                Gomes de Carvalho, 621 - Vila Olímpia - São Paulo
              </a>
            </p>
            <a href="https://wa.me/5511988888888">
              <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-700 transition-colors duration-300 text-lg rounded-none">
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Mim (Ajustar para ser um card com modal) */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Foto, Nome e CRM (substituir pelos seus dados) */}
          <img
            src="/placeholder.png"
            alt="Dr. Méndes e Silva"
            className="w-48 h-48 mx-auto mb-4"
          />
          <h2 className="text-2xl font-serif text-gray-900">
            Dr. Méndes e Silva
          </h2>
          <p className="text-gray-600">CRM 123456</p>
          <button
            className="mt-4 bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition-colors duration-300 rounded-none"
          >
            Saiba Mais
          </button>
          {/* Modal "Sobre Mim" (implementar a lógica de abrir/fechar) */}
          {/* Conteúdo do modal: texto sobre você, portfólio, etc. */}
        </div>
      </section>

      {/* Specialties Section */}
      <section id="services" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-16 font-serif text-gray-900">
            Especialidades
          </h2>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl mb-8 font-serif text-gray-900">Contato</h2>
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                {/* Link para abrir o modal do Google Meu Negócio */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Implementar a lógica de abrir o modal aqui
                  }}
                  className="hover:underline"
                >
                  Gomes de Carvalho, 621
                  <br />
                  Vila Olímpia - São Paulo
                  <br />
                  CEP: 04547-002
                </a>
              </p>
              {/* Substituir pelos seus contatos */}
              <ContactInfo
                icon={Phone}
                text="(11) 99999-9999"
                href="tel:+551199999999"
              />
              <ContactInfo
                icon={Mail}
                text="contato@drmendesesilva.com.br"
                href="mailto:contato@drmendesesilva.com.br"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
