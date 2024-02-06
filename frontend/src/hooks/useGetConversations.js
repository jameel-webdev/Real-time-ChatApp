import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConverastions = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConverastions] = useState([]);

  useEffect(() => {
    const getConverastions = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConverastions(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConverastions();
  }, []);

  return { loading, conversations };
};

export default useGetConverastions;
