import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const [isDog, setIsDog] = useState('false');

function RegisterPetForm() {
  const [dog, setDog] = useState('');
  const [cat, setCat] = useState('');
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [detail, setDetail] = useState('');

  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const registerPet = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER_PET',
      payload: {
        userId: user.id,
        dog: dog,
        cat: cat,
        petName: petName,
        breed: breed,
        age: age,
        weight: weight,
        detail: detail,
      },
    });

    // clear radio buttons
    document.getElementById('dog').checked = false;
    document.getElementById('cat').checked = false;
    // clear form fields
    setDog(''), setCat(''), setPetName(''), setBreed(''), setAge(''), setWeight(''), setDetail('');
  };

  // function handleClickDog() {
  //   setIsDog('true');
  // }

  return (
    <div className="container">
      <h2>Welcome {user.username}!</h2>
      <form className="formPanel" onSubmit={registerPet}>
        <h2>Register Pet</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <fieldset>
          <legend>Please select pet type:</legend>
          {/* <div>
            <input
              className="btn"
              type="button"
              name="button"
              value="Dog"
              onClick={handleClickDog()}
            />
          </div> */}
          <div>
            <input
              type="radio"
              id="dog"
              name="pet_type"
              value="dog"
              required
              onChange={(event) => setDog(event.target.value)}
            />
            <label htmlFor="dog">Dog</label>
            <input
              type="radio"
              id="cat"
              name="pet_type"
              value="cat"
              required
              onChange={(event) => setCat(event.target.value)}
            />
            <label htmlFor="cat">Cat</label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="petName">
            Pet Name:
            <input
              type="text"
              name="petName"
              value={petName}
              required
              onChange={(event) => setPetName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="breed">
            Breed:
            <input
              type="text"
              name="breed"
              value={breed}
              required
              onChange={(event) => setBreed(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="age">
            Age:
            <input
              type="text"
              name="age"
              value={age}
              required
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="weight">
            Weight:
            <input
              type="text"
              name="weight"
              value={weight}
              required
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="detail">
            Details:
            <input
              type="text"
              name="detail"
              value={detail}
              required
              onChange={(event) => setDetail(event.target.value)}
            />
          </label>
        </div>
        {/* <div>
          <h2>Vaccines</h2>
          <h3>{`${isDog}`}</h3>
        </div> */}
        <div>
          <input className="btn" type="submit" name="submit" value="Add Pet" />
        </div>
      </form>
      <div>
        <input className="btn" type="submit" name="submit" value="Next" />
      </div>
    </div>
  );
}

export default RegisterPetForm;
