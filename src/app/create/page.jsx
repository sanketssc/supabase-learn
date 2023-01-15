"use client";
import { supabase } from "../../lib/supabaseClient";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!country) return setError("Please enter a country name");

    const { data, error } = await supabase
      .from("countries")
      .insert([{ name: country }]);

    if(error) {
        console.log(error);
        setError("Error creating country");
    }
    if(data) {
        console.log(data);
        setError(null);
    }
    router.push("/");
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
