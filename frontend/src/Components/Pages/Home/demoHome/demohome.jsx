import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
export default function DemoForm() {
  const [activeTab, setActiveTab] = useState('student');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  
  // Toast state management
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' // 'success' or 'error'
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyAddress: '',
    companyRegistrationNumber: '',
    companyPhoneNumber: '',
    companySize: '',
    industry: '',
    hiringForWhichPosition: '',
    numberOfHiring: '',
    jobDescription: ''
  });
   const [testtaker, settesttaker] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    
  });

  // Toast helper functions
  const showToast = (message, type = 'success') => {
    setToast({
      show: true,
      message,
      type
    });
  };

  const successToast = (message) => showToast(message, 'success');
  const errorToast = (message) => showToast(message, 'error');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };


  // 

    const handleChanges = (e) => {
    const { name, value } = e.target;
    settesttaker({
      ...testtaker,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };



  const validateOrganizationForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.companyAddress.trim()) {
      newErrors.companyAddress = "Company address is required";
    }

    if (!formData.companyRegistrationNumber.trim()) {
      newErrors.companyRegistrationNumber = "Registration number is required";
    }

    if (!formData.companyPhoneNumber.trim()) {
      newErrors.companyPhoneNumber = "Company phone is required";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Company size is required";
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required";
    }

    if (!formData.hiringForWhichPosition.trim()) {
      newErrors.hiringForWhichPosition = "Hiring position is required";
    }

    if (!formData.numberOfHiring) {
      newErrors.numberOfHiring = "Number of hires is required";
    }

    if (!formData.jobDescription.trim()) {
      newErrors.jobDescription = "Job description is required";
    }

    return newErrors;
  };


  // 


    const validatestudentForm = () => {
    const newError = {};

    if (!testtaker.firstname.trim()) {
      newError.firstname = "First name is required";
    }

    if (!testtaker.lastname.trim()) {
      newError.lastname = "Last name is required";
    }

    if (!testtaker.email.trim()) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(testtaker.email)) {
      newError.email = "Email is invalid";
    }

    if (!testtaker.phonenumber.trim()) {
      newError.phonenumber = "Phone number is required";
    }

   

    return newError;
  };

   const handlestudentsubmit = async(e)=>{
    e.preventDefault();
    const validation  = validatestudentForm();
     // If there are errors, display them and stop
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      errorToast("Please fill in all required fields");
      return;
    }
        setIsSubmitting(true);

        try {
          const response = await fetch("http://localhost:8080/api/testtakerdemo",{
            method:"POST",
             headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(testtaker)
          });
           // Check if response is ok (status 200-299)
      if (!response.ok) {
        // Try to get error message from response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }
       // Parse successful response
      const responseData = await response.json();
      console.log('Success:', responseData);

      // Success - show success message
      successToast("Form submitted successfully! Our team will contact you soon.");
      navigate('/studentdemo')
        // Reset form
      settesttaker({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
       
      });
      setErrors({});

    }
     catch (err) {
      console.error('Error details:', err);
      errorToast(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    
  }
        

 }

  const handleOrganizationSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateOrganizationForm();

    // If there are errors, display them and stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      errorToast("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8080/api/organizations", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Check if response is ok (status 200-299)
      if (!res.ok) {
        // Try to get error message from response
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${res.status}`);
      }

      // Parse successful response
      const responseData = await res.json();
      console.log('Success:', responseData);

      // Success - show success message
      successToast("Form submitted successfully! Our team will contact you soon.");
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companyAddress: '',
        companyRegistrationNumber: '',
        companyPhoneNumber: '',
        companySize: '',
        industry: '',
        hiringForWhichPosition: '',
        numberOfHiring: '',
        jobDescription: ''
      });
      setErrors({});

    } catch (err) {
      console.error('Error details:', err);
      errorToast(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formLabelStyle = {
    color: '#4a5568',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: "'Inter', 'Segoe UI', sans-serif"
  };

  const formControlStyle = {
    backgroundColor: 'transparent',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '15px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    transition: 'all 0.3s ease',
    color: '#2d3748'
  };

  const errorStyle = {
    color: '#e53e3e',
    fontSize: '12px',
    marginTop: '4px'
  };

  return (
    <div className="min-vh-100 d-flex align-items-center py-5" style={{ 
      background: 'linear-gradient(to bottom right, #3c4884, #0094c6, #134e4a)',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          .form-control:focus,
          .form-select:focus {
            background-color: transparent !important;
            border-color: #4299e1 !important;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1) !important;
            outline: none;
          }
          
          .form-control.is-invalid,
          .form-select.is-invalid {
            border-color: #e53e3e !important;
          }
          
          .form-control::placeholder {
            color: #a0aec0;
          }
          
          .nav-tabs {
            border-bottom: none;
            gap: 10px;
          }
          
          .nav-tabs .nav-link {
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.8);
            font-weight: 500;
            padding: 12px 20px;
            transition: all 0.3s ease;
            position: relative;
            background-color: rgba(255, 255, 255, 0.1) !important;
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          
          .nav-tabs .nav-link:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.15) !important;
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          .nav-tabs .nav-link.active {
            color: #1a202c;
            background: white !important;
            border-color: #6495ED;
            box-shadow: 0 8px 25px #6495ED;
          }
          
          .nav-tabs .nav-link.active:hover {
            color: #1a202c;
            background: white !important;
          }

          @media (max-width: 576px) {
            .nav-tabs .nav-link {
              padding: 10px 12px;
              font-size: 14px;
            }
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            border: none;
            padding: 14px;
            font-weight: 600;
            font-size: 16px;
            border-radius: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }
          
          .btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
            background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
          }

          .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          
          .step-circle {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 20px;
            color: #1a202c;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          
          .card {
            border-radius: 20px;
            transition: all 0.3s ease;
          }
          
          .fade-in {
            animation: fadeIn 0.4s ease-in;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .heading-box {
            padding: 20px 30px;
            display: inline-block;
            margin-bottom: 0;
          }

          @media (max-width: 991px) {
            .display-4 {
              font-size: 2.5rem;
            }
            .heading-box {
              padding: 15px 25px;
            }
          }

          @media (max-width: 767px) {
            .display-4 {
              font-size: 2rem;
            }
            .step-circle {
              width: 45px;
              height: 45px;
              font-size: 18px;
            }
            .heading-box {
              padding: 12px 20px;
            }
          }

          @media (max-width: 576px) {
            .heading-box {
              padding: 10px 15px;
            }
          }
        `}
      </style>

      {/* Toast Container - Fixed position at top-center */}
      <ToastContainer 
        position="top-center" 
        className="p-3" 
        style={{ 
          zIndex: 9999,
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: '350px'
        }}
      >
        <Toast 
          show={toast.show} 
          onClose={() => setToast({ ...toast, show: false })}
          delay={5000}
          autohide
          bg={toast.type === 'success' ? 'success' : 'danger'}
          style={{
            minWidth: '350px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          <Toast.Header>
            <strong className="me-auto">
              {toast.type === 'success' ? '✓ Success' : '✕ Error'}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
      
      <div className="container">
        <div className="row">
          {/* Left Side - Text Content */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <div className="p-lg-4 p-3">
              <div className="heading-box">
                <h2 className="display-4 fw-bold mb-0" style={{ 
                  color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  Experience Our Platform
                </h2>
              </div>
              
              <p className="lead my-5" style={{ 
                color: 'white',
                fontSize: '18px',
                lineHeight: '1.7',
                fontFamily: "'Inter', sans-serif",
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                fontWeight: '500'
              }}>
                Discover how our innovative solution can transform your experience. 
                Fill out the form to see a personalized demo tailored to your needs.
              </p>
              
              <div className="mt-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="me-3">
                    <div className="step-circle">1</div>
                  </div>
                  <div className="pt-2">
                    <h5 className="mb-2 fw-semibold" style={{ 
                      color: '#1a202c',
                      fontSize: '18px',
                      fontFamily: "'Inter', sans-serif",
                      background: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                    }}>
                      Choose Your Role
                    </h5>
                    <p className="mb-0 mt-2" style={{ 
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: '500'
                    }}>
                      Select whether you're a student or organization
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="me-3">
                    <div className="step-circle">2</div>
                  </div>
                  <div className="pt-2">
                    <h5 className="mb-2 fw-semibold" style={{ 
                      color: '#1a202c',
                      fontSize: '18px',
                      fontFamily: "'Inter', sans-serif",
                      background: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                    }}>
                      Fill the Form
                    </h5>
                    <p className="mb-0 mt-2" style={{ 
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: '500'
                    }}>
                      Provide your details to help us customize your demo
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <div className="step-circle">3</div>
                  </div>
                  <div className="pt-2">
                    <h5 className="mb-2 fw-semibold" style={{ 
                      color: '#1a202c',
                      fontSize: '18px',
                      fontFamily: "'Inter', sans-serif",
                      background: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                    }}>
                      Get Your Demo
                    </h5>
                    <p className="mb-0 mt-2" style={{ 
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: '500'
                    }}>
                      We'll reach out to schedule your personalized demonstration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-7 col-md-12">
            <div className="card shadow-lg border-0" style={{ backgroundColor: 'white' }}>
              <div className="card-body p-lg-5 p-4">
                {/* Tabs */}
                <ul className="nav nav-tabs mb-4" role="tablist">
                  <li className="nav-item flex-fill" role="presentation">
                    <button
                      className={`nav-link w-100 ${activeTab === 'student' ? 'active' : ''}`}
                      onClick={() => setActiveTab('student')}
                      type="button"
                    >
                      Student / Test Taker
                    </button>
                  </li>
                  <li className="nav-item flex-fill" role="presentation">
                    <button
                      className={`nav-link w-100 ${activeTab === 'organization' ? 'active' : ''}`}
                      onClick={() => setActiveTab('organization')}
                      type="button"
                    >
                      Organization
                    </button>
                  </li>
                </ul>

                {/* Form Content */}
                <div className="fade-in">
                  {activeTab === 'student' ? (
                    // Student Form
                    <div>
                    <form action="" onSubmit={handlestudentsubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName" className="form-label" style={formLabelStyle}>First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            value={testtaker.firstname}
                            onChange={handleChanges}
                            style={formControlStyle}
                            placeholder="Enter first name"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName" className="form-label" style={formLabelStyle}>Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            value={testtaker.lastname}
                            onChange={handleChanges}
                            style={formControlStyle}
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={formLabelStyle}>Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={testtaker.email}
                          onChange={handleChanges}
                          style={formControlStyle}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label" style={formLabelStyle}>Phone Number *</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phonenumber"
                          name="phonenumber"
                          value={testtaker.phonenumber}
                          onChange={handleChanges}
                          style={formControlStyle}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      
                      <div className="d-grid mt-4">
                        <button type='submit' className="btn btn-primary btn-lg">
                          Get Demo
                        </button>
                      </div>
                      </form>
                    </div>



                  ) : (
                    // Organization Form
                    <form onSubmit={handleOrganizationSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="org-firstName" className="form-label" style={formLabelStyle}>First Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            id="org-firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="Enter first name"
                          />
                          {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="org-lastName" className="form-label" style={formLabelStyle}>Last Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            id="org-lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="Enter last name"
                          />
                          {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="org-email" className="form-label" style={formLabelStyle}>Email *</label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="org-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="your.email@company.com"
                          />
                          {errors.email && <div style={errorStyle}>{errors.email}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="org-phoneNumber" className="form-label" style={formLabelStyle}>Phone Number *</label>
                          <input
                            type="tel"
                            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                            id="org-phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.phoneNumber && <div style={errorStyle}>{errors.phoneNumber}</div>}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="companyName" className="form-label" style={formLabelStyle}>Company Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          style={formControlStyle}
                          placeholder="Enter company name"
                        />
                        {errors.companyName && <div style={errorStyle}>{errors.companyName}</div>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="companyAddress" className="form-label" style={formLabelStyle}>Company Address *</label>
                        <textarea
                          className={`form-control ${errors.companyAddress ? 'is-invalid' : ''}`}
                          id="companyAddress"
                          name="companyAddress"
                          rows="2"
                          value={formData.companyAddress}
                          onChange={handleChange}
                          style={formControlStyle}
                          placeholder="Enter full company address"
                        />
                        {errors.companyAddress && <div style={errorStyle}>{errors.companyAddress}</div>}
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="companyRegistrationNumber" className="form-label" style={formLabelStyle}>Registration Number *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.companyRegistrationNumber ? 'is-invalid' : ''}`}
                            id="companyRegistrationNumber"
                            name="companyRegistrationNumber"
                            value={formData.companyRegistrationNumber}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="REG-123456"
                          />
                          {errors.companyRegistrationNumber && <div style={errorStyle}>{errors.companyRegistrationNumber}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="companyPhoneNumber" className="form-label" style={formLabelStyle}>Company Phone *</label>
                          <input
                            type="tel"
                            className={`form-control ${errors.companyPhoneNumber ? 'is-invalid' : ''}`}
                            id="companyPhoneNumber"
                            name="companyPhoneNumber"
                            value={formData.companyPhoneNumber}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.companyPhoneNumber && <div style={errorStyle}>{errors.companyPhoneNumber}</div>}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="companySize" className="form-label" style={formLabelStyle}>Company Size *</label>
                          <select
                            className={`form-select ${errors.companySize ? 'is-invalid' : ''}`}
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            style={formControlStyle}
                          >
                            <option value="">Select company size...</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                          {errors.companySize && <div style={errorStyle}>{errors.companySize}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="industry" className="form-label" style={formLabelStyle}>Industry *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.industry ? 'is-invalid' : ''}`}
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="e.g., Technology, Finance"
                          />
                          {errors.industry && <div style={errorStyle}>{errors.industry}</div>}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="hiringForWhichPosition" className="form-label" style={formLabelStyle}>Hiring Position *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.hiringForWhichPosition ? 'is-invalid' : ''}`}
                            id="hiringForWhichPosition"
                            name="hiringForWhichPosition"
                            value={formData.hiringForWhichPosition}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="e.g., Software Engineer"
                          />
                          {errors.hiringForWhichPosition && <div style={errorStyle}>{errors.hiringForWhichPosition}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="numberOfHiring" className="form-label" style={formLabelStyle}>Number of Hires *</label>
                          <input
                            type="number"
                            className={`form-control ${errors.numberOfHiring ? 'is-invalid' : ''}`}
                            id="numberOfHiring"
                            name="numberOfHiring"
                            value={formData.numberOfHiring}
                            onChange={handleChange}
                            style={formControlStyle}
                            placeholder="0"
                          />
                          {errors.numberOfHiring && <div style={errorStyle}>{errors.numberOfHiring}</div>}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="jobDescription" className="form-label" style={formLabelStyle}>Job Description *</label>
                        <textarea
                          className={`form-control ${errors.jobDescription ? 'is-invalid' : ''}`}
                          id="jobDescription"
                          name="jobDescription"
                          rows="3"
                          value={formData.jobDescription}
                          onChange={handleChange}
                          style={formControlStyle}
                          placeholder="Describe the role and responsibilities..."
                        />
                        {errors.jobDescription && <div style={errorStyle}>{errors.jobDescription}</div>}
                      </div>
                      
                      <div className="d-grid mt-4">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}