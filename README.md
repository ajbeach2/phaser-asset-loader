Phaser asset json loader for webpack

install with npm, then add this to your webpack.config

```javascript
      {
        test: /\.assets.json$/,
        loader: 'phaser-asset-loader',
        exclude: '/node_modules'
      },
```
