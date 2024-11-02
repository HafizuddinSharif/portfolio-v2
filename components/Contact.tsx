import EmailButton from "./EmailButton";
import LinkRow from "./LinkRow";
const Contact = () => {
  return (
    <div
      id="contact"
      className="text-center h-80 flex flex-col justify-center gap-4"
    >
      <h2 className="text-2xl font-bold">Interested to work with me?</h2>
      <p>
        I am always open to new opportunities and collaborations. <br /> Feel
        free to contact me via email or LinkedIn.
      </p>
      <LinkRow />
      <div className="flex flex-row justify-center mt-4">
        <EmailButton />
      </div>
    </div>
  );
};

export default Contact;
