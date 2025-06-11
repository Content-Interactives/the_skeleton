import React, { useState, useEffect, useRef } from 'react';
import skeletonSVG from '../assets/skeleton_no_text.svg';
import CraniumSvg from '../assets/skeleton_parts/Cranium.svg';
import ThoracicVertebraeSvg from '../assets/skeleton_parts/ThoracicVertebrae.svg';
import RibsSvg from '../assets/skeleton_parts/Ribs.svg';
import PelvicGirdleSvg from '../assets/skeleton_parts/PelvicGirdle.svg';
import FemurLeftSvg from '../assets/skeleton_parts/FemurLeft.svg';
import FemurRightSvg from '../assets/skeleton_parts/FemurRight.svg';
import TibiaLeftSvg from '../assets/skeleton_parts/TibiaLeft.svg';
import TibiaRightSvg from '../assets/skeleton_parts/TibiaRight.svg';
import FibulaLeftSvg from '../assets/skeleton_parts/FibulaLeft.svg';
import FibulaRightSvg from '../assets/skeleton_parts/FibulaRight.svg';
import TarsalsLeftSvg from '../assets/skeleton_parts/TarsalsLeft.svg';
import TarsalsRightSvg from '../assets/skeleton_parts/TarsalsRight.svg';
import ScapulaSvg from '../assets/skeleton_parts/Scapula.svg';
import HumerusLeftSvg from '../assets/skeleton_parts/HumerusLeft.svg';
import HumerusRightSvg from '../assets/skeleton_parts/HumerusRight.svg';
import RadiusLeftSvg from '../assets/skeleton_parts/RadiusLeft.svg';
import RadiusRightSvg from '../assets/skeleton_parts/RadiusRight.svg';
import UlnaLeftSvg from '../assets/skeleton_parts/UlnaLeft.svg';
import UlnaRightSvg from '../assets/skeleton_parts/UlnaRight.svg';
import SternumSvg from '../assets/skeleton_parts/Sternum.svg';
import ManubriumSvg from '../assets/skeleton_parts/Manubrium.svg';
import MandibleSvg from '../assets/skeleton_parts/Mandible.svg';
import ClavicleLeftSvg from '../assets/skeleton_parts/ClavicleLeft.svg';
import ClavicleRightSvg from '../assets/skeleton_parts/ClavicleRight.svg';
import CervicalVertebraeSvg from '../assets/skeleton_parts/CervicalVertebrae.svg';
import LumbarVertebraeSvg from '../assets/skeleton_parts/LumbarVertebrae.svg';
import SacrumSvg from '../assets/skeleton_parts/Sacrum.svg';
import CoccyxSvg from '../assets/skeleton_parts/Coccyx.svg';
import PatellaLeftSvg from '../assets/skeleton_parts/PatellaLeft.svg';
import PatellaRightSvg from '../assets/skeleton_parts/PatellaRight.svg';
import CarpalsLeftSvg from '../assets/skeleton_parts/CarpalsLeft.svg';
import CarpalsRightSvg from '../assets/skeleton_parts/CarpalsRight.svg';
import MetacarpalsLeftSvg from '../assets/skeleton_parts/MetacarpalsLeft.svg';
import MetacarpalsRightSvg from '../assets/skeleton_parts/MetacarpalsRight.svg';
import PhalangesLeftSvg from '../assets/skeleton_parts/PhalangesLeft.svg';
import PhalangesRightSvg from '../assets/skeleton_parts/PhalangesRight.svg';
import MetatarsalsLeftSvg from '../assets/skeleton_parts/MetatarsalsLeft.svg';
import MetatarsalsRightSvg from '../assets/skeleton_parts/MetatarsalsRight.svg';
import PhalangesFootLeftSvg from '../assets/skeleton_parts/PhalangesFootLeft.svg';
import PhalangesFootRightSvg from '../assets/skeleton_parts/PhalangesFootRight.svg';

