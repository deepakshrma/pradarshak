import Head from "next/head";
import meta from "../docs/.meta-data.json";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
    </Head>
    <style jsx global>{`
      body {
        font-family: "Noto Sans";
      }
      #topics {
        list-style: none;
        display: flex;
        justify-content: center;
      }
      #topics > .card {
        margin: 10px 32px;
      }
    `}</style>
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Slide Decks</h1>
      <hr />
      <div id="topics">
        {
        meta[0].docs.map(({ text, name }) => (
          <div className="card" style={{ width: "18rem" }} key={name}>
            {/* <img className="card-img-top" alt="Card image cap" /> */}
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {text.substr(0, 50)}
              </p>
              <Link
                href={{
                  pathname: "/presentation",
                  query: { name: "name", text }
                }}
              >
                <a>{name}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
