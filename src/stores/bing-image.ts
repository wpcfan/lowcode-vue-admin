import { defineStore } from "pinia";
import { externalClient } from "~/networking";

interface BingImageState {
  bingImageUrl: string | null;
}

export const useBingImageStore = defineStore("bing-image", {
  state: (): BingImageState => ({
    bingImageUrl: null,
  }),
  actions: {
    async fetchBingImage() {
      try {
        const response = await externalClient.get(
          "https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US"
        );
        this.bingImageUrl = response.data.url; // 提取图片 URL
      } catch (error) {
        throw new Error("Failed to fetch Bing daily image");
      }
    },
  },
});
