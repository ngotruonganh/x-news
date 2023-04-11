import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Cloapedia - Stylish Magazine Blog Template</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />
            </Head>
            <main> 
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
