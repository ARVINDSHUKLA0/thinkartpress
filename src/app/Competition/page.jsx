"use client";
import Navbar from "@/component/Navbar";
import "@/app/Competition/Competition.css";
import { useState } from "react";
import ImgGallery from "@/Data/ImgGallery";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import emailjs from "emailjs-com";

const Page = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [status, setStatus] = useState("");

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      competition: selectedCompetition,
      title: "New Registration",
    };

    emailjs
      .send(
        "service_mqw0uht",  
        "template_288g63x",  
        dataToSend,
        "Lyg3uXNiS-emPEY5X"  
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Thank you! Your registration has been submitted.");
 
          setFormData({ name: "", email: "", phone: "", address: "" });
 
          setTimeout(() => {
            const modal = window.bootstrap.Modal.getInstance(
              document.getElementById("participateModal")
            );
            modal?.hide();
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <>
      <Navbar />
 
      <div className="pt-50 pb-lg-1 pb-3 dark-bg">
        <div className="container-fluid pt-5">
          <div className="row m-0">
            <div className="col-lg-5 col-md-6 col-sm-12 text-container-center">
              <div>
                <h4 className="text-white fs-1 ps-lg-5">
                  Now be a part of an international art journal — Simply
                  participate in an international competition and get a chance
                  to showcase your talent here!
                </h4>
                <p className="text-white fs-15 pt-2 ps-lg-5">
                  <strong>Rules:</strong> Whatever you have made, simply take a
                  photo of it and mail it to{" "}
                  <a
                    href="mailto:thinkartpress@gmail.com"
                    className="text-warning text-decoration-none"
                  >
                    thinkartpress@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12">
              <div className="competion-imges">
                <img
                  className="img-fluid"
                  src="/assets/img/Competition.png"
                  alt="Competition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="px-1 pt-4">
        <div
          className="d-flex justify-content-between align-items-center py-lg-5 py-3 rounded-2"
          style={{ backgroundColor: "#F7BC1D" }}
        >
          <div>
            <p className="m-0 fw-bold ps-1">
              Competition Preschool Category 02 to 06
            </p>
          </div>
          <div>
            <p className="m-0 pe-1">
              <i className="fa-solid fa-circle-plus fs-5"></i>
            </p>
          </div>
        </div>
      </div>
 
      <div className="row m-0 pt-lg-4 pt-2">
        {ImgGallery.map((cat) => (
          <div key={cat.id} className="col-lg-3 col-md-4 col-sm-6 col-12 px-1">
            <div className="categoryItem rounded-4" style={{ position: "relative" }}>
              <div className="d-flex contentWrap justify-content-between">
                <h6 className="textContent">{cat.title}</h6>
                <p
                  onClick={() => toggleExpand(cat.id)}
                  className="customCircal text-dark text-center px-2 pb-1 bg-white m-0"
                  style={{ cursor: "pointer" }}
                >
                  {expanded === cat.id ? "-" : "+"}
                </p>
              </div>

              {expanded === cat.id && (
                <div className="expandTop">
                  <p>
                    {cat.description ||
                      "Our Art Club proudly presents global Artists of the Month, featured in the International Web Art Journal for their unique brilliance."}
                  </p>
                </div>
              )}

              <img
                src={cat.thumbnail}
                alt={`Category ${cat.id}`}
                onClick={() => openImage(cat.thumbnail)}
                style={{ cursor: "pointer" }}
                className="img-fluid rounded-2"
              />

              <div className="iconDisplay">
                <i className="fa-solid fa-circle-plus fs-2"></i>
              </div>
            </div>

            <div>
              <button
                className="my-2 w-100 text-capitalize border-0 rounded-2 py-1"
                style={{ backgroundColor: "#F7BC1D" }}
                data-bs-toggle="modal"
                data-bs-target="#participateModal"
                onClick={() => setSelectedCompetition(cat.title)}
              >
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>
 
      {selectedImage && (
        <div className="galleryModal" onClick={closeImage}>
          <div className="galleryContent">
            <img className="img-fluid" src={selectedImage} alt="Selected" />
          </div>
          <button className="galleryClose" onClick={closeImage}>
            &times;
          </button>
        </div>
      )}
 
      <div
        className="modal fade"
        id="participateModal"
        tabIndex="-1"
        aria-labelledby="participateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="participateModalLabel">
                Competition Registration
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Competition</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedCompetition}
                    readOnly
                  />
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  Submit
                </button>
              </form>

              {status && (
                <p className="text-center pt-3 fw-bold text-dark">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
 
      <div className="py-md-5 py-3 dark-bg">
        <div className="row m-0 text-center">
          <div className="col-lg-6 col-md-6 col-sm-12 px-2">
            <h2 className="text-white">
              <CountUp start={1} end={500} duration={6} />
            </h2>
            <h3 className="text-white">
              Already 500+ international participants have enrolled — where are
              you?
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <h2 className="text-white">
              <CountUp start={1} end={1000} duration={6} />
            </h2>
            <h3 className="text-white">
              Already 1000+ national participants have enrolled — where are you?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

