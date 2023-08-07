import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { PlayModalVideoIcon } from "../../../assets/Icones";
import { GrClose } from "react-icons/gr";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";

interface VideoModalProps {
	videoSrc: string;
	show: boolean;
	setShow: (show: boolean) => void;
	handleShow: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, show, setShow }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const togglePlay = () => {
		if (videoRef.current) {
			if (playing) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setPlaying(!playing);
		}
	};

	const handleClose = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
		setShow(false);
		setPlaying(false);
	};

	return (
		<>
			<Modal centered show={show} onHide={handleClose} size="xl">
				<Modal.Body className="p-0">
					<div style={{ position: "relative", paddingBottom: "56.23%", height: 0, borderRadius: "12px" }}>
						<div
							role="button"
							onClick={handleClose}
							style={{
								position: "absolute",
								width: isMedia600px ? "15px" : "25px",
								height: isMedia600px ? "15px" : "25px",
								cursor: "pointer",
								borderRadius: "4px",
								right: isMedia600px ? "0" : "-10px",
								top: isMedia600px ? "0" : "-10px",
								background: "#FFF",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								zIndex: "1",
							}}
						>
							<GrClose size={`${isMedia600px ? "0.7rem" : ""}`} />
						</div>
						<video ref={videoRef} controls style={{ position: "absolute", width: "100%", height: "100%" }}>
							<source src={videoSrc} type="video/mp4" />
							Seu navegador não suporta o elemento de vídeo.
						</video>
						{!playing && (
							<div
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									cursor: "pointer",
									zIndex: 1,
								}}
								onClick={togglePlay}
							>
								<PlayModalVideoIcon size={`${isMedia600px ? "3rem" : "8rem"}`} />
							</div>
						)}
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default VideoModal;
