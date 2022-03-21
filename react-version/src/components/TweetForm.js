function TweetForm() {
  const doStuff = (e) => {
    e.preventDefault()
  }
  return (
    <section className="newtweet">
      <form onClick={doStuff} method="post" action="/tweets" className="newtweet__form">
        <textarea
          className="form__textarea"
          name="text"
          placeholder="What are you humming about?"
        ></textarea>
        <input onClick={doStuff} type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
