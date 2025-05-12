import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import style from './Home.module.css';

const featureCards = [
  {
    title: "EVENT",
    description: "디파인더바디의<br>이벤트와 프로모션을<br> 확인하세요",
    link: "/event",
    image: "/images/index/event.jpg"
  },
  {
    title: "STAFF",
    description: "디파인더바디의<br>열정적인 스태프들을<br>만나보세요",
    link: "/trainers",
    image: "/images/index/staff.jpg"
  },
  {
    title: "GYM",
    description: "디파인더바디의<br>최신 장비와 쾌적한<br>환경을 경험하세요",
    link: "/facilities",
    image: "/images/Home/gym.JPEG"
  },
  {
    title: "CONTACT US",
    description: "디파인더바디에게<br>궁금한 점이 있으면<br>문의해주세요",
    link: "/contact",
    image: "/images/index/contact.jpg"
  },
];

const Home: React.FC = () => {
  // Hero Section 페이드인 효과용 state
  const [heroActive, setHeroActive] = useState(false);

  useEffect(() => {
    // 마운트 후 약간의 딜레이 뒤에 active 클래스를 추가
    const timer = setTimeout(() => setHeroActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 브라우저 탭 타이틀 지정 (React 19 공식 지원) */}
      <title>홈 | 디파인더바디 피트니스</title>
      {/* 필요하다면 메타태그도 추가 가능 */}
      <meta name="description" content="최신 장비와 전문 트레이너가 여러분을 기다리고 있습니다." />

      <div>
        <main>
          {/* Hero Section */}
          <section className={style['hero-section']}>
            <div className={style['hero-content']}>
              <h1
                className={`${style['animate-sequence']} ${heroActive ? style.active : ''}`}
                style={{ transitionDelay: '0.1s' }}
              >
                건강한 삶을 시작하세요
              </h1>
              <p
                className={`${style['animate-sequence']} ${heroActive ? style.active : ''}`}
                style={{ transitionDelay: '0.8s' }}
              >
                최신 장비와 전문 트레이너가 여러분을 기다리고 있습니다.
              </p>
              <a
                href="https://map.naver.com/p/entry/place/1960250523?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0151611&lat=37.6086138&c=15.00,0,0,0,dh"
                className={`${style['cta-button']} ${style['animate-sequence']} ${heroActive ? style.active : ''}`}
                style={{ transitionDelay: '1.3s' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                지금 방문하기
              </a>
            </div>
          </section>

          {/* Feature Cards Section */}
          <section className={style['content-section']}>
            <div className={style['feature-cards']}>
              {featureCards.map((card, idx) => (
                <ScrollReveal key={card.title} direction="up" delay={0.2 + idx * 0.15}>
                  <a
                    href={card.link}
                    className={`${style.card} ${style['card-' + card.title.replace(/\s/g, '-').toLowerCase()]}`}
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <h3>{card.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: card.description }} />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
