const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
        experimental: {
          modern: true,
        },
      },
    ],
    withTM,
  ],
  {
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4|glb|gltf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      })

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }

      return config
    },
  }
)