// Map SVG group IDs to labels and descriptions
const PARTS = [
	// Head and neck
	{ id: 'Skull', label: 'Skull', description: 'The skull is the bony structure that forms the head and protects the brain.', svg: CraniumSvg },
	{ id: 'Mandible', label: 'Mandible', description: 'The mandible is the lower jaw bone, the largest bone in the human skull.', svg: MandibleSvg },
	
	// Spine
	{ id: 'CervicalVertebrae', label: 'Cervical Vertebrae', description: 'The seven cervical vertebrae form the neck region of the spine.', svg: CervicalVertebraeSvg },
	{ id: 'ThoracicVertebrae', label: 'Thoracic Vertebrae', description: 'The twelve thoracic vertebrae connect to the ribs and form the middle spine.', svg: ThoracicVertebraeSvg },
	{ id: 'LumbarVertebrae', label: 'Lumbar Vertebrae', description: 'The five lumbar vertebrae are the largest and strongest vertebrae in the lower back.', svg: LumbarVertebraeSvg },
	{ id: 'Sacrum', label: 'Sacrum', description: 'The sacrum is a triangular bone formed by the fusion of five vertebrae, connecting to the pelvis.', svg: SacrumSvg },
	{ id: 'Coccyx', label: 'Coccyx', description: 'The coccyx, or tailbone, is the final segment of the vertebral column.', svg: CoccyxSvg },
	
	// Chest
	{ id: 'Ribs', label: 'Ribs', description: 'The ribs are curved bones that form the rib cage, protecting vital organs like the heart and lungs.', svg: RibsSvg },
	{ id: 'Sternum', label: 'Sternum', description: 'The sternum, or breastbone, is a flat bone in the center of the chest.', svg: SternumSvg },
	{ id: 'Manubrium', label: 'Manubrium', description: 'The manubrium is the upper part of the sternum that connects to the clavicles and first ribs.', svg: ManubriumSvg },
	
	// Shoulders and arms
	{ id: 'ClavicleLeft', label: 'Clavicle (Left)', description: 'The clavicle, or collarbone, connects the arm to the trunk of the body.', svg: ClavicleLeftSvg },
	{ id: 'ClavicleRight', label: 'Clavicle (Right)', description: 'The clavicle, or collarbone, connects the arm to the trunk of the body.', svg: ClavicleRightSvg },
	{ id: 'Scapula', label: 'Scapulae', description: 'The scapulae, or shoulder blades, connect the humerus with the clavicle on both sides.', svg: ScapulaSvg },
	{ id: 'HumerusLeft', label: 'Humerus (Left)', description: 'The humerus is the long bone in the upper arm.', svg: HumerusLeftSvg },
	{ id: 'HumerusRight', label: 'Humerus (Right)', description: 'The humerus is the long bone in the upper arm.', svg: HumerusRightSvg },
	{ id: 'RadiusLeft', label: 'Radius (Left)', description: 'The radius is one of the two bones in the forearm, on the thumb side.', svg: RadiusLeftSvg },
	{ id: 'RadiusRight', label: 'Radius (Right)', description: 'The radius is one of the two bones in the forearm, on the thumb side.', svg: RadiusRightSvg },
	{ id: 'UlnaLeft', label: 'Ulna (Left)', description: 'The ulna is one of the two bones in the forearm, on the pinky side.', svg: UlnaLeftSvg },
	{ id: 'UlnaRight', label: 'Ulna (Right)', description: 'The ulna is one of the two bones in the forearm, on the pinky side.', svg: UlnaRightSvg },
	
	// Hands
	{ id: 'CarpalsLeft', label: 'Carpals (Left)', description: 'The carpals are the eight small bones that make up the wrist.', svg: CarpalsLeftSvg },
	{ id: 'CarpalsRight', label: 'Carpals (Right)', description: 'The carpals are the eight small bones that make up the wrist.', svg: CarpalsRightSvg },
	{ id: 'MetacarpalsLeft', label: 'Metacarpals (Left)', description: 'The metacarpals are the five bones that form the palm of the hand.', svg: MetacarpalsLeftSvg },
	{ id: 'MetacarpalsRight', label: 'Metacarpals (Right)', description: 'The metacarpals are the five bones that form the palm of the hand.', svg: MetacarpalsRightSvg },
	{ id: 'PhalangesLeft', label: 'Phalanges (Left)', description: 'The phalanges are the finger bones, with 14 bones in each hand.', svg: PhalangesLeftSvg },
	{ id: 'PhalangesRight', label: 'Phalanges (Right)', description: 'The phalanges are the finger bones, with 14 bones in each hand.', svg: PhalangesRightSvg },
	
	// Pelvis and legs
	{ id: 'Pelvis', label: 'Pelvis', description: 'The pelvis is a basin-shaped structure that connects the spine to the legs.', svg: PelvicGirdleSvg },
	{ id: 'FemurLeft', label: 'Femur (Left)', description: 'The femur, or thigh bone, is the longest and strongest bone in the human body.', svg: FemurLeftSvg },
	{ id: 'FemurRight', label: 'Femur (Right)', description: 'The femur, or thigh bone, is the longest and strongest bone in the human body.', svg: FemurRightSvg },
	{ id: 'PatellaLeft', label: 'Patella (Left)', description: 'The patella, or kneecap, protects the knee joint and improves leverage for leg muscles.', svg: PatellaLeftSvg },
	{ id: 'PatellaRight', label: 'Patella (Right)', description: 'The patella, or kneecap, protects the knee joint and improves leverage for leg muscles.', svg: PatellaRightSvg },
	{ id: 'TibiaLeft', label: 'Tibia (Left)', description: 'The tibia, or shinbone, is the larger of the two bones in the lower leg.', svg: TibiaLeftSvg },
	{ id: 'TibiaRight', label: 'Tibia (Right)', description: 'The tibia, or shinbone, is the larger of the two bones in the lower leg.', svg: TibiaRightSvg },
	{ id: 'FibulaLeft', label: 'Fibula (Left)', description: 'The fibula is the thinner and smaller bone of the lower leg.', svg: FibulaLeftSvg },
	{ id: 'FibulaRight', label: 'Fibula (Right)', description: 'The fibula is the thinner and smaller bone of the lower leg.', svg: FibulaRightSvg },
	
	// Feet
	{ id: 'TarsalsLeft', label: 'Tarsals (Left)', description: 'The tarsals are the seven bones that form the rear part of the foot and heel.', svg: TarsalsLeftSvg },
	{ id: 'TarsalsRight', label: 'Tarsals (Right)', description: 'The tarsals are the seven bones that form the rear part of the foot and heel.', svg: TarsalsRightSvg },
	{ id: 'MetatarsalsLeft', label: 'Metatarsals (Left)', description: 'The metatarsals are the five long bones in the forefoot.', svg: MetatarsalsLeftSvg },
	{ id: 'MetatarsalsRight', label: 'Metatarsals (Right)', description: 'The metatarsals are the five long bones in the forefoot.', svg: MetatarsalsRightSvg },
	{ id: 'PhalangesFootLeft', label: 'Toe Phalanges (Left)', description: 'The phalanges are the toe bones, with 14 bones in each foot.', svg: PhalangesFootLeftSvg },
	{ id: 'PhalangesFootRight', label: 'Toe Phalanges (Right)', description: 'The phalanges are the toe bones, with 14 bones in each foot.', svg: PhalangesFootRightSvg },
];

