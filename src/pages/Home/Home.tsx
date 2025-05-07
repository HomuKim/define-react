import React from "react";
import { motion } from "framer-motion";
import { useHomeEffects } from "../Home/useHomeEffects";
import styles from './Home.module.css';

const heroSequence = [
  {
    type: "h1",
    content: "건강한 삶을 시작하세요",
  },
  {
    type: "p",
    content: "최신 장비와 전문 트레이너가 여러분을 기다리고 있습니다.",
  },
  {
    type: "a",
    content: "지금 방문하기",
    href: "https://map.naver.com/p/entry/place/1960250523?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0151611&lat=37.6086138&c=15.00,0,0,0,dh",
    external: true,
    className: styles.ctaButton
  }
];

const cardData = [
  {
    href: "/event",
    className: `${styles.card} ${styles.cardEvent}`,
    title: "EVENT",
    desc: <>디파인더바디의<br />이벤트와 프로모션을<br /> 확인하세요</>
  },
  {
    href: "/trainers",
    className: `${styles.card} ${styles.cardStaff}`,
    title: "STAFF",
    desc: <>디파인더바디의<br />열정적인 스태프들을<br />만나보세요</>
  },
  {
    href: "/facilities",
    className: `${styles.card} ${styles.cardGym}`,
    title: "GYM",
    desc: <>디파인더바디의<br />최신 장비와 쾌적한<br />환경을 경험하세요</>
  },
  {
    href: "/contact",
    className: `${styles.card} ${styles.cardContact}`,
    title: "CONTACT US",
    desc: <>디파인더바디에게<br />궁금한 점이 있으면<br />문의해주세요</>
  }
];

const sequenceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }
  })
};

export default function Home() {
  useHomeEffects();

  return (
    <main>
      {/* 히어로 섹션 */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.heroContent}>
          {heroSequence.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={sequenceVariants}
              initial="hidden"
              animate="visible"
            >
              {item.type === 'h1' && <h1>{item.content}</h1>}
              {item.type === 'p' && <p>{item.content}</p>}
              {item.type === 'a' && (
                <a
                  href={item.href}
                  className={styles.ctaButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 콘텐츠 섹션 */}
      <motion.section
        className={styles.contentSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.featureCards}>
          {cardData.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <a href={card.href} className={card.className}>
                <h3 className="editable" contentEditable={false}>{card.title}</h3>
                <p className="editable" contentEditable={false}>{card.desc}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
