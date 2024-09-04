import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <>
      {props.students.map((student) => {
        const {
          id,
          name,
          lastName,
          photo,
          generalComputing,
          mathematics,
          computerRepair,
          laws,
          english,
          informationTech,
          link,
        } = student;
        return (
          <Link
            className="font-poppins text-center bg-white w-80 rounded-lg cursor-pointer flex"
            key={id}
            to={link}
          >
            <img src={photo} className="w-24 h-24" />
            <div className="bg-white">
              <p className="bg-white text-lg text-start text-main-color font-semibold pl-4 pt-2 leading-snug">
                {name}
                <br />
                {lastName}
              </p>
              <hr className="w-44 h-0 ml-4 mt-1"></hr>
              {/* <p className="bg-main-color text-xs font-laos text-center w-20 text-white ml-4 mt-2 rounded-sm">{id === 11 ? ບໍ່ໃຫ້ເບິ່ງ : ເບິ່ງຄະແນນ}</p> */}

              {id === 11 ? (
                <p className="bg-main-color text-xs font-laos text-center w-20 text-white ml-4 mt-2 rounded-sm">
                  ບໍ່ໃຫ້ເບິ່ງ
                </p>
              ) : (
                <p className="bg-main-color text-xs font-laos text-center w-20 text-white ml-4 mt-2 rounded-sm p-custom-1">
                  ເບິ່ງຄະແນນ
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default List;
