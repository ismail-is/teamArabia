const isGithubPages = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isGithubPages ? '/teamArabia' : '',
  assetPrefix: isGithubPages ? '/ismail-is/' : '',
};