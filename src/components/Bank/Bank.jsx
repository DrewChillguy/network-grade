import React from "react";
import bankYear1_1 from "./bankYear1_1.js";
import bankYear1_2 from "./bankYear1_2.js";
import bankYear2_1 from "./bankYear2_1.js";
import { Link } from "react-router-dom";

const Bank = (props) => {
  return (
    <>
      {bankYear1_1.map((student) => {
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
          group,
        } = student;
        return (
          <div className="relative">
            <Link
              to="/"
              className="text-main-color bg-white font-bold px-2 py-1 rounded-sm absolute text-md z-10 mt-1 w-full"
            >
              &#60;<span className="bg-white ml-1 font-laos">ກັບຄືນ</span>
              <hr className="w-full h-1 mt-1"></hr>
            </Link>
            <div
              className="font-poppins text-center bg-white w-80 rounded-lg cursor-pointer flex flex-wrap pt-10"
              key={id}

            >
              <img src={photo} className="w-24 h-24 rounded-full mt-3 ml-3" />
              <div className="bg-white">
                <p className="bg-white text-lg text-start text-main-color font-semibold pl-5 pt-5 leading-snug">
                  {name}
                  <br />
                  {lastName}
                </p>
                <hr className="w-44 h-0 ml-4 mt-1"></hr>
                <p className="bg-main-color text-xs font-laos text-center w-24 text-white ml-5 mt-3 rounded-sm p-1">
                  ປີ 1 ພາກຮຽນ 1
                </p>
                <ul className="bg-white text-start ml-4 mt-2 font-laos pb-3">
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ຄອມພິວເຕີ້ທົ່ວໄປ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {generalComputing}
                    </span>
                  </li>
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ຄະນິດສາດບໍ່ຕໍ່ເນຶ່ອງ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {mathematics}
                    </span>
                  </li>
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ລະບົບ ແລະ ສ້ອມແປງ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {computerRepair}
                    </span>
                  </li>
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ພຶ້ນຖານດ້ານກົດຫມາຍ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {laws}
                    </span>
                  </li>
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ພາສາອັງກິດທົ່ວໄປ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {english}
                    </span>
                  </li>
                  <li className="bg-white font-medium flex justify-between items-center ml-1">
                    ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ{" "}
                    <span className="text-xl bg-white text-main-color">
                      {informationTech}
                    </span>
                  </li>
                </ul>
                <p className="bg-main-color text-xs font-laos text-center w-24 text-white ml-5 mt-2 rounded-sm p-1">
                  ປີ 1 ພາກຮຽນ 2
                </p>
              </div>

              {bankYear1_2.map((student) => {
                const {
                  c_Programming,
                  operatingSystem,
                  dataBase,
                  graphic1,
                  english2,
                  philosophy,
                } = student;
                return (
                  <>
                    <div className="w-24 h-24 bg-white ml-3" />
                    <ul className="bg-white text-end ml-5 mt-2 font-laos pb-3 grow rounded-lg">
                      <li className="bg-white font-medium flex justify-between items-center">
                        ພາສາ C{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {c_Programming}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ລະບົບປະຕິບັດງານ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {operatingSystem}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ລະບົບຖານຂໍ້ມູນ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {dataBase}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ກຣາບຟິກ 1{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {graphic1}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ພາສາອັງກິດທົ່ວໄປ 2{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {english2}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ປັດຊະຍາ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {philosophy}
                        </span>
                      </li>
                    </ul>
                  </>
                );
              })}

              {bankYear2_1.map((student) => {
                const {
                  algorithms,
                  dataBase1,
                  graphic2,
                  computerNetwork,
                  oop,
                  electric,
                } = student;
                return (
                  <>
                    <div className="w-24 h-24 bg-white ml-3" />
                    <ul className="bg-white text-end ml-5 font-laos pb-3 grow rounded-lg">
                      <p className="bg-main-color text-xs font-laos text-center w-24 text-white mt-2 mb-2 rounded-sm p-1">
                        ປີ 2 ພາກຮຽນ 1
                      </p>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ອາກໍ່ລິທຶ້ມ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {algorithms}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ຖານຂໍ້ມູນ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {dataBase1}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ກຣາບຟິກ 2{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {graphic2}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ເຄຶ່ອຂ່າຍຄອມພິວເຕີ້{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {computerNetwork}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ສ້າງໂປແກມອອບເຈັກ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {oop}
                        </span>
                      </li>
                      <li className="bg-white font-medium flex justify-between items-center">
                        ຄວາມຮູ້ພຶ້ນຖານໄຟຟ້າ{" "}
                        <span className="text-xl bg-white text-main-color mr-5">
                          {electric}
                        </span>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bank;
