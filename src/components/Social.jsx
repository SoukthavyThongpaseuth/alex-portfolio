"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaInstagram />, path: "#" }, // path not needed, handle click
  { icon: <FaWhatsapp />, path: "#" },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Social = ({ containerStyles, iconStyles }) => {
  const [showWhatsappPhoto, setShowWhatsappPhoto] = useState(false);
  const [showInstagramPhoto, setShowInstagramPhoto] = useState(false);

  const handleWhatsappClick = (e) => {
    e.preventDefault();
    setShowWhatsappPhoto(true);
  };

  const handleInstagramClick = (e) => {
    e.preventDefault();
    setShowInstagramPhoto(true);
  };

  const closeModal = () => {
    setShowWhatsappPhoto(false);
    setShowInstagramPhoto(false);
  };

  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          if (item.icon.type === FaWhatsapp) {
            return (
              <a
                key={index}
                href="#"
                className={iconStyles}
                onClick={handleWhatsappClick}
              >
                {item.icon}
              </a>
            );
          }
          if (item.icon.type === FaInstagram) {
            return (
              <a
                key={index}
                href="#"
                className={iconStyles}
                onClick={handleInstagramClick}
              >
                {item.icon}
              </a>
            );
          }
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>

      <AnimatePresence>
        {showWhatsappPhoto && (
          <motion.div
            key="backdrop-whatsapp"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              cursor: "pointer",
            }}
          >
            <motion.img
              key="modal-whatsapp"
              src="/assets/whatsapp-ac.jpg"
              alt="WhatsApp Photo"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: "60vw",
                maxHeight: "60vh",
                borderRadius: "8px",
                cursor: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}

        {showInstagramPhoto && (
          <motion.div
            key="backdrop-instagram"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              cursor: "pointer",
            }}
          >
            <motion.img
              key="modal-instagram"
              src="/assets/instagram-qr.jpg"
              alt="Instagram Photo"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: "60vw",
                maxHeight: "60vh",
                borderRadius: "8px",
                cursor: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Social;
