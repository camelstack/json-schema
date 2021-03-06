import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' >
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@300;400&display=swap' rel='stylesheet' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@docsearch/css@3' />
        </Head>
        <body className='antialiased font-sans bg-slate-100 relative text-base font-normal text-slate-800 bg-bottom bg-cover bg-no-repeat'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument