import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />

        {/*This adds next.js props to react: */}
        <NextScript />
      </body>
    </Html>
  )
}
