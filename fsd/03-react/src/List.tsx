import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllPersons } from './api/persons';
import './List.css';
import { Link } from '@tanstack/react-router';

const List: React.FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['persons'],
    queryFn: getAllPersons,
  });

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street</th>
            <th>ZIP</th>
            <th>City</th>
            <th>Country</th>
            <th>Username</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>SSN</th>
            <th>IBAN</th>
            <th>Website</th>
            {/* <th>Avatar</th> */}
            <th>Blood Type</th>
            <th>Marital Status</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((p) => (
            <tr key={p.id}>
              <td>
                <Link to="/$personId" params={{ personId: p.id }}>
                  {p.id}
                </Link>
              </td>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.sex}</td>
              <td>{p.birthDate}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
              <td>{p.street}</td>
              <td>{p.zipCode}</td>
              <td>{p.city}</td>
              <td>{p.country}</td>
              <td>{p.username}</td>
              <td>{p.jobTitle}</td>
              <td>{p.company}</td>
              <td>{p.ssn}</td>
              <td>{p.iban}</td>
              <td>
                <a href={p.website} target="_blank" rel="noreferrer">
                  {p.website}
                </a>
              </td>
              {/* <td>
                <img
                  src={p.avatar}
                  alt={`${p.firstName ?? ''} ${p.lastName ?? ''}`}
                  className="avatar"
                />
              </td> */}
              <td>{p.bloodType}</td>
              <td>{p.maritalStatus}</td>
              <td>{p.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
