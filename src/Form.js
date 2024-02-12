import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Header, Footer } from "./Homepage";
const MyForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Forward data to the email address or perform any necessary action
    console.log(data);
  };

  return (
    <div>

        <Header />
        <div className="w-11/12 mx-auto px-4">

        <h1 className="text-4xl font-bold text-center mt-10 mb-5">

            <span className="text-[#665eff]">MBA</span> Application Form
        </h1>
        <p className="text-center text-gray-500 mb-10">
            Please fill out the form below to submit your application.
        </p>
    </div>
    <div className="w-11/12 mx-auto px-4">
    <div className="flex justify-center">
    <div className="w-1/2">

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth>
        <TextField label="Name" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Email Address" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Mobile Number" />
      </FormControl>

      {/* Repeat the same structure for other fields */}

      <FormControl fullWidth>
        <InputLabel id="targetSchoolLabel">Target School</InputLabel>
        <Controller
          name="targetSchool"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select labelId="targetSchoolLabel" {...field}>
              <MenuItem value="HBS">HBS</MenuItem>
              {/* Add other schools */}
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="preMbaIndustryLabel">Pre-MBA Industry</InputLabel>
        <Controller
          name="preMbaIndustry"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select labelId="preMbaIndustryLabel" {...field}>
              <MenuItem value="Consulting">Consulting</MenuItem>
              {/* Add other industries */}
            </Select>
          )}
        />
      </FormControl>

      {/* Repeat the same structure for other dropdowns */}

      <FormControl component="fieldset" fullWidth>
        <InputLabel>Diversity</InputLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="First generation" />
          {/* Add other diversity options */}
        </FormGroup>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default MyForm;
