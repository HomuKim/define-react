import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useHomeEffects() {
  const navigate = useNavigate();

  // 1. 페이지 진입 시 페이드아웃 클래스 제거
  useEffect(() => {
    document.body.classList.remove("fade-out");
  }, []);

  // 2. 내부 링크 핸들러 (컴포넌트에서 직접 사용)
  const handleInternalLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    if (url.startsWith("http")) return;
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => navigate(url), 700);
  };

  return { handleInternalLink };
}
