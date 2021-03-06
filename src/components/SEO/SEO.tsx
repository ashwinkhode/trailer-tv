import {Helmet} from 'react-helmet'

const SEO = ({
  description = "Enjoy the trailers you love, uploaded original trailers exclusively, share it all with friends, family, and the world on TrailerTV. Watch Movies & Shows Trailers online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
  title = "TrailerTV - A Platform for Trailers",
}) => {
  return (
    <Helmet>
      <link rel="icon" href="../../assets/icons/favicon.png" />
      <title>TrailerTV - A Platform for Trailers</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://trailer-tv.netlify.app/" />
      <meta property="og:title" content="TrailerTV - A Platform for Trailers" />
      <meta property="og:description" content="Enjoy the trailers you love, uploaded original trailers exclusively, share it all with friends, family, and the world on TrailerTV. Watch Movies & Shows Trailers online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
      <meta property="og:image" content="https://trailer-tv.netlify.app/assets/banner.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://trailer-tv.netlify.app/" />
      <meta property="twitter:title" content="TrailerTV - A Platform for Trailers" />
      <meta property="twitter:description" content="Enjoy the trailers you love, uploaded original trailers exclusively, share it all with friends, family, and the world on TrailerTV. Watch Movies & Shows Trailers online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
      <meta property="twitter:image" content="https://trailer-tv.netlify.app/assets/banner.png" />
    </Helmet>
  )
}

export default SEO