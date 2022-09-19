const {FacebookReader} = require('../reader/FacebookReader');
const {LazadaReader} = require('../reader/LazadaReader');
const { ShopeeReader } = require('../reader/ShopeeReader');
const { TiktokReader } = require('../reader/TikTokReader');

// reader = new FacebookReader();
// lazaReader = new LazadaReader();
reader = new ShopeeReader();
reader = new TiktokReader();
reader.readFile()