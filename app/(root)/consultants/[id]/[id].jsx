import { useRouter } from "next/router";

const ConsultantPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Consultant ID: {id}</h1>;
};

export default ConsultantPage;
