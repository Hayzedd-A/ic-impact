import React from "react";
import TextField from "../TextField";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormikProps } from "formik";
import { motion } from "framer-motion";
import { FormValues } from "@/types/FormType";
import Texts from "../Texts";
const YEAR = new Date().getFullYear();

interface FormOneProps {
  formik: FormikProps<FormValues>;
  motionDirection: number;
}

const FormOne: React.FC<FormOneProps> = ({ formik, motionDirection }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
  };

  const handleDateSelection = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      formik.setFieldValue("dob", formatDate(selectedDate)); // Set the date in ISO format
    } else {
      formik.setFieldValue("dob", ""); // Clear the field if no date is selected
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: motionDirection }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: motionDirection, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <h3 className="scroll-m-20 font-rozanovaBold font-bold tracking-tight text-black text-[30px] text-center max-[950px]:text-[32px] max-[600px]:text-[28px] leading-[35px] mx-auto w-full px-[10px] mb-[30px] mt-[30px]">
        Personal Information
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[90%] mx-auto">
          <TextField
            name="name"
            type="text"
            value={formik?.values?.name}
            onChange={formik?.handleChange}
            onBlur={formik.handleBlur}
            label="Full Name"
            error={formik.touched?.name ? formik.errors.name : ""}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Enter your full name here"
          />

          <div className="flex flex-col gap-1">
            <Popover>
              <label className="flex items-start gap-1 text-lg font-sourceSansBold font-medium">
                <span>Date of birth </span>
                <span className="text-red-500"> * </span>
              </label>
              <div className="relative mt-1">
                <Input
                  placeholder="Enter your date of birth"
                  className="bg-inputGrey rounded-[10px]"
                  value={formik.values.dob} // Bind Formik value
                  onChange={(e) => formik.setFieldValue("dob", e.target.value)}
                />
                <PopoverTrigger asChild>
                  <Button
                    className="absolute right-0 top-[0] "
                    variant="outline"
                  >
                    <span>{<CalendarIcon />} </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    fromDate={new Date(YEAR, 0, 1)}
                    toDate={new Date(YEAR, 11, 31)}
                    selected={date}
                    id="react-day-picker-calendar"
                    onSelect={handleDateSelection}
                    className="rounded-md bg-inputGrey border shadow"
                  />
                </PopoverContent>
              </div>
            </Popover>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] font-sourceSans text-xs text-red-600 capitalize font-medium">
              {formik.errors?.dob}{" "}
            </Texts>
          </div>

          <TextField
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Email"
            error={formik.touched.email ? formik.errors.email : ""}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Enter your email here"
            style="mt-4"
          />

          <TextField
            name="whatsappNo"
            type="text"
            value={formik.values.whatsappNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Whatsapp Number"
            error={formik.touched.whatsappNo ? formik.errors.whatsappNo : ""}
            className="bg-[#F4F4F4] mt-1"
            requiredIndicator
            placeholder="Enter your whatsapp number here"
          />

          <TextField
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="City"
            error={formik.touched.city ? formik.errors.city : ""}
            className="bg-[#F4F4F4]"
            requiredIndicator
            placeholder="Enter your city here"
          />

          <div className="flex flex-col gap-1">
            <Select
              name="gender"
              value={formik.values.gender}
              onValueChange={(e: string) => formik.setFieldValue("gender", e)}
            >
              <p className="flex items-start gap-1 text-lg font-sourceSansBold">
                <span>Gender </span> <span className="text-red-600">*</span>{" "}
              </p>
              <SelectTrigger className="w-full mt-1 rounded-[10px] text-gray-800 bg-inputGrey">
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] text-xs font-sourceSans text-red-600 capitalize font-medium">
              {formik.errors?.gender}{" "}
            </Texts>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <Select
              name="eduBackground"
              value={formik.values.eduBackground}
              onValueChange={(e: string) =>
                formik.setFieldValue("eduBackground", e)
              }
            >
              <p className="flex items-start gap-1 text-lg font-sourceSansBold">
                <span>Education Background</span>{" "}
                <span className="text-red-600">*</span>{" "}
              </p>
              <SelectTrigger className="w-full mt-1 rounded-[10px] text-gray-800 bg-inputGrey">
                <SelectValue placeholder="Select Education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Education level</SelectLabel>
                  <SelectItem value="No Formal Education">
                    No Formal Education
                  </SelectItem>
                  <SelectItem value="Primary School">Primary School</SelectItem>
                  <SelectItem value="Secondary School">
                    Secondary School
                  </SelectItem>
                  <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="Bachelors Degree">
                    Bachelors Degree
                  </SelectItem>
                  <SelectItem value="Masters Degree">Masters Degree</SelectItem>
                  <SelectItem value="Vocational Training">
                    Vocational Training
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] text-xs font-sourceSans text-red-600 capitalize font-medium">
              {formik.errors?.eduBackground}{" "}
            </Texts>
          </div>

          <div className="flex flex-col gap-1">
            <Select
              name="employmentStatus"
              value={formik.values.employmentStatus}
              onValueChange={(e: string) =>
                formik.setFieldValue("employmentStatus", e)
              }
            >
              <p className="flex items-start gap-1 mt-3 text-lg font-sourceSansBold">
                <span>Employment Status</span>{" "}
                <span className="text-red-600">*</span>{" "}
              </p>
              <SelectTrigger className="w-full mt-1 rounded-[10px] text-gray-700 bg-inputGrey">
                <SelectValue placeholder="Select your Employment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Employment Status</SelectLabel>
                  <SelectItem value="No Formal Education">
                    Currently Employed
                  </SelectItem>
                  <SelectItem value="Primary School">Self Employed</SelectItem>
                  <SelectItem value="Secondary School">Student</SelectItem>
                  <SelectItem value="Undergraduate">Unemployed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Texts className="mt-2 flex flex-col items-start gap-[5px] text-xs text-red-600 font-sourceSans capitalize font-medium">
              {formik.errors?.employmentStatus}{" "}
            </Texts>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default FormOne;
