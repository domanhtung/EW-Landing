/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
                const gaScript = document.createElement('script');
                gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-215820292-1";
                gaScript.async = true;
                document.head.appendChild(gaScript);
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-215820292-1');`
              }}
            />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MZHZHR7');`
              }}
            />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '5236573753075681');
                fbq('track', 'PageView');`
              }}
            />
            <meta name="facebook-domain-verification" content="v0bpryr9ysr71v7mqxt6aaeyt0wd42" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="preload" as="font" href="https://db.onlinewebfonts.com/c/38d41072aa88a50711d4d50dd0d50f6b?family=Neue+Machina" type="text/css"/>
            <link rel="preload" as="font" href="//db.onlinewebfonts.com/c/031da03967812d134ed68febd3ba78a9?family=GT+America" type="text/css"/>
            <link rel="manifest" href="/manifest.json" />
            <script src='script.js' defer></script>
            <title>The Epic War - the 1st FPS blockchain game.</title>
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZHZHR7" height={0} width={0} style={{display: 'none', visibility: 'hidden'}} />
          </noscript>
          <noscript>
            <img height={1} width={1} style={{display: 'none'}} src="https://www.facebook.com/tr?id=5236573753075681&ev=PageView&noscript=1" alt="" />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument