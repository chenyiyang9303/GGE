import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CONSTANTS } from "@/constants/links";

// 全局标记防止重复初始化
let isCalInitialized = false;

export const useCalEmbed = () => {
  const initRef = useRef(false);
  
  useEffect(() => {
    // 防止重复初始化
    if (isCalInitialized || initRef.current) return;
    
    initRef.current = true;
    console.log("🔧 Cal.com初始化开始...");
    
    (async function () {
      try {
        console.log("📞 调用getCalApi...");
        const cal = await getCalApi({ namespace: CONSTANTS.CALCOM_NAMESPACE });
        console.log("✅ getCalApi成功:", cal);
        
        console.log("🎨 设置UI配置...");
        cal("ui", {
          styles: {
            branding: {
              brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
            },
          },
          hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
          layout: CONSTANTS.CALCOM_LAYOUT as any,
        });
        console.log("✅ UI配置设置完成");
        console.log("🎉 Cal.com初始化完成！");
        isCalInitialized = true;
        
      } catch (error) {
        console.error("❌ Cal.com初始化失败:", error);
        initRef.current = false; // 失败时允许重试
      }
    })();
  }, []);

  return {
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    link: CONSTANTS.CALCOM_LINK,
    layout: CONSTANTS.CALCOM_LAYOUT,
  };
};