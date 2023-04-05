import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="vi">
                <Head >
                    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900" rel="stylesheet" />
                    <link href="/assets/css/bootstrap.css" rel="stylesheet" />
                    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="/assets/css/style.css" rel="stylesheet" />
                    <link href="/assets/css/responsive.css" rel="stylesheet" />
                    <link href="/assets/css/colors.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
