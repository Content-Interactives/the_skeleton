import React, { useState, useEffect, useRef } from 'react';
import skeletonSVG from '../assets/skeleton_no_text.svg';

// Map SVG group IDs to labels and descriptions
const PARTS = [
	{ id: 'Skull', label: 'Skull', description: 'The skull is the bony structure that forms the head and protects the brain.' },
	{ id: 'Spine', label: 'Spine', description: 'The spine (vertebral column) is made up of 33 vertebrae that protect the spinal cord and support the body.' },
	{ id: 'Ribs', label: 'Ribs', description: 'The ribs are curved bones that form the rib cage, protecting vital organs like the heart and lungs.' },
	{ id: 'Pelvis', label: 'Pelvis', description: 'The pelvis is a basin-shaped structure that connects the spine to the legs.' },
	{ id: 'FemurLeft', label: 'Femur (Left)', description: 'The femur, or thigh bone, is the longest and strongest bone in the human body.' },
	{ id: 'FemurRight', label: 'Femur (Right)', description: 'The femur, or thigh bone, is the longest and strongest bone in the human body.' },
	{ id: 'TibiaLeft', label: 'Tibia (Left)', description: 'The tibia, or shinbone, is the larger of the two bones in the lower leg.' },
	{ id: 'TibiaRight', label: 'Tibia (Right)', description: 'The tibia, or shinbone, is the larger of the two bones in the lower leg.' },
	{ id: 'FibulaLeft', label: 'Fibula (Left)', description: 'The fibula is the thinner and smaller bone of the lower leg.' },
	{ id: 'FibulaRight', label: 'Fibula (Right)', description: 'The fibula is the thinner and smaller bone of the lower leg.' },
	{ id: 'FootLeft', label: 'Foot (Left)', description: 'The foot consists of 26 bones that support the body\'s weight and enable walking and running.' },
	{ id: 'FootRight', label: 'Foot (Right)', description: 'The foot consists of 26 bones that support the body\'s weight and enable walking and running.' },
	{ id: 'ScapulaLeft', label: 'Scapula (Left)', description: 'The scapula, or shoulder blade, connects the humerus with the clavicle.' },
	{ id: 'ScapulaRight', label: 'Scapula (Right)', description: 'The scapula, or shoulder blade, connects the humerus with the clavicle.' },
	{ id: 'HumerusLeft', label: 'Humerus (Left)', description: 'The humerus is the long bone in the upper arm.' },
	{ id: 'HumerusRight', label: 'Humerus (Right)', description: 'The humerus is the long bone in the upper arm.' },
	{ id: 'RadiusLeft', label: 'Radius (Left)', description: 'The radius is one of the two bones in the forearm.' },
	{ id: 'RadiusRight', label: 'Radius (Right)', description: 'The radius is one of the two bones in the forearm.' },
	// Add more as needed
];

// Approximate positions for each part (tweak as needed)
const PART_POSITIONS = {
	Skull: { top: 40, left: 180 },
	Spine: { top: 100, left: 195 },
	Ribs: { top: 130, left: 160 },
	Pelvis: { top: 220, left: 180 },
	FemurLeft: { top: 300, left: 150 },
	FemurRight: { top: 300, left: 220 },
	TibiaLeft: { top: 400, left: 150 },
	TibiaRight: { top: 400, left: 220 },
	FibulaLeft: { top: 420, left: 140 },
	FibulaRight: { top: 420, left: 230 },
	FootLeft: { top: 500, left: 140 },
	FootRight: { top: 500, left: 230 },
	ScapulaLeft: { top: 90, left: 130 },
	ScapulaRight: { top: 90, left: 260 },
	HumerusLeft: { top: 140, left: 90 },
	HumerusRight: { top: 140, left: 300 },
	RadiusLeft: { top: 220, left: 70 },
	RadiusRight: { top: 220, left: 320 },
	// ... add more as needed
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
			<div style={{ position: 'relative', width: 400, height: 600, background: '#fff', border: '1px solid #eee' }}>
				{PARTS.map(part => (
					<div
						key={part.id}
						style={{
							position: 'absolute',
							top: PART_POSITIONS[part.id]?.top,
							left: PART_POSITIONS[part.id]?.left,
							width: 40,
							height: 40,
							borderRadius: '50%',
							background: hoveredParts.includes(part.id) ? 'gold' : '#222',
							opacity: hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 0.8 : 0.5,
							border: selectedParts.includes(part.id) ? '3px solid #1976d2' : '2px solid #fff',
							cursor: 'pointer',
							transition: 'all 0.2s',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#fff',
							fontWeight: 'bold',
							fontSize: 12,
							zIndex: hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 2 : 1,
						}}
						onMouseEnter={() => setHovered(part.id)}
						onMouseLeave={() => setHovered(null)}
						onClick={() => setSelected(part.id)}
						title={part.label}
					>
						{part.label.split(' ')[0]}
					</div>
				))}
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