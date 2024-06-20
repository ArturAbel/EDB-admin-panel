import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setMembers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (member) => {
    setLoading(true);
    try {
      await axios.post(url, member);
      await fetchMembers();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMember = async (member) => {
    setLoading(true);
    try {
      await axios.put(`${url}/${member.id}`, member);
      await fetchMembers();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (member) => {
    setLoading(true);
    try {
      await axios.remove(`${url}/${member.id}`);
      await fetchMembers();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return {
    handleRemoveMember,
    handleUpdateMember,
    handleAddMember,
    loading,
    members,
    error,
  };
};

export default useFetch;
