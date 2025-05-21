import React, { useEffect, useRef, useState } from "react";
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css'; // Import custom CSS for background and glitch effect
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Import icons

function Hero() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [members, setMembers] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const handleScroll = () => {
            const video = videoRef.current;
            if (video) {
                const rect = video.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let membersInterval = setInterval(() => {
            setMembers(prev => (prev < 50 ? prev + 1 : 50));
        }, 50);

        let projectsInterval = setInterval(() => {
            setProjects(prev => (prev < 20 ? prev + 1 : 20));
        }, 100);

        return () => {
            clearInterval(membersInterval);
            clearInterval(projectsInterval);
        };
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const [text] = useTypewriter({
        words: ['Innovate', 'Design', 'Create'],
        loop: {},
    });

    return (
        <>
            <div className="hero-background flex flex-col lg:flex-row py-40 px-4 lg:px-16">
                <div className="flex-1" data-aos="fade-up">
                    <h1 className="text-5xl lg:text-7xl font-mono">Welcome to <span className="text-blue-100 glitch">Tesla</span></h1>
                    <p className="text-3xl lg:text-5xl py-2.5">Lets <span className="text-blue-300 font-bold"> {text} </span>
                        <Cursor cursorColor='blue' /></p>
                    <p className="text-xl lg:text-xl text-gray-300 mt-4">
                        We design, build, and revolutionize cutting-edge electrical projects.<br />
                        We push the boundaries of engineering and electrify the future!⚡
                    </p>
                </div>
                <div className="flex-1 flex justify-center mt-10 lg:mt-0">
                    <img src="./src/assets/3d.gif" alt="3d" className="w-full h-auto max-w-7xl max-h-96" />
                </div>
            </div>
            <div className="stats-container flex justify-center mt-10" data-aos="fade-up">
                <div className="stat-item mx-4 text-blue-300">
                    <h2>{members}</h2>
                    <p>Members</p>
                </div>
                <div className="stat-item mx-4 text-blue-300">
                    <h2>{projects}</h2>
                    <p>Projects</p>
                </div>
                <div className="stat-item mx-4 text-blue-300">
                    <h2>∞</h2>
                    <p>Dedication</p>
                </div>
            </div>
            <div className="mission-container mt-10" data-aos="fade-up">
                <h2 className="mission-title font-extrabold text-blue-200 text-3xl">Our Mission</h2>
                <div className="mission-cards">
                    <div className="mission-card">
                        <img src="./src/assets/bolt.png" alt="Bolt Icon" className="mission-icon" />
                        <h3>Electrifying Innovation</h3>
                        <p>Tesla Club VNIT Nagpur sparks creativity and engineering excellence by driving innovation in electric mobility and sustainable technology. We empower students to design, build, and innovate through hands-on projects, workshops, and collaborations—fueling the future, one volt at a time.</p>
                    </div>
                    <div className="mission-card">
                        <img src="./src/assets/speed.png" alt="Speed Icon" className="mission-icon" />
                        <h3>Speeding Towards Excellence</h3>
                        <p>We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge designs on a global stage.</p>
                    </div>
                    <div className="mission-card">
                        <img src="./src/assets/green.png" alt="Green Icon" className="mission-icon" />
                        <h3>Driving India's Green Revolution</h3>
                        <p>Tesla Club VNIT Nagpur is committed to advancing sustainable technology and clean energy solutions. Through innovative projects and awareness initiatives, we aim to inspire a new generation of engineers to lead India’s shift towards a greener, smarter future.</p>
                    </div>
                    <div className="mission-card">
                        <img src="./src/assets/engineer.png" alt="Engineer Icon" className="mission-icon" />
                        <h3>Engineering the Future</h3>
                        <p>Tesla Club is where bold ideas meet cutting-edge tech. We innovate in electric mobility and clean energy, turning imagination into real-world solutions that shape tomorrow.</p>
                    </div>
                </div>
            </div>
            <div className="video-container mt-10" data-aos="fade-up">
                <video className="tesla-video rounded-2xl" ref={videoRef} src="./src/assets/video.mp4" autoPlay muted loop></video>
                <button className="mute-button" onClick={toggleMute}>
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>
        </>
    )
}

export default Hero