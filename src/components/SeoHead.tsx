import React, { useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  jsonLdSchemas?: object[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = `${COMPANY_DETAILS.name} | Hand Assembly, Packaging & Outsourced Labour Solutions South Africa`,
  description = COMPANY_DETAILS.summary,
  canonicalUrl = 'https://www.alkanet.co.za',
  ogImage = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
  type = 'website',
  jsonLdSchemas = []
}) => {
  useEffect(() => {
    // Set Document Title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (nameAttr: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', 'Hand Assembly South Africa, Packaging Services, Product Assembly, Kitting Services, Box Assembly, Pretoria Packaging, Johannesburg Assembly, Gauteng Packaging, File Folding, Outsourced Labour');
    setMeta('name', 'author', COMPANY_DETAILS.name);
    setMeta('name', 'robots', 'index, follow');

    // OpenGraph Meta
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', COMPANY_DETAILS.name);

    // Twitter Card Meta
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Organization & LocalBusiness JSON-LD Schema
    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.alkanet.co.za/#organization',
      name: COMPANY_DETAILS.name,
      legalName: COMPANY_DETAILS.name,
      url: 'https://www.alkanet.co.za',
      logo: 'https://www.alkanet.co.za/logo.png',
      image: ogImage,
      description: COMPANY_DETAILS.summary,
      telephone: COMPANY_DETAILS.phones[0].display,
      email: COMPANY_DETAILS.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 4, Gateway Industrial Park, Centurion',
        addressLocality: 'Pretoria / Johannesburg',
        addressRegion: 'Gauteng',
        postalCode: '0157',
        addressCountry: 'ZA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -25.8603,
        longitude: 28.1894
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Gauteng' },
        { '@type': 'City', name: 'Pretoria' },
        { '@type': 'City', name: 'Johannesburg' },
        { '@type': 'Country', name: 'South Africa' }
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '13:00'
        }
      ],
      sameAs: [
        'https://www.facebook.com/alkanetholdings',
        'https://www.linkedin.com/company/alkanet-holdings'
      ]
    };

    // Inject JSON-LD Script
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify([baseOrganizationSchema, ...jsonLdSchemas]);
    document.head.appendChild(script);

  }, [title, description, canonicalUrl, ogImage, type, jsonLdSchemas]);

  return null;
};
