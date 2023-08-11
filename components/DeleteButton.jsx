"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
const DeleteButton = ({ id }) => {
    const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    console.log("deleting id -", id);
    const res = await fetch(`/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
      setIsLoading(false);
    }
    if(!json.error) {
        router.refresh()
        router.push("/tickets")
    }
  };
  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <>
          <TiDelete />
          Deleting ...
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteButton;
