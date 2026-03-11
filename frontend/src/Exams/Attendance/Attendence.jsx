import React, { useState, useRef, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  Toast,
  ToastContainer,
  Badge,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Attendence.css";

export default function AttendancePage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [formData, setFormData] = useState({
    examCode: "",
    institutionName: "",
    fullName: "",
    fatherName: "",
    mobileNumber: "",
    aadharNumber: "",
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [candidateLat, setCandidateLat] = useState(null);
  const [candidateLng, setCandidateLng] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    msg: "",
    variant: "success",
  });

  /* ================= INPUT ================= */

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  /* ================= TOAST ================= */

  const showToast = useCallback((msg, variant = "success") => {
    setToast({ show: true, msg, variant });
  }, []);

  /* ================= LOCATION ================= */

  const toggleLocation = useCallback(() => {
    if (locationEnabled) {
      setLocationEnabled(false);
      setCandidateLat(null);
      setCandidateLng(null);
      showToast("Location disabled", "warning");
      return;
    }

    if (!navigator.geolocation) {
      showToast("Geolocation not supported", "danger");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCandidateLat(pos.coords.latitude);
        setCandidateLng(pos.coords.longitude);
        setLocationEnabled(true);
        showToast("📍 Location enabled successfully");
      },
      () => {
        showToast("Location permission denied", "danger");
      },
      { enableHighAccuracy: true }
    );
  }, [locationEnabled, showToast]);

  /* ================= CAMERA ================= */

  const openCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      setStream(mediaStream);
      setShowCamera(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch {
      showToast("Camera permission denied", "danger");
    }
  }, [showToast]);

  const closeCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setShowCamera(false);
  }, [stream]);

  /* ================= CAPTURE PHOTO ================= */

  const capturePhoto = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const imageData = canvas.toDataURL("image/jpeg", 0.7);

    setPhotoPreview(imageData);
    closeCamera();
  }, [closeCamera]);

  /* ================= SUBMIT ================= */

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!locationEnabled) {
        showToast("Please enable location", "danger");
        return;
      }

      if (!photoPreview) {
        showToast("Please capture photo", "danger");
        return;
      }

      try {
        await axios.post(
          "https://talent-assess.in/api/attendance/submit",
          {
            exam_code: formData.examCode.trim(),
            institution_name: formData.institutionName,
            fullName: formData.fullName,
            fatherName: formData.fatherName,
            mobileNumber: formData.mobileNumber,
            aadharNumber: formData.aadharNumber,
            candidateLat,
            candidateLng,
            photoBase64: photoPreview.split(",")[1],
          },
          { timeout: 10000 }
        );

        showToast("✅ Attendance submitted successfully");

        /* RESET */

        setFormData({
          examCode: "",
          institutionName: "",
          fullName: "",
          fatherName: "",
          mobileNumber: "",
          aadharNumber: "",
        });

        setPhotoPreview(null);
        setLocationEnabled(false);
        setCandidateLat(null);
        setCandidateLng(null);
      } catch (err) {
        showToast(
          err?.response?.data?.message || "Attendance submission failed",
          "danger"
        );
      }
    },
    [
      formData,
      candidateLat,
      candidateLng,
      photoPreview,
      locationEnabled,
      showToast,
    ]
  );

  return (
    <>
      <Container className="py-5">
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: 900 }}>
          <h3 className="text-center fw-bold mb-4">
            📋 Attendance Registration
          </h3>

          <Form onSubmit={handleSubmit}>
            {/* EXAM DETAILS */}

            <Card className="p-3 mb-4 bg-light">
              <h5 className="fw-bold mb-3">Exam Details</h5>

              <Row>
                <Col md={6}>
                  <Form.Label>Exam Code</Form.Label>
                  <Form.Control
                    name="examCode"
                    value={formData.examCode}
                    placeholder="Enter exam code"
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={6}>
                  <Form.Label>Institution Name</Form.Label>
                  <Form.Control
                    name="institutionName"
                    value={formData.institutionName}
                    placeholder="Enter institution name"
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </Card>

            {/* CANDIDATE DETAILS */}

            <Card className="p-3 mb-4 bg-light">
              <h5 className="fw-bold mb-3">Candidate Details</h5>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={6}>
                  <Form.Label>Father Name</Form.Label>
                  <Form.Control
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md={6}>
                  <Form.Label>Aadhar Number</Form.Label>
                  <Form.Control
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </Card>

            {/* LOCATION */}

            <div className="text-center mb-4">
              <Button
                type="button"
                variant={locationEnabled ? "success" : "outline-primary"}
                onClick={toggleLocation}
              >
                {locationEnabled
                  ? "📍 Location Enabled"
                  : "Enable Live Location"}
              </Button>

              {locationEnabled && (
                <div className="mt-2">
                  <Badge bg="success">Location Verified</Badge>
                </div>
              )}
            </div>

            {/* PHOTO */}

            <div className="text-center mb-4">
              {!photoPreview ? (
                <Button type="button" onClick={openCamera}>
                  📷 Open Camera
                </Button>
              ) : (
                <>
                  <img
                    src={photoPreview}
                    className="img-thumbnail mb-2"
                    width={220}
                    alt="preview"
                  />

                  <br />

                  <Button type="button" variant="warning" onClick={openCamera}>
                    Retake Photo
                  </Button>
                </>
              )}
            </div>

            <Button type="submit" size="lg" className="w-100">
              Submit Attendance
            </Button>
          </Form>
        </Card>
      </Container>

      {/* CAMERA MODAL */}

      <Modal show={showCamera} onHide={closeCamera} centered>
        <Modal.Body className="text-center">
          <video ref={videoRef} autoPlay className="w-100 rounded" />
          <canvas ref={canvasRef} hidden />

          <Button className="mt-3" onClick={capturePhoto}>
            Capture Photo
          </Button>
        </Modal.Body>
      </Modal>

      {/* TOAST */}

      <ToastContainer
        position="top-center"
        className="p-3"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 99999,
        }}
      >
        <Toast
          bg={toast.variant}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          autohide
          delay={3000}
        >
          <Toast.Body className="text-white fw-semibold text-center">
            {toast.msg}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}