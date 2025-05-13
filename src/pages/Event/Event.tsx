import { useEffect, useState } from 'react';
import style from './Event.module.css';

interface EventData {
  image: string;
  title: string;
  description: string;
}

const events: EventData[] = [
  {
    image: '/images/event/event-banner1.jpg',
    title: '[디파인더바디짐] 5월 한정 특가 이벤트!',
    description: '가정의 달을 맞아,<br>2인 동반 연회원권 등록 시 → 399,000원!<br>(정가 468,000원 → 파격 할인!)<br><br>게다가 1인만 연회원권 등록해도 무료 PT 제공!<br>혼자 등록해도 혜택은 확실하게 챙겨가세요!<br><br>업그레이드된 머신존 → 머신 7종 추가입고!<br>해머스트랭스 정식 매장 + 천국의 계단 6대 보유<br><br>✔️ 총 300평 초대형 공간 (2,3,4층)<br>✔️ 탈의실 / 필라테스존 / 유산소존 완비<br>✔️ 수건 무료 / 무료 주차 / 시작일 조정 가능<br>✔️ 하루 무제한 입장 가능<br><br>2025 KCIA 선정 성북구 우수 헬스장<br><br>지금 바로 디파인더바디짐에서<br>가성비+시설+PT 혜택까지 모두 잡으세요!'
  },
  {
    image: 'images/event/event-banner2.jpg',
    title: '[SPECIAL COMBO 이벤트]',
    description: '회원권 + 그룹PT + 개인PT<br>한 번에! 제대로! 알차게!<br><br>✨디파인더바디짐이 준비한<br>스페셜 콤보 패키지 출시!<br><br>⸻<br><br>구성<br>📌 헬스 회원권 4개월<br>📌 그룹PT 8회<br>📌 1:1 개인PT 2회<br><br>→ 총 408,000원!<br><br>⸻<br><br>헬스장 등록도 하고,<br>PT도 부담 없이 체험하고,<br>그룹 운동으로 재미까지!<br>지금이 바로 운동 루틴 잡을 타이밍!'
  },
  {
    image: 'images/event/event-banner3.png',
    title: '✅ [친구소개 EVENT 진행 중!]',
    description: '디파인더바디짐에서 함께 운동할 친구 있으신가요?<br>지금 소개해주시면 선물은 저희가 준비할게요!<br><br>⸻<br><br>🎁 이벤트 혜택<br><br>👥 1명 소개 시<br>→ 리유저블 텀블러 증정!<br>(기존회원 & 신규회원 모두 증정)<br><br>👥 3명 이상 소개 시<br>→ 손목 스트랩 or 폼롤러 택 1 증정!<br>(기존회원 대상)<br><br>⸻<br><br>💪 주변에 운동 같이 시작하고 싶은 분 계시다면<br>지금 디파인더바디짐으로 초대해주세요!'
  }
];

const Event: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [transitionState, setTransitionState] = useState<'stable' | 'transitioning'>('stable');
  const [isFading, setIsFading] = useState(false);


  // 페이지 로드 시 페이드인 효과
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // 이벤트 변경 애니메이션
  const changeEvent = (direction: number) => {
    if (isFading) return;
    setIsFading(true); // fade-out 시작
    setTimeout(() => {
      setCurrentIndex(prev => (prev + direction + events.length) % events.length);
      setIsFading(false); // fade-in 시작
    }, 300); // 트랜지션 시간과 맞춤
  };

  return (
    <>
      <title>이벤트 | 디파인더바디 피트니스</title>

      <meta name="description" content="최신 장비와 전문 트레이너가 여러분을 기다리고 있습니다." />
      
      <div className={`${style.container} ${isMounted ? style.mounted : ''}`}>
        <main>
          {/* Hero Section */}
          <section className={style['event-hero']}>
            <h1>목표 달성의 부스터, 지금 시작됩니다</h1>
            <p>회원님들을 위한 특별한 이벤트를 확인하세요</p>
          </section>

          {/* Event Content */}
          <section className={style['event-content']}>
            <div className={style['event-image']}>
              <img
                src={events[currentIndex].image}
                alt="이벤트 배너"
                className={isFading ? style['fade-out'] : style['fade-in']}
              />
              <button
                className={style['prev-btn']}
                onClick={() => changeEvent(-1)}
                aria-label="이전 이벤트"
              >
                &#10094;
              </button>
              <button
                className={style['next-btn']}
                onClick={() => changeEvent(1)}
                aria-label="다음 이벤트"
              >
                &#10095;
              </button>
            </div>

            <div className={style['event-description']}>
              <h2>{events[currentIndex].title}</h2>
              <p dangerouslySetInnerHTML={{ __html: events[currentIndex].description }} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};


export default Event;
