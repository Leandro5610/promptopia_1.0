import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Descubra e Compartilhe AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='pt-br'>
    <head>
      <link rel="icon" href="/assets/images/logo.svg"></link>
    </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
