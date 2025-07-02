import Head from "next/head";

export default function Seo({ title, description, children }) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </Head>
  );
}
