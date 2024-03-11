import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

import Logo from './assets/logo.svg';
import IconLaptop from './assets/icon-laptop.svg';
import IconTwitter from './assets/icon-twitter.svg';
import IconYoutube from './assets/icon-youtube.svg';

const SplineApp = () => {
    return ( 
        <Wrapper>
            {/* <SplineContainer> */}
                <Spline className="spline" scene="https://prod.spline.design/kjaJ-sG-JGkdAFas/scene.splinecode" /> 
            {/* </SplineContainer> */}
            <Content>
                <Menu>
                    <li><img src={Logo} alt="Logo"/></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">App</a></li>
                    <li><a href="/">Login</a></li>
                    <li><button>Get Started</button></li>
                </Menu>
                <h1>Collaborate with people</h1>
                <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
                <button><img src={IconLaptop} alt="Download"/> Download for Mac</button>
            </Content>
            <Social>
                <div></div>
                <img src={IconTwitter} alt="Twitter"/>
                <img src={IconYoutube} alt="YouTube"/>
            </Social>
        </Wrapper>
    );
}
 
export default SplineApp;

const Wrapper = styled.div`
    font-family: 'Spline Sans', sans-serif;
    font-size: 16px;
    color: white;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

    .spline {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;

        @media (max-width: 1060px) {
            transform: scale(0.8) translateX(200px);
        }
        @media (max-width: 800px) {
            transform: scale(0.7) translateX(300px);
        }
        @media (max-width: 600px) {
            transform: scale(0.5) translateX(400px);
        }
        @media (max-width: 450px) {
            transform: scale(0.45) translateX(400px);
        }
    }
`

const Content = styled.div`
    position: absolute;
    top: 30px;
    z-index: 10;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 1024px) {
        gap: 40px;        
    }

    h1 {
        font-family: 'Spline Sans Mono', monospace;
        font-weight: bold;
        font-size: 70px;
        margin: 0;
        max-width: 500px;

        @media (max-width: 1024px) {
            font-size: 60px;
            max-width: 400px;
        }
        @media (max-width: 800px) {
            font-size: 40px;
            max-width: 300px;
        }
        @media (max-width: 600px) {
            padding-top: 250px
        }
    }

    p {
        font-weight: normal;
        line-height: 150%;
        max-width: 380px;
    }

    button {
        background: rgba(0,0,0,0.2);
        border: 0px;
        font-size: 16px;
        padding: 12px 30px;
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        max-width: 280px;
        backdrop-filter: blur(20px);

        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;

        transition: 1s;

        &:hover {
            border: 1px solid rgba(255, 255, 255, 0.8);
            background-color: rgba(255,255,255,0.1);
            transform: translateY(-3px);
        }
    }

    h1, 
    p, 
    button {
        margin: 0 30px 0 100px;

        @media (max-width: 1024px) {
            margin: 0 30px;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    margin: 0 30px 0 100px;
    padding: 0;

    @media (max-width: 1024px) {
        margin: 0 30px;
    }

    li {
        list-style: none;
        margin: 0;
        a {
            text-decoration: none;
            color: white;
            padding: 8px 20px;
            border: 1px solid rgba(255,255,255, 0);
            border-radius: 14px;
            transition: 0.5s;
    
            &:hover {
                border: 1px solid rgba(255,255,255,0.2);
            }
        }
    }

    @media (max-width: 800px) {
        justify-content: space-between;
        li:nth-child(2),
        li:nth-child(3),
        li:nth-child(4),
        li:nth-child(5) {
            display: none;
        }
    }

`;

const Social = styled.div`
    position: absolute;
    top: 150px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    div {
        width: 1px;
        height: 500px;
        background: linear-gradient(
            180deg,
            #08b6f9 0%,
            #6c56ef 33.57%,
            #1306dd 65.86%,
            #aa0eb2 100%
        )
    }

    @media (max-width: 1024px) {
        display: none;
    }
`