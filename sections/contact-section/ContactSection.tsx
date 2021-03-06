import React, { useMemo, useState } from "react";
import Section from "../../components/section/Section";
import { useForm } from "react-hook-form";
import styles from "./contact-section-styles.module.scss";
import FormButton from "../../components/form-button/FormButton";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

export type ContactDetails = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactDetails>();
  const onSubmit = (data: ContactDetails) => {
    axios
      .post("/api/email", { user: data })
      .then(() => setSuccess(true))
      .catch((err) => console.log(err));
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const [success, setSuccess] = useState(false);

  return (
    <Section
      {...{ backgroundColour: "light", backgroundImages: false, id: "contact" }}
    >
      <h1>Send Me a Message</h1>
      <h2 className="mb-12">Contact Me</h2>
      <div className="xl:flex justify-between gap-x-12">
        <div className="flex-1 mb-10 xl:mb-0">
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div
              className={`flex flex-col xl:flex-row space-y-8 xl:-space-y-0 justify-between ${styles.row}`}
            >
              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
              />
              <input
                {...register("lastName", { required: true })}
                placeholder="Last Name"
              />
              {(errors.firstName || errors.lastName) && (
                <p>
                  Both first name and last name are required to submit the
                  contact form.
                </p>
              )}
            </div>
            <div className={styles.row}>
              <input
                type="text"
                className={`${styles.full_width}`}
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email && (
                <p>An email is required to submit the contact form.</p>
              )}
            </div>
            <div className={styles.row}>
              <textarea
                rows={5}
                className={`${styles.full_width} ${styles.large}`}
                {...register("message", { required: true })}
                placeholder="Message"
              />
              {errors.message && (
                <p>A message is required to submit the contact form.</p>
              )}
              {success && (
                <p
                  className={styles.success}
                  onAnimationEnd={() => setSuccess(false)}
                >
                  Your query has been sucesfully submitted
                </p>
              )}
            </div>
            <FormButton>Send Message</FormButton>
          </form>
        </div>
        <div className="flex-1">
          {isLoaded ? <Map /> : <div>Loading...</div>}
        </div>
      </div>
    </Section>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 50.909698, lng: -1.404351 }), []);

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
