import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [ben, setBen] = useState(0);
  const [eddie, setEddie] = useState(0);

  useEffect(() => {
    fetch(`/api/getScore`)
      .then((res) => res.json())
      .then((data) => {
        setBen(data.ben);
        setEddie(data.eddie);
      });

    let interval = setInterval(async () => {
      const res = await fetch(`/api/getScore`);
      const data = await res.json();
      setBen(data.ben);
      setEddie(data.eddie);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const add = async (name: string) => {
    const res = await fetch(`/api/addScore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setBen(data.ben);
    setEddie(data.eddie);
  };

  return (
    <>
      <Head>
        <title>Ben vs Eddie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F0341E" />
      </Head>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1280 832"
        className="background"
        preserveAspectRatio="none"
      >
        <g className="Desktop" clipPath="url(#a)">
          <path fill="#fff" d="M0 0h1280v832H0z" />
          <g className="Background">
            <path
              fill="#348CB9"
              d="M1292.5 843 1284 50.5 917.5 266l-634 351.5-289 164V843h1298Z"
              className="Blue"
            />
            <path
              fill="#F23C27"
              d="M1287-7H-5.5v803.5l50-19 171-113.5 177-99.5 327-212 567.5-276V-7Z"
              className="Red"
            />
            <g className="Bolt">
              <path
                fill="#111"
                d="M1040.87 367.142 723.6 392.615l621.17-242.829V33.138l-28.44-6.595L281.871 477.257l331.009-32.716-664.125 292.045 225.592-20.746-460.432 178.737v32.571L439.996 665.57l-190.581 19.903 791.455-318.331Z"
                className="Shadow"
              />
              <path
                fill="#FFE924"
                stroke="#000"
                strokeWidth="3"
                d="M1015.57 355.971 698.3 381.444l612.73-239.532V20.011l-20-4.64L256.571 466.087 587.58 433.37-76.545 725.415l225.591-20.746-444.563 172.577v33.015l710.213-255.862-190.581 19.903 791.455-318.331Z"
                className="Bolt"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="a" className="a">
            <path fill="#fff" d="M0 0h1280v832H0z" />
          </clipPath>
        </defs>
      </svg>

      <Image src="/VS.png" alt="VS" width={450} height={450} className="vs" />

      <div className="ben">
        <div className="text-and-bubble">
          <h2 className="name">Ben</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="97"
            fill="none"
            viewBox="0 0 135 97"
            className="bubble"
          >
            <g className="Bubble Text">
              <g className="Bubble">
                <g className="Bubble">
                  <path
                    fill="#111"
                    stroke="#111"
                    strokeWidth="2"
                    d="M12 92c0 1.933-2.015 3.5-4.5 3.5S3 93.933 3 92s2.015-5 4.5-5 4.5 3.067 4.5 5Z"
                    className="Ellipse 4"
                  />
                  <path
                    fill="#111"
                    stroke="#111"
                    strokeWidth="2"
                    d="M30 86.25c0 2.623-2.686 4.75-6 4.75s-6-2.127-6-4.75S20.686 80 24 80s6 3.627 6 6.25Z"
                    className="Ellipse 3"
                  />
                  <path
                    fill="#111"
                    stroke="#111"
                    strokeWidth="2"
                    d="M49.5 72.75c0 2.761-2.47 7.5-6.75 7.5-4.28 0-7.75-2.239-7.75-5S37 68 42.75 68c4.28 0 6.75 1.989 6.75 4.75Z"
                    className="Ellipse 2"
                  />
                  <path
                    fill="#111"
                    stroke="#111"
                    strokeWidth="2"
                    d="M127.912 34.344c7.289 6.893 4.783 19.817-6.379 18.299 0 7.404-7.517 17.673-18.452 10.224-7.061 9.172-23.919 5.726-25.058-.306-10.023 6.247-19.818 7.54-27.791-4.78-7.29 3.057-19.363 5.086-17.934-9.22-12.82 1.076-10.541-9.263-4.163-14.217-6.378-3.877-7.062-13.007 8.201-17.187 1.367-11.03 8.429-11.03 13.896-6.25 3.3-7.11 23.919-12.965 27.791-4.78C83.278.97 99.894-.335 103.082 7.983c11.567-3.639 27.336 4.175 21.869 13.354 14.124 0 7.518 15.161 2.962 13.007Z"
                    className="Ellipse 6"
                  />
                </g>
                <g className="Bubble">
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                    d="M10 91c0 1.933-2.015 3.5-4.5 3.5S1 92.933 1 91s2.015-5 4.5-5 4.5 3.067 4.5 5Z"
                    className="Ellipse 4"
                  />
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                    d="M28 85.25c0 2.623-2.686 4.75-6 4.75s-6-2.127-6-4.75S18.686 79 22 79s6 3.627 6 6.25Z"
                    className="Ellipse 3"
                  />
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="2"
                    d="M47.5 71.75c0 2.761-2.47 7.5-6.75 7.5-4.28 0-7.75-2.239-7.75-5S35 67 40.75 67c4.28 0 6.75 1.989 6.75 4.75Z"
                    className="Ellipse 2"
                  />
                  <g>
                    <path
                      fill="#fff"
                      stroke="#000"
                      strokeWidth="2"
                      d="M125.912 33.344c7.289 6.893 4.783 19.817-6.379 18.299 0 7.404-7.517 17.673-18.452 10.224-7.061 9.172-23.919 5.726-25.058-.306-10.023 6.247-19.818 7.54-27.791-4.78-7.29 3.057-19.363 5.086-17.934-9.22-12.82 1.076-10.541-9.263-4.163-14.217-6.378-3.877-7.062-13.007 8.201-17.187 1.367-11.03 8.429-11.03 13.896-6.25 3.3-7.11 23.919-12.965 27.791-4.78 5.255-5.156 21.87-6.462 25.058 1.856 11.567-3.639 27.336 4.175 21.869 13.354 14.124 0 7.518 15.161 2.962 13.007Z"
                      className="Ellipse 6"
                    />
                    <text
                      x="76"
                      y="40"
                      textAnchor="middle"
                      dominantBaseline="bottom"
                      fill="black"
                    >
                      {ben}
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <button id="benbutton" onClick={() => add("ben")}>
          PRESS!
        </button>
      </div>

      <div className="eddie">
        <h2 className="name">Eddie</h2>
        <div className="bubble-and-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="115"
            height="120"
            fill="none"
            viewBox="0 0 115 120"
          >
            <g className="Bubble">
              <g className="Bubble">
                <path
                  fill="#111"
                  stroke="#111"
                  strokeWidth="2"
                  d="M76 7c0 1.933-2.015 3.5-4.5 3.5S67 8.933 67 7s2.015-5 4.5-5S76 5.067 76 7Z"
                  className="Ellipse 4"
                />
                <path
                  fill="#111"
                  stroke="#111"
                  strokeWidth="2"
                  d="M61 20.25c0 2.623-2.686 4.75-6 4.75s-6-2.127-6-4.75S51.686 14 55 14s6 3.627 6 6.25Z"
                  className="Ellipse 3"
                />
                <path
                  fill="#111"
                  stroke="#111"
                  strokeWidth="2"
                  d="M49.5 36.75c0 2.761-2.47 7.5-6.75 7.5-4.28 0-7.75-2.239-7.75-5S37 32 42.75 32c4.28 0 6.75 1.989 6.75 4.75Z"
                  className="Ellipse 2"
                />
                <path
                  fill="#111"
                  stroke="#111"
                  strokeWidth="2"
                  d="M107.912 84.344c7.289 6.893 4.783 19.817-6.379 18.299 0 7.404-7.517 17.673-18.451 10.224-7.062 9.172-23.92 5.726-25.058-.306-10.024 6.247-19.82 7.539-27.792-4.78-7.29 3.057-19.363 5.086-17.934-9.22-12.82 1.076-10.541-9.263-4.163-14.217-6.378-3.877-7.062-13.006 8.201-17.187 1.367-11.03 8.429-11.03 13.896-6.25 3.3-7.11 23.919-12.965 27.791-4.78 5.255-5.156 21.87-6.462 25.059 1.856 11.567-3.639 27.335 4.175 21.868 13.355 14.124 0 7.518 15.16 2.962 13.006Z"
                  className="Ellipse 6"
                />
              </g>
              <g className="Bubble">
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2"
                  d="M74 6c0 1.933-2.015 3.5-4.5 3.5S65 7.933 65 6s2.015-5 4.5-5S74 4.067 74 6Z"
                  className="Ellipse 4"
                />
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2"
                  d="M59 19.25c0 2.623-2.686 4.75-6 4.75s-6-2.127-6-4.75S49.686 13 53 13s6 3.627 6 6.25Z"
                  className="Ellipse 3"
                />
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2"
                  d="M47.5 35.75c0 2.761-2.47 7.5-6.75 7.5-4.28 0-7.75-2.239-7.75-5S35 31 40.75 31c4.28 0 6.75 1.989 6.75 4.75Z"
                  className="Ellipse 2"
                />
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2"
                  d="M105.912 83.344c7.289 6.893 4.783 19.817-6.379 18.299 0 7.404-7.517 17.673-18.451 10.224-7.062 9.172-23.92 5.726-25.058-.306-10.024 6.247-19.82 7.539-27.792-4.78-7.29 3.057-19.363 5.086-17.934-9.22-12.82 1.076-10.541-9.263-4.163-14.217-6.378-3.877-7.062-13.006 8.201-17.187 1.367-11.03 8.429-11.03 13.896-6.25 3.3-7.11 23.919-12.965 27.791-4.78 5.255-5.156 21.87-6.462 25.059 1.856 11.567-3.639 27.335 4.175 21.868 13.355 14.124 0 7.518 15.16 2.962 13.006Z"
                  className="Ellipse 6"
                />
                <text
                  x="55"
                  y="90"
                  textAnchor="middle"
                  dominantBaseline="bottom"
                  fill="black"
                >
                  {eddie}
                </text>
              </g>
            </g>
          </svg>

          <button id="eddiebutton" onClick={() => add("eddie")}>
            PRESS!
          </button>
        </div>
      </div>
    </>
  );
}
