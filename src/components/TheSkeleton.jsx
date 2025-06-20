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

// Well-spaced anatomical skeleton - moved left by 150px total
const PART_POSITIONS = {
	// Head and neck
	Skull: { top: -43.88, left: 227.2, width: 54.43, height: 70.8 },
	Mandible: { top: 5.14, left: 229.91, width: 48.85, height: 35.21 },
	
	// Spine
	CervicalVertebrae: { top: 11.43, left: 239.5, width: 30.73, height: 45.96 },
	ThoracicVertebrae: { top: 71.52, left: 246.28, width: 15.7, height: 114.64 },
	LumbarVertebrae: { top: 164.15, left: 237.9, width: 32.77, height: 59.15 },
	Sacrum: { top: 211.85, left: 234.2, width: 38.92, height: 31.93 },
	Coccyx: { top: 242.12, left: 248.12, width: 10.73, height: 10.79 },
	
	// Chest
	Manubrium: { top: 63.17, left: 244.34, width: 21.85, height: 17.83 },
	Sternum: { top: 77.88, left: 247.39, width: 15.4, height: 54.94 },
	Ribs: { top: 52.12, left: 201.65, width: 106.86, height: 128.05 },
	
	// Shoulders and arms
	ClavicleLeft: { top: 53.89, left: 261.4, width: 54.68, height: 13.64 },
	ClavicleRight: { top: 52.78, left: 195.2, width: 53.96, height: 14.55 },
	Scapula: { top: 54.19, left: 185.38, width: 139.81, height: 66.65 },
	HumerusLeft: { top: 72.03, left: 309.76, width: 39.45, height: 115.6 },
	HumerusRight: { top: 72.85, left: 151.6, width: 49.95, height: 113.19 },
	RadiusLeft: { top: 180.46, left: 341.51, width: 33.56, height: 84.45 },
	RadiusRight: { top: 181.75, left: 151.14, width: 19.16, height: 88.46 },
	UlnaLeft: { top: 183.42, left: 331.6, width: 31.44, height: 82.39 },
	UlnaRight: { top: 182.63, left: 148.54, width: 22.76, height: 87.92 },
	
	// Hands
	CarpalsLeft: { top: 262.03, left: 356.76, width: 22.69, height: 15.39 },
	CarpalsRight: { top: 268.36, left: 149.11, width: 22.54, height: 14.18 },
	MetacarpalsLeft: { top: 266.99, left: 357.85, width: 36.04, height: 29.76 },
	MetacarpalsRight: { top: 275.59, left: 146.61, width: 35.01, height: 28.13 },
	PhalangesLeft: { top: 270.09, left: 360.3, width: 47.59, height: 54.99 },
	PhalangesRight: { top: 284.45, left: 145.1, width: 45.8, height: 49.53 },
	
	// Pelvis and legs
	Pelvis: { top: 195.99, left: 199.92, width: 109.48, height: 76.15 },
	FemurLeft: { top: 245.36, left: 257.17, width: 55.78, height: 169.57 },
	FemurRight: { top: 243.23, left: 192.89, width: 56.71, height: 169.41 },
	PatellaLeft: { top: 405.99, left: 265.04, width: 19.3, height: 18.96 },
	PatellaRight: { top: 406.03, left: 221.57, width: 19.3, height: 18.96 },
	TibiaLeft: { top: 413.22, left: 253.04, width: 35.91, height: 141.42 },
	TibiaRight: { top: 413.88, left: 216.55, width: 34.46, height: 141.32 },
	FibulaLeft: { top: 424.23, left: 271.23, width: 19.01, height: 125.79 },
	FibulaRight: { top: 425.33, left: 215.34, width: 17.21, height: 126.27 },
	
	// Feet
	TarsalsLeft: { top: 545.90, left: 254.23, width: 29.80, height: 27.58 },
	TarsalsRight: { top: 545.85, left: 219.35, width: 29.88, height: 26.14 },
	MetatarsalsLeft: { top: 559.20, left: 261.03, width: 34.24, height: 25.96 },
	MetatarsalsRight: { top: 559.37, left: 208.88, width: 34.01, height: 24.34 },
	PhalangesFootLeft: { top: 573.87, left: 274.77, width: 30.47, height: 22.79 },
	PhalangesFootRight: { top: 574.28, left: 199.52, width: 30.41, height: 20.86 },
};