// Well-spaced anatomical skeleton - connected but clearly visible
const PART_POSITIONS = {
	// Head - centered and prominent
	Skull: { top: 15, left: 350, rotation: 0 },
	Mandible: { top: 75, left: 355, rotation: 0 },
	
	// Spine - continuous chain down center with spacing
	CervicalVertebrae: { top: 100, left: 365, rotation: 0 },
	ThoracicVertebrae: { top: 140, left: 365, rotation: 0 },
	LumbarVertebrae: { top: 200, left: 365, rotation: 0 },
	Sacrum: { top: 250, left: 365, rotation: 0 },
	Coccyx: { top: 285, left: 365, rotation: 0 },
	
	// Chest - well-positioned around spine
	Manubrium: { top: 125, left: 365, rotation: 0 },
	Sternum: { top: 155, left: 365, rotation: 0 },
	Ribs: { top: 150, left: 320, rotation: 0 },
	
	// Shoulders - wider shoulder span
	ClavicleLeft: { top: 120, left: 320, rotation: 0 },
	ClavicleRight: { top: 120, left: 410, rotation: 0 },
	Scapula: { top: 135, left: 340, rotation: 0 },
	
	// Arms - spread naturally from shoulders
	HumerusLeft: { top: 150, left: 270, rotation: 0 },
	HumerusRight: { top: 150, left: 460, rotation: 180 },
	
	// Forearms - positioned with good spacing
	RadiusLeft: { top: 210, left: 265, rotation: 0 },
	RadiusRight: { top: 210, left: 465, rotation: 180 },
	UlnaLeft: { top: 210, left: 255, rotation: 0 },
	UlnaRight: { top: 210, left: 475, rotation: 180 },
	
	// Hands - clearly visible from arms
	CarpalsLeft: { top: 270, left: 260, rotation: 0 },
	CarpalsRight: { top: 270, left: 470, rotation: 0 },
	MetacarpalsLeft: { top: 290, left: 260, rotation: 0 },
	MetacarpalsRight: { top: 290, left: 470, rotation: 0 },
	PhalangesLeft: { top: 315, left: 260, rotation: 0 },
	PhalangesRight: { top: 315, left: 470, rotation: 0 },
	
	// Pelvis - centered below spine
	Pelvis: { top: 275, left: 340, rotation: 0 },
	
	// Legs - natural hip width apart
	FemurLeft: { top: 320, left: 340, rotation: 0 },
	FemurRight: { top: 320, left: 390, rotation: 0 },
	
	// Knees - at proper leg spacing
	PatellaLeft: { top: 405, left: 342, rotation: 0 },
	PatellaRight: { top: 405, left: 392, rotation: 0 },
	
	// Lower legs - well-spaced
	TibiaLeft: { top: 420, left: 340, rotation: 0 },
	TibiaRight: { top: 420, left: 390, rotation: 0 },
	FibulaLeft: { top: 420, left: 330, rotation: 0 },
	FibulaRight: { top: 420, left: 400, rotation: 0 },
	
	// Feet - clearly positioned
	TarsalsLeft: { top: 500, left: 335, rotation: 0 },
	TarsalsRight: { top: 500, left: 395, rotation: 0 },
	MetatarsalsLeft: { top: 525, left: 335, rotation: 0 },
	MetatarsalsRight: { top: 525, left: 395, rotation: 0 },
	PhalangesFootLeft: { top: 555, left: 335, rotation: 0 },
	PhalangesFootRight: { top: 555, left: 395, rotation: 0 },
};

