import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x24923e6bD72bDc63278f7AEfdc2734af15A618c3"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "One Octave",
        description: "This NFT will give you access to FlinkuDAO!",
        image: readFileSync("scripts/assets/piano.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
