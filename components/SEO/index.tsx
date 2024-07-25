import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import settings from "../../settings/settings-development";

type PropTag = {
  openGraphType?: any
  url?: any
  title?: any
  description?: any
  image?: any
  createdAt?: any
  updatedAt?: any
}

const socialTags = ({
    openGraphType,
    url,
    title,
    description,
    image,
    createdAt,
    updatedAt,
  }: PropTag) => {
    const metaTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:site",
        content:
          settings &&
          settings.meta &&
          settings.meta.social &&
          settings.meta.social.twitter,
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:creator",
        content:
          settings &&
          settings.meta &&
          settings.meta.social &&
          settings.meta.social.twitter,
      },
      { name: "twitter:image:src", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:title", content: title },
      { name: "og:type", content: openGraphType },
      { name: "og:url", content: url },
      { name: "og:image", content: image },
      { name: "og:description", content: description },
      {
        name: "og:site_name",
        content: settings && settings.meta && settings.meta.title,
      },
      {
        name: "og:published_time",
        content: createdAt || new Date().toISOString(),
      },
      {
        name: "og:modified_time",
        content: updatedAt || new Date().toISOString(),
      },
    ];
  
    return metaTags;
};

type PropsSEO = {
  url?: any
  title?: any
  description?: any
  image?: any
  schemaType?: any
}

const SEO = ({ url, title, description, image, schemaType }: PropsSEO) => {
  const props = { url, title, description, image, schemaType };
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
    </Head>
  );
};

SEO.defaultProps = {
  url: "/",
  openGraphType: "website",
  schemaType: "Article",
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
};

SEO.propTypes = {
  url: PropTypes.string,
  openGraphType: PropTypes.string,
  schemaType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;