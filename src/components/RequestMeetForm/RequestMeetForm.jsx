import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function RequestMeetForm() {
  const [dog, setDog] = useState('');
  const [cat, setCat] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const requestMeet = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REQUEST_MEET',
      payload: {
        dog: dog,
        cat: cat,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        details: details,
      },
    });
  }; // end requestMeet

  // to go back to Home page (app.jsx)
  const handleClickNotice = (event) => {
    event.preventDefault();
    history.push(`/requestNotice`);
  };

  return (
    <form className="formPanel" onSubmit={requestMeet}>
      <h2>Request Meet & Greet</h2>
      <p>
        Please fill out the following information along with details of your
        boarding request and I will be in touch to schedule a Meet & Greet with
        you!
      </p>
      {/* {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}*/}
      <div>
        <label htmlFor="dog">
          Dog:
          <input
            type="checkbox"
            name="dog"
            value={dog}
            required
            onChange={(event) => setDog(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="cat">
          Cat:
          <input
            type="checkbox"
            name="cat"
            value={cat}
            required
            onChange={(event) => setCat(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="first_name">
          First Name:
          <input
            type="text"
            name="first_name"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="last_name">
          Last Name:
          <input
            type="text"
            name="last_name"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Phone:
          <input
            type="number"
            name="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="details">
          Request Details:
          <input
            type="text"
            name="details"
            value={details}
            required
            onChange={(event) => setDetails(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input
          className="btn"
          type="submit"
          name="submit"
          value="Submit Request"
          onClick={handleClickNotice}
        />
      </div>
    </form>
  );
}

export default RequestMeetForm;
