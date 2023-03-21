import Head from "next/head";

export const Meta = () => {
  const title = "Dome - Automated Backups Made Easy";
  const description =
    "Take advantage of Dome's tooling to seamlessly backup files and other in memory stores. Its first class features make automating backups extremely easy. Get started for free!";

  const metas: { [key: string]: string } = {
    title,
    description,
    "og:type": "website",
    "og:site_name": "Dome",
    "og:title": title,
    "og:description": description,
    "og:url": "https://usedo.me",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:url": "https://usedo.me",
    "twitter:card": "summary_large_image",
  };

  const renderMetas = () =>
    Object.keys(metas).map((key, index) => {
      const value = metas[key];

      if (key === "title") return <title key={index}>{value}</title>;
      else if (key === "description")
        return <meta key={index} name="description" content={value} />;
      else return <meta key={index} property={key} content={value} />;
    });

  return (
    <Head>
      {renderMetas()}
      <link
        rel="icon"
        href="https://res.cloudinary.com/olamileke/image/upload/v1672075547/dome/assets/logos/icons8-papers-64_nsizg3.png"
      />
      <link rel="canonical" href="https://www.usedo.me" />
    </Head>
  );
};
