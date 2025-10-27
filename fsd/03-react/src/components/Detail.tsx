import React from 'react';
import './Detail.css';
import type { Person } from '../types/person';

const formatDate = (iso?: string): string => {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const Detail: React.FC<{ person: Person }> = ({ person }) => {
  const {
    firstName,
    lastName,
    jobTitle,
    company,
    email,
    phone,
    street,
    zipCode,
    city,
    country,
    birthDate,
    username,
    ssn,
    iban,
    website,
    bloodType,
    maritalStatus,
    nationality,
    sex,
  } = person;

  return (
    <section className="person-detail" aria-labelledby={`person-${person.id}`}>
      <div className="pd-card">
        <div>
          <h2
            id={`person-${person.id}`}
            className="pd-name"
          >{`${firstName} ${lastName}`}</h2>
          <div className="pd-meta">
            {jobTitle ? `${jobTitle} @ ${company}` : company}
          </div>

          <div className="pd-grid" style={{ marginTop: 16 }}>
            <div className="pd-item">
              <div className="pd-label">Contact</div>
              <div className="pd-value">{email || '—'}</div>
              <div className="pd-value">{phone || '—'}</div>
            </div>

            <div className="pd-item">
              <div className="pd-label">Address</div>
              <div className="pd-value">
                {street ? `${street}, ${zipCode} ${city}` : '—'}
              </div>
              <div className="pd-label">Country</div>
              <div className="pd-value">{country || '—'}</div>
            </div>

            <div className="pd-item pd-muted-card">
              <div className="pd-label">Personal</div>
              <div className="pd-row">
                <div>
                  <div className="pd-value">{formatDate(birthDate)}</div>
                  <div className="pd-label">Birthdate</div>
                </div>
                <div>
                  <div className="pd-value">
                    {sex === 'male' ? 'Male' : 'Female'}
                  </div>
                  <div className="pd-label">Sex</div>
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <div className="pd-label">Marital status</div>
                <div className="pd-value">{maritalStatus || '—'}</div>
                <div className="pd-label">Blood type</div>
                <div className="pd-value">{bloodType || '—'}</div>
              </div>
            </div>

            <div className="pd-item">
              <div className="pd-label">Identifiers</div>
              <div className="pd-value">Username: {username || '—'}</div>
              <div className="pd-value">SSN: {ssn || '—'}</div>
              <div className="pd-value">Nationality: {nationality || '—'}</div>
            </div>

            <div className="pd-item">
              <div className="pd-label">Financial & Web</div>
              <div className="pd-value">IBAN: {iban || '—'}</div>
              <div className="pd-value">
                Website:{' '}
                {website ? (
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}
                  </a>
                ) : (
                  '—'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
