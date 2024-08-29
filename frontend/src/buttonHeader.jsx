import React, { useEffect, useRef } from 'react';

function ButtonHeader() {
    const headerRef = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            const placeholder = placeholderRef.current;
            const headerRect = header.getBoundingClientRect();
            const placeholderRect = placeholder.getBoundingClientRect();

            if (headerRect.top <= 0 && !header.classList.contains('sticky')) {
                header.classList.add('sticky');
                placeholder.style.display = 'block';
            } else if (placeholderRect.top >= 0 && header.classList.contains('sticky')) {
                header.classList.remove('sticky');
                placeholder.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (id, offset) => {
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = headerRef.current.offsetHeight;
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div ref={placeholderRef} className="placeholder"></div>
            <div ref={headerRef} className="buttonHeader">
                <svg className={"ksLogo"} onClick={() => handleScrollToSection('main')} viewBox="0 0 500 500" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(0.05740800127387046, 0, 0, -0.05740800127387046, -45.54309844970704, 548.1242065429686)"
                       fill="#FFFFFF" stroke="none">
                        <path d="M1315 7855 c-21 -20 -25 -34 -25 -80 0 -46 4 -60 25 -80 l24 -25 501&#10;0 501 0 24 25 c21 20 25 34 25 79 0 48 -3 57 -31 80 l-31 26 -494 0 -495 0&#10;-24 -25z"/>
                        <path d="M4050 7852 c-34 -27 -39 -108 -10 -144 l21 -28 2324 0 2324 0 20 26&#10;c31 39 29 107 -4 139 l-24 25 -2314 0 c-2221 0 -2316 -1 -2337 -18z"/>
                        <path d="M3846 7519 c-16 -10 -66 -106 -149 -289 -14 -30 -43 -93 -65 -140&#10;-97 -205 -142 -302 -142 -305 0 -2 -23 -52 -51 -111 -121 -257 -139 -303 -139&#10;-352 0 -68 27 -92 102 -92 40 0 59 5 71 18 16 17 93 176 224 462 65 141 83&#10;180 118 255 20 44 54 116 75 160 109 230 120 258 120 307 0 68 -30 98 -97 98&#10;-26 0 -56 -5 -67 -11z"/>
                        <path d="M5663 7515 c-12 -8 -30 -34 -41 -57 -11 -24 -48 -101 -81 -171 -34&#10;-71 -61 -130 -61 -132 0 -2 -27 -60 -60 -130 -33 -70 -60 -128 -60 -130 0 -2&#10;-26 -59 -59 -127 -32 -68 -70 -148 -84 -178 -14 -30 -41 -90 -61 -133 -43 -93&#10;-50 -173 -16 -207 27 -27 129 -29 153 -2 14 15 41 71 124 252 14 30 38 82 53&#10;115 15 33 49 105 75 160 26 55 60 127 75 160 15 33 44 94 63 135 50 108 86&#10;186 118 258 56 123 28 202 -71 202 -25 0 -55 -7 -67 -15z"/>
                        <path d="M856 7365 c-13 -10 -22 -34 -27 -67 -10 -72 -10 -950 0 -1012 11 -64&#10;37 -86 100 -86 52 0 86 23 96 63 3 12 4 260 3 550 l-3 529 -24 19 c-29 23&#10;-116 26 -145 4z"/>
                        <path d="M2677 7366 c-10 -8 -22 -29 -27 -47 -13 -45 -13 -1013 0 -1058 13&#10;-46 36 -60 97 -61 45 0 54 4 77 31 l26 31 0 524 c0 539 -1 552 -39 581 -22 17&#10;-112 16 -134 -1z"/>
                        <path d="M9031 7354 c-21 -26 -21 -36 -21 -566 l0 -539 25 -24 c19 -20 34 -25&#10;75 -25 41 0 56 5 75 25 l25 24 0 539 c0 530 0 540 -21 566 -18 23 -28 26 -79&#10;26 -51 0 -61 -3 -79 -26z"/>
                        <path d="M6776 6105 c-21 -20 -26 -33 -26 -75 0 -41 5 -56 25 -75 l24 -25 946&#10;0 947 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29 -945 0 -944 0&#10;-27 -25z"/>
                        <path d="M5141 5756 c-20 -22 -23 -32 -19 -83 5 -59 9 -68 129 -321 33 -68 59&#10;-125 59 -126 0 -2 20 -46 44 -97 24 -52 55 -119 69 -149 152 -333 225 -478&#10;245 -489 12 -6 41 -11 67 -11 64 0 95 31 95 95 0 45 -6 63 -77 215 -20 41 -47&#10;100 -60 130 -14 30 -41 89 -60 130 -19 41 -46 100 -60 130 -14 30 -43 93 -65&#10;140 -84 179 -108 228 -153 325 -61 131 -65 135 -135 135 -47 0 -60 -4 -79 -24z"/>
                        <path d="M8771 5754 c-42 -54 -30 -95 117 -404 27 -58 61 -130 75 -160 14 -30&#10;41 -89 60 -130 19 -41 46 -100 60 -130 13 -30 46 -100 72 -155 26 -55 63 -134&#10;82 -175 48 -105 65 -120 127 -120 76 1 96 22 96 99 0 51 -7 76 -44 154 -24 50&#10;-55 117 -69 147 -14 30 -41 89 -60 130 -19 41 -46 100 -60 130 -28 63 -84 182&#10;-132 285 -79 167 -125 268 -125 271 0 3 -11 22 -25 44 -25 40 -25 40 -89 40&#10;-58 0 -67 -3 -85 -26z"/>
                        <path d="M860 5622 c-15 -12 -25 -35 -31 -68 -10 -62 -10 -941 0 -1013 10 -67&#10;27 -81 102 -81 50 0 60 3 78 26 21 26 21 36 21 561 l0 535 -29 29 c-24 23 -38&#10;29 -74 29 -28 0 -53 -7 -67 -18z"/>
                        <path d="M2624 5546 c-3 -8 -1 -52 5 -98 49 -382 45 -372 113 -376 62 -4 75&#10;16 88 139 6 51 15 128 20 169 5 41 9 99 10 128 l0 52 -115 0 c-91 0 -117 -3&#10;-121 -14z"/>
                        <path d="M4730 5549 c-20 -12 -588 -326 -692 -383 -33 -17 -38 -24 -38 -55 0&#10;-38 0 -39 80 -83 25 -13 72 -40 105 -58 33 -18 74 -41 92 -51 18 -10 63 -35&#10;100 -55 37 -20 118 -65 178 -99 217 -122 244 -131 304 -100 34 17 41 32 41 94&#10;0 64 -4 69 -135 141 -33 18 -73 41 -90 50 -16 9 -55 30 -85 47 -30 17 -80 45&#10;-110 62 -30 18 -63 35 -73 38 -20 6 -15 10 98 73 116 64 131 73 195 110 36 21&#10;88 50 115 65 71 38 85 58 85 119 0 72 -25 96 -101 95 -30 0 -61 -4 -69 -10z"/>
                        <path d="M5865 4364 c-16 -12 -20 -27 -20 -79 0 -52 4 -67 20 -79 18 -13 139&#10;-15 977 -16 l957 0 20 26 c31 39 29 107 -4 139 l-24 25 -953 0 c-834 -1 -955&#10;-3 -973 -16z"/>
                        <path d="M3325 4015 c-20 -19 -25 -34 -25 -74 0 -52 5 -66 108 -281 27 -58 61&#10;-130 75 -160 14 -30 41 -89 60 -130 19 -41 46 -100 60 -130 13 -30 46 -100 72&#10;-155 44 -92 82 -175 123 -265 29 -66 49 -80 112 -80 76 0 100 22 100 89 0 51&#10;-9 77 -70 206 -37 79 -88 187 -137 295 -14 30 -41 89 -60 130 -19 41 -46 100&#10;-60 130 -14 30 -40 87 -58 125 -18 39 -58 122 -88 187 -32 66 -64 121 -75 127&#10;-12 6 -41 11 -67 11 -35 0 -51 -6 -70 -25z"/>
                        <path d="M5146 4019 c-37 -29 -37 -105 3 -191 71 -156 127 -277 196 -423 26&#10;-55 59 -125 72 -155 14 -30 41 -89 60 -130 19 -41 46 -100 60 -130 114 -249&#10;114 -250 194 -250 51 0 60 3 79 28 29 36 23 105 -15 187 -15 33 -43 94 -62&#10;135 -19 41 -46 100 -60 130 -14 30 -48 102 -75 160 -28 58 -58 123 -68 145&#10;-10 22 -33 74 -53 115 -19 41 -46 100 -59 130 -78 170 -120 251 -137 260 -34&#10;18 -106 12 -135 -11z"/>
                        <path d="M9293 4018 c-25 -28 -42 -59 -94 -173 -23 -49 -54 -117 -69 -150 -15&#10;-33 -39 -85 -53 -115 -13 -30 -43 -94 -66 -142 -23 -49 -59 -127 -82 -175 -71&#10;-151 -132 -284 -160 -351 -27 -62 -25 -117 6 -147 20 -20 34 -25 77 -25 29 0&#10;61 7 70 14 13 10 148 275 148 291 0 1 22 49 49 106 26 57 63 136 81 174 18 39&#10;49 106 70 150 21 44 49 105 63 135 86 189 108 237 117 252 6 10 10 44 10 76 0&#10;77 -24 102 -96 102 -40 0 -55 -5 -71 -22z"/>
                        <path d="M856 3875 c-13 -10 -22 -34 -27 -67 -10 -72 -10 -950 0 -1012 10 -60&#10;37 -86 92 -86 50 0 84 16 98 47 8 16 11 187 11 554 l0 530 -25 24 c-20 20 -34&#10;25 -77 25 -31 -1 -61 -7 -72 -15z"/>
                        <path d="M2669 3871 l-24 -19 0 -547 0 -547 28 -24 c42 -36 109 -34 148 5 l29&#10;29 0 527 c0 624 5 595 -110 595 -32 0 -55 -6 -71 -19z"/>
                        <path d="M1332 2628 c-48 -23 -51 -132 -4 -168 24 -19 42 -20 512 -20 478 0&#10;488 0 514 21 23 18 26 28 26 79 0 51 -3 61 -26 79 -26 21 -36 21 -513 20 -328&#10;0 -493 -4 -509 -11z"/>
                        <path d="M4053 2622 c-27 -20 -38 -67 -29 -117 13 -67 6 -66 557 -63 l491 3&#10;19 24 c29 36 26 115 -6 146 l-24 25 -493 0 c-452 0 -495 -2 -515 -18z"/>
                        <path d="M5865 2615 c-19 -18 -25 -35 -25 -69 0 -59 7 -74 41 -91 24 -13 218&#10;-15 1419 -15 l1392 0 29 29 c23 23 29 38 29 71 0 33 -6 48 -29 71 l-29 29&#10;-1402 0 -1401 0 -24 -25z"/>
                    </g>
                </svg>

                <button className="button" onClick={() => handleScrollToSection('aboutMe', 40)}>about me</button>
                <button className="button" onClick={() => handleScrollToSection('projects', 18)}>projects</button>
                <button className="button" onClick={() => handleScrollToSection('contact', 0)}>contact</button>
            </div>
        </>
    );
}

export default ButtonHeader;
