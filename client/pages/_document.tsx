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
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
    </body>
  </Html>
)

export default Document