// Helper to get paired part IDs
const getPairedPartIds = (id) => {
	if (id.endsWith('Left')) return [id, id.replace('Left', 'Right')];
	if (id.endsWith('Right')) return [id, id.replace('Right', 'Left')];
	return [id];
};

// Helper to get a custom bounding box between two bones
const getBetweenBox = (partId, options = {}) => {
	const box = PART_POSITIONS[partId];
	if (!box) return null;
	// Shrink the box horizontally to the middle 40% and vertically to the middle 60%
	const shrinkX = options.shrinkX || 0.3; // 30% from each side
	const shrinkY = options.shrinkY || 0.2; // 20% from top and bottom
	return {
		left: box.left + box.width * shrinkX,
		top: box.top + box.height * shrinkY,
		width: box.width * (1 - 2 * shrinkX),
		height: box.height * (1 - 2 * shrinkY)
	};
};

const TheSkeleton = () => {
	const [hovered, setHovered] = useState(null);
	const [selected, setSelected] = useState(null);
	const [loadedSVGs, setLoadedSVGs] = useState({});
	const [popupPosition, setPopupPosition] = useState({ top: 10, left: 10 });
	const containerRef = useRef(null);
	const popupRef = useRef(null);
	const boundingBoxHoverRef = useRef(false); // Track if a bounding box is hovered

	// Load SVG content as text - keep original styling intact
	useEffect(() => {
		const loadSVGContent = async () => {
			const svgPromises = PARTS.map(async (part) => {
				if (!part.svg) return [part.id, null];
				try {
					const response = await fetch(part.svg);
					const svgText = await response.text();
					return [part.id, svgText];
				} catch (error) {
					console.error(`Failed to load SVG for ${part.id}:`, error);
					return [part.id, null];
				}
			});

			const results = await Promise.all(svgPromises);
			const svgMap = Object.fromEntries(results.filter(([_, svg]) => svg !== null));
			setLoadedSVGs(svgMap);
		};

		loadSVGContent();
	}, []);

	// Set up precise hover detection using CSS pointer-events and styling from script.js approach
	useEffect(() => {
		if (Object.keys(loadedSVGs).length === 0) return;

		const style = document.createElement('style');
		style.textContent = `
			/* Base bone styling similar to original styles.css */
			.skeleton-part {
				position: absolute;
				pointer-events: none;
			}

			.skeleton-part svg {
				width: 100%;
				height: 100%;
				pointer-events: none;
			}

			.skeleton-part svg path {
				pointer-events: all;
				cursor: pointer;
				transition: all 0.2s ease;
			}

			/* Hover effects without overriding original fill */
			.skeleton-part svg path:hover {
				opacity: 0.8;
			}
		`;
		document.head.appendChild(style);

		// Global mouse tracking to handle hover state with more forgiving detection
		const handleGlobalMouseMove = (e) => {
			if (boundingBoxHoverRef.current) return; // Don't clear hover if bounding box is hovered
			const target = e.target;
			// Check if we're hovering over a clickable path (more forgiving approach)
			if (target.tagName === 'path') {
				// Find the part this path belongs to
				const partElement = target.closest('.skeleton-part');
				if (partElement) {
					const partId = partElement.dataset.part;
					setHovered(partId);
					return;
				}
			}
			// Also check if we're over the bone container (as fallback)
			const boneContainer = target.closest('.skeleton-part');
			if (boneContainer) {
				const partId = boneContainer.dataset.part;
				setHovered(partId);
				return;
			}
			// If we're not over a valid target, clear hover
			setHovered(null);
		};

		document.addEventListener('mousemove', handleGlobalMouseMove);

		return () => {
			document.head.removeChild(style);
			document.removeEventListener('mousemove', handleGlobalMouseMove);
		};
	}, [loadedSVGs]);

	// Compute highlighted parts for hover and selection
	const hoveredParts = hovered ? getPairedPartIds(hovered) : [];
	const selectedParts = selected ? getPairedPartIds(selected) : [];

	// Close popup and clear highlight when clicking outside the popup
	useEffect(() => {
		if (!selected) return;
		const handleClick = (e) => {
			// If click is inside the popup, do nothing
			if (popupRef.current && popupRef.current.contains(e.target)) return;
			// If click is on a skeleton part, do nothing (let part click handler update the popup)
			if (e.target.closest('.skeleton-part')) return;
			// Otherwise, close popup and clear highlight
			setSelected(null);
			setHovered(null);
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [selected]);

	// Function to calculate popup position (improved)
	const calculatePopupPosition = (clickX, clickY, partId) => {
		const container = containerRef.current;
		const popup = popupRef.current;
		if (!container) return { top: 10, left: 10 };

		const containerRect = container.getBoundingClientRect();
		const partPosition = PART_POSITIONS[partId];
		if (!partPosition) return { top: 10, left: 10 };

		// Popup size (fallback to 220x110 if not rendered yet)
		const popupWidth = popup?.offsetWidth || 220;
		const popupHeight = popup?.offsetHeight || 110;

		// Try four corners: above-left, above-right, below-left, below-right
		const candidates = [
			{
				top: partPosition.top - popupHeight - 10,
				left: partPosition.left,
			},
			{
				top: partPosition.top - popupHeight - 10,
				left: partPosition.left + partPosition.width - popupWidth,
			},
			{
				top: partPosition.top + partPosition.height + 10,
				left: partPosition.left,
			},
			{
				top: partPosition.top + partPosition.height + 10,
				left: partPosition.left + partPosition.width - popupWidth,
			},
		];

		// Check which candidate fits best (inside container and not overlapping part)
		const fits = candidates.find(pos =>
			pos.top >= 0 &&
			pos.left >= 0 &&
			pos.top + popupHeight <= containerRect.height &&
			pos.left + popupWidth <= containerRect.width &&
			// Not overlapping the part's bounding box
			!(pos.top + popupHeight > partPosition.top &&
				pos.top < partPosition.top + partPosition.height &&
				pos.left + popupWidth > partPosition.left &&
				pos.left < partPosition.left + partPosition.width)
		);

		let best = fits || candidates[2]; // Default to below-left if none fit

		// Clamp to container if needed
		best.top = Math.max(0, Math.min(best.top, containerRect.height - popupHeight));
		best.left = Math.max(0, Math.min(best.left, containerRect.width - popupWidth));

		return best;
	};

	if (Object.keys(loadedSVGs).length === 0) {
		return (
			<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<div style={{ fontSize: '1.6rem', color: '#666' }}>Loading skeleton...</div>
			</div>
		);
	}

	return (
		<div style={{
			background: '#fff',
			borderRadius: '16px',
			boxShadow: '0 2px 12px 0 rgba(60,60,60,0.08)',
			border: '1px solid #e0e0e0',
			padding: 0,
			margin: '19px',
			maxWidth: 500,
			width: '100%',
			minHeight: 635,
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			fontFamily: 'Proxima Nova, Arial, sans-serif',
			left: 370,
			paddingBottom: 15,
		}}>
			{/* Title in top left */}
			<div style={{
				position: 'absolute',
				top: 20,
				left: 24,
				fontWeight: 700,
				fontSize: '1.15rem',
				color: '#5C4DFF',
				letterSpacing: 0.1,
				zIndex: 2
			}}>
				The Skeleton
			</div>
			{/* Inner skeleton box */}
			<div style={{
				margin: '55px auto 0 auto',
				background: '#fff',
				borderRadius: '12px',
				border: '1px solid #e0e0e0',
				boxShadow: '0 1px 6px 0 rgba(60,60,60,0.04)',
				padding: '12px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				width: 440,
				minHeight: 650,
				position: 'relative',
			}}>
				<div style={{ position: 'relative', width: 400, height: 610, top: 30, left: -50 }}>
					{/* --- CUSTOM HAND BETWEEN HIT AREAS --- */}
					{['Left', 'Right'].map(side => {
						const metaId = `Metacarpals${side}`;
						const phalId = `Phalanges${side}`;
						const metaBox = side === 'Left'
							? (() => {
								const box = getBetweenBox(metaId, { shrinkX: 0.3, shrinkY: 0.2 });
								if (!box) return null;
								return {
									...box,
									left: box.left - 5,
									width: box.width + 4,
									height: box.height - 2
								};
							})()
							: (() => {
								const box = getBetweenBox(metaId, { shrinkX: 0.3, shrinkY: 0.2 });
								if (!box) return null;
								return {
									...box,
									left: box.left - 4,
									top: box.top - 1,
									width: box.width + 4,
									height: box.height - 2
								};
							})();
						const phalBox = side === 'Left'
							? (() => {
								const box = getBetweenBox(phalId, { shrinkX: 0.3, shrinkY: 0.2 });
								if (!box) return null;
								const centerX = box.left + box.width / 2;
								const centerY = box.top + box.height / 2;
								return {
									left: centerX - 7.5 - 8,
									top: centerY - 7.5 + 2 + 3,
									width: 21,
									height: 15
								};
							})()
							: (() => {
								const box = getBetweenBox(phalId, { shrinkX: 0.3, shrinkY: 0.2 });
								if (!box) return null;
								return {
									...box,
									left: box.left - 4,
									top: box.top + 6,
									width: box.width - 1,
									height: box.height - 12
								};
							})();

						// Small tip box for each phalanges
						const phalTipBox = (() => {
							const box = getBetweenBox(phalId, { shrinkX: 0.3, shrinkY: 0.2 });
							if (!box) return null;
							if (side === 'Left') {
								return {
									left: box.left + box.width / 2 - 5 - 1 + 1,
									top: box.top + box.height - 10 + 2 - 1,
									width: 10,
									height: 10
								};
							} else {
								return {
									left: box.left + box.width / 2 - 5 - 3,
									top: box.top + box.height - 10 + 1 - 1,
									width: 10,
									height: 10
								};
							}
						})();

						return (
							<React.Fragment key={side}>
								{metaBox && (
									<div
										style={{
											position: 'absolute',
											top: metaBox.top,
											left: metaBox.left,
											width: metaBox.width,
											height: metaBox.height,
											zIndex: 20,
											background: 'transparent',
											pointerEvents: 'auto',
											cursor: 'pointer',
										}}
										onMouseEnter={() => { boundingBoxHoverRef.current = true; setHovered(metaId); }}
										onMouseLeave={() => { boundingBoxHoverRef.current = false; setHovered(null); }}
										onClick={e => {
											setSelected(metaId);
											const containerRect = containerRef.current.getBoundingClientRect();
											const newMarker = {
												x: e.clientX - containerRect.left,
												y: e.clientY - containerRect.top
											};
											setTimeout(() => {
												const newPosition = calculatePopupPosition(e.clientX, e.clientY, metaId);
												setPopupPosition(newPosition);
											}, 0);
										}}
									/>
								)}
								{phalBox && (
									<div
										style={{
											position: 'absolute',
											top: phalBox.top,
											left: phalBox.left,
											width: phalBox.width,
											height: phalBox.height,
											zIndex: 20,
											background: 'transparent',
											pointerEvents: 'auto',
											cursor: 'pointer',
										}}
										onMouseEnter={() => { boundingBoxHoverRef.current = true; setHovered(phalId); }}
										onMouseLeave={() => { boundingBoxHoverRef.current = false; setHovered(null); }}
										onClick={e => {
											setSelected(phalId);
											const containerRect = containerRef.current.getBoundingClientRect();
											const newMarker = {
												x: e.clientX - containerRect.left,
												y: e.clientY - containerRect.top
											};
											setTimeout(() => {
												const newPosition = calculatePopupPosition(e.clientX, e.clientY, phalId);
												setPopupPosition(newPosition);
											}, 0);
										}}
									/>
								)}
								{phalTipBox && (
									<div
										style={{
											position: 'absolute',
											top: phalTipBox.top,
											left: phalTipBox.left,
											width: phalTipBox.width,
											height: phalTipBox.height,
											zIndex: 20,
											background: 'transparent',
											pointerEvents: 'auto',
											cursor: 'pointer',
										}}
										onMouseEnter={() => { boundingBoxHoverRef.current = true; setHovered(phalId); }}
										onMouseLeave={() => { boundingBoxHoverRef.current = false; setHovered(null); }}
										onClick={e => {
											setSelected(phalId);
											const containerRect = containerRef.current.getBoundingClientRect();
											const newPosition = calculatePopupPosition(e.clientX, e.clientY, phalId);
											setPopupPosition(newPosition);
										}}
									/>
								)}
							</React.Fragment>
						);
					})}
					{/* Pixel marker and distance for click positions */}
					{/* clickMarkers.length === 2 && (
						<div
							style={{
								position: 'absolute',
								top: clickMarkers[0].y - 25,
								left: clickMarkers[0].x + 10,
								background: 'rgba(0,0,0,0.7)',
								color: 'white',
								padding: '2px 8px',
								borderRadius: '8px',
								fontSize: '14px',
								zIndex: 1002,
								pointerEvents: 'none',
							}}
						>
							{getDistance(clickMarkers[0], clickMarkers[1])} px
						</div>
					)} */}
					{/* --- END CUSTOM HAND BETWEEN HIT AREAS --- */}
					{PARTS.map(part => {
						const position = PART_POSITIONS[part.id];
						const svgContent = loadedSVGs[part.id];
						if (!position || !svgContent) return null;
						
						return (
							<div
								key={part.id}
								className="skeleton-part"
								data-part={part.id}
								style={{
									position: 'absolute',
									top: position.top,
									left: position.left,
									width: `${position.width}px`,
									height: `${position.height}px`,
									transition: 'all 0.3s ease',
									zIndex: (part.id === 'Skull' || part.id === 'Mandible') ? 5 : 
										(part.id === 'Scapula') ? 0 : 1,
									transform: `${hoveredParts.includes(part.id) || selectedParts.includes(part.id) ? 'scale(1.05)' : 'scale(1)'}`,
									transformOrigin: 'center center',
									filter: selected ? 
										(selectedParts.includes(part.id) ? 
											'drop-shadow(0 0 10px #1976d2) brightness(1.2)' : 
											(hoveredParts.includes(part.id) ?
												'grayscale(50%) brightness(1.1) drop-shadow(0 0 8px #1976d2)' :
												'grayscale(100%) brightness(0.8)')) :
										(hoveredParts.includes(part.id) ? 
											'drop-shadow(0 0 10px #1976d2) brightness(1.2)' : 
											'none'),
									opacity: selected ? 
										(selectedParts.includes(part.id) ? 1 : 
											(hoveredParts.includes(part.id) ? 0.85 : 0.4)) :
										(hoveredParts.includes(part.id) ? 1 : 0.85),
								}}
								onClick={(e) => {
									const target = e.target;
									if (target.tagName === 'path' || target.closest('.skeleton-part')) {
										setSelected(part.id);
										setTimeout(() => {
											const newPosition = calculatePopupPosition(e.clientX, e.clientY, part.id);
											setPopupPosition(newPosition);
										}, 0); // Wait for popup to render
									}
								}}
								title={part.label}
								dangerouslySetInnerHTML={{ __html: svgContent }}
							/>
						);
					})}
				</div>
				{/* Description popup - now with dynamic positioning */}
				{selected && (
					<div
						ref={popupRef}
						style={{
							position: 'absolute',
							top: `${popupPosition.top}px`,
							left: `${popupPosition.left}px`,
							background: 'rgba(255,255,255,0.5)',
							backdropFilter: 'blur(8px)',
							WebkitBackdropFilter: 'blur(8px)',
							padding: '15px',
							borderRadius: '8px',
							boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
							width: '200px',
							zIndex: 1000,
							border: '1px solid rgba(220,220,220,0.7)',
							fontSize: '0.9em',
							transition: 'all 0.2s ease-out'
						}}
					>
						<h3 style={{ 
							margin: '0 0 8px 0', 
							color: '#4E48CC',
							fontSize: '1.2em'
						}}>
							{PARTS.find(p => p.id === selected)?.label}
						</h3>
						<p style={{ 
							margin: 0, 
							lineHeight: 1.4, 
							color: '#333',
							fontSize: '1.05em'
						}}>
							{PARTS.find(p => p.id === selected)?.description}
						</p>
						<button 
							onClick={() => setSelected(null)}
							style={{
								position: 'absolute',
								top: '5px',
								right: '5px',
								background: 'none',
								border: 'none',
								fontSize: '18px',
								cursor: 'pointer',
								color: '#666',
								padding: '2px 6px',
								lineHeight: 1
							}}
						>
							×
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default TheSkeleton;