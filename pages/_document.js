import Document, { Head, Main, NextScript } from 'next/document'

export default class GazeboDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}