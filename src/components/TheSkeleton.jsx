import React, { useState, useEffect } from 'react';

const PARTS = [
	// Skull at top center
	{ id: 'skull', label: 'Skull', partX: 250, partY: 80, labelX: 400, labelY: 80 },
	// Clavicle just below skull
	{ id: 'clavicle', label: 'Clavicle', partX: 250, partY: 140, labelX: 400, labelY: 140 },
	// Ribs below clavicle
	{ id: 'ribs', label: 'Ribs', partX: 250, partY: 210, labelX: 400, labelY: 210 },
	// Pelvis below ribs
	{ id: 'pelvis', label: 'Pelvis', partX: 250, partY: 300, labelX: 400, labelY: 300 },
	// Femur below pelvis
	{ id: 'femur', label: 'Femur', partX: 250, partY: 380, labelX: 400, labelY: 380 },
	// Tibia below femur
	{ id: 'tibia', label: 'Tibia', partX: 250, partY: 460, labelX: 400, labelY: 460 },
	// Humerus to the left of ribs/clavicle
	{ id: 'humerus', label: 'Humerus', partX: 140, partY: 170, labelX: 60, labelY: 170 },
];

const correctAnswers = {
	skull: 'Skull',
	clavicle: 'Clavicle',
	humerus: 'Humerus',
	ribs: 'Ribs',
	pelvis: 'Pelvis',
	femur: 'Femur',
	tibia: 'Tibia',
};

const TheSkeleton = () => {
	const [hovered, setHovered] = useState(null);
	const [selected, setSelected] = useState(null);
	const [labels, setLabels] = useState({});
	const [feedback, setFeedback] = useState({});
	const [inputValue, setInputValue] = useState('');
	const [lastIncorrect, setLastIncorrect] = useState(null);
	const [showCelebration, setShowCelebration] = useState(false);

	const handlePartClick = (id) => {
		setSelected(id);
		setInputValue(labels[id] || '');
		setLastIncorrect(null);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleInputSubmit = (e) => {
		e.preventDefault();
		const isCorrect = inputValue.trim().toLowerCase() === correctAnswers[selected].toLowerCase();
		if (isCorrect) {
			setLabels({ ...labels, [selected]: inputValue });
			setFeedback((prev) => ({ ...prev, [selected]: true }));
			setSelected(null);
			setInputValue('');
			setLastIncorrect(null);
		} else {
			setFeedback((prev) => ({ ...prev, [selected]: false }));
			setLastIncorrect(selected);
		}
	};

	// Progress calculation
	const total = Object.keys(correctAnswers).length;
	const correct = Object.values(feedback).filter(Boolean).length;
	const progress = correct / total;

	useEffect(() => {
		if (correct === total && total > 0) {
			setShowCelebration(true);
			const timeout = setTimeout(() => setShowCelebration(false), 2500);
			return () => clearTimeout(timeout);
		}
	}, [correct, total]);

	const handleReset = () => {
		setLabels({});
		setFeedback({});
		setSelected(null);
		setInputValue('');
	};

	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
			{/* Progress Bar */}
			<div style={{ width: 400, margin: '24px auto 8px auto', height: 18, background: '#eee', borderRadius: 9, overflow: 'hidden', border: '1px solid #ccc', position: 'relative' }}>
				<div style={{ width: `${progress * 100}%`, height: '100%', background: '#8fd19e', transition: 'width 0.5s' }} />
				<span style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#333', fontSize: 14 }}>
					{correct} / {total} correct
				</span>
			</div>
			{/* Celebration animation */}
			{showCelebration && (
				<div style={{
					position: 'absolute',
					top: 80,
					left: 0,
					width: '100%',
					fontSize: 32,
					color: '#4caf50',
					fontWeight: 'bold',
					textShadow: '0 2px 8px #fff',
					animation: 'fadeInOut 2.5s',
					pointerEvents: 'none',
					zIndex: 10,
					display: 'flex',
					justifyContent: 'center',
				}}>
					🎉 Well done! 🎉
					<style>{`
						@keyframes fadeInOut {
							0% { opacity: 0; }
							10% { opacity: 1; }
							90% { opacity: 1; }
							100% { opacity: 0; }
						}
					`}</style>
				</div>
			)}
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
				{/* Callout lines and labels/inputs */}
				{PARTS.map((part) => {
					const isSelected = selected === part.id;
					const isCorrect = feedback[part.id] === true;
					const isIncorrect = feedback[part.id] === false;
					return (
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
							{/* Label or input */}
							{isSelected ? (
								<foreignObject x={part.labelX + 8} y={part.labelY - 16} width={150} height={40}>
									<form onSubmit={handleInputSubmit} style={{ display: 'flex', alignItems: 'center' }}>
										<input
											type="text"
											value={inputValue}
											onChange={handleInputChange}
											autoFocus
											style={{
												width: '70px',
												fontSize: 14,
												border: feedback[part.id] === false ? '2px solid #e53935' : '2px solid #333',
												borderRadius: 6,
												outline: 'none',
												textAlign: 'center',
												background: feedback[part.id] === false ? '#ffeaea' : '#fff',
												marginRight: 4,
											}}
										/>
										{/* Red x-mark if incorrect */}
										{feedback[part.id] === false && (
											<span style={{ color: '#e53935', fontSize: 20, marginLeft: 2, marginRight: 4 }}>✗</span>
										)}
										<button type="submit" style={{ fontSize: 14, marginLeft: 2 }}>OK</button>
									</form>
									{/* Gentle feedback message if incorrect */}
									{feedback[part.id] === false && lastIncorrect === part.id && (
										<div style={{ color: '#e53935', fontSize: 13, marginTop: 2 }}>Try again!</div>
									)}
								</foreignObject>
							) : labels[part.id] ? (
								<g>
									<text
										x={part.labelX + 10}
										y={part.labelY + 5}
										fontSize="15"
										fontWeight="bold"
										fill={feedback[part.id] === true ? '#388e3c' : '#333'}
										textAnchor="start"
										alignmentBaseline="middle"
									>
										{labels[part.id]}
									</text>
									{/* Checkmark only if correct */}
									{feedback[part.id] === true && (
										<text x={part.labelX + 65} y={part.labelY + 7} fontSize="18" fill="#7c3aed">✔️</text>
									)}
								</g>
							) : (
								<text
									x={part.labelX + 10}
									y={part.labelY + 5}
									fontSize="13"
									fill="#bbb"
									textAnchor="start"
									alignmentBaseline="middle"
									style={{ fontStyle: 'italic' }}
								>
									{part.label}
								</text>
							)}
						</g>
					);
				})}
			</svg>
			{/* Reset Button */}
			<button
				onClick={handleReset}
				style={{ marginTop: 24, padding: '10px 32px', fontSize: 16, borderRadius: 8, border: '1px solid #888', background: '#f5f5f5', cursor: 'pointer', fontWeight: 'bold', color: '#333' }}
			>
				Reset
			</button>
		</div>
	);
};

export default TheSkeleton;