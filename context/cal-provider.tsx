"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalContextType {
  isReady: boolean;
  openModal: (eventType: string) => void;
}

const CalContext = createContext<CalContextType | undefined>(undefined);

export function CalProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [calInstance, setCalInstance] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    
    console.log("🔧 全局Cal.com初始化开始...");
    
    (async function () {
      try {
        console.log("📞 调用getCalApi...");
        const cal = await getCalApi({ namespace: "startup-consulting" });
        
        if (!mounted) return; // 防止组件卸载后设置状态
        
        console.log("✅ getCalApi成功:", cal);
        
        console.log("🎨 设置UI配置...");
        cal("ui", {
          styles: {
            branding: {
              brandColor: "#3b82f6",
            },
          },
          layout: "month_view",
        });
        console.log("✅ UI配置设置完成");
        
        setCalInstance(cal);
        setIsReady(true);
        console.log("🎉 Cal.com全局初始化完成！");
        
        // 检查全局Cal对象
        setTimeout(() => {
          console.log("🔍 全局Cal对象检查:", (window as any).Cal);
          console.log("🔍 Cal对象类型:", typeof (window as any).Cal);
        }, 1000);
        
      } catch (error) {
        console.error("❌ Cal.com初始化失败:", error);
        if (mounted) {
          setIsReady(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []); // 空依赖数组，只在组件挂载时运行一次

  const openModal = (eventType: string) => {
    console.log("🚀 CalProvider openModal被调用:", eventType);
    console.log("🔍 isReady:", isReady);
    console.log("📞 calInstance:", calInstance);
    console.log("🌐 window.Cal:", (window as any).Cal);
    
    if (isReady && typeof window !== 'undefined' && (window as any).Cal) {
      console.log("✅ 尝试打开Cal.com模态框...");
      try {
        (window as any).Cal('openModal', eventType);
        console.log("🎉 Cal.com模态框调用成功");
      } catch (error) {
        console.error("❌ Cal.com调用失败:", error);
      }
    } else {
      console.warn("⚠️ Cal.com还没准备好:");
      console.warn("  - isReady:", isReady);
      console.warn("  - window:", typeof window !== 'undefined');
      console.warn("  - Cal存在:", !!(window as any).Cal);
    }
  };

  return (
    <CalContext.Provider value={{ isReady, openModal }}>
      {children}
    </CalContext.Provider>
  );
}

export function useCal() {
  const context = useContext(CalContext);
  if (context === undefined) {
    throw new Error("useCal must be used within a CalProvider");
  }
  return context;
}