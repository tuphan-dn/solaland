const {
  CracoCompatibility,
  CracoWasm,
  CracoSilence,
  CracoAnalyzer,
} = require('@sentre/craco-plugins')

module.exports = {
  plugins: [
    {
      plugin: CracoCompatibility,
    },
    {
      plugin: CracoWasm,
    },
    {
      plugin: CracoSilence,
    },
    {
      plugin: CracoAnalyzer,
    },
  ],
}
