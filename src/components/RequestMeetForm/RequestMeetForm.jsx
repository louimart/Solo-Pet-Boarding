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

  // SUBMIT FORM & go to NOTICE page (RequestMeetNotice.jsx)
  const requestMeet = (event) => {
    event.preventDefault();

// JAVASCRIPT form validation alternative
//     function areAllFieldsNonNull(obj) {
//     return Object.values(obj).every(value => value !== null);
// }
//     if (areAllFieldsNonNull===true){
//     }

    // dispatching request information
    dispatch({
      type: 'POST_REQUEST_MEET',
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

    // routing to Request Notice Page.
    history.push(`/requestMeetNotice`);
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
      <fieldset>
        <legend>Please select pet type:</legend>
        <div>
          <input
            type="radio"
            id="dog"
            name="pet_type"
            value="dog"
            required
            onChange={(event) => setDog(event.target.value)}
          />
          <label for="dog">Dog</label>
          <input
            type="radio"
            id="cat"
            name="pet_type"
            value="cat"
            required
            onChange={(event) => setCat(event.target.value)}
          />
          <label for="cat">Cat</label>
          </div>
      </fieldset>
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
        />
      </div>
    </form>
  );
}

export default RequestMeetForm;
