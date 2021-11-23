import React, { useEffect, useState } from "react";
import ConfessionCard from "../../Components/Cards/ConfessionCard";
import MainLayout from "../../Components/Structure/Main";
import "./css/Confessions.css";
import { getConfessions } from "../../Actions/confessions";
import { useDispatch, useSelector } from "react-redux";
import AddConfession from "./AddConfession";
import { setLoading } from "../../Actions/auth";
import Loader from "../../Components/Loader/loader";

export default function Confessions() {
  const dispatch = useDispatch();
  const confessions = useSelector((state) => state.confessions);
  useEffect(() => {
    dispatch(getConfessions());
  }, [dispatch]);
  return (
    <MainLayout type="confessions">
      <AddConfession />
      {confessions.length > 0 ?       <div className="confessions-cont">
        <div className="c-1">
          {confessions.map((confession, index) =>
            index % 2 === 0 ? (
              <ConfessionCard
                date={confession.date}
                confession={confession.confession}
                id={confession.id}
                index={index}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className="c-2">
          {confessions.map((confession, index) =>
            index % 2 !== 0 ? (
              <ConfessionCard
                date={confession.createdAt}
                confession={confession.confession}
                id={confession.id}
                index={index}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div> : <Loader />}
    </MainLayout>
  );
}
