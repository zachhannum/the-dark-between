import { useEffect, useState } from "react";

export const usePlatform = () => {
  const [platform, setPlatform] = useState("unknown");
  useEffect(() => {
    const platform = navigator.userAgentData?.platform;
    if (platform) {
      console.log(platform);
      setPlatform(platform);
    }
    // try to detect platform using navigator.platform
    else if (navigator.platform) {
      console.log(navigator.platform);
      setPlatform(navigator.platform);
    }
  }, []);
  return platform;
};
