import MeetUpDetails from "../../pages/[meetupId]";
import styles from "./MeetUpDetail.module.css";

const MeetUpDetailPage = (props) => {
  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetUpDetailPage;