// Helper to get paired part IDs
const getPairedPartIds = (id) => {
	if (id.endsWith('Left')) return [id, id.replace('Left', 'Right')];
	if (id.endsWith('Right')) return [id, id.replace('Right', 'Left')];
	return [id];
};

const TheSkeleton = () => {
	const [hovered, setHovered] = useState(null);
	const [selected, setSelected] = useState(null);

	// Compute highlighted parts for hover and selection
	const hoveredParts = hovered ? getPairedPartIds(hovered) : [];
	const selectedParts = selected ? getPairedPartIds(selected) : [];

	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
			<div style={{ position: 'relative', width: 800, height: 700, background: '#fff', border: '1px solid #eee' }}>
				{PARTS.map(part => {
					return (
						<div
							key={part.id}
							style={{
								position: 'absolute',
								top: PART_POSITIONS[part.id]?.top,
								left: PART_POSITIONS[part.id]?.left,
								cursor: 'pointer',
								transition: 'all 0.3s ease',
								zIndex: hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 10 : 1,
								transform: `rotate(${PART_POSITIONS[part.id]?.rotation || 0}deg) ${hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 'scale(1.05)' : 'scale(1)'}`,
								transformOrigin: 'center center',
							}}
							onMouseEnter={() => setHovered(part.id)}
							onMouseLeave={() => setHovered(null)}
							onClick={() => setSelected(part.id)}
							title={part.label}
						>
							{part.svg ? (
								<img
									src={part.svg}
									alt={part.label}
									style={{
										width: 'auto',
										height: 'auto',
										maxWidth: 
											// Head
											part.id === 'Skull' ? '75px' :
											part.id === 'Mandible' ? '55px' :
											// Large central structures
											part.id === 'Ribs' ? '120px' :
											part.id === 'Pelvis' ? '95px' :
											part.id === 'Scapula' ? '85px' :
											// Spine
											part.id.includes('Vertebrae') ? '65px' :
											part.id.includes('Sacrum') ? '50px' :
											part.id.includes('Coccyx') ? '25px' :
											// Long bones - legs
											part.id.includes('Femur') ? '60px' :
											part.id.includes('Tibia') ? '55px' :
											part.id.includes('Fibula') ? '45px' :
											// Long bones - arms  
											part.id.includes('Humerus') ? '55px' :
											part.id.includes('Radius') || part.id.includes('Ulna') ? '45px' :
											// Connective bones
											part.id.includes('Clavicle') ? '50px' :
											part.id.includes('Patella') ? '20px' :
											// Chest
											part.id.includes('Sternum') || part.id.includes('Manubrium') ? '30px' :
											// Hand bones
											part.id.includes('Carpals') ? '35px' :
											part.id.includes('Metacarpals') ? '40px' :
											part.id.includes('Phalanges') && !part.id.includes('Foot') ? '45px' :
											// Foot bones
											part.id.includes('Tarsals') ? '35px' :
											part.id.includes('Metatarsals') ? '40px' :
											part.id.includes('PhalangesFoot') ? '40px' :
											// Default
											'50px',
										filter: hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 
											'drop-shadow(0 0 10px #1976d2) brightness(1.2)' : 
											'none',
										opacity: hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 1 : 0.85,
										transition: 'all 0.3s ease',
									}}
								/>
							) : (
								<span style={{ color: '#aaa', fontSize: 10 }}>No SVG</span>
							)}
						</div>
					);
				})}
			</div>
			{/* Description popup */}
			{selected && (
				<div style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					background: 'white',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
					maxWidth: '400px',
					zIndex: 1000,
					border: '1px solid #ddd'
				}}>
					<h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>
						{PARTS.find(p => p.id === selected)?.label}
					</h3>
					<p style={{ margin: 0, lineHeight: 1.5, color: '#333' }}>
						{PARTS.find(p => p.id === selected)?.description}
					</p>
					<button 
						onClick={() => setSelected(null)}
						style={{
							position: 'absolute',
							top: '10px',
							right: '10px',
							background: 'none',
							border: 'none',
							fontSize: '20px',
							cursor: 'pointer',
							color: '#666'
						}}
					>
						×
					</button>
				</div>
			)}
		</div>
	);
};

export default TheSkeleton;