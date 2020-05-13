import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import { useEffect } from "react";

const ProfileStatusWithHook = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };
  return (
    <>
      <div>
        {!editMode && (
          <div>
            <b>Status: </b>
            <span onDoubleClick={activateEditMode}>
              {props.status || "No status"}
            </span>
          </div>
        )}
      </div>
      <div>
        {editMode && (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivatedEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default ProfileStatusWithHook;
