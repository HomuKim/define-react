import React, { useState, useEffect } from 'react';
import style from './Trainers.module.css'; // CSS Module 사용 가정

interface Trainer {
    id: number;
    name: string;
    thumbnail: string;
    instagram?: string;
    profiles: string[];
    career?: string;
    reviews?: string[];
    role: 'admin' | 'trainer';
}

const trainers: Trainer[] = [
    {
        id: 1,
        name: '김트레이너',
        thumbnail: '/images/member/trainer1.jpg',
        instagram: 'https://instagram.com/trainer1',
        profiles: [
            '/images/member/trainer1-profile1.jpg',
            '/images/member/trainer1-profile2.jpg'
        ],
        career: '/images/member/trainer1-career.jpg',
        reviews: [
            '/images/member/trainer1-review1.jpg',
            '/images/member/trainer1-review2.jpg'
        ],
        role: 'trainer'
    },
    // 추가 트레이너 데이터...
];

const Trainers: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
    const [activeTab, setActiveTab] = useState<'profile' | 'career' | 'review' | 'contact'>('profile');
    const [currentProfileImageIndex, setCurrentProfileImageIndex] = useState(0);

    // 모달 오픈 시 스크롤 잠금
    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [modalOpen]);

    const openModal = (trainer: Trainer) => {
        setSelectedTrainer(trainer);
        setModalOpen(true);
        setActiveTab('profile');
        setCurrentProfileImageIndex(0);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTrainer(null);
    };

    return (
        <>
            <div className={style['trainers-page']}>
                {/* 헤더 섹션 */}
                <section className={style['trainer-hero']}>
                    <div className={style['hero-content']}>
                        <h1>디파인더바디 트레이너</h1>
                        <p>프로페셔널 트레이너들을 소개합니다</p>
                    </div>
                </section>

                {/* 트레이너 그리드 */}
                <section className={style['trainers-section']}>
                    <div className={style['trainers-grid']}>
                        {trainers.map((trainer) => (
                            <div
                                key={trainer.id}
                                className={style['trainer-card']}
                                onClick={() => openModal(trainer)}
                            >
                                <img
                                    src={trainer.thumbnail}
                                    alt={trainer.name}
                                    className={style['trainer-image']}
                                />
                                <div className={style['trainer-info']}>
                                    <h3>{trainer.name}</h3>
                                    {trainer.instagram && (
                                        <a
                                            href={trainer.instagram}
                                            className={style['instagram-link']}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img
                                                src="/images/icon/instagram.png"
                                                alt="인스타그램"
                                                className={style['instagram-icon']}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 모달 */}
                {modalOpen && selectedTrainer && (
                    <div
                        className={style['modal-overlay']}
                        onClick={closeModal}
                    >
                        <div
                            className={style['modal-container']}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 닫기 버튼 */}
                            <span
                                className={style['close-button']}
                                onClick={closeModal}
                            >
                                &times;
                            </span>

                            {/* 탭 메뉴 */}
                            <div className={style['tab-menu']}>
                                <button
                                    className={`${style['tab-item']} ${activeTab === 'profile' ? style.active : ''}`}
                                    onClick={() => setActiveTab('profile')}
                                >
                                    Profile
                                </button>
                                <button
                                    className={`${style['tab-item']} ${activeTab === 'career' ? style.active : ''}`}
                                    onClick={() => setActiveTab('career')}
                                >
                                    Career
                                </button>
                                <button
                                    className={`${style['tab-item']} ${activeTab === 'review' ? style.active : ''}`}
                                    onClick={() => setActiveTab('review')}
                                >
                                    Review
                                </button>
                                <button
                                    className={`${style['tab-item']} ${activeTab === 'contact' ? style.active : ''}`}
                                    onClick={() => setActiveTab('contact')}
                                >
                                    Contact
                                </button>
                            </div>

                            {/* 탭 컨텐츠 */}
                            <div className={style['modal-content-container']}>
                                {activeTab === 'profile' && (
                                    <div className={style['profile-content']}>
                                        <img
                                            src={selectedTrainer.profiles[currentProfileImageIndex]}
                                            alt="프로필"
                                            className={style['full-image']}
                                        />
                                        <div className={style['thumbnails']}>
                                            {selectedTrainer.profiles.map((img, index) => (
                                                <img
                                                    key={index}
                                                    src={img}
                                                    alt={`프로필 ${index + 1}`}
                                                    className={style['thumbnail-image']}
                                                    onMouseEnter={() => setCurrentProfileImageIndex(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'career' && selectedTrainer.career && (
                                    <img
                                        src={selectedTrainer.career}
                                        alt="경력"
                                        className={style['career-image']}
                                    />
                                )}

                                {activeTab === 'review' && selectedTrainer.reviews && (
                                    <div className={style['review-images']}>
                                        {selectedTrainer.reviews.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`후기 ${index + 1}`}
                                                className={style['review-image']}
                                            />
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'contact' && selectedTrainer.instagram && (
                                    <div className={style['contact-content']}>
                                        <a
                                            href={selectedTrainer.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={style['instagram-button']}
                                        >
                                            <img
                                                src="/images/icon/instagram.png"
                                                alt="인스타그램"
                                                className={style['instagram-icon']}
                                            />
                                            Instagram 방문하기
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Trainers;
