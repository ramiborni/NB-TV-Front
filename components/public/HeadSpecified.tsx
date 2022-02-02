import Head from "next/head";

const HeadSpecified = ({title} : {title:string}) => {
  return (
    <>
      <Head>
        <title>NB NEWS - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default HeadSpecified;
