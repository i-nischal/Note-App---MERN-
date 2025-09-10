import React, { useState } from "react";
import { useParams } from "react-router";

function NoteDetail() {
  const { id } = useParams();
  console.log(id);
  const [note, setNote] = useState();

  return <div className="text-[1rem] pl-3 mt-15">NoteDetail




  </div>;
}

export default NoteDetail;
