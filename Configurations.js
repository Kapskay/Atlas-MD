require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "260776642930";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "Put your alternative mongodb url here";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Creation`;
global.author = process.env.AUTHOR || "by: Nipsy'";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split("NIPSY-HUS-TLE🇿🇲");

module.exports = {
  mongodb: global.mongodb,
};
