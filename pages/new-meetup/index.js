import NewMForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUpPage = () => {
  const router = useRouter();
  async function addMeetupHandler(entredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(entredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return <NewMForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
