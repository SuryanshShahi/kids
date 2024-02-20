import Img from "@/shared/Img";
import Input from "@/shared/InputBox/Input";
import React from "react";
import useBookVisit from "./views/useBookVisit";
import Button from "@/shared/Button/Button";
import TextArea from "@/shared/InputBox/TextArea";

const BookVisit = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useBookVisit();

  return (
    <div className="pb-40">
      <div className="bg-[#FFF5DE] w-full h-[384px] -mt-6 flex items-center justify-between overflow-hidden">
        <div className="max-w-[450px] ml-20">
          <div className="text-[60px] font-black text-secondary">
            Schedule a Tour
          </div>
          <p className="text-xl">
            We are gonna help you – Just read the information down below.
          </p>
        </div>
        <Img
          src={"/images/people1.svg"}
          alt="phone"
          width={358}
          height={457}
          isLocal
          className="object-cover"
        />
      </div>
      <Img
        src={"/images/navBottom.png"}
        alt="phone"
        width={1440}
        height={28}
        isLocal
        className="w-full h-7 -mt-6 -rotate-180 object-cover"
      />

      <div className="my-24 px-5 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 gap-x-5 gap-y-3">
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.name && touched.name ? errors.name : ""}
            wrapperClass="sm:col-span-6 col-span-12"
          />

          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email && touched.email ? errors.email : ""}
            wrapperClass="sm:col-span-6 col-span-12"
          />

          <Input
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.phone && touched.phone ? errors.phone : ""}
            wrapperClass="sm:col-span-6 col-span-12"
          />
          <Input
            placeholder="childName"
            type="text"
            name="childName"
            value={values.childName}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors.childName && touched.childName ? errors.childName : ""
            }
            wrapperClass="sm:col-span-6 col-span-12"
          />

          <div className="sm:col-span-6 col-span-12">
            <div className="text-[15px] text-secondary">
              What is your child's date of birth?
            </div>
            <Input
              type="date"
              name="dob"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.dob && touched.dob ? errors.dob : ""}
            />
          </div>
          <div className="sm:col-span-6 col-span-12 space-y-1">
            <div className="text-[15px] text-secondary">
              We'd like to start in...
            </div>
            <select
              onChange={(e) => setFieldValue("branch", e.target.value)}
              value={values.branch}
              className={`border border-neutral-300 rounded-md w-full p-3 ${
                errors.branch ? "border-[1.5px] border-red-400" : ""
              }`}
            >
              <option>Within a month</option>
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6-9 months</option>
              <option>9 months+</option>
              <option>Unsure at this time</option>
            </select>
            {errors.branch && touched.branch && errors?.branch.length > 0 ? (
              <p className="text-right text-xs text-red-400">
                {errors?.branch}
              </p>
            ) : (
              <p className="text-right text-[10px] text-white">.</p>
            )}
          </div>

          <TextArea
            placeholder="Questions? Anything you'd like us to know about your family?"
            rows={5}
            name="message"
            maxLength={1000}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors.message && touched.message ? errors.message : ""
            }
            wrapperClass="col-span-12"
          />
        </div>
        <div className="flex items-center gap-x-3">
          <Input
            type="checkbox"
            name="checkbox"
            value={values.checkbox}
            onChange={() => setFieldValue("checkbox", !values.checkbox)}
            onBlur={handleBlur}
            wrapperClass="mt-4"
          />
          <div>
            By submitting this form, you agree to the Skole privacy notice.
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          className="rounded p-2 z-10 relative mt-10"
        >
          Submit my information
        </Button>
      </div>
    </div>
  );
};

export default BookVisit;
