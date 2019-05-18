import Head from "next/head";
import Navigator from "components/DeckNavigator";
import { useRemark } from "hooks";

const RemarkableHead = ({ code }) => {
  useRemark(1000);
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <script src="https://remarkjs.com/downloads/remark-latest.min.js" />
      </Head>
      <style jsx>{`
        @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
        @import url(
          https://fonts.googleapis.com/css?family=Droid+Serif:400,
          700,
          400italic
        );
        @import url(
          https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,
          700,
          400italic
        );
        body {
          font-family: "Droid Serif";
        }

        h1,
        h2,
        h3 {
          font-family: "Yanone Kaffeesatz";
          font-weight: normal;
        }

        .remark-code,
        .remark-inline-code {
          font-family: "Ubuntu Mono";
        }
      `}</style>
      <textarea id="source" defaultValue={code} />
    </React.Fragment>
  );
};
export default RemarkableHead;
