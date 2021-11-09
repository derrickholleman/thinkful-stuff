import { useState } from "react";
import { createObservation } from "./utils/api";
import Form from 'react-bootstrap/Form'

const CreateObservation = () => {
  const initialFormState = {
    latitude: "",
    longitude: "",
    sky_condition: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before form submit sky_condition:", formData.sky_condition)
    createObservation(formData)
    setFormData({ ...initialFormState });
  };

  return (
    <div>
      <h1>New Observation</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="latitude">Latitude</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            name="latitude"
            id="latitude"
            min="-90"
            max="90"
            step="0.01"
            value={formData.latitude}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="longitude">Longitude</Form.Label>
          <Form.Control
            type="number"
            name="longitude"
            className="form-control"
            id="longitude"
            min="-180"
            max="180"
            step="0.01"
            value={formData.longitude}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Select
          className="form-select"
          onChange={handleChange}
          id="sky_condition"
          name="sky_condition"
        >
          <option>-- Select a sky condition --</option>
          <option value="100">Cloudless</option>
          <option value="101">Some clouds</option>
          <option value="102">Cloud Covered</option>
          <option value="103">Foggy</option>
          <option value="104">Raining</option>
          <option value="106">Snowing</option>
          <option value="108">Hailing</option>
          <option value="109">Thunderstorms</option>
        </Form.Select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default CreateObservation;
