import { TicketComments } from "./TicketCommets";
import classes from "./styles.module.css";

// ... existing code ...
const TicketDetails = ({
  id,
  ticketStatus,
  isAuthor,
  author_name,
  dateString,
  title,
  description,
}) => {
  return (
    <article className={classes.ticketDetails}>
      <header>
        <div className="grid">
          <div>
            <strong>#{id}</strong> -{" "}
            <strong className={classes.ticketStatusGreen}>
              {ticketStatus}
            </strong>
          </div>

          {isAuthor && (
            <button role="button" className={classes.littledanger}>
              Delete ticket
            </button>
          )}
        </div>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>{author_name}</strong> at <time>{dateString}</time>
        </small>
        <h2>{title}</h2>
      </header>
      <section>{description}.</section>

      <TicketComments />
    </article>
  );
};

export default TicketDetails;
