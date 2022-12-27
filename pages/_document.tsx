import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { chakra } from "@chakra-ui/react";

const Body = chakra("body");
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://res.cloudinary.com/olamileke/image/upload/v1672075547/dome/assets/logos/icons8-papers-64_nsizg3.png"
            rel="icon"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Body
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "0",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}
