document.addEventListener('DOMContentLoaded', async () => {
    const skeletalSystemContainer = document.getElementById('skeletal-system');
    console.log('Container found:', skeletalSystemContainer);

    const boneData = {
        // Skull and Face
        Cranium: {
            info: "The cranium is the skull's upper part that protects the brain. It consists of eight bones that are fused together.",
            url: 'Cranium.svg',
            top: 16.12,
            left: 127.2,
            width: 54.43,
            height: 70.8
        },
        Mandible: {
            info: "The mandible is the lower jawbone, the largest and strongest bone of the face.",
            url: 'Mandible.svg',
            top: 65.14,
            left: 129.91,
            width: 48.85,
            height: 35.21
        },
        Maxilla: {
            info: "The maxilla is the upper jawbone, forming the roof of the mouth and floor of the orbit.",
            url: 'Maxilla.svg',
            top: 0,
            left: 0,
            width: 0,
            height: 0
        },
        Zygomatic: {
            info: "The zygomatic bone forms the cheekbone and part of the orbit.",
            url: 'Zygomatic.svg',
            top: 0,
            left: 0,
            width: 0,
            height: 0
        },
        Nasal: {
            info: "The nasal bones form the bridge of the nose.",
            url: 'Nasal.svg',
            top: 0,
            left: 0,
            width: 0,
            height: 0
        },

        // Vertebral Column
        CervicalVertebrae: {
            info: "The cervical vertebrae are the seven bones of the neck.",
            url: 'CervicalVertebrae.svg',
            top: 71.43,
            left: 139.5,
            width: 30.73,
            height: 45.96
        },
        ThoracicVertebrae: {
            info: "The thoracic vertebrae are the twelve bones of the upper back.",
            url: 'ThoracicVertebrae.svg',
            top: 111.52,
            left: 146.28,
            width: 15.7,
            height: 114.64
        },
        LumbarVertebrae: {
            info: "The lumbar vertebrae are the five bones of the lower back.",
            url: 'LumbarVertebrae.svg',
            top: 224.15,
            left: 137.9,
            width: 32.77,
            height: 59.15
        },
        Sacrum: {
            info: "The sacrum is a triangular bone at the base of the spine.",
            url: 'Sacrum.svg',
            top: 271.85,
            left: 134.2,
            width: 38.92,
            height: 31.93
        },
        Coccyx: {
            info: "The coccyx is the tailbone, consisting of four fused vertebrae.",
            url: 'Coccyx.svg',
            top: 302.12,
            left: 148.12,
            width: 10.73,
            height: 10.79
        },

        // Thorax
        Manubrium: {
            info: "The manubrium is the upper part of the sternum (breastbone). It connects to the clavicles and first ribs.",
            url: 'Manubrium.svg',
            top: 123.17,
            left: 144.34,
            width: 21.85,
            height: 17.83
        },
        Sternum: {
            info: "The sternum is the breastbone, connecting the ribs in the front of the chest.",
            url: 'Sternum.svg',
            top: 137.88,
            left: 147.39,
            width: 15.4,
            height: 54.94
        },
        Ribs: {
            info: "The ribs are twelve pairs of curved bones that form the ribcage.",
            url: 'Ribs.svg',
            top: 112.12,
            left: 101.65,
            width: 106.86,
            height: 128.05
        },

        // Upper Limbs
        ClavicleLeft: {
            info: "The clavicle is the collarbone, connecting the sternum to the shoulder.",
            url: 'ClavicleLeft.svg',
            top: 113.89,
            left: 161.4,
            width: 54.68,
            height: 13.64
        },
        ClavicleRight: {
            info: "The clavicle is the collarbone, connecting the sternum to the shoulder.",
            url: 'ClavicleRight.svg',
            top: 112.78,
            left: 95.2,
            width: 53.96,
            height: 14.55
        },
        Scapula: {
            info: "The scapula is the shoulder blade, connecting the upper arm to the collarbone.",
            url: 'Scapula.svg',
            top: 114.19,
            left: 85.38,
            width: 139.81,
            height: 66.65
        },
        HumerusLeft: {
            info: "The humerus is the long bone in the upper arm. It connects the shoulder to the elbow.",
            url: 'HumerusLeft.svg',
            top: 132.03,
            left: 209.76,
            width: 39.45,
            height: 115.6
        },
        HumerusRight: {
            info: "The humerus is the long bone in the upper arm. It connects the shoulder to the elbow.",
            url: 'HumerusRight.svg',
            top: 132.85,
            left: 51.6,
            width: 49.95,
            height: 113.19
        },
        RadiusLeft: {
            info: "The radius is one of two bones in the forearm, on the thumb side.",
            url: 'RadiusLeft.svg',
            top: 240.46,
            left: 241.51,
            width: 33.56,
            height: 84.45
        },
        RadiusRight: {
            info: "The radius is one of two bones in the forearm, on the thumb side.",
            url: 'RadiusRight.svg',
            top: 241.75,
            left: 51.14,
            width: 19.16,
            height: 88.46
        },
        UlnaLeft: {
            info: "The ulna is one of two bones in the forearm, on the pinky side.",
            url: 'UlnaLeft.svg',
            top: 243.42,
            left: 231.6,
            width: 31.44,
            height: 82.39
        },
        UlnaRight: {
            info: "The ulna is one of two bones in the forearm, on the pinky side.",
            url: 'UlnaRight.svg',
            top: 242.63,
            left: 48.54,
            width: 22.76,
            height: 87.92
        },
        CarpalsLeft: {
            info: "The carpals are the eight small bones that make up the wrist.",
            url: 'CarpalsLeft.svg',
            top: 322.03,
            left: 256.76,
            width: 22.69,
            height: 15.39
        },
        CarpalsRight: {
            info: "The carpals are the eight small bones that make up the wrist.",
            url: 'CarpalsRight.svg',
            top: 328.36,
            left: 49.11,
            width: 22.54,
            height: 14.18
        },
        MetacarpalsLeft: {
            info: "The metacarpals are the five bones in the palm of the hand.",
            url: 'MetacarpalsLeft.svg',
            top: 326.99,
            left: 257.85,
            width: 36.04,
            height: 29.76
        },
        MetacarpalsRight: {
            info: "The metacarpals are the five bones in the palm of the hand.",
            url: 'MetacarpalsRight.svg',
            top: 335.59,
            left: 46.61,
            width: 35.01,
            height: 28.13
        },
        PhalangesLeft: {
            info: "The phalanges are the bones of the fingers and thumb.",
            url: 'PhalangesLeft.svg',
            top: 330.09,
            left: 260.3,
            width: 47.59,
            height: 54.99
        },
        PhalangesRight: {
            info: "The phalanges are the bones of the fingers and thumb.",
            url: 'PhalangesRight.svg',
            top: 344.45,
            left: 45.1,
            width: 45.8,
            height: 49.53
        },

        // Pelvis
        PelvicGirdle: {
            info: "The pelvic girdle consists of the hip bones that connect the spine to the lower limbs.",
            url: 'PelvicGirdle.svg',
            top: 255.99,
            left: 99.92,
            width: 109.48,
            height: 76.15
        },

        // Lower Limbs
        FemurLeft: {
            info: "The femur is the thigh bone, the longest and strongest bone in the body.",
            url: 'FemurLeft.svg',
            top: 305.36,
            left: 157.17,
            width: 55.78,
            height: 169.57
        },
        FemurRight: {
            info: "The femur is the thigh bone, the longest and strongest bone in the body.",
            url: 'FemurRight.svg',
            top: 303.23,
            left: 92.89,
            width: 56.71,
            height: 169.41
        },
        PatellaLeft: {
            info: "The patella is the kneecap, protecting the knee joint.",
            url: 'PatellaLeft.svg',
            top: 465.99,
            left: 165.04,
            width: 19.3,
            height: 18.96
        },
        PatellaRight: {
            info: "The patella is the kneecap, protecting the knee joint.",
            url: 'PatellaRight.svg',
            top: 466.03,
            left: 121.57,
            width: 19.3,
            height: 18.96
        },
        TibiaLeft: {
            info: "The tibia is the shinbone, the larger of the two lower leg bones.",
            url: 'TibiaLeft.svg',
            top: 473.22,
            left: 153.04,
            width: 35.91,
            height: 141.42
        },
        TibiaRight: {
            info: "The tibia is the shinbone, the larger of the two lower leg bones.",
            url: 'TibiaRight.svg',
            top: 473.88,
            left: 116.55,
            width: 34.46,
            height: 141.32
        },
        FibulaLeft: {
            info: "The fibula is the smaller of the two lower leg bones.",
            url: 'FibulaLeft.svg',
            top: 484.23,
            left: 171.23,
            width: 19.01,
            height: 125.79
        },
        FibulaRight: {
            info: "The fibula is the smaller of the two lower leg bones.",
            url: 'FibulaRight.svg',
            top: 485.33,
            left: 115.34,
            width: 17.21,
            height: 126.27
        },
        TarsalsLeft: {
            info: "The tarsals are the seven bones that make up the ankle and heel.",
            url: 'TarsalsLeft.svg',
            top: 605.90,
            left: 154.23,
            width: 29.80,
            height: 27.58
        },
        TarsalsRight: {
            info: "The tarsals are the seven bones that make up the ankle and heel.",
            url: 'TarsalsRight.svg',
            top: 605.85,
            left: 119.35,
            width: 29.88,
            height: 26.14
        },
        MetatarsalsLeft: {
            info: "The metatarsals are the five bones in the middle of the foot.",
            url: 'MetatarsalsLeft.svg',
            top: 619.20,
            left: 161.03,
            width: 34.24,
            height: 25.96
        },
        MetatarsalsRight: {
            info: "The metatarsals are the five bones in the middle of the foot.",
            url: 'MetatarsalsRight.svg',
            top: 619.37,
            left: 108.88,
            width: 34.01,
            height: 24.34
        },
        PhalangesFootLeft: {
            info: "The phalanges are the bones of the toes.",
            url: 'PhalangesFootLeft.svg',
            top: 633.87,
            left: 174.77,
            width: 30.47,
            height: 22.79
        },
        PhalangesFootRight: {
            info: "The phalanges are the bones of the toes.",
            url: 'PhalangesFootRight.svg',
            top: 634.28,
            left: 99.52,
            width: 30.41,
            height: 20.86
        }
    };

    async function loadSVG(url, top, left, width, transform = '') {
        try {
            console.log('Loading SVG:', url);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const svgText = await response.text();
            console.log('SVG content loaded:', svgText.substring(0, 100) + '...');
            
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
            const svgElement = svgDoc.documentElement;
            
            // Set SVG attributes
            svgElement.style.position = 'absolute';
            svgElement.style.top = `${top}px`;
            svgElement.style.left = `${left}px`;
            svgElement.style.width = `${width}px`;
            svgElement.style.height = 'auto';
            svgElement.style.pointerEvents = 'none'; // Make SVG container non-interactive
            if (transform) {
                svgElement.style.transform = transform;
            }

            // Make only the paths interactive
            const paths = svgElement.getElementsByTagName('path');
            for (let path of paths) {
                path.style.pointerEvents = 'all';
                path.style.cursor = 'pointer';
                // Remove any fill that might be creating a box
                if (path.getAttribute('fill') === 'none') {
                    path.style.fill = 'currentColor';
                }
            }
            
            // Add viewBox if not present
            if (!svgElement.getAttribute('viewBox')) {
                const bbox = svgElement.getBBox();
                svgElement.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);
            }
            
            return svgElement;
        } catch (error) {
            console.error(`Error loading SVG ${url}:`, error);
            return null;
        }
    }

    async function setupSkeletalSystem() {
        console.log('Setting up skeletal system...');
        for (const boneId in boneData) {
            console.log(`Processing bone: ${boneId}`);
            const { url, top, left, width, info } = boneData[boneId];
            const svgElement = await loadSVG(url, top, left, width);
            
            if (svgElement) {
                svgElement.id = boneId;
                svgElement.classList.add('bone');
                
                // Add click event listener
                svgElement.addEventListener('click', (event) => {
                    const infoBox = document.getElementById('info-box');
                    const infoText = document.getElementById('info-text');
                    
                    infoText.textContent = info;
                    infoBox.style.display = 'block';
                    
                    // Position the info box near the clicked bone
                    infoBox.style.top = `${event.clientY + 10}px`;
                    infoBox.style.left = `${event.clientX + 10}px`;
                });
                
                skeletalSystemContainer.appendChild(svgElement);
                console.log(`Added ${boneId} to the container`);
            } else {
                console.error(`Failed to load ${boneId}`);
            }
        }
    }

    // Setup skeletal system
    try {
        await setupSkeletalSystem();
        console.log('Skeletal system setup complete');
    } catch (error) {
        console.error('Error setting up skeletal system:', error);
    }

    // Hide info box when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.bone')) {
            document.getElementById('info-box').style.display = 'none';
        }
    });
}); 