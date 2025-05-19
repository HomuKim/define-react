import React, { useState, useEffect } from 'react';
import style from './Trainers.module.css';

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

const admins: Trainer[] = [
    {
        id: 1,
        name: "C E O",
        thumbnail: "/images/member/Hyesung/ceo.jpg",
        profiles: ["/images/member/Hyesung/ceo.jpg"],
        career: "/images/member/admin1-career.jpg",
        reviews: ["/images/member/admin1-review1.jpg"],
        instagram: "...",
        role: "admin",
    },
    {
        id: 2,
        name: "GENERAL MANAGER",
        thumbnail: "/images/member/Hoyeon/manager-thumbnail.jpg",
        profiles: ["/images/member/Hyesung/ceo.jpg"],
        career: "/images/member/admin1-career.jpg",
        reviews: ["/images/member/admin1-review1.jpg"],
        instagram: "...",
        role: "admin",
    },
    {
        id: 3,
        name: "FC TEAM \nLEADER",
        thumbnail: "/images/member/Eunbi/fc_leader-thumbnail.jpg",
        profiles: ["/images/member/Hyesung/ceo.jpg"],
        career: "/images/member/admin1-career.jpg",
        reviews: ["/images/member/admin1-review1.jpg"],
        instagram: "...",
        role: "admin",
    },
    {
        id: 4,
        name: "PT TEAM LEADER",
        thumbnail: "/images/member/Woosung/Woosung-thumbnail.jpg",
        profiles: ["/images/member/Hyesung/ceo.jpg"],
        career: "/images/member/admin1-career.jpg",
        reviews: ["/images/member/admin1-review1.jpg"],
        instagram: "...",
        role: "admin",
    }
];


const trainers: Trainer[] = [
    {
        id: 1,
        name: '주 영 현',
        thumbnail: '/images/member/Younghyun/Younghyun-thumbnail.jpg',
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
    {
        id: 2,
        name: '권 현 우',
        thumbnail: '/images/member/Hyunwoo/Hyunwoo-thumbnail.jpg',
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
    {
        id: 3,
        name: '한 동 수',
        thumbnail: '/images/member/Dongsoo/Dongsoo-thumbnail.jpg',
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
    }
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
            <title>팀원소개 | 디파인더바디 피트니스</title>
            <div className={style['trainers-page']}>
                {/* 헤더 섹션 */}
                <section className={style['trainer-hero']}>
                    <h1>디파인더바디 트레이너</h1>
                    <p>프로페셔널 트레이너들을 소개합니다</p>
                </section>

                <section className={style['admin-grid']}>
                    <h2>운영진</h2>
                    <div className={style['trainer-cards-container']}>
                        {admins.map((admin) => (
                            <div
                                key={admin.id}
                                className={style['trainer-card']}
                                onClick={() => openModal(admin)}
                                tabIndex={0}
                                role="button"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') openModal(admin);
                                }}
                            >
                                <img
                                    src={admin.thumbnail}
                                    alt={admin.name}
                                    className={style['trainer-image']}
                                />
                                <div className={style['trainer-name']}>
                                    <span>{admin.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={style['trainers-grid']}>
                    <h2>트레이너</h2>
                    <div className={style['trainer-cards-container']}>
                        {trainers.map((trainer) => (
                            <div
                                key={trainer.id}
                                className={style['trainer-card']}
                                onClick={() => openModal(trainer)}
                                tabIndex={0}
                                role="button"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') openModal(trainer);
                                }}
                            >
                                <img
                                    src={trainer.thumbnail}
                                    alt={trainer.name}
                                    className={style['trainer-image']}
                                />
                                <div className={style['trainer-name']}>
                                    <span>{trainer.name}</span>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* 모달 */}
                {selectedTrainer && (
                    <div
                        className={`${style['modal']} ${modalOpen ? style['show'] : ''}`}
                        onClick={closeModal}
                        style={{ pointerEvents: modalOpen ? 'auto' : 'none' }} // 닫힐 때 클릭 방지
                    >
                        <div className={style['modal-container']} onClick={e => e.stopPropagation()}>
                            {/* 닫기 버튼 */}
                            <span className={style['close-button']} onClick={closeModal}>&times;</span>

                            {/* 왼쪽: 탭 메뉴 */}
                            <div className={style['sidebar']}>
                                <ul className={style['tabs']}>
                                    <li
                                        className={`${style['tab-item']} ${activeTab === 'profile' ? style['active'] : ''}`}
                                        onClick={() => setActiveTab('profile')}
                                    >Profile</li>
                                    <li
                                        className={`${style['tab-item']} ${activeTab === 'career' ? style['active'] : ''}`}
                                        onClick={() => setActiveTab('career')}
                                    >Career</li>
                                    <li
                                        className={`${style['tab-item']} ${activeTab === 'review' ? style['active'] : ''}`}
                                        onClick={() => setActiveTab('review')}
                                    >Review</li>
                                    <li
                                        className={`${style['tab-item']} ${activeTab === 'contact' ? style['active'] : ''}`}
                                        onClick={() => setActiveTab('contact')}
                                    >
                                        <a
                                            href={selectedTrainer?.instagram || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            id="instagramLink"
                                        >Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* 오른쪽: 탭별 콘텐츠 */}
                            <div className={style['modal-content-container']}>
                                {/* 프로필 탭 */}
                                <div
                                    className={`${style['trainer-profile']} ${activeTab === 'profile' ? style['active'] : ''}`}
                                    data-trainer="1"
                                >
                                    <div className={style['profile-container']}>
                                        <div className={style['thumbnails']}>
                                            {selectedTrainer?.profiles.map((img, index) => (
                                                <img
                                                    key={index}
                                                    src={img}
                                                    alt={`프로필 ${index + 1}`}
                                                    className={style['thumbnail-image']}
                                                    onMouseEnter={() => setCurrentProfileImageIndex(index)}
                                                />
                                            ))}
                                        </div>
                                        <div className={style['full-image-container']}>
                                            <img
                                                src={selectedTrainer?.profiles[currentProfileImageIndex]}
                                                alt="풀사이즈 이미지"
                                                id="fullImage"
                                                className={style['full-image']}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* 경력 탭 */}
                                <div
                                    className={`${style['trainer-career']} ${activeTab === 'career' ? style['active'] : ''}`}
                                    data-trainer="2"
                                >
                                    {selectedTrainer?.career && (
                                        <img
                                            src={selectedTrainer.career}
                                            alt="경력 이미지"
                                            id="careerImage"
                                        />
                                    )}
                                </div>
                                {/* 후기 탭 */}
                                <div
                                    className={`${style['trainer-review']} ${activeTab === 'review' ? style['active'] : ''}`}
                                    data-trainer="3"
                                >
                                    <div className={style['review-images']}>
                                        {selectedTrainer?.reviews?.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`후기 ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* 연락처 탭 */}
                                <div
                                    className={`${style['contact-content']} ${activeTab === 'contact' ? style['active'] : ''}`}
                                    data-trainer="4"
                                >
                                    {selectedTrainer?.instagram && (
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
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default Trainers;
