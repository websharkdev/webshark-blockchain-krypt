import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { fonts } from '@/config/constants'

const Document = () => (
  <Html lang="en">
    <Head>
      {fonts.map((item: string) => (
        <link href={item} rel="stylesheet" key={item} />
      ))}
    </Head>
    <body>
      <Main />
      <NextScript />

      <Script
        strategy="lazyOnload"
        id="google-analytics__lib"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SM1PM8W9TH`}
      />

      <Script id="google-analytics__connect" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SM1PM8W9TH', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
    </body>
  </Html>
)

export default Document
