import React from 'react';
import styles from './FounderProfile.module.css';

const FounderProfile = ({ image, name, role, bio, highlights }) => (
  <section className={styles.profileSection}>
    <div className={styles.profileContainer}>
      {/* Phần ảnh đại diện */}
      <div className={styles.profileImageWrapper}>
        <img src={image} alt={name} className={styles.profileImage} />
      </div>

      {/* Phần thông tin cá nhân */}
      <div className={styles.profileInfo}>
        <h1 className={styles.profileName}>{name}</h1>
        <p className={styles.profileRole}>{role}</p>
        <p className={styles.profileBio}>{bio}</p>
      </div>
    </div>

    {/* Phần ghi chú (3 ô vuông bên dưới) */}
    <div className={styles.profileHighlights}>
      {highlights.map((highlight, index) => (
        <div key={index} className={styles.highlightCard}>
          <h3 className={styles.highlightTitle}>{highlight.title}</h3>
          <p className={styles.highlightDescription}>{highlight.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FounderProfile;
