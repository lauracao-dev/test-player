import { initialiseDevice, initialiseLinearPlayer, getLinearPlayerInstance } from "xstrm-js-device";

await initialiseDevice();
await initialiseLinearPlayer();
const player = getLinearPlayerInstance();

const play = async (url) => {
  await player.play({
    protocol: "http",
    sources: [
      {
        src: url,
        type: "application/x-mpegurl",
      },
    ],
    onPlayBackEvent: (event) => {
      console.log(event);
    },
  });

  const playerEl = document.getElementById("device-linear-player");
  if (playerEl) playerEl.style.zIndex = "1";
};

console.log("test start");

await play(
  "https://cdnapi.kaltura.com/p/2503451/sp/250345100/playManifest/entryId/1_gb6tjmle/protocol/https/format/applehttp/a.m3u8"
);
console.log("player count: 1");

setTimeout(async () => {
  await play("https://npc.cdn.7livecloud.io/hls/live/SYD1/masterSD.m3u8");
  console.log("player count: 2");
}, 5000);

setTimeout(async () => {
  await play("https://npc.cdn.7livecloud.io/hls/live/SYD2/masterSD.m3u8");
  console.log("player count: 3");
}, 10000);

setTimeout(async () => {
  await play("https://9now-livestreams.akamaized.net/hls/live/2007330/ch9-syd/master.m3u8");
  console.log("player count: 4");
  console.log("test end");
}, 15000);

