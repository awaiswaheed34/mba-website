import React from "react";

import Footer from "./components/Compound/Footer/Footer";
import Header from './components/Compound/Header/Header';


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
const handleClick = () => {
  // Open index.html in a new tab
  window.open('index.html');
};
const MyForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Forward data to the email address or perform any necessary action
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <div className="w-11/12 mx-auto px-4 mt-10 mb-5">

        <h1 className="text-4xl font-bold text-center mb-5">

          <span className="text-[#665eff]">MBA</span> Application Form
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Please fill out the form below to submit your application.
        </p>
      </div>
      <div className="w-11/12 mx-auto px-4 mb-5">
        <div className="flex justify-center">
          <div className="w-1/2">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormControl fullWidth>
                <TextField label="Name" className="w-full" />
              </FormControl>

              <FormControl fullWidth>
                <TextField label="Email Address" className="w-full" />
              </FormControl>

              <FormControl fullWidth>
                <TextField label="Mobile Number" className="w-full" />
              </FormControl>

              {/* Repeat the same structure for other fields */}
              <FormControl fullWidth >
                <InputLabel id="targetSchoolLabel" sx={{background:'white'}}>Target School</InputLabel>
                <Controller
                  name="targetSchool"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                      <Select
                        labelId="targetSchoolLabel"
                        {...field}
                        className="w-full"
                        
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}
                      >
                        <MenuItem value="HBS">HBS</MenuItem>
                        <MenuItem value="GSB">GSB</MenuItem>
                        <MenuItem value="Columbia">Columbia</MenuItem>
                        <MenuItem value="Wharton">Wharton</MenuItem>
                        <MenuItem value="INSEAD">INSEAD</MenuItem>
                      </Select>
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="preMbaIndustryLabel" sx={{background:'white'}}>Pre-MBA Industry</InputLabel>
                <Controller
                  name="preMbaIndustry"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                      <Select labelId="preMbaIndustryLabel" {...field} className="w-full"
                        
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}>
                        <MenuItem value="Consulting">Consulting</MenuItem>
                        <MenuItem value="non-MBB">Consulting(non-MBB)</MenuItem>
                        <MenuItem value="Consumer">Consumer product / Retail / E-commerce</MenuItem>
                        <MenuItem value="Entrepreneurship">Entrepreneurship</MenuItem>
                        <MenuItem value="Biotech">Healthcare / Biotech</MenuItem>
                        <MenuItem value="Impact">Impact investing</MenuItem>
                        <MenuItem value="Industry">Industry</MenuItem>
                        <MenuItem value="Investment">Investment Banking</MenuItem>
                        <MenuItem value="Military">Military</MenuItem>
                        <MenuItem value="Non-Profit">Non-Profit / Government / Education</MenuItem>
                        <MenuItem value="Private Equity">Private Equity</MenuItem>
                        <MenuItem value="Technology">Technology</MenuItem>
                        <MenuItem value="Venture Capital">Venture Capital</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="nationality" sx={{background:'white'}}>Nationality/Regional Background</InputLabel>
                <Controller
                  name="Nationality"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Select labelId="nationality" {...field} className="w-full"
                        
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}>
                        <MenuItem value="USA">United States</MenuItem>
                        <MenuItem value="asia">Asia</MenuItem>
                        <MenuItem value="eu">Europe</MenuItem>
                        <MenuItem value="mex">Mexico, Central & South America</MenuItem>
                        <MenuItem value="ca">Canada</MenuItem>
                        <MenuItem value="ME">Middle East</MenuItem>
                        <MenuItem value="africa">Africa</MenuItem>
                        <MenuItem value="Oceania">Oceania</MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="education" sx={{background:'white'}}>Education</InputLabel>
                <Controller
                  name="education"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Select labelId="education" {...field} className="w-full"
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}>
                        <MenuItem value="eco">Economics</MenuItem>
                        <MenuItem value="eng">Engineering</MenuItem>
                        <MenuItem value="com">Business/Commerce</MenuItem>
                        <MenuItem value="hum">Arts/Humanities</MenuItem>
                        <MenuItem value="ss">Social Science</MenuItem>
                        <MenuItem value="math">Math/Physical Sciences</MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="PMG" sx={{background:'white'}}>Post-MBA Goals</InputLabel>
                <Controller
                  name="PMG"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Select labelId="PMG" {...field} className="w-full"
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}>
                        <MenuItem value="na">N/A</MenuItem>
                        <MenuItem value="consu">Consulting</MenuItem>
                        <MenuItem value="ent">Entrepreneurship</MenuItem>
                        <MenuItem value="Impact">Impact investing</MenuItem>
                        <MenuItem value="Industry">Industry</MenuItem>
                        <MenuItem value="Investment">Investment Banking</MenuItem>
                        <MenuItem value="Non-Profit">Non-Profit / Government / Education</MenuItem>
                        <MenuItem value="Private Equity">Private Equity</MenuItem>
                        <MenuItem value="Venture Capital">Venture Capital</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="diversity" sx={{background:'white'}}>Diversity</InputLabel>
                <Controller
                  name="diversity"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Select labelId="diversity" {...field} className="w-full"
                        onChange={(e) => {
                          field.onChange(e); // Update field value
                          field.onBlur(); // Remove focus from the select dropdown to hide selected value
                        }}>
                        <MenuItem value="fg" className="w-full">First Generation</MenuItem>
                        <MenuItem value="lgbtq">LGBTQ+</MenuItem>
                        <MenuItem value="AA">Asian American</MenuItem>
                        <MenuItem value="bbc">Black or African American</MenuItem>
                        <MenuItem value="hl">Hispanic or Latino</MenuItem>
                        <MenuItem value="mr">Multi-Race</MenuItem>
                        <MenuItem value="dis">Disability</MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>

              <Button type="submit" variant="contained" color="primary" href=".">
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
