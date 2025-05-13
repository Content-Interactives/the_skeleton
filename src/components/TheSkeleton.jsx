import React, { useState } from 'react';

const PARTS = [
	{ 
		id: 'skull', 
		label: 'Skull', 
		partX: 250, 
		partY: 80, 
		labelX: 400, 
		labelY: 80,
		description: 'The skull is the bony structure that forms the head and protects the brain. It consists of 22 bones that are fused together in adults.'
	},
	{ 
		id: 'clavicle', 
		label: 'Clavicle', 
		partX: 250, 
		partY: 140, 
		labelX: 400, 
		labelY: 140,
		description: 'The clavicle, or collarbone, is a long bone that connects the shoulder blade to the sternum. It helps support the shoulder and arm.'
	},
	{ 
		id: 'ribs', 
		label: 'Ribs', 
		partX: 250, 
		partY: 210, 
		labelX: 400, 
		labelY: 210,
		description: 'The ribs are curved bones that form the rib cage, protecting vital organs like the heart and lungs. Humans typically have 12 pairs of ribs.'
	},
	{ 
		id: 'pelvis', 
		label: 'Pelvis', 
		partX: 250, 
		partY: 300, 
		labelX: 400, 
		labelY: 300,
		description: 'The pelvis is a basin-shaped structure that connects the spine to the legs. It supports the weight of the upper body and protects reproductive organs.'
	},
	{ 
		id: 'femur', 
		label: 'Femur', 
		partX: 250, 
		partY: 380, 
		labelX: 400, 
		labelY: 380,
		description: 'The femur, or thigh bone, is the longest and strongest bone in the human body. It connects the hip to the knee.'
	},
	{ 
		id: 'tibia', 
		label: 'Tibia', 
		partX: 250, 
		partY: 460, 
		labelX: 400, 
		labelY: 460,
		description: 'The tibia, or shinbone, is the larger of the two bones in the lower leg. It bears most of the body\'s weight and forms the knee joint with the femur.'
	},
	{ 
		id: 'humerus', 
		label: 'Humerus', 
		partX: 140, 
		partY: 170, 
		labelX: 60, 
		labelY: 170,
		description: 'The humerus is the long bone in the upper arm, connecting the shoulder to the elbow. It allows for arm movement and supports the forearm.'
	},
];

const TheSkeleton = () => {
	const [hovered, setHovered] = useState(null);
	const [selected, setSelected] = useState(null);

	const handlePartClick = (id) => {
		setSelected(selected === id ? null : id);
	};

	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
			<svg
				width="500"
				height="500"
				viewBox="0 0 500 500"
				style={{ border: '1px solid #ccc', background: '#fff', borderRadius: 12 }}
			>
				{/* Skeleton parts */}
				{/* Skull */}
				<circle
					id="skull"
					cx="250"
					cy="80"
					r="40"
					fill={hovered === 'skull' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('skull')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('skull')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Clavicle */}
				<rect
					id="clavicle"
					x="250"
					y="140"
					width="120"
					height="15"
					fill={hovered === 'clavicle' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('clavicle')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('clavicle')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Humerus (left) */}
				<rect
					id="humerus"
					x="140"
					y="170"
					width="25"
					height="90"
					fill={hovered === 'humerus' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('humerus')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('humerus')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Ribs */}
				<ellipse
					id="ribs"
					cx="250"
					cy="210"
					rx="80"
					ry="60"
					fill={hovered === 'ribs' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('ribs')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('ribs')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Pelvis */}
				<ellipse
					id="pelvis"
					cx="250"
					cy="300"
					rx="70"
					ry="40"
					fill={hovered === 'pelvis' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('pelvis')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('pelvis')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Femur (left) */}
				<rect
					id="femur"
					x="250"
					y="380"
					width="25"
					height="80"
					fill={hovered === 'femur' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('femur')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('femur')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Tibia (left) */}
				<rect
					id="tibia"
					x="250"
					y="460"
					width="25"
					height="50"
					fill={hovered === 'tibia' ? '#ffe066' : '#fff'}
					stroke="#333"
					strokeWidth="2"
					onMouseEnter={() => setHovered('tibia')}
					onMouseLeave={() => setHovered(null)}
					onClick={() => handlePartClick('tibia')}
					style={{ cursor: 'pointer' }}
				/>
				{/* Labels and descriptions */}
				{PARTS.map((part) => (
					<g key={part.id}>
						<line
							x1={part.partX}
							y1={part.partY}
							x2={part.labelX}
							y2={part.labelY}
							stroke="#1976d2"
							strokeWidth={2}
						/>
						{/* Dot at the part end */}
						<circle
							cx={part.partX}
							cy={part.partY}
							r={4}
							fill="#1976d2"
						/>
						{/* Label */}
						<text
							x={part.labelX + 10}
							y={part.labelY + 5}
							fontSize="15"
							fontWeight="bold"
							fill="#333"
							textAnchor="start"
							alignmentBaseline="middle"
						>
							{part.label}
						</text>
					</g>
				))}
			</svg>
			
			{/* Description popup */}
			{selected && (
				<div style={{
					position: 'absolute',
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