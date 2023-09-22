import { useEffect } from "react"



export const Ordering = () => {

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
    };

    fetch("http://localhost:8080/orders", options)
      .then((res: Response) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>Ordering</div>
  )
}
